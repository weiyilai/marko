import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  let selected = 0;
  _$.forOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (num, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_index, _$.ensureScopeWithId(_scope1_id));
    _$.write(`<button${_$.attr("data-selected", selected === num)}${_$.attr("data-multiple", num % selected === 0)}>${_$.escapeXML(num)}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_num");
    _$.writeScope(_scope1_id, {
      num,
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "3:2", {
      num: "3:6"
    });
  });
  _$.writeScope(_scope0_id, {
    "LoopScopeMap:#text/0": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
});