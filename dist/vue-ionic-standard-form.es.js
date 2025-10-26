import { defineComponent as ve, createElementBlock as P, createCommentVNode as C, openBlock as $, normalizeStyle as le, toDisplayString as x, ref as ne, watch as te, onMounted as Ue, computed as G, createElementVNode as U, normalizeClass as H, createTextVNode as W, createVNode as J, createBlock as _, unref as F, withCtx as K, Fragment as ce, renderList as $e, resolveComponent as Ge, withModifiers as X, mergeModels as yt, shallowRef as We, useModel as cn, reactive as Yt, nextTick as nt, resolveDirective as $n, withDirectives as Oe, renderSlot as ie, withKeys as oe, vModelText as fn, vModelDynamic as hn, vShow as _e, Transition as bt, Teleport as gn } from "vue";
import { IonInput as zt, IonLabel as be, IonIcon as de, IonSelect as vn, IonSelectOption as pn, IonButton as Kt, IonNote as ge, IonCheckbox as Ze, IonRadioGroup as Ct, IonRadio as qe, IonGrid as mn, IonRow as yn, IonCol as bn } from "@ionic/vue";
const Cn = /* @__PURE__ */ ve({
  __name: "Heading",
  props: {
    config: {}
  },
  setup(e) {
    return (t, i) => e.config.name != "null" ? ($(), P("div", {
      key: 0,
      style: le(
        "font-weight:700; width:100%; text-align:" + e.config.position + ";"
      ),
      class: "item_header"
    }, x(e.config.name), 5)) : C("", !0);
  }
}), wn = {
  key: 0,
  class: "required"
}, On = {
  key: 1,
  class: "left-text"
}, Sn = {
  key: 1,
  class: "static-unit"
}, Pn = /* @__PURE__ */ ve({
  __name: "InputField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed", "update:unit"],
  setup(e, { expose: t, emit: i }) {
    const n = e, a = i, d = ne(n.config.initialValue || n.config.value || ""), r = ne(
      n.config.initialUnit || (n.config.unitOptions ? null : "")
    ), l = ne(!1), s = ne(!1);
    te(
      () => n.config.initialValue || n.config.value,
      (u) => {
        u !== void 0 && (d.value = u);
      }
    ), te(
      () => n.config.initialUnit,
      (u) => {
        u !== void 0 && u !== r.value && (r.value = u);
      }
    ), Ue(() => {
      n.config.unitOptions && n.config.initialUnit !== void 0 && n.config.initialUnit !== null && (a("update:unit", n.config.initialUnit), a("field-changed", {
        fieldName: `${n.config.name || n.config.header}_unit`,
        value: n.config.initialUnit,
        config: n.config
      }));
    });
    const o = G(() => {
      if (typeof n.config.disabled == "boolean")
        return n.config.disabled;
      if (typeof n.config.disabled == "function")
        try {
          return n.config.disabled(n.allFormValues);
        } catch (u) {
          return console.warn("Disabled function error:", u), !1;
        }
      return !1;
    }), c = G(() => {
      if (n.config.condition && typeof n.config.condition == "function")
        try {
          return n.config.condition(n.allFormValues);
        } catch (u) {
          return console.warn("Condition function error:", u), !1;
        }
      return !0;
    }), w = G(() => {
      var u, m;
      return !c.value || o.value ? null : ((m = (u = n.config).validation) == null ? void 0 : m.call(u, d.value)) || null;
    }), f = G(() => o.value ? !1 : n.config.error || w.value !== null && l.value), N = G(() => {
      var u, m;
      return !c.value || o.value ? null : n.config.unitOptions && ((m = (u = n.config).unitValidation) == null ? void 0 : m.call(u, r.value)) || null;
    }), T = G(() => o.value ? !1 : N.value !== null && s.value), O = (u) => {
      var m, b;
      l.value = !0, (b = (m = n.config).onBlur) == null || b.call(m, d.value, u.detail);
    }, S = (u) => {
      var m, b;
      l.value = !0, (b = (m = n.config).onInput) == null || b.call(m, d.value, u);
    }, p = (u) => {
      var m, b;
      (b = (m = n.config).onClick) == null || b.call(m, d.value, u);
    }, v = (u) => {
      var m, b;
      (b = (m = n.config).onActionClick) == null || b.call(m, d.value, u);
    }, h = () => {
      s.value = !0;
    };
    return te(o, (u) => {
      u && (d.value && (d.value = ""), r.value && (r.value = n.config.unitOptions && n.config.unitOptions.length > 0 ? n.config.unitOptions[0].value : null));
    }), te(d, (u) => {
      var m, b;
      (b = (m = n.config).onChange) == null || b.call(m, u), a("update:value", u), a("field-changed", {
        fieldName: n.config.name || n.config.header,
        value: u,
        config: n.config
      });
    }), te(r, (u) => {
      a("update:unit", u), a("field-changed", {
        fieldName: `${n.config.name || n.config.header}_unit`,
        value: u,
        config: n.config
      });
    }), t({
      getValue: () => d.value,
      getUnit: () => r.value,
      setValue: (u) => d.value = u,
      setUnit: (u) => r.value = u,
      isValid: G(
        () => o.value || w.value === null && N.value === null
      ),
      validate: () => o.value ? null : (l.value = !0, s.value = !0, w.value && N.value ? `${w.value}
${N.value}` : w.value ? w.value : N.value ? N.value : null),
      shouldShow: c,
      markAsTouched: () => {
        l.value = !0, s.value = !0;
      },
      resetTouched: () => {
        l.value = !1, s.value = !1;
      }
    }), (u, m) => {
      var b, R;
      return $(), P("div", null, [
        e.config.header ? ($(), P("h6", {
          key: 0,
          class: H(e.config.bold)
        }, [
          W(x(e.config.header) + " ", 1),
          ((R = (b = e.config).validation) == null ? void 0 : R.call(b, "")) != null ? ($(), P("span", wn, "*")) : C("", !0)
        ], 2)) : C("", !0),
        U("div", {
          style: le({ width: e.config.width || "100%" })
        }, [
          J(F(zt), {
            modelValue: d.value,
            "onUpdate:modelValue": m[1] || (m[1] = (z) => d.value = z),
            onIonBlur: O,
            onIonInput: S,
            onClick: p,
            fill: "outline",
            placeholder: e.config.placeholder,
            inputmode: e.config.type === "number" ? "numeric" : "text",
            disabled: o.value,
            class: H(["custom-input", { error: f.value }]),
            style: le({ minHeight: (e.config.minHeight || 56) + "px" })
          }, {
            default: K(() => {
              var z;
              return [
                e.config.icon || e.config.leftText ? ($(), _(F(be), {
                  key: 0,
                  slot: "start",
                  class: "start-content"
                }, {
                  default: K(() => [
                    e.config.icon ? ($(), _(F(de), {
                      key: 0,
                      icon: e.config.icon
                    }, null, 8, ["icon"])) : C("", !0),
                    e.config.leftText ? ($(), P("span", On, x(e.config.leftText), 1)) : C("", !0)
                  ]),
                  _: 1
                })) : C("", !0),
                e.config.unitOptions || e.config.unit || e.config.rightIcon ? ($(), _(F(be), {
                  key: 1,
                  slot: "end",
                  class: "end-content"
                }, {
                  default: K(() => [
                    e.config.rightIcon && !e.config.unitOptions ? ($(), _(F(de), {
                      key: 0,
                      icon: e.config.rightIcon
                    }, null, 8, ["icon"])) : C("", !0),
                    e.config.unit && !e.config.unitOptions ? ($(), P("span", Sn, x(e.config.unit), 1)) : C("", !0),
                    e.config.unitOptions ? ($(), _(F(vn), {
                      key: 2,
                      modelValue: r.value,
                      "onUpdate:modelValue": m[0] || (m[0] = (Z) => r.value = Z),
                      interface: "popover",
                      placeholder: e.config.unitPlaceholder,
                      class: H(["unit-dropdown unit-select-popover", { error: T.value }]),
                      "aria-label": "Select Unit",
                      onIonBlur: h
                    }, {
                      default: K(() => [
                        ($(!0), P(ce, null, $e(e.config.unitOptions, (Z) => ($(), _(F(pn), {
                          key: Z.value,
                          value: Z.value
                        }, {
                          default: K(() => [
                            W(x(Z.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "class"])) : C("", !0)
                  ]),
                  _: 1
                })) : C("", !0),
                (z = e.config.actionButton) != null && z.show ? ($(), _(F(Kt), {
                  key: 2,
                  slot: "end",
                  onClick: v,
                  size: "small"
                }, {
                  default: K(() => [
                    e.config.actionButton.icon ? ($(), _(F(de), {
                      key: 0,
                      icon: e.config.actionButton.icon,
                      slot: "start"
                    }, null, 8, ["icon"])) : C("", !0),
                    W(" " + x(e.config.actionButton.text), 1)
                  ]),
                  _: 1
                })) : C("", !0)
              ];
            }),
            _: 1
          }, 8, ["modelValue", "placeholder", "inputmode", "disabled", "class", "style"]),
          w.value && l.value ? ($(), _(F(ge), {
            key: 0,
            class: "error-note"
          }, {
            default: K(() => [
              W(x(w.value), 1)
            ]),
            _: 1
          })) : C("", !0),
          N.value && s.value ? ($(), _(F(ge), {
            key: 1,
            class: "error-note unit-error-note"
          }, {
            default: K(() => [
              W(x(N.value), 1)
            ]),
            _: 1
          })) : C("", !0)
        ], 4)
      ]);
    };
  }
}), Se = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, Nn = /* @__PURE__ */ Se(Pn, [["__scopeId", "data-v-6a4eeec3"]]), Tn = {
  key: 0,
  class: "required"
}, Dn = {
  key: 1,
  class: "checkbox-group"
}, Fn = {
  key: 2,
  class: "checkbox-list"
}, In = { class: "list-item-content" }, kn = { class: "list-item-left" }, En = { class: "list-item-text" }, Mn = /* @__PURE__ */ ve({
  __name: "CheckboxField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed"],
  setup(e, { expose: t, emit: i }) {
    const n = e, a = i, d = ne(s()), r = ne(o()), l = ne(!1);
    function s() {
      return n.config.type === "single" && (n.config.initialValue || n.config.value) || !1;
    }
    function o() {
      if (n.config.type === "multiple" || n.config.type === "list") {
        const b = n.config.initialValue || n.config.value;
        return Array.isArray(b) ? [...b] : [];
      }
      return [];
    }
    te(
      () => n.config.initialValue || n.config.value,
      (b) => {
        n.config.type === "single" ? d.value = b || !1 : (n.config.type === "multiple" || n.config.type === "list") && (r.value = Array.isArray(b) ? [...b] : []);
      }
    );
    const c = G(() => {
      if (typeof n.config.disabled == "boolean")
        return n.config.disabled;
      if (typeof n.config.disabled == "function")
        try {
          return n.config.disabled(n.allFormValues);
        } catch (b) {
          return console.warn("Disabled function error:", b), !1;
        }
      return !1;
    });
    te(c, (b) => {
      b && (n.config.type === "single" ? d.value && (d.value = !1) : r.value.length > 0 && (r.value = []));
    });
    const w = G(() => {
      if (n.config.condition && typeof n.config.condition == "function")
        try {
          return n.config.condition(n.allFormValues);
        } catch (b) {
          return console.warn("Condition function error:", b), !1;
        }
      return !0;
    }), f = G(() => {
      var b, R;
      return !w.value || c.value ? null : ((R = (b = n.config).validation) == null ? void 0 : R.call(b, T())) || null;
    }), N = G(() => c.value ? !1 : n.config.error || f.value !== null && l.value);
    function T() {
      return n.config.type === "single" ? d.value : r.value;
    }
    function O(b) {
      return r.value.includes(b);
    }
    function S(b) {
      c.value || (l.value = !0, d.value = b.detail.checked, u());
    }
    function p() {
      c.value || (l.value = !0, d.value = !d.value, u());
    }
    function v(b, R) {
      if (!c.value) {
        if (l.value = !0, R.detail.checked)
          r.value.includes(b) || r.value.push(b);
        else {
          const z = r.value.indexOf(b);
          z > -1 && r.value.splice(z, 1);
        }
        u();
      }
    }
    function h(b) {
      var z;
      if (c.value) return;
      const R = (z = n.config.options) == null ? void 0 : z.find((Z) => Z.value === b);
      if (!(R != null && R.disabled)) {
        if (l.value = !0, r.value.includes(b)) {
          const Z = r.value.indexOf(b);
          r.value.splice(Z, 1);
        } else
          r.value.push(b);
        u();
      }
    }
    function u() {
      var R, z;
      const b = T();
      (z = (R = n.config).onChange) == null || z.call(R, b), a("update:value", b), a("field-changed", {
        fieldName: n.config.name || n.config.header,
        value: b,
        config: n.config
      });
    }
    function m(b) {
      var R, z;
      c.value || (l.value = !0, (z = (R = n.config).onBlur) == null || z.call(R, T(), b));
    }
    return t({
      getValue: () => T(),
      setValue: (b) => {
        n.config.type === "single" ? d.value = !!b : r.value = Array.isArray(b) ? [...b] : [];
      },
      isValid: G(() => c.value || f.value === null),
      // Consider disabled fields as valid
      validate: () => c.value ? null : (l.value = !0, f.value),
      shouldShow: w,
      selectAll: () => {
        var b;
        c.value || (n.config.type === "multiple" || n.config.type === "list") && (l.value = !0, r.value = ((b = n.config.options) == null ? void 0 : b.map((R) => R.value)) || [], u());
      },
      deselectAll: () => {
        c.value || (n.config.type === "multiple" || n.config.type === "list") && (l.value = !0, r.value = [], u());
      },
      markAsTouched: () => l.value = !0,
      // Allow parent to mark as touched
      resetTouched: () => l.value = !1
      // Allow parent to reset touched state
    }), (b, R) => {
      var z, Z;
      return $(), P("div", null, [
        e.config.header ? ($(), P("h6", {
          key: 0,
          class: H(e.config.bold)
        }, [
          W(x(e.config.header) + " ", 1),
          ((Z = (z = e.config).validation) == null ? void 0 : Z.call(z, "")) != null ? ($(), P("span", Tn, "*")) : C("", !0)
        ], 2)) : C("", !0),
        U("div", {
          style: le({ width: e.config.width || "100%" })
        }, [
          e.config.type === "single" ? ($(), P("div", {
            key: 0,
            class: H(["checkbox-container", { disabled: c.value }])
          }, [
            J(F(Ze), {
              modelValue: d.value,
              "onUpdate:modelValue": R[0] || (R[0] = (E) => d.value = E),
              onIonChange: S,
              onIonBlur: m,
              disabled: c.value,
              class: H(["custom-checkbox", { error: N.value }])
            }, null, 8, ["modelValue", "disabled", "class"]),
            J(F(be), {
              class: H(["checkbox-label", { disabled: c.value }]),
              onClick: p
            }, {
              default: K(() => [
                W(x(e.config.label), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)) : e.config.type === "multiple" ? ($(), P("div", Dn, [
            ($(!0), P(ce, null, $e(e.config.options, (E, Y) => ($(), P("div", {
              key: typeof E.value == "string" || typeof E.value == "number" ? E.value : String(Y),
              class: H(["checkbox-item", { disabled: c.value || E.disabled }])
            }, [
              J(F(Ze), {
                checked: O(E.value),
                onIonChange: (he) => v(E.value, he),
                onIonBlur: m,
                disabled: c.value || E.disabled,
                class: H(["custom-checkbox", { error: N.value }])
              }, null, 8, ["checked", "onIonChange", "disabled", "class"]),
              J(F(be), {
                class: H(["checkbox-label", { disabled: c.value || E.disabled }]),
                onClick: () => h(E.value)
              }, {
                default: K(() => [
                  W(x(E.label) + " ", 1),
                  E.description ? ($(), P("span", {
                    key: 0,
                    class: H(["option-description", { disabled: c.value || E.disabled }])
                  }, x(E.description), 3)) : C("", !0)
                ]),
                _: 2
              }, 1032, ["class", "onClick"])
            ], 2))), 128))
          ])) : e.config.type === "list" ? ($(), P("div", Fn, [
            ($(!0), P(ce, null, $e(e.config.options, (E, Y) => ($(), P("div", {
              key: typeof E.value == "string" || typeof E.value == "number" ? E.value : String(Y),
              class: H(["checkbox-list-item", {
                selected: O(E.value),
                disabled: c.value || E.disabled
              }])
            }, [
              U("div", In, [
                U("div", kn, [
                  E.icon ? ($(), _(F(de), {
                    key: 0,
                    icon: E.icon,
                    class: H(["list-item-icon", { disabled: c.value || E.disabled }])
                  }, null, 8, ["icon", "class"])) : C("", !0),
                  U("div", En, [
                    U("div", {
                      class: H(["list-item-title", { disabled: c.value || E.disabled }])
                    }, x(E.label), 3),
                    E.description ? ($(), P("div", {
                      key: 0,
                      class: H(["list-item-description", { disabled: c.value || E.disabled }])
                    }, x(E.description), 3)) : C("", !0)
                  ])
                ]),
                J(F(Ze), {
                  checked: O(E.value),
                  onIonChange: (he) => v(E.value, he),
                  onIonBlur: m,
                  disabled: c.value || E.disabled,
                  class: H(["custom-checkbox", { error: N.value }])
                }, null, 8, ["checked", "onIonChange", "disabled", "class"])
              ])
            ], 2))), 128))
          ])) : C("", !0),
          f.value && l.value ? ($(), _(F(ge), {
            key: 3,
            class: "error-note"
          }, {
            default: K(() => [
              W(x(f.value), 1)
            ]),
            _: 1
          })) : C("", !0),
          e.config.helperText && !f.value ? ($(), _(F(ge), {
            key: 4,
            class: "helper-note"
          }, {
            default: K(() => [
              W(x(e.config.helperText), 1)
            ]),
            _: 1
          })) : C("", !0)
        ], 4)
      ]);
    };
  }
}), xn = /* @__PURE__ */ Se(Mn, [["__scopeId", "data-v-5f7d1997"]]), An = { key: 0 }, Ln = { class: "position_content alert_content" }, Vn = /* @__PURE__ */ ve({
  __name: "Alert",
  props: {
    config: {},
    allFormValues: {}
  },
  setup(e) {
    const t = e, i = ne(null), n = async () => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          const a = await t.config.condition(t.allFormValues ?? []);
          i.value = a;
        } catch (a) {
          console.error("Error evaluating alert condition:", a), i.value = null;
        }
      else
        i.value = t.config;
    };
    return te(
      () => t.allFormValues,
      async () => {
        await n();
      },
      { deep: !0 }
    ), Ue(async () => {
      await n();
    }), (a, d) => {
      const r = Ge("ion-icon"), l = Ge("ion-row");
      return i.value ? ($(), P("span", An, [
        J(l, {
          style: le(
            "border-radius: 5px; margin-top:10px; margin-bottom:10px; background-color:" + (i.value.backgroundColor || e.config.backgroundColor || "#f0f0f0")
          )
        }, {
          default: K(() => [
            U("span", Ln, [
              J(r, {
                slot: "start",
                icon: i.value.icon || e.config.icon,
                "aria-hidden": "true"
              }, null, 8, ["icon"]),
              U("span", {
                style: le(
                  "color:" + (i.value.textColor || e.config.textColor || "#000") + "; font-weight:600; margin: 0px 20px;"
                )
              }, x(i.value.index || e.config.index), 5),
              U("span", {
                style: le(
                  "color:" + (i.value.textColor || e.config.textColor || "#000") + ";"
                )
              }, x(i.value.value || i.value.message || e.config.value), 5)
            ])
          ]),
          _: 1
        }, 8, ["style"])
      ])) : C("", !0);
    };
  }
}), Rn = /* @__PURE__ */ Se(Vn, [["__scopeId", "data-v-98bf8420"]]), we = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34Z'/></svg>", Bn = { key: 0 }, _n = { class: "field-header" }, Gn = {
  key: 0,
  class: "required"
}, Hn = ["disabled"], jn = ["disabled"], Un = {
  key: 1,
  class: "option-description"
}, Yn = {
  key: 1,
  class: "radio-list"
}, zn = ["onClick"], Kn = { class: "list-item-left" }, Wn = { class: "list-item-text" }, Zn = { class: "list-item-title" }, qn = ["disabled"], Xn = {
  key: 0,
  class: "list-item-description"
}, Jn = { class: "list-item-right" }, Qn = ["disabled"], ei = ["disabled"], ti = {
  key: 3,
  class: "radio-button-group"
}, ni = ["onClick", "disabled"], ii = {
  key: 6,
  class: "clear-section"
}, di = ["disabled"], ri = /* @__PURE__ */ ve({
  __name: "RadioButtonField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed", "cleared"],
  setup(e, { expose: t, emit: i }) {
    const n = e, a = i, d = ne(l()), r = ne(!1);
    function l() {
      return n.config.initialValue || n.config.value || null;
    }
    te(
      () => n.config.initialValue || n.config.value,
      (S) => {
        d.value = S || null;
      }
    );
    const s = G(() => {
      if (typeof n.config.disabled == "boolean")
        return n.config.disabled;
      if (typeof n.config.disabled == "function")
        try {
          return n.config.disabled(n.allFormValues);
        } catch (S) {
          return console.warn("Disabled function error:", S), !1;
        }
      return !1;
    }), o = G(() => {
      if (n.config.condition && typeof n.config.condition == "function")
        try {
          return n.config.condition(n.allFormValues);
        } catch (S) {
          return console.warn("Condition function error:", S), !1;
        }
      return !0;
    }), c = G(() => {
      var S, p;
      return !o.value || s.value ? null : ((p = (S = n.config).validation) == null ? void 0 : p.call(S, d.value)) || null;
    }), w = G(() => s.value ? !1 : n.config.error || c.value !== null && r.value);
    function f(S) {
      r.value = !0, S.detail.value === !1 ? d.value = null : d.value = S.detail.value, O();
    }
    function N(S) {
      var v;
      if (s.value) return;
      const p = (v = n.config.options) == null ? void 0 : v.find((h) => h.value === S);
      if (!(p != null && p.disabled)) {
        if (n.config.allowDeselect && d.value === S) {
          T();
          return;
        }
        r.value = !0, S === !1 ? d.value = null : d.value = S, O();
      }
    }
    function T() {
      var p, v;
      if (s.value) return;
      const S = d.value;
      d.value = null, r.value = !0, O(), a("cleared", {
        previousValue: S,
        fieldName: n.config.name || n.config.header,
        config: n.config
      }), (v = (p = n.config).onClear) == null || v.call(p, S);
    }
    function O() {
      var p, v;
      const S = d.value;
      (v = (p = n.config).onChange) == null || v.call(p, S), a("update:value", S), a("field-changed", {
        fieldName: n.config.name || n.config.header,
        value: S,
        config: n.config
      });
    }
    return te(s, (S) => {
      S && d.value && (d.value = null, O());
    }), t({
      getValue: () => d.value,
      setValue: (S) => {
        S === !1 ? d.value = null : d.value = S;
      },
      isValid: G(() => s.value || c.value === null),
      validate: () => s.value ? null : (r.value = !0, c.value),
      shouldShow: o,
      clearSelection: T,
      getSelectedOption: () => {
        var S;
        return ((S = n.config.options) == null ? void 0 : S.find((p) => p.value === d.value)) || null;
      },
      markAsTouched: () => r.value = !0,
      resetTouched: () => r.value = !1,
      // New methods for clearing functionality
      hasSelection: G(() => d.value !== null),
      canClear: G(() => !s.value && d.value !== null)
    }), (S, p) => {
      var v, h;
      return o.value ? ($(), P("div", Bn, [
        U("div", _n, [
          e.config.header ? ($(), P("h6", {
            key: 0,
            class: H(e.config.bold)
          }, [
            W(x(e.config.header) + " ", 1),
            ((h = (v = e.config).validation) == null ? void 0 : h.call(v, "")) != null ? ($(), P("span", Gn, "*")) : C("", !0)
          ], 2)) : C("", !0),
          e.config.showClearButton && d.value !== null ? ($(), P("button", {
            key: 1,
            type: "button",
            class: "clear-button",
            onClick: T,
            disabled: s.value,
            title: "Clear selection"
          }, [
            J(F(de), { icon: F(we) }, null, 8, ["icon"]),
            p[0] || (p[0] = W(" Clear ", -1))
          ], 8, Hn)) : C("", !0)
        ]),
        U("div", {
          style: le({ width: e.config.width || "100%" })
        }, [
          e.config.type === "standard" || !e.config.type ? ($(), _(F(Ct), {
            key: 0,
            value: d.value,
            onIonChange: f,
            class: "radio-group"
          }, {
            default: K(() => [
              ($(!0), P(ce, null, $e(e.config.options, (u, m) => ($(), P("div", {
                key: typeof u.value == "string" || typeof u.value == "number" ? u.value : m,
                class: "radio-item"
              }, [
                J(F(qe), {
                  value: u.value,
                  disabled: s.value || u.disabled,
                  class: H(["custom-radio", { error: w.value }])
                }, null, 8, ["value", "disabled", "class"]),
                J(F(be), {
                  class: "radio-label",
                  onClick: () => N(u.value)
                }, {
                  default: K(() => [
                    W(x(u.label) + " ", 1),
                    d.value === u.value && e.config.showOptionClear !== !1 ? ($(), P("button", {
                      key: 0,
                      type: "button",
                      class: "option-clear-icon",
                      onClick: X(T, ["stop"]),
                      disabled: s.value,
                      title: "Clear this option"
                    }, [
                      J(F(de), { icon: F(we) }, null, 8, ["icon"])
                    ], 8, jn)) : C("", !0),
                    u.description ? ($(), P("span", Un, x(u.description), 1)) : C("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]))), 128))
            ]),
            _: 1
          }, 8, ["value"])) : e.config.type === "list" ? ($(), P("div", Yn, [
            ($(!0), P(ce, null, $e(e.config.options, (u, m) => ($(), P("div", {
              key: typeof u.value == "string" || typeof u.value == "number" ? u.value : String(m),
              class: H(["radio-list-item", {
                selected: d.value === u.value,
                disabled: s.value || u.disabled
              }])
            }, [
              U("div", {
                class: "list-item-content",
                onClick: () => N(u.value)
              }, [
                U("div", Kn, [
                  u.icon ? ($(), _(F(de), {
                    key: 0,
                    icon: u.icon,
                    class: "list-item-icon"
                  }, null, 8, ["icon"])) : C("", !0),
                  U("div", Wn, [
                    U("div", Zn, [
                      W(x(u.label) + " ", 1),
                      d.value === u.value && e.config.showOptionClear !== !1 ? ($(), P("button", {
                        key: 0,
                        type: "button",
                        class: "option-clear-icon inline",
                        onClick: X(T, ["stop"]),
                        disabled: s.value,
                        title: "Clear this option"
                      }, [
                        J(F(de), { icon: F(we) }, null, 8, ["icon"])
                      ], 8, qn)) : C("", !0)
                    ]),
                    u.description ? ($(), P("div", Xn, x(u.description), 1)) : C("", !0)
                  ])
                ]),
                U("div", Jn, [
                  J(F(qe), {
                    value: u.value,
                    checked: d.value === u.value,
                    onIonSelect: f,
                    disabled: s.value || u.disabled,
                    class: H(["custom-radio", { error: w.value }])
                  }, null, 8, ["value", "checked", "disabled", "class"]),
                  e.config.showIndividualClear && d.value === u.value ? ($(), P("button", {
                    key: 0,
                    type: "button",
                    class: "item-clear-button",
                    onClick: X(T, ["stop"]),
                    disabled: s.value,
                    title: "Clear this selection"
                  }, [
                    J(F(de), { icon: F(we) }, null, 8, ["icon"])
                  ], 8, Qn)) : C("", !0)
                ])
              ], 8, zn)
            ], 2))), 128))
          ])) : e.config.type === "inline" ? ($(), _(F(Ct), {
            key: 2,
            value: d.value,
            onIonChange: f,
            class: "radio-inline"
          }, {
            default: K(() => [
              ($(!0), P(ce, null, $e(e.config.options, (u, m) => ($(), P("div", {
                key: typeof u.value == "string" || typeof u.value == "number" ? u.value : m,
                class: "radio-inline-item"
              }, [
                J(F(qe), {
                  value: u.value,
                  disabled: s.value || u.disabled,
                  class: H(["custom-radio", { error: w.value }])
                }, null, 8, ["value", "disabled", "class"]),
                J(F(be), {
                  class: "radio-label",
                  onClick: () => N(u.value)
                }, {
                  default: K(() => [
                    W(x(u.label) + " ", 1),
                    d.value === u.value && e.config.showOptionClear !== !1 ? ($(), P("button", {
                      key: 0,
                      type: "button",
                      class: "option-clear-icon inline",
                      onClick: X(T, ["stop"]),
                      disabled: s.value,
                      title: "Clear this option"
                    }, [
                      J(F(de), { icon: F(we) }, null, 8, ["icon"])
                    ], 8, ei)) : C("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]))), 128))
            ]),
            _: 1
          }, 8, ["value"])) : e.config.type === "button" ? ($(), P("div", ti, [
            ($(!0), P(ce, null, $e(e.config.options, (u, m) => ($(), P("button", {
              key: typeof u.value == "string" || typeof u.value == "number" ? u.value : String(m),
              type: "button",
              class: H(["radio-button", {
                selected: d.value === u.value,
                disabled: s.value || u.disabled,
                error: w.value
              }]),
              onClick: () => N(u.value),
              disabled: s.value || u.disabled
            }, [
              u.icon ? ($(), _(F(de), {
                key: 0,
                icon: u.icon,
                class: "button-icon"
              }, null, 8, ["icon"])) : C("", !0),
              W(" " + x(u.label) + " ", 1),
              e.config.showButtonClear !== !1 && d.value === u.value ? ($(), _(F(de), {
                key: 1,
                icon: F(we),
                class: "button-clear-icon",
                onClick: X(T, ["stop"])
              }, null, 8, ["icon"])) : C("", !0)
            ], 10, ni))), 128))
          ])) : C("", !0),
          c.value && r.value ? ($(), _(F(ge), {
            key: 4,
            class: "error-note"
          }, {
            default: K(() => [
              W(x(c.value), 1)
            ]),
            _: 1
          })) : C("", !0),
          e.config.helperText && !c.value ? ($(), _(F(ge), {
            key: 5,
            class: "helper-note"
          }, {
            default: K(() => [
              W(x(e.config.helperText), 1)
            ]),
            _: 1
          })) : C("", !0),
          e.config.showClearButtonBottom && d.value !== null ? ($(), P("div", ii, [
            U("button", {
              type: "button",
              class: "clear-button-bottom",
              onClick: T,
              disabled: s.value
            }, [
              J(F(de), { icon: F(we) }, null, 8, ["icon"]),
              p[1] || (p[1] = W(" Clear Selection ", -1))
            ], 8, di)
          ])) : C("", !0)
        ], 4)
      ])) : C("", !0);
    };
  }
}), ai = /* @__PURE__ */ Se(ri, [["__scopeId", "data-v-6fbd3b14"]]);
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ut(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wt = { exports: {} };
(function(e, t) {
  (function(i, n) {
    e.exports = n();
  })(lt, function() {
    var i = 1e3, n = 6e4, a = 36e5, d = "millisecond", r = "second", l = "minute", s = "hour", o = "day", c = "week", w = "month", f = "quarter", N = "year", T = "date", O = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var k = ["th", "st", "nd", "rd"], D = A % 100;
      return "[" + A + (k[(D - 20) % 10] || k[D] || k[0]) + "]";
    } }, h = function(A, k, D) {
      var M = String(A);
      return !M || M.length >= k ? A : "" + Array(k + 1 - M.length).join(D) + A;
    }, u = { s: h, z: function(A) {
      var k = -A.utcOffset(), D = Math.abs(k), M = Math.floor(D / 60), I = D % 60;
      return (k <= 0 ? "+" : "-") + h(M, 2, "0") + ":" + h(I, 2, "0");
    }, m: function A(k, D) {
      if (k.date() < D.date()) return -A(D, k);
      var M = 12 * (D.year() - k.year()) + (D.month() - k.month()), I = k.clone().add(M, w), B = D - I < 0, V = k.clone().add(M + (B ? -1 : 1), w);
      return +(-(M + (D - I) / (B ? I - V : V - I)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: w, y: N, w: c, d: o, D: T, h: s, m: l, s: r, ms: d, Q: f }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, m = "en", b = {};
    b[m] = v;
    var R = "$isDayjsObject", z = function(A) {
      return A instanceof he || !(!A || !A[R]);
    }, Z = function A(k, D, M) {
      var I;
      if (!k) return m;
      if (typeof k == "string") {
        var B = k.toLowerCase();
        b[B] && (I = B), D && (b[B] = D, I = B);
        var V = k.split("-");
        if (!I && V.length > 1) return A(V[0]);
      } else {
        var q = k.name;
        b[q] = k, I = q;
      }
      return !M && I && (m = I), I || !M && m;
    }, E = function(A, k) {
      if (z(A)) return A.clone();
      var D = typeof k == "object" ? k : {};
      return D.date = A, D.args = arguments, new he(D);
    }, Y = u;
    Y.l = Z, Y.i = z, Y.w = function(A, k) {
      return E(A, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
    };
    var he = function() {
      function A(D) {
        this.$L = Z(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[R] = !0;
      }
      var k = A.prototype;
      return k.parse = function(D) {
        this.$d = function(M) {
          var I = M.date, B = M.utc;
          if (I === null) return /* @__PURE__ */ new Date(NaN);
          if (Y.u(I)) return /* @__PURE__ */ new Date();
          if (I instanceof Date) return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var V = I.match(S);
            if (V) {
              var q = V[2] - 1 || 0, g = (V[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(V[1], q, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, g)) : new Date(V[1], q, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, g);
            }
          }
          return new Date(I);
        }(D), this.init();
      }, k.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, k.$utils = function() {
        return Y;
      }, k.isValid = function() {
        return this.$d.toString() !== O;
      }, k.isSame = function(D, M) {
        var I = E(D);
        return this.startOf(M) <= I && I <= this.endOf(M);
      }, k.isAfter = function(D, M) {
        return E(D) < this.startOf(M);
      }, k.isBefore = function(D, M) {
        return this.endOf(M) < E(D);
      }, k.$g = function(D, M, I) {
        return Y.u(D) ? this[M] : this.set(I, D);
      }, k.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, k.valueOf = function() {
        return this.$d.getTime();
      }, k.startOf = function(D, M) {
        var I = this, B = !!Y.u(M) || M, V = Y.p(D), q = function(Ce, ue) {
          var ye = Y.w(I.$u ? Date.UTC(I.$y, ue, Ce) : new Date(I.$y, ue, Ce), I);
          return B ? ye : ye.endOf(o);
        }, g = function(Ce, ue) {
          return Y.w(I.toDate()[Ce].apply(I.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), I);
        }, y = this.$W, L = this.$M, j = this.$D, ee = "set" + (this.$u ? "UTC" : "");
        switch (V) {
          case N:
            return B ? q(1, 0) : q(31, 11);
          case w:
            return B ? q(1, L) : q(0, L + 1);
          case c:
            var se = this.$locale().weekStart || 0, De = (y < se ? y + 7 : y) - se;
            return q(B ? j - De : j + (6 - De), L);
          case o:
          case T:
            return g(ee + "Hours", 0);
          case s:
            return g(ee + "Minutes", 1);
          case l:
            return g(ee + "Seconds", 2);
          case r:
            return g(ee + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, k.endOf = function(D) {
        return this.startOf(D, !1);
      }, k.$set = function(D, M) {
        var I, B = Y.p(D), V = "set" + (this.$u ? "UTC" : ""), q = (I = {}, I[o] = V + "Date", I[T] = V + "Date", I[w] = V + "Month", I[N] = V + "FullYear", I[s] = V + "Hours", I[l] = V + "Minutes", I[r] = V + "Seconds", I[d] = V + "Milliseconds", I)[B], g = B === o ? this.$D + (M - this.$W) : M;
        if (B === w || B === N) {
          var y = this.clone().set(T, 1);
          y.$d[q](g), y.init(), this.$d = y.set(T, Math.min(this.$D, y.daysInMonth())).$d;
        } else q && this.$d[q](g);
        return this.init(), this;
      }, k.set = function(D, M) {
        return this.clone().$set(D, M);
      }, k.get = function(D) {
        return this[Y.p(D)]();
      }, k.add = function(D, M) {
        var I, B = this;
        D = Number(D);
        var V = Y.p(M), q = function(L) {
          var j = E(B);
          return Y.w(j.date(j.date() + Math.round(L * D)), B);
        };
        if (V === w) return this.set(w, this.$M + D);
        if (V === N) return this.set(N, this.$y + D);
        if (V === o) return q(1);
        if (V === c) return q(7);
        var g = (I = {}, I[l] = n, I[s] = a, I[r] = i, I)[V] || 1, y = this.$d.getTime() + D * g;
        return Y.w(y, this);
      }, k.subtract = function(D, M) {
        return this.add(-1 * D, M);
      }, k.format = function(D) {
        var M = this, I = this.$locale();
        if (!this.isValid()) return I.invalidDate || O;
        var B = D || "YYYY-MM-DDTHH:mm:ssZ", V = Y.z(this), q = this.$H, g = this.$m, y = this.$M, L = I.weekdays, j = I.months, ee = I.meridiem, se = function(ue, ye, Fe, Be) {
          return ue && (ue[ye] || ue(M, B)) || Fe[ye].slice(0, Be);
        }, De = function(ue) {
          return Y.s(q % 12 || 12, ue, "0");
        }, Ce = ee || function(ue, ye, Fe) {
          var Be = ue < 12 ? "AM" : "PM";
          return Fe ? Be.toLowerCase() : Be;
        };
        return B.replace(p, function(ue, ye) {
          return ye || function(Fe) {
            switch (Fe) {
              case "YY":
                return String(M.$y).slice(-2);
              case "YYYY":
                return Y.s(M.$y, 4, "0");
              case "M":
                return y + 1;
              case "MM":
                return Y.s(y + 1, 2, "0");
              case "MMM":
                return se(I.monthsShort, y, j, 3);
              case "MMMM":
                return se(j, y);
              case "D":
                return M.$D;
              case "DD":
                return Y.s(M.$D, 2, "0");
              case "d":
                return String(M.$W);
              case "dd":
                return se(I.weekdaysMin, M.$W, L, 2);
              case "ddd":
                return se(I.weekdaysShort, M.$W, L, 3);
              case "dddd":
                return L[M.$W];
              case "H":
                return String(q);
              case "HH":
                return Y.s(q, 2, "0");
              case "h":
                return De(1);
              case "hh":
                return De(2);
              case "a":
                return Ce(q, g, !0);
              case "A":
                return Ce(q, g, !1);
              case "m":
                return String(g);
              case "mm":
                return Y.s(g, 2, "0");
              case "s":
                return String(M.$s);
              case "ss":
                return Y.s(M.$s, 2, "0");
              case "SSS":
                return Y.s(M.$ms, 3, "0");
              case "Z":
                return V;
            }
            return null;
          }(ue) || V.replace(":", "");
        });
      }, k.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, k.diff = function(D, M, I) {
        var B, V = this, q = Y.p(M), g = E(D), y = (g.utcOffset() - this.utcOffset()) * n, L = this - g, j = function() {
          return Y.m(V, g);
        };
        switch (q) {
          case N:
            B = j() / 12;
            break;
          case w:
            B = j();
            break;
          case f:
            B = j() / 3;
            break;
          case c:
            B = (L - y) / 6048e5;
            break;
          case o:
            B = (L - y) / 864e5;
            break;
          case s:
            B = L / a;
            break;
          case l:
            B = L / n;
            break;
          case r:
            B = L / i;
            break;
          default:
            B = L;
        }
        return I ? B : Y.a(B);
      }, k.daysInMonth = function() {
        return this.endOf(w).$D;
      }, k.$locale = function() {
        return b[this.$L];
      }, k.locale = function(D, M) {
        if (!D) return this.$L;
        var I = this.clone(), B = Z(D, M, !0);
        return B && (I.$L = B), I;
      }, k.clone = function() {
        return Y.w(this.$d, this);
      }, k.toDate = function() {
        return new Date(this.valueOf());
      }, k.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, k.toISOString = function() {
        return this.$d.toISOString();
      }, k.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), Re = he.prototype;
    return E.prototype = Re, [["$ms", d], ["$s", r], ["$m", l], ["$H", s], ["$W", o], ["$M", w], ["$y", N], ["$D", T]].forEach(function(A) {
      Re[A[1]] = function(k) {
        return this.$g(k, A[0], A[1]);
      };
    }), E.extend = function(A, k) {
      return A.$i || (A(k, he, E), A.$i = !0), E;
    }, E.locale = Z, E.isDayjs = z, E.unix = function(A) {
      return E(1e3 * A);
    }, E.en = b[m], E.Ls = b, E.p = {}, E;
  });
})(Wt);
var oi = Wt.exports;
const Q = /* @__PURE__ */ ut(oi);
var Zt = { exports: {} };
(function(e, t) {
  (function(i, n) {
    e.exports = n();
  })(lt, function() {
    var i = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(d, r, l) {
      var s = r.prototype;
      l.utc = function(O) {
        var S = { date: O, utc: !0, args: arguments };
        return new r(S);
      }, s.utc = function(O) {
        var S = l(this.toDate(), { locale: this.$L, utc: !0 });
        return O ? S.add(this.utcOffset(), i) : S;
      }, s.local = function() {
        return l(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var o = s.parse;
      s.parse = function(O) {
        O.utc && (this.$u = !0), this.$utils().u(O.$offset) || (this.$offset = O.$offset), o.call(this, O);
      };
      var c = s.init;
      s.init = function() {
        if (this.$u) {
          var O = this.$d;
          this.$y = O.getUTCFullYear(), this.$M = O.getUTCMonth(), this.$D = O.getUTCDate(), this.$W = O.getUTCDay(), this.$H = O.getUTCHours(), this.$m = O.getUTCMinutes(), this.$s = O.getUTCSeconds(), this.$ms = O.getUTCMilliseconds();
        } else c.call(this);
      };
      var w = s.utcOffset;
      s.utcOffset = function(O, S) {
        var p = this.$utils().u;
        if (p(O)) return this.$u ? 0 : p(this.$offset) ? w.call(this) : this.$offset;
        if (typeof O == "string" && (O = function(m) {
          m === void 0 && (m = "");
          var b = m.match(n);
          if (!b) return null;
          var R = ("" + b[0]).match(a) || ["-", 0, 0], z = R[0], Z = 60 * +R[1] + +R[2];
          return Z === 0 ? 0 : z === "+" ? Z : -Z;
        }(O), O === null)) return this;
        var v = Math.abs(O) <= 16 ? 60 * O : O;
        if (v === 0) return this.utc(S);
        var h = this.clone();
        if (S) return h.$offset = v, h.$u = !1, h;
        var u = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return (h = this.local().add(v + u, i)).$offset = v, h.$x.$localOffset = u, h;
      };
      var f = s.format;
      s.format = function(O) {
        var S = O || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return f.call(this, S);
      }, s.valueOf = function() {
        var O = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * O;
      }, s.isUTC = function() {
        return !!this.$u;
      }, s.toISOString = function() {
        return this.toDate().toISOString();
      }, s.toString = function() {
        return this.toDate().toUTCString();
      };
      var N = s.toDate;
      s.toDate = function(O) {
        return O === "s" && this.$offset ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : N.call(this);
      };
      var T = s.diff;
      s.diff = function(O, S, p) {
        if (O && this.$u === O.$u) return T.call(this, O, S, p);
        var v = this.local(), h = l(O).local();
        return T.call(v, h, S, p);
      };
    };
  });
})(Zt);
var li = Zt.exports;
const ui = /* @__PURE__ */ ut(li);
var qt = { exports: {} };
(function(e, t) {
  (function(i, n) {
    e.exports = n();
  })(lt, function() {
    var i = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
    return function(a, d, r) {
      var l, s = function(f, N, T) {
        T === void 0 && (T = {});
        var O = new Date(f), S = function(p, v) {
          v === void 0 && (v = {});
          var h = v.timeZoneName || "short", u = p + "|" + h, m = n[u];
          return m || (m = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: p, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: h }), n[u] = m), m;
        }(N, T);
        return S.formatToParts(O);
      }, o = function(f, N) {
        for (var T = s(f, N), O = [], S = 0; S < T.length; S += 1) {
          var p = T[S], v = p.type, h = p.value, u = i[v];
          u >= 0 && (O[u] = parseInt(h, 10));
        }
        var m = O[3], b = m === 24 ? 0 : m, R = O[0] + "-" + O[1] + "-" + O[2] + " " + b + ":" + O[4] + ":" + O[5] + ":000", z = +f;
        return (r.utc(R).valueOf() - (z -= z % 1e3)) / 6e4;
      }, c = d.prototype;
      c.tz = function(f, N) {
        f === void 0 && (f = l);
        var T, O = this.utcOffset(), S = this.toDate(), p = S.toLocaleString("en-US", { timeZone: f }), v = Math.round((S - new Date(p)) / 1e3 / 60), h = 15 * -Math.round(S.getTimezoneOffset() / 15) - v;
        if (!Number(h)) T = this.utcOffset(0, N);
        else if (T = r(p, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(h, !0), N) {
          var u = T.utcOffset();
          T = T.add(O - u, "minute");
        }
        return T.$x.$timezone = f, T;
      }, c.offsetName = function(f) {
        var N = this.$x.$timezone || r.tz.guess(), T = s(this.valueOf(), N, { timeZoneName: f }).find(function(O) {
          return O.type.toLowerCase() === "timezonename";
        });
        return T && T.value;
      };
      var w = c.startOf;
      c.startOf = function(f, N) {
        if (!this.$x || !this.$x.$timezone) return w.call(this, f, N);
        var T = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return w.call(T, f, N).tz(this.$x.$timezone, !0);
      }, r.tz = function(f, N, T) {
        var O = T && N, S = T || N || l, p = o(+r(), S);
        if (typeof f != "string") return r(f).tz(S);
        var v = function(b, R, z) {
          var Z = b - 60 * R * 1e3, E = o(Z, z);
          if (R === E) return [Z, R];
          var Y = o(Z -= 60 * (E - R) * 1e3, z);
          return E === Y ? [Z, E] : [b - 60 * Math.min(E, Y) * 1e3, Math.max(E, Y)];
        }(r.utc(f, O).valueOf(), p, S), h = v[0], u = v[1], m = r(h).utcOffset(u);
        return m.$x.$timezone = S, m;
      }, r.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, r.tz.setDefault = function(f) {
        l = f;
      };
    };
  });
})(qt);
var si = qt.exports;
const ci = /* @__PURE__ */ ut(si);
Q.extend(ui);
Q.extend(ci);
const Ye = "YYYY-MM-DD", Xt = "DD MMM, YYYY", $i = "DD MMM";
function Jt(e, t) {
  const i = new Date(e), n = new Date(t);
  let a = n.getFullYear() - i.getFullYear();
  const d = n.getMonth() - i.getMonth();
  return (d < 0 || d === 0 && n.getDate() < i.getDate()) && a--, a;
}
function fi(e = Q.tz.guess()) {
  return Q().tz(e).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
}
function hi(e, t = (/* @__PURE__ */ new Date()).toISOString()) {
  const i = new Date(t), n = new Date(e);
  if (isNaN(i.getTime()) || isNaN(n.getTime()))
    throw new Error("Invalid date format. Please use YYYY-MM-DD.");
  if (n > i)
    throw new Error("Birth date cannot be in the future.");
  const a = i.getTime() - n.getTime(), d = Math.floor(a / (1e3 * 60 * 60 * 24));
  if (d < 7)
    return `${d} day${d !== 1 ? "s" : ""}`;
  if (d < 30) {
    const r = Math.floor(d / 7);
    return `${r} week${r !== 1 ? "s" : ""}`;
  } else if (d < 365) {
    const r = Math.floor(d / 30.44);
    return `${r} month${r !== 1 ? "s" : ""}`;
  } else {
    const r = Math.floor(d / 365.25);
    return `${r} year${r !== 1 ? "s" : ""}`;
  }
}
function gi(e) {
  const t = new Date(e), i = /* @__PURE__ */ new Date(), n = t.getFullYear(), a = t.getMonth(), d = i.getFullYear(), r = i.getMonth();
  return (d - n) * 12 + (r - a);
}
function vi(e) {
  return Jt(e, ct()) + " yrs (" + Qt(e) + ")";
}
function st() {
  return localStorage.getItem("sessionDate") || Q().format(Ye);
}
function pi() {
  return Q().format(Xt);
}
function ct() {
  return Q().format(Ye);
}
function mi(e, t) {
  return Q(e).diff(t, "days");
}
function yi(e) {
  return Q().diff(e, "years");
}
function bi(e, t = ct()) {
  const i = Q(t), n = Q(e), a = i.diff(n, "days") / 365.25;
  return parseFloat(a.toFixed(3));
}
function Ci(e) {
  return Q(e).format("HH:mm");
}
function Qt(e) {
  const t = Q(e).format(Xt);
  return t.match(/invalid/i) ? "" : t;
}
function wi(e) {
  const t = Q(e).format($i);
  return t.match(/invalid/i) ? "" : t;
}
function $t(e) {
  const t = Q(e).format(Ye);
  return t.match(/invalid/i) ? "" : t;
}
function en(e) {
  return Q(st()).subtract(e, "years").format(Ye);
}
function Oi(e) {
  return Q(st()).subtract(e, "years").year();
}
function Si(e) {
  return Q(e).year();
}
function Pi(e) {
  return Q(e).format("MMM");
}
function Ni(e) {
  return Q(e).date();
}
function Ti(e, t, i) {
  return Q(e).add(i, t);
}
function Di(e, t, i) {
  return Q(e).subtract(i, t);
}
function Fi() {
  return Q().year();
}
function Ii(e, t) {
  const i = new Date(e);
  return i.setDate(i.getDate() - t), $t(i);
}
function ki(e) {
  const [t] = en(e).split("-");
  return parseInt(t);
}
function Ei(e, t = -1, i = -1) {
  let n = t.toString(), a = i.toString(), d = e;
  const r = (l) => l.toString().match(/Unknown/i);
  return parseInt(d.toString()) < 1900 && (d = "1900"), (!t || r(t)) && (n = "07"), (!i || r(i)) && (a = "15"), $t(`${d}-${n}-${a}`);
}
function Mi() {
  return Q().tz("Africa/Harare").format("YYYY-MM-DDTHH:mm:ss.SSSZ");
}
function xi(e) {
  const t = Q(), i = Q(e), n = t.diff(i), a = Math.floor(n / (1e3 * 60 * 60 * 24)), d = Math.floor(n % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), r = Math.floor(n % (1e3 * 60 * 60) / (1e3 * 60));
  return `${a} days, ${d} hours, ${r} minutes`;
}
const wt = {
  sessionDate: st,
  currentDate: ct,
  getYearOfAge: ki,
  getYear: Si,
  dateDiffInDays: mi,
  getAgeInYears: yi,
  toStandardHisTimeFormat: Ci,
  toStandardHisDisplayFormat: Qt,
  toStandardHisShortFormat: wi,
  currentDisplayDate: pi,
  stitchDate: Ei,
  toStandardHisFormat: $t,
  estimateDateFromAge: en,
  getYearFromAge: Oi,
  getCurrentYear: Fi,
  getDateBeforeByDays: Ii,
  getMonth: Pi,
  getDay: Ni,
  add: Ti,
  subtract: Di,
  calculateAge: Jt,
  calculateDisplayAge: hi,
  getBirthdateAge: vi,
  ageInMonths: gi,
  getAgeInFloatYears: bi,
  todayDateFormatted: Mi,
  calculateTimeDifference: xi,
  getCurrentDateTimeWithOffset: fi
}, Ai = { key: 0 }, Li = {
  key: 0,
  class: "required"
}, Vi = {
  key: 1,
  class: "left-text"
}, Ri = { key: 1 }, Bi = /* @__PURE__ */ ve({
  __name: "DateInputField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "update:rawValue", "field-changed"],
  setup(e, { expose: t, emit: i }) {
    const n = e, a = i, d = ne(n.config.initialValue || n.config.value || ""), r = ne(null), l = ne(!1), s = ne(["year", "month", "calendar"]);
    te(
      () => n.config.initialValue || n.config.value,
      (h) => {
        h !== void 0 && (d.value = h);
      }
    );
    const o = G(() => {
      if (typeof n.config.disabled == "boolean")
        return n.config.disabled;
      if (typeof n.config.disabled == "function")
        try {
          return n.config.disabled(n.allFormValues);
        } catch (h) {
          return console.warn("Disabled function error:", h), !1;
        }
      return !1;
    }), c = G(() => {
      if (n.config.condition && typeof n.config.condition == "function")
        try {
          return n.config.condition(n.allFormValues);
        } catch (h) {
          return console.warn("Condition function error:", h), !1;
        }
      return !0;
    }), w = G(() => {
      var h, u;
      return !c.value || o.value ? null : ((u = (h = n.config).validation) == null ? void 0 : u.call(h, d.value)) || null;
    }), f = G(() => o.value ? !1 : n.config.error || w.value !== null && l.value), N = (h) => wt.toStandardHisDisplayFormat(h), T = (h) => {
      var m, b;
      const u = N(h);
      d.value = u, r.value = h, l.value = !0, a("update:value", u), a("update:rawValue", h), a("field-changed", {
        fieldName: n.config.name || n.config.header,
        value: u,
        rawValue: h,
        config: n.config
      }), (b = (m = n.config).onChange) == null || b.call(m, u, h);
    }, O = (h) => {
      var u, m;
      l.value = !0, (m = (u = n.config).onBlur) == null || m.call(u, d.value, h);
    }, S = (h) => {
      var u, m;
      l.value = !0, (m = (u = n.config).onInput) == null || m.call(u, d.value, h);
    }, p = (h) => {
      var u, m;
      (m = (u = n.config).onClick) == null || m.call(u, d.value, h);
    }, v = (h) => {
      var u, m;
      (m = (u = n.config).onActionClick) == null || m.call(u, d.value, h);
    };
    return te(o, (h) => {
      h && d.value && (d.value = "", r.value = null);
    }), t({
      getValue: () => d.value,
      getRawValue: () => r.value,
      setValue: (h) => d.value = h,
      setRawValue: (h) => r.value = h,
      isValid: G(() => o.value || w.value === null),
      validate: () => o.value ? null : (l.value = !0, w.value),
      shouldShow: c,
      markAsTouched: () => l.value = !0,
      resetTouched: () => l.value = !1
    }), (h, u) => {
      var b, R;
      const m = Ge("VueDatePicker");
      return c.value ? ($(), P("div", Ai, [
        e.config.header ? ($(), P("h6", {
          key: 0,
          class: H(e.config.bold)
        }, [
          W(x(e.config.header) + " ", 1),
          ((R = (b = e.config).validation) == null ? void 0 : R.call(b, "")) != null ? ($(), P("span", Li, "*")) : C("", !0)
        ], 2)) : C("", !0),
        U("div", {
          style: le({ width: e.config.width || "100%" })
        }, [
          J(m, {
            onDateUpdate: T,
            "auto-apply": "",
            flow: s.value,
            vertical: "",
            "enable-time-picker": !1,
            "auto-position": !0,
            "min-date": e.config.minDate,
            "max-date": e.config.maxDate || F(wt).sessionDate(),
            "prevent-min-max-navigation": ""
          }, {
            trigger: K(() => [
              J(F(zt), {
                value: d.value,
                onIonBlur: O,
                onIonInput: S,
                onClick: p,
                fill: "outline",
                placeholder: e.config.placeholder,
                disabled: o.value,
                class: H(["custom-input", { error: f.value }]),
                style: le({
                  minHeight: (e.config.minHeight || 56) + "px",
                  "--placeholder-font-size": e.config.placeholderFontSize || "14px",
                  "--placeholder-font-weight": e.config.placeholderFontWeight || "600"
                })
              }, {
                default: K(() => {
                  var z;
                  return [
                    e.config.icon || e.config.leftText ? ($(), _(F(be), {
                      key: 0,
                      slot: "start",
                      class: "start-content"
                    }, {
                      default: K(() => [
                        e.config.icon ? ($(), _(F(de), {
                          key: 0,
                          icon: e.config.icon
                        }, null, 8, ["icon"])) : C("", !0),
                        e.config.leftText ? ($(), P("span", Vi, x(e.config.leftText), 1)) : C("", !0)
                      ]),
                      _: 1
                    })) : C("", !0),
                    e.config.unit || e.config.rightIcon ? ($(), _(F(be), {
                      key: 1,
                      slot: "end",
                      class: "end-content"
                    }, {
                      default: K(() => [
                        e.config.rightIcon ? ($(), _(F(de), {
                          key: 0,
                          icon: e.config.rightIcon
                        }, null, 8, ["icon"])) : C("", !0),
                        e.config.unit ? ($(), P("span", Ri, x(e.config.unit), 1)) : C("", !0)
                      ]),
                      _: 1
                    })) : C("", !0),
                    (z = e.config.actionButton) != null && z.show ? ($(), _(F(Kt), {
                      key: 2,
                      slot: "end",
                      onClick: v,
                      size: "small"
                    }, {
                      default: K(() => [
                        e.config.actionButton.icon ? ($(), _(F(de), {
                          key: 0,
                          icon: e.config.actionButton.icon,
                          slot: "start"
                        }, null, 8, ["icon"])) : C("", !0),
                        W(" " + x(e.config.actionButton.text), 1)
                      ]),
                      _: 1
                    })) : C("", !0)
                  ];
                }),
                _: 1
              }, 8, ["value", "placeholder", "disabled", "class", "style"])
            ]),
            _: 1
          }, 8, ["flow", "min-date", "max-date"]),
          w.value && l.value ? ($(), _(F(ge), {
            key: 0,
            class: "error-note"
          }, {
            default: K(() => [
              W(x(w.value), 1)
            ]),
            _: 1
          })) : C("", !0)
        ], 4)
      ])) : C("", !0);
    };
  }
}), _i = /* @__PURE__ */ Se(Bi, [["__scopeId", "data-v-b2aa9e96"]]), Gi = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, 0, [["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function Hi(e, t) {
  var i = Array.prototype.slice.call(t);
  return i.push(Gi), e.apply(this, i);
}
function Ot(e, t) {
  e = e.split("-"), t = t.split("-");
  for (var i = e[0].split("."), n = t[0].split("."), a = 0; a < 3; a++) {
    var d = Number(i[a]), r = Number(n[a]);
    if (d > r) return 1;
    if (r > d) return -1;
    if (!isNaN(d) && isNaN(r)) return 1;
    if (isNaN(d) && !isNaN(r)) return -1;
  }
  return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0;
}
var ji = {}.constructor;
function Ne(e) {
  return e != null && e.constructor === ji;
}
function Te(e) {
  "@babel/helpers - typeof";
  return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Te(e);
}
function ze(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ui(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Yi(n.key), n);
  }
}
function Ke(e, t, i) {
  return t && Ui(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Yi(e) {
  var t = zi(e, "string");
  return Te(t) == "symbol" ? t : t + "";
}
function zi(e, t) {
  if (Te(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (Te(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ki = "1.2.0", Wi = "1.7.35", St = " ext. ", Zi = /^\d+$/, re = /* @__PURE__ */ function() {
  function e(t) {
    ze(this, e), tn(t), this.metadata = t, nn.call(this, t);
  }
  return Ke(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(i) {
        return i !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(i) {
      return this.metadata.countries[i];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(i) {
      return this.getCountryMetadata(i) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(i) {
      if (this.getCountryCodesForCallingCode(i))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[i])
          return !0;
      } else {
        var n = this.countryCallingCodes()[i];
        if (n && n.length === 1 && n[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(i) {
      return this.nonGeographic() ? !!this.nonGeographic()[i] : !this.getCountryCodesForCallingCode(i);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(i) {
      return this.selectNumberingPlan(i);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(i, n) {
      if (i && Zi.test(i) && (n = i, i = null), i && i !== "001") {
        if (!this.hasCountry(i))
          throw new Error("Unknown country: ".concat(i));
        this.numberingPlan = new Pt(this.getCountryMetadata(i), this);
      } else if (n) {
        if (!this.hasCallingCode(n))
          throw new Error("Unknown calling code: ".concat(n));
        this.numberingPlan = new Pt(this.getNumberingPlanMetadata(n), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(i) {
      var n = this.countryCallingCodes()[i];
      if (n)
        return n.length === 1 && n[0].length === 3 ? void 0 : n;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(i) {
      var n = this.getCountryCodesForCallingCode(i);
      if (n)
        return n[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(i) {
      var n = this.getCountryCodeForCallingCode(i);
      if (n)
        return this.getCountryMetadata(n);
      if (this.nonGeographic()) {
        var a = this.nonGeographic()[i];
        if (a)
          return a;
      } else {
        var d = this.countryCallingCodes()[i];
        if (d && d.length === 1 && d[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(i) {
      return this.numberingPlan.type(i);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(i) {
      return this.selectNumberingPlan(i);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]);
}(), Pt = /* @__PURE__ */ function() {
  function e(t, i) {
    ze(this, e), this.globalMetadataObject = i, this.metadata = t, nn.call(this, i.metadata);
  }
  return Ke(e, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(i) {
      return i[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var i = this, n = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return n.map(function(a) {
        return new qi(a, i);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(i) {
      return i[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(i) {
      if (this.hasTypes() && Nt(this.types(), i))
        return new Ji(Nt(this.types(), i), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? St : this.metadata[13] || St;
    }
  }]);
}(), qi = /* @__PURE__ */ function() {
  function e(t, i) {
    ze(this, e), this._format = t, this.metadata = i;
  }
  return Ke(e, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !Xi.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), Xi = /^\(?\$1\)?$/, Ji = /* @__PURE__ */ function() {
  function e(t, i) {
    ze(this, e), this.type = t, this.metadata = i;
  }
  return Ke(e, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
}();
function Nt(e, t) {
  switch (t) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9];
  }
}
function tn(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Ne(e) || !Ne(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ne(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Qi(e) + ": " + e, "."));
}
var Qi = function(t) {
  return Te(t);
};
function ft(e, t) {
  if (t = new re(t), t.hasCountry(e))
    return t.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function ed(e, t) {
  return t.countries.hasOwnProperty(e);
}
function nn(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? Ot(t, Ki) === -1 ? this.v2 = !0 : Ot(t, Wi) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function ht(e, t, i) {
  return td(e, t, void 0, i);
}
function td(e, t, i, n) {
  t && (n = new re(n.metadata), n.selectNumberingPlan(t));
  var a = n.type(i), d = a && a.possibleLengths() || n.possibleLengths();
  if (!d)
    return "IS_POSSIBLE";
  var r = e.length, l = d[0];
  return l === r ? "IS_POSSIBLE" : l > r ? "TOO_SHORT" : d[d.length - 1] < r ? "TOO_LONG" : d.indexOf(r, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function nd(e, t, i) {
  if (t === void 0 && (t = {}), i = new re(i), t.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    i.selectNumberingPlan(e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!i.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      i.selectNumberingPlan(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      i.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (i.possibleLengths())
    return dn(e.phone || e.nationalNumber, e.country, i);
  if (e.countryCallingCode && i.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function dn(e, t, i) {
  switch (ht(e, t, i)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function me(e, t) {
  return e = e || "", new RegExp("^(?:" + t + ")$").test(e);
}
function id(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = dd(e)) || t) {
    i && (e = i);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dd(e, t) {
  if (e) {
    if (typeof e == "string") return Tt(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Tt(e, t) : void 0;
  }
}
function Tt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
var rd = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function gt(e, t, i) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    i = new re(i), i.selectNumberingPlan(e.country, e.countryCallingCode);
    var n = t.v2 ? e.nationalNumber : e.phone;
    if (me(n, i.nationalNumberPattern())) {
      if (Xe(n, "FIXED_LINE", i))
        return i.type("MOBILE") && i.type("MOBILE").pattern() === "" || !i.type("MOBILE") || Xe(n, "MOBILE", i) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var a = id(rd), d; !(d = a()).done; ) {
        var r = d.value;
        if (Xe(n, r, i))
          return r;
      }
    }
  }
}
function Xe(e, t, i) {
  return t = i.type(t), !t || !t.pattern() || t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0 ? !1 : me(e, t.pattern());
}
function ad(e, t, i) {
  if (t = t || {}, i = new re(i), i.selectNumberingPlan(e.country, e.countryCallingCode), i.hasTypes())
    return gt(e, t, i.metadata) !== void 0;
  var n = t.v2 ? e.nationalNumber : e.phone;
  return me(n, i.nationalNumberPattern());
}
function od(e, t, i) {
  var n = new re(i), a = n.getCountryCodesForCallingCode(e);
  return a ? a.filter(function(d) {
    return ld(t, d, i);
  }) : [];
}
function ld(e, t, i) {
  var n = new re(i);
  return n.selectNumberingPlan(t), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var vt = 2, ud = 17, sd = 3, fe = "0-9０-９٠-٩۰-۹", cd = "-‐-―−ー－", $d = "／/", fd = "．.", hd = "  ­​⁠　", gd = "()（）［］\\[\\]", vd = "~⁓∼～", He = "".concat(cd).concat($d).concat(fd).concat(hd).concat(gd).concat(vd), pt = "+＋", pd = new RegExp("([" + fe + "])");
function md(e, t, i, n) {
  if (t) {
    var a = new re(n);
    a.selectNumberingPlan(t, i);
    var d = new RegExp(a.IDDPrefix());
    if (e.search(d) === 0) {
      e = e.slice(e.match(d)[0].length);
      var r = e.match(pd);
      if (!(r && r[1] != null && r[1].length > 0 && r[1] === "0"))
        return e;
    }
  }
}
function yd(e, t) {
  if (e && t.numberingPlan.nationalPrefixForParsing()) {
    var i = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"), n = i.exec(e);
    if (n) {
      var a, d, r = n.length - 1, l = r > 0 && n[r];
      if (t.nationalPrefixTransformRule() && l)
        a = e.replace(i, t.nationalPrefixTransformRule()), r > 1 && (d = n[1]);
      else {
        var s = n[0];
        a = e.slice(s.length), l && (d = n[1]);
      }
      var o;
      if (l) {
        var c = e.indexOf(n[1]), w = e.slice(0, c);
        w === t.numberingPlan.nationalPrefix() && (o = t.numberingPlan.nationalPrefix());
      } else
        o = n[0];
      return {
        nationalNumber: a,
        nationalPrefix: o,
        carrierCode: d
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function bd(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = Cd(e)) || t) {
    i && (e = i);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cd(e, t) {
  if (e) {
    if (typeof e == "string") return Dt(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Dt(e, t) : void 0;
  }
}
function Dt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function wd(e, t) {
  var i = t.countries, n = t.metadata;
  n = new re(n);
  for (var a = bd(i), d; !(d = a()).done; ) {
    var r = d.value;
    if (n.selectNumberingPlan(r), n.leadingDigits()) {
      if (e && e.search(n.leadingDigits()) === 0)
        return r;
    } else if (gt({
      phone: e,
      country: r
    }, void 0, n.metadata))
      return r;
  }
}
function rn(e, t) {
  var i = t.nationalNumber, n = t.metadata, a = n.getCountryCodesForCallingCode(e);
  if (a)
    return a.length === 1 ? a[0] : wd(i, {
      countries: a,
      metadata: n.metadata
    });
}
function it(e, t, i) {
  var n = yd(e, i), a = n.carrierCode, d = n.nationalNumber;
  if (d !== e) {
    if (!Od(e, d, i))
      return {
        nationalNumber: e
      };
    if (i.numberingPlan.possibleLengths() && (t || (t = rn(i.numberingPlan.callingCode(), {
      nationalNumber: d,
      metadata: i
    })), !Sd(d, t, i)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: d,
    carrierCode: a
  };
}
function Od(e, t, i) {
  return !(me(e, i.nationalNumberPattern()) && !me(t, i.nationalNumberPattern()));
}
function Sd(e, t, i) {
  switch (ht(e, t, i)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function Pd(e, t, i, n, a) {
  var d = i ? ft(i, a) : n;
  if (e.indexOf(d) === 0) {
    a = new re(a), a.selectNumberingPlan(i, d);
    var r = e.slice(d.length), l = it(r, t, a), s = l.nationalNumber, o = it(e, t, a), c = o.nationalNumber;
    if (!me(c, a.nationalNumberPattern()) && me(s, a.nationalNumberPattern()) || ht(c, t, a) === "TOO_LONG")
      return {
        countryCallingCode: d,
        number: r
      };
  }
  return {
    number: e
  };
}
function an(e, t, i, n, a) {
  if (!e)
    return {};
  var d;
  if (e[0] !== "+") {
    var r = md(e, i, n, a);
    if (r && r !== e)
      d = !0, e = "+" + r;
    else {
      if (i || n) {
        var l = Pd(e, t, i, n, a), s = l.countryCallingCode, o = l.number;
        if (s)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: s,
            number: o
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: e
      };
    }
  }
  if (e[1] === "0")
    return {};
  a = new re(a);
  for (var c = 2; c - 1 <= sd && c <= e.length; ) {
    var w = e.slice(1, c);
    if (a.hasCallingCode(w))
      return a.selectNumberingPlan(w), {
        countryCallingCodeSource: d ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: w,
        number: e.slice(c)
      };
    c++;
  }
  return {};
}
function Nd(e) {
  return e.replace(new RegExp("[".concat(He, "]+"), "g"), " ").trim();
}
var Td = /(\$\d)/;
function Dd(e, t, i) {
  var n = i.useInternationalFormat, a = i.withNationalPrefix, d = e.replace(new RegExp(t.pattern()), n ? t.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    a && t.nationalPrefixFormattingRule() ? t.format().replace(Td, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return n ? Nd(d) : d;
}
var Fd = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Id(e, t, i) {
  var n = new re(i);
  if (n.selectNumberingPlan(e, t), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (Fd.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
var kd = ";ext=", Pe = function(t) {
  return "([".concat(fe, "]{1,").concat(t, "})");
};
function on(e) {
  var t = "20", i = "15", n = "9", a = "6", d = "[  \\t,]*", r = "[:\\.．]?[  \\t,-]*", l = "#?", s = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", o = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", w = "[  \\t]*", f = "(?:,{2}|;)", N = kd + Pe(t), T = d + s + r + Pe(t) + l, O = d + o + r + Pe(n) + l, S = c + Pe(a) + "#", p = w + f + r + Pe(i) + l, v = w + "(?:,)+" + r + Pe(n) + l;
  return N + "|" + T + "|" + O + "|" + S + "|" + p + "|" + v;
}
var Ed = "[" + fe + "]{" + vt + "}", Md = "[" + pt + "]{0,1}(?:[" + He + "]*[" + fe + "]){3,}[" + He + fe + "]*", xd = new RegExp("^[" + pt + "]{0,1}(?:[" + He + "]*[" + fe + "]){1,2}$", "i"), Ad = Md + // Phone number extensions
"(?:" + on() + ")?", Ld = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Ed + "$|^" + Ad + "$",
  "i"
);
function Vd(e) {
  return e.length >= vt && Ld.test(e);
}
function Rd(e) {
  return xd.test(e);
}
function Bd(e) {
  var t = e.number, i = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(i ? ";ext=" + i : "");
}
var Ft = {
  formatExtension: function(t, i, n) {
    return "".concat(t).concat(n.ext()).concat(i);
  }
};
function _d(e, t, i, n) {
  if (i ? i = jd({}, Ft, i) : i = Ft, n = new re(n), e.country && e.country !== "001") {
    if (!n.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    n.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    n.selectNumberingPlan(e.countryCallingCode);
  else return e.phone || "";
  var a = n.countryCallingCode(), d = i.v2 ? e.nationalNumber : e.phone, r;
  switch (t) {
    case "NATIONAL":
      return d ? (r = je(d, e.carrierCode, "NATIONAL", n, i), Je(r, e.ext, n, i.formatExtension)) : "";
    case "INTERNATIONAL":
      return d ? (r = je(d, null, "INTERNATIONAL", n, i), r = "+".concat(a, " ").concat(r), Je(r, e.ext, n, i.formatExtension)) : "+".concat(a);
    case "E.164":
      return "+".concat(a).concat(d);
    case "RFC3966":
      return Bd({
        number: "+".concat(a).concat(d),
        ext: e.ext
      });
    case "IDD":
      if (!i.fromCountry)
        return;
      var l = Hd(d, e.carrierCode, a, i.fromCountry, n);
      return Je(l, e.ext, n, i.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function je(e, t, i, n, a) {
  var d = Gd(n.formats(), e);
  return d ? Dd(e, d, {
    useInternationalFormat: i === "INTERNATIONAL",
    withNationalPrefix: !(d.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && a && a.nationalPrefix === !1)
  }) : e;
}
function Gd(e, t) {
  return Ud(e, function(i) {
    if (i.leadingDigitsPatterns().length > 0) {
      var n = i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length - 1];
      if (t.search(n) !== 0)
        return !1;
    }
    return me(t, i.pattern());
  });
}
function Je(e, t, i, n) {
  return t ? n(e, t, i) : e;
}
function Hd(e, t, i, n, a) {
  var d = ft(n, a.metadata);
  if (d === i) {
    var r = je(e, t, "NATIONAL", a);
    return i === "1" ? i + " " + r : r;
  }
  var l = Id(n, void 0, a.metadata);
  if (l)
    return "".concat(l, " ").concat(i, " ").concat(je(e, null, "INTERNATIONAL", a));
}
function jd() {
  for (var e = 1, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
    i[n] = arguments[n];
  for (; e < i.length; ) {
    if (i[e])
      for (var a in i[e])
        i[0][a] = i[e][a];
    e++;
  }
  return i[0];
}
function Ud(e, t) {
  for (var i = 0; i < e.length; ) {
    if (t(e[i]))
      return e[i];
    i++;
  }
}
function Ee(e) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ee(e);
}
function It(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? It(Object(i), !0).forEach(function(n) {
      Yd(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : It(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Yd(e, t, i) {
  return (t = ln(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function zd(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Kd(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ln(n.key), n);
  }
}
function Wd(e, t, i) {
  return t && Kd(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ln(e) {
  var t = Zd(e, "string");
  return Ee(t) == "symbol" ? t : t + "";
}
function Zd(e, t) {
  if (Ee(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (Ee(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var qd = /* @__PURE__ */ function() {
  function e(t, i, n) {
    if (zd(this, e), !t)
      throw new TypeError("First argument is required");
    if (typeof t != "string")
      throw new TypeError("First argument must be a string");
    if (t[0] === "+" && !i)
      throw new TypeError("`metadata` argument not passed");
    if (Ne(i) && Ne(i.countries)) {
      n = i;
      var a = t;
      if (!Qd.test(a))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var d = an(a, void 0, void 0, void 0, n), r = d.countryCallingCode, l = d.number;
      if (i = l, t = r, !i)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!i)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof i != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    tn(n);
    var s = Jd(t, n), o = s.country, c = s.countryCallingCode;
    this.country = o, this.countryCallingCode = c, this.nationalNumber = i, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return Wd(e, [{
    key: "setExt",
    value: function(i) {
      this.ext = i;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : od(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return nd(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return ad(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var i = new re(this.getMetadata());
      return i.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(i) {
      return this.number === i.number && this.ext === i.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return gt(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(i, n) {
      return _d(this, i, n ? kt(kt({}, n), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(i) {
      return this.format("NATIONAL", i);
    }
  }, {
    key: "formatInternational",
    value: function(i) {
      return this.format("INTERNATIONAL", i);
    }
  }, {
    key: "getURI",
    value: function(i) {
      return this.format("RFC3966", i);
    }
  }]);
}(), Xd = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function Jd(e, t) {
  var i, n, a = new re(t);
  return Xd(e) ? (i = e, a.selectNumberingPlan(i), n = a.countryCallingCode()) : n = e, {
    country: i,
    countryCallingCode: n
  };
}
var Qd = /^\+\d+$/;
function dt(e) {
  "@babel/helpers - typeof";
  return dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dt(e);
}
function er(e, t, i) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tr(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function nr(e, t, i) {
  return t = xe(t), ir(e, mt() ? Reflect.construct(t, i || [], xe(e).constructor) : t.apply(e, i));
}
function ir(e, t) {
  if (t && (dt(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return dr(e);
}
function dr(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Me(e, t);
}
function rt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return rt = function(n) {
    if (n === null || !or(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, a);
    }
    function a() {
      return ar(n, arguments, xe(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), Me(a, n);
  }, rt(e);
}
function ar(e, t, i) {
  if (mt()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return i && Me(a, i.prototype), a;
}
function mt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mt = function() {
    return !!e;
  })();
}
function or(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Me(e, t) {
  return Me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Me(e, t);
}
function xe(e) {
  return xe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, xe(e);
}
var pe = /* @__PURE__ */ function(e) {
  function t(i) {
    var n;
    return tr(this, t), n = nr(this, t, [i]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
  }
  return rr(t, e), er(t);
}(/* @__PURE__ */ rt(Error)), Et = new RegExp("(?:" + on() + ")$", "i");
function lr(e) {
  var t = e.search(Et);
  if (t < 0)
    return {};
  for (var i = e.slice(0, t), n = e.match(Et), a = 1; a < n.length; ) {
    if (n[a])
      return {
        number: i,
        ext: n[a]
      };
    a++;
  }
}
var ur = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function sr(e) {
  return ur[e];
}
function cr(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = $r(e)) || t) {
    i && (e = i);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $r(e, t) {
  if (e) {
    if (typeof e == "string") return Mt(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Mt(e, t) : void 0;
  }
}
function Mt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function xt(e) {
  for (var t = "", i = cr(e.split("")), n; !(n = i()).done; ) {
    var a = n.value;
    t += fr(a, t) || "";
  }
  return t;
}
function fr(e, t, i) {
  return e === "+" ? t ? void 0 : "+" : sr(e);
}
var un = "+", hr = "[\\-\\.\\(\\)]?", At = "([" + fe + "]|" + hr + ")", gr = "^\\" + un + At + "*[" + fe + "]" + At + "*$", vr = new RegExp(gr, "g"), at = fe, pr = "[" + at + "]+((\\-)*[" + at + "])*", mr = "a-zA-Z", yr = "[" + mr + "]+((\\-)*[" + at + "])*", br = "^(" + pr + "\\.)*" + yr + "\\.?$", Cr = new RegExp(br, "g"), Lt = "tel:", ot = ";phone-context=", wr = ";isub=";
function Or(e) {
  var t = e.indexOf(ot);
  if (t < 0)
    return null;
  var i = t + ot.length;
  if (i >= e.length)
    return "";
  var n = e.indexOf(";", i);
  return n >= 0 ? e.substring(i, n) : e.substring(i);
}
function Sr(e) {
  return e === null ? !0 : e.length === 0 ? !1 : vr.test(e) || Cr.test(e);
}
function Pr(e, t) {
  var i = t.extractFormattedPhoneNumber, n = Or(e);
  if (!Sr(n))
    throw new pe("NOT_A_NUMBER");
  var a;
  if (n === null)
    a = i(e) || "";
  else {
    a = "", n.charAt(0) === un && (a += n);
    var d = e.indexOf(Lt), r;
    d >= 0 ? r = d + Lt.length : r = 0;
    var l = e.indexOf(ot);
    a += e.substring(r, l);
  }
  var s = a.indexOf(wr);
  if (s > 0 && (a = a.substring(0, s)), a !== "")
    return a;
}
var Nr = 250, Tr = new RegExp("[" + pt + fe + "]"), Dr = new RegExp("[^" + fe + "#]+$");
function Fr(e, t, i) {
  if (t = t || {}, i = new re(i), t.defaultCountry && !i.hasCountry(t.defaultCountry))
    throw t.v2 ? new pe("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var n = kr(e, t.v2, t.extract), a = n.number, d = n.ext, r = n.error;
  if (!a) {
    if (t.v2)
      throw r === "TOO_SHORT" ? new pe("TOO_SHORT") : new pe("NOT_A_NUMBER");
    return {};
  }
  var l = Mr(a, t.defaultCountry, t.defaultCallingCode, i), s = l.country, o = l.nationalNumber, c = l.countryCallingCode, w = l.countryCallingCodeSource, f = l.carrierCode;
  if (!i.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new pe("INVALID_COUNTRY");
    return {};
  }
  if (!o || o.length < vt) {
    if (t.v2)
      throw new pe("TOO_SHORT");
    return {};
  }
  if (o.length > ud) {
    if (t.v2)
      throw new pe("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var N = new qd(c, o, i.metadata);
    return s && (N.country = s), f && (N.carrierCode = f), d && (N.ext = d), N.__countryCallingCodeSource = w, N;
  }
  var T = (t.extended ? i.hasSelectedNumberingPlan() : s) ? me(o, i.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: s,
    countryCallingCode: c,
    carrierCode: f,
    valid: T,
    possible: T ? !0 : !!(t.extended === !0 && i.possibleLengths() && dn(o, s, i)),
    phone: o,
    ext: d
  } : T ? Er(s, o, d) : {};
}
function Ir(e, t, i) {
  if (e) {
    if (e.length > Nr) {
      if (i)
        throw new pe("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var n = e.search(Tr);
    if (!(n < 0))
      return e.slice(n).replace(Dr, "");
  }
}
function kr(e, t, i) {
  var n = Pr(e, {
    extractFormattedPhoneNumber: function(r) {
      return Ir(r, i, t);
    }
  });
  if (!n)
    return {};
  if (!Vd(n))
    return Rd(n) ? {
      error: "TOO_SHORT"
    } : {};
  var a = lr(n);
  return a.ext ? a : {
    number: n
  };
}
function Er(e, t, i) {
  var n = {
    country: e,
    phone: t
  };
  return i && (n.ext = i), n;
}
function Mr(e, t, i, n) {
  var a = an(xt(e), void 0, t, i, n.metadata), d = a.countryCallingCodeSource, r = a.countryCallingCode, l = a.number, s;
  if (r)
    n.selectNumberingPlan(r);
  else if (l && (t || i))
    n.selectNumberingPlan(t, i), t && (s = t), r = i || ft(t, n.metadata);
  else return {};
  if (!l)
    return {
      countryCallingCodeSource: d,
      countryCallingCode: r
    };
  var o = it(xt(l), s, n), c = o.nationalNumber, w = o.carrierCode, f = rn(r, {
    nationalNumber: c,
    metadata: n
  });
  return f && (s = f, f === "001" || n.selectNumberingPlan(s)), {
    country: s,
    countryCallingCode: r,
    countryCallingCodeSource: d,
    nationalNumber: c,
    carrierCode: w
  };
}
function Ae(e) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ae(e);
}
function Vt(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vt(Object(i), !0).forEach(function(n) {
      xr(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Vt(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function xr(e, t, i) {
  return (t = Ar(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Ar(e) {
  var t = Lr(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function Lr(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vr(e, t, i) {
  return Fr(e, Rt(Rt({}, t), {}, {
    v2: !0
  }), i);
}
function Le(e) {
  "@babel/helpers - typeof";
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Le(e);
}
function Bt(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bt(Object(i), !0).forEach(function(n) {
      Br(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Bt(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Br(e, t, i) {
  return (t = _r(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function _r(e) {
  var t = Gr(e, "string");
  return Le(t) == "symbol" ? t : t + "";
}
function Gr(e, t) {
  if (Le(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (Le(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hr(e, t) {
  return zr(e) || Yr(e, t) || Ur(e, t) || jr();
}
function jr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ur(e, t) {
  if (e) {
    if (typeof e == "string") return _t(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _t(e, t) : void 0;
  }
}
function _t(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function Yr(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, d, r, l = [], s = !0, o = !1;
    try {
      if (d = (i = i.call(e)).next, t !== 0) for (; !(s = (n = d.call(i)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (c) {
      o = !0, a = c;
    } finally {
      try {
        if (!s && i.return != null && (r = i.return(), Object(r) !== r)) return;
      } finally {
        if (o) throw a;
      }
    }
    return l;
  }
}
function zr(e) {
  if (Array.isArray(e)) return e;
}
function Kr(e) {
  var t = Array.prototype.slice.call(e), i = Hr(t, 4), n = i[0], a = i[1], d = i[2], r = i[3], l, s, o;
  if (typeof n == "string")
    l = n;
  else throw new TypeError("A text for parsing must be a string.");
  if (!a || typeof a == "string")
    r ? (s = d, o = r) : (s = void 0, o = d), a && (s = Rr({
      defaultCountry: a
    }, s));
  else if (Ne(a))
    d ? (s = a, o = d) : o = a;
  else throw new Error("Invalid second argument: ".concat(a));
  return {
    text: l,
    options: s,
    metadata: o
  };
}
function Ve(e) {
  "@babel/helpers - typeof";
  return Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ve(e);
}
function Gt(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gt(Object(i), !0).forEach(function(n) {
      Wr(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Gt(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Wr(e, t, i) {
  return (t = Zr(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Zr(e) {
  var t = qr(e, "string");
  return Ve(t) == "symbol" ? t : t + "";
}
function qr(e, t) {
  if (Ve(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (Ve(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xr(e, t, i) {
  t && t.defaultCountry && !ed(t.defaultCountry, i) && (t = Ht(Ht({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return Vr(e, t, i);
  } catch (n) {
    if (!(n instanceof pe)) throw n;
  }
}
function Jr() {
  var e = Kr(arguments), t = e.text, i = e.options, n = e.metadata;
  return Xr(t, i, n);
}
function Qe() {
  return Hi(Jr, arguments);
}
const Qr = [
  [
    "Afghanistan (‫افغانستان‬‎)",
    "af",
    "93"
  ],
  [
    "Albania (Shqipëri)",
    "al",
    "355"
  ],
  [
    "Algeria (‫الجزائر‬‎)",
    "dz",
    "213"
  ],
  [
    "American Samoa",
    "as",
    "1",
    5,
    ["684"]
  ],
  [
    "Andorra",
    "ad",
    "376"
  ],
  [
    "Angola",
    "ao",
    "244"
  ],
  [
    "Anguilla",
    "ai",
    "1",
    6,
    ["264"]
  ],
  [
    "Antigua and Barbuda",
    "ag",
    "1",
    7,
    ["268"]
  ],
  [
    "Argentina",
    "ar",
    "54"
  ],
  [
    "Armenia (Հայաստան)",
    "am",
    "374"
  ],
  [
    "Aruba",
    "aw",
    "297"
  ],
  [
    "Ascension Island",
    "ac",
    "247"
  ],
  [
    "Australia",
    "au",
    "61",
    0
  ],
  [
    "Austria (Österreich)",
    "at",
    "43"
  ],
  [
    "Azerbaijan (Azərbaycan)",
    "az",
    "994"
  ],
  [
    "Bahamas",
    "bs",
    "1",
    8,
    ["242"]
  ],
  [
    "Bahrain (‫البحرين‬‎)",
    "bh",
    "973"
  ],
  [
    "Bangladesh (বাংলাদেশ)",
    "bd",
    "880"
  ],
  [
    "Barbados",
    "bb",
    "1",
    9,
    ["246"]
  ],
  [
    "Belarus (Беларусь)",
    "by",
    "375"
  ],
  [
    "Belgium (België)",
    "be",
    "32"
  ],
  [
    "Belize",
    "bz",
    "501"
  ],
  [
    "Benin (Bénin)",
    "bj",
    "229"
  ],
  [
    "Bermuda",
    "bm",
    "1",
    10,
    ["441"]
  ],
  [
    "Bhutan (འབྲུག)",
    "bt",
    "975"
  ],
  [
    "Bolivia",
    "bo",
    "591"
  ],
  [
    "Bosnia and Herzegovina (Босна и Херцеговина)",
    "ba",
    "387"
  ],
  [
    "Botswana",
    "bw",
    "267"
  ],
  [
    "Brazil (Brasil)",
    "br",
    "55"
  ],
  [
    "British Indian Ocean Territory",
    "io",
    "246"
  ],
  [
    "British Virgin Islands",
    "vg",
    "1",
    11,
    ["284"]
  ],
  [
    "Brunei",
    "bn",
    "673"
  ],
  [
    "Bulgaria (България)",
    "bg",
    "359"
  ],
  [
    "Burkina Faso",
    "bf",
    "226"
  ],
  [
    "Burundi (Uburundi)",
    "bi",
    "257"
  ],
  [
    "Cambodia (កម្ពុជា)",
    "kh",
    "855"
  ],
  [
    "Cameroon (Cameroun)",
    "cm",
    "237"
  ],
  [
    "Canada",
    "ca",
    "1",
    1,
    ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
  ],
  [
    "Cape Verde (Kabu Verdi)",
    "cv",
    "238"
  ],
  [
    "Caribbean Netherlands",
    "bq",
    "599",
    1,
    ["3", "4", "7"]
  ],
  [
    "Cayman Islands",
    "ky",
    "1",
    12,
    ["345"]
  ],
  [
    "Central African Republic (République centrafricaine)",
    "cf",
    "236"
  ],
  [
    "Chad (Tchad)",
    "td",
    "235"
  ],
  [
    "Chile",
    "cl",
    "56"
  ],
  [
    "China (中国)",
    "cn",
    "86"
  ],
  [
    "Christmas Island",
    "cx",
    "61",
    2,
    ["89164"]
  ],
  [
    "Cocos (Keeling) Islands",
    "cc",
    "61",
    1,
    ["89162"]
  ],
  [
    "Colombia",
    "co",
    "57"
  ],
  [
    "Comoros (‫جزر القمر‬‎)",
    "km",
    "269"
  ],
  [
    "Congo (DRC) (République démocratique du Congo)",
    "cd",
    "243"
  ],
  [
    "Congo (Republic) (Congo-Brazzaville)",
    "cg",
    "242"
  ],
  [
    "Cook Islands",
    "ck",
    "682"
  ],
  [
    "Costa Rica",
    "cr",
    "506"
  ],
  [
    "Côte d’Ivoire",
    "ci",
    "225"
  ],
  [
    "Croatia (Hrvatska)",
    "hr",
    "385"
  ],
  [
    "Cuba",
    "cu",
    "53"
  ],
  [
    "Curaçao",
    "cw",
    "599",
    0
  ],
  [
    "Cyprus (Κύπρος)",
    "cy",
    "357"
  ],
  [
    "Czech Republic (Česká republika)",
    "cz",
    "420"
  ],
  [
    "Denmark (Danmark)",
    "dk",
    "45"
  ],
  [
    "Djibouti",
    "dj",
    "253"
  ],
  [
    "Dominica",
    "dm",
    "1",
    13,
    ["767"]
  ],
  [
    "Dominican Republic (República Dominicana)",
    "do",
    "1",
    2,
    ["809", "829", "849"]
  ],
  [
    "Ecuador",
    "ec",
    "593"
  ],
  [
    "Egypt (‫مصر‬‎)",
    "eg",
    "20"
  ],
  [
    "El Salvador",
    "sv",
    "503"
  ],
  [
    "Equatorial Guinea (Guinea Ecuatorial)",
    "gq",
    "240"
  ],
  [
    "Eritrea",
    "er",
    "291"
  ],
  [
    "Estonia (Eesti)",
    "ee",
    "372"
  ],
  [
    "Eswatini",
    "sz",
    "268"
  ],
  [
    "Ethiopia",
    "et",
    "251"
  ],
  [
    "Falkland Islands (Islas Malvinas)",
    "fk",
    "500"
  ],
  [
    "Faroe Islands (Føroyar)",
    "fo",
    "298"
  ],
  [
    "Fiji",
    "fj",
    "679"
  ],
  [
    "Finland (Suomi)",
    "fi",
    "358",
    0
  ],
  [
    "France",
    "fr",
    "33"
  ],
  [
    "French Guiana (Guyane française)",
    "gf",
    "594"
  ],
  [
    "French Polynesia (Polynésie française)",
    "pf",
    "689"
  ],
  [
    "Gabon",
    "ga",
    "241"
  ],
  [
    "Gambia",
    "gm",
    "220"
  ],
  [
    "Georgia (საქართველო)",
    "ge",
    "995"
  ],
  [
    "Germany (Deutschland)",
    "de",
    "49"
  ],
  [
    "Ghana (Gaana)",
    "gh",
    "233"
  ],
  [
    "Gibraltar",
    "gi",
    "350"
  ],
  [
    "Greece (Ελλάδα)",
    "gr",
    "30"
  ],
  [
    "Greenland (Kalaallit Nunaat)",
    "gl",
    "299"
  ],
  [
    "Grenada",
    "gd",
    "1",
    14,
    ["473"]
  ],
  [
    "Guadeloupe",
    "gp",
    "590",
    0
  ],
  [
    "Guam",
    "gu",
    "1",
    15,
    ["671"]
  ],
  [
    "Guatemala",
    "gt",
    "502"
  ],
  [
    "Guernsey",
    "gg",
    "44",
    1,
    ["1481", "7781", "7839", "7911"]
  ],
  [
    "Guinea (Guinée)",
    "gn",
    "224"
  ],
  [
    "Guinea-Bissau (Guiné Bissau)",
    "gw",
    "245"
  ],
  [
    "Guyana",
    "gy",
    "592"
  ],
  [
    "Haiti",
    "ht",
    "509"
  ],
  [
    "Honduras",
    "hn",
    "504"
  ],
  [
    "Hong Kong (香港)",
    "hk",
    "852"
  ],
  [
    "Hungary (Magyarország)",
    "hu",
    "36"
  ],
  [
    "Iceland (Ísland)",
    "is",
    "354"
  ],
  [
    "India (भारत)",
    "in",
    "91"
  ],
  [
    "Indonesia",
    "id",
    "62"
  ],
  [
    "Iran (‫ایران‬‎)",
    "ir",
    "98"
  ],
  [
    "Iraq (‫العراق‬‎)",
    "iq",
    "964"
  ],
  [
    "Ireland",
    "ie",
    "353"
  ],
  [
    "Isle of Man",
    "im",
    "44",
    2,
    ["1624", "74576", "7524", "7924", "7624"]
  ],
  [
    "Israel (‫ישראל‬‎)",
    "il",
    "972"
  ],
  [
    "Italy (Italia)",
    "it",
    "39",
    0
  ],
  [
    "Jamaica",
    "jm",
    "1",
    4,
    ["876", "658"]
  ],
  [
    "Japan (日本)",
    "jp",
    "81"
  ],
  [
    "Jersey",
    "je",
    "44",
    3,
    ["1534", "7509", "7700", "7797", "7829", "7937"]
  ],
  [
    "Jordan (‫الأردن‬‎)",
    "jo",
    "962"
  ],
  [
    "Kazakhstan (Казахстан)",
    "kz",
    "7",
    1,
    ["33", "7"]
  ],
  [
    "Kenya",
    "ke",
    "254"
  ],
  [
    "Kiribati",
    "ki",
    "686"
  ],
  [
    "Kosovo",
    "xk",
    "383"
  ],
  [
    "Kuwait (‫الكويت‬‎)",
    "kw",
    "965"
  ],
  [
    "Kyrgyzstan (Кыргызстан)",
    "kg",
    "996"
  ],
  [
    "Laos (ລາວ)",
    "la",
    "856"
  ],
  [
    "Latvia (Latvija)",
    "lv",
    "371"
  ],
  [
    "Lebanon (‫لبنان‬‎)",
    "lb",
    "961"
  ],
  [
    "Lesotho",
    "ls",
    "266"
  ],
  [
    "Liberia",
    "lr",
    "231"
  ],
  [
    "Libya (‫ليبيا‬‎)",
    "ly",
    "218"
  ],
  [
    "Liechtenstein",
    "li",
    "423"
  ],
  [
    "Lithuania (Lietuva)",
    "lt",
    "370"
  ],
  [
    "Luxembourg",
    "lu",
    "352"
  ],
  [
    "Macau (澳門)",
    "mo",
    "853"
  ],
  [
    "Madagascar (Madagasikara)",
    "mg",
    "261"
  ],
  [
    "Malawi",
    "mw",
    "265"
  ],
  [
    "Malaysia",
    "my",
    "60"
  ],
  [
    "Maldives",
    "mv",
    "960"
  ],
  [
    "Mali",
    "ml",
    "223"
  ],
  [
    "Malta",
    "mt",
    "356"
  ],
  [
    "Marshall Islands",
    "mh",
    "692"
  ],
  [
    "Martinique",
    "mq",
    "596"
  ],
  [
    "Mauritania (‫موريتانيا‬‎)",
    "mr",
    "222"
  ],
  [
    "Mauritius (Moris)",
    "mu",
    "230"
  ],
  [
    "Mayotte",
    "yt",
    "262",
    1,
    ["269", "639"]
  ],
  [
    "Mexico (México)",
    "mx",
    "52"
  ],
  [
    "Micronesia",
    "fm",
    "691"
  ],
  [
    "Moldova (Republica Moldova)",
    "md",
    "373"
  ],
  [
    "Monaco",
    "mc",
    "377"
  ],
  [
    "Mongolia (Монгол)",
    "mn",
    "976"
  ],
  [
    "Montenegro (Crna Gora)",
    "me",
    "382"
  ],
  [
    "Montserrat",
    "ms",
    "1",
    16,
    ["664"]
  ],
  [
    "Morocco (‫المغرب‬‎)",
    "ma",
    "212",
    0
  ],
  [
    "Mozambique (Moçambique)",
    "mz",
    "258"
  ],
  [
    "Myanmar (Burma) (မြန်မာ)",
    "mm",
    "95"
  ],
  [
    "Namibia (Namibië)",
    "na",
    "264"
  ],
  [
    "Nauru",
    "nr",
    "674"
  ],
  [
    "Nepal (नेपाल)",
    "np",
    "977"
  ],
  [
    "Netherlands (Nederland)",
    "nl",
    "31"
  ],
  [
    "New Caledonia (Nouvelle-Calédonie)",
    "nc",
    "687"
  ],
  [
    "New Zealand",
    "nz",
    "64"
  ],
  [
    "Nicaragua",
    "ni",
    "505"
  ],
  [
    "Niger (Nijar)",
    "ne",
    "227"
  ],
  [
    "Nigeria",
    "ng",
    "234"
  ],
  [
    "Niue",
    "nu",
    "683"
  ],
  [
    "Norfolk Island",
    "nf",
    "672"
  ],
  [
    "North Korea (조선 민주주의 인민 공화국)",
    "kp",
    "850"
  ],
  [
    "North Macedonia (Северна Македонија)",
    "mk",
    "389"
  ],
  [
    "Northern Mariana Islands",
    "mp",
    "1",
    17,
    ["670"]
  ],
  [
    "Norway (Norge)",
    "no",
    "47",
    0
  ],
  [
    "Oman (‫عُمان‬‎)",
    "om",
    "968"
  ],
  [
    "Pakistan (‫پاکستان‬‎)",
    "pk",
    "92"
  ],
  [
    "Palau",
    "pw",
    "680"
  ],
  [
    "Palestine (‫فلسطين‬‎)",
    "ps",
    "970"
  ],
  [
    "Panama (Panamá)",
    "pa",
    "507"
  ],
  [
    "Papua New Guinea",
    "pg",
    "675"
  ],
  [
    "Paraguay",
    "py",
    "595"
  ],
  [
    "Peru (Perú)",
    "pe",
    "51"
  ],
  [
    "Philippines",
    "ph",
    "63"
  ],
  [
    "Poland (Polska)",
    "pl",
    "48"
  ],
  [
    "Portugal",
    "pt",
    "351"
  ],
  [
    "Puerto Rico",
    "pr",
    "1",
    3,
    ["787", "939"]
  ],
  [
    "Qatar (‫قطر‬‎)",
    "qa",
    "974"
  ],
  [
    "Réunion (La Réunion)",
    "re",
    "262",
    0
  ],
  [
    "Romania (România)",
    "ro",
    "40"
  ],
  [
    "Russia (Россия)",
    "ru",
    "7",
    0
  ],
  [
    "Rwanda",
    "rw",
    "250"
  ],
  [
    "Saint Barthélemy",
    "bl",
    "590",
    1
  ],
  [
    "Saint Helena",
    "sh",
    "290"
  ],
  [
    "Saint Kitts and Nevis",
    "kn",
    "1",
    18,
    ["869"]
  ],
  [
    "Saint Lucia",
    "lc",
    "1",
    19,
    ["758"]
  ],
  [
    "Saint Martin (Saint-Martin (partie française))",
    "mf",
    "590",
    2
  ],
  [
    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "pm",
    "508"
  ],
  [
    "Saint Vincent and the Grenadines",
    "vc",
    "1",
    20,
    ["784"]
  ],
  [
    "Samoa",
    "ws",
    "685"
  ],
  [
    "San Marino",
    "sm",
    "378"
  ],
  [
    "São Tomé and Príncipe (São Tomé e Príncipe)",
    "st",
    "239"
  ],
  [
    "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "sa",
    "966"
  ],
  [
    "Senegal (Sénégal)",
    "sn",
    "221"
  ],
  [
    "Serbia (Србија)",
    "rs",
    "381"
  ],
  [
    "Seychelles",
    "sc",
    "248"
  ],
  [
    "Sierra Leone",
    "sl",
    "232"
  ],
  [
    "Singapore",
    "sg",
    "65"
  ],
  [
    "Sint Maarten",
    "sx",
    "1",
    21,
    ["721"]
  ],
  [
    "Slovakia (Slovensko)",
    "sk",
    "421"
  ],
  [
    "Slovenia (Slovenija)",
    "si",
    "386"
  ],
  [
    "Solomon Islands",
    "sb",
    "677"
  ],
  [
    "Somalia (Soomaaliya)",
    "so",
    "252"
  ],
  [
    "South Africa",
    "za",
    "27"
  ],
  [
    "South Korea (대한민국)",
    "kr",
    "82"
  ],
  [
    "South Sudan (‫جنوب السودان‬‎)",
    "ss",
    "211"
  ],
  [
    "Spain (España)",
    "es",
    "34"
  ],
  [
    "Sri Lanka (ශ්‍රී ලංකාව)",
    "lk",
    "94"
  ],
  [
    "Sudan (‫السودان‬‎)",
    "sd",
    "249"
  ],
  [
    "Suriname",
    "sr",
    "597"
  ],
  [
    "Svalbard and Jan Mayen",
    "sj",
    "47",
    1,
    ["79"]
  ],
  [
    "Sweden (Sverige)",
    "se",
    "46"
  ],
  [
    "Switzerland (Schweiz)",
    "ch",
    "41"
  ],
  [
    "Syria (‫سوريا‬‎)",
    "sy",
    "963"
  ],
  [
    "Taiwan (台灣)",
    "tw",
    "886"
  ],
  [
    "Tajikistan",
    "tj",
    "992"
  ],
  [
    "Tanzania",
    "tz",
    "255"
  ],
  [
    "Thailand (ไทย)",
    "th",
    "66"
  ],
  [
    "Timor-Leste",
    "tl",
    "670"
  ],
  [
    "Togo",
    "tg",
    "228"
  ],
  [
    "Tokelau",
    "tk",
    "690"
  ],
  [
    "Tonga",
    "to",
    "676"
  ],
  [
    "Trinidad and Tobago",
    "tt",
    "1",
    22,
    ["868"]
  ],
  [
    "Tunisia (‫تونس‬‎)",
    "tn",
    "216"
  ],
  [
    "Turkey (Türkiye)",
    "tr",
    "90"
  ],
  [
    "Turkmenistan",
    "tm",
    "993"
  ],
  [
    "Turks and Caicos Islands",
    "tc",
    "1",
    23,
    ["649"]
  ],
  [
    "Tuvalu",
    "tv",
    "688"
  ],
  [
    "U.S. Virgin Islands",
    "vi",
    "1",
    24,
    ["340"]
  ],
  [
    "Uganda",
    "ug",
    "256"
  ],
  [
    "Ukraine (Україна)",
    "ua",
    "380"
  ],
  [
    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "ae",
    "971"
  ],
  [
    "United Kingdom",
    "gb",
    "44",
    0
  ],
  [
    "United States",
    "us",
    "1",
    0
  ],
  [
    "Uruguay",
    "uy",
    "598"
  ],
  [
    "Uzbekistan (Oʻzbekiston)",
    "uz",
    "998"
  ],
  [
    "Vanuatu",
    "vu",
    "678"
  ],
  [
    "Vatican City (Città del Vaticano)",
    "va",
    "39",
    1,
    ["06698"]
  ],
  [
    "Venezuela",
    "ve",
    "58"
  ],
  [
    "Vietnam (Việt Nam)",
    "vn",
    "84"
  ],
  [
    "Wallis and Futuna (Wallis-et-Futuna)",
    "wf",
    "681"
  ],
  [
    "Western Sahara (‫الصحراء الغربية‬‎)",
    "eh",
    "212",
    1,
    ["5288", "5289"]
  ],
  [
    "Yemen (‫اليمن‬‎)",
    "ye",
    "967"
  ],
  [
    "Zambia",
    "zm",
    "260"
  ],
  [
    "Zimbabwe",
    "zw",
    "263"
  ],
  [
    "Åland Islands",
    "ax",
    "358",
    1,
    ["18"]
  ]
], ea = Qr.map(([e, t, i, n = 0, a = null]) => ({
  name: e,
  iso2: t.toUpperCase(),
  dialCode: i,
  priority: n,
  areaCodes: a
}));
function ta() {
  return fetch("https://ip2c.org/s").then((e) => e.text()).then((e) => {
    const t = (e || "").toString();
    if (!t || t[0] !== "1")
      throw new Error("unable to fetch the country");
    return t.substr(2, 2);
  });
}
function na(e, t) {
  if (e.setSelectionRange)
    e.focus(), e.setSelectionRange(t, t);
  else if ("createTextRange" in e && typeof e.createTextRange == "function") {
    const i = e.createTextRange();
    i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select();
  }
}
const ia = [
  {
    name: "allCountries",
    type: Array,
    default: ea,
    description: "All countries that are used in <code>libphonenumber-js</code>, can be overridden by this prop",
    inDemo: !1
  },
  {
    name: "autoFormat",
    type: Boolean,
    default: !0,
    description: "Auto update the input to the formatted phone number when it's valid",
    inDemo: !0
  },
  {
    name: "customValidate",
    type: [Boolean, RegExp],
    default: !1,
    description: "Custom validation RegExp for input",
    inDemo: !1
  },
  {
    name: "defaultCountry",
    default: "",
    type: [String, Number],
    description: "Default country (by iso2 or dialCode), will override the country fetched from IP address of user",
    inDemo: !1
  },
  {
    name: "disabled",
    default: !1,
    type: Boolean,
    description: "Disable <code>vue-tel-input</code>, including the input & flag dropdown",
    inDemo: !1
  },
  {
    name: "autoDefaultCountry",
    default: !0,
    type: Boolean,
    description: "To fetch default country based on IP address of user",
    inDemo: !1
  },
  {
    name: "dropdownOptions",
    type: Object,
    description: "Options for dropdown, see below",
    inDemo: !1
  },
  {
    name: "dropdownOptions.disabled",
    default: !1,
    type: Boolean,
    description: "Disable dropdown",
    inDemo: !1
  },
  {
    name: "dropdownOptions.showDialCodeInList",
    default: !0,
    type: Boolean,
    description: "Show dial code in the dropdown list",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showDialCodeInSelection",
    default: !1,
    type: Boolean,
    description: "Show dial code in the dropdown selection",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showFlags",
    default: !0,
    type: Boolean,
    description: "Show flags in the dropdown selection and list",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showSearchBox",
    default: !1,
    type: Boolean,
    description: "Show country search box",
    inDemo: !0
  },
  {
    name: "dropdownOptions.searchBoxPlaceholder",
    default: "",
    type: String,
    description: "Placeholder for the search box",
    inDemo: !1
  },
  {
    name: "dropdownOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native dropdown <code>tabindex</code> attribute",
    inDemo: !1
  },
  {
    name: "ignoredCountries",
    default: [],
    type: Array,
    description: "List of countries will NOT be shown on the dropdown",
    inDemo: !1
  },
  {
    name: "inputOptions",
    type: Object,
    description: "Options for input, see below",
    inDemo: !1
  },
  {
    name: "inputOptions.autocomplete",
    type: String,
    default: "on",
    description: "Native input <code>autocomplete</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.autofocus",
    type: Boolean,
    default: !1,
    description: "Native input <code>autofocus</code> attribute",
    inDemo: !1
  },
  // {
  //   name: 'inputOptions.dynamicPlaceholder',
  //   default: false,
  //   type: Boolean,
  //   description: 'Placeholder as a sample phone number in the current country',
  //   inDemo: false,
  // },
  {
    name: "inputOptions.aria-describedby",
    default: "",
    type: String,
    description: "Native input <code>aria-describedby</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.id",
    default: "",
    type: String,
    description: "Native input <code>id</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.maxlength",
    default: 25,
    type: Number,
    description: "Native input <code>maxlength</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.name",
    default: "telephone",
    type: String,
    description: "Native input <code>name</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.showDialCode",
    default: !1,
    type: Boolean,
    description: "Show dial code in input",
    inDemo: !1
  },
  {
    name: "inputOptions.placeholder",
    default: "Enter a phone number",
    type: String,
    description: "Placeholder for the input",
    inDemo: !1
  },
  {
    name: "inputOptions.readonly",
    default: !1,
    type: Boolean,
    description: "Native input <code>readonly</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.required",
    default: !1,
    type: Boolean,
    description: "Native input <code>required</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native input <code>tabindex</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.type",
    default: "tel",
    type: String,
    description: "Native input <code>type</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the <code>input</code>",
    inDemo: !1
  },
  {
    name: "invalidMsg",
    default: "",
    type: String,
    description: "",
    inDemo: !1
  },
  {
    name: "mode",
    default: "auto",
    type: String,
    description: "Allowed values: <code>'auto'</code> (Default set by phone),  <code>'international'</code> (Format number with the dial code i.e. + 61), <code>'national'</code> (Format number without dial code i.e. 0321232)",
    inDemo: !0,
    options: ["auto", "national", "international"]
  },
  {
    name: "onlyCountries",
    default: [],
    type: Array,
    description: "List of countries will be shown on the dropdown",
    inDemo: !1
  },
  {
    name: "preferredCountries",
    default: [],
    type: Array,
    description: "Preferred countries list, will be on top of the dropdown",
    inDemo: !1
  },
  {
    name: "styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the wrapper",
    inDemo: !1
  },
  {
    name: "validCharactersOnly",
    default: !1,
    type: Boolean,
    description: "Only allow valid characters in a phone number (will also verify in <code>mounted</code>, so phone number with invalid characters will be shown as an empty string)",
    inDemo: !1
  }
], da = [...ia].reduce((e, t) => {
  if (t.name.includes(".")) {
    const [i, n] = t.name.split(".");
    e[i] ? Object.assign(e[i], { [n]: t.default }) : Object.assign(e, { [i]: { [n]: t.default } });
  } else
    Object.assign(e, { [t.name]: t.default });
  return e;
}, {}), jt = {
  options: { ...da }
};
function ae(e) {
  const t = jt.options[e];
  return typeof t > "u" ? jt.options[e] : t;
}
function Ie(e) {
  return e == null ? void 0 : e.toLowerCase();
}
function ke(e) {
  return e == null ? void 0 : e.toUpperCase();
}
const ra = {
  beforeMount(e, t, i) {
    if (typeof t.value != "function") {
      const n = i.context.name;
      let a = `[Vue-click-outside:] provided expression ${t.expression} is not a function, but has to be`;
      n && (a += `Found in component ${n}`), console.warn(a);
    }
    e.clickOutsideEvent = function(n) {
      const a = n.composedPath ? n.composedPath() : n.path;
      e === n.target || e.contains(n.target) || a.includes(e) || t.value(n, e);
    }, document.body.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.body.removeEventListener("click", e.clickOutsideEvent);
  }
}, aa = ["aria-expanded", "tabindex"], oa = { class: "vti__selection" }, la = {
  key: 1,
  class: "vti__country-code"
}, ua = { class: "vti__dropdown-arrow" }, sa = {
  key: 0,
  class: "vti__search_box_container"
}, ca = ["placeholder"], $a = ["onClick", "onMousemove", "aria-selected"], fa = { key: 1 }, ha = ["type", "autocomplete", "autofocus", "disabled", "id", "maxlength", "name", "placeholder", "readonly", "required", "tabindex", "value", "aria-describedby"], ga = /* @__PURE__ */ ve({
  name: "VueTelInput",
  directives: {
    clickOutside: ra
  },
  __name: "vue-tel-input",
  props: /* @__PURE__ */ yt({
    allCountries: {
      type: Array,
      default: () => ae("allCountries")
    },
    autoFormat: {
      type: Boolean,
      default: () => ae("autoFormat")
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: () => ae("customValidate")
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: [String, Number],
      default: () => ae("defaultCountry")
    },
    disabled: {
      type: Boolean,
      default: () => ae("disabled")
    },
    autoDefaultCountry: {
      type: Boolean,
      default: () => ae("autoDefaultCountry")
    },
    dropdownOptions: {
      type: Object,
      default: () => ae("dropdownOptions")
    },
    ignoredCountries: {
      type: Array,
      default: () => ae("ignoredCountries")
    },
    inputOptions: {
      type: Object,
      default: () => ae("inputOptions")
    },
    invalidMsg: {
      type: String,
      default: () => ae("invalidMsg")
    },
    mode: {
      type: String,
      default: () => ae("mode")
    },
    onlyCountries: {
      type: Array,
      default: () => ae("onlyCountries")
    },
    preferredCountries: {
      type: Array,
      default: () => ae("preferredCountries")
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => ae("validCharactersOnly")
    },
    styleClasses: {
      type: [String, Array, Object],
      default: () => ae("styleClasses")
    }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ yt([
    "blur",
    "close",
    "country-changed",
    "enter",
    "focus",
    "on-input",
    "open",
    "space",
    "validate"
  ], ["update:modelValue"]),
  setup(e, { expose: t, emit: i }) {
    const n = We(), a = We(), d = We(), r = i, l = e, s = cn(e, "modelValue");
    te(s, (g, y) => {
      R() ? o.phone = g ?? "" : nt(() => {
        o.phone = y ?? "", Z();
      });
    });
    const o = Yt({
      phone: "",
      activeCountryCode: void 0,
      open: !1,
      finishMounted: !1,
      selectedIndex: null,
      typeToFindInput: "",
      typeToFindTimer: void 0,
      dropdownOpenDirection: "below",
      parsedPlaceholder: l.inputOptions.placeholder,
      searchQuery: ""
    });
    te(() => o.open, (g) => {
      g ? (q(), r("open")) : r("close");
    });
    const c = G(() => l.onlyCountries.length ? l.allCountries.filter(({ iso2: g }) => l.onlyCountries.some((y) => ke(y) === g)) : l.ignoredCountries.length ? l.allCountries.filter(
      ({ iso2: g }) => !l.ignoredCountries.includes(ke(g)) && !l.ignoredCountries.includes(Ie(g))
    ) : l.allCountries), w = G(() => v(o.activeCountryCode));
    te(w, (g, y) => {
      if (!g && y != null && y.iso2) {
        o.activeCountryCode = y.iso2;
        return;
      }
      g != null && g.iso2 && r("country-changed", g);
    });
    const f = G(() => {
      var g;
      const y = Ie(l.mode);
      return y === "auto" ? (g = o.phone) != null && g.startsWith("+") ? "international" : "national" : ["national", "international", "e.164", "rfc3966", "idd"].includes(y) ? y : (console.error('Invalid value of prop "mode"'), "international");
    }), N = G(() => {
      const g = [...p(l.preferredCountries).map((L) => ({ ...L, preferred: !0 })), ...c.value];
      if (!l.dropdownOptions.showSearchBox)
        return g;
      const y = o.searchQuery.toLowerCase().replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, "");
      return g.filter(
        (L) => new RegExp(y, "i").test(L.name) || new RegExp(y, "i").test(L.iso2) || new RegExp(y, "i").test(L.dialCode)
      );
    }), T = G(() => {
      var g;
      const y = o.phone.startsWith("+") ? Qe(o.phone) : Qe(o.phone, o.activeCountryCode), L = {
        country: y == null ? void 0 : y.country,
        countryCode: y == null ? void 0 : y.country,
        formatted: o.phone,
        valid: y == null ? void 0 : y.isValid(),
        possible: (g = y == null ? void 0 : y.isPossible) == null ? void 0 : g.call(y),
        nationalNumber: y == null ? void 0 : y.nationalNumber
      };
      return L.valid && (L.formatted = y == null ? void 0 : y.format(ke(f.value))), y != null && y.country && (l.ignoredCountries.length || l.onlyCountries.length) && !v(y.country) && (L.valid = !1, L.possible = !1, y.country = null), y ? {
        ...L,
        ...y
      } : L;
    });
    te(() => T.value.countryCode, (g) => {
      g && (o.activeCountryCode = g);
    }), te(() => T.value.valid, () => {
      r("validate", T.value);
    }), te(() => T.value.formatted, (g) => {
      !l.autoFormat || l.customValidate || (E(g), nt(() => {
        g && !s.value && (o.phone = g);
      }));
    }), te(() => l.inputOptions.placeholder, O), Ue(() => {
      s.value && (o.phone = s.value.trim()), b(), S().then(() => {
        var g;
        !o.phone && (g = l.inputOptions) != null && g.showDialCode && o.activeCountryCode && (o.phone = `+${o.activeCountryCode}`), r("validate", T.value);
      }).catch(console.error).then(() => {
        o.finishMounted = !0;
      });
    });
    function O() {
      o.parsedPlaceholder = l.inputOptions.placeholder;
    }
    function S() {
      return new Promise((g) => {
        var y;
        if (((y = o.phone) == null ? void 0 : y[0]) === "+") {
          g();
          return;
        }
        if (l.defaultCountry) {
          if (typeof l.defaultCountry == "string") {
            m(l.defaultCountry), g();
            return;
          }
          if (typeof l.defaultCountry == "number") {
            const j = h(l.defaultCountry);
            if (j) {
              m(j.iso2), g();
              return;
            }
          }
        }
        const L = l.preferredCountries[0] || c.value[0];
        l.autoDefaultCountry ? ta().then((j) => {
          m(j || o.activeCountryCode);
        }).catch((j) => {
          console.warn(j), m(L);
        }).then(() => {
          g();
        }) : (m(L), g());
      });
    }
    function p(g = []) {
      return g.map(v).filter(Boolean);
    }
    function v(g = "") {
      return c.value.find((y) => y.iso2 === ke(g));
    }
    function h(g) {
      return c.value.find((y) => Number(y.dialCode) === g);
    }
    function u(g, y) {
      const L = o.selectedIndex === g, j = g === l.preferredCountries.length - 1, ee = l.preferredCountries.some((se) => ke(se) === y);
      return {
        highlighted: L,
        "last-preferred": j,
        preferred: ee
      };
    }
    function m(g) {
      var y, L, j;
      let ee = g;
      if (typeof ee == "string" && (ee = v(ee)), !!ee) {
        if (((y = o.phone) == null ? void 0 : y[0]) === "+" && ee.iso2 && T.value.nationalNumber) {
          o.activeCountryCode = ee.iso2, o.phone = ((L = Qe(
            T.value.nationalNumber,
            ee.iso2
          )) == null ? void 0 : L.formatInternational()) ?? "";
          return;
        }
        if ((j = l.inputOptions) != null && j.showDialCode && ee) {
          o.phone = `+${ee.dialCode}`, o.activeCountryCode = ee.iso2;
          return;
        }
        o.activeCountryCode = ee.iso2, E(o.phone);
      }
    }
    function b() {
      const g = o.phone;
      if (l.validCharactersOnly) {
        const y = o.phone.match(/[()\-+0-9\s]*/g);
        o.phone = y.join("");
      }
      if (l.customValidate && l.customValidate instanceof RegExp) {
        const y = o.phone.match(l.customValidate);
        o.phone = y.join("");
      }
      g !== o.phone && E(o.phone);
    }
    function R() {
      return l.validCharactersOnly && !/^[()\-+0-9\s]*$/.test(o.phone) ? !1 : l.customValidate ? z() : !0;
    }
    function z() {
      return l.customValidate instanceof RegExp ? l.customValidate.test(o.phone) : !1;
    }
    function Z() {
      var g;
      (g = d.value) == null || g.setCustomValidity(T.value.valid ? "" : l.invalidMsg), E(o.phone);
    }
    function E(g) {
      s.value = g, r("on-input", g, T.value, d.value);
    }
    function Y(g) {
      r("blur", g);
    }
    function he(g) {
      na(d.value, o.phone.length), r("focus", g);
    }
    function Re(g) {
      r("enter", g);
    }
    function A(g) {
      r("space", g);
    }
    function k() {
      var g;
      (g = d.value) == null || g.focus();
    }
    function D() {
      var g;
      (g = d.value) == null || g.blur();
    }
    function M() {
      l.disabled || l.dropdownOptions.disabled || (o.searchQuery = "", o.open = !o.open);
    }
    function I() {
      o.open = !1;
    }
    function B(g) {
      if (g.keyCode === 40) {
        g.preventDefault(), o.open = !0, o.selectedIndex === null ? o.selectedIndex = 0 : o.selectedIndex = Math.min(N.value.length - 1, o.selectedIndex + 1);
        const y = a.value.children[o.selectedIndex];
        y.focus(), y.offsetTop + y.clientHeight > a.value.scrollTop + a.value.clientHeight && (a.value.scrollTop = y.offsetTop - a.value.clientHeight + y.clientHeight);
      } else if (g.keyCode === 38) {
        g.preventDefault(), o.open = !0, o.selectedIndex === null ? o.selectedIndex = N.value.length - 1 : o.selectedIndex = Math.max(0, o.selectedIndex - 1);
        const y = a.value.children[o.selectedIndex];
        y.focus(), y.offsetTop < a.value.scrollTop && (a.value.scrollTop = y.offsetTop);
      } else if (g.keyCode === 13)
        o.selectedIndex !== null && m(N.value[o.selectedIndex]), o.open = !o.open;
      else if (o.open) {
        o.typeToFindInput += g.key, clearTimeout(o.typeToFindTimer), o.typeToFindTimer = setTimeout(() => {
          o.typeToFindInput = "";
        }, 700);
        const y = N.value.slice(l.preferredCountries.length).findIndex((L) => Ie(L.name).startsWith(o.typeToFindInput));
        if (y >= 0) {
          o.selectedIndex = l.preferredCountries.length + y;
          const L = a.value.children[o.selectedIndex], j = L.offsetTop < a.value.scrollTop, ee = L.offsetTop + L.clientHeight > a.value.scrollTop + a.value.clientHeight;
          (j || ee) && (a.value.scrollTop = L.offsetTop - a.value.clientHeight / 2);
        }
      }
    }
    function V() {
      o.selectedIndex = N.value.map((g) => g.iso2).indexOf(o.activeCountryCode), o.open = !1;
    }
    function q() {
      window.innerHeight - n.value.getBoundingClientRect().bottom > 200 ? o.dropdownOpenDirection = "below" : o.dropdownOpenDirection = "above";
    }
    return t({
      focus: k,
      blur: D
    }), (g, y) => {
      const L = $n("click-outside");
      return $(), P("div", {
        ref_key: "refRoot",
        ref: n,
        class: H(["vue-tel-input", e.styleClasses, { disabled: e.disabled }])
      }, [
        Oe(($(), P("div", {
          "aria-label": "Country Code Selector",
          "aria-haspopup": "listbox",
          "aria-expanded": o.open,
          role: "button",
          class: H(["vti__dropdown", { open: o.open, disabled: e.dropdownOptions.disabled }]),
          tabindex: e.dropdownOptions.tabindex,
          onKeydown: [
            B,
            oe(M, ["space"]),
            oe(V, ["esc"]),
            oe(V, ["tab"])
          ],
          onClick: M
        }, [
          U("span", oa, [
            e.dropdownOptions.showFlags ? ($(), P("span", {
              key: 0,
              class: H(["vti__flag", F(Ie)(o.activeCountryCode)])
            }, null, 2)) : C("", !0),
            e.dropdownOptions.showDialCodeInSelection ? ($(), P("span", la, " +" + x(w.value && w.value.dialCode), 1)) : C("", !0),
            ie(g.$slots, "arrow-icon", {
              open: o.open
            }, () => [
              U("span", ua, x(o.open ? "▲" : "▼"), 1)
            ])
          ]),
          o.open ? ($(), P("ul", {
            key: 0,
            ref_key: "refList",
            ref: a,
            class: H(["vti__dropdown-list", o.dropdownOpenDirection]),
            role: "listbox"
          }, [
            e.dropdownOptions.showSearchBox ? ($(), P("div", sa, [
              ie(g.$slots, "search-icon"),
              Oe(U("input", {
                class: H(["vti__input", "vti__search_box"]),
                "aria-label": "Search by country name or country code",
                placeholder: e.dropdownOptions.searchBoxPlaceholder || (N.value.length ? N.value[0].name : ""),
                type: "text",
                "onUpdate:modelValue": y[0] || (y[0] = (j) => o.searchQuery = j),
                onClick: y[1] || (y[1] = X(() => {
                }, ["stop"]))
              }, null, 8, ca), [
                [fn, o.searchQuery]
              ])
            ])) : C("", !0),
            ($(!0), P(ce, null, $e(N.value, (j, ee) => ($(), P("li", {
              role: "option",
              class: H(["vti__dropdown-item", u(ee, j.iso2)]),
              key: j.iso2 + (j.preferred ? "-preferred" : ""),
              tabindex: "-1",
              onClick: (se) => m(j),
              onMousemove: (se) => o.selectedIndex = ee,
              "aria-selected": o.activeCountryCode === j.iso2 && !j.preferred
            }, [
              e.dropdownOptions.showFlags ? ($(), P("span", {
                key: 0,
                class: H(["vti__flag", F(Ie)(j.iso2)])
              }, null, 2)) : C("", !0),
              U("strong", null, x(j.name), 1),
              e.dropdownOptions.showDialCodeInList ? ($(), P("span", fa, " +" + x(j.dialCode), 1)) : C("", !0)
            ], 42, $a))), 128))
          ], 2)) : C("", !0)
        ], 42, aa)), [
          [L, I]
        ]),
        Oe(U("input", {
          "onUpdate:modelValue": y[2] || (y[2] = (j) => o.phone = j),
          ref_key: "refInput",
          ref: d,
          type: e.inputOptions.type,
          autocomplete: e.inputOptions.autocomplete,
          autofocus: e.inputOptions.autofocus,
          class: H(["vti__input", "vti__phone", e.inputOptions.styleClasses]),
          disabled: e.disabled,
          id: e.inputOptions.id,
          maxlength: e.inputOptions.maxlength,
          name: e.inputOptions.name,
          placeholder: o.parsedPlaceholder,
          readonly: e.inputOptions.readonly,
          required: e.inputOptions.required,
          tabindex: e.inputOptions.tabindex,
          value: s.value,
          "aria-describedby": e.inputOptions["aria-describedby"],
          onBlur: Y,
          onFocus: he,
          onInput: Z,
          onKeyup: [
            oe(Re, ["enter"]),
            oe(A, ["space"])
          ]
        }, null, 42, ha), [
          [hn, o.phone]
        ]),
        ie(g.$slots, "icon-right")
      ], 2);
    };
  }
}), va = { key: 0 }, pa = {
  key: 0,
  class: "required"
}, ma = /* @__PURE__ */ ve({
  __name: "PhoneInputField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed", "country-changed"],
  setup(e, { expose: t, emit: i }) {
    const n = e, a = i, d = ne(n.config.initialValue || n.config.value || ""), r = ne(!1), l = ne({ dialCode: "265", iso2: "MW", name: "Malawi" }), s = G(() => {
      var p;
      return {
        phoneNumber: (p = d == null ? void 0 : d.value) != null && p.target ? d.value.target.value : d.value,
        countryCode: l.value.dialCode,
        countryIso: l.value.iso2,
        countryName: l.value.name
      };
    });
    te(
      () => n.config.initialValue || n.config.value,
      (p) => {
        p !== void 0 && (typeof p == "string" ? d.value = p : typeof p == "object" && p.phoneNumber && (d.value = p.phoneNumber, p.countryIso && (l.value = {
          dialCode: p.countryCode || l.value.dialCode,
          iso2: p.countryIso,
          name: p.countryName || l.value.name
        })));
      }
    );
    const o = G(() => {
      if (typeof n.config.disabled == "boolean")
        return n.config.disabled;
      if (typeof n.config.disabled == "function")
        try {
          return n.config.disabled(n.allFormValues);
        } catch (p) {
          return console.warn("Disabled function error:", p), !1;
        }
      return !1;
    }), c = G(() => {
      if (n.config.condition && typeof n.config.condition == "function")
        try {
          return n.config.condition(n.allFormValues);
        } catch (p) {
          return console.warn("Condition function error:", p), !1;
        }
      return !0;
    }), w = G(() => {
      var p, v;
      return !c.value || o.value ? null : ((v = (p = n.config).validation) == null ? void 0 : v.call(p, s.value)) || null;
    }), f = G(() => o.value ? !1 : n.config.error || w.value !== null && r.value), N = (p) => {
      var v, h;
      r.value = !0, (h = (v = n.config).onBlur) == null || h.call(v, s.value, p);
    }, T = () => {
      r.value = !0;
    }, O = (p) => {
      var v, h;
      (h = (v = n.config).onClick) == null || h.call(v, s.value, p);
    }, S = (p) => {
      var v, h;
      l.value = p, a("country-changed", p), (h = (v = n.config).onCountryChanged) == null || h.call(v, p);
    };
    return te(o, (p) => {
      p && d.value && (d.value = "");
    }), te(
      s,
      (p) => {
        var v, h;
        (h = (v = n.config).onChange) == null || h.call(v, p), a("update:value", p), a("field-changed", {
          fieldName: n.config.name || n.config.header,
          value: p,
          config: n.config,
          country: l.value
        });
      },
      { deep: !0 }
    ), t({
      getValue: () => s.value,
      getPhoneObject: () => s.value,
      // Explicit method for object
      getPhoneNumber: () => d.value,
      // Method to get just the number
      setValue: (p) => {
        typeof p == "string" ? d.value = p : typeof p == "object" && p.phoneNumber && (d.value = p.phoneNumber);
      },
      getCountry: () => l.value,
      isValid: G(() => o.value || w.value === null),
      validate: () => o.value ? null : (r.value = !0, w.value),
      shouldShow: c,
      markAsTouched: () => r.value = !0,
      resetTouched: () => r.value = !1
    }), (p, v) => {
      var h, u;
      return c.value ? ($(), P("div", va, [
        e.config.header ? ($(), P("h6", {
          key: 0,
          class: H(e.config.bold)
        }, [
          W(x(e.config.header) + " ", 1),
          ((u = (h = e.config).validation) == null ? void 0 : u.call(h, "")) != null ? ($(), P("span", pa, "*")) : C("", !0)
        ], 2)) : C("", !0),
        U("div", {
          style: le({ width: e.config.width || "100%" })
        }, [
          J(F(ga), {
            class: H(["custom-phone-input", { error: f.value }]),
            modelValue: d.value,
            "onUpdate:modelValue": v[0] || (v[0] = (m) => d.value = m),
            onInput: T,
            onBlur: N,
            onClick: O,
            onCountryChanged: S,
            placeholder: e.config.placeholder,
            disabled: o.value,
            preferredCountries: e.config.preferredCountries || ["MW"],
            defaultCountry: e.config.defaultCountry || "MW",
            initialCountry: e.config.initialCountry || "MW",
            inputOptions: {
              showDialCode: !0,
              placeholder: e.config.placeholder,
              ...e.config.inputOptions
            },
            dropdownOptions: {
              showDialCodeInSelection: !0,
              showSearchBox: !0,
              showFlags: !0,
              showDialCodeInList: !0,
              searchBoxPlaceholder: "Search here...",
              ...e.config.dropdownOptions
            },
            mode: e.config.mode || "international",
            autoFormat: e.config.autoFormat !== void 0 ? e.config.autoFormat : !1
          }, null, 8, ["modelValue", "placeholder", "disabled", "class", "preferredCountries", "defaultCountry", "initialCountry", "inputOptions", "dropdownOptions", "mode", "autoFormat"]),
          w.value && r.value ? ($(), _(F(ge), {
            key: 0,
            class: "error-note"
          }, {
            default: K(() => [
              W(x(w.value), 1)
            ]),
            _: 1
          })) : C("", !0)
        ], 4)
      ])) : C("", !0);
    };
  }
}), ya = /* @__PURE__ */ Se(ma, [["__scopeId", "data-v-aa3a712e"]]);
function et(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function ba(e) {
  return (...t) => !e(...t);
}
function Ca(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function wa(e) {
  return e.filter((t) => !t.$isLabel);
}
function tt(e, t) {
  return (i) => i.reduce((n, a) => a[e] && a[e].length ? (n.push({
    $groupLabel: a[t],
    $isLabel: !0
  }), n.concat(a[e])) : n, []);
}
const Ut = (...e) => (t) => e.reduce((i, n) => n(i), t);
var Oa = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(e, t) {
        return et(e) ? "" : t ? e[t] : e;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
      type: Function,
      default: null
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const e = this.search || "", t = e.toLowerCase().trim();
      let i = this.options.concat();
      return this.internalSearch ? i = this.groupValues ? this.filterAndFlat(i, t, this.label) : this.filterOptions(i, t, this.label, this.customLabel) : i = this.groupValues ? tt(this.groupValues, this.groupLabel)(i) : i, i = this.hideSelected ? i.filter(ba(this.isSelected)) : i, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? i.push({ isTag: !0, label: e }) : i.unshift({ isTag: !0, label: e })), i.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((t) => this.customLabel(t, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue: {
      handler() {
        this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
      },
      deep: !0
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(e, t, i) {
      return Ut(
        this.filterGroups(t, i, this.groupValues, this.groupLabel, this.customLabel),
        tt(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return Ut(
        tt(this.groupValues, this.groupLabel),
        wa
      )(e);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(e) {
      this.search = e;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(e) {
      return this.options ? this.optionKeys.indexOf(e) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(e) {
      const t = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(t) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(e) {
      return !!e.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(e) {
      if (et(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return et(t) ? "" : t;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(e, t) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(t) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(t === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            t !== "Tab" && this.removeElement(e);
            return;
          }
          this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([e])) : this.$emit("update:modelValue", e), this.$emit("select", e, this.id), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(e) {
      const t = this.options.find((i) => i[this.groupLabel] === e.$groupLabel);
      if (t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const i = this.trackBy ? t[this.groupValues].map((a) => a[this.trackBy]) : t[this.groupValues], n = this.internalValue.filter(
            (a) => i.indexOf(this.trackBy ? a[this.trackBy] : a) === -1
          );
          this.$emit("update:modelValue", n);
        } else {
          const i = t[this.groupValues].filter(
            (n) => !(this.isOptionDisabled(n) || this.isSelected(n))
          );
          this.max && i.splice(this.max - this.internalValue.length), this.$emit("select", i, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(i)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(e) {
      return e[this.groupValues].every(
        (t) => this.isSelected(t) || this.isOptionDisabled(t)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(e) {
      return e[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(e, t = !0) {
      if (this.disabled || e.$isDisabled) return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const i = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.multiple) {
        const n = this.internalValue.slice(0, i).concat(this.internalValue.slice(i + 1));
        this.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", null);
      this.$emit("remove", e, this.id), this.closeOnSelect && t && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.preventAutofocus || this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.preventAutofocus || typeof this.$el < "u" && this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search !== null && typeof this.$refs.search < "u" && this.$refs.search.blur() : typeof this.$el < "u" && this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u") return;
      const e = this.$el.getBoundingClientRect().top, t = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      t > this.maxHeight || t > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(t - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    },
    /**
     * Filters and sorts the options ready for selection
     * @param {Array} options
     * @param {String} search
     * @param {String} label
     * @param {Function} customLabel
     * @returns {Array}
     */
    filterOptions(e, t, i, n) {
      return t ? e.filter((a) => Ca(n(a, i), t)).sort((a, d) => typeof this.filteringSortFunc == "function" ? this.filteringSortFunc(a, d) : n(a, i).length - n(d, i).length) : e;
    },
    /**
     *
     * @param {String} search
     * @param {String} label
     * @param {String} values
     * @param {String} groupLabel
     * @param {function} customLabel
     * @returns {function(*): *}
     */
    filterGroups(e, t, i, n, a) {
      return (d) => d.map((r) => {
        if (!r[i])
          return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
        const l = this.filterOptions(r[i], e, t, a);
        return l.length ? {
          [n]: r[n],
          [i]: l
        } : [];
      });
    }
  }
}, Sa = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(e, t) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(t)
      };
    },
    groupHighlight(e, t) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": t.$isLabel }
        ];
      const i = this.options.find((n) => n[this.groupLabel] === t.$groupLabel);
      return i && !this.wholeGroupDisabled(i) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(i) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: e } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
    },
    pointerForward() {
      var e;
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, ((e = this.$refs.list) == null ? void 0 : e.scrollTop) <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      var e;
      this.pointer > 0 ? (this.pointer--, ((e = this.$refs.list) == null ? void 0 : e.scrollTop) >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(e) {
      this.pointer = e, this.pointerDirty = !0;
    }
  }
}, sn = {
  name: "vue-multiselect",
  mixins: [Oa, Sa],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: !1
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (e) => `and ${e} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: !1
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the body element
     * @default false
     * @type {Boolean}
     */
    useTeleport: {
      type: Boolean,
      default: !1
    },
    /**
     * Classes to apply to the `multiselect__content-wrapper` element. This element is a teleport element (when enabled), so can be used to specifically target
     * the teleported element
     */
    contentWrapperClass: {
      type: [String, Array, Object],
      default: ""
    }
  },
  data() {
    return {
      dropdownStyles: {},
      ready: !1
    };
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    },
    isRequired() {
      return this.required === !1 ? !1 : this.internalValue.length <= 0;
    }
  },
  watch: {
    isOpen(e) {
      e && (this.useTeleport ? (this.ready = !1, this.$nextTick(() => {
        const t = this.$el.getBoundingClientRect();
        this.dropdownStyles = {
          position: "absolute",
          top: `${t.bottom + window.scrollY}px`,
          left: `${t.left + window.scrollX}px`,
          width: `${t.width}px`,
          zIndex: 9999
        }, this.ready = !0;
      })) : this.ready = !0);
    }
  }
};
const Pa = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"], Na = {
  ref: "tags",
  class: "multiselect__tags"
}, Ta = { class: "multiselect__tags-wrap" }, Da = ["textContent"], Fa = ["onKeydown", "onMousedown"], Ia = ["textContent"], ka = { class: "multiselect__spinner" }, Ea = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"], Ma = ["id", "aria-multiselectable"], xa = { key: 0 }, Aa = { class: "multiselect__option" }, La = ["aria-selected", "id", "role"], Va = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"], Ra = ["data-select", "data-deselect", "onMouseenter", "onMousedown"], Ba = { class: "multiselect__option" }, _a = { class: "multiselect__option" };
function Ga(e, t, i, n, a, d) {
  return $(), P("div", {
    tabindex: e.searchable ? -1 : i.tabindex,
    class: H([{ "multiselect--active": e.isOpen, "multiselect--disabled": i.disabled, "multiselect--above": d.isAbove, "multiselect--has-options-group": d.hasOptionGroup }, "multiselect"]),
    onFocus: t[14] || (t[14] = (r) => e.activate()),
    onBlur: t[15] || (t[15] = (r) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = oe(X((r) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = oe(X((r) => e.pointerBackward(), ["self", "prevent"]), ["up"])),
      t[18] || (t[18] = oe(X((r) => e.addPointerElement(r), ["stop", "self"]), ["enter", "tab"]))
    ],
    onKeyup: t[19] || (t[19] = oe((r) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": e.isOpen,
    "aria-owns": "listbox-" + e.id,
    "aria-activedescendant": e.isOpen && e.pointer !== null ? e.id + "-" + e.pointer : null
  }, [
    ie(e.$slots, "caret", { toggle: e.toggle }, () => [
      U(
        "div",
        {
          onMousedown: t[0] || (t[0] = X((r) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    ie(e.$slots, "clear", { search: e.search }),
    U(
      "div",
      Na,
      [
        ie(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: d.visibleValues,
          isOpen: e.isOpen
        }, () => [
          Oe(U(
            "div",
            Ta,
            [
              ($(!0), P(
                ce,
                null,
                $e(d.visibleValues, (r, l) => ie(e.$slots, "tag", {
                  option: r,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  ($(), P(
                    "span",
                    {
                      class: "multiselect__tag",
                      key: l,
                      onMousedown: t[1] || (t[1] = X(() => {
                      }, ["prevent"]))
                    },
                    [
                      U("span", {
                        textContent: x(e.getOptionLabel(r))
                      }, null, 8, Da),
                      U("i", {
                        tabindex: "1",
                        onKeydown: oe(X((s) => e.removeElement(r), ["prevent"]), ["enter"]),
                        onMousedown: X((s) => e.removeElement(r), ["prevent"]),
                        class: "multiselect__tag-icon"
                      }, null, 40, Fa)
                    ],
                    32
                    /* NEED_HYDRATION */
                  ))
                ])),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [_e, d.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > i.limit ? ie(e.$slots, "limit", { key: 0 }, () => [
            U("strong", {
              class: "multiselect__strong",
              textContent: x(i.limitText(e.internalValue.length - i.limit))
            }, null, 8, Ia)
          ]) : C("v-if", !0)
        ]),
        J(bt, { name: "multiselect__loading" }, {
          default: K(() => [
            ie(e.$slots, "loading", {}, () => [
              Oe(U(
                "div",
                ka,
                null,
                512
                /* NEED_PATCH */
              ), [
                [_e, i.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        e.searchable ? ($(), P("input", {
          key: 0,
          ref: "search",
          name: i.name,
          id: e.id,
          type: "text",
          autocomplete: "off",
          spellcheck: i.spellcheck,
          placeholder: e.placeholder,
          required: d.isRequired,
          style: le(d.inputStyle),
          value: e.search,
          disabled: i.disabled,
          tabindex: i.tabindex,
          "aria-label": i.name + "-searchbox",
          onInput: t[2] || (t[2] = (r) => e.updateSearch(r.target.value)),
          onFocus: t[3] || (t[3] = X((r) => e.activate(), ["prevent"])),
          onBlur: t[4] || (t[4] = X((r) => e.deactivate(), ["prevent"])),
          onKeyup: t[5] || (t[5] = oe((r) => e.deactivate(), ["esc"])),
          onKeydown: [
            t[6] || (t[6] = oe(X((r) => e.pointerForward(), ["prevent"]), ["down"])),
            t[7] || (t[7] = oe(X((r) => e.pointerBackward(), ["prevent"]), ["up"])),
            t[8] || (t[8] = oe(X((r) => e.addPointerElement(r), ["prevent", "stop", "self"]), ["enter"])),
            t[9] || (t[9] = oe(X((r) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, Ea)) : C("v-if", !0),
        d.isSingleLabelVisible ? ($(), P(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: t[10] || (t[10] = X((...r) => e.toggle && e.toggle(...r), ["prevent"]))
          },
          [
            ie(e.$slots, "singleLabel", { option: d.singleValue }, () => [
              W(
                x(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : C("v-if", !0),
        d.isPlaceholderVisible ? ($(), P(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: t[11] || (t[11] = X((...r) => e.toggle && e.toggle(...r), ["prevent"]))
          },
          [
            ie(e.$slots, "placeholder", {}, () => [
              W(
                x(e.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : C("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    ($(), _(gn, {
      to: "body",
      disabled: !i.useTeleport
    }, [
      J(bt, { name: "multiselect" }, {
        default: K(() => [
          e.isOpen && a.ready ? ($(), P(
            "div",
            {
              key: 0,
              class: H(["multiselect__content-wrapper", i.contentWrapperClass]),
              onFocus: t[12] || (t[12] = (...r) => e.activate && e.activate(...r)),
              tabindex: "-1",
              onMousedown: t[13] || (t[13] = X(() => {
              }, ["prevent"])),
              style: le([a.dropdownStyles, { maxHeight: e.optimizedHeight + "px" }]),
              ref: "list"
            },
            [
              U("ul", {
                class: "multiselect__content",
                style: le(d.contentStyle),
                role: "listbox",
                id: "listbox-" + e.id,
                "aria-multiselectable": e.multiple
              }, [
                ie(e.$slots, "beforeList"),
                e.multiple && e.max === e.internalValue.length ? ($(), P("li", xa, [
                  U("span", Aa, [
                    ie(e.$slots, "maxElements", {}, () => [
                      W(
                        "Maximum of " + x(e.max) + " options selected. First remove a selected option to select another.",
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])) : C("v-if", !0),
                !e.max || e.internalValue.length < e.max ? ($(!0), P(
                  ce,
                  { key: 1 },
                  $e(e.filteredOptions, (r, l) => ($(), P("li", {
                    class: "multiselect__element",
                    key: l,
                    "aria-selected": e.isSelected(r),
                    id: e.id + "-" + l,
                    role: r && (r.$isLabel || r.$isDisabled) ? null : "option"
                  }, [
                    r && (r.$isLabel || r.$isDisabled) ? C("v-if", !0) : ($(), P("span", {
                      key: 0,
                      class: H([e.optionHighlight(l, r), "multiselect__option"]),
                      onClick: X((s) => e.select(r), ["stop"]),
                      onMouseenter: X((s) => e.pointerSet(l), ["self"]),
                      "data-select": r && r.isTag ? e.tagPlaceholder : d.selectLabelText,
                      "data-selected": d.selectedLabelText,
                      "data-deselect": d.deselectLabelText
                    }, [
                      ie(e.$slots, "option", {
                        option: r,
                        search: e.search,
                        index: l
                      }, () => [
                        U(
                          "span",
                          null,
                          x(e.getOptionLabel(r)),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 42, Va)),
                    r && (r.$isLabel || r.$isDisabled) ? ($(), P("span", {
                      key: 1,
                      "data-select": e.groupSelect && d.selectGroupLabelText,
                      "data-deselect": e.groupSelect && d.deselectGroupLabelText,
                      class: H([e.groupHighlight(l, r), "multiselect__option"]),
                      onMouseenter: X((s) => e.groupSelect && e.pointerSet(l), ["self"]),
                      onMousedown: X((s) => e.selectGroup(r), ["prevent"])
                    }, [
                      ie(e.$slots, "option", {
                        option: r,
                        search: e.search,
                        index: l
                      }, () => [
                        U(
                          "span",
                          null,
                          x(e.getOptionLabel(r)),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 42, Ra)) : C("v-if", !0)
                  ], 8, La))),
                  128
                  /* KEYED_FRAGMENT */
                )) : C("v-if", !0),
                Oe(U(
                  "li",
                  null,
                  [
                    U("span", Ba, [
                      ie(e.$slots, "noResult", { search: e.search }, () => [
                        t[20] || (t[20] = W("No elements found. Consider changing the search query."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [_e, i.showNoResults && e.filteredOptions.length === 0 && e.search && !i.loading]
                ]),
                Oe(U(
                  "li",
                  null,
                  [
                    U("span", _a, [
                      ie(e.$slots, "noOptions", {}, () => [
                        t[21] || (t[21] = W("List is empty."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [_e, i.showNoOptions && (e.options.length === 0 || d.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !i.loading]
                ]),
                ie(e.$slots, "afterList")
              ], 12, Ma)
            ],
            38
            /* CLASS, STYLE, NEED_HYDRATION */
          )) : C("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      })
    ], 8, ["disabled"]))
  ], 42, Pa);
}
sn.render = Ga;
const Ha = { key: 0 }, ja = {
  key: 0,
  class: "required"
}, Ua = {
  key: 1,
  class: "disabled-overlay"
}, Ya = /* @__PURE__ */ ve({
  __name: "MultiSelectInput",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed", "search-change"],
  setup(e, { expose: t, emit: i }) {
    const n = e, a = i, d = ne(
      n.config.initialValue || n.config.value || (n.config.isMultiple ? [] : null)
    ), r = ne(!1);
    te(
      () => n.config.initialValue || n.config.value,
      (v) => {
        v !== void 0 && (d.value = v, p());
      }
    );
    const l = G(() => {
      if (typeof n.config.options == "function")
        try {
          const v = n.config.options(n.allFormValues);
          return Array.isArray(v) ? v : [];
        } catch (v) {
          return console.warn("Options function error:", v), [];
        }
      return Array.isArray(n.config.options) ? n.config.options : [];
    });
    te(
      l,
      (v) => {
        if (d.value && v.length > 0) {
          const h = n.config.trackBy || "concept_id";
          if (n.config.isMultiple && Array.isArray(d.value)) {
            const u = d.value.filter(
              (m) => v.some((b) => b[h] === m[h])
            );
            u.length !== d.value.length && (d.value = u, p());
          }
        }
      },
      { deep: !0 }
    );
    const s = G(() => {
      if (typeof n.config.disabled == "boolean")
        return n.config.disabled;
      if (typeof n.config.disabled == "function")
        try {
          return n.config.disabled(n.allFormValues);
        } catch (v) {
          return console.warn("Disabled function error:", v), !1;
        }
      return !1;
    }), o = G(() => {
      if (n.config.condition && typeof n.config.condition == "function")
        try {
          return n.config.condition(n.allFormValues);
        } catch (v) {
          return console.warn("Condition function error:", v), !1;
        }
      return !0;
    }), c = G(() => {
      var v, h;
      return !o.value || s.value ? null : ((h = (v = n.config).validation) == null ? void 0 : h.call(v, d.value, n.allFormValues)) || null;
    }), w = G(() => s.value ? !1 : n.config.error || c.value !== null && r.value), f = (v) => {
      s.value || (r.value = !0, d.value = v, p());
    }, N = () => {
      var v, h;
      s.value || (r.value = !0, (h = (v = n.config).onOpen) == null || h.call(v, d.value));
    }, T = () => {
      var v, h;
      (h = (v = n.config).onClose) == null || h.call(v, d.value);
    }, O = (v) => {
      var h, u;
      s.value || (r.value = !0, (u = (h = n.config).onSearchChange) == null || u.call(h, v), a("search-change", v));
    }, S = (v) => {
      var h, u;
      s.value || (r.value = !0, (u = (h = n.config).onTag) == null || u.call(h, v));
    }, p = () => {
      var v, h;
      (h = (v = n.config).onChange) == null || h.call(v, d.value), a("update:value", d.value), a("field-changed", {
        fieldName: n.config.name || n.config.header,
        value: d.value,
        config: n.config
      });
    };
    return te(s, (v) => {
      v && d.value && (d.value = n.config.isMultiple ? [] : null, p());
    }), t({
      getValue: () => d.value,
      setValue: (v) => {
        d.value = v;
      },
      isValid: G(() => s.value || c.value === null),
      // Consider disabled fields as valid
      validate: () => s.value ? null : (r.value = !0, c.value),
      shouldShow: o,
      markAsTouched: () => r.value = !0,
      // Allow parent to mark as touched
      resetTouched: () => r.value = !1,
      // Allow parent to reset touched state
      clearSelection: () => {
        d.value = n.config.isMultiple ? [] : null, p();
      },
      getOptions: () => l.value
      // Expose computed options
    }), (v, h) => {
      var m, b;
      const u = Ge("ion-icon");
      return o.value ? ($(), P("div", Ha, [
        e.config.header ? ($(), P("h6", {
          key: 0,
          class: H(e.config.bold)
        }, [
          W(x(e.config.header) + " ", 1),
          ((b = (m = e.config).validation) == null ? void 0 : b.call(m, "")) != null ? ($(), P("span", ja, "*")) : C("", !0)
        ], 2)) : C("", !0),
        U("div", {
          style: le({ width: e.config.width || "100%" }),
          class: H(["multiselect-wrapper", { disabled: s.value }])
        }, [
          e.config.icon ? ($(), _(u, {
            key: 0,
            class: "left-icon",
            icon: e.config.icon
          }, null, 8, ["icon"])) : C("", !0),
          J(F(sn), {
            modelValue: d.value,
            "onUpdate:modelValue": [
              h[0] || (h[0] = (R) => d.value = R),
              f
            ],
            onOpen: N,
            onClose: T,
            onSearchChange: O,
            onTag: S,
            multiple: e.config.isMultiple || !1,
            taggable: e.config.taggable || !1,
            "hide-selected": e.config.hideSelected || !1,
            "close-on-select": e.config.closeOnSelect !== !1,
            "open-direction": e.config.openDirection || "bottom",
            "prevent-autofocus": e.config.preventAutofocus || !0,
            loading: e.config.loading || !1,
            searchable: e.config.searchable !== !1,
            disabled: s.value,
            placeholder: e.config.placeholder || "",
            "select-label": e.config.selectLabel || "",
            "tag-placeholder": e.config.tagPlaceholder || "",
            label: e.config.label || "name",
            "track-by": e.config.trackBy || "concept_id",
            options: l.value,
            class: H([[
              "custom-multiselect",
              { error: w.value, "disabled-field": s.value }
            ], "no-focus"])
          }, null, 8, ["modelValue", "multiple", "taggable", "hide-selected", "close-on-select", "open-direction", "prevent-autofocus", "loading", "searchable", "disabled", "placeholder", "select-label", "tag-placeholder", "label", "track-by", "options", "class"]),
          s.value ? ($(), P("div", Ua)) : C("", !0),
          c.value && r.value ? ($(), _(F(ge), {
            key: 2,
            class: "error-note"
          }, {
            default: K(() => [
              W(x(c.value), 1)
            ]),
            _: 1
          })) : C("", !0),
          e.config.helperText && !c.value ? ($(), _(F(ge), {
            key: 3,
            class: "helper-note"
          }, {
            default: K(() => [
              W(x(e.config.helperText), 1)
            ]),
            _: 1
          })) : C("", !0)
        ], 6)
      ])) : C("", !0);
    };
  }
}), za = /* @__PURE__ */ Se(Ya, [["__scopeId", "data-v-14301784"]]), Ka = {
  key: 8,
  class: "dashed_bottom_border"
}, qa = /* @__PURE__ */ ve({
  __name: "StandardForm",
  props: {
    formData: {}
  },
  setup(e, { expose: t }) {
    const i = e;
    let n = Yt({});
    const a = ne(/* @__PURE__ */ new Map()), d = G(() => ({ ...n })), r = (c) => {
      if (c.condition && typeof c.condition == "function")
        try {
          return c.condition(n);
        } catch (w) {
          return console.warn(
            "Condition function error for field:",
            c.name || c.header,
            w
          ), !1;
        }
      return !0;
    }, l = (c, w) => {
      if (c) {
        const f = w.name || w.header || `field_${Math.random()}`;
        a.value.set(f, c);
      }
    }, s = () => {
      i.formData.forEach((c) => {
        var N;
        const w = c.name || c.header || `field_${Math.random()}`, f = c.value ?? c.initialValue ?? "";
        f && (n[w] = f, c.obsValueType && ((N = n ?? (n = {})).obsValueType ?? (N.obsValueType = {}), n.obsValueType[w] = c.obsValueType));
      });
    }, o = (c) => {
      n[c.fieldName] = c.value, c.config.onChange && c.config.onChange(c.value, { ...n });
    };
    return Ue(async () => {
      s(), await nt();
    }), t({
      getFormValues: () => ({ ...n }),
      formValues: d,
      // Reactive computed property
      setFormValue: (c, w) => {
        n[c] = w;
        const f = a.value.get(c);
        f && f.setValue && f.setValue(w);
      },
      resetForm: () => {
        Object.keys(n).forEach((c) => {
          n[c] = "";
        }), a.value.forEach((c) => {
          c && c.setValue && c.setValue("");
        });
      },
      validateForm: () => {
        const c = {};
        return a.value.forEach((w, f) => {
          if (w && w.validate) {
            const N = w.validate();
            N && (c[f] = N);
          }
        }), Object.keys(c).length === 0 ? null : c;
      }
    }), (c, w) => ($(), _(F(mn), null, {
      default: K(() => [
        J(F(yn), null, {
          default: K(() => [
            ($(!0), P(ce, null, $e(e.formData, (f, N) => {
              var T, O, S, p, v, h;
              return $(), _(F(bn), {
                key: N,
                size: ((T = f == null ? void 0 : f.grid) == null ? void 0 : T.s) || "12",
                "size-xs": (O = f == null ? void 0 : f.grid) == null ? void 0 : O.xs,
                "size-sm": (S = f == null ? void 0 : f.grid) == null ? void 0 : S.sm,
                "size-md": (p = f == null ? void 0 : f.grid) == null ? void 0 : p.md,
                "size-lg": (v = f == null ? void 0 : f.grid) == null ? void 0 : v.lg,
                "size-xl": (h = f == null ? void 0 : f.grid) == null ? void 0 : h.xl
              }, {
                default: K(() => [
                  f.componentType === "Heading" ? ($(), _(Cn, {
                    key: 0,
                    config: f
                  }, null, 8, ["config"])) : C("", !0),
                  f.componentType === "inputField" && r(f) ? ($(), _(Nn, {
                    key: 1,
                    config: f,
                    allFormValues: F(n),
                    onFieldChanged: o,
                    ref_for: !0,
                    ref: (u) => l(u, f)
                  }, null, 8, ["config", "allFormValues"])) : C("", !0),
                  f.componentType === "multiSelectInputField" && r(f) ? ($(), _(za, {
                    key: 2,
                    config: f,
                    allFormValues: F(n),
                    onFieldChanged: o,
                    ref_for: !0,
                    ref: (u) => l(u, f)
                  }, null, 8, ["config", "allFormValues"])) : C("", !0),
                  f.componentType === "checkboxField" && r(f) ? ($(), _(xn, {
                    key: 3,
                    config: f,
                    allFormValues: F(n),
                    onFieldChanged: o,
                    ref_for: !0,
                    ref: (u) => l(u, f)
                  }, null, 8, ["config", "allFormValues"])) : C("", !0),
                  f.componentType === "radioButtonField" && r(f) ? ($(), _(ai, {
                    key: 4,
                    config: f,
                    allFormValues: F(n),
                    onFieldChanged: o,
                    ref_for: !0,
                    ref: (u) => l(u, f)
                  }, null, 8, ["config", "allFormValues"])) : C("", !0),
                  f.componentType === "dateInputField" && r(f) ? ($(), _(_i, {
                    key: 5,
                    config: f,
                    allFormValues: F(n),
                    onFieldChanged: o,
                    ref_for: !0,
                    ref: (u) => l(u, f)
                  }, null, 8, ["config", "allFormValues"])) : C("", !0),
                  f.componentType === "phoneInputField" && r(f) ? ($(), _(ya, {
                    key: 6,
                    config: f,
                    allFormValues: F(n),
                    onFieldChanged: o,
                    ref_for: !0,
                    ref: (u) => l(u, f)
                  }, null, 8, ["config", "allFormValues"])) : C("", !0),
                  f.componentType === "Alert" && r(f) ? ($(), _(Rn, {
                    key: 7,
                    config: f,
                    allFormValues: d.value
                  }, null, 8, ["config", "allFormValues"])) : C("", !0),
                  f.componentType === "Dashes" ? ($(), P("div", Ka)) : C("", !0)
                ]),
                _: 2
              }, 1032, ["size", "size-xs", "size-sm", "size-md", "size-lg", "size-xl"]);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  qa as StandardForm,
  qa as default
};
