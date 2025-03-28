import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_el = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_el/hoist");
  const _child_content_subscribers = new Set();
  const _hoisted_el3 = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_el3/hoist");
  const _inputShowChildNull_content_subscribers = new Set();
  const _inputShowSectionNull_content_subscribers = new Set();
  _child({
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      const el = _$.nodeRef();
      _$.write(`<span></span>${_$.markResumeNode(_scope1_id, "#span/0")}`);
      _$.writeSubscribe(_child_content_subscribers, _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "3:2"));
    })
  });
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/1", input.show ? Child : null, {}, _$.registerContent("__tests__/template.marko_2_renderer", () => {
    const _scope2_id = _$.nextScopeId();
    const _hoisted_el2 = _$.hoist(_scope2_id, "__tests__/template.marko_2__hoisted_el2/hoist");
    const _child_content2_subscribers = new Set();
    _child({
      content: /* @__PURE__ */_$.createContent("__tests__/template.marko_3_renderer", () => {
        const _scope3_id = _$.nextScopeId();
        const el2 = _$.nodeRef();
        _$.write(`<div></div>${_$.markResumeNode(_scope3_id, "#div/0")}`);
        _$.writeSubscribe(_child_content2_subscribers, _$.writeScope(_scope3_id, {}, "__tests__/template.marko", "16:4"));
      })
    });
    _$.writeEffect(_scope2_id, "__tests__/template.marko_2__hoisted_el2");
    _$.writeSubscribe(_inputShowChildNull_content_subscribers, _$.writeScope(_scope2_id, {
      _hoisted_el2,
      _: _$.ensureScopeWithId(_scope0_id),
      "ClosureScopes:3": _child_content2_subscribers
    }, "__tests__/template.marko", "15:4", {
      _hoisted_el2: 0
    }));
  }, _scope0_id), 0, 1);
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/2", input.show ? 'section' : null, {}, _$.registerContent("__tests__/template.marko_4_renderer", () => {
    const _scope4_id = _$.nextScopeId();
    const el3 = _$.nodeRef();
    _$.write(`<p></p>${_$.markResumeNode(_scope4_id, "#p/0")}`);
    _$.writeSubscribe(_inputShowSectionNull_content_subscribers, _$.writeScope(_scope4_id, {}, "__tests__/template.marko", "34:4"));
  }, _scope0_id), 0, 1);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_el3");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_el");
  _$.writeScope(_scope0_id, {
    _hoisted_el,
    _hoisted_el3,
    "ClosureScopes:1": _child_content_subscribers,
    "ClosureScopes:2": _inputShowChildNull_content_subscribers,
    "ClosureScopes:4": _inputShowSectionNull_content_subscribers
  }, "__tests__/template.marko", 0, {
    _hoisted_el: 0,
    _hoisted_el3: 0
  });
});