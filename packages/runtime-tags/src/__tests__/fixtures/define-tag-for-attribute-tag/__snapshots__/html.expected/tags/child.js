import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr({
    "selected": input.thing.selected
  })}>`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", input.thing.content, {});
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "ConditionalScope:#text/1": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/1": _$.dynamicTagId(input.thing.content)
  }, "__tests__/tags/child.marko", 0);
});