export const _template_ = "<div><button>Inc</button></div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value$await_content3 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_4$await_content = /* @__PURE__ */_$.value("_params_4", (_scope, _params_4) => _value$await_content3(_scope, _params_4[0]));
const _count$await_content3 = /* @__PURE__ */_$.dynamicClosureRead("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _await_content3 = /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", 0, _params_4$await_content, _scope => _count$await_content3(_scope));
const _value$await_content2 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_3$await_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _value$await_content2(_scope, _params_3[0]));
const _count$await_content2 = /* @__PURE__ */_$.dynamicClosureRead("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _await_content2 = /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", 0, _params_3$await_content, _scope => _count$await_content2(_scope));
const _value$await_content = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_2$await_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _value$await_content(_scope, _params_2[0]));
const _count$await_content = /* @__PURE__ */_$.dynamicClosureRead("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _await_content = /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", 0, _params_2$await_content, _scope => _count$await_content(_scope));
const _count_closure = /* @__PURE__ */_$.dynamicClosure(_count$await_content, _count$await_content2, _count$await_content3);
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/1", (_scope, count) => {
  _count_closure(_scope);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);