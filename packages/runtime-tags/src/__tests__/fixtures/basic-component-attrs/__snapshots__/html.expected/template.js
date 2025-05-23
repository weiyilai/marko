import _myButton from "./tags/my-button.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let clickCount = 0;
  const $childScope = _$.peekNextScopeId();
  _myButton({
    text: clickCount,
    onClick: _$.register(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", $scope0_id)
  }, 1);
  _$.writeScope($scope0_id, {
    clickCount,
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});