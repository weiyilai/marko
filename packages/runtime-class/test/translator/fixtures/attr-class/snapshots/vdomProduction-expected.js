import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "l$bM_Jg",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("div", {
  "class": "a b"
}, 0);
const _marko_node2 = _marko_constElement("div", {
  "class": "a b c"
}, 0);
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.e("div", {
    "class": _marko_class_merge(["a", {
      b: c,
      d
    }])
  }, "0", _component, 0, 1);
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
  _marko_tag(_customTag, {
    "class": ["a", {
      b: c,
      d
    }]
  }, out, _componentDef, "3");
  _marko_tag(_customTag, {
    "class": ["a", false, "b"]
  }, out, _componentDef, "4");
  _marko_dynamic_tag(out, input.test, () => _marko_render_input(() => {
    _marko_repeatable_attr_tag("test", {
      "class": ["a", {
        b: c,
        d
      }],
      "renderBody": out => {
        out.t("Hello", _component);
      }
    });
  }, {
    "class": ["a", {
      b: c,
      d
    }]
  }), null, null, null, _componentDef, "5");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);