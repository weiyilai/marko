import baz from "./tags/baz.marko";
import foo from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", x === 1 ? baz : foo, {});
  _$.writeScope(_scope0_id, {
    "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/0": _$.dynamicTagId(x === 1 ? baz : foo)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
});