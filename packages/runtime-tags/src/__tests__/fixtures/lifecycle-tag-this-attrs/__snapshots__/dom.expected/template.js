export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_$.state("x/1", (_scope, x) => _$.data(_scope["#text/0"], x));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.lifecycle(_scope, "_lifecycle", {
  x: 1,
  setX: function (value) {
    _x(_scope, value);
  },
  onMount: function () {
    this.setX(this.x);
  }
}));
export function _setup_(_scope) {
  _x(_scope, 0);
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);