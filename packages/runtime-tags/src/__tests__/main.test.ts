import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import type { Input, Template } from "@marko/runtime-tags/common/types";
import assert from "assert";
import fs from "fs";
import snap from "mocha-snap";
import path from "path";
import glob from "tiny-glob";
import { isDeepStrictEqual } from "util";

import * as translator from "../translator";
import { bundle } from "./utils/bundle";
import createBrowser from "./utils/create-browser";
import { isThrows, isWait } from "./utils/resolve";
import { stripInlineRuntime } from "./utils/strip-inline-runtime";
import createMutationTracker from "./utils/track-mutations";

type TestConfig = {
  steps?: unknown[] | (() => Promise<unknown[]>);
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  skip_equivalent?: boolean;
  skip_resume?: boolean;
  manual_csr?: boolean;
  manual_ssr?: boolean;
  manual_resume?: boolean;
  error_compiler?: true | string[];
  error_runtime?: boolean;
};

type TestHooks = {
  before?: () => void;
  after?: () => void;
};

const baseConfig: compiler.Config = {
  translator,
  babelConfig: {
    babelrc: false,
    configFile: false,
  },
  writeVersionComment: false,
};

const htmlConfig: compiler.Config = { ...baseConfig, output: "html" };
const domConfig: compiler.Config = { ...baseConfig, output: "dom" };
const snapCache = new Map<unknown, unknown>();

describe("runtime-tags/translator", () => {
  before(() => {
    register({ ...htmlConfig, modules: "cjs" });
  });

  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const relativeFixtureDir = path.relative(process.cwd(), fixtureDir);
      const serverFile = resolve("server.ts");
      const resumeFile = resolve("resume.ts");
      const browserFile = resolve("browser.ts");
      const templateFile = resolve("template.marko");
      const hasTemplate = fs.existsSync(templateFile);
      const snapshotsDir = resolve("__snapshots__");
      const nameCacheFile = path.join(snapshotsDir, ".name-cache.json");
      const nameCache = (() => {
        try {
          return JSON.parse(fs.readFileSync(nameCacheFile, "utf-8")) as Record<
            string,
            unknown
          >;
        } catch {
          try {
            fs.mkdirSync(snapshotsDir, { recursive: true });
          } catch {
            // ignore
          }
          return {};
        }
      })();
      const initialNameCache = structuredClone(nameCache);
      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
        } catch {
          return {};
        }
      })();
      const skipHTML = !hasTemplate || config.skip_html;
      const skipDOM = !hasTemplate || config.skip_dom;

      const manualSSR = skipHTML || config.manual_ssr;
      const manualCSR = skipDOM || config.manual_csr;
      const manualResume = skipHTML || skipDOM || config.manual_resume;

      const skipSSR =
        !(manualSSR ? fs.existsSync(serverFile) : hasTemplate) ||
        config.skip_ssr ||
        config.error_compiler;
      const skipCSR =
        !(manualCSR ? fs.existsSync(browserFile) : hasTemplate) ||
        config.skip_csr ||
        config.error_compiler;
      const skipResume =
        config.skip_resume !== false &&
        (!(manualResume ? fs.existsSync(resumeFile) : hasTemplate) ||
          config.skip_resume ||
          skipSSR ||
          skipCSR);
      const skipEquivalent = config.skip_equivalent || skipCSR || skipResume;
      const stripFixtureDir = async (str: string | Promise<string>) =>
        (await str).replaceAll(relativeFixtureDir, "__tests__");
      const snapMD = (fn: () => Promise<string>) =>
        (config.error_runtime ? snap.catch : snap)(
          () => stripFixtureDir(fn()),
          {
            ext: `.md`,
            dir: fixtureDir,
          },
        );
      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        const additionalMarkoFiles = await glob(resolve("**/*.marko"), {
          absolute: true,
          cwd: fixtureDir,
        });
        const finalConfig: compiler.Config = {
          ...compilerConfig,
          cache: snapCache, // these need a different cache since they `resolveVirtualDependency` is relevant to the compile cache.
          resolveVirtualDependency(_filename, { code, virtualPath }) {
            return `virtual:${virtualPath} ${code}`;
          },
        };
        const errors: Error[] = [];

        for (const file of additionalMarkoFiles) {
          try {
            const name = path.relative(fixtureDir, file);
            let snapName = name;
            let targetSnap: typeof snap.catch = snap;
            if (
              config.error_compiler === true ||
              config.error_compiler?.includes(name)
            ) {
              snapName = name.replace(".marko", ".error.txt");
              targetSnap = snap.catch;
            } else {
              snapName = name.replace(".marko", ".js");
            }

            await targetSnap(
              () => stripFixtureDir(compileCode(file, finalConfig)),
              {
                file: snapName,
                dir: fixtureDir,
              },
            );

            if (
              compilerConfig.output === "dom" &&
              file === templateFile &&
              !skipResume &&
              !config.error_compiler
            ) {
              await targetSnap(
                () => stripFixtureDir(bundle(file, nameCache, finalConfig)),
                {
                  file: name.replace(".marko", ".hydrate.js"),
                  dir: fixtureDir,
                },
              );
            }
          } catch (e) {
            errors.push(e as Error);
          }
        }

        if (errors.length === 1) {
          throw errors[0];
        } else if (errors.length > 1) {
          console.error(errors);
          throw new AggregateError(
            errors,
            "\n" + errors.map((e) => e.toString()).join("\n"),
          );
        }
      };
      let ssr = () => {
        const cached = (async () => {
          const hooks: TestHooks = (() => {
            try {
              return require(resolve("hooks.ts"));
            } catch {
              return {};
            }
          })();

          hooks.before?.();

          const serverTemplate = require(manualSSR ? serverFile : templateFile)
            .default as Template;

          let buffer = "";
          // let flushCount = 0;

          const browser = createBrowser({
            dir: __dirname,
            extensions: register({
              ...domConfig,
              modules: "cjs",
              extensions: {},
            }),
          });
          const document = browser.window.document;
          const [input = {}] = (
            typeof config.steps === "function"
              ? await config.steps()
              : config.steps || []
          ) as [Input];

          document.open();

          const tracker = createMutationTracker(browser.window, document);

          for await (const data of serverTemplate.render(input)) {
            const formattedHtml = indent(stripInlineRuntime(data));
            if (formattedHtml) {
              tracker.log(`# Write\n\`\`\`html\n${formattedHtml}\n\`\`\``);
            }

            buffer += data;
          }
          document.write(buffer);
          document.close();
          tracker.logUpdate("End", true);

          tracker.cleanup();

          hooks.after?.();

          return { browser, tracker };
        })();
        ssr = () => cached;
        return cached;
      };

      let csr = () => {
        const cached = (async () => {
          const browser = createBrowser({
            dir: __dirname,
            extensions: register({
              ...domConfig,
              extensions: {},
            }),
          });

          const hooks: TestHooks = (() => {
            try {
              return browser.require(resolve("hooks.ts"));
            } catch {
              return {};
            }
          })();

          hooks.before?.();

          const { window } = browser;
          const { document } = window;
          const [input, ...steps] = (
            typeof config.steps === "function"
              ? await config.steps()
              : config.steps || []
          ) as [Input, ...unknown[]];
          const { run } = browser.require<
            typeof import("@marko/runtime-tags/dom")
          >("@marko/runtime-tags/dom");
          const template = browser.require<{ default: Template }>(
            manualCSR ? browserFile : templateFile,
          ).default;
          const container = document.createElement("div");
          const tracker = createMutationTracker(browser.window, container);

          document.body.appendChild(container);

          const instance = template.mount(input, container, "afterbegin");
          tracker.logUpdate(input);

          for (const update of steps) {
            if (isWait(update)) {
              await update();
            } else if (typeof update === "function") {
              tracker.beginUpdate();
              await update(document.documentElement);
              if (isThrows(update)) {
                try {
                  run();
                  throw new Error("Expected error to be thrown");
                } catch (err) {
                  tracker.logError(update, err as Error);
                  break;
                }
              } else {
                run();
                await 1; // allow a microtask before we log the update in order to catch mutation observers.
                tracker.logUpdate(update);
              }
            } else {
              instance.update(update);
              tracker.logUpdate(update);
            }
          }

          tracker.cleanup();

          hooks.after?.();
          return { browser, tracker };
        })();
        csr = () => cached;
        return cached;
      };

      let resume = () => {
        const cached = (async () => {
          const { browser } = await ssr();
          const { window } = browser;
          const { document } = window;
          const tracker = createMutationTracker(window, document);
          const [input, ...steps] =
            typeof config.steps === "function"
              ? await config.steps()
              : config.steps || [];

          // TODO: when this is removed, the resume test will fail if run by itself... why?
          await new Promise((resolve) => setTimeout(resolve, 10));

          const { run, init } = browser.require<
            typeof import("@marko/runtime-tags/dom")
          >("@marko/runtime-tags/dom");

          browser.require(manualResume ? resumeFile : templateFile);
          init();
          tracker.logUpdate(input);

          for (const update of steps) {
            if (isWait(update)) {
              await update();
            } else if (typeof update === "function") {
              tracker.beginUpdate();
              await update(document.documentElement);
              run();
              await 1; // allow a microtask before we log the update in order to catch mutation observers
              tracker.logUpdate(update);
            } else {
              // if new input is detected, stop testing
              // this will be covered by the client tests
              break;
            }
          }

          tracker.cleanup();

          return { browser, tracker };
        })();
        resume = () => cached;
        return cached;
      };

      after(() => {
        if (!isDeepStrictEqual(initialNameCache, nameCache)) {
          fs.writeFileSync(
            nameCacheFile,
            JSON.stringify(nameCache, null, 2) + "\n",
          );
        }
      });

      describe("compile", () => {
        (skipHTML ? it.skip : it)("html", () => snapAllTemplates(htmlConfig));

        (skipDOM ? it.skip : it)("dom", () => snapAllTemplates(domConfig));
      });

      describe("render", () => {
        (skipSSR ? it.skip : it)("ssr", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs());
        });

        (skipResume ? it.skip : it)("resume", async () => {
          await snapMD(async () => (await resume()).tracker.getLogs());
        });

        (skipCSR ? it.skip : it)("csr", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs());
        });
      });

      describe("sanitized", () => {
        (skipSSR ? it.skip : it)("ssr-sanitized", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs(true));
        });

        (skipResume ? it.skip : it)("resume-sanitized", async () => {
          await snapMD(async () => (await resume()).tracker.getLogs(true));
        });

        (skipCSR ? it.skip : it)("csr-sanitized", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs(true));
        });

        (skipEquivalent ? it.skip : it)("equivalent", async () => {
          if (config.error_runtime) {
            const resumeError = (await resume()
              .then(() => undefined)
              .catch((err) => err)) as Error | undefined;
            const csrError = (await csr()
              .then(() => undefined)
              .catch((err) => err)) as Error | undefined;
            if (!resumeError) throw new Error("Resume did not error.");
            if (!csrError) throw new Error("CSR did not error.");
            assert.strictEqual(resumeError.message, csrError.message);
            return;
          }

          const resumeLogs = (await resume()).tracker.getRawLogs(true);
          // when the steps for a test contains more than one input,
          // the updates are not run for the resume test
          // so we trim the csrLogs to match the number of resumeLogs
          const isAsyncRender = isWait((config.steps as unknown[])?.[1]);
          let csrLogs = [...(await csr()).tracker.getRawLogs(true)];
          let skip = 0;
          if (isAsyncRender) {
            while (csrLogs[skip + 1]?.startsWith(`# Render ASYNC`)) {
              skip++;
            }
            for (const resumeLog of resumeLogs.slice(1)) {
              if (resumeLog.startsWith(`# Render ASYNC`)) {
                skip--;
              } else {
                break;
              }
            }
            csrLogs[skip] = csrLogs[skip].replace(`# Render ASYNC`, `# Render`);
          }
          csrLogs = csrLogs.slice(skip, resumeLogs.length + skip);
          assert.strictEqual(
            csrLogs.join("\n\n").replace(/[cs]M_[a-z0-9]+/g, "%id"),
            resumeLogs.join("\n\n").replace(/[cs]M_[a-z0-9]+/g, "%id"),
          );
        });
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
}
