import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent($scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("b");
  }, $scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", error => {
        const $scope2_id = _$.nextScopeId();
        _$.write("ERROR!");
      }, $scope0_id)
    })
  });
  _$.write("c");
});