export const _template_ = "<button class=inc-child> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_effect = _$.effect("__tests__/tags/counter.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/2", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _$.tagVarSignal(_scope, x);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 1);
  _$.setTagVarChange(_scope, _valueChange(_scope));
}
function _valueChange(_scope) {
  return _new_x => {
    _x(_scope, _new_x);
  };
}
_$.register("__tests__/tags/counter.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", _template_, _walks_, _setup_);