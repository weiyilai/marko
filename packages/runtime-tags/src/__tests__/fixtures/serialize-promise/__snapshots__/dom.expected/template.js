export const $template = "<div id=ref>0</div>";
export const $walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $promise_effect = _$.effect("__tests__/template.marko_0_promise", ({
  promise
}) => (async () => {
  document.getElementById("ref").textContent = await promise;
})());
const $promise = /* @__PURE__ */_$.value("promise", $promise_effect);
export function $setup($scope) {
  $promise($scope, Promise.resolve("hello"));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);