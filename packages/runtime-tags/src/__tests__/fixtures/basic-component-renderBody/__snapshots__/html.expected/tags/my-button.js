import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    onClick,
    content
  } = input;
  _$.write("<button>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", content, {});
  _$.write(`</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/my-button.marko_0_onClick");
  _$.writeScope(_scope0_id, {
    onClick,
    "ConditionalScope:#text/1": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/1": _$.dynamicTagId(content)
  }, "__tests__/tags/my-button.marko", 0, {
    onClick: "1:10"
  });
});