import Child from "./tags/child.marko";
import Thing from "./tags/thing.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_setHtml = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml/hoist");
  const _thing_content_subscribers = new Set();
  const _inputShowThingNull_content_subscribers = new Set();
  const _inputShowSectionNull_content_subscribers = new Set();
  _thing({
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      const _dynamicScope = _$.peekNextScope();
      const setHtml = /* @__PURE__ */_$.dynamicTag(_scope1_id, "#text/0", 1 && Child, {}, 0, 0, 1);
      _$.setTagVar(_scope1_id, "#scopeOffset/1", _dynamicScope, "__tests__/template.marko_1_setHtml/var");
      _$.writeSubscribe(_thing_content_subscribers, _$.writeScope(_scope1_id, {
        setHtml
      }, "__tests__/template.marko", "4:2"));
    })
  });
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/1", input.show ? Thing : null, {}, _$.registerContent("__tests__/template.marko_2_renderer", () => {
    const _scope2_id = _$.nextScopeId();
    const _thing_content2_subscribers = new Set();
    _thing({
      content: /* @__PURE__ */_$.createContent("__tests__/template.marko_3_renderer", () => {
        const _scope3_id = _$.nextScopeId();
        const _dynamicScope2 = _$.peekNextScope();
        const setHtml2 = /* @__PURE__ */_$.dynamicTag(_scope3_id, "#text/0", 1 && Child, {}, 0, 0, 1);
        _$.setTagVar(_scope3_id, "#scopeOffset/1", _dynamicScope2, "__tests__/template.marko_3_setHtml2/var");
        _$.writeSubscribe(_thing_content2_subscribers, _$.writeScope(_scope3_id, {
          setHtml2
        }, "__tests__/template.marko", "17:4"));
      })
    });
    _$.writeSubscribe(_inputShowThingNull_content_subscribers, _$.writeScope(_scope2_id, {
      "ClosureScopes:3": _thing_content2_subscribers
    }, "__tests__/template.marko", "16:4"));
  }, _scope0_id), 0, 1);
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/2", input.show ? 'section' : null, {}, _$.registerContent("__tests__/template.marko_4_renderer", () => {
    const _scope4_id = _$.nextScopeId();
    const _dynamicScope3 = _$.peekNextScope();
    const setHtml3 = /* @__PURE__ */_$.dynamicTag(_scope4_id, "#text/0", 1 && Child, {}, 0, 0, 1);
    _$.setTagVar(_scope4_id, "#scopeOffset/1", _dynamicScope3, "__tests__/template.marko_4_setHtml3/var");
    _$.writeSubscribe(_inputShowSectionNull_content_subscribers, _$.writeScope(_scope4_id, {
      setHtml3
    }, "__tests__/template.marko", "27:4"));
  }, _scope0_id), 0, 1);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml");
  _$.writeScope(_scope0_id, {
    _hoisted_setHtml,
    "ClosureScopes:1": _thing_content_subscribers,
    "ClosureScopes:2": _inputShowThingNull_content_subscribers,
    "ClosureScopes:4": _inputShowSectionNull_content_subscribers
  }, "__tests__/template.marko", 0, {
    _hoisted_setHtml: "5:18"
  });
});