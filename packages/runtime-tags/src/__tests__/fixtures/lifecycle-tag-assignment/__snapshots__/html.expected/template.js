import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 0;
  let prev = false;
  _$.write(`<div>x=<span>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/0")}</span>, was=<!>${_$.escapeXML(prev)}${_$.markResumeNode($scope0_id, "#text/1")}</div><button id=increment>Increment</button>${_$.markResumeNode($scope0_id, "#button/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});