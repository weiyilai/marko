import { types as t } from "@marko/compiler";
import {
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import path from "path";

import { bindingHasDownstreamExpressions } from "../../util/binding-has-downstream-expressions";
import entryBuilder from "../../util/entry-builder";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import {
  type Binding,
  BindingType,
  finalizeReferences,
  trackParamsReferences,
} from "../../util/references";
import { getCompatRuntimeFile } from "../../util/runtime";
import { startSection } from "../../util/sections";
import type { TemplateVisitor } from "../../util/visitors";
import programDOM from "./dom";
import programHTML from "./html";

export let currentProgramPath: t.NodePath<t.Program>;
export let cleanIdentifier: t.Identifier;
export let scopeIdentifier: t.Identifier;
export function isScopeIdentifier(node: t.Node): node is t.Identifier {
  return node === scopeIdentifier;
}
const previousProgramPath: WeakMap<
  t.NodePath<t.Program>,
  t.NodePath<t.Program> | undefined
> = new WeakMap();

export type TemplateExport = {
  id: string;
  binding: Binding;
  props: { [prop: string]: TemplateExport } | undefined;
};
export type TemplateExports = TemplateExport["props"];

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    domExports?: {
      template: string;
      walks: string;
      setup: string;
      input: TemplateExport | undefined;
      closures: string;
    };
  }
}

export default {
  migrate: {
    enter(program) {
      previousProgramPath.set(program, currentProgramPath);
      program.node.params = [t.identifier("input")];
      currentProgramPath = program;
    },
    exit() {
      currentProgramPath.scope.crawl();
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
  analyze: {
    enter(program) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      startSection(program);
      trackParamsReferences(program, BindingType.input);

      const inputBinding = program.node.params[0].extra?.binding;
      if (inputBinding) {
        inputBinding.nullable = false;
      }

      const { scope } = program;
      // TODO: make any exports undefined if they are noops/empty
      (program.node.extra ??= {}).domExports = {
        template: scope.generateUid("template_"),
        walks: scope.generateUid("walks_"),
        setup: scope.generateUid("setup_"),
        input: undefined, // TODO look into recursive components with fine grained params.
        closures: scope.generateUid("closures_"),
      };
    },

    exit(program) {
      finalizeReferences();
      const programExtra = program.node.extra;
      const inputBinding = program.node.params[0].extra?.binding;
      if (inputBinding && bindingHasDownstreamExpressions(inputBinding)) {
        programExtra.domExports!.input = buildTemplateExports(inputBinding);
      }
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
  translate: {
    enter(program) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      scopeIdentifier = isOutputDOM()
        ? program.scope.generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      cleanIdentifier = isOutputDOM()
        ? program.scope.generateUidIdentifier("clean")
        : (null as any as t.Identifier);
      if (getMarkoOpts().output === "hydrate") {
        const entryFile = program.hub.file;
        const visitedFiles = new Set([
          resolveRelativePath(entryFile, entryFile.opts.filename as string),
        ]);
        entryBuilder.visit(entryFile, entryFile, function visitChild(resolved) {
          if (!visitedFiles.has(resolved)) {
            visitedFiles.add(resolved);
            const file = loadFileForImport(entryFile, resolved);
            if (file) {
              entryBuilder.visit(file, entryFile, (id) =>
                visitChild(resolveRelativeToEntry(entryFile, file, id)),
              );
            }
          }
        });

        program.node.body = entryBuilder.build(entryFile);
        program.skip();
        return;
      }
    },
    exit(program) {
      if (isOutputHTML()) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }

      if (program.node.extra?.needsCompat) {
        const compatFile = getCompatRuntimeFile();
        const body: [undefined | t.Statement, ...t.Statement[]] = [undefined];

        for (const child of program.node.body) {
          if (
            child.type === "ImportDeclaration" &&
            child.source.value === compatFile
          ) {
            body[0] = child;
          } else {
            body.push(child);
          }
        }

        body[0] ??= t.importDeclaration([], t.stringLiteral(compatFile));
        program.node.body = body as t.Statement[];
      }
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
} satisfies TemplateVisitor<t.Program>;

function resolveRelativeToEntry(
  entryFile: t.BabelFile,
  file: t.BabelFile,
  req: string,
) {
  return file === entryFile
    ? resolveRelativePath(file, req)
    : resolveRelativePath(
        entryFile,
        req[0] === "."
          ? path.join(file.opts.filename as string, "..", req)
          : req,
      );
}

function buildTemplateExports(binding: Binding) {
  const templateExport: TemplateExport = {
    id: (binding.export ??= currentProgramPath.scope.generateUid(
      binding.name + "_",
    )),
    binding,
    props: undefined,
  };
  if (!(binding.aliases.size || binding.downstreamExpressions.size)) {
    templateExport.props = {};
    for (const [property, alias] of binding.propertyAliases) {
      templateExport.props[property] = buildTemplateExports(alias);
    }
  }

  return templateExport;
}
