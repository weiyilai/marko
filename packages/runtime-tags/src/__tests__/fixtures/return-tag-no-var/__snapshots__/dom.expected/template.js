export const _template_ = _child_template;
export const _walks_ = /* beginChild, _child_walks, endChild */`/${_child_walks}&`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);