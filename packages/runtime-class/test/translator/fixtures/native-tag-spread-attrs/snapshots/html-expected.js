import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_merge_attrs from "marko/src/runtime/html/helpers/merge-attrs.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div${_marko_merge_attrs({
    a: 1,
    b: 2
  }, {
    "b": undefined
  })}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);