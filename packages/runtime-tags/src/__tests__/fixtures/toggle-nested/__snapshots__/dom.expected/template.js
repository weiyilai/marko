export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value2$if_content = /* @__PURE__ */_$.dynamicClosureRead("value2", (_scope, value2) => _$.data(_scope["#text/0"], value2), _scope => _scope._._);
const _if_content3 = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, _scope => _value2$if_content(_scope));
const _value1$if_content = /* @__PURE__ */_$.dynamicClosureRead("value1", (_scope, value1) => _$.data(_scope["#text/0"], value1), _scope => _scope._._);
const _if_content2 = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, _scope => _value1$if_content(_scope));
const _if$if_content2 = /* @__PURE__ */_$.conditional("#text/1", _if_content3);
const _if$if_content = /* @__PURE__ */_$.conditional("#text/0", _if_content2);
const _value2$if_content2 = /* @__PURE__ */_$.conditionalClosure("value2", "#div/0", 0, (_scope, value2) => _if$if_content2(_scope, value2 ? 0 : 1));
const _value1$if_content2 = /* @__PURE__ */_$.conditionalClosure("value1", "#div/0", 0, (_scope, value1) => _if$if_content(_scope, value1 ? 0 : 1));
const _if_content = /* @__PURE__ */_$.createRenderer("<!><!><!><!>", /* replace, over(1), replace */"D%b%D", 0, 0, _scope => {
  _value1$if_content2._(_scope);
  _value2$if_content2._(_scope);
});
const _if = /* @__PURE__ */_$.conditional("#div/0", _if_content);
const _value2__closure = /* @__PURE__ */_$.dynamicClosure(_value2$if_content);
export const _value2_ = /* @__PURE__ */_$.value("value2", (_scope, value2) => {
  _value2$if_content2(_scope);
  _value2__closure(_scope);
});
const _value1__closure = /* @__PURE__ */_$.dynamicClosure(_value1$if_content);
export const _value1_ = /* @__PURE__ */_$.value("value1", (_scope, value1) => {
  _value1$if_content2(_scope);
  _value1__closure(_scope);
});
export const _show_ = /* @__PURE__ */_$.value("show", (_scope, show) => _if(_scope, show ? 0 : 1));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _show_(_scope, input.show);
  _value1_(_scope, input.value1);
  _value2_(_scope, input.value2);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);