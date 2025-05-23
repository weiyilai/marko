import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/2counters.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  let count1 = input.count1;
  let count2 = input.count2;
  _$.write(`<button>${_$.escapeXML(count1)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}<button>${_$.escapeXML(count2)}${_$.markResumeNode($scope0_id, "#text/3")}</button>${_$.markResumeNode($scope0_id, "#button/2")}`);
  _$.writeEffect($scope0_id, "__tests__/tags/2counters.marko_0_count2");
  _$.writeEffect($scope0_id, "__tests__/tags/2counters.marko_0_count1");
  _$.writeScope($scope0_id, {
    input_count1: _$.serializeIf($serialize, /* input.count1Change */1) && input.count1,
    input_count1Change: _$.serializeIf($serialize, /* input.count1 */0) && input.count1Change,
    input_count2: _$.serializeIf($serialize, /* input.count2Change */3) && input.count2,
    input_count2Change: _$.serializeIf($serialize, /* input.count2 */2) && input.count2Change,
    count1,
    count2,
    "TagVariableChange:count1": input.count1Change,
    "TagVariableChange:count2": input.count2Change
  }, "__tests__/tags/2counters.marko", 0, {
    input_count1: ["input.count1"],
    input_count1Change: ["input.count1Change"],
    input_count2: ["input.count2"],
    input_count2Change: ["input.count2Change"],
    count1: "1:6",
    count2: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});