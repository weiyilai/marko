export const _template_ = "<div><span> </span></div>";
export const _walks_ = /* next(2), get, out(2) */"E m";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_x_ = /* @__PURE__ */_$.value("input_x", (_scope, input_x) => _$.data(_scope["#text/0"], input_x));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_x_(_scope, input.x));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);