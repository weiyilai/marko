export const _template_ = "";
export const _walks_ = "";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _el__effect = _$.effect("__tests__/tags/hello-setter.marko_0_el", ({
  el
}) => (el().textContent = "hello"));
export const _el_ = /* @__PURE__ */_$.value("el", (_scope, el) => _el__effect(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _el_(_scope, input.el));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello-setter.marko", _template_, _walks_, _setup_, _input_);