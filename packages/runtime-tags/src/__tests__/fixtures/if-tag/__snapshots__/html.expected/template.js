import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.resumeConditional(() => {
    if (input.a + input.b) {
      const $scope1_id = _$.nextScopeId();
      _$.write("Hello");
      return 0;
    }
  }, $scope0_id, "#text/0", 1);
  _$.resumeConditional(() => {
    if (input.a, input.b) {
      const $scope2_id = _$.nextScopeId();
      _$.write("World");
      return 0;
    }
  }, $scope0_id, "#text/1", 1);
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (input.x) {
      const $scope3_id = _$.nextScopeId();
      _$.write("A");
      return 0;
    } else if (input.y) {
      const $scope4_id = _$.nextScopeId();
      _$.write("B");
      return 1;
    } else {
      const $scope5_id = _$.nextScopeId();
      _$.write("C");
      return 2;
    }
  }, $scope0_id, "#div/2", 1);
  _$.write("</div>");
  _$.writeScope($scope0_id, {
    input_a: input.a,
    input_b: input.b,
    input_x: input.x,
    input_y: input.y
  }, "__tests__/template.marko", 0, {
    input_a: ["input.a"],
    input_b: ["input.b"],
    input_x: ["input.x"],
    input_y: ["input.y"]
  });
});