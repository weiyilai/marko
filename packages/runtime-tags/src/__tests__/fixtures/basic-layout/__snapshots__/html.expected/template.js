import * as _$ from "@marko/runtime-tags/debug/html";
import _layout from "./tags/layout.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $name_closures = new Set();
  const {
    name
  } = input;
  _layout({
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<h1>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode($scope1_id, "#text/0")}</h1>`);
      _$.writeSubscribe($name_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:name": 0
      }, "__tests__/template.marko", "2:2"));
      _$.resumeClosestBranch($scope1_id);
    })
  });
  _$.writeScope($scope0_id, {
    name,
    "ClosureScopes:name": $name_closures
  }, "__tests__/template.marko", 0, {
    name: "1:10"
  });
});