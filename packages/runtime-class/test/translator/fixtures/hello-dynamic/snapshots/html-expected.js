import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_to_string from "marko/src/runtime/helpers/to-string.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("Hello ");
  out.w(_marko_escapeXml(input.name));
  out.w("! Hello ");
  out.w(_marko_to_string(input.name));
  out.w("! Hello ");
  out.w(_marko_to_string(input.missing));
  out.w("!");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);