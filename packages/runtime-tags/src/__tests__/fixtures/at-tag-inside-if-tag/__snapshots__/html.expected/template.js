import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    x
  } = input;
  const $childScope = _$.peekNextScope();
  let $thing;
  if (x) {
    $thing = _$.attrTag({
      x: 1,
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }, $scope0_id)
    });
  } else {
    $thing = _$.attrTag({
      x: 2,
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const $scope2_id = _$.nextScopeId();
        _$.write("Goodbye");
      }, $scope0_id)
    });
  }
  _customTag({
    thing: $thing
  });
  _$.writeScope($scope0_id, {
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
});