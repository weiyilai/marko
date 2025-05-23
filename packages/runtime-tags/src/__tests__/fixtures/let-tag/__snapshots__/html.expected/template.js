import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  let y = 1;
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}${_$.escapeXML(y)}${_$.markResumeNode($scope0_id, "#text/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x_y");
  _$.writeScope($scope0_id, {
    x,
    y
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});