import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<script type=importmap>
  {
    "imports": {
      "${_$.escapeScript(count)}": "https://markojs.com",
    }
  }
</script>${_$.markResumeNode(_scope0_id, "#script/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});