import * as _$ from "@marko/runtime-tags/debug/html";
import _helloSetter from "./tags/hello-setter.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const el = _$.nodeRef(_scope0_id, "__tests__/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _helloSetter({
    el: el
  });
  _$.writeScope(_scope0_id, {}, "__tests__/template.marko", 0);
});