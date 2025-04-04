import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/components/tags-counter.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<button id=tags${_$.attr("data-parent", input.count)}>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/components/tags-counter.marko_0_count");
  _$.writeScope($scope0_id, {
    count
  }, "__tests__/components/tags-counter.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});