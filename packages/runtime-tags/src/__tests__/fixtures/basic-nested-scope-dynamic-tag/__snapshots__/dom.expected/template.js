export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$falseChild_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$falseChild_content = _$.registerDynamicClosure("__tests__/template.marko_1_count/subscriber", "count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$falseChild_content_effect(_scope);
});
const _setup$falseChild_content = _scope => {
  _count$falseChild_content._(_scope);
};
const _falseChild_content = _$.registerContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get */" D ", _setup$falseChild_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _falseChild_content);
const _count = /* @__PURE__ */_$.state("count/1", (_scope, count) => _count$falseChild_content(_scope));
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTag(_scope, false || Child);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);