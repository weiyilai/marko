import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    a: {
      b
    }
  } = input;
  const {
    a
  } = input;
  const {
    b: c
  } = a;
  _$.write(`<button>${_$.escapeXML(b)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* b */1))} ${_$.commentSeparator(_$.serializeGuard($serialize, /* c */2))}${_$.escapeXML(c)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, /* c */2))}</button>`);
  _$.serializeGuard($serialize, /* b,c */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});