export const _template_ = _comments_template;
export const _walks_ = /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`;
import { _setup_ as _comments, _input_comments_ as _comments_input_comments, _input_path_ as _comments_input_path, _template_ as _comments_template, _walks_ as _comments_walks } from "./tags/comments.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  const _comments_input_spread = input;
  _comments_input_comments(_scope["#childScope/0"], _comments_input_spread.comments);
  _comments_input_path(_scope["#childScope/0"], _comments_input_spread.path);
});
export function _setup_(_scope) {
  _comments(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);