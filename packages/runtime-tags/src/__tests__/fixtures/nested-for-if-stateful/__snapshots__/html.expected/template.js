import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _counts_closures = new Set();
  const _scope1_ = new Map();
  let counts = [0, 0, 0];
  _$.resumeSingleNodeForOf(counts, (count, i) => {
    const _scope1_id = _$.nextScopeId();
    let _ifScopeId, _ifBranch;
    let editing = false;
    _$.resumeSingleNodeConditional(() => {
      if (editing) {
        const _scope2_id = _$.nextScopeId();
        _$.write(`<button>Confirm <!>${_$.escapeXML(count + 1)}${_$.markResumeNode(_scope2_id, "#text/1")}</button>${_$.markResumeNode(_scope2_id, "#button/0")}`);
        _$.writeEffect(_scope2_id, "__tests__/template.marko_2_counts_count_i");
        _$.writeSubscribe(_counts_closures, _$.writeScope(_scope2_id, {
          _: _$.ensureScopeWithId(_scope1_id),
          "ClosureSignalIndex:counts": 0
        }, "__tests__/template.marko", "4:4"));
        _ifBranch = 0;
        _ifScopeId = _scope2_id;
      } else {
        const _scope3_id = _$.nextScopeId();
        _$.write(`<button>Increment <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope3_id, "#text/1")}</button>${_$.markResumeNode(_scope3_id, "#button/0")}`);
        _$.writeEffect(_scope3_id, "__tests__/template.marko_3");
        _$.writeScope(_scope3_id, {
          _: _$.ensureScopeWithId(_scope1_id)
        }, "__tests__/template.marko", "12:4");
        _ifBranch = 1;
        _ifScopeId = _scope3_id;
      }
    }, _scope1_id, "#text/0");
    _scope1_.set(i, _$.ensureScopeWithId(_scope1_id));
    _$.writeScope(_scope1_id, {
      count,
      i,
      _: _$.ensureScopeWithId(_scope0_id),
      "ConditionalRenderer:#text/0": _ifBranch,
      "ConditionalScope:#text/0": _$.getScopeById(_ifScopeId)
    }, "__tests__/template.marko", "2:2", {
      count: "2:6",
      i: "2:13"
    });
  }, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {
    counts,
    "ClosureScopes:counts": _counts_closures,
    "LoopScopeMap:#text/0": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0, {
    counts: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});