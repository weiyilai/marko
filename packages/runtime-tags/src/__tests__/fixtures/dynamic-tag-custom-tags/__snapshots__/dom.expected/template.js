export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import child1 from "./tags/child1.marko";
import child2 from "./tags/child2.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_tagName_val = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    tagName,
    val
  } = _scope;
  _dynamicTag(_scope, tagName, () => ({
    value: val
  }));
}, () => _dynamicTag);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _val = /* @__PURE__ */_$.state("val", 0, () => _expr_tagName_val);
const _tagName_effect = _$.effect("__tests__/template.marko_0_tagName", (_scope, {
  tagName
}) => _$.on(_scope["#button/1"], "click", function () {
  _tagName(_scope, tagName === child1 ? child2 : child1);
}));
const _tagName = /* @__PURE__ */_$.state("tagName", (_scope, tagName) => _tagName_effect(_scope), () => _expr_tagName_val);
export function _setup_(_scope) {
  _tagName(_scope, child1);
  _val(_scope, 3);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);