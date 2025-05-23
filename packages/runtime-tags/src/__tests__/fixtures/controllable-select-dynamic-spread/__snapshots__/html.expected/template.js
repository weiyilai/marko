import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let value = "b";
  const tag = "select";
  _$.dynamicTag($scope0_id, "#text/0", tag ? "select" : {}, {
    value,
    valueChange: _$.register(function (v) {
      value = v;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<option${_$.attrs({
      value: "a"
    }, "#option/0", $scope1_id, "option")}>A</option>${_$.markResumeNode($scope1_id, "#option/0")}<option${_$.attrs({
      value: "b"
    }, "#option/1", $scope1_id, "option")}>B</option>${_$.markResumeNode($scope1_id, "#option/1")}<option${_$.attrs({
      value: "c"
    }, "#option/2", $scope1_id, "option")}>C</option>${_$.markResumeNode($scope1_id, "#option/2")}`);
    _$.writeEffect($scope1_id, "__tests__/template.marko_1");
    _$.writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
  }, $scope0_id));
  _$.write(`<span>${_$.escapeXML(value)}${_$.markResumeNode($scope0_id, "#text/1")}</span>`);
  _$.writeScope($scope0_id, {
    tag
  }, "__tests__/template.marko", 0, {
    tag: "2:8"
  });
  _$.resumeClosestBranch($scope0_id);
});