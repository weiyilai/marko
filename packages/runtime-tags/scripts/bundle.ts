import { build } from "esbuild";
import fs from "fs";
import path from "path";

const absWorkingDir = path.join(__dirname, "..");

Promise.all([
  // Build translator
  build({
    format: "cjs",
    bundle: true,
    absWorkingDir,
    outdir: "dist/translator",
    sourcemap: false,
    platform: "node",
    packages: "external",
    external: [path.join(absWorkingDir, "package.json")],
    entryPoints: ["src/translator/index.ts"],
    define: {
      MARKO_DEBUG: "false",
    },
  }),
  // Build runtime
  ...["dist/debug", "dist"].flatMap((env) =>
    ["dom", "html"].flatMap((name) => {
      (["esm", "cjs"] as const).map(async (format) => {
        const isProd = env === "dist";
        const outdir = path.join(absWorkingDir, env);
        const { metafile } = await build({
          format,
          outdir,
          absWorkingDir,
          bundle: true,
          metafile: true,
          sourcemap: false,
          minifySyntax: isProd,
          entryPoints: [`src/${name}.ts`],
          define: { MARKO_DEBUG: String(!isProd) },
          mangleProps: isProd ? /^___/ : undefined,
          platform: name === "dom" ? "browser" : "node",
          outExtension: { ".js": format === "esm" ? ".mjs" : ".js" },
          plugins: isProd
            ? [
                {
                  name: "remap-debug",
                  setup(build) {
                    build.onResolve(
                      { filter: /^\..*\.debug$/ },
                      ({ path, ...args }) =>
                        build.resolve(path.replace(/\.debug$/, ""), args),
                    );
                  },
                },
              ]
            : undefined,
        });

        await Promise.all([
          fs.promises.writeFile(
            `${outdir}/meta.${format}.json`,
            JSON.stringify(metafile),
          ),
        ]);
      });
    }),
  ),
]).catch((err) => {
  console.error(err);
  process.exit(1);
});
