export const _template_ = `<!>${_child_template}<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _input_renderBody_ as _child_input_renderBody, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _count$childBody_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$childBody = _$.registerSubscriber("__tests__/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$childBody_effect(_scope);
}));
const _childBody = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_count$childBody]));
const _count = /* @__PURE__ */_$.state("count", 0, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
  _child_input_renderBody(_scope["#childScope/0"], _childBody(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);