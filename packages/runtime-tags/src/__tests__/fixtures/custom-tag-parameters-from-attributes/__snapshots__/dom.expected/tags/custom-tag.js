export const _template_ = "<button class=inc> </button><!><!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_content_input_name_x = /* @__PURE__ */_$.intersection(3, _scope => {
  const {
    input_content,
    input_name,
    x
  } = _scope;
  _dynamicTag(_scope, input_content, () => ({
    count: x,
    name: input_name
  }));
}, () => _dynamicTag);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2");
const _x_effect = _$.effect("__tests__/tags/custom-tag.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _x_effect(_scope);
}, () => _expr_input_content_input_name_x);
export const _input_name_ = /* @__PURE__ */_$.value("input_name", 0, () => _expr_input_content_input_name_x);
export const _input_content_ = /* @__PURE__ */_$.value("input_content", 0, () => _expr_input_content_input_name_x);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_content_(_scope, input.content);
  _input_name_(_scope, input.name);
}, () => _$.intersections([_input_content_, _input_name_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _template_, _walks_, _setup_, () => _params__);