import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import { getDynamicSourcesForSection } from "../util/dynamic-sources";
import { getAccessorPrefix } from "../util/get-accessor-char";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { getParentTag } from "../util/get-parent-tag";
import {
  getOptimizedOnlyChildNodeRef,
  isOnlyChildInParent,
} from "../util/is-only-child-in-parent";
import {
  BindingType,
  dropReferences,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  ContentType,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  isSectionWithHoists,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  addValue,
  getSignal,
  setClosureSignalBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { kSerializeMarker } from "../visitors/tag/native-tag";

type ForType = "in" | "of" | "to";

export default {
  analyze(tag) {
    const tagExtra = (tag.node.extra ??= {});
    const isAttrTag = tag.node.body.attributeTags;
    let allowAttrs: string[];
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoSpreadAttrs(tag);

    switch (getForType(tag.node)) {
      case "of":
        allowAttrs = ["of"];
        break;
      case "in":
        allowAttrs = ["in"];
        break;
      case "to":
        allowAttrs = ["to", "from", "step"];
        break;
      default:
        throw tag.buildCodeFrameError(
          "Invalid `for` tag, missing an `of=`, `in=`, `to=` attribute.",
        );
    }

    if (!isAttrTag) {
      allowAttrs.push("by");
    }

    assertAllowedAttributes(tag, allowAttrs);

    if (isAttrTag) return;

    const tagBody = tag.get("body");
    const bodySection = startSection(tagBody);

    if (!bodySection) {
      dropReferences(getAllTagReferenceNodes(tag.node));
      return;
    }

    const section = getOrCreateSection(tag);
    trackParamsReferences(tagBody, BindingType.param, undefined, tagExtra);
    mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));

    bodySection.sectionAccessor = {
      binding: getOptimizedOnlyChildNodeRef(tag, section),
      prefix: getAccessorPrefix().LoopScopeMap,
    };

    bodySection.upstreamExpression = tagExtra;
    bodySection.isBranch = true;
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);

        if (!isOnlyChildInParent(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }

        writer.flushBefore(tag);
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const tagSection = getSection(tag);
        const bodySection = getSectionForBody(tagBody)!;
        const { node } = tag;
        const onlyChildInParentOptimization = isOnlyChildInParent(tag);
        const nodeRef = getOptimizedOnlyChildNodeRef(tag, tagSection);
        const forAttrs = getKnownAttrValues(node);
        const forType = getForType(node)!;
        const params = node.body.params;
        const statements: t.Statement[] = [];
        const bodyStatements = node.body.body as t.Statement[];
        const sectionSources = getDynamicSourcesForSection(bodySection);
        const hasHoists = isSectionWithHoists(bodySection);
        const serializeReason = hasHoists || sectionSources?.all;
        const singleNodeOptimization =
          bodySection.content === null ||
          (bodySection.content.singleChild &&
            bodySection.content.startType !== ContentType.Text);

        if (serializeReason && onlyChildInParentOptimization) {
          getParentTag(tag)!.node.extra![kSerializeMarker] = false;
        }

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        const forTagArgs = getBaseArgsInForTag(forType, forAttrs);
        const forTagHTMLRuntime = serializeReason
          ? forTypeToHTMLResumeRuntime(forType, singleNodeOptimization)
          : forTypeToRuntime(forType);
        forTagArgs.push(
          t.arrowFunctionExpression(params, t.blockStatement(bodyStatements)),
        );

        if (serializeReason) {
          forTagArgs.push(
            forAttrs.by || t.numericLiteral(0),
            getScopeIdIdentifier(tagSection),
            getScopeAccessorLiteral(nodeRef),
          );

          if (onlyChildInParentOptimization) {
            forTagArgs.push(t.numericLiteral(1));
          }
        }

        statements.push(
          t.expressionStatement(callRuntime(forTagHTMLRuntime, ...forTagArgs)),
        );

        for (const replacement of tag.replaceWithMultiple(statements)) {
          replacement.skip();
        }
      },
    },
    dom: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);

        if (!isOnlyChildInParent(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const tagSection = getSection(tag);
        const bodySection = getSectionForBody(tagBody)!;
        const { node } = tag;
        const tagExtra = node.extra!;
        const { referencedBindings } = tagExtra;
        const nodeRef = getOptimizedOnlyChildNodeRef(tag, tagSection);
        setClosureSignalBuilder(tag, (closure, render) => {
          return callRuntime(
            "loopClosure",
            getScopeAccessorLiteral(closure),
            getScopeAccessorLiteral(nodeRef),
            render,
          );
        });

        const forType = getForType(node)!;
        const signal = getSignal(tagSection, nodeRef, "for");
        signal.build = () => {
          return callRuntime(
            forTypeToDOMRuntime(forType),
            getScopeAccessorLiteral(nodeRef),
            t.identifier(bodySection.name),
          );
        };

        const params = node.body.params;
        signal.hasDownstreamIntersections = () => {
          for (const param of params) {
            const binding = param.extra?.binding;
            if (binding) {
              for (const {
                referencedBindings,
              } of binding.downstreamExpressions) {
                if (
                  getSignal(
                    bodySection,
                    referencedBindings,
                  ).hasDownstreamIntersections()
                ) {
                  return true;
                }
              }
            }
          }

          return false;
        };

        const forAttrs = getKnownAttrValues(node);
        const loopArgs = getBaseArgsInForTag(forType, forAttrs);
        if (forAttrs.by) {
          loopArgs.push(forAttrs.by);
        }

        addValue(
          tagSection,
          referencedBindings,
          signal,
          t.arrayExpression(loopArgs),
        );

        tag.remove();
      },
    },
  }),
  parseOptions: { controlFlow: true },
  attributes: {
    of: {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over a list of items.",
        },
      ],
    },
    in: {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over the keys and values of an object.",
        },
      ],
    },
    to: {
      type: "number",
      autocomplete: [
        {
          description: "Iterates up to the provided number (inclusive)",
        },
      ],
    },
    from: {
      type: "number",
      autocomplete: [
        {
          description: "Iterates starting from the provided number (inclusive)",
        },
      ],
    },
    step: {
      type: "number",
      autocomplete: [
        {
          description:
            "The amount to increment during each interation (with from/to)",
        },
      ],
    },
  },
  autocomplete: [
    {
      snippet: "for|${1:value, index}| of=${3:array}",
      description:
        "Use to iterate over lists, object properties, or between ranges.",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-over-a-list",
    },
    {
      snippet: "for|${1:name, value}| in=${3:object}",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-over-an-objects-properties",
    },
    {
      snippet: "for|${1:index}| to=${2:number}",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-between-a-range-of-numbers",
    },
  ],
} satisfies Tag;

export function buildForRuntimeCall(
  type: ForType,
  attrs: Record<string, t.Expression>,
  params: t.ArrowFunctionExpression["params"],
  statements: t.Statement[],
) {
  return t.expressionStatement(
    callRuntime(
      forTypeToRuntime(type),
      ...getBaseArgsInForTag(type, attrs),
      t.arrowFunctionExpression(params, t.blockStatement(statements)),
    ),
  );
}

export function getForType(tag: t.MarkoTag): ForType | undefined {
  for (const attr of tag.attributes) {
    if (attr.type === "MarkoAttribute") {
      switch (attr.name) {
        case "of":
        case "in":
        case "to":
          return attr.name;
      }
    }
  }
}

function forTypeToRuntime(type: ForType) {
  switch (type) {
    case "of":
      return "forOf";
    case "in":
      return "forIn";
    case "to":
      return "forTo";
  }
}

function forTypeToHTMLResumeRuntime(
  type: ForType,
  singleNodeOptimization: boolean,
) {
  if (singleNodeOptimization) {
    switch (type) {
      case "of":
        return "resumeSingleNodeForOf";
      case "in":
        return "resumeSingleNodeForIn";
      case "to":
        return "resumeSingleNodeForTo";
    }
  } else {
    switch (type) {
      case "of":
        return "resumeForOf";
      case "in":
        return "resumeForIn";
      case "to":
        return "resumeForTo";
    }
  }
}

function forTypeToDOMRuntime(type: ForType) {
  switch (type) {
    case "of":
      return "loopOf";
    case "in":
      return "loopIn";
    case "to":
      return "loopTo";
  }
}

function getBaseArgsInForTag(
  type: ForType,
  attrs: Record<string, t.Expression>,
) {
  switch (type) {
    case "in":
      return [attrs.in];
    case "of":
      return [attrs.of];
    case "to":
      return [
        attrs.to,
        attrs.from || t.numericLiteral(0),
        attrs.step || t.numericLiteral(1),
      ];
  }
}
