export const _template_ = "<button id=tags> </button><div><!></div>";
export const _walks_ = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2");
const _count_effect = _$.effect("__tests__/components/tags-layout.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/7", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export const _input_stuff_content_ = /* @__PURE__ */_$.value("input_stuff_content", (_scope, input_stuff_content) => _dynamicTag(_scope, input_stuff_content));
export const _input_stuff_ = /* @__PURE__ */_$.value("input_stuff", (_scope, input_stuff) => _input_stuff_content_(_scope, input_stuff?.content));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_stuff_(_scope, input.stuff));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-layout.marko", _template_, _walks_, _setup_, _input_);