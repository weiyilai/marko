import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _customTag({
    content: _$.registerContent("__tests__/template.marko_1_renderer", (count, count2) => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<div>Counts: <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/0")},<!>${_$.escapeXML(count2)}${_$.markResumeNode(_scope1_id, "#text/1")}</div>`);
    }, _scope0_id)
  });
});