import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-let.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let value = input.value;
  const _return = value;
  _$.writeScope(_scope0_id, {
    "#TagVariableChange": _$.register(_new_value => {
      value = _new_value;
    }, "__tests__/tags/my-let.marko_0/valueChange", _scope0_id)
  }, "__tests__/tags/my-let.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
  return _return;
});