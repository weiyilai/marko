export const _template_ = `<div></div>${_foo_template}<!><!>`;
export const _walks_ = /* over(1), beginChild, _foo_walks, endChild, replace, over(1) */`b/${_foo_walks}&%bD`;
const div = "span";
const foo = "div";
const Bar = "div";
import { _setup_ as _foo, _template_ as _foo_template, _walks_ as _foo_walks } from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export function _setup_(_scope) {
  _foo(_scope["#childScope/0"]);
  _dynamicTag(_scope, Bar);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);