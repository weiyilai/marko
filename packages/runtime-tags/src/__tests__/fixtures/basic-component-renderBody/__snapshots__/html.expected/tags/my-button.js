import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    onClick,
    content
  } = input;
  _$.write("<button>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, content, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/my-button.marko_0_onClick");
  _$.writeScope(_scope0_id, {
    "onClick": onClick,
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(content)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", _renderer);