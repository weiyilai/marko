export const _template_ = "<button> </button>used to be <span> </span> which should be the same as <span> </span>";
export const _walks_ = /* get, next(1), get, out(1), over(1), next(1), get, out(1), over(1), next(1), get, out(1) */" D lbD lbD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _lastCount2 = /* @__PURE__ */_$.state("lastCount2/6", (_scope, lastCount2) => _$.data(_scope["#text/3"], lastCount2));
const _lastCount = /* @__PURE__ */_$.state("lastCount/5", (_scope, lastCount) => _$.data(_scope["#text/2"], lastCount));
const _clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", (_scope, {
  clickCount
}) => _$.on(_scope["#button/0"], "click", function () {
  const last = _lastCount(_scope, (_clickCount(_scope, clickCount + 1), clickCount));
  _lastCount2(_scope, last);
}));
const _clickCount = /* @__PURE__ */_$.state("clickCount/4", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
  _lastCount(_scope, 0);
  _lastCount2(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);