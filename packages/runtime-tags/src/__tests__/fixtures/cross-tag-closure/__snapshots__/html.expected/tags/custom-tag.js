import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    style
  } = input;
  _$.write(`<div${_$.styleAttr(style)}></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _renderer);