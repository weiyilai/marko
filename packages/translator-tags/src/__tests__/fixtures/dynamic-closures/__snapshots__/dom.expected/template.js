const a = 1;
import { on as _on, queueSource as _queueSource, data as _data, bindRenderer as _bindRenderer, inChild as _inChild, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, conditional as _conditional, register as _register, dynamicSubscribers as _dynamicSubscribers, value as _value, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { setup as _customTag, args as _customTag_args, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _c$ifBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber", /* @__PURE__ */_dynamicClosure("c", (_scope, c) => _data(_scope["#text/2"], c), _scope => _scope._._));
const _b$ifBody = /* @__PURE__ */_dynamicClosure("b", (_scope, b) => _data(_scope["#text/1"], b), _scope => _scope._._);
const _setup$ifBody = _scope => {
  _data(_scope["#text/0"], a);
};
const _ifBody2 = /* @__PURE__ */_createRenderer("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$ifBody, [_b$ifBody, _c$ifBody]);
const _if$ifBody = /* @__PURE__ */_conditional("#text/0");
const _setup$ifBody2 = _scope => {
  _if$ifBody(_scope, Math.random() ? _ifBody2 : null);
};
const _ifBody = /* @__PURE__ */_createRenderer("<!><!><!>", /* replace */"D%D", _setup$ifBody2);
const _c$customTagBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber", /* @__PURE__ */_dynamicClosure("c", (_scope, c) => _data(_scope["#text/2"], c)));
const _b$customTagBody = /* @__PURE__ */_dynamicClosure("b", (_scope, b) => _data(_scope["#text/1"], b));
const _setup$customTagBody = _scope => {
  _data(_scope["#text/0"], a);
};
const _customTagBody = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", _setup$customTagBody, [_b$customTagBody, _c$customTagBody]));
const _if = /* @__PURE__ */_conditional("#text/2");
const _c = /* @__PURE__ */_value("c", null, _dynamicSubscribers("c"));
const _b = /* @__PURE__ */_value("b", null, _dynamicSubscribers("b"));
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
  _queueSource(_scope, _c, 4);
}));
const _setup = _scope => {
  _customTag(_scope["#childScope/1"]);
  _queueEffect(_scope, _setup_effect);
  _b(_scope, 2);
  _c(_scope, 3);
  _customTag_args(_scope["#childScope/1"], [{
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _customTagBody)
  }]);
  _if(_scope, Math.random() ? _ifBody : null);
};
export const template = `<button></button>${_customTag_template}<div><!></div>`;
export const walks = /* get, over(1), beginChild, _customTag_walks, endChild, next(1), replace, out(1) */` b/${_customTag_walks}&D%l`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko");