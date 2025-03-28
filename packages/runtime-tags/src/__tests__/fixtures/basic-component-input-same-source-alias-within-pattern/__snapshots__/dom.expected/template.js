export const _template_ = `${_myButton_template}${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild, beginChild, _myButton_walks, endChild */`/${_myButton_walks}&/${_myButton_walks}&`;
import { _setup_ as _myButton, _pattern__ as _myButton_input_value, _onClick_ as _myButton_input_onClick, _template_ as _myButton_template, _walks_ as _myButton_walks, _text_ as _myButton_input_value_text } from "./tags/my-button.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount = /* @__PURE__ */_$.state("clickCount/2", (_scope, clickCount) => {
  _myButton_input_value(_scope["#childScope/0"], {
    text: clickCount
  });
  _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope));
  _myButton_input_value_text(_scope["#childScope/1"], clickCount);
  _myButton_input_onClick(_scope["#childScope/1"], _onClick2(_scope));
});
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _myButton(_scope["#childScope/1"]);
  _clickCount(_scope, 0);
}
function _onClick(_scope, {
  clickCount
} = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  };
}
function _onClick2(_scope, {
  clickCount
} = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  };
}
_$.register("__tests__/template.marko_0/onClick", _onClick);
_$.register("__tests__/template.marko_0/onClick_0", _onClick2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);