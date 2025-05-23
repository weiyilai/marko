import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent($scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`b${_$.escapeXML((() => {
      throw new Error("ERROR!");
    })())}`);
  }, $scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", error => {
        const $scope2_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(error.message)}${_$.markResumeNode($scope2_id, "#text/0")}`);
        _$.writeScope($scope2_id, {}, "__tests__/template.marko", "4:4");
      }, $scope0_id)
    })
  });
  _$.write("d");
});