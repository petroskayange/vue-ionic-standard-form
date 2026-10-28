var Do = Object.defineProperty;
var So = (e, n, a) => n in e ? Do(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a;
var we = (e, n, a) => So(e, typeof n != "symbol" ? n + "" : n, a);
import { defineComponent as Ae, createElementBlock as w, createCommentVNode as T, openBlock as d, normalizeStyle as Ie, toDisplayString as J, computed as E, ref as U, watch as De, onMounted as Ue, onUnmounted as An, normalizeClass as le, createElementVNode as q, createTextVNode as xe, createVNode as Ce, createBlock as de, unref as m, withCtx as ie, withModifiers as Me, Teleport as ma, Fragment as ke, renderList as Pe, nextTick as je, withKeys as ft, renderSlot as ve, withDirectives as Pt, vShow as Ut, Transition as ln, createSlots as vt, reactive as sn, useSlots as gn, toRef as jn, mergeProps as st, isRef as Or, normalizeProps as ct, guardReactiveProps as xt, resolveDynamicComponent as Jn, h as Oo, render as Pr, getCurrentScope as Po, onScopeDispose as Mo, onBeforeUpdate as Ao, mergeModels as Mr, shallowRef as _a, useModel as No, resolveDirective as Fo, vModelText as Io, vModelDynamic as Eo, toRefs as ra, resolveComponent as _l, inject as Vo, onBeforeUnmount as Ro } from "vue";
import { IonInput as pa, IonLabel as kt, IonIcon as Ve, IonButton as nn, IonNote as ht, IonTextarea as Lo, IonCheckbox as Ta, IonRadioGroup as Ar, IonRadio as Da, IonDatetime as Bo, IonPopover as Ho, IonRow as Tl, IonProgressBar as Yo, IonList as jo, IonItem as qo, IonSpinner as Go, IonGrid as zo, IonCol as Nr } from "@ionic/vue";
const Wo = /* @__PURE__ */ Ae({
  __name: "Heading",
  props: {
    config: {}
  },
  setup(e) {
    return (n, a) => e.config.name != "null" ? (d(), w("div", {
      key: 0,
      style: Ie("font-weight:700; width:100%; text-align:" + e.config.position + ";"),
      class: "item_header"
    }, J(e.config.name), 5)) : T("", !0);
  }
}), Uo = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 112v288M400 256H112' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>", Ko = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect width='416' height='384' x='48' y='80' stroke-linejoin='round' rx='48' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='296' cy='232' r='24'/><circle cx='376' cy='232' r='24'/><circle cx='296' cy='312' r='24'/><circle cx='376' cy='312' r='24'/><circle cx='136' cy='312' r='24'/><circle cx='216' cy='312' r='24'/><circle cx='136' cy='392' r='24'/><circle cx='216' cy='392' r='24'/><circle cx='296' cy='392' r='24'/><path stroke-linecap='round' stroke-linejoin='round' d='M128 48v32M384 48v32' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' d='M464 160H48' class='ionicon-fill-none ionicon-stroke-width'/></svg>", Xo = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M416 128 192 384l-96-96' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>", Fr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 184 144 144 144-144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>", Qo = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 328 144-144 144 144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>", Gt = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34Z'/></svg>", Zo = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M368 368 144 144M368 144 144 368' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>", Jo = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M220 220h32v116' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M208 340h88' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M248 130a26 26 0 1 0 26 26 26 26 0 0 0-26-26'/></svg>", ei = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M338.29 338.29 448 448' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>", Ir = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8' class='ionicon-fill-none'/><path d='M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z'/></svg>", ti = (e) => {
  const n = String(e ?? "").toLocaleLowerCase(), a = n.search(new RegExp("\\p{L}", "u"));
  return a < 0 ? n : n.slice(0, a) + n[a].toLocaleUpperCase() + n.slice(a + 1);
}, ni = { class: "field-header" }, ai = {
  key: 0,
  class: "required"
}, ri = ["src"], li = {
  key: 2,
  class: "left-text"
}, oi = {
  key: 0,
  class: "stepper-controls"
}, ii = {
  key: 2,
  class: "static-unit"
}, si = { class: "selected-unit-text" }, ui = ["onClick"], di = /* @__PURE__ */ Ae({
  __name: "InputField",
  props: {
    config: {},
    allFormValues: {},
    mode: {}
  },
  emits: ["update:value", "field-changed", "update:unit"],
  setup(e, { expose: n, emit: a }) {
    var H;
    const t = e, r = a, l = E(() => t.config.mode || t.mode || ""), o = E(() => l.value === "card" || l.value === "neonatal" ? "neonatal-style" : ""), i = t.config.name || t.config.header || "", u = U(t.config.initialValue || t.config.value || ((H = t.allFormValues) == null ? void 0 : H[i]) || ""), s = U(t.config.initialUnit || (t.config.unitOptions ? null : "")), c = U(!1), y = U(!1), C = U(!1), _ = U(null), k = U(null), h = U({
      top: "0px",
      left: "0px",
      display: "none"
    }), x = U(!1), D = E(() => {
      if (!s.value || !t.config.unitOptions) return "";
      const Y = t.config.unitOptions.find((S) => S.value === s.value);
      return (Y == null ? void 0 : Y.label) || "";
    });
    De(
      () => t.config.initialValue || t.config.value,
      (Y) => {
        Y !== void 0 && (u.value = Y);
      }
    ), De(
      () => t.config.initialUnit,
      (Y) => {
        Y !== void 0 && Y !== s.value && (s.value = Y);
      }
    ), Ue(() => {
      t.config.unitOptions && t.config.initialUnit !== void 0 && t.config.initialUnit !== null && (r("update:unit", t.config.initialUnit), r("field-changed", {
        fieldName: `${t.config.name || t.config.header}_unit`,
        value: t.config.initialUnit,
        config: t.config
      })), document.addEventListener("click", f), x.value = !0;
    }), An(() => {
      document.removeEventListener("click", f);
    });
    const g = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (Y) {
          return console.warn("Disabled function error:", Y), !1;
        }
      return !1;
    }), p = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (Y) {
          return console.warn("Condition function error:", Y), !1;
        }
      return !0;
    }), A = E(() => {
      var Y, S;
      return !p.value || g.value ? null : ((S = (Y = t.config).validation) == null ? void 0 : S.call(Y, u.value, t.allFormValues)) || null;
    }), G = U(!1), P = E(() => c.value && !(t.config.validateOnBlur && G.value)), V = E(() => g.value ? !1 : t.config.error || A.value !== null && P.value), j = E(() => {
      var Y, S;
      return !p.value || g.value ? null : t.config.unitOptions && ((S = (Y = t.config).unitValidation) == null ? void 0 : S.call(Y, s.value)) || null;
    }), W = E(() => g.value ? !1 : j.value !== null && y.value), N = (Y) => String(Y ?? "").replace(/\D+/g, ""), z = () => {
      if (!t.config.digitsOnly)
        return;
      const Y = N(u.value);
      Y !== String(u.value ?? "") && (u.value = Y);
    }, ae = (Y) => {
      var S, oe;
      c.value = !0, G.value = !1, (oe = (S = t.config).onBlur) == null || oe.call(S, u.value, Y.detail);
    }, ce = (Y) => {
      var S, oe;
      c.value = !0, G.value = !0, z(), (oe = (S = t.config).onInput) == null || oe.call(S, u.value, Y);
    }, B = async (Y) => {
      if (t.config.type === "number" || t.config.digitsOnly) {
        await je();
        const S = Y.target;
        S && S.value !== void 0 && S.value !== u.value && (u.value = S.value), z();
      }
    }, b = (Y) => {
      var S, oe;
      (oe = (S = t.config).onClick) == null || oe.call(S, u.value, Y);
    }, I = (Y) => {
      var S, oe;
      if (t.config.digitsOnly) {
        const $e = /* @__PURE__ */ new Set([
          "Backspace",
          "Delete",
          "Tab",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Home",
          "End",
          "Enter",
          "Escape"
        ]), X = Y.ctrlKey || Y.metaKey || Y.altKey, ye = /^[0-9]$/.test(Y.key);
        if (!X && !$e.has(Y.key) && !ye) {
          Y.preventDefault();
          return;
        }
      }
      (oe = (S = t.config).onKeydown) == null || oe.call(S, u.value, Y);
    }, $ = (Y) => {
      const S = Number(u.value || 0), oe = Number(t.config.step ?? 1) || 1, $e = t.config.min !== void 0 && t.config.min !== null && t.config.min !== "" ? Number(t.config.min) : Number.NaN, X = t.config.max !== void 0 && t.config.max !== null && t.config.max !== "" ? Number(t.config.max) : Number.NaN;
      let ye = Number.isFinite(S) ? S + Y * oe : oe;
      Y > 0 && !Number.isFinite(S) && Number.isFinite($e) && (ye = $e), Y < 0 && !Number.isFinite(S) && Number.isFinite($e) && (ye = $e), Number.isFinite($e) && ye < $e && (ye = $e), Number.isFinite(X) && ye > X && (ye = X), u.value = String(Math.trunc(ye)), c.value = !0;
    }, O = (Y) => {
      var S, oe;
      (oe = (S = t.config).onActionClick) == null || oe.call(S, u.value, Y, L);
    }, L = (Y) => {
      u.value = Y;
    }, R = async (Y) => {
      Y && (Y.stopPropagation(), Y.preventDefault()), C.value = !C.value, C.value && (await je(), K());
    }, K = () => {
      if (!_.value) return;
      const Y = _.value.getBoundingClientRect();
      h.value = {
        top: `${Y.bottom + window.scrollY + 4}px`,
        left: `${Y.right + window.scrollX - 120}px`,
        display: C.value ? "block" : "none"
      };
    }, v = () => {
      C.value = !1, y.value = !0;
    }, F = (Y) => {
      s.value = Y, y.value = !0, v();
    }, f = (Y) => {
      C.value && _.value && !_.value.contains(Y.target) && k.value && !k.value.contains(Y.target) && v();
    };
    return De(g, (Y) => {
      Y && (u.value && (u.value = ""), s.value && (s.value = t.config.unitOptions && t.config.unitOptions.length > 0 ? t.config.unitOptions[0].value : null));
    }), De(u, (Y) => {
      if (t.config.capitalizeFirstLetter) {
        const S = ti(Y);
        if (S !== String(Y ?? "")) {
          u.value = S;
          return;
        }
      }
      r("update:value", Y), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: Y,
        config: t.config
      });
    }), De(s, (Y, S) => {
      x.value && t.config.clearValueOnUnitChange && S && Y !== S && u.value !== "" && (u.value = "", c.value = !1), r("update:unit", Y), r("field-changed", {
        fieldName: `${t.config.name || t.config.header}_unit`,
        value: Y,
        config: t.config
      });
    }), n({
      getValue: () => u.value,
      getUnit: () => s.value,
      setValue: (Y) => {
        u.value = Y;
      },
      setUnit: (Y) => {
        s.value = Y;
      },
      isValid: E(() => g.value || A.value === null && j.value === null),
      validate: () => g.value ? null : (c.value = !0, y.value = !0, A.value && j.value ? `${A.value}
${j.value}` : A.value ? A.value : j.value ? j.value : null),
      shouldShow: p,
      markAsTouched: () => {
        c.value = !0, y.value = !0;
      },
      resetTouched: () => {
        c.value = !1, y.value = !1;
      },
      clearError: () => {
        c.value = !1, y.value = !1;
      }
    }), (Y, S) => {
      var oe, $e;
      return d(), w("div", {
        class: le(["input-wrapper", [o.value, { "has-padding": e.config.padding === "true" || e.config.padding === !0 }]])
      }, [
        q("div", ni, [
          e.config.header ? (d(), w("h6", {
            key: 0,
            class: le(e.config.bold)
          }, [
            xe(J(e.config.header) + " ", 1),
            (($e = (oe = e.config).validation) == null ? void 0 : $e.call(oe, "", e.allFormValues)) != null ? (d(), w("span", ai, "*")) : T("", !0)
          ], 2)) : T("", !0)
        ]),
        q("div", {
          style: Ie({ width: e.config.width || "100%", position: "relative" })
        }, [
          Ce(m(pa), {
            modelValue: u.value,
            "onUpdate:modelValue": S[2] || (S[2] = (X) => u.value = X),
            onIonBlur: ae,
            onIonInput: ce,
            onIonChange: B,
            onClick: b,
            onKeydown: I,
            fill: "outline",
            type: e.config.type || "text",
            placeholder: e.config.placeholder,
            inputmode: e.config.inputMode || (e.config.type === "number" ? "numeric" : "text"),
            autocapitalize: e.config.capitalizeFirstLetter ? "words" : "sentences",
            pattern: e.config.pattern,
            min: e.config.min != null ? String(e.config.min) : void 0,
            max: e.config.max != null ? String(e.config.max) : void 0,
            step: e.config.step != null ? String(e.config.step) : void 0,
            disabled: g.value,
            class: le(["custom-input", { error: V.value }]),
            style: Ie({ minHeight: (e.config.minHeight || (l.value === "neonatal", 56)) + "px" })
          }, {
            default: ie(() => {
              var X;
              return [
                e.config.icon || e.config.imageIcon || e.config.leftText ? (d(), de(m(kt), {
                  key: 0,
                  slot: "start",
                  class: "start-content"
                }, {
                  default: ie(() => [
                    e.config.icon ? (d(), de(m(Ve), {
                      key: 0,
                      icon: e.config.icon
                    }, null, 8, ["icon"])) : T("", !0),
                    e.config.imageIcon ? (d(), w("img", {
                      key: 1,
                      src: e.config.imageIcon,
                      class: "image-icon"
                    }, null, 8, ri)) : T("", !0),
                    e.config.leftText ? (d(), w("span", li, J(e.config.leftText), 1)) : T("", !0)
                  ]),
                  _: 1
                })) : T("", !0),
                e.config.unitOptions || e.config.unit || e.config.rightIcon || e.config.showStepperControls ? (d(), de(m(kt), {
                  key: 1,
                  slot: "end",
                  class: "end-content"
                }, {
                  default: ie(() => [
                    e.config.showStepperControls ? (d(), w("div", oi, [
                      q("button", {
                        type: "button",
                        class: "stepper-button",
                        "aria-label": "Increase value",
                        onClick: S[0] || (S[0] = Me((ye) => $(1), ["stop", "prevent"]))
                      }, [
                        Ce(m(Ve), { icon: m(Qo) }, null, 8, ["icon"])
                      ]),
                      q("button", {
                        type: "button",
                        class: "stepper-button",
                        "aria-label": "Decrease value",
                        onClick: S[1] || (S[1] = Me((ye) => $(-1), ["stop", "prevent"]))
                      }, [
                        Ce(m(Ve), { icon: m(Fr) }, null, 8, ["icon"])
                      ])
                    ])) : T("", !0),
                    e.config.rightIcon && !e.config.unitOptions ? (d(), de(m(Ve), {
                      key: 1,
                      icon: e.config.rightIcon
                    }, null, 8, ["icon"])) : T("", !0),
                    e.config.unit && !e.config.unitOptions ? (d(), w("span", ii, J(e.config.unit), 1)) : T("", !0),
                    e.config.unitOptions ? (d(), w("div", {
                      key: 3,
                      class: le(["custom-unit-selector", { error: W.value, active: C.value }]),
                      onClick: Me(R, ["stop", "prevent"]),
                      ref_key: "unitSelectorRef",
                      ref: _
                    }, [
                      q("span", si, J(D.value || e.config.unitPlaceholder || "Select"), 1),
                      Ce(m(Ve), {
                        icon: m(Fr),
                        class: "dropdown-icon"
                      }, null, 8, ["icon"])
                    ], 2)) : T("", !0)
                  ]),
                  _: 1
                })) : T("", !0),
                (X = e.config.actionButton) != null && X.show ? (d(), de(m(nn), {
                  key: 2,
                  slot: "end",
                  onClick: O,
                  size: "small"
                }, {
                  default: ie(() => [
                    e.config.actionButton.icon ? (d(), de(m(Ve), {
                      key: 0,
                      icon: e.config.actionButton.icon,
                      slot: "start"
                    }, null, 8, ["icon"])) : T("", !0),
                    xe(" " + J(e.config.actionButton.text), 1)
                  ]),
                  _: 1
                })) : T("", !0)
              ];
            }),
            _: 1
          }, 8, ["modelValue", "type", "placeholder", "inputmode", "autocapitalize", "pattern", "min", "max", "step", "disabled", "class", "style"]),
          (d(), de(ma, { to: "body" }, [
            q("div", {
              class: "unit-dropdown-menu",
              ref_key: "dropdownRef",
              ref: k,
              style: Ie({
                ...h.value,
                display: C.value && e.config.unitOptions ? "block" : "none"
              })
            }, [
              (d(!0), w(ke, null, Pe(e.config.unitOptions, (X) => (d(), w("div", {
                key: X.value,
                class: le(["unit-option", { selected: s.value === X.value }]),
                onClick: Me((ye) => F(X.value), ["stop"])
              }, [
                q("span", null, J(X.label), 1),
                s.value === X.value ? (d(), de(m(Ve), {
                  key: 0,
                  icon: m(Xo),
                  class: "check-icon"
                }, null, 8, ["icon"])) : T("", !0)
              ], 10, ui))), 128))
            ], 4)
          ])),
          A.value && P.value ? (d(), de(m(ht), {
            key: 0,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(A.value), 1)
            ]),
            _: 1
          })) : T("", !0),
          j.value && y.value ? (d(), de(m(ht), {
            key: 1,
            class: "error-note unit-error-note"
          }, {
            default: ie(() => [
              xe(J(j.value), 1)
            ]),
            _: 1
          })) : T("", !0)
        ], 4),
        C.value ? (d(), w("div", {
          key: 0,
          class: "dropdown-backdrop",
          onClick: v
        })) : T("", !0)
      ], 2);
    };
  }
}), lt = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, r] of n)
    a[t] = r;
  return a;
}, ci = /* @__PURE__ */ lt(di, [["__scopeId", "data-v-aaeed221"]]), fi = {
  key: 0,
  class: "required"
}, vi = {
  key: 1,
  class: "left-text"
}, hi = /* @__PURE__ */ Ae({
  __name: "TextAreaField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(t.config.initialValue || t.config.value || ""), o = U(!1);
    De(
      () => t.config.initialValue || t.config.value,
      (h) => {
        h !== void 0 && (l.value = h);
      }
    );
    const i = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (h) {
          return console.warn("Disabled function error:", h), !1;
        }
      return !1;
    }), u = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (h) {
          return console.warn("Condition function error:", h), !1;
        }
      return !0;
    }), s = E(() => {
      var h, x;
      return !u.value || i.value ? null : ((x = (h = t.config).validation) == null ? void 0 : x.call(h, l.value, t.allFormValues)) || null;
    }), c = E(() => i.value ? !1 : t.config.error || s.value !== null && o.value), y = (h) => {
      var x, D;
      o.value = !0, (D = (x = t.config).onBlur) == null || D.call(x, l.value, h.detail);
    }, C = (h) => {
      var x, D;
      o.value = !0, (D = (x = t.config).onInput) == null || D.call(x, l.value, h);
    }, _ = (h) => {
      var x, D;
      (D = (x = t.config).onClick) == null || D.call(x, l.value, h);
    }, k = (h) => {
      var x, D;
      (D = (x = t.config).onActionClick) == null || D.call(x, l.value, h);
    };
    return De(i, (h) => {
      h && l.value && (l.value = "");
    }), De(l, (h) => {
      var x, D;
      (D = (x = t.config).onChange) == null || D.call(x, h), r("update:value", h), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: h,
        config: t.config
      });
    }), n({
      getValue: () => l.value,
      setValue: (h) => l.value = h,
      isValid: E(() => i.value || s.value === null),
      validate: () => i.value ? null : (o.value = !0, s.value),
      shouldShow: u,
      markAsTouched: () => {
        o.value = !0;
      },
      resetTouched: () => {
        o.value = !1;
      }
    }), (h, x) => {
      var D, g;
      return d(), w("div", null, [
        e.config.header ? (d(), w("h6", {
          key: 0,
          class: le(e.config.bold)
        }, [
          xe(J(e.config.header) + " ", 1),
          ((g = (D = e.config).validation) == null ? void 0 : g.call(D, "", e.allFormValues)) != null ? (d(), w("span", fi, "*")) : T("", !0)
        ], 2)) : T("", !0),
        q("div", {
          style: Ie({ width: e.config.width || "100%" })
        }, [
          Ce(m(Lo), {
            modelValue: l.value,
            "onUpdate:modelValue": x[0] || (x[0] = (p) => l.value = p),
            onIonBlur: y,
            onIonInput: C,
            onClick: _,
            fill: "outline",
            placeholder: e.config.placeholder,
            disabled: i.value,
            class: le(["custom-textarea", { error: c.value }]),
            rows: e.config.rows || 4,
            "auto-grow": e.config.autoGrow !== !1,
            maxlength: e.config.maxLength,
            counter: e.config.showCounter
          }, {
            default: ie(() => {
              var p;
              return [
                e.config.icon || e.config.leftText ? (d(), de(m(kt), {
                  key: 0,
                  slot: "start",
                  class: "start-content"
                }, {
                  default: ie(() => [
                    e.config.icon ? (d(), de(m(Ve), {
                      key: 0,
                      icon: e.config.icon
                    }, null, 8, ["icon"])) : T("", !0),
                    e.config.leftText ? (d(), w("span", vi, J(e.config.leftText), 1)) : T("", !0)
                  ]),
                  _: 1
                })) : T("", !0),
                e.config.rightIcon ? (d(), de(m(kt), {
                  key: 1,
                  slot: "end",
                  class: "end-content"
                }, {
                  default: ie(() => [
                    Ce(m(Ve), {
                      icon: e.config.rightIcon
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })) : T("", !0),
                (p = e.config.actionButton) != null && p.show ? (d(), de(m(nn), {
                  key: 2,
                  slot: "end",
                  onClick: k,
                  size: "small"
                }, {
                  default: ie(() => [
                    e.config.actionButton.icon ? (d(), de(m(Ve), {
                      key: 0,
                      icon: e.config.actionButton.icon,
                      slot: "start"
                    }, null, 8, ["icon"])) : T("", !0),
                    xe(" " + J(e.config.actionButton.text), 1)
                  ]),
                  _: 1
                })) : T("", !0)
              ];
            }),
            _: 1
          }, 8, ["modelValue", "placeholder", "disabled", "class", "rows", "auto-grow", "maxlength", "counter"]),
          s.value && o.value ? (d(), de(m(ht), {
            key: 0,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(s.value), 1)
            ]),
            _: 1
          })) : T("", !0),
          e.config.helperText && !c.value ? (d(), de(m(ht), {
            key: 1,
            class: "helper-note"
          }, {
            default: ie(() => [
              xe(J(e.config.helperText), 1)
            ]),
            _: 1
          })) : T("", !0)
        ], 4)
      ]);
    };
  }
}), mi = /* @__PURE__ */ lt(hi, [["__scopeId", "data-v-2e08b47e"]]);
function Sa(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function pi(e) {
  return (...n) => !e(...n);
}
function gi(e, n) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(n.trim()) !== -1;
}
function yi(e) {
  return e.filter((n) => !n.$isLabel);
}
function Oa(e, n) {
  return (a) => a.reduce((t, r) => r[e] && r[e].length ? (t.push({
    $groupLabel: r[n],
    $isLabel: !0
  }), t.concat(r[e])) : t, []);
}
const Er = (...e) => (n) => e.reduce((a, t) => t(a), n);
var $i = {
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
      default(e, n) {
        return Sa(e) ? "" : n ? e[n] : e;
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
      const e = this.search || "", n = e.toLowerCase().trim();
      let a = this.options.concat();
      return this.internalSearch ? a = this.groupValues ? this.filterAndFlat(a, n, this.label) : this.filterOptions(a, n, this.label, this.customLabel) : a = this.groupValues ? Oa(this.groupValues, this.groupLabel)(a) : a, a = this.hideSelected ? a.filter(pi(this.isSelected)) : a, this.taggable && n.length && !this.isExistingOption(n) && (this.tagPosition === "bottom" ? a.push({ isTag: !0, label: e }) : a.unshift({ isTag: !0, label: e })), a.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((n) => this.customLabel(n, this.label).toString().toLowerCase());
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
    filterAndFlat(e, n, a) {
      return Er(
        this.filterGroups(n, a, this.groupValues, this.groupLabel, this.customLabel),
        Oa(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return Er(
        Oa(this.groupValues, this.groupLabel),
        yi
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
      const n = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(n) > -1;
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
      if (Sa(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const n = this.customLabel(e, this.label);
      return Sa(n) ? "" : n;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(e, n) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(n) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(n === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            n !== "Tab" && this.removeElement(e);
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
      const n = this.options.find((a) => a[this.groupLabel] === e.$groupLabel);
      if (n) {
        if (this.wholeGroupSelected(n)) {
          this.$emit("remove", n[this.groupValues], this.id);
          const a = this.trackBy ? n[this.groupValues].map((r) => r[this.trackBy]) : n[this.groupValues], t = this.internalValue.filter(
            (r) => a.indexOf(this.trackBy ? r[this.trackBy] : r) === -1
          );
          this.$emit("update:modelValue", t);
        } else {
          const a = n[this.groupValues].filter(
            (t) => !(this.isOptionDisabled(t) || this.isSelected(t))
          );
          this.max && a.splice(this.max - this.internalValue.length), this.$emit("select", a, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(a)
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
        (n) => this.isSelected(n) || this.isOptionDisabled(n)
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
    removeElement(e, n = !0) {
      if (this.disabled || e.$isDisabled) return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const a = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.multiple) {
        const t = this.internalValue.slice(0, a).concat(this.internalValue.slice(a + 1));
        this.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", null);
      this.$emit("remove", e, this.id), this.closeOnSelect && n && this.deactivate();
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
      const e = this.$el.getBoundingClientRect().top, n = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      n > this.maxHeight || n > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(n - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    },
    /**
     * Filters and sorts the options ready for selection
     * @param {Array} options
     * @param {String} search
     * @param {String} label
     * @param {Function} customLabel
     * @returns {Array}
     */
    filterOptions(e, n, a, t) {
      return n ? e.filter((r) => gi(t(r, a), n)).sort((r, l) => typeof this.filteringSortFunc == "function" ? this.filteringSortFunc(r, l) : t(r, a).length - t(l, a).length) : e;
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
    filterGroups(e, n, a, t, r) {
      return (l) => l.map((o) => {
        if (!o[a])
          return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
        const i = this.filterOptions(o[a], e, n, r);
        return i.length ? {
          [t]: o[t],
          [a]: i
        } : [];
      });
    }
  }
}, bi = {
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
    optionHighlight(e, n) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(n)
      };
    },
    groupHighlight(e, n) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": n.$isLabel }
        ];
      const a = this.options.find((t) => t[this.groupLabel] === n.$groupLabel);
      return a && !this.wholeGroupDisabled(a) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(a) }
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
}, Dl = {
  name: "vue-multiselect",
  mixins: [$i, bi],
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
        const n = this.$el.getBoundingClientRect();
        this.dropdownStyles = {
          position: "absolute",
          top: `${n.bottom + window.scrollY}px`,
          left: `${n.left + window.scrollX}px`,
          width: `${n.width}px`,
          zIndex: 9999
        }, this.ready = !0;
      })) : this.ready = !0);
    }
  }
};
const wi = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"], ki = {
  ref: "tags",
  class: "multiselect__tags"
}, Ci = { class: "multiselect__tags-wrap" }, xi = ["textContent"], _i = ["onKeydown", "onMousedown"], Ti = ["textContent"], Di = { class: "multiselect__spinner" }, Si = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"], Oi = ["id", "aria-multiselectable"], Pi = { key: 0 }, Mi = { class: "multiselect__option" }, Ai = ["aria-selected", "id", "role"], Ni = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"], Fi = ["data-select", "data-deselect", "onMouseenter", "onMousedown"], Ii = { class: "multiselect__option" }, Ei = { class: "multiselect__option" };
function Vi(e, n, a, t, r, l) {
  return d(), w("div", {
    tabindex: e.searchable ? -1 : a.tabindex,
    class: le([{ "multiselect--active": e.isOpen, "multiselect--disabled": a.disabled, "multiselect--above": l.isAbove, "multiselect--has-options-group": l.hasOptionGroup }, "multiselect"]),
    onFocus: n[14] || (n[14] = (o) => e.activate()),
    onBlur: n[15] || (n[15] = (o) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      n[16] || (n[16] = ft(Me((o) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      n[17] || (n[17] = ft(Me((o) => e.pointerBackward(), ["self", "prevent"]), ["up"])),
      n[18] || (n[18] = ft(Me((o) => e.addPointerElement(o), ["stop", "self"]), ["enter", "tab"]))
    ],
    onKeyup: n[19] || (n[19] = ft((o) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": e.isOpen,
    "aria-owns": "listbox-" + e.id,
    "aria-activedescendant": e.isOpen && e.pointer !== null ? e.id + "-" + e.pointer : null
  }, [
    ve(e.$slots, "caret", { toggle: e.toggle }, () => [
      q(
        "div",
        {
          onMousedown: n[0] || (n[0] = Me((o) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    ve(e.$slots, "clear", { search: e.search }),
    q(
      "div",
      ki,
      [
        ve(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: l.visibleValues,
          isOpen: e.isOpen
        }, () => [
          Pt(q(
            "div",
            Ci,
            [
              (d(!0), w(
                ke,
                null,
                Pe(l.visibleValues, (o, i) => ve(e.$slots, "tag", {
                  option: o,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  (d(), w(
                    "span",
                    {
                      class: "multiselect__tag",
                      key: i,
                      onMousedown: n[1] || (n[1] = Me(() => {
                      }, ["prevent"]))
                    },
                    [
                      q("span", {
                        textContent: J(e.getOptionLabel(o))
                      }, null, 8, xi),
                      q("i", {
                        tabindex: "1",
                        onKeydown: ft(Me((u) => e.removeElement(o), ["prevent"]), ["enter"]),
                        onMousedown: Me((u) => e.removeElement(o), ["prevent"]),
                        class: "multiselect__tag-icon"
                      }, null, 40, _i)
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
            [Ut, l.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > a.limit ? ve(e.$slots, "limit", { key: 0 }, () => [
            q("strong", {
              class: "multiselect__strong",
              textContent: J(a.limitText(e.internalValue.length - a.limit))
            }, null, 8, Ti)
          ]) : T("v-if", !0)
        ]),
        Ce(ln, { name: "multiselect__loading" }, {
          default: ie(() => [
            ve(e.$slots, "loading", {}, () => [
              Pt(q(
                "div",
                Di,
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ut, a.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        e.searchable ? (d(), w("input", {
          key: 0,
          ref: "search",
          name: a.name,
          id: e.id,
          type: "text",
          autocomplete: "off",
          spellcheck: a.spellcheck,
          placeholder: e.placeholder,
          required: l.isRequired,
          style: Ie(l.inputStyle),
          value: e.search,
          disabled: a.disabled,
          tabindex: a.tabindex,
          "aria-label": a.name + "-searchbox",
          onInput: n[2] || (n[2] = (o) => e.updateSearch(o.target.value)),
          onFocus: n[3] || (n[3] = Me((o) => e.activate(), ["prevent"])),
          onBlur: n[4] || (n[4] = Me((o) => e.deactivate(), ["prevent"])),
          onKeyup: n[5] || (n[5] = ft((o) => e.deactivate(), ["esc"])),
          onKeydown: [
            n[6] || (n[6] = ft(Me((o) => e.pointerForward(), ["prevent"]), ["down"])),
            n[7] || (n[7] = ft(Me((o) => e.pointerBackward(), ["prevent"]), ["up"])),
            n[8] || (n[8] = ft(Me((o) => e.addPointerElement(o), ["prevent", "stop", "self"]), ["enter"])),
            n[9] || (n[9] = ft(Me((o) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, Si)) : T("v-if", !0),
        l.isSingleLabelVisible ? (d(), w(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: n[10] || (n[10] = Me((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            ve(e.$slots, "singleLabel", { option: l.singleValue }, () => [
              xe(
                J(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : T("v-if", !0),
        l.isPlaceholderVisible ? (d(), w(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: n[11] || (n[11] = Me((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            ve(e.$slots, "placeholder", {}, () => [
              xe(
                J(e.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : T("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    (d(), de(ma, {
      to: "body",
      disabled: !a.useTeleport
    }, [
      Ce(ln, { name: "multiselect" }, {
        default: ie(() => [
          e.isOpen && r.ready ? (d(), w(
            "div",
            {
              key: 0,
              class: le(["multiselect__content-wrapper", a.contentWrapperClass]),
              onFocus: n[12] || (n[12] = (...o) => e.activate && e.activate(...o)),
              tabindex: "-1",
              onMousedown: n[13] || (n[13] = Me(() => {
              }, ["prevent"])),
              style: Ie([r.dropdownStyles, { maxHeight: e.optimizedHeight + "px" }]),
              ref: "list"
            },
            [
              q("ul", {
                class: "multiselect__content",
                style: Ie(l.contentStyle),
                role: "listbox",
                id: "listbox-" + e.id,
                "aria-multiselectable": e.multiple
              }, [
                ve(e.$slots, "beforeList"),
                e.multiple && e.max === e.internalValue.length ? (d(), w("li", Pi, [
                  q("span", Mi, [
                    ve(e.$slots, "maxElements", {}, () => [
                      xe(
                        "Maximum of " + J(e.max) + " options selected. First remove a selected option to select another.",
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])) : T("v-if", !0),
                !e.max || e.internalValue.length < e.max ? (d(!0), w(
                  ke,
                  { key: 1 },
                  Pe(e.filteredOptions, (o, i) => (d(), w("li", {
                    class: "multiselect__element",
                    key: i,
                    "aria-selected": e.isSelected(o),
                    id: e.id + "-" + i,
                    role: o && (o.$isLabel || o.$isDisabled) ? null : "option"
                  }, [
                    o && (o.$isLabel || o.$isDisabled) ? T("v-if", !0) : (d(), w("span", {
                      key: 0,
                      class: le([e.optionHighlight(i, o), "multiselect__option"]),
                      onClick: Me((u) => e.select(o), ["stop"]),
                      onMouseenter: Me((u) => e.pointerSet(i), ["self"]),
                      "data-select": o && o.isTag ? e.tagPlaceholder : l.selectLabelText,
                      "data-selected": l.selectedLabelText,
                      "data-deselect": l.deselectLabelText
                    }, [
                      ve(e.$slots, "option", {
                        option: o,
                        search: e.search,
                        index: i
                      }, () => [
                        q(
                          "span",
                          null,
                          J(e.getOptionLabel(o)),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 42, Ni)),
                    o && (o.$isLabel || o.$isDisabled) ? (d(), w("span", {
                      key: 1,
                      "data-select": e.groupSelect && l.selectGroupLabelText,
                      "data-deselect": e.groupSelect && l.deselectGroupLabelText,
                      class: le([e.groupHighlight(i, o), "multiselect__option"]),
                      onMouseenter: Me((u) => e.groupSelect && e.pointerSet(i), ["self"]),
                      onMousedown: Me((u) => e.selectGroup(o), ["prevent"])
                    }, [
                      ve(e.$slots, "option", {
                        option: o,
                        search: e.search,
                        index: i
                      }, () => [
                        q(
                          "span",
                          null,
                          J(e.getOptionLabel(o)),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 42, Fi)) : T("v-if", !0)
                  ], 8, Ai))),
                  128
                  /* KEYED_FRAGMENT */
                )) : T("v-if", !0),
                Pt(q(
                  "li",
                  null,
                  [
                    q("span", Ii, [
                      ve(e.$slots, "noResult", { search: e.search }, () => [
                        n[20] || (n[20] = xe("No elements found. Consider changing the search query."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [Ut, a.showNoResults && e.filteredOptions.length === 0 && e.search && !a.loading]
                ]),
                Pt(q(
                  "li",
                  null,
                  [
                    q("span", Ei, [
                      ve(e.$slots, "noOptions", {}, () => [
                        n[21] || (n[21] = xe("List is empty."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [Ut, a.showNoOptions && (e.options.length === 0 || l.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !a.loading]
                ]),
                ve(e.$slots, "afterList")
              ], 12, Oi)
            ],
            38
            /* CLASS, STYLE, NEED_HYDRATION */
          )) : T("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      })
    ], 8, ["disabled"]))
  ], 42, wi);
}
Dl.render = Vi;
function Sl(e, n = 20) {
  let a = e.parentElement;
  for (; a; ) {
    if (a.tagName === "ION-CONTENT" && typeof a.scrollToPoint == "function") {
      const r = a;
      r.getScrollElement().then((l) => {
        const o = e.getBoundingClientRect().top - l.getBoundingClientRect().top + l.scrollTop;
        r.scrollToPoint(0, o - n, 300);
      });
      return;
    }
    const t = getComputedStyle(a);
    if (a.scrollHeight > a.clientHeight && ["auto", "scroll"].includes(t.overflowY)) {
      const r = e.getBoundingClientRect().top - a.getBoundingClientRect().top + a.scrollTop;
      a.scrollTo({ top: r - n, behavior: "smooth" });
      return;
    }
    a = a.parentElement;
  }
}
const Ri = { class: "field-header" }, Li = {
  key: 0,
  class: "required"
}, Bi = { class: "custom-option" }, Hi = { class: "option-code" }, Yi = { class: "option-name" }, ji = { class: "custom-single-label" }, qi = { class: "label-code" }, Gi = { class: "label-name" }, zi = { class: "custom-tag" }, Wi = { class: "tag-code" }, Ui = { class: "tag-name" }, Ki = ["onClick"], Xi = {
  key: 0,
  class: "multiselect-load-more"
}, Qi = ["disabled"], Zi = {
  key: 1,
  class: "disabled-overlay"
}, Ji = /* @__PURE__ */ Ae({
  __name: "MultiSelectInput",
  props: {
    config: {},
    allFormValues: {},
    mode: {}
  },
  emits: ["update:value", "field-changed", "search-change"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(null), o = U(null), i = U(!1), u = U(0), s = U(t.config.initialValue || t.config.value || (t.config.isMultiple ? [] : null)), c = U(!1);
    U([]), De(
      () => t.config.initialValue || t.config.value,
      (z) => {
        z !== void 0 && (s.value = z, N());
      }
    );
    const y = E(() => {
      if (typeof t.config.options == "function")
        try {
          const z = t.config.options(t.allFormValues);
          return Array.isArray(z) ? z : [];
        } catch (z) {
          return console.warn("Options function error:", z), [];
        }
      return Array.isArray(t.config.options) ? t.config.options : [];
    }), C = E(() => t.config.mode === "card" || t.config.mode === "neonatal" ? "card-style" : t.config.mode === "standard" ? "standard-style" : ""), _ = E(() => t.config.isMultiple ? Array.isArray(s.value) && s.value.length > 0 : s.value !== void 0 && s.value !== null && s.value !== ""), k = E(() => _.value ? "" : t.config.placeholder || ""), h = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (z) {
          return console.warn("Disabled function error:", z), !1;
        }
      return !1;
    }), x = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (z) {
          return console.warn("Condition function error:", z), !1;
        }
      return !0;
    }), D = E(() => {
      var z, ae;
      return !x.value || h.value ? null : ((ae = (z = t.config).validation) == null ? void 0 : ae.call(z, s.value, t.allFormValues)) || null;
    }), g = E(() => h.value ? !1 : t.config.error || D.value !== null && c.value), p = (z) => {
      h.value || (c.value = !0, s.value = z, N());
    }, A = () => {
      var z, ae;
      h.value || (i.value = !0, u.value = Date.now(), c.value = !0, (ae = (z = t.config).onOpen) == null || ae.call(z, s.value), je(() => {
        l.value && (t.config.preventScrollOnOpen || Sl(l.value), l.value.dispatchEvent(
          new CustomEvent("dropdown-opened", {
            bubbles: !0,
            composed: !0,
            detail: { element: l.value }
          })
        ));
      }));
    }, G = () => {
      var z, ae;
      i.value = !1, (ae = (z = t.config).onClose) == null || ae.call(z, s.value);
    }, P = (z) => {
      if (!h.value && i.value && Date.now() - u.value > 300) {
        const ae = z.target;
        if (ae.closest(".multiselect__tag-icon") || ae.closest(".multiselect__option"))
          return;
        z.preventDefault(), z.stopPropagation(), o.value && o.value.deactivate();
      }
    }, V = (z) => {
      var ae, ce;
      h.value || (c.value = !0, (ce = (ae = t.config).onSearchChange) == null || ce.call(ae, z), r("search-change", z));
    }, j = async () => {
      h.value || t.config.loadingMore || !t.config.onLoadMore || await t.config.onLoadMore();
    }, W = (z) => {
      var ae, ce;
      h.value || (c.value = !0, (ce = (ae = t.config).onTag) == null || ce.call(ae, z));
    }, N = () => {
      var z, ae;
      (ae = (z = t.config).onChange) == null || ae.call(z, s.value), r("update:value", s.value), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: s.value,
        config: t.config
      });
    };
    return De(h, (z) => {
      z && s.value && (s.value = t.config.isMultiple ? [] : null, N());
    }), n({
      getValue: () => s.value,
      setValue: (z) => {
        s.value = z;
      },
      isValid: E(() => h.value || D.value === null),
      // Consider disabled fields as valid
      validate: () => h.value ? null : (c.value = !0, D.value),
      shouldShow: x,
      markAsTouched: () => c.value = !0,
      // Allow parent to mark as touched
      resetTouched: () => c.value = !1,
      // Allow parent to reset touched state
      clearSelection: () => {
        s.value = t.config.isMultiple ? [] : null, N();
      },
      getOptions: () => y.value
      // Expose computed options
    }), (z, ae) => {
      var ce, B;
      return x.value ? (d(), w("div", {
        key: 0,
        class: le([C.value, { "has-padding": e.config.padding === "true" || e.config.padding === !0 }])
      }, [
        q("div", Ri, [
          e.config.header ? (d(), w("h6", {
            key: 0,
            class: le(e.config.bold)
          }, [
            xe(J(e.config.header) + " ", 1),
            ((B = (ce = e.config).validation) == null ? void 0 : B.call(ce, "", e.allFormValues)) != null ? (d(), w("span", Li, "*")) : T("", !0)
          ], 2)) : T("", !0)
        ]),
        q("div", {
          style: Ie({ width: e.config.width || "100%" }),
          class: le(["multiselect-wrapper", { disabled: h.value }]),
          ref_key: "multiselectWrapperRef",
          ref: l,
          onClick: P
        }, [
          e.config.icon ? (d(), de(m(Ve), {
            key: 0,
            class: "left-icon",
            icon: e.config.icon
          }, null, 8, ["icon"])) : T("", !0),
          Ce(m(Dl), {
            ref_key: "multiselectRef",
            ref: o,
            modelValue: s.value,
            "onUpdate:modelValue": [
              ae[1] || (ae[1] = (b) => s.value = b),
              p
            ],
            onOpen: A,
            onClose: G,
            onSearchChange: V,
            onTag: W,
            multiple: e.config.isMultiple || !1,
            taggable: e.config.taggable || !1,
            "hide-selected": e.config.hideSelected || !0,
            "close-on-select": e.config.closeOnSelect || !e.config.isMultiple || !1,
            "open-direction": e.config.openDirection || "bottom",
            "prevent-autofocus": e.config.preventAutofocus || !1,
            loading: e.config.loading || !1,
            searchable: e.config.searchable !== !1,
            "internal-search": e.config.internalSearch !== !1,
            disabled: h.value,
            placeholder: k.value,
            "select-label": e.config.selectLabel || "",
            "tag-placeholder": e.config.tagPlaceholder || "",
            label: e.config.label || "name",
            "track-by": e.config.trackBy || "concept_id",
            options: y.value,
            "use-teleport": e.config.useTeleport,
            "teleport-target": "body",
            "content-wrapper-class": e.config.contentWrapperClass,
            class: le([["custom-multiselect", { error: g.value, "disabled-field": h.value }], "no-focus"]),
            tabindex: -1
          }, vt({
            afterList: ie(() => [
              e.config.hasMoreOptions ? (d(), w("li", Xi, [
                q("button", {
                  type: "button",
                  class: "multiselect-load-more__button",
                  disabled: e.config.loadingMore,
                  onMousedown: ae[0] || (ae[0] = Me(() => {
                  }, ["prevent", "stop"])),
                  onClick: Me(j, ["prevent", "stop"])
                }, J(e.config.loadingMore ? "Loading more..." : e.config.loadMoreText || "Load more"), 41, Qi)
              ])) : T("", !0)
            ]),
            _: 2
          }, [
            e.config.customOptionTemplate ? {
              name: "option",
              fn: ie(({ option: b }) => [
                q("div", Bi, [
                  q("span", Hi, J(b.code), 1),
                  q("span", Yi, J(b.name), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            e.config.customOptionTemplate ? {
              name: "singleLabel",
              fn: ie(({ option: b }) => [
                q("div", ji, [
                  q("span", qi, J(b.code), 1),
                  q("span", Gi, J(b.name), 1)
                ])
              ]),
              key: "1"
            } : void 0,
            e.config.customOptionTemplate && e.config.isMultiple ? {
              name: "tag",
              fn: ie(({ option: b, remove: I }) => [
                q("div", zi, [
                  q("span", Wi, J(b.code), 1),
                  q("span", Ui, J(b.name), 1),
                  q("span", {
                    class: "multiselect__tag-icon",
                    onClick: ($) => I(b)
                  }, null, 8, Ki)
                ])
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["modelValue", "multiple", "taggable", "hide-selected", "close-on-select", "open-direction", "prevent-autofocus", "loading", "searchable", "internal-search", "disabled", "placeholder", "select-label", "tag-placeholder", "label", "track-by", "options", "use-teleport", "content-wrapper-class", "class"]),
          h.value ? (d(), w("div", Zi)) : T("", !0),
          D.value && c.value ? (d(), de(m(ht), {
            key: 2,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(D.value), 1)
            ]),
            _: 1
          })) : T("", !0),
          e.config.helperText && !D.value ? (d(), de(m(ht), {
            key: 3,
            class: "helper-note"
          }, {
            default: ie(() => [
              xe(J(e.config.helperText), 1)
            ]),
            _: 1
          })) : T("", !0)
        ], 6)
      ], 2)) : T("", !0);
    };
  }
}), es = /* @__PURE__ */ lt(Ji, [["__scopeId", "data-v-2d3d3a79"]]), ts = {
  key: 0,
  class: "required"
}, ns = {
  key: 2,
  class: "checkbox-list"
}, as = { class: "list-item-content" }, rs = { class: "list-item-left" }, ls = { class: "list-item-text" }, os = /* @__PURE__ */ Ae({
  __name: "CheckboxField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(u()), o = U(s()), i = U(!1);
    function u() {
      return t.config.type === "single" && (t.config.initialValue || t.config.value) || !1;
    }
    function s() {
      if (t.config.type === "multiple" || t.config.type === "list") {
        const P = t.config.initialValue || t.config.value;
        return Array.isArray(P) ? [...P] : [];
      }
      return [];
    }
    De(
      () => t.config.initialValue || t.config.value,
      (P) => {
        t.config.type === "single" ? l.value = P || !1 : (t.config.type === "multiple" || t.config.type === "list") && (o.value = Array.isArray(P) ? [...P] : []);
      }
    );
    const c = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (P) {
          return console.warn("Disabled function error:", P), !1;
        }
      return !1;
    });
    De(c, (P) => {
      P && (t.config.type === "single" ? l.value && (l.value = !1) : o.value.length > 0 && (o.value = []));
    });
    const y = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (P) {
          return console.warn("Condition function error:", P), !1;
        }
      return !0;
    }), C = E(() => {
      var P, V;
      return !y.value || c.value ? null : ((V = (P = t.config).validation) == null ? void 0 : V.call(P, k(), t.allFormValues)) || null;
    }), _ = E(() => c.value ? !1 : t.config.error || C.value !== null && i.value);
    function k() {
      return t.config.type === "single" ? l.value : o.value;
    }
    function h(P) {
      return o.value.includes(P);
    }
    function x(P) {
      c.value || (i.value = !0, l.value = P.detail.checked, A());
    }
    function D() {
      c.value || (i.value = !0, l.value = !l.value, A());
    }
    function g(P, V, j) {
      var ae;
      if (c.value) return;
      i.value = !0;
      const W = V.detail.checked, N = (j == null ? void 0 : j.exclusive) === !0, z = ((ae = t.config.options) == null ? void 0 : ae.filter((ce) => ce.exclusive === !0).map((ce) => ce.value)) || [];
      if (o.value.some((ce) => z.includes(ce)), W)
        N ? o.value = [P] : (o.value = o.value.filter((ce) => !z.includes(ce)), o.value.includes(P) || o.value.push(P));
      else {
        const ce = o.value.indexOf(P);
        ce > -1 && o.value.splice(ce, 1);
      }
      A();
    }
    function p(P, V) {
      var ae, ce;
      if (c.value) return;
      const j = (ae = t.config.options) == null ? void 0 : ae.find((B) => B.value === P);
      if (j != null && j.disabled) return;
      i.value = !0;
      const W = o.value.includes(P), N = (V == null ? void 0 : V.exclusive) === !0, z = ((ce = t.config.options) == null ? void 0 : ce.filter((B) => B.exclusive === !0).map((B) => B.value)) || [];
      if (!W)
        N ? o.value = [P] : (o.value = o.value.filter((B) => !z.includes(B)), o.value.push(P));
      else {
        const B = o.value.indexOf(P);
        o.value.splice(B, 1);
      }
      A();
    }
    function A() {
      const P = k();
      r("update:value", P), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: P,
        config: t.config
      });
    }
    function G(P) {
      var V, j;
      c.value || (i.value = !0, (j = (V = t.config).onBlur) == null || j.call(V, k(), P));
    }
    return n({
      getValue: () => k(),
      setValue: (P) => {
        t.config.type === "single" ? l.value = !!P : o.value = Array.isArray(P) ? [...P] : [];
      },
      isValid: E(() => c.value || C.value === null),
      // Consider disabled fields as valid
      validate: () => c.value ? null : (i.value = !0, C.value),
      shouldShow: y,
      selectAll: () => {
        var P;
        c.value || (t.config.type === "multiple" || t.config.type === "list") && (i.value = !0, o.value = ((P = t.config.options) == null ? void 0 : P.map((V) => V.value)) || [], A());
      },
      deselectAll: () => {
        c.value || (t.config.type === "multiple" || t.config.type === "list") && (i.value = !0, o.value = [], A());
      },
      markAsTouched: () => i.value = !0,
      // Allow parent to mark as touched
      resetTouched: () => i.value = !1
      // Allow parent to reset touched state
    }), (P, V) => {
      var j, W;
      return d(), w("div", null, [
        e.config.header ? (d(), w("h6", {
          key: 0,
          class: le(e.config.bold)
        }, [
          xe(J(e.config.header) + " ", 1),
          ((W = (j = e.config).validation) == null ? void 0 : W.call(j, "", e.allFormValues)) != null ? (d(), w("span", ts, "*")) : T("", !0)
        ], 2)) : T("", !0),
        q("div", {
          style: Ie({ width: e.config.width || "100%" })
        }, [
          e.config.type === "single" ? (d(), w("div", {
            key: 0,
            class: le(["checkbox-container", { disabled: c.value }])
          }, [
            Ce(m(Ta), {
              modelValue: l.value,
              "onUpdate:modelValue": V[0] || (V[0] = (N) => l.value = N),
              onIonChange: x,
              onIonBlur: G,
              disabled: c.value,
              class: le(["custom-checkbox", { error: _.value }])
            }, null, 8, ["modelValue", "disabled", "class"]),
            Ce(m(kt), {
              class: le(["checkbox-label", { disabled: c.value }]),
              onClick: D
            }, {
              default: ie(() => [
                xe(J(e.config.label), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)) : e.config.type === "multiple" ? (d(), w("div", {
            key: 1,
            class: le(["checkbox-group", { "two-columns": e.config.twoColumns }])
          }, [
            (d(!0), w(ke, null, Pe(e.config.options, (N, z) => (d(), w("div", {
              key: typeof N.value == "string" || typeof N.value == "number" ? N.value : String(z),
              class: le(["checkbox-item", { disabled: c.value || N.disabled }])
            }, [
              Ce(m(Ta), {
                checked: h(N.value),
                onIonChange: (ae) => g(N.value, ae, N),
                onIonBlur: G,
                disabled: c.value || N.disabled,
                class: le(["custom-checkbox", { error: _.value }])
              }, null, 8, ["checked", "onIonChange", "disabled", "class"]),
              Ce(m(kt), {
                class: le(["checkbox-label", { disabled: c.value || N.disabled }]),
                onClick: () => p(N.value, N)
              }, {
                default: ie(() => [
                  xe(J(N.label) + " ", 1),
                  N.description ? (d(), w("span", {
                    key: 0,
                    class: le(["option-description", { disabled: c.value || N.disabled }])
                  }, J(N.description), 3)) : T("", !0)
                ]),
                _: 2
              }, 1032, ["class", "onClick"])
            ], 2))), 128))
          ], 2)) : e.config.type === "list" ? (d(), w("div", ns, [
            (d(!0), w(ke, null, Pe(e.config.options, (N, z) => (d(), w("div", {
              key: typeof N.value == "string" || typeof N.value == "number" ? N.value : String(z),
              class: le(["checkbox-list-item", { selected: h(N.value), disabled: c.value || N.disabled }])
            }, [
              q("div", as, [
                q("div", rs, [
                  N.icon ? (d(), de(m(Ve), {
                    key: 0,
                    icon: N.icon,
                    class: le(["list-item-icon", { disabled: c.value || N.disabled }])
                  }, null, 8, ["icon", "class"])) : T("", !0),
                  q("div", ls, [
                    q("div", {
                      class: le(["list-item-title", { disabled: c.value || N.disabled }])
                    }, J(N.label), 3),
                    N.description ? (d(), w("div", {
                      key: 0,
                      class: le(["list-item-description", { disabled: c.value || N.disabled }])
                    }, J(N.description), 3)) : T("", !0)
                  ])
                ]),
                Ce(m(Ta), {
                  checked: h(N.value),
                  onIonChange: (ae) => g(N.value, ae, N),
                  onIonBlur: G,
                  disabled: c.value || N.disabled,
                  class: le(["custom-checkbox", { error: _.value }])
                }, null, 8, ["checked", "onIonChange", "disabled", "class"])
              ])
            ], 2))), 128))
          ])) : T("", !0),
          C.value && i.value ? (d(), de(m(ht), {
            key: 3,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(C.value), 1)
            ]),
            _: 1
          })) : T("", !0),
          e.config.helperText && !C.value ? (d(), de(m(ht), {
            key: 4,
            class: "helper-note"
          }, {
            default: ie(() => [
              xe(J(e.config.helperText), 1)
            ]),
            _: 1
          })) : T("", !0)
        ], 4)
      ]);
    };
  }
}), is = /* @__PURE__ */ lt(os, [["__scopeId", "data-v-db9567ed"]]), ss = { class: "field-header" }, us = {
  key: 0,
  class: "required"
}, ds = ["disabled"], cs = ["disabled"], fs = {
  key: 1,
  class: "radio-list"
}, vs = ["onClick"], hs = { class: "list-item-left" }, ms = { class: "list-item-text" }, ps = { class: "list-item-title" }, gs = ["disabled"], ys = {
  key: 0,
  class: "list-item-description"
}, $s = { class: "list-item-right" }, bs = ["disabled"], ws = ["disabled"], ks = {
  key: 3,
  class: "radio-button-group"
}, Cs = ["onClick", "disabled"], xs = {
  key: 6,
  class: "clear-section"
}, _s = ["disabled"], Ts = /* @__PURE__ */ Ae({
  __name: "RadioButtonField",
  props: {
    config: {},
    allFormValues: {},
    mode: {}
  },
  emits: ["update:value", "field-changed", "cleared"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(i()), o = U(!1);
    function i() {
      return t.config.initialValue || t.config.value || null;
    }
    De(
      () => t.config.initialValue || t.config.value,
      (g) => {
        l.value = g || null;
      }
    );
    const u = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (g) {
          return console.warn("Disabled function error:", g), !1;
        }
      return !1;
    }), s = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (g) {
          return console.warn("Condition function error:", g), !1;
        }
      return !0;
    }), c = E(() => t.config.mode || t.mode || ""), y = E(() => c.value === "standard" ? "standard-style" : c.value === "card" || c.value === "neonatal" ? "neonatal-style" : ""), C = E(() => {
      var g, p;
      return !s.value || u.value ? null : ((p = (g = t.config).validation) == null ? void 0 : p.call(g, l.value, t.allFormValues)) || null;
    }), _ = E(() => u.value ? !1 : t.config.error || C.value !== null && o.value);
    function k(g) {
      o.value = !0, g.detail.value === !1 ? l.value = null : l.value = g.detail.value, D();
    }
    function h(g) {
      var A;
      if (u.value) return;
      const p = (A = t.config.options) == null ? void 0 : A.find((G) => G.value === g);
      if (!(p != null && p.disabled)) {
        if (t.config.allowDeselect && l.value === g) {
          x();
          return;
        }
        o.value = !0, g === !1 ? l.value = null : l.value = g, D();
      }
    }
    function x() {
      var p, A;
      if (u.value) return;
      const g = l.value;
      l.value = null, o.value = !0, D(), r("cleared", {
        previousValue: g,
        fieldName: t.config.name || t.config.header,
        config: t.config
      }), (A = (p = t.config).onClear) == null || A.call(p, g);
    }
    function D() {
      var p, A;
      const g = l.value;
      (A = (p = t.config).onChange) == null || A.call(p, g), r("update:value", g), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: g,
        config: t.config
      });
    }
    return De(u, (g) => {
      g && l.value && (l.value = null, D());
    }), n({
      getValue: () => l.value,
      setValue: (g) => {
        g === !1 ? l.value = null : l.value = g;
      },
      isValid: E(() => u.value || C.value === null),
      validate: () => u.value ? null : (o.value = !0, C.value),
      shouldShow: s,
      clearSelection: x,
      getSelectedOption: () => {
        var g;
        return ((g = t.config.options) == null ? void 0 : g.find((p) => p.value === l.value)) || null;
      },
      markAsTouched: () => o.value = !0,
      resetTouched: () => o.value = !1,
      // New methods for clearing functionality
      hasSelection: E(() => l.value !== null),
      canClear: E(() => !u.value && l.value !== null)
    }), (g, p) => {
      var A, G;
      return s.value ? (d(), w("div", {
        key: 0,
        class: le([y.value, { "has-padding": e.config.padding === "true" || e.config.padding === !0 }])
      }, [
        q("div", ss, [
          e.config.header ? (d(), w("h6", {
            key: 0,
            class: le(e.config.bold)
          }, [
            xe(J(e.config.header) + " ", 1),
            ((G = (A = e.config).validation) == null ? void 0 : G.call(A, "", e.allFormValues)) != null ? (d(), w("span", us, "*")) : T("", !0)
          ], 2)) : T("", !0),
          e.config.showClearButton && l.value !== null ? (d(), w("button", {
            key: 1,
            type: "button",
            class: "clear-button",
            onClick: x,
            disabled: u.value,
            title: "Clear selection"
          }, [
            Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"]),
            p[0] || (p[0] = xe(" Clear ", -1))
          ], 8, ds)) : T("", !0)
        ]),
        q("div", {
          style: Ie({ width: e.config.width || "100%" })
        }, [
          e.config.type === "standard" || !e.config.type ? (d(), de(m(Ar), {
            key: 0,
            value: l.value,
            onIonChange: k,
            class: le(["radio-group", { "indented-options": e.config.indentOptions }])
          }, {
            default: ie(() => [
              (d(!0), w(ke, null, Pe(e.config.options, (P, V) => (d(), w("div", {
                key: typeof P.value == "string" || typeof P.value == "number" ? P.value : V,
                class: "radio-item"
              }, [
                Ce(m(Da), {
                  value: P.value,
                  disabled: u.value || P.disabled,
                  class: le(["custom-radio", { error: _.value }])
                }, null, 8, ["value", "disabled", "class"]),
                Ce(m(kt), {
                  class: "radio-label",
                  onClick: () => h(P.value)
                }, {
                  default: ie(() => [
                    q("span", null, J(P.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                l.value === P.value && e.config.showOptionClear !== !1 ? (d(), w("button", {
                  key: 0,
                  type: "button",
                  class: "option-clear-icon",
                  onClick: Me(x, ["stop"]),
                  disabled: u.value,
                  title: "Clear this option"
                }, [
                  Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"])
                ], 8, cs)) : T("", !0)
              ]))), 128))
            ]),
            _: 1
          }, 8, ["value", "class"])) : e.config.type === "list" ? (d(), w("div", fs, [
            (d(!0), w(ke, null, Pe(e.config.options, (P, V) => (d(), w("div", {
              key: typeof P.value == "string" || typeof P.value == "number" ? P.value : String(V),
              class: le(["radio-list-item", {
                selected: l.value === P.value,
                disabled: u.value || P.disabled
              }])
            }, [
              q("div", {
                class: "list-item-content",
                onClick: () => h(P.value)
              }, [
                q("div", hs, [
                  P.icon ? (d(), de(m(Ve), {
                    key: 0,
                    icon: P.icon,
                    class: "list-item-icon"
                  }, null, 8, ["icon"])) : T("", !0),
                  q("div", ms, [
                    q("div", ps, [
                      xe(J(P.label) + " ", 1),
                      l.value === P.value && e.config.showOptionClear !== !1 ? (d(), w("button", {
                        key: 0,
                        type: "button",
                        class: "option-clear-icon inline",
                        onClick: Me(x, ["stop"]),
                        disabled: u.value,
                        title: "Clear this option"
                      }, [
                        Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"])
                      ], 8, gs)) : T("", !0)
                    ]),
                    P.description ? (d(), w("div", ys, J(P.description), 1)) : T("", !0)
                  ])
                ]),
                q("div", $s, [
                  Ce(m(Da), {
                    value: P.value,
                    checked: l.value === P.value,
                    onIonSelect: k,
                    disabled: u.value || P.disabled,
                    class: le(["custom-radio", { error: _.value }])
                  }, null, 8, ["value", "checked", "disabled", "class"]),
                  e.config.showIndividualClear && l.value === P.value ? (d(), w("button", {
                    key: 0,
                    type: "button",
                    class: "item-clear-button",
                    onClick: Me(x, ["stop"]),
                    disabled: u.value,
                    title: "Clear this selection"
                  }, [
                    Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"])
                  ], 8, bs)) : T("", !0)
                ])
              ], 8, vs)
            ], 2))), 128))
          ])) : e.config.type === "inline" ? (d(), de(m(Ar), {
            key: 2,
            value: l.value,
            onIonChange: k,
            class: "radio-inline"
          }, {
            default: ie(() => [
              (d(!0), w(ke, null, Pe(e.config.options, (P, V) => (d(), w("div", {
                key: typeof P.value == "string" || typeof P.value == "number" ? P.value : V,
                class: "radio-inline-item"
              }, [
                Ce(m(Da), {
                  value: P.value,
                  disabled: u.value || P.disabled,
                  class: le(["custom-radio", { error: _.value }])
                }, null, 8, ["value", "disabled", "class"]),
                Ce(m(kt), {
                  class: "radio-label",
                  onClick: () => h(P.value)
                }, {
                  default: ie(() => [
                    q("span", null, J(P.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                l.value === P.value && e.config.showOptionClear !== !1 ? (d(), w("button", {
                  key: 0,
                  type: "button",
                  class: "option-clear-icon inline",
                  onClick: Me(x, ["stop"]),
                  disabled: u.value,
                  title: "Clear this option"
                }, [
                  Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"])
                ], 8, ws)) : T("", !0)
              ]))), 128))
            ]),
            _: 1
          }, 8, ["value"])) : e.config.type === "button" ? (d(), w("div", ks, [
            (d(!0), w(ke, null, Pe(e.config.options, (P, V) => (d(), w("button", {
              key: typeof P.value == "string" || typeof P.value == "number" ? P.value : String(V),
              type: "button",
              class: le(["radio-button", {
                selected: l.value === P.value,
                disabled: u.value || P.disabled,
                error: _.value
              }]),
              onClick: () => h(P.value),
              disabled: u.value || P.disabled
            }, [
              P.icon ? (d(), de(m(Ve), {
                key: 0,
                icon: P.icon,
                class: "button-icon"
              }, null, 8, ["icon"])) : T("", !0),
              xe(" " + J(P.label) + " ", 1),
              e.config.showButtonClear !== !1 && l.value === P.value ? (d(), de(m(Ve), {
                key: 1,
                icon: m(Gt),
                class: "button-clear-icon",
                onClick: Me(x, ["stop"])
              }, null, 8, ["icon"])) : T("", !0)
            ], 10, Cs))), 128))
          ])) : T("", !0),
          C.value && o.value ? (d(), de(m(ht), {
            key: 4,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(C.value), 1)
            ]),
            _: 1
          })) : T("", !0),
          e.config.helperText && !C.value ? (d(), de(m(ht), {
            key: 5,
            class: "helper-note"
          }, {
            default: ie(() => [
              xe(J(e.config.helperText), 1)
            ]),
            _: 1
          })) : T("", !0),
          e.config.showClearButtonBottom && l.value !== null ? (d(), w("div", xs, [
            q("button", {
              type: "button",
              class: "clear-button-bottom",
              onClick: x,
              disabled: u.value
            }, [
              Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"]),
              p[1] || (p[1] = xe(" Clear Selection ", -1))
            ], 8, _s)
          ])) : T("", !0)
        ], 4)
      ], 2)) : T("", !0);
    };
  }
}), Ds = /* @__PURE__ */ lt(Ts, [["__scopeId", "data-v-bffb8ae3"]]);
var Ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ol = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ss, function() {
    var a = 1e3, t = 6e4, r = 36e5, l = "millisecond", o = "second", i = "minute", u = "hour", s = "day", c = "week", y = "month", C = "quarter", _ = "year", k = "date", h = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(B) {
      var b = ["th", "st", "nd", "rd"], I = B % 100;
      return "[" + B + (b[(I - 20) % 10] || b[I] || b[0]) + "]";
    } }, p = function(B, b, I) {
      var $ = String(B);
      return !$ || $.length >= b ? B : "" + Array(b + 1 - $.length).join(I) + B;
    }, A = { s: p, z: function(B) {
      var b = -B.utcOffset(), I = Math.abs(b), $ = Math.floor(I / 60), O = I % 60;
      return (b <= 0 ? "+" : "-") + p($, 2, "0") + ":" + p(O, 2, "0");
    }, m: function B(b, I) {
      if (b.date() < I.date()) return -B(I, b);
      var $ = 12 * (I.year() - b.year()) + (I.month() - b.month()), O = b.clone().add($, y), L = I - O < 0, R = b.clone().add($ + (L ? -1 : 1), y);
      return +(-($ + (I - O) / (L ? O - R : R - O)) || 0);
    }, a: function(B) {
      return B < 0 ? Math.ceil(B) || 0 : Math.floor(B);
    }, p: function(B) {
      return { M: y, y: _, w: c, d: s, D: k, h: u, m: i, s: o, ms: l, Q: C }[B] || String(B || "").toLowerCase().replace(/s$/, "");
    }, u: function(B) {
      return B === void 0;
    } }, G = "en", P = {};
    P[G] = g;
    var V = "$isDayjsObject", j = function(B) {
      return B instanceof ae || !(!B || !B[V]);
    }, W = function B(b, I, $) {
      var O;
      if (!b) return G;
      if (typeof b == "string") {
        var L = b.toLowerCase();
        P[L] && (O = L), I && (P[L] = I, O = L);
        var R = b.split("-");
        if (!O && R.length > 1) return B(R[0]);
      } else {
        var K = b.name;
        P[K] = b, O = K;
      }
      return !$ && O && (G = O), O || !$ && G;
    }, N = function(B, b) {
      if (j(B)) return B.clone();
      var I = typeof b == "object" ? b : {};
      return I.date = B, I.args = arguments, new ae(I);
    }, z = A;
    z.l = W, z.i = j, z.w = function(B, b) {
      return N(B, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var ae = function() {
      function B(I) {
        this.$L = W(I.locale, null, !0), this.parse(I), this.$x = this.$x || I.x || {}, this[V] = !0;
      }
      var b = B.prototype;
      return b.parse = function(I) {
        this.$d = function($) {
          var O = $.date, L = $.utc;
          if (O === null) return /* @__PURE__ */ new Date(NaN);
          if (z.u(O)) return /* @__PURE__ */ new Date();
          if (O instanceof Date) return new Date(O);
          if (typeof O == "string" && !/Z$/i.test(O)) {
            var R = O.match(x);
            if (R) {
              var K = R[2] - 1 || 0, v = (R[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(R[1], K, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, v)) : new Date(R[1], K, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, v);
            }
          }
          return new Date(O);
        }(I), this.init();
      }, b.init = function() {
        var I = this.$d;
        this.$y = I.getFullYear(), this.$M = I.getMonth(), this.$D = I.getDate(), this.$W = I.getDay(), this.$H = I.getHours(), this.$m = I.getMinutes(), this.$s = I.getSeconds(), this.$ms = I.getMilliseconds();
      }, b.$utils = function() {
        return z;
      }, b.isValid = function() {
        return this.$d.toString() !== h;
      }, b.isSame = function(I, $) {
        var O = N(I);
        return this.startOf($) <= O && O <= this.endOf($);
      }, b.isAfter = function(I, $) {
        return N(I) < this.startOf($);
      }, b.isBefore = function(I, $) {
        return this.endOf($) < N(I);
      }, b.$g = function(I, $, O) {
        return z.u(I) ? this[$] : this.set(O, I);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(I, $) {
        var O = this, L = !!z.u($) || $, R = z.p(I), K = function($e, X) {
          var ye = z.w(O.$u ? Date.UTC(O.$y, X, $e) : new Date(O.$y, X, $e), O);
          return L ? ye : ye.endOf(s);
        }, v = function($e, X) {
          return z.w(O.toDate()[$e].apply(O.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), O);
        }, F = this.$W, f = this.$M, H = this.$D, Y = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case _:
            return L ? K(1, 0) : K(31, 11);
          case y:
            return L ? K(1, f) : K(0, f + 1);
          case c:
            var S = this.$locale().weekStart || 0, oe = (F < S ? F + 7 : F) - S;
            return K(L ? H - oe : H + (6 - oe), f);
          case s:
          case k:
            return v(Y + "Hours", 0);
          case u:
            return v(Y + "Minutes", 1);
          case i:
            return v(Y + "Seconds", 2);
          case o:
            return v(Y + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(I) {
        return this.startOf(I, !1);
      }, b.$set = function(I, $) {
        var O, L = z.p(I), R = "set" + (this.$u ? "UTC" : ""), K = (O = {}, O[s] = R + "Date", O[k] = R + "Date", O[y] = R + "Month", O[_] = R + "FullYear", O[u] = R + "Hours", O[i] = R + "Minutes", O[o] = R + "Seconds", O[l] = R + "Milliseconds", O)[L], v = L === s ? this.$D + ($ - this.$W) : $;
        if (L === y || L === _) {
          var F = this.clone().set(k, 1);
          F.$d[K](v), F.init(), this.$d = F.set(k, Math.min(this.$D, F.daysInMonth())).$d;
        } else K && this.$d[K](v);
        return this.init(), this;
      }, b.set = function(I, $) {
        return this.clone().$set(I, $);
      }, b.get = function(I) {
        return this[z.p(I)]();
      }, b.add = function(I, $) {
        var O, L = this;
        I = Number(I);
        var R = z.p($), K = function(f) {
          var H = N(L);
          return z.w(H.date(H.date() + Math.round(f * I)), L);
        };
        if (R === y) return this.set(y, this.$M + I);
        if (R === _) return this.set(_, this.$y + I);
        if (R === s) return K(1);
        if (R === c) return K(7);
        var v = (O = {}, O[i] = t, O[u] = r, O[o] = a, O)[R] || 1, F = this.$d.getTime() + I * v;
        return z.w(F, this);
      }, b.subtract = function(I, $) {
        return this.add(-1 * I, $);
      }, b.format = function(I) {
        var $ = this, O = this.$locale();
        if (!this.isValid()) return O.invalidDate || h;
        var L = I || "YYYY-MM-DDTHH:mm:ssZ", R = z.z(this), K = this.$H, v = this.$m, F = this.$M, f = O.weekdays, H = O.months, Y = O.meridiem, S = function(X, ye, M, ne) {
          return X && (X[ye] || X($, L)) || M[ye].slice(0, ne);
        }, oe = function(X) {
          return z.s(K % 12 || 12, X, "0");
        }, $e = Y || function(X, ye, M) {
          var ne = X < 12 ? "AM" : "PM";
          return M ? ne.toLowerCase() : ne;
        };
        return L.replace(D, function(X, ye) {
          return ye || function(M) {
            switch (M) {
              case "YY":
                return String($.$y).slice(-2);
              case "YYYY":
                return z.s($.$y, 4, "0");
              case "M":
                return F + 1;
              case "MM":
                return z.s(F + 1, 2, "0");
              case "MMM":
                return S(O.monthsShort, F, H, 3);
              case "MMMM":
                return S(H, F);
              case "D":
                return $.$D;
              case "DD":
                return z.s($.$D, 2, "0");
              case "d":
                return String($.$W);
              case "dd":
                return S(O.weekdaysMin, $.$W, f, 2);
              case "ddd":
                return S(O.weekdaysShort, $.$W, f, 3);
              case "dddd":
                return f[$.$W];
              case "H":
                return String(K);
              case "HH":
                return z.s(K, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return $e(K, v, !0);
              case "A":
                return $e(K, v, !1);
              case "m":
                return String(v);
              case "mm":
                return z.s(v, 2, "0");
              case "s":
                return String($.$s);
              case "ss":
                return z.s($.$s, 2, "0");
              case "SSS":
                return z.s($.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(X) || R.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(I, $, O) {
        var L, R = this, K = z.p($), v = N(I), F = (v.utcOffset() - this.utcOffset()) * t, f = this - v, H = function() {
          return z.m(R, v);
        };
        switch (K) {
          case _:
            L = H() / 12;
            break;
          case y:
            L = H();
            break;
          case C:
            L = H() / 3;
            break;
          case c:
            L = (f - F) / 6048e5;
            break;
          case s:
            L = (f - F) / 864e5;
            break;
          case u:
            L = f / r;
            break;
          case i:
            L = f / t;
            break;
          case o:
            L = f / a;
            break;
          default:
            L = f;
        }
        return O ? L : z.a(L);
      }, b.daysInMonth = function() {
        return this.endOf(y).$D;
      }, b.$locale = function() {
        return P[this.$L];
      }, b.locale = function(I, $) {
        if (!I) return this.$L;
        var O = this.clone(), L = W(I, $, !0);
        return L && (O.$L = L), O;
      }, b.clone = function() {
        return z.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, B;
    }(), ce = ae.prototype;
    return N.prototype = ce, [["$ms", l], ["$s", o], ["$m", i], ["$H", u], ["$W", s], ["$M", y], ["$y", _], ["$D", k]].forEach(function(B) {
      ce[B[1]] = function(b) {
        return this.$g(b, B[0], B[1]);
      };
    }), N.extend = function(B, b) {
      return B.$i || (B(b, ae, N), B.$i = !0), N;
    }, N.locale = W, N.isDayjs = j, N.unix = function(B) {
      return N(1e3 * B);
    }, N.en = P[G], N.Ls = P, N.p = {}, N;
  });
})(Ol);
var Ps = Ol.exports;
const Ga = /* @__PURE__ */ Os(Ps), Ms = () => Ga().format("YYYY-MM-DD"), sa = {
  sessionDate: Ms,
  todayDateFormatted: () => Ga().format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
  toStandardHisDisplayFormat: (e) => Ga(e).format("DD MMM, YYYY")
}, As = { calenderPrimary: Ko };
function _e(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Le(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}
function Ft(e, n) {
  const a = _e(e);
  return isNaN(n) ? Le(e, NaN) : (n && a.setDate(a.getDate() + n), a);
}
function Et(e, n) {
  const a = _e(e);
  if (isNaN(n)) return Le(e, NaN);
  if (!n)
    return a;
  const t = a.getDate(), r = Le(e, a.getTime());
  r.setMonth(a.getMonth() + n + 1, 0);
  const l = r.getDate();
  return t >= l ? r : (a.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    t
  ), a);
}
function Pl(e, n) {
  const {
    years: a = 0,
    months: t = 0,
    weeks: r = 0,
    days: l = 0,
    hours: o = 0,
    minutes: i = 0,
    seconds: u = 0
  } = n, s = _e(e), c = t || a ? Et(s, t + a * 12) : s, y = l || r ? Ft(c, l + r * 7) : c, C = i + o * 60, k = (u + C * 60) * 1e3;
  return Le(e, y.getTime() + k);
}
function Ns(e, n) {
  const a = +_e(e);
  return Le(e, a + n);
}
const Ml = 6048e5, Fs = 864e5, Is = 6e4, Al = 36e5, Es = 1e3;
function Vs(e, n) {
  return Ns(e, n * Al);
}
let Rs = {};
function yn() {
  return Rs;
}
function Vt(e, n) {
  var i, u, s, c;
  const a = yn(), t = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (i = n == null ? void 0 : n.locale) == null ? void 0 : i.options) == null ? void 0 : u.weekStartsOn) ?? a.weekStartsOn ?? ((c = (s = a.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? 0, r = _e(e), l = r.getDay(), o = (l < t ? 7 : 0) + l - t;
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r;
}
function _n(e) {
  return Vt(e, { weekStartsOn: 1 });
}
function Nl(e) {
  const n = _e(e), a = n.getFullYear(), t = Le(e, 0);
  t.setFullYear(a + 1, 0, 4), t.setHours(0, 0, 0, 0);
  const r = _n(t), l = Le(e, 0);
  l.setFullYear(a, 0, 4), l.setHours(0, 0, 0, 0);
  const o = _n(l);
  return n.getTime() >= r.getTime() ? a + 1 : n.getTime() >= o.getTime() ? a : a - 1;
}
function Vr(e) {
  const n = _e(e);
  return n.setHours(0, 0, 0, 0), n;
}
function ua(e) {
  const n = _e(e), a = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return a.setUTCFullYear(n.getFullYear()), +e - +a;
}
function Fl(e, n) {
  const a = Vr(e), t = Vr(n), r = +a - ua(a), l = +t - ua(t);
  return Math.round((r - l) / Fs);
}
function Ls(e) {
  const n = Nl(e), a = Le(e, 0);
  return a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0), _n(a);
}
function Bs(e, n) {
  const a = n * 3;
  return Et(e, a);
}
function ar(e, n) {
  return Et(e, n * 12);
}
function Rr(e, n) {
  const a = _e(e), t = _e(n), r = a.getTime() - t.getTime();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function Il(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Hn(e) {
  if (!Il(e) && typeof e != "number")
    return !1;
  const n = _e(e);
  return !isNaN(Number(n));
}
function Lr(e) {
  const n = _e(e);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function Hs(e, n) {
  const a = _e(e), t = _e(n);
  return a.getFullYear() - t.getFullYear();
}
function Ys(e, n) {
  const a = _e(e), t = _e(n), r = Rr(a, t), l = Math.abs(Hs(a, t));
  a.setFullYear(1584), t.setFullYear(1584);
  const o = Rr(a, t) === -r, i = r * (l - +o);
  return i === 0 ? 0 : i;
}
function El(e, n) {
  const a = _e(e.start), t = _e(e.end);
  let r = +a > +t;
  const l = r ? +a : +t, o = r ? t : a;
  o.setHours(0, 0, 0, 0);
  let i = 1;
  const u = [];
  for (; +o <= l; )
    u.push(_e(o)), o.setDate(o.getDate() + i), o.setHours(0, 0, 0, 0);
  return r ? u.reverse() : u;
}
function hn(e) {
  const n = _e(e), a = n.getMonth(), t = a - a % 3;
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function js(e, n) {
  const a = _e(e.start), t = _e(e.end);
  let r = +a > +t;
  const l = r ? +hn(a) : +hn(t);
  let o = hn(r ? t : a), i = 1;
  const u = [];
  for (; +o <= l; )
    u.push(_e(o)), o = Bs(o, i);
  return r ? u.reverse() : u;
}
function qs(e) {
  const n = _e(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Vl(e) {
  const n = _e(e), a = n.getFullYear();
  return n.setFullYear(a + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function qn(e) {
  const n = _e(e), a = Le(e, 0);
  return a.setFullYear(n.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function Rl(e, n) {
  var i, u, s, c;
  const a = yn(), t = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (i = n == null ? void 0 : n.locale) == null ? void 0 : i.options) == null ? void 0 : u.weekStartsOn) ?? a.weekStartsOn ?? ((c = (s = a.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? 0, r = _e(e), l = r.getDay(), o = (l < t ? -7 : 0) + 6 - (l - t);
  return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r;
}
function Br(e) {
  const n = _e(e), a = n.getMonth(), t = a - a % 3 + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
const Gs = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, zs = (e, n, a) => {
  let t;
  const r = Gs[e];
  return typeof r == "string" ? t = r : n === 1 ? t = r.one : t = r.other.replace("{{count}}", n.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + t : t + " ago" : t;
};
function Pa(e) {
  return (n = {}) => {
    const a = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[a] || e.formats[e.defaultWidth];
  };
}
const Ws = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Us = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ks = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xs = {
  date: Pa({
    formats: Ws,
    defaultWidth: "full"
  }),
  time: Pa({
    formats: Us,
    defaultWidth: "full"
  }),
  dateTime: Pa({
    formats: Ks,
    defaultWidth: "full"
  })
}, Qs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Zs = (e, n, a, t) => Qs[e];
function En(e) {
  return (n, a) => {
    const t = a != null && a.context ? String(a.context) : "standalone";
    let r;
    if (t === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, i = a != null && a.width ? String(a.width) : o;
      r = e.formattingValues[i] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, i = a != null && a.width ? String(a.width) : e.defaultWidth;
      r = e.values[i] || e.values[o];
    }
    const l = e.argumentCallback ? e.argumentCallback(n) : n;
    return r[l];
  };
}
const Js = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, eu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tu = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, nu = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, au = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ru = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, lu = (e, n) => {
  const a = Number(e), t = a % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, ou = {
  ordinalNumber: lu,
  era: En({
    values: Js,
    defaultWidth: "wide"
  }),
  quarter: En({
    values: eu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: En({
    values: tu,
    defaultWidth: "wide"
  }),
  day: En({
    values: nu,
    defaultWidth: "wide"
  }),
  dayPeriod: En({
    values: au,
    defaultWidth: "wide",
    formattingValues: ru,
    defaultFormattingWidth: "wide"
  })
};
function Vn(e) {
  return (n, a = {}) => {
    const t = a.width, r = t && e.matchPatterns[t] || e.matchPatterns[e.defaultMatchWidth], l = n.match(r);
    if (!l)
      return null;
    const o = l[0], i = t && e.parsePatterns[t] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(i) ? su(i, (y) => y.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      iu(i, (y) => y.test(o))
    );
    let s;
    s = e.valueCallback ? e.valueCallback(u) : u, s = a.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      a.valueCallback(s)
    ) : s;
    const c = n.slice(o.length);
    return { value: s, rest: c };
  };
}
function iu(e, n) {
  for (const a in e)
    if (Object.prototype.hasOwnProperty.call(e, a) && n(e[a]))
      return a;
}
function su(e, n) {
  for (let a = 0; a < e.length; a++)
    if (n(e[a]))
      return a;
}
function uu(e) {
  return (n, a = {}) => {
    const t = n.match(e.matchPattern);
    if (!t) return null;
    const r = t[0], l = n.match(e.parsePattern);
    if (!l) return null;
    let o = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    o = a.valueCallback ? a.valueCallback(o) : o;
    const i = n.slice(r.length);
    return { value: o, rest: i };
  };
}
const du = /^(\d+)(th|st|nd|rd)?/i, cu = /\d+/i, fu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, vu = {
  any: [/^b/i, /^(a|c)/i]
}, hu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, mu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, pu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gu = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, yu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, $u = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, bu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wu = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ku = {
  ordinalNumber: uu({
    matchPattern: du,
    parsePattern: cu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Vn({
    matchPatterns: fu,
    defaultMatchWidth: "wide",
    parsePatterns: vu,
    defaultParseWidth: "any"
  }),
  quarter: Vn({
    matchPatterns: hu,
    defaultMatchWidth: "wide",
    parsePatterns: mu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Vn({
    matchPatterns: pu,
    defaultMatchWidth: "wide",
    parsePatterns: gu,
    defaultParseWidth: "any"
  }),
  day: Vn({
    matchPatterns: yu,
    defaultMatchWidth: "wide",
    parsePatterns: $u,
    defaultParseWidth: "any"
  }),
  dayPeriod: Vn({
    matchPatterns: bu,
    defaultMatchWidth: "any",
    parsePatterns: wu,
    defaultParseWidth: "any"
  })
}, Ll = {
  code: "en-US",
  formatDistance: zs,
  formatLong: Xs,
  formatRelative: Zs,
  localize: ou,
  match: ku,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Cu(e) {
  const n = _e(e);
  return Fl(n, qn(n)) + 1;
}
function rr(e) {
  const n = _e(e), a = +_n(n) - +Ls(n);
  return Math.round(a / Ml) + 1;
}
function lr(e, n) {
  var c, y, C, _;
  const a = _e(e), t = a.getFullYear(), r = yn(), l = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((y = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null ? void 0 : y.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((_ = (C = r.locale) == null ? void 0 : C.options) == null ? void 0 : _.firstWeekContainsDate) ?? 1, o = Le(e, 0);
  o.setFullYear(t + 1, 0, l), o.setHours(0, 0, 0, 0);
  const i = Vt(o, n), u = Le(e, 0);
  u.setFullYear(t, 0, l), u.setHours(0, 0, 0, 0);
  const s = Vt(u, n);
  return a.getTime() >= i.getTime() ? t + 1 : a.getTime() >= s.getTime() ? t : t - 1;
}
function xu(e, n) {
  var i, u, s, c;
  const a = yn(), t = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (i = n == null ? void 0 : n.locale) == null ? void 0 : i.options) == null ? void 0 : u.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((c = (s = a.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, r = lr(e, n), l = Le(e, 0);
  return l.setFullYear(r, 0, t), l.setHours(0, 0, 0, 0), Vt(l, n);
}
function or(e, n) {
  const a = _e(e), t = +Vt(a, n) - +xu(a, n);
  return Math.round(t / Ml) + 1;
}
function Ye(e, n) {
  const a = e < 0 ? "-" : "", t = Math.abs(e).toString().padStart(n, "0");
  return a + t;
}
const Jt = {
  // Year
  y(e, n) {
    const a = e.getFullYear(), t = a > 0 ? a : 1 - a;
    return Ye(n === "yy" ? t % 100 : t, n.length);
  },
  // Month
  M(e, n) {
    const a = e.getMonth();
    return n === "M" ? String(a + 1) : Ye(a + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return Ye(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, n) {
    return Ye(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return Ye(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return Ye(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return Ye(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const a = n.length, t = e.getMilliseconds(), r = Math.trunc(
      t * Math.pow(10, a - 3)
    );
    return Ye(r, n.length);
  }
}, $n = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Hr = {
  // Era
  G: function(e, n, a) {
    const t = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(t, { width: "abbreviated" });
      case "GGGGG":
        return a.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, a) {
    if (n === "yo") {
      const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
      return a.ordinalNumber(r, { unit: "year" });
    }
    return Jt.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, a, t) {
    const r = lr(e, t), l = r > 0 ? r : 1 - r;
    if (n === "YY") {
      const o = l % 100;
      return Ye(o, 2);
    }
    return n === "Yo" ? a.ordinalNumber(l, { unit: "year" }) : Ye(l, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const a = Nl(e);
    return Ye(a, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, n) {
    const a = e.getFullYear();
    return Ye(a, n.length);
  },
  // Quarter
  Q: function(e, n, a) {
    const t = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(t);
      case "QQ":
        return Ye(t, 2);
      case "Qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return a.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, a) {
    const t = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(t);
      case "qq":
        return Ye(t, 2);
      case "qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return a.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, a) {
    const t = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return Jt.M(e, n);
      case "Mo":
        return a.ordinalNumber(t + 1, { unit: "month" });
      case "MMM":
        return a.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, a) {
    const t = e.getMonth();
    switch (n) {
      case "L":
        return String(t + 1);
      case "LL":
        return Ye(t + 1, 2);
      case "Lo":
        return a.ordinalNumber(t + 1, { unit: "month" });
      case "LLL":
        return a.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, a, t) {
    const r = or(e, t);
    return n === "wo" ? a.ordinalNumber(r, { unit: "week" }) : Ye(r, n.length);
  },
  // ISO week of year
  I: function(e, n, a) {
    const t = rr(e);
    return n === "Io" ? a.ordinalNumber(t, { unit: "week" }) : Ye(t, n.length);
  },
  // Day of the month
  d: function(e, n, a) {
    return n === "do" ? a.ordinalNumber(e.getDate(), { unit: "date" }) : Jt.d(e, n);
  },
  // Day of year
  D: function(e, n, a) {
    const t = Cu(e);
    return n === "Do" ? a.ordinalNumber(t, { unit: "dayOfYear" }) : Ye(t, n.length);
  },
  // Day of week
  E: function(e, n, a) {
    const t = e.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(t, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, a, t) {
    const r = e.getDay(), l = (r - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(l);
      case "ee":
        return Ye(l, 2);
      case "eo":
        return a.ordinalNumber(l, { unit: "day" });
      case "eee":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, n, a, t) {
    const r = e.getDay(), l = (r - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(l);
      case "cc":
        return Ye(l, n.length);
      case "co":
        return a.ordinalNumber(l, { unit: "day" });
      case "ccc":
        return a.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, n, a) {
    const t = e.getDay(), r = t === 0 ? 7 : t;
    switch (n) {
      case "i":
        return String(r);
      case "ii":
        return Ye(r, n.length);
      case "io":
        return a.ordinalNumber(r, { unit: "day" });
      case "iii":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(t, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, a) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, n, a) {
    const t = e.getHours();
    let r;
    switch (t === 12 ? r = $n.noon : t === 0 ? r = $n.midnight : r = t / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, n, a) {
    const t = e.getHours();
    let r;
    switch (t >= 17 ? r = $n.evening : t >= 12 ? r = $n.afternoon : t >= 4 ? r = $n.morning : r = $n.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, n, a) {
    if (n === "ho") {
      let t = e.getHours() % 12;
      return t === 0 && (t = 12), a.ordinalNumber(t, { unit: "hour" });
    }
    return Jt.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, a) {
    return n === "Ho" ? a.ordinalNumber(e.getHours(), { unit: "hour" }) : Jt.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, a) {
    const t = e.getHours() % 12;
    return n === "Ko" ? a.ordinalNumber(t, { unit: "hour" }) : Ye(t, n.length);
  },
  // Hour [1-24]
  k: function(e, n, a) {
    let t = e.getHours();
    return t === 0 && (t = 24), n === "ko" ? a.ordinalNumber(t, { unit: "hour" }) : Ye(t, n.length);
  },
  // Minute
  m: function(e, n, a) {
    return n === "mo" ? a.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Jt.m(e, n);
  },
  // Second
  s: function(e, n, a) {
    return n === "so" ? a.ordinalNumber(e.getSeconds(), { unit: "second" }) : Jt.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return Jt.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, a) {
    const t = e.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (n) {
      case "X":
        return jr(t);
      case "XXXX":
      case "XX":
        return fn(t);
      case "XXXXX":
      case "XXX":
      default:
        return fn(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, a) {
    const t = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return jr(t);
      case "xxxx":
      case "xx":
        return fn(t);
      case "xxxxx":
      case "xxx":
      default:
        return fn(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, a) {
    const t = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Yr(t, ":");
      case "OOOO":
      default:
        return "GMT" + fn(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, a) {
    const t = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Yr(t, ":");
      case "zzzz":
      default:
        return "GMT" + fn(t, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, a) {
    const t = Math.trunc(e.getTime() / 1e3);
    return Ye(t, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, a) {
    const t = e.getTime();
    return Ye(t, n.length);
  }
};
function Yr(e, n = "") {
  const a = e > 0 ? "-" : "+", t = Math.abs(e), r = Math.trunc(t / 60), l = t % 60;
  return l === 0 ? a + String(r) : a + String(r) + n + Ye(l, 2);
}
function jr(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ye(Math.abs(e) / 60, 2) : fn(e, n);
}
function fn(e, n = "") {
  const a = e > 0 ? "-" : "+", t = Math.abs(e), r = Ye(Math.trunc(t / 60), 2), l = Ye(t % 60, 2);
  return a + r + n + l;
}
const qr = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, Bl = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, _u = (e, n) => {
  const a = e.match(/(P+)(p+)?/) || [], t = a[1], r = a[2];
  if (!r)
    return qr(e, n);
  let l;
  switch (t) {
    case "P":
      l = n.dateTime({ width: "short" });
      break;
    case "PP":
      l = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      l = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      l = n.dateTime({ width: "full" });
      break;
  }
  return l.replace("{{date}}", qr(t, n)).replace("{{time}}", Bl(r, n));
}, za = {
  p: Bl,
  P: _u
}, Tu = /^D+$/, Du = /^Y+$/, Su = ["D", "DD", "YY", "YYYY"];
function Hl(e) {
  return Tu.test(e);
}
function Yl(e) {
  return Du.test(e);
}
function Wa(e, n, a) {
  const t = Ou(e, n, a);
  if (console.warn(t), Su.includes(e)) throw new RangeError(t);
}
function Ou(e, n, a) {
  const t = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${t} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Pu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Mu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Au = /^'([^]*?)'?$/, Nu = /''/g, Fu = /[a-zA-Z]/;
function jt(e, n, a) {
  var c, y, C, _, k, h, x, D;
  const t = yn(), r = (a == null ? void 0 : a.locale) ?? t.locale ?? Ll, l = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((y = (c = a == null ? void 0 : a.locale) == null ? void 0 : c.options) == null ? void 0 : y.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((_ = (C = t.locale) == null ? void 0 : C.options) == null ? void 0 : _.firstWeekContainsDate) ?? 1, o = (a == null ? void 0 : a.weekStartsOn) ?? ((h = (k = a == null ? void 0 : a.locale) == null ? void 0 : k.options) == null ? void 0 : h.weekStartsOn) ?? t.weekStartsOn ?? ((D = (x = t.locale) == null ? void 0 : x.options) == null ? void 0 : D.weekStartsOn) ?? 0, i = _e(e);
  if (!Hn(i))
    throw new RangeError("Invalid time value");
  let u = n.match(Mu).map((g) => {
    const p = g[0];
    if (p === "p" || p === "P") {
      const A = za[p];
      return A(g, r.formatLong);
    }
    return g;
  }).join("").match(Pu).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const p = g[0];
    if (p === "'")
      return { isToken: !1, value: Iu(g) };
    if (Hr[p])
      return { isToken: !0, value: g };
    if (p.match(Fu))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: g };
  });
  r.localize.preprocessor && (u = r.localize.preprocessor(i, u));
  const s = {
    firstWeekContainsDate: l,
    weekStartsOn: o,
    locale: r
  };
  return u.map((g) => {
    if (!g.isToken) return g.value;
    const p = g.value;
    (!(a != null && a.useAdditionalWeekYearTokens) && Yl(p) || !(a != null && a.useAdditionalDayOfYearTokens) && Hl(p)) && Wa(p, n, String(e));
    const A = Hr[p[0]];
    return A(i, p, r.localize, s);
  }).join("");
}
function Iu(e) {
  const n = e.match(Au);
  return n ? n[1].replace(Nu, "'") : e;
}
function Eu(e) {
  return _e(e).getDay();
}
function Vu(e) {
  const n = _e(e), a = n.getFullYear(), t = n.getMonth(), r = Le(e, 0);
  return r.setFullYear(a, t + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function Ru() {
  return Object.assign({}, yn());
}
function Xt(e) {
  return _e(e).getHours();
}
function Lu(e) {
  let a = _e(e).getDay();
  return a === 0 && (a = 7), a;
}
function on(e) {
  return _e(e).getMinutes();
}
function Fe(e) {
  return _e(e).getMonth();
}
function Tn(e) {
  return _e(e).getSeconds();
}
function Oe(e) {
  return _e(e).getFullYear();
}
function Dn(e, n) {
  const a = _e(e), t = _e(n);
  return a.getTime() > t.getTime();
}
function Gn(e, n) {
  const a = _e(e), t = _e(n);
  return +a < +t;
}
function Cn(e, n) {
  const a = _e(e), t = _e(n);
  return +a == +t;
}
function Bu(e, n) {
  const a = n instanceof Date ? Le(n, 0) : new n(0);
  return a.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), a.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), a;
}
const Hu = 10;
class jl {
  constructor() {
    we(this, "subPriority", 0);
  }
  validate(n, a) {
    return !0;
  }
}
class Yu extends jl {
  constructor(n, a, t, r, l) {
    super(), this.value = n, this.validateValue = a, this.setValue = t, this.priority = r, l && (this.subPriority = l);
  }
  validate(n, a) {
    return this.validateValue(n, this.value, a);
  }
  set(n, a, t) {
    return this.setValue(n, a, this.value, t);
  }
}
class ju extends jl {
  constructor() {
    super(...arguments);
    we(this, "priority", Hu);
    we(this, "subPriority", -1);
  }
  set(a, t) {
    return t.timestampIsSet ? a : Le(a, Bu(a, Date));
  }
}
class Be {
  run(n, a, t, r) {
    const l = this.parse(n, a, t, r);
    return l ? {
      setter: new Yu(
        l.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: l.rest
    } : null;
  }
  validate(n, a, t) {
    return !0;
  }
}
class qu extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 140);
    we(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, { width: "abbreviated" }) || r.era(a, { width: "narrow" });
      case "GGGGG":
        return r.era(a, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(a, { width: "wide" }) || r.era(a, { width: "abbreviated" }) || r.era(a, { width: "narrow" });
    }
  }
  set(a, t, r) {
    return t.era = r, a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
const nt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Bt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function at(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function Xe(e, n) {
  const a = n.match(e);
  return a ? {
    value: parseInt(a[0], 10),
    rest: n.slice(a[0].length)
  } : null;
}
function Ht(e, n) {
  const a = n.match(e);
  if (!a)
    return null;
  if (a[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const t = a[1] === "+" ? 1 : -1, r = a[2] ? parseInt(a[2], 10) : 0, l = a[3] ? parseInt(a[3], 10) : 0, o = a[5] ? parseInt(a[5], 10) : 0;
  return {
    value: t * (r * Al + l * Is + o * Es),
    rest: n.slice(a[0].length)
  };
}
function ql(e) {
  return Xe(nt.anyDigitsSigned, e);
}
function Je(e, n) {
  switch (e) {
    case 1:
      return Xe(nt.singleDigit, n);
    case 2:
      return Xe(nt.twoDigits, n);
    case 3:
      return Xe(nt.threeDigits, n);
    case 4:
      return Xe(nt.fourDigits, n);
    default:
      return Xe(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function da(e, n) {
  switch (e) {
    case 1:
      return Xe(nt.singleDigitSigned, n);
    case 2:
      return Xe(nt.twoDigitsSigned, n);
    case 3:
      return Xe(nt.threeDigitsSigned, n);
    case 4:
      return Xe(nt.fourDigitsSigned, n);
    default:
      return Xe(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function ir(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Gl(e, n) {
  const a = n > 0, t = a ? n : 1 - n;
  let r;
  if (t <= 50)
    r = e || 100;
  else {
    const l = t + 50, o = Math.trunc(l / 100) * 100, i = e >= l % 100;
    r = e + o - (i ? 100 : 0);
  }
  return a ? r : 1 - r;
}
function zl(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class Gu extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 130);
    we(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(a, t, r) {
    const l = (o) => ({
      year: o,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return at(Je(4, a), l);
      case "yo":
        return at(
          r.ordinalNumber(a, {
            unit: "year"
          }),
          l
        );
      default:
        return at(Je(t.length, a), l);
    }
  }
  validate(a, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(a, t, r) {
    const l = a.getFullYear();
    if (r.isTwoDigitYear) {
      const i = Gl(
        r.year,
        l
      );
      return a.setFullYear(i, 0, 1), a.setHours(0, 0, 0, 0), a;
    }
    const o = !("era" in t) || t.era === 1 ? r.year : 1 - r.year;
    return a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class zu extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 130);
    we(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    const l = (o) => ({
      year: o,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return at(Je(4, a), l);
      case "Yo":
        return at(
          r.ordinalNumber(a, {
            unit: "year"
          }),
          l
        );
      default:
        return at(Je(t.length, a), l);
    }
  }
  validate(a, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(a, t, r, l) {
    const o = lr(a, l);
    if (r.isTwoDigitYear) {
      const u = Gl(
        r.year,
        o
      );
      return a.setFullYear(
        u,
        0,
        l.firstWeekContainsDate
      ), a.setHours(0, 0, 0, 0), Vt(a, l);
    }
    const i = !("era" in t) || t.era === 1 ? r.year : 1 - r.year;
    return a.setFullYear(i, 0, l.firstWeekContainsDate), a.setHours(0, 0, 0, 0), Vt(a, l);
  }
}
class Wu extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 130);
    we(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t) {
    return da(t === "R" ? 4 : t.length, a);
  }
  set(a, t, r) {
    const l = Le(a, 0);
    return l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0), _n(l);
  }
}
class Uu extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 130);
    we(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(a, t) {
    return da(t === "u" ? 4 : t.length, a);
  }
  set(a, t, r) {
    return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class Ku extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 120);
    we(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    switch (t) {
      case "Q":
      case "QQ":
        return Je(t.length, a);
      case "Qo":
        return r.ordinalNumber(a, { unit: "quarter" });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(a, t) {
    return t >= 1 && t <= 4;
  }
  set(a, t, r) {
    return a.setMonth((r - 1) * 3, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class Xu extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 120);
    we(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    switch (t) {
      case "q":
      case "qq":
        return Je(t.length, a);
      case "qo":
        return r.ordinalNumber(a, { unit: "quarter" });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(a, t) {
    return t >= 1 && t <= 4;
  }
  set(a, t, r) {
    return a.setMonth((r - 1) * 3, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class Qu extends Be {
  constructor() {
    super(...arguments);
    we(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    we(this, "priority", 110);
  }
  parse(a, t, r) {
    const l = (o) => o - 1;
    switch (t) {
      case "M":
        return at(
          Xe(nt.month, a),
          l
        );
      case "MM":
        return at(Je(2, a), l);
      case "Mo":
        return at(
          r.ordinalNumber(a, {
            unit: "month"
          }),
          l
        );
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(a, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, { width: "wide", context: "formatting" }) || r.month(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 11;
  }
  set(a, t, r) {
    return a.setMonth(r, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class Zu extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 110);
    we(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    const l = (o) => o - 1;
    switch (t) {
      case "L":
        return at(
          Xe(nt.month, a),
          l
        );
      case "LL":
        return at(Je(2, a), l);
      case "Lo":
        return at(
          r.ordinalNumber(a, {
            unit: "month"
          }),
          l
        );
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(a, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, { width: "wide", context: "standalone" }) || r.month(a, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(a, { width: "narrow", context: "standalone" });
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 11;
  }
  set(a, t, r) {
    return a.setMonth(r, 1), a.setHours(0, 0, 0, 0), a;
  }
}
function Ju(e, n, a) {
  const t = _e(e), r = or(t, a) - n;
  return t.setDate(t.getDate() - r * 7), t;
}
class ed extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 100);
    we(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    switch (t) {
      case "w":
        return Xe(nt.week, a);
      case "wo":
        return r.ordinalNumber(a, { unit: "week" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 1 && t <= 53;
  }
  set(a, t, r, l) {
    return Vt(Ju(a, r, l), l);
  }
}
function td(e, n) {
  const a = _e(e), t = rr(a) - n;
  return a.setDate(a.getDate() - t * 7), a;
}
class nd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 100);
    we(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    switch (t) {
      case "I":
        return Xe(nt.week, a);
      case "Io":
        return r.ordinalNumber(a, { unit: "week" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 1 && t <= 53;
  }
  set(a, t, r) {
    return _n(td(a, r));
  }
}
const ad = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], rd = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class ld extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 90);
    we(this, "subPriority", 1);
    we(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    switch (t) {
      case "d":
        return Xe(nt.date, a);
      case "do":
        return r.ordinalNumber(a, { unit: "date" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    const r = a.getFullYear(), l = zl(r), o = a.getMonth();
    return l ? t >= 1 && t <= rd[o] : t >= 1 && t <= ad[o];
  }
  set(a, t, r) {
    return a.setDate(r), a.setHours(0, 0, 0, 0), a;
  }
}
class od extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 90);
    we(this, "subpriority", 1);
    we(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    switch (t) {
      case "D":
      case "DD":
        return Xe(nt.dayOfYear, a);
      case "Do":
        return r.ordinalNumber(a, { unit: "date" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    const r = a.getFullYear();
    return zl(r) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(a, t, r) {
    return a.setMonth(0, r), a.setHours(0, 0, 0, 0), a;
  }
}
function sr(e, n, a) {
  var y, C, _, k;
  const t = yn(), r = (a == null ? void 0 : a.weekStartsOn) ?? ((C = (y = a == null ? void 0 : a.locale) == null ? void 0 : y.options) == null ? void 0 : C.weekStartsOn) ?? t.weekStartsOn ?? ((k = (_ = t.locale) == null ? void 0 : _.options) == null ? void 0 : k.weekStartsOn) ?? 0, l = _e(e), o = l.getDay(), u = (n % 7 + 7) % 7, s = 7 - r, c = n < 0 || n > 6 ? n - (o + s) % 7 : (u + s) % 7 - (o + s) % 7;
  return Ft(l, c);
}
class id extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 90);
    we(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(a, { width: "short", context: "formatting" }) || r.day(a, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, { width: "short", context: "formatting" }) || r.day(a, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(a, { width: "wide", context: "formatting" }) || r.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(a, { width: "short", context: "formatting" }) || r.day(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 6;
  }
  set(a, t, r, l) {
    return a = sr(a, r, l), a.setHours(0, 0, 0, 0), a;
  }
}
class sd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 90);
    we(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r, l) {
    const o = (i) => {
      const u = Math.floor((i - 1) / 7) * 7;
      return (i + l.weekStartsOn + 6) % 7 + u;
    };
    switch (t) {
      case "e":
      case "ee":
        return at(Je(t.length, a), o);
      case "eo":
        return at(
          r.ordinalNumber(a, {
            unit: "day"
          }),
          o
        );
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(a, { width: "short", context: "formatting" }) || r.day(a, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, { width: "short", context: "formatting" }) || r.day(a, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(a, { width: "wide", context: "formatting" }) || r.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(a, { width: "short", context: "formatting" }) || r.day(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 6;
  }
  set(a, t, r, l) {
    return a = sr(a, r, l), a.setHours(0, 0, 0, 0), a;
  }
}
class ud extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 90);
    we(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(a, t, r, l) {
    const o = (i) => {
      const u = Math.floor((i - 1) / 7) * 7;
      return (i + l.weekStartsOn + 6) % 7 + u;
    };
    switch (t) {
      case "c":
      case "cc":
        return at(Je(t.length, a), o);
      case "co":
        return at(
          r.ordinalNumber(a, {
            unit: "day"
          }),
          o
        );
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(a, { width: "short", context: "standalone" }) || r.day(a, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, { width: "short", context: "standalone" }) || r.day(a, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(a, { width: "wide", context: "standalone" }) || r.day(a, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(a, { width: "short", context: "standalone" }) || r.day(a, { width: "narrow", context: "standalone" });
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 6;
  }
  set(a, t, r, l) {
    return a = sr(a, r, l), a.setHours(0, 0, 0, 0), a;
  }
}
function dd(e, n) {
  const a = _e(e), t = Lu(a), r = n - t;
  return Ft(a, r);
}
class cd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 90);
    we(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, t, r) {
    const l = (o) => o === 0 ? 7 : o;
    switch (t) {
      case "i":
      case "ii":
        return Je(t.length, a);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      case "iii":
        return at(
          r.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(a, {
            width: "short",
            context: "formatting"
          }) || r.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiiii":
        return at(
          r.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiiiii":
        return at(
          r.day(a, {
            width: "short",
            context: "formatting"
          }) || r.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiii":
      default:
        return at(
          r.day(a, {
            width: "wide",
            context: "formatting"
          }) || r.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(a, {
            width: "short",
            context: "formatting"
          }) || r.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
    }
  }
  validate(a, t) {
    return t >= 1 && t <= 7;
  }
  set(a, t, r) {
    return a = dd(a, r), a.setHours(0, 0, 0, 0), a;
  }
}
class fd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 80);
    we(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, t, r) {
    return a.setHours(ir(r), 0, 0, 0), a;
  }
}
class vd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 80);
    we(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, t, r) {
    return a.setHours(ir(r), 0, 0, 0), a;
  }
}
class hd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 80);
    we(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, t, r) {
    return a.setHours(ir(r), 0, 0, 0), a;
  }
}
class md extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 70);
    we(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "h":
        return Xe(nt.hour12h, a);
      case "ho":
        return r.ordinalNumber(a, { unit: "hour" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 1 && t <= 12;
  }
  set(a, t, r) {
    const l = a.getHours() >= 12;
    return l && r < 12 ? a.setHours(r + 12, 0, 0, 0) : !l && r === 12 ? a.setHours(0, 0, 0, 0) : a.setHours(r, 0, 0, 0), a;
  }
}
class pd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 70);
    we(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "H":
        return Xe(nt.hour23h, a);
      case "Ho":
        return r.ordinalNumber(a, { unit: "hour" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 23;
  }
  set(a, t, r) {
    return a.setHours(r, 0, 0, 0), a;
  }
}
class gd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 70);
    we(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "K":
        return Xe(nt.hour11h, a);
      case "Ko":
        return r.ordinalNumber(a, { unit: "hour" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 11;
  }
  set(a, t, r) {
    return a.getHours() >= 12 && r < 12 ? a.setHours(r + 12, 0, 0, 0) : a.setHours(r, 0, 0, 0), a;
  }
}
class yd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 70);
    we(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "k":
        return Xe(nt.hour24h, a);
      case "ko":
        return r.ordinalNumber(a, { unit: "hour" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 1 && t <= 24;
  }
  set(a, t, r) {
    const l = r <= 24 ? r % 24 : r;
    return a.setHours(l, 0, 0, 0), a;
  }
}
class $d extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 60);
    we(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "m":
        return Xe(nt.minute, a);
      case "mo":
        return r.ordinalNumber(a, { unit: "minute" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 59;
  }
  set(a, t, r) {
    return a.setMinutes(r, 0, 0), a;
  }
}
class bd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 50);
    we(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(a, t, r) {
    switch (t) {
      case "s":
        return Xe(nt.second, a);
      case "so":
        return r.ordinalNumber(a, { unit: "second" });
      default:
        return Je(t.length, a);
    }
  }
  validate(a, t) {
    return t >= 0 && t <= 59;
  }
  set(a, t, r) {
    return a.setSeconds(r, 0), a;
  }
}
class wd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 30);
    we(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(a, t) {
    const r = (l) => Math.trunc(l * Math.pow(10, -t.length + 3));
    return at(Je(t.length, a), r);
  }
  set(a, t, r) {
    return a.setMilliseconds(r), a;
  }
}
class kd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 10);
    we(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(a, t) {
    switch (t) {
      case "X":
        return Ht(
          Bt.basicOptionalMinutes,
          a
        );
      case "XX":
        return Ht(Bt.basic, a);
      case "XXXX":
        return Ht(
          Bt.basicOptionalSeconds,
          a
        );
      case "XXXXX":
        return Ht(
          Bt.extendedOptionalSeconds,
          a
        );
      case "XXX":
      default:
        return Ht(Bt.extended, a);
    }
  }
  set(a, t, r) {
    return t.timestampIsSet ? a : Le(
      a,
      a.getTime() - ua(a) - r
    );
  }
}
class Cd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 10);
    we(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(a, t) {
    switch (t) {
      case "x":
        return Ht(
          Bt.basicOptionalMinutes,
          a
        );
      case "xx":
        return Ht(Bt.basic, a);
      case "xxxx":
        return Ht(
          Bt.basicOptionalSeconds,
          a
        );
      case "xxxxx":
        return Ht(
          Bt.extendedOptionalSeconds,
          a
        );
      case "xxx":
      default:
        return Ht(Bt.extended, a);
    }
  }
  set(a, t, r) {
    return t.timestampIsSet ? a : Le(
      a,
      a.getTime() - ua(a) - r
    );
  }
}
class xd extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 40);
    we(this, "incompatibleTokens", "*");
  }
  parse(a) {
    return ql(a);
  }
  set(a, t, r) {
    return [Le(a, r * 1e3), { timestampIsSet: !0 }];
  }
}
class _d extends Be {
  constructor() {
    super(...arguments);
    we(this, "priority", 20);
    we(this, "incompatibleTokens", "*");
  }
  parse(a) {
    return ql(a);
  }
  set(a, t, r) {
    return [Le(a, r), { timestampIsSet: !0 }];
  }
}
const Td = {
  G: new qu(),
  y: new Gu(),
  Y: new zu(),
  R: new Wu(),
  u: new Uu(),
  Q: new Ku(),
  q: new Xu(),
  M: new Qu(),
  L: new Zu(),
  w: new ed(),
  I: new nd(),
  d: new ld(),
  D: new od(),
  E: new id(),
  e: new sd(),
  c: new ud(),
  i: new cd(),
  a: new fd(),
  b: new vd(),
  B: new hd(),
  h: new md(),
  H: new pd(),
  K: new gd(),
  k: new yd(),
  m: new $d(),
  s: new bd(),
  S: new wd(),
  X: new kd(),
  x: new Cd(),
  t: new xd(),
  T: new _d()
}, Dd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Od = /^'([^]*?)'?$/, Pd = /''/g, Md = /\S/, Ad = /[a-zA-Z]/;
function Ua(e, n, a, t) {
  var h, x, D, g, p, A, G, P;
  const r = Ru(), l = (t == null ? void 0 : t.locale) ?? r.locale ?? Ll, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((x = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : x.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (D = r.locale) == null ? void 0 : D.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((A = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : A.weekStartsOn) ?? r.weekStartsOn ?? ((P = (G = r.locale) == null ? void 0 : G.options) == null ? void 0 : P.weekStartsOn) ?? 0;
  if (n === "")
    return e === "" ? _e(a) : Le(a, NaN);
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: l
  }, s = [new ju()], c = n.match(Sd).map((V) => {
    const j = V[0];
    if (j in za) {
      const W = za[j];
      return W(V, l.formatLong);
    }
    return V;
  }).join("").match(Dd), y = [];
  for (let V of c) {
    !(t != null && t.useAdditionalWeekYearTokens) && Yl(V) && Wa(V, n, e), !(t != null && t.useAdditionalDayOfYearTokens) && Hl(V) && Wa(V, n, e);
    const j = V[0], W = Td[j];
    if (W) {
      const { incompatibleTokens: N } = W;
      if (Array.isArray(N)) {
        const ae = y.find(
          (ce) => N.includes(ce.token) || ce.token === j
        );
        if (ae)
          throw new RangeError(
            `The format string mustn't contain \`${ae.fullToken}\` and \`${V}\` at the same time`
          );
      } else if (W.incompatibleTokens === "*" && y.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${V}\` and any other token at the same time`
        );
      y.push({ token: j, fullToken: V });
      const z = W.run(
        e,
        V,
        l.match,
        u
      );
      if (!z)
        return Le(a, NaN);
      s.push(z.setter), e = z.rest;
    } else {
      if (j.match(Ad))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + j + "`"
        );
      if (V === "''" ? V = "'" : j === "'" && (V = Nd(V)), e.indexOf(V) === 0)
        e = e.slice(V.length);
      else
        return Le(a, NaN);
    }
  }
  if (e.length > 0 && Md.test(e))
    return Le(a, NaN);
  const C = s.map((V) => V.priority).sort((V, j) => j - V).filter((V, j, W) => W.indexOf(V) === j).map(
    (V) => s.filter((j) => j.priority === V).sort((j, W) => W.subPriority - j.subPriority)
  ).map((V) => V[0]);
  let _ = _e(a);
  if (isNaN(_.getTime()))
    return Le(a, NaN);
  const k = {};
  for (const V of C) {
    if (!V.validate(_, u))
      return Le(a, NaN);
    const j = V.set(_, k, u);
    Array.isArray(j) ? (_ = j[0], Object.assign(k, j[1])) : _ = j;
  }
  return Le(a, _);
}
function Nd(e) {
  return e.match(Od)[1].replace(Pd, "'");
}
function Gr(e, n) {
  const a = hn(e), t = hn(n);
  return +a == +t;
}
function Fd(e, n) {
  return Ft(e, -n);
}
function Wl(e, n) {
  const a = _e(e), t = a.getFullYear(), r = a.getDate(), l = Le(e, 0);
  l.setFullYear(t, n, 15), l.setHours(0, 0, 0, 0);
  const o = Vu(l);
  return a.setMonth(n, Math.min(r, o)), a;
}
function Ge(e, n) {
  let a = _e(e);
  return isNaN(+a) ? Le(e, NaN) : (n.year != null && a.setFullYear(n.year), n.month != null && (a = Wl(a, n.month)), n.date != null && a.setDate(n.date), n.hours != null && a.setHours(n.hours), n.minutes != null && a.setMinutes(n.minutes), n.seconds != null && a.setSeconds(n.seconds), n.milliseconds != null && a.setMilliseconds(n.milliseconds), a);
}
function Id(e, n) {
  const a = _e(e);
  return a.setHours(n), a;
}
function Ul(e, n) {
  const a = _e(e);
  return a.setMilliseconds(n), a;
}
function Ed(e, n) {
  const a = _e(e);
  return a.setMinutes(n), a;
}
function Kl(e, n) {
  const a = _e(e);
  return a.setSeconds(n), a;
}
function Yt(e, n) {
  const a = _e(e);
  return isNaN(+a) ? Le(e, NaN) : (a.setFullYear(n), a);
}
function Sn(e, n) {
  return Et(e, -n);
}
function Vd(e, n) {
  const {
    years: a = 0,
    months: t = 0,
    weeks: r = 0,
    days: l = 0,
    hours: o = 0,
    minutes: i = 0,
    seconds: u = 0
  } = n, s = Sn(e, t + a * 12), c = Fd(s, l + r * 7), y = i + o * 60, _ = (u + y * 60) * 1e3;
  return Le(e, c.getTime() - _);
}
function Xl(e, n) {
  return ar(e, -n);
}
function Nn() {
  return d(), w(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      q("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      q("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      q("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      q("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Nn.compatConfig = {
  MODE: 3
};
function Ql() {
  return d(), w(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      q("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      q("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ql.compatConfig = {
  MODE: 3
};
function ur() {
  return d(), w(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      q("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
ur.compatConfig = {
  MODE: 3
};
function dr() {
  return d(), w(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      q("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
dr.compatConfig = {
  MODE: 3
};
function cr() {
  return d(), w(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      q("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      q("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
cr.compatConfig = {
  MODE: 3
};
function fr() {
  return d(), w(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      q("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
fr.compatConfig = {
  MODE: 3
};
function vr() {
  return d(), w(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      q("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
vr.compatConfig = {
  MODE: 3
};
const Tt = (e, n) => n ? new Date(e.toLocaleString("en-US", { timeZone: n })) : new Date(e), hr = (e, n, a) => Ka(e, n, a) || se(), Rd = (e, n, a) => {
  const t = n.dateInTz ? Tt(new Date(e), n.dateInTz) : se(e);
  return a ? Ct(t, !0) : t;
}, Ka = (e, n, a) => {
  if (!e) return null;
  const t = a ? Ct(se(e), !0) : se(e);
  return n ? n.exactMatch ? Rd(e, n, a) : Tt(t, n.timezone) : t;
}, Ld = (e) => {
  if (!e) return 0;
  const n = /* @__PURE__ */ new Date(), a = new Date(n.toLocaleString("en-US", { timeZone: "UTC" })), t = new Date(n.toLocaleString("en-US", { timeZone: e })), r = t.getTimezoneOffset() / 60;
  return (+a - +t) / (1e3 * 60 * 60) - r;
};
var Nt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Nt || {}), vn = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(vn || {}), mn = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(mn || {}), gt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(gt || {});
const Bd = ["timestamp", "date", "iso"];
var wt = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(wt || {}), Ke = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Ke || {});
function zr(e) {
  return (n) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2);
}
function Hd(e) {
  return (n) => jt(Tt(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const Yd = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7];
  let r;
  if (e !== null)
    try {
      r = t.map(Hd(e));
    } catch {
      r = t.map(zr(n));
    }
  else
    r = t.map(zr(n));
  const l = r.slice(0, a), o = r.slice(a + 1, r.length);
  return [r[a]].concat(...o).concat(...l);
}, mr = (e, n, a) => {
  const t = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    t.push({ value: +r, text: to(r, n) });
  return a ? t.reverse() : t;
}, Zl = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((l) => {
    const o = l < 10 ? `0${l}` : l;
    return /* @__PURE__ */ new Date(`2017-${o}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const l = a === "long" ? "LLLL" : "LLL";
      return t.map((o, i) => {
        const u = jt(Tt(o, "UTC"), l, { locale: e });
        return {
          text: u.charAt(0).toUpperCase() + u.substring(1),
          value: i
        };
      });
    } catch {
    }
  const r = new Intl.DateTimeFormat(n, { month: a, timeZone: "UTC" });
  return t.map((l, o) => {
    const i = r.format(l);
    return {
      text: i.charAt(0).toUpperCase() + i.substring(1),
      value: o
    };
  });
}, jd = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], it = (e) => {
  const n = m(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, qd = (e) => ({ type: "dot", ...e ?? {} }), Jl = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, pr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, dt = (e) => e, Wr = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Ur = (e) => e === null, eo = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Gd = (e) => {
  const n = [], a = (t) => t.filter((r) => r);
  for (let t = 0; t < e.length; t += 3) {
    const r = [e[t], e[t + 1], e[t + 2]];
    n.push(a(r));
  }
  return n;
}, zn = (e, n, a) => {
  const t = a != null, r = n != null;
  if (!t && !r) return !1;
  const l = +a, o = +n;
  return t && r ? +e > l || +e < o : t ? +e > l : r ? +e < o : !1;
}, On = (e, n) => Gd(e).map((a) => a.map((t) => {
  const { active: r, disabled: l, isBetween: o, highlighted: i } = n(t);
  return {
    ...t,
    active: r,
    disabled: l,
    className: {
      dp__overlay_cell_active: r,
      dp__overlay_cell: !r,
      dp__overlay_cell_disabled: l,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: l && r,
      dp__cell_in_between: o,
      "dp--highlighted": i
    }
  };
})), an = (e, n, a = !1) => {
  e && n.allowStopPropagation && (a && e.stopImmediatePropagation(), e.stopPropagation());
}, zd = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Wd(e, n) {
  let a = [...document.querySelectorAll(zd())];
  a = a.filter((r) => !e.contains(r) || r.hasAttribute("data-datepicker-instance"));
  const t = a.indexOf(e);
  if (t >= 0 && (n ? t - 1 >= 0 : t + 1 <= a.length))
    return a[t + (n ? -1 : 1)];
}
const Ud = (e, n) => e == null ? void 0 : e.querySelector(`[data-dp-element="${n}"]`), to = (e, n) => new Intl.NumberFormat(n, { useGrouping: !1, style: "decimal" }).format(e), gr = (e) => jt(e, "dd-MM-yyyy"), Ma = (e) => Array.isArray(e), ca = (e, n) => n.get(gr(e)), Kd = (e, n) => e ? n ? n instanceof Map ? !!ca(e, n) : n(se(e)) : !1 : !0, _t = (e, n, a = !1) => {
  if (e.key === Ke.enter || e.key === Ke.space)
    return a && e.preventDefault(), n();
}, Kr = (e, n, a, t, r, l) => {
  const o = Ua(e, n.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: l });
  return Hn(o) && Il(o) ? t || r ? o : Ge(o, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, Xd = (e, n, a, t, r, l) => {
  const o = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return Kr(e, n, o, t, r, l);
  if (Array.isArray(n)) {
    let i = null;
    for (const u of n)
      if (i = Kr(e, u, o, t, r, l), i)
        break;
    return i;
  }
  return typeof n == "function" ? n(e) : null;
}, se = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Qd = (e, n, a) => {
  if (n) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), l = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0"), u = a ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${r}-${l}T${o}:${i}:${u}.000Z`;
  }
  const t = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(t).toISOString();
}, Ct = (e, n) => {
  const a = se(JSON.parse(JSON.stringify(e))), t = Ge(a, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return n ? qs(t) : t;
}, rn = (e, n, a, t) => {
  let r = e ? se(e) : se();
  return (n || n === 0) && (r = Id(r, +n)), (a || a === 0) && (r = Ed(r, +a)), (t || t === 0) && (r = Kl(r, +t)), Ul(r, 0);
}, Ze = (e, n) => !e || !n ? !1 : Gn(Ct(e), Ct(n)), Ee = (e, n) => !e || !n ? !1 : Cn(Ct(e), Ct(n)), tt = (e, n) => !e || !n ? !1 : Dn(Ct(e), Ct(n)), ga = (e, n, a) => e != null && e[0] && e != null && e[1] ? tt(a, e[0]) && Ze(a, e[1]) : e != null && e[0] && n ? tt(a, e[0]) && Ze(a, n) || Ze(a, e[0]) && tt(a, n) : !1, It = (e) => {
  const n = Ge(new Date(e), { date: 1 });
  return Ct(n);
}, Aa = (e, n, a) => n && (a || a === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((t) => t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, pn = (e) => ({
  hours: Xt(e),
  minutes: on(e),
  seconds: Tn(e)
}), no = (e, n) => {
  if (n) {
    const a = Oe(se(n));
    if (a > e) return 12;
    if (a === e) return Fe(se(n));
  }
}, ao = (e, n) => {
  if (n) {
    const a = Oe(se(n));
    return a < e ? -1 : a === e ? Fe(se(n)) : void 0;
  }
}, Pn = (e) => {
  if (e) return Oe(se(e));
}, ro = (e, n) => {
  const a = tt(e, n) ? n : e, t = tt(n, e) ? n : e;
  return El({ start: a, end: t });
}, Zd = (e) => {
  const n = Et(e, 1);
  return { month: Fe(n), year: Oe(n) };
}, zt = (e, n) => {
  const a = Vt(e, { weekStartsOn: +n }), t = Rl(e, { weekStartsOn: +n });
  return [a, t];
}, lo = (e, n) => {
  const a = {
    hours: Xt(se()),
    minutes: on(se()),
    seconds: n ? Tn(se()) : 0
  };
  return Object.assign(a, e);
}, tn = (e, n, a) => [Ge(se(e), { date: 1 }), Ge(se(), { month: n, year: a, date: 1 })], Kt = (e, n, a) => {
  let t = e ? se(e) : se();
  return (n || n === 0) && (t = Wl(t, n)), a && (t = Yt(t, a)), t;
}, oo = (e, n, a, t, r) => {
  if (!t || r && !n || !r && !a) return !1;
  const l = r ? Et(e, 1) : Sn(e, 1), o = [Fe(l), Oe(l)];
  return r ? !ec(...o, n) : !Jd(...o, a);
}, Jd = (e, n, a) => Ze(...tn(a, e, n)) || Ee(...tn(a, e, n)), ec = (e, n, a) => tt(...tn(a, e, n)) || Ee(...tn(a, e, n)), io = (e, n, a, t, r, l, o) => {
  if (typeof n == "function" && !o) return n(e);
  const i = a ? { locale: a } : void 0;
  return Array.isArray(e) ? `${jt(e[0], l, i)}${r && !e[1] ? "" : t}${e[1] ? jt(e[1], l, i) : ""}` : jt(e, l, i);
}, bn = (e) => {
  if (e) return null;
  throw new Error(pr.prop("partial-range"));
}, la = (e, n) => {
  if (n) return e();
  throw new Error(pr.prop("range"));
}, Xa = (e) => Array.isArray(e) ? Hn(e[0]) && (e[1] ? Hn(e[1]) : !0) : e ? Hn(e) : !1, tc = (e, n) => Ge(n ?? se(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Na = (e, n, a, t) => {
  if (!e) return !0;
  if (t) {
    const r = a === "max" ? Gn(e, n) : Dn(e, n), l = { seconds: 0, milliseconds: 0 };
    return r || Cn(Ge(e, l), Ge(n, l));
  }
  return a === "max" ? e.getTime() <= n.getTime() : e.getTime() >= n.getTime();
}, Fa = (e, n, a) => e ? tc(e, n) : se(a ?? n), Xr = (e, n, a, t, r) => {
  if (Array.isArray(t)) {
    const o = Fa(e, t[0], n), i = Fa(e, t[1], n);
    return Na(t[0], o, a, !!n) && Na(t[1], i, a, !!n) && r;
  }
  const l = Fa(e, t, n);
  return Na(t, l, a, !!n) && r;
}, Ia = (e) => Ge(se(), pn(e)), nc = (e, n) => e instanceof Map ? Array.from(e.values()).filter((a) => Oe(se(a)) === n).map((a) => Fe(a)) : [], so = (e, n, a) => typeof e == "function" ? e({ month: n, year: a }) : !!e.months.find((t) => t.month === n && t.year === a), yr = (e, n) => typeof e == "function" ? e(n) : e.years.includes(n), uo = (e) => jt(e, "yyyy-MM-dd"), Rn = sn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), co = () => {
  const e = (a) => {
    Rn.menuFocused = a;
  }, n = (a) => {
    Rn.shiftKeyInMenu !== a && (Rn.shiftKeyInMenu = a);
  };
  return {
    control: E(() => ({ shiftKeyInMenu: Rn.shiftKeyInMenu, menuFocused: Rn.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
}, We = sn({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Ea = U(null), oa = U(!1), Va = U(!1), Ra = U(!1), La = U(!1), pt = U(0), et = U(0), un = () => {
  const e = E(() => oa.value ? [...We.selectionGrid, We.actionRow].filter((y) => y.length) : Va.value ? [
    ...We.timePicker[0],
    ...We.timePicker[1],
    La.value ? [] : [Ea.value],
    We.actionRow
  ].filter((y) => y.length) : Ra.value ? [...We.monthPicker, We.actionRow] : [We.monthYear, ...We.calendar, We.time, We.actionRow].filter((y) => y.length)), n = (y) => {
    pt.value = y ? pt.value + 1 : pt.value - 1;
    let C = null;
    e.value[et.value] && (C = e.value[et.value][pt.value]), !C && e.value[et.value + (y ? 1 : -1)] ? (et.value = et.value + (y ? 1 : -1), pt.value = y ? 0 : e.value[et.value].length - 1) : C || (pt.value = y ? pt.value - 1 : pt.value + 1);
  }, a = (y) => {
    et.value === 0 && !y || et.value === e.value.length && y || (et.value = y ? et.value + 1 : et.value - 1, e.value[et.value] ? e.value[et.value] && !e.value[et.value][pt.value] && pt.value !== 0 && (pt.value = e.value[et.value].length - 1) : et.value = y ? et.value - 1 : et.value + 1);
  }, t = (y) => {
    let C = null;
    e.value[et.value] && (C = e.value[et.value][pt.value]), C ? C.focus({ preventScroll: !oa.value }) : pt.value = y ? pt.value - 1 : pt.value + 1;
  }, r = () => {
    n(!0), t(!0);
  }, l = () => {
    n(!1), t(!1);
  }, o = () => {
    a(!1), t(!0);
  }, i = () => {
    a(!0), t(!0);
  }, u = (y, C) => {
    We[C] = y;
  }, s = (y, C) => {
    We[C] = y;
  }, c = () => {
    pt.value = 0, et.value = 0;
  };
  return {
    buildMatrix: u,
    buildMultiLevelMatrix: s,
    setTimePickerBackRef: (y) => {
      Ea.value = y;
    },
    setSelectionGrid: (y) => {
      oa.value = y, c(), y || (We.selectionGrid = []);
    },
    setTimePicker: (y, C = !1) => {
      Va.value = y, La.value = C, c(), y || (We.timePicker[0] = [], We.timePicker[1] = []);
    },
    setTimePickerElements: (y, C = 0) => {
      We.timePicker[C] = y;
    },
    arrowRight: r,
    arrowLeft: l,
    arrowUp: o,
    arrowDown: i,
    clearArrowNav: () => {
      We.monthYear = [], We.calendar = [], We.time = [], We.actionRow = [], We.selectionGrid = [], We.timePicker[0] = [], We.timePicker[1] = [], oa.value = !1, Va.value = !1, La.value = !1, Ra.value = !1, c(), Ea.value = null;
    },
    setMonthPicker: (y) => {
      Ra.value = y, c();
    },
    refSets: We
    // exposed for testing
  };
}, Qr = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), ac = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (n) => `Increment ${n}`,
  decrementValue: (n) => `Decrement ${n}`,
  openTpOverlay: (n) => `Open ${n} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), Zr = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, rc = (e) => {
  const n = typeof e == "object" && e, a = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...a, count: Zr(!1) };
  const t = n ? e : {}, r = n ? t.count ?? !0 : e, l = Zr(r);
  return Object.assign(a, t, { count: l });
}, lc = (e, n, a) => e || (typeof a == "string" ? a : n), oc = (e) => typeof e == "boolean" ? e ? Qr({}) : !1 : Qr(e), ic = (e) => {
  const n = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...n, ...e ?? {}, enabled: !0 } : { ...n, enabled: e };
}, sc = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), uc = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), dc = (e) => {
  const n = { input: !1 };
  return typeof e == "object" ? { ...n, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...n
  };
}, cc = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, arrowLeft: void 0, keepViewOnOffsetClick: !1, timeArrowHoldThreshold: 0, ...e ?? {} }), fc = (e) => {
  const n = {
    dates: Array.isArray(e) ? e.map((a) => se(a)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...n, ...e ?? {} };
}, vc = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, hc = (e, n) => typeof e == "object" ? { enabled: !0, ...{
  noDisabledRange: !1,
  showLastInRange: !0,
  minMaxRawRange: !1,
  partialRange: !0,
  disableTimeRangeValidation: !1,
  maxRange: void 0,
  minRange: void 0,
  autoRange: void 0,
  fixedStart: !1,
  fixedEnd: !1
}, ...e } : {
  enabled: e,
  noDisabledRange: n.noDisabledRange,
  showLastInRange: n.showLastInRange,
  minMaxRawRange: n.minMaxRawRange,
  partialRange: n.partialRange,
  disableTimeRangeValidation: n.disableTimeRangeValidation,
  maxRange: n.maxRange,
  minRange: n.minRange,
  autoRange: n.autoRange,
  fixedStart: n.fixedStart,
  fixedEnd: n.fixedEnd
}, mc = (e, n) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: n, convertModel: !0 } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: n ?? e.emitTimezone,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: n }, Ba = (e, n, a) => new Map(
  e.map((t) => {
    const r = hr(t, n, a);
    return [gr(r), r];
  })
), pc = (e, n) => e.length ? new Map(
  e.map((a) => {
    const t = hr(a.date, n);
    return [gr(t), a];
  })
) : null, gc = (e) => {
  var n;
  return {
    minDate: Ka(e.minDate, e.timezone, e.isSpecific),
    maxDate: Ka(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: Ma(e.disabledDates) ? Ba(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: Ma(e.allowedDates) ? Ba(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && Ma((n = e.highlight) == null ? void 0 : n.dates) ? Ba(e.highlight.dates, e.timezone) : e.highlight,
    markers: pc(e.markers, e.timezone)
  };
}, yc = (e, n) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: +n } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, $c = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((n) => {
      const a = n, t = e[a], r = typeof e[a] == "string" ? { [t]: !0 } : Object.fromEntries(t.map((l) => [l, !0]));
      return [n, r];
    })
  )
}), Qe = (e) => {
  const n = () => {
    const P = e.enableSeconds ? ":ss" : "", V = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${V}${P}` : `hh${V}${P} aa`;
  }, a = () => {
    var P;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? n() : e.weekPicker ? `${((P = x.value) == null ? void 0 : P.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy";
  }, t = (P) => lo(P, e.enableSeconds), r = () => A.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [t(e.startTime[0]), t(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? t(e.startTime) : null, l = E(() => rc(e.multiCalendars)), o = E(() => r()), i = E(() => ac(e.ariaLabels)), u = E(() => sc(e.filters)), s = E(() => oc(e.transitions)), c = E(() => uc(e.actionRow)), y = E(
    () => lc(e.previewFormat, e.format, a())
  ), C = E(() => ic(e.textInput)), _ = E(() => dc(e.inline)), k = E(() => cc(e.config)), h = E(() => fc(e.highlight)), x = E(() => vc(e.weekNumbers)), D = E(() => mc(e.timezone, e.emitTimezone)), g = E(() => yc(e.multiDates, e.multiDatesLimit)), p = E(
    () => gc({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: h.value,
      markers: e.markers,
      timezone: D.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), A = E(
    () => hc(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  ), G = E(() => $c(e.ui));
  return {
    defaultedTransitions: s,
    defaultedMultiCalendars: l,
    defaultedStartTime: o,
    defaultedAriaLabels: i,
    defaultedFilters: u,
    defaultedActionRow: c,
    defaultedPreviewFormat: y,
    defaultedTextInput: C,
    defaultedInline: _,
    defaultedConfig: k,
    defaultedHighlight: h,
    defaultedWeekNumbers: x,
    defaultedRange: A,
    propDates: p,
    defaultedTz: D,
    defaultedMultiDates: g,
    defaultedUI: G,
    getDefaultPattern: a,
    getDefaultStartTime: r
  };
}, bc = (e, n, a) => {
  const t = U(), { defaultedTextInput: r, defaultedRange: l, defaultedTz: o, defaultedMultiDates: i, getDefaultPattern: u } = Qe(n), s = U(""), c = jn(n, "format"), y = jn(n, "formatLocale");
  De(
    t,
    () => {
      typeof n.onInternalModelChange == "function" && e("internal-model-change", t.value, Y(!0));
    },
    { deep: !0 }
  ), De(l, (S, oe) => {
    S.enabled !== oe.enabled && (t.value = null);
  }), De(c, () => {
    O();
  });
  const C = (S) => o.value.timezone && o.value.convertModel ? Tt(S, o.value.timezone) : S, _ = (S) => {
    if (o.value.timezone && o.value.convertModel) {
      const oe = Ld(o.value.timezone);
      return Vs(S, oe);
    }
    return S;
  }, k = (S, oe, $e = !1) => io(
    S,
    n.format,
    n.formatLocale,
    r.value.rangeSeparator,
    n.modelAuto,
    oe ?? u(),
    $e
  ), h = (S) => S ? n.modelType ? R(S) : {
    hours: Xt(S),
    minutes: on(S),
    seconds: n.enableSeconds ? Tn(S) : 0
  } : null, x = (S) => n.modelType ? R(S) : { month: Fe(S), year: Oe(S) }, D = (S) => Array.isArray(S) ? i.value.enabled ? S.map((oe) => g(oe, Yt(se(), oe))) : la(
    () => [
      Yt(se(), S[0]),
      S[1] ? Yt(se(), S[1]) : bn(l.value.partialRange)
    ],
    l.value.enabled
  ) : Yt(se(), +S), g = (S, oe) => (typeof S == "string" || typeof S == "number") && n.modelType ? L(S) : oe, p = (S) => Array.isArray(S) ? [
    g(
      S[0],
      rn(null, +S[0].hours, +S[0].minutes, S[0].seconds)
    ),
    g(
      S[1],
      rn(null, +S[1].hours, +S[1].minutes, S[1].seconds)
    )
  ] : g(S, rn(null, S.hours, S.minutes, S.seconds)), A = (S) => {
    const oe = Ge(se(), { date: 1 });
    return Array.isArray(S) ? i.value.enabled ? S.map(($e) => g($e, Kt(oe, +$e.month, +$e.year))) : la(
      () => [
        g(S[0], Kt(oe, +S[0].month, +S[0].year)),
        g(
          S[1],
          S[1] ? Kt(oe, +S[1].month, +S[1].year) : bn(l.value.partialRange)
        )
      ],
      l.value.enabled
    ) : g(S, Kt(oe, +S.month, +S.year));
  }, G = (S) => {
    if (Array.isArray(S))
      return S.map((oe) => L(oe));
    throw new Error(pr.dateArr("multi-dates"));
  }, P = (S) => {
    if (Array.isArray(S) && l.value.enabled) {
      const oe = S[0], $e = S[1];
      return [
        se(Array.isArray(oe) ? oe[0] : null),
        se(Array.isArray($e) ? $e[0] : null)
      ];
    }
    return se(S[0]);
  }, V = (S) => n.modelAuto ? Array.isArray(S) ? [L(S[0]), L(S[1])] : n.autoApply ? [L(S)] : [L(S), null] : Array.isArray(S) ? la(
    () => S[1] ? [
      L(S[0]),
      S[1] ? L(S[1]) : bn(l.value.partialRange)
    ] : [L(S[0])],
    l.value.enabled
  ) : L(S), j = () => {
    Array.isArray(t.value) && l.value.enabled && t.value.length === 1 && t.value.push(bn(l.value.partialRange));
  }, W = () => {
    const S = t.value;
    return [
      R(S[0]),
      S[1] ? R(S[1]) : bn(l.value.partialRange)
    ];
  }, N = () => t.value[1] ? W() : R(dt(t.value[0])), z = () => (t.value || []).map((S) => R(S)), ae = (S = !1) => (S || j(), n.modelAuto ? N() : i.value.enabled ? z() : Array.isArray(t.value) ? la(() => W(), l.value.enabled) : R(dt(t.value))), ce = (S) => !S || Array.isArray(S) && !S.length ? null : n.timePicker ? p(dt(S)) : n.monthPicker ? A(dt(S)) : n.yearPicker ? D(dt(S)) : i.value.enabled ? G(dt(S)) : n.weekPicker ? P(dt(S)) : V(dt(S)), B = (S) => {
    const oe = ce(S);
    Xa(dt(oe)) ? (t.value = dt(oe), O()) : (t.value = null, s.value = "");
  }, b = () => {
    const S = (oe) => jt(oe, r.value.format);
    return `${S(t.value[0])} ${r.value.rangeSeparator} ${t.value[1] ? S(t.value[1]) : ""}`;
  }, I = () => a.value && t.value ? Array.isArray(t.value) ? b() : jt(t.value, r.value.format) : k(t.value), $ = () => t.value ? i.value.enabled ? t.value.map((S) => k(S)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? I() : k(t.value) : "", O = () => {
    !n.format || typeof n.format == "string" || r.value.enabled && typeof r.value.format == "string" ? s.value = $() : s.value = n.format(t.value);
  }, L = (S) => {
    if (n.utc) {
      const oe = new Date(S);
      return n.utc === "preserve" ? new Date(oe.getTime() + oe.getTimezoneOffset() * 6e4) : oe;
    }
    return n.modelType ? Bd.includes(n.modelType) ? C(new Date(S)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? C(
      Ua(S, u(), /* @__PURE__ */ new Date(), { locale: y.value })
    ) : C(
      Ua(S, n.modelType, /* @__PURE__ */ new Date(), { locale: y.value })
    ) : C(new Date(S));
  }, R = (S) => S ? n.utc ? Qd(S, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +_(S) : n.modelType === "iso" ? _(S).toISOString() : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? k(_(S)) : k(_(S), n.modelType, !0) : _(S) : "", K = (S, oe = !1, $e = !1) => {
    if ($e) return S;
    if (e("update:model-value", S), o.value.emitTimezone && oe) {
      const X = Array.isArray(S) ? S.map((ye) => Tt(dt(ye), o.value.emitTimezone)) : Tt(dt(S), o.value.emitTimezone);
      e("update:model-timezone-value", X);
    }
  }, v = (S) => Array.isArray(t.value) ? i.value.enabled ? t.value.map((oe) => S(oe)) : [
    S(t.value[0]),
    t.value[1] ? S(t.value[1]) : bn(l.value.partialRange)
  ] : S(dt(t.value)), F = () => {
    if (Array.isArray(t.value)) {
      const S = zt(t.value[0], n.weekStart), oe = t.value[1] ? zt(t.value[1], n.weekStart) : [];
      return [S.map(($e) => se($e)), oe.map(($e) => se($e))];
    }
    return zt(t.value, n.weekStart).map((S) => se(S));
  }, f = (S, oe) => K(dt(v(S)), !1, oe), H = (S) => {
    const oe = F();
    return S ? oe : e("update:model-value", F());
  }, Y = (S = !1) => (S || O(), n.monthPicker ? f(x, S) : n.timePicker ? f(h, S) : n.yearPicker ? f(Oe, S) : n.weekPicker ? H(S) : K(ae(S), !0, S));
  return {
    inputValue: s,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? l.value.enabled ? l.value.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: B,
    formatInputValue: O,
    emitModelValue: Y
  };
}, wc = (e, n) => {
  const { defaultedFilters: a, propDates: t } = Qe(e), { validateMonthYearInRange: r } = dn(e), l = (c, y) => {
    let C = c;
    return a.value.months.includes(Fe(C)) ? (C = y ? Et(c, 1) : Sn(c, 1), l(C, y)) : C;
  }, o = (c, y) => {
    let C = c;
    return a.value.years.includes(Oe(C)) ? (C = y ? ar(c, 1) : Xl(c, 1), o(C, y)) : C;
  }, i = (c, y = !1) => {
    const C = Ge(se(), { month: e.month, year: e.year });
    let _ = c ? Et(C, 1) : Sn(C, 1);
    e.disableYearSelect && (_ = Yt(_, e.year));
    let k = Fe(_), h = Oe(_);
    a.value.months.includes(k) && (_ = l(_, c), k = Fe(_), h = Oe(_)), a.value.years.includes(h) && (_ = o(_, c), h = Oe(_)), r(k, h, c, e.preventMinMaxNavigation) && u(k, h, y);
  }, u = (c, y, C) => {
    n("update-month-year", { month: c, year: y, fromNav: C });
  }, s = E(() => (c) => oo(
    Ge(se(), { month: e.month, year: e.year }),
    t.value.maxDate,
    t.value.minDate,
    e.preventMinMaxNavigation,
    c
  ));
  return { handleMonthYearChange: i, isDisabled: s, updateMonthYear: u };
}, ya = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, Lt = {
  ...ya,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 }
}, kc = ["title"], Cc = ["disabled"], xc = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...Lt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: n }) {
    const a = n, t = e, {
      defaultedActionRow: r,
      defaultedPreviewFormat: l,
      defaultedMultiCalendars: o,
      defaultedTextInput: i,
      defaultedInline: u,
      defaultedRange: s,
      defaultedMultiDates: c,
      getDefaultPattern: y
    } = Qe(t), { isTimeValid: C, isMonthValid: _ } = dn(t), { buildMatrix: k } = un(), h = U(null), x = U(null), D = U(!1), g = U({}), p = U(null), A = U(null);
    Ue(() => {
      t.arrowNavigation && k([it(h), it(x)], "actionRow"), G(), window.addEventListener("resize", G);
    }), An(() => {
      window.removeEventListener("resize", G);
    });
    const G = () => {
      D.value = !1, setTimeout(() => {
        var b, I;
        const $ = (b = p.value) == null ? void 0 : b.getBoundingClientRect(), O = (I = A.value) == null ? void 0 : I.getBoundingClientRect();
        $ && O && (g.value.maxWidth = `${O.width - $.width - 20}px`), D.value = !0;
      }, 0);
    }, P = E(() => s.value.enabled && !s.value.partialRange && t.internalModelValue ? t.internalModelValue.length === 2 : !0), V = E(
      () => !C.value(t.internalModelValue) || !_.value(t.internalModelValue) || !P.value
    ), j = () => {
      const b = l.value;
      return t.timePicker || t.monthPicker, b(dt(t.internalModelValue));
    }, W = () => {
      const b = t.internalModelValue;
      return o.value.count > 0 ? `${N(b[0])} - ${N(b[1])}` : [N(b[0]), N(b[1])];
    }, N = (b) => io(
      b,
      l.value,
      t.formatLocale,
      i.value.rangeSeparator,
      t.modelAuto,
      y()
    ), z = E(() => !t.internalModelValue || !t.menuMount ? "" : typeof l.value == "string" ? Array.isArray(t.internalModelValue) ? t.internalModelValue.length === 2 && t.internalModelValue[1] ? W() : c.value.enabled ? t.internalModelValue.map((b) => `${N(b)}`) : t.modelAuto ? `${N(t.internalModelValue[0])}` : `${N(t.internalModelValue[0])} -` : N(t.internalModelValue) : j()), ae = () => c.value.enabled ? "; " : " - ", ce = E(
      () => Array.isArray(z.value) ? z.value.join(ae()) : z.value
    ), B = () => {
      C.value(t.internalModelValue) && _.value(t.internalModelValue) && P.value ? a("select-date") : a("invalid-select");
    };
    return (b, I) => (d(), w("div", {
      ref_key: "actionRowRef",
      ref: A,
      class: "dp__action_row"
    }, [
      b.$slots["action-row"] ? ve(b.$slots, "action-row", ct(st({ key: 0 }, {
        internalModelValue: b.internalModelValue,
        disabled: V.value,
        selectDate: () => b.$emit("select-date"),
        closePicker: () => b.$emit("close-picker")
      }))) : (d(), w(ke, { key: 1 }, [
        m(r).showPreview ? (d(), w("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ce.value,
          style: Ie(g.value)
        }, [
          b.$slots["action-preview"] && D.value ? ve(b.$slots, "action-preview", {
            key: 0,
            value: b.internalModelValue
          }) : T("", !0),
          !b.$slots["action-preview"] && D.value ? (d(), w(ke, { key: 1 }, [
            xe(J(ce.value), 1)
          ], 64)) : T("", !0)
        ], 12, kc)) : T("", !0),
        q("div", {
          ref_key: "actionBtnContainer",
          ref: p,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          b.$slots["action-buttons"] ? ve(b.$slots, "action-buttons", {
            key: 0,
            value: b.internalModelValue
          }) : T("", !0),
          b.$slots["action-buttons"] ? T("", !0) : (d(), w(ke, { key: 1 }, [
            !m(u).enabled && m(r).showCancel ? (d(), w("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: h,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: I[0] || (I[0] = ($) => b.$emit("close-picker")),
              onKeydown: I[1] || (I[1] = ($) => m(_t)($, () => b.$emit("close-picker")))
            }, J(b.cancelText), 545)) : T("", !0),
            m(r).showNow ? (d(), w("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: I[2] || (I[2] = ($) => b.$emit("select-now")),
              onKeydown: I[3] || (I[3] = ($) => m(_t)($, () => b.$emit("select-now")))
            }, J(b.nowButtonLabel), 33)) : T("", !0),
            m(r).showSelect ? (d(), w("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: x,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: V.value,
              "data-test": "select-button",
              onKeydown: I[4] || (I[4] = ($) => m(_t)($, () => B())),
              onClick: B
            }, J(b.selectText), 41, Cc)) : T("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), _c = { class: "dp__selection_grid_header" }, Tc = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Dc = ["aria-label"], ea = /* @__PURE__ */ Ae({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: n, emit: a }) {
    const { setSelectionGrid: t, buildMultiLevelMatrix: r, setMonthPicker: l } = un(), o = a, i = e, { defaultedAriaLabels: u, defaultedTextInput: s, defaultedConfig: c } = Qe(
      i
    ), { hideNavigationButtons: y } = wa(), C = U(!1), _ = U(null), k = U(null), h = U([]), x = U(), D = U(null), g = U(0), p = U(null);
    Ao(() => {
      _.value = null;
    }), Ue(() => {
      je().then(() => z()), i.noOverlayFocus || G(), A(!0);
    }), An(() => A(!1));
    const A = (v) => {
      var F;
      i.arrowNavigation && ((F = i.headerRefs) != null && F.length ? l(v) : t(v));
    }, G = () => {
      var v;
      const F = it(k);
      F && (s.value.enabled || (_.value ? (v = _.value) == null || v.focus({ preventScroll: !0 }) : F.focus({ preventScroll: !0 })), C.value = F.clientHeight < F.scrollHeight);
    }, P = E(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !i.useRelative,
        "dp--overlay-relative": i.useRelative
      })
    ), V = E(
      () => i.useRelative ? { height: `${i.height}px`, width: "260px" } : void 0
    ), j = E(() => ({
      dp__overlay_col: !0
    })), W = E(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: C.value,
        dp__button_bottom: i.isLast
      })
    ), N = E(() => {
      var v, F;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((v = i.items) == null ? void 0 : v.length) <= 6,
        dp__container_block: ((F = i.items) == null ? void 0 : F.length) > 6
      };
    });
    De(
      () => i.items,
      () => z(!1),
      { deep: !0 }
    );
    const z = (v = !0) => {
      je().then(() => {
        const F = it(_), f = it(k), H = it(D), Y = it(p), S = H ? H.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? g.value = f.getBoundingClientRect().height - S : g.value = c.value.modeHeight - S), F && Y && v && (Y.scrollTop = F.offsetTop - Y.offsetTop - (g.value / 2 - F.getBoundingClientRect().height) - S);
      });
    }, ae = (v) => {
      v.disabled || o("selected", v.value);
    }, ce = () => {
      o("toggle"), o("reset-flow");
    }, B = () => {
      i.escClose && ce();
    }, b = (v, F, f, H) => {
      v && ((F.active || F.value === i.focusValue) && (_.value = v), i.arrowNavigation && (Array.isArray(h.value[f]) ? h.value[f][H] = v : h.value[f] = [v], I()));
    }, I = () => {
      var v, F;
      const f = (v = i.headerRefs) != null && v.length ? [i.headerRefs].concat(h.value) : h.value.concat([i.skipButtonRef ? [] : [D.value]]);
      r(dt(f), (F = i.headerRefs) != null && F.length ? "monthPicker" : "selectionGrid");
    }, $ = (v) => {
      i.arrowNavigation || an(v, c.value, !0);
    }, O = (v) => {
      x.value = v, o("hover-value", v);
    }, L = () => {
      if (ce(), !i.isLast) {
        const v = Ud(i.menuWrapRef ?? null, "action-row");
        if (v) {
          const F = eo(v);
          F == null || F.focus();
        }
      }
    }, R = (v) => {
      switch (v.key) {
        case Ke.esc:
          return B();
        case Ke.arrowLeft:
          return $(v);
        case Ke.arrowRight:
          return $(v);
        case Ke.arrowUp:
          return $(v);
        case Ke.arrowDown:
          return $(v);
        default:
          return;
      }
    }, K = (v) => {
      if (v.key === Ke.enter) return ce();
      if (v.key === Ke.tab) return L();
    };
    return n({ focusGrid: G }), (v, F) => {
      var f;
      return d(), w("div", {
        ref_key: "gridWrapRef",
        ref: k,
        class: le(P.value),
        style: Ie(V.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: R,
        onClick: F[0] || (F[0] = Me(() => {
        }, ["prevent"]))
      }, [
        q("div", {
          ref_key: "containerRef",
          ref: p,
          class: le(N.value),
          role: "grid",
          style: Ie({ "--dp-overlay-height": `${g.value}px` })
        }, [
          q("div", _c, [
            ve(v.$slots, "header")
          ]),
          v.$slots.overlay ? ve(v.$slots, "overlay", { key: 0 }) : (d(!0), w(ke, { key: 1 }, Pe(v.items, (H, Y) => (d(), w("div", {
            key: Y,
            class: le(["dp__overlay_row", { dp__flex_row: v.items.length >= 3 }]),
            role: "row"
          }, [
            (d(!0), w(ke, null, Pe(H, (S, oe) => (d(), w("div", {
              key: S.value,
              ref_for: !0,
              ref: ($e) => b($e, S, Y, oe),
              role: "gridcell",
              class: le(j.value),
              "aria-selected": S.active || void 0,
              "aria-disabled": S.disabled || void 0,
              tabindex: "0",
              "data-test": S.text,
              onClick: Me(($e) => ae(S), ["prevent"]),
              onKeydown: ($e) => m(_t)($e, () => ae(S), !0),
              onMouseover: ($e) => O(S.value)
            }, [
              q("div", {
                class: le(S.className)
              }, [
                v.$slots.item ? ve(v.$slots, "item", {
                  key: 0,
                  item: S
                }) : T("", !0),
                v.$slots.item ? T("", !0) : (d(), w(ke, { key: 1 }, [
                  xe(J(S.text), 1)
                ], 64))
              ], 2)
            ], 42, Tc))), 128))
          ], 2))), 128))
        ], 6),
        v.$slots["button-icon"] ? Pt((d(), w("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: D,
          type: "button",
          "aria-label": (f = m(u)) == null ? void 0 : f.toggleOverlay,
          class: le(W.value),
          tabindex: "0",
          onClick: ce,
          onKeydown: K
        }, [
          ve(v.$slots, "button-icon")
        ], 42, Dc)), [
          [Ut, !m(y)(v.hideNavigation, v.type)]
        ]) : T("", !0)
      ], 38);
    };
  }
}), $a = /* @__PURE__ */ Ae({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const n = e, a = E(
      () => n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
    ), t = E(() => ({
      dp__instance_calendar: n.multiCalendars > 0
    }));
    return (r, l) => (d(), w("div", {
      class: le({
        dp__menu_inner: !r.stretch,
        "dp--menu--inner-stretched": r.stretch,
        dp__flex_display: r.multiCalendars > 0,
        "dp--flex-display-collapsed": r.collapse
      })
    }, [
      (d(!0), w(ke, null, Pe(a.value, (o, i) => (d(), w("div", {
        key: o,
        class: le(t.value)
      }, [
        ve(r.$slots, "default", {
          instance: o,
          index: i
        })
      ], 2))), 128))
    ], 2));
  }
}), Sc = ["aria-label", "aria-disabled"], Yn = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = n, t = U(null);
    return Ue(() => a("set-ref", t)), (r, l) => (d(), w("button", {
      ref_key: "elRef",
      ref: t,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": r.ariaLabel,
      "aria-disabled": r.disabled || void 0,
      onClick: l[0] || (l[0] = (o) => r.$emit("activate")),
      onKeydown: l[1] || (l[1] = (o) => m(_t)(o, () => r.$emit("activate"), !0))
    }, [
      q("span", {
        class: le(["dp__inner_nav", { dp__inner_nav_disabled: r.disabled }])
      }, [
        ve(r.$slots, "default")
      ], 2)
    ], 40, Sc));
  }
}), Oc = { class: "dp--year-mode-picker" }, Pc = ["aria-label", "data-test"], fo = /* @__PURE__ */ Ae({
  __name: "YearModePicker",
  props: {
    ...Lt,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: n }) {
    const a = n, t = e, { showRightIcon: r, showLeftIcon: l } = wa(), { defaultedConfig: o, defaultedMultiCalendars: i, defaultedAriaLabels: u, defaultedTransitions: s, defaultedUI: c } = Qe(t), { showTransition: y, transitionName: C } = ta(s), _ = (x = !1, D) => {
      a("toggle-year-picker", { flow: x, show: D });
    }, k = (x) => {
      a("year-select", x);
    }, h = (x = !1) => {
      a("handle-year", x);
    };
    return (x, D) => {
      var g, p, A, G, P;
      return d(), w("div", Oc, [
        m(l)(m(i), e.instance) ? (d(), de(Yn, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (g = m(u)) == null ? void 0 : g.prevYear,
          disabled: e.isDisabled(!1),
          class: le((p = m(c)) == null ? void 0 : p.navBtnPrev),
          onActivate: D[0] || (D[0] = (V) => h(!1))
        }, {
          default: ie(() => [
            x.$slots["arrow-left"] ? ve(x.$slots, "arrow-left", { key: 0 }) : T("", !0),
            x.$slots["arrow-left"] ? T("", !0) : (d(), de(m(ur), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : T("", !0),
        q("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (A = m(u)) == null ? void 0 : A.openYearsOverlay,
          "data-test": `year-mode-btn-${e.instance}`,
          onClick: D[1] || (D[1] = () => _(!1)),
          onKeydown: D[2] || (D[2] = ft(() => _(!1), ["enter"]))
        }, [
          x.$slots.year ? ve(x.$slots, "year", {
            key: 0,
            year: e.year
          }) : T("", !0),
          x.$slots.year ? T("", !0) : (d(), w(ke, { key: 1 }, [
            xe(J(e.year), 1)
          ], 64))
        ], 40, Pc),
        m(r)(m(i), e.instance) ? (d(), de(Yn, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (G = m(u)) == null ? void 0 : G.nextYear,
          disabled: e.isDisabled(!0),
          class: le((P = m(c)) == null ? void 0 : P.navBtnNext),
          onActivate: D[3] || (D[3] = (V) => h(!0))
        }, {
          default: ie(() => [
            x.$slots["arrow-right"] ? ve(x.$slots, "arrow-right", { key: 0 }) : T("", !0),
            x.$slots["arrow-right"] ? T("", !0) : (d(), de(m(dr), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : T("", !0),
        Ce(ln, {
          name: m(C)(e.showYearPicker),
          css: m(y)
        }, {
          default: ie(() => [
            e.showYearPicker ? (d(), de(ea, {
              key: 0,
              items: e.items,
              "text-input": x.textInput,
              "esc-close": x.escClose,
              config: x.config,
              "is-last": x.autoApply && !m(o).keepActionRow,
              "hide-navigation": x.hideNavigation,
              "aria-labels": x.ariaLabels,
              type: "year",
              onToggle: _,
              onSelected: D[4] || (D[4] = (V) => k(V))
            }, vt({
              "button-icon": ie(() => [
                x.$slots["calendar-icon"] ? ve(x.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                x.$slots["calendar-icon"] ? T("", !0) : (d(), de(m(Nn), { key: 1 }))
              ]),
              _: 2
            }, [
              x.$slots["year-overlay-value"] ? {
                name: "item",
                fn: ie(({ item: V }) => [
                  ve(x.$slots, "year-overlay-value", {
                    text: V.text,
                    value: V.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : T("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), $r = (e, n, a) => {
  if (n.value && Array.isArray(n.value))
    if (n.value.some((t) => Ee(e, t))) {
      const t = n.value.filter((r) => !Ee(r, e));
      n.value = t.length ? t : null;
    } else (a && +a > n.value.length || !a) && n.value.push(e);
  else
    n.value = [e];
}, br = (e, n, a) => {
  let t = e.value ? e.value.slice() : [];
  return t.length === 2 && t[1] !== null && (t = []), t.length ? Ze(n, t[0]) ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1])) : (t[1] = n, a("range-end", n)) : (t = [n], a("range-start", n)), t;
}, ba = (e, n, a, t) => {
  e && (e[0] && e[1] && a && n("auto-apply"), e[0] && !e[1] && t && a && n("auto-apply"));
}, vo = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((n) => Tt(se(n), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Tt(se(e.value), e.timezone));
}, ho = (e, n, a, t) => Array.isArray(n.value) && (n.value.length === 2 || n.value.length === 1 && t.value.partialRange) ? t.value.fixedStart && (tt(e, n.value[0]) || Ee(e, n.value[0])) ? [n.value[0], e] : t.value.fixedEnd && (Ze(e, n.value[1]) || Ee(e, n.value[1])) ? [e, n.value[1]] : (a("invalid-fixed-range", e), n.value) : [], mo = ({
  multiCalendars: e,
  range: n,
  highlight: a,
  propDates: t,
  calendars: r,
  modelValue: l,
  props: o,
  filters: i,
  year: u,
  month: s,
  emit: c
}) => {
  const y = E(() => mr(o.yearRange, o.locale, o.reverseYears)), C = U([!1]), _ = E(() => (N, z) => {
    const ae = Ge(It(/* @__PURE__ */ new Date()), {
      month: s.value(N),
      year: u.value(N)
    }), ce = z ? Vl(ae) : qn(ae);
    return oo(
      ce,
      t.value.maxDate,
      t.value.minDate,
      o.preventMinMaxNavigation,
      z
    );
  }), k = () => Array.isArray(l.value) && e.value.solo && l.value[1], h = () => {
    for (let N = 0; N < e.value.count; N++)
      if (N === 0)
        r.value[N] = r.value[0];
      else if (N === e.value.count - 1 && k())
        r.value[N] = {
          month: Fe(l.value[1]),
          year: Oe(l.value[1])
        };
      else {
        const z = Ge(se(), r.value[N - 1]);
        r.value[N] = { month: Fe(z), year: Oe(ar(z, 1)) };
      }
  }, x = (N) => {
    if (!N) return h();
    const z = Ge(se(), r.value[N]);
    return r.value[0].year = Oe(Xl(z, e.value.count - 1)), h();
  }, D = (N, z) => {
    const ae = Ys(z, N);
    return n.value.showLastInRange && ae > 1 ? z : N;
  }, g = (N) => o.focusStartDate || e.value.solo ? N[0] : N[1] ? D(N[0], N[1]) : N[0], p = () => {
    if (l.value) {
      const N = Array.isArray(l.value) ? g(l.value) : l.value;
      r.value[0] = { month: Fe(N), year: Oe(N) };
    }
  }, A = () => {
    p(), e.value.count && h();
  };
  De(l, (N, z) => {
    o.isTextInputDate && JSON.stringify(N ?? {}) !== JSON.stringify(z ?? {}) && A();
  }), Ue(() => {
    A();
  });
  const G = (N, z) => {
    r.value[z].year = N, c("update-month-year", { instance: z, year: N, month: r.value[z].month }), e.value.count && !e.value.solo && x(z);
  }, P = E(() => (N) => On(y.value, (z) => {
    var ae;
    const ce = u.value(N) === z.value, B = zn(
      z.value,
      Pn(t.value.minDate),
      Pn(t.value.maxDate)
    ) || ((ae = i.value.years) == null ? void 0 : ae.includes(u.value(N))), b = yr(a.value, z.value);
    return { active: ce, disabled: B, highlighted: b };
  })), V = (N, z) => {
    G(N, z), W(z);
  }, j = (N, z = !1) => {
    if (!_.value(N, z)) {
      const ae = z ? u.value(N) + 1 : u.value(N) - 1;
      G(ae, N);
    }
  }, W = (N, z = !1, ae) => {
    z || c("reset-flow"), ae !== void 0 ? C.value[N] = ae : C.value[N] = !C.value[N], C.value[N] ? c("overlay-toggle", { open: !0, overlay: gt.year }) : (c("overlay-closed"), c("overlay-toggle", { open: !1, overlay: gt.year }));
  };
  return {
    isDisabled: _,
    groupedYears: P,
    showYearPicker: C,
    selectYear: G,
    toggleYearPicker: W,
    handleYearSelect: V,
    handleYear: j
  };
}, Mc = (e, n) => {
  const {
    defaultedMultiCalendars: a,
    defaultedAriaLabels: t,
    defaultedTransitions: r,
    defaultedConfig: l,
    defaultedRange: o,
    defaultedHighlight: i,
    propDates: u,
    defaultedTz: s,
    defaultedFilters: c,
    defaultedMultiDates: y
  } = Qe(e), C = () => {
    e.isTextInputDate && A(Oe(se(e.startDate)), 0);
  }, { modelValue: _, year: k, month: h, calendars: x } = na(e, n, C), D = E(() => Zl(e.formatLocale, e.locale, e.monthNameFormat)), g = U(null), { checkMinMaxRange: p } = dn(e), {
    selectYear: A,
    groupedYears: G,
    showYearPicker: P,
    toggleYearPicker: V,
    handleYearSelect: j,
    handleYear: W,
    isDisabled: N
  } = mo({
    modelValue: _,
    multiCalendars: a,
    range: o,
    highlight: i,
    calendars: x,
    year: k,
    propDates: u,
    month: h,
    filters: c,
    props: e,
    emit: n
  });
  Ue(() => {
    e.startDate && (_.value && e.focusStartDate || !_.value) && A(Oe(se(e.startDate)), 0);
  });
  const z = (f) => f ? { month: Fe(f), year: Oe(f) } : { month: null, year: null }, ae = () => _.value ? Array.isArray(_.value) ? _.value.map((f) => z(f)) : z(_.value) : z(), ce = (f, H) => {
    const Y = x.value[f], S = ae();
    return Array.isArray(S) ? S.some((oe) => oe.year === (Y == null ? void 0 : Y.year) && oe.month === H) : (Y == null ? void 0 : Y.year) === S.year && H === S.month;
  }, B = (f, H, Y) => {
    var S, oe;
    const $e = ae();
    return Array.isArray($e) ? k.value(H) === ((S = $e[Y]) == null ? void 0 : S.year) && f === ((oe = $e[Y]) == null ? void 0 : oe.month) : !1;
  }, b = (f, H) => {
    if (o.value.enabled) {
      const Y = ae();
      if (Array.isArray(_.value) && Array.isArray(Y)) {
        const S = B(f, H, 0) || B(f, H, 1), oe = Kt(It(se()), f, k.value(H));
        return ga(_.value, g.value, oe) && !S;
      }
      return !1;
    }
    return !1;
  }, I = E(() => (f) => On(D.value, (H) => {
    var Y;
    const S = ce(f, H.value), oe = zn(
      H.value,
      no(k.value(f), u.value.minDate),
      ao(k.value(f), u.value.maxDate)
    ) || nc(u.value.disabledDates, k.value(f)).includes(H.value) || ((Y = c.value.months) == null ? void 0 : Y.includes(H.value)), $e = b(H.value, f), X = so(i.value, H.value, k.value(f));
    return { active: S, disabled: oe, isBetween: $e, highlighted: X };
  })), $ = (f, H) => Kt(It(se()), f, k.value(H)), O = (f, H) => {
    const Y = _.value ? _.value : It(/* @__PURE__ */ new Date());
    _.value = Kt(Y, f, k.value(H)), n("auto-apply"), n("update-flow-step");
  }, L = (f, H) => {
    const Y = $(f, H);
    o.value.fixedEnd || o.value.fixedStart ? _.value = ho(Y, _, n, o) : _.value ? p(Y, _.value) && (_.value = br(_, $(f, H), n)) : _.value = [$(f, H)], je().then(() => {
      ba(_.value, n, e.autoApply, e.modelAuto);
    });
  }, R = (f, H) => {
    $r($(f, H), _, y.value.limit), n("auto-apply", !0);
  }, K = (f, H) => (x.value[H].month = f, F(H, x.value[H].year, f), y.value.enabled ? R(f, H) : o.value.enabled ? L(f, H) : O(f, H)), v = (f, H) => {
    A(f, H), F(H, f, null);
  }, F = (f, H, Y) => {
    let S = Y;
    if (!S && S !== 0) {
      const oe = ae();
      S = Array.isArray(oe) ? oe[f].month : oe.month;
    }
    n("update-month-year", { instance: f, year: H, month: S });
  };
  return {
    groupedMonths: I,
    groupedYears: G,
    year: k,
    isDisabled: N,
    defaultedMultiCalendars: a,
    defaultedAriaLabels: t,
    defaultedTransitions: r,
    defaultedConfig: l,
    showYearPicker: P,
    modelValue: _,
    presetDate: (f, H) => {
      vo({
        value: f,
        modelValue: _,
        range: o.value.enabled,
        timezone: H ? void 0 : s.value.timezone
      }), n("auto-apply");
    },
    setHoverDate: (f, H) => {
      g.value = $(f, H);
    },
    selectMonth: K,
    selectYear: v,
    toggleYearPicker: V,
    handleYearSelect: j,
    handleYear: W,
    getModelMonthYear: ae
  };
}, Ac = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...Lt
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = gn(), l = St(r, "yearMode"), o = e;
    Ue(() => {
      o.shadow || t("mount", null);
    });
    const {
      groupedMonths: i,
      groupedYears: u,
      year: s,
      isDisabled: c,
      defaultedMultiCalendars: y,
      defaultedConfig: C,
      showYearPicker: _,
      modelValue: k,
      presetDate: h,
      setHoverDate: x,
      selectMonth: D,
      selectYear: g,
      toggleYearPicker: p,
      handleYearSelect: A,
      handleYear: G,
      getModelMonthYear: P
    } = Mc(o, t);
    return n({ getSidebarProps: () => ({
      modelValue: k,
      year: s,
      getModelMonthYear: P,
      selectMonth: D,
      selectYear: g,
      handleYear: G
    }), presetDate: h, toggleYearPicker: (V) => p(0, V) }), (V, j) => (d(), de($a, {
      "multi-calendars": m(y).count,
      collapse: V.collapse,
      stretch: ""
    }, {
      default: ie(({ instance: W }) => [
        V.$slots["top-extra"] ? ve(V.$slots, "top-extra", {
          key: 0,
          value: V.internalModelValue
        }) : T("", !0),
        V.$slots["month-year"] ? ve(V.$slots, "month-year", ct(st({ key: 1 }, {
          year: m(s),
          months: m(i)(W),
          years: m(u)(W),
          selectMonth: m(D),
          selectYear: m(g),
          instance: W
        }))) : (d(), de(ea, {
          key: 2,
          items: m(i)(W),
          "arrow-navigation": V.arrowNavigation,
          "is-last": V.autoApply && !m(C).keepActionRow,
          "esc-close": V.escClose,
          height: m(C).modeHeight,
          config: V.config,
          "no-overlay-focus": !!(V.noOverlayFocus || V.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (N) => m(D)(N, W),
          onHoverValue: (N) => m(x)(N, W)
        }, vt({
          header: ie(() => [
            Ce(fo, st(V.$props, {
              items: m(u)(W),
              instance: W,
              "show-year-picker": m(_)[W],
              year: m(s)(W),
              "is-disabled": (N) => m(c)(W, N),
              onHandleYear: (N) => m(G)(W, N),
              onYearSelect: (N) => m(A)(N, W),
              onToggleYearPicker: (N) => m(p)(W, N == null ? void 0 : N.flow, N == null ? void 0 : N.show)
            }), vt({ _: 2 }, [
              Pe(m(l), (N, z) => ({
                name: N,
                fn: ie((ae) => [
                  ve(V.$slots, N, ct(xt(ae)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          V.$slots["month-overlay-value"] ? {
            name: "item",
            fn: ie(({ item: N }) => [
              ve(V.$slots, "month-overlay-value", {
                text: N.text,
                value: N.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Nc = (e, n) => {
  const a = () => {
    e.isTextInputDate && (c.value = Oe(se(e.startDate)));
  }, { modelValue: t } = na(e, n, a), r = U(null), { defaultedHighlight: l, defaultedMultiDates: o, defaultedFilters: i, defaultedRange: u, propDates: s } = Qe(e), c = U();
  Ue(() => {
    e.startDate && (t.value && e.focusStartDate || !t.value) && (c.value = Oe(se(e.startDate)));
  });
  const y = (h) => Array.isArray(t.value) ? t.value.some((x) => Oe(x) === h) : t.value ? Oe(t.value) === h : !1, C = (h) => u.value.enabled && Array.isArray(t.value) ? ga(t.value, r.value, k(h)) : !1, _ = E(() => On(mr(e.yearRange, e.locale, e.reverseYears), (h) => {
    const x = y(h.value), D = zn(
      h.value,
      Pn(s.value.minDate),
      Pn(s.value.maxDate)
    ) || i.value.years.includes(h.value), g = C(h.value) && !x, p = yr(l.value, h.value);
    return { active: x, disabled: D, isBetween: g, highlighted: p };
  })), k = (h) => Yt(It(qn(/* @__PURE__ */ new Date())), h);
  return {
    groupedYears: _,
    modelValue: t,
    focusYear: c,
    setHoverValue: (h) => {
      r.value = Yt(It(/* @__PURE__ */ new Date()), h);
    },
    selectYear: (h) => {
      var x;
      if (n("update-month-year", { instance: 0, year: h }), o.value.enabled)
        return t.value ? Array.isArray(t.value) && (((x = t.value) == null ? void 0 : x.map((D) => Oe(D))).includes(h) ? t.value = t.value.filter((D) => Oe(D) !== h) : t.value.push(Yt(Ct(se()), h))) : t.value = [Yt(Ct(qn(se())), h)], n("auto-apply", !0);
      u.value.enabled ? (t.value = br(t, k(h), n), je().then(() => {
        ba(t.value, n, e.autoApply, e.modelAuto);
      })) : (t.value = k(h), n("auto-apply"));
    }
  };
}, Fc = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...Lt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, { groupedYears: l, modelValue: o, focusYear: i, selectYear: u, setHoverValue: s } = Nc(r, t), { defaultedConfig: c } = Qe(r);
    return n({ getSidebarProps: () => ({
      modelValue: o,
      selectYear: u
    }) }), (y, C) => (d(), w("div", null, [
      y.$slots["top-extra"] ? ve(y.$slots, "top-extra", {
        key: 0,
        value: y.internalModelValue
      }) : T("", !0),
      y.$slots["month-year"] ? ve(y.$slots, "month-year", ct(st({ key: 1 }, {
        years: m(l),
        selectYear: m(u)
      }))) : (d(), de(ea, {
        key: 2,
        items: m(l),
        "is-last": y.autoApply && !m(c).keepActionRow,
        height: m(c).modeHeight,
        config: y.config,
        "no-overlay-focus": !!(y.noOverlayFocus || y.textInput),
        "focus-value": m(i),
        type: "year",
        "use-relative": "",
        onSelected: m(u),
        onHoverValue: m(s)
      }, vt({ _: 2 }, [
        y.$slots["year-overlay-value"] ? {
          name: "item",
          fn: ie(({ item: _ }) => [
            ve(y.$slots, "year-overlay-value", {
              text: _.text,
              value: _.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), Ic = {
  key: 0,
  class: "dp__time_input"
}, Ec = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], Vc = /* @__PURE__ */ q("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Rc = /* @__PURE__ */ q("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Lc = ["aria-label", "disabled", "data-test", "onKeydown", "onClick"], Bc = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], Hc = /* @__PURE__ */ q("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Yc = /* @__PURE__ */ q("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), jc = { key: 0 }, qc = ["aria-label"], Gc = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...Lt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, { setTimePickerElements: l, setTimePickerBackRef: o } = un(), { defaultedAriaLabels: i, defaultedTransitions: u, defaultedFilters: s, defaultedConfig: c, defaultedRange: y } = Qe(r), { transitionName: C, showTransition: _ } = ta(u), k = sn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), h = U("AM"), x = U(null), D = U([]), g = U();
    Ue(() => {
      t("mounted");
    });
    const p = (M) => Ge(/* @__PURE__ */ new Date(), {
      hours: M.hours,
      minutes: M.minutes,
      seconds: r.enableSeconds ? M.seconds : 0,
      milliseconds: 0
    }), A = E(
      () => (M) => I(M, r[M]) || P(M, r[M])
    ), G = E(() => ({ hours: r.hours, minutes: r.minutes, seconds: r.seconds })), P = (M, ne) => y.value.enabled && !y.value.disableTimeRangeValidation ? !r.validateTime(M, ne) : !1, V = (M, ne) => {
      if (y.value.enabled && !y.value.disableTimeRangeValidation) {
        const fe = ne ? +r[`${M}Increment`] : -+r[`${M}Increment`], ue = r[M] + fe;
        return !r.validateTime(M, ue);
      }
      return !1;
    }, j = E(() => (M) => !K(+r[M] + +r[`${M}Increment`], M) || V(M, !0)), W = E(() => (M) => !K(+r[M] - +r[`${M}Increment`], M) || V(M, !1)), N = (M, ne) => Pl(Ge(se(), M), ne), z = (M, ne) => Vd(Ge(se(), M), ne), ae = E(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !r.timePickerInline,
        dp__time_col_reg_block: !r.enableSeconds && r.is24 && !r.timePickerInline,
        dp__time_col_reg_inline: !r.enableSeconds && r.is24 && r.timePickerInline,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), ce = E(() => {
      const M = [{ type: "hours" }];
      return r.enableMinutes && M.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), r.enableSeconds && M.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), M;
    }), B = E(() => ce.value.filter((M) => !M.separator)), b = E(() => (M) => {
      if (M === "hours") {
        const ne = S(+r.hours);
        return { text: ne < 10 ? `0${ne}` : `${ne}`, value: ne };
      }
      return { text: r[M] < 10 ? `0${r[M]}` : `${r[M]}`, value: r[M] };
    }), I = (M, ne) => {
      var fe;
      if (!r.disabledTimesConfig) return !1;
      const ue = r.disabledTimesConfig(r.order, M === "hours" ? ne : void 0);
      return ue[M] ? !!((fe = ue[M]) != null && fe.includes(ne)) : !0;
    }, $ = (M, ne) => ne !== "hours" || h.value === "AM" ? M : M + 12, O = (M) => {
      const ne = r.is24 ? 24 : 12, fe = M === "hours" ? ne : 60, ue = +r[`${M}GridIncrement`], re = M === "hours" && !r.is24 ? ue : 0, Ne = [];
      for (let Z = re; Z < fe; Z += ue)
        Ne.push({ value: r.is24 ? Z : $(Z, M), text: Z < 10 ? `0${Z}` : `${Z}` });
      return M === "hours" && !r.is24 && Ne.unshift({ value: h.value === "PM" ? 12 : 0, text: "12" }), On(Ne, (Z) => ({ active: !1, disabled: s.value.times[M].includes(Z.value) || !K(Z.value, M) || I(M, Z.value) || P(M, Z.value) }));
    }, L = (M) => M >= 0 ? M : 59, R = (M) => M >= 0 ? M : 23, K = (M, ne) => {
      const fe = r.minTime ? p(Aa(r.minTime)) : null, ue = r.maxTime ? p(Aa(r.maxTime)) : null, re = p(
        Aa(
          G.value,
          ne,
          ne === "minutes" || ne === "seconds" ? L(M) : R(M)
        )
      );
      return fe && ue ? (Gn(re, ue) || Cn(re, ue)) && (Dn(re, fe) || Cn(re, fe)) : fe ? Dn(re, fe) || Cn(re, fe) : ue ? Gn(re, ue) || Cn(re, ue) : !0;
    }, v = (M) => r[`no${M[0].toUpperCase() + M.slice(1)}Overlay`], F = (M) => {
      v(M) || (k[M] = !k[M], k[M] ? t("overlay-opened", M) : t("overlay-closed", M));
    }, f = (M) => M === "hours" ? Xt : M === "minutes" ? on : Tn, H = () => {
      g.value && clearTimeout(g.value);
    }, Y = (M, ne = !0, fe) => {
      const ue = ne ? N : z, re = ne ? +r[`${M}Increment`] : -+r[`${M}Increment`];
      K(+r[M] + re, M) && t(
        `update:${M}`,
        f(M)(ue({ [M]: +r[M] }, { [M]: +r[`${M}Increment`] }))
      ), !(fe != null && fe.keyboard) && c.value.timeArrowHoldThreshold && (g.value = setTimeout(() => {
        Y(M, ne);
      }, c.value.timeArrowHoldThreshold));
    }, S = (M) => r.is24 ? M : (M >= 12 ? h.value = "PM" : h.value = "AM", jd(M)), oe = () => {
      h.value === "PM" ? (h.value = "AM", t("update:hours", r.hours - 12)) : (h.value = "PM", t("update:hours", r.hours + 12)), t("am-pm-change", h.value);
    }, $e = (M) => {
      k[M] = !0;
    }, X = (M, ne, fe) => {
      if (M && r.arrowNavigation) {
        Array.isArray(D.value[ne]) ? D.value[ne][fe] = M : D.value[ne] = [M];
        const ue = D.value.reduce(
          (re, Ne) => Ne.map((Z, he) => [...re[he] || [], Ne[he]]),
          []
        );
        o(r.closeTimePickerBtn), x.value && (ue[1] = ue[1].concat(x.value)), l(ue, r.order);
      }
    }, ye = (M, ne) => (F(M), t(`update:${M}`, ne));
    return n({ openChildCmp: $e }), (M, ne) => {
      var fe;
      return M.disabled ? T("", !0) : (d(), w("div", Ic, [
        (d(!0), w(ke, null, Pe(ce.value, (ue, re) => {
          var Ne, Z, he;
          return d(), w("div", {
            key: re,
            class: le(ae.value)
          }, [
            ue.separator ? (d(), w(ke, { key: 0 }, [
              xe(" : ")
            ], 64)) : (d(), w(ke, { key: 1 }, [
              q("button", {
                ref_for: !0,
                ref: (Se) => X(Se, re, 0),
                type: "button",
                class: le({
                  dp__btn: !0,
                  dp__inc_dec_button: !M.timePickerInline,
                  dp__inc_dec_button_inline: M.timePickerInline,
                  dp__tp_inline_btn_top: M.timePickerInline,
                  dp__inc_dec_button_disabled: j.value(ue.type)
                }),
                "data-test": `${ue.type}-time-inc-btn-${r.order}`,
                "aria-label": (Ne = m(i)) == null ? void 0 : Ne.incrementValue(ue.type),
                tabindex: "0",
                onKeydown: (Se) => m(_t)(Se, () => Y(ue.type, !0, { keyboard: !0 }), !0),
                onClick: (Se) => m(c).timeArrowHoldThreshold ? void 0 : Y(ue.type, !0),
                onMousedown: (Se) => m(c).timeArrowHoldThreshold ? Y(ue.type, !0) : void 0,
                onMouseup: H
              }, [
                r.timePickerInline ? (d(), w(ke, { key: 1 }, [
                  M.$slots["tp-inline-arrow-up"] ? ve(M.$slots, "tp-inline-arrow-up", { key: 0 }) : (d(), w(ke, { key: 1 }, [
                    Vc,
                    Rc
                  ], 64))
                ], 64)) : (d(), w(ke, { key: 0 }, [
                  M.$slots["arrow-up"] ? ve(M.$slots, "arrow-up", { key: 0 }) : T("", !0),
                  M.$slots["arrow-up"] ? T("", !0) : (d(), de(m(fr), { key: 1 }))
                ], 64))
              ], 42, Ec),
              q("button", {
                ref_for: !0,
                ref: (Se) => X(Se, re, 1),
                type: "button",
                "aria-label": (Z = m(i)) == null ? void 0 : Z.openTpOverlay(ue.type),
                class: le({
                  dp__time_display: !0,
                  dp__time_display_block: !M.timePickerInline,
                  dp__time_display_inline: M.timePickerInline,
                  "dp--time-invalid": A.value(ue.type),
                  "dp--time-overlay-btn": !A.value(ue.type)
                }),
                disabled: v(ue.type),
                tabindex: "0",
                "data-test": `${ue.type}-toggle-overlay-btn-${r.order}`,
                onKeydown: (Se) => m(_t)(Se, () => F(ue.type), !0),
                onClick: (Se) => F(ue.type)
              }, [
                M.$slots[ue.type] ? ve(M.$slots, ue.type, {
                  key: 0,
                  text: b.value(ue.type).text,
                  value: b.value(ue.type).value
                }) : T("", !0),
                M.$slots[ue.type] ? T("", !0) : (d(), w(ke, { key: 1 }, [
                  xe(J(b.value(ue.type).text), 1)
                ], 64))
              ], 42, Lc),
              q("button", {
                ref_for: !0,
                ref: (Se) => X(Se, re, 2),
                type: "button",
                class: le({
                  dp__btn: !0,
                  dp__inc_dec_button: !M.timePickerInline,
                  dp__inc_dec_button_inline: M.timePickerInline,
                  dp__tp_inline_btn_bottom: M.timePickerInline,
                  dp__inc_dec_button_disabled: W.value(ue.type)
                }),
                "data-test": `${ue.type}-time-dec-btn-${r.order}`,
                "aria-label": (he = m(i)) == null ? void 0 : he.decrementValue(ue.type),
                tabindex: "0",
                onKeydown: (Se) => m(_t)(Se, () => Y(ue.type, !1, { keyboard: !0 }), !0),
                onClick: (Se) => m(c).timeArrowHoldThreshold ? void 0 : Y(ue.type, !1),
                onMousedown: (Se) => m(c).timeArrowHoldThreshold ? Y(ue.type, !1) : void 0,
                onMouseup: H
              }, [
                r.timePickerInline ? (d(), w(ke, { key: 1 }, [
                  M.$slots["tp-inline-arrow-down"] ? ve(M.$slots, "tp-inline-arrow-down", { key: 0 }) : (d(), w(ke, { key: 1 }, [
                    Hc,
                    Yc
                  ], 64))
                ], 64)) : (d(), w(ke, { key: 0 }, [
                  M.$slots["arrow-down"] ? ve(M.$slots, "arrow-down", { key: 0 }) : T("", !0),
                  M.$slots["arrow-down"] ? T("", !0) : (d(), de(m(vr), { key: 1 }))
                ], 64))
              ], 42, Bc)
            ], 64))
          ], 2);
        }), 128)),
        M.is24 ? T("", !0) : (d(), w("div", jc, [
          M.$slots["am-pm-button"] ? ve(M.$slots, "am-pm-button", {
            key: 0,
            toggle: oe,
            value: h.value
          }) : T("", !0),
          M.$slots["am-pm-button"] ? T("", !0) : (d(), w("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: x,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (fe = m(i)) == null ? void 0 : fe.amPmButton,
            tabindex: "0",
            onClick: oe,
            onKeydown: ne[0] || (ne[0] = (ue) => m(_t)(ue, () => oe(), !0))
          }, J(h.value), 41, qc))
        ])),
        (d(!0), w(ke, null, Pe(B.value, (ue, re) => (d(), de(ln, {
          key: re,
          name: m(C)(k[ue.type]),
          css: m(_)
        }, {
          default: ie(() => [
            k[ue.type] ? (d(), de(ea, {
              key: 0,
              items: O(ue.type),
              "is-last": M.autoApply && !m(c).keepActionRow,
              "esc-close": M.escClose,
              type: ue.type,
              "text-input": M.textInput,
              config: M.config,
              "arrow-navigation": M.arrowNavigation,
              "aria-labels": M.ariaLabels,
              onSelected: (Ne) => ye(ue.type, Ne),
              onToggle: (Ne) => F(ue.type),
              onResetFlow: ne[1] || (ne[1] = (Ne) => M.$emit("reset-flow"))
            }, vt({
              "button-icon": ie(() => [
                M.$slots["clock-icon"] ? ve(M.$slots, "clock-icon", { key: 0 }) : T("", !0),
                M.$slots["clock-icon"] ? T("", !0) : (d(), de(Jn(M.timePickerInline ? m(Nn) : m(cr)), { key: 1 }))
              ]),
              _: 2
            }, [
              M.$slots[`${ue.type}-overlay-value`] ? {
                name: "item",
                fn: ie(({ item: Ne }) => [
                  ve(M.$slots, `${ue.type}-overlay-value`, {
                    text: Ne.text,
                    value: Ne.value
                  })
                ]),
                key: "0"
              } : void 0,
              M.$slots[`${ue.type}-overlay-header`] ? {
                name: "header",
                fn: ie(() => [
                  ve(M.$slots, `${ue.type}-overlay-header`, {
                    toggle: () => F(ue.type)
                  })
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : T("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), zc = { class: "dp--tp-wrap" }, Wc = ["aria-label", "tabindex"], Uc = ["tabindex"], Kc = ["aria-label"], po = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...Lt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, { buildMatrix: l, setTimePicker: o } = un(), i = gn(), { defaultedTransitions: u, defaultedAriaLabels: s, defaultedTextInput: c, defaultedConfig: y, defaultedRange: C } = Qe(r), { transitionName: _, showTransition: k } = ta(u), { hideNavigationButtons: h } = wa(), x = U(null), D = U(null), g = U([]), p = U(null);
    Ue(() => {
      t("mount"), !r.timePicker && r.arrowNavigation ? l([it(x.value)], "time") : o(!0, r.timePicker);
    });
    const A = E(() => C.value.enabled && r.modelAuto ? Jl(r.internalModelValue) : !0), G = U(!1), P = ($) => ({
      hours: Array.isArray(r.hours) ? r.hours[$] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[$] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[$] : r.seconds
    }), V = E(() => {
      const $ = [];
      if (C.value.enabled)
        for (let O = 0; O < 2; O++)
          $.push(P(O));
      else
        $.push(P(0));
      return $;
    }), j = ($, O = !1, L = "") => {
      O || t("reset-flow"), G.value = $, t($ ? "overlay-opened" : "overlay-closed", gt.time), r.arrowNavigation && o($), je(() => {
        L !== "" && g.value[0] && g.value[0].openChildCmp(L);
      });
    }, W = E(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: r.autoApply && !y.value.keepActionRow
    })), N = St(i, "timePicker"), z = ($, O, L) => C.value.enabled ? O === 0 ? [$, V.value[1][L]] : [V.value[0][L], $] : $, ae = ($) => {
      t("update:hours", $);
    }, ce = ($) => {
      t("update:minutes", $);
    }, B = ($) => {
      t("update:seconds", $);
    }, b = () => {
      if (p.value && !c.value.enabled && !r.noOverlayFocus) {
        const $ = eo(p.value);
        $ && $.focus({ preventScroll: !0 });
      }
    }, I = ($) => {
      t("overlay-closed", $);
    };
    return n({ toggleTimePicker: j }), ($, O) => {
      var L;
      return d(), w("div", zc, [
        !$.timePicker && !$.timePickerInline ? Pt((d(), w("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: x,
          type: "button",
          class: le(W.value),
          "aria-label": (L = m(s)) == null ? void 0 : L.openTimePicker,
          tabindex: $.noOverlayFocus ? void 0 : 0,
          "data-test": "open-time-picker-btn",
          onKeydown: O[0] || (O[0] = (R) => m(_t)(R, () => j(!0))),
          onClick: O[1] || (O[1] = (R) => j(!0))
        }, [
          $.$slots["clock-icon"] ? ve($.$slots, "clock-icon", { key: 0 }) : T("", !0),
          $.$slots["clock-icon"] ? T("", !0) : (d(), de(m(cr), { key: 1 }))
        ], 42, Wc)), [
          [Ut, !m(h)($.hideNavigation, "time")]
        ]) : T("", !0),
        Ce(ln, {
          name: m(_)(G.value),
          css: m(k) && !$.timePickerInline
        }, {
          default: ie(() => {
            var R;
            return [
              G.value || $.timePicker || $.timePickerInline ? (d(), w("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: p,
                class: le({
                  dp__overlay: !$.timePickerInline,
                  "dp--overlay-absolute": !r.timePicker && !$.timePickerInline,
                  "dp--overlay-relative": r.timePicker
                }),
                style: Ie($.timePicker ? { height: `${m(y).modeHeight}px` } : void 0),
                tabindex: $.timePickerInline ? void 0 : 0
              }, [
                q("div", {
                  class: le(
                    $.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  $.$slots["time-picker-overlay"] ? ve($.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ae,
                    setMinutes: ce,
                    setSeconds: B
                  }) : T("", !0),
                  $.$slots["time-picker-overlay"] ? T("", !0) : (d(), w("div", {
                    key: 1,
                    class: le($.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (d(!0), w(ke, null, Pe(V.value, (K, v) => Pt((d(), de(Gc, st({
                      key: v,
                      ref_for: !0
                    }, {
                      ...$.$props,
                      order: v,
                      hours: K.hours,
                      minutes: K.minutes,
                      seconds: K.seconds,
                      closeTimePickerBtn: D.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: v === 0 ? $.fixedStart : $.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: g,
                      "validate-time": (F, f) => e.validateTime(F, z(f, v, F)),
                      "onUpdate:hours": (F) => ae(z(F, v, "hours")),
                      "onUpdate:minutes": (F) => ce(z(F, v, "minutes")),
                      "onUpdate:seconds": (F) => B(z(F, v, "seconds")),
                      onMounted: b,
                      onOverlayClosed: I,
                      onOverlayOpened: O[2] || (O[2] = (F) => $.$emit("overlay-opened", F)),
                      onAmPmChange: O[3] || (O[3] = (F) => $.$emit("am-pm-change", F))
                    }), vt({ _: 2 }, [
                      Pe(m(N), (F, f) => ({
                        name: F,
                        fn: ie((H) => [
                          ve($.$slots, F, st({ ref_for: !0 }, H))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ut, v === 0 ? !0 : A.value]
                    ])), 128))
                  ], 2)),
                  !$.timePicker && !$.timePickerInline ? Pt((d(), w("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: D,
                    type: "button",
                    class: le(W.value),
                    "aria-label": (R = m(s)) == null ? void 0 : R.closeTimePicker,
                    tabindex: "0",
                    onKeydown: O[4] || (O[4] = (K) => m(_t)(K, () => j(!1))),
                    onClick: O[5] || (O[5] = (K) => j(!1))
                  }, [
                    $.$slots["calendar-icon"] ? ve($.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                    $.$slots["calendar-icon"] ? T("", !0) : (d(), de(m(Nn), { key: 1 }))
                  ], 42, Kc)), [
                    [Ut, !m(h)($.hideNavigation, "time")]
                  ]) : T("", !0)
                ], 2)
              ], 14, Uc)) : T("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), go = (e, n, a, t) => {
  const { defaultedRange: r } = Qe(e), l = (p, A) => Array.isArray(n[p]) ? n[p][A] : n[p], o = (p) => e.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[p] : n.seconds : 0, i = (p, A) => p ? A !== void 0 ? rn(p, l("hours", A), l("minutes", A), o(A)) : rn(p, n.hours, n.minutes, o()) : Kl(se(), o(A)), u = (p, A) => {
    n[p] = A;
  }, s = E(() => e.modelAuto && r.value.enabled ? Array.isArray(a.value) ? a.value.length > 1 : !1 : r.value.enabled), c = (p, A) => {
    const G = Object.fromEntries(
      Object.keys(n).map((P) => P === p ? [P, A] : [P, n[P]].slice())
    );
    if (s.value && !r.value.disableTimeRangeValidation) {
      const P = (j) => a.value ? rn(
        a.value[j],
        G.hours[j],
        G.minutes[j],
        G.seconds[j]
      ) : null, V = (j) => Ul(a.value[j], 0);
      return !(Ee(P(0), P(1)) && (Dn(P(0), V(1)) || Gn(P(1), V(0))));
    }
    return !0;
  }, y = (p, A) => {
    c(p, A) && (u(p, A), t && t());
  }, C = (p) => {
    y("hours", p);
  }, _ = (p) => {
    y("minutes", p);
  }, k = (p) => {
    y("seconds", p);
  }, h = (p, A, G, P) => {
    A && C(p), !A && !G && _(p), G && k(p), a.value && P(a.value);
  }, x = (p) => {
    if (p) {
      const A = Array.isArray(p), G = A ? [+p[0].hours, +p[1].hours] : +p.hours, P = A ? [+p[0].minutes, +p[1].minutes] : +p.minutes, V = A ? [+p[0].seconds, +p[1].seconds] : +p.seconds;
      u("hours", G), u("minutes", P), e.enableSeconds && u("seconds", V);
    }
  }, D = (p, A) => {
    const G = {
      hours: Array.isArray(n.hours) ? n.hours[p] : n.hours,
      disabledArr: []
    };
    return (A || A === 0) && (G.hours = A), Array.isArray(e.disabledTimes) && (G.disabledArr = r.value.enabled && Array.isArray(e.disabledTimes[p]) ? e.disabledTimes[p] : e.disabledTimes), G;
  }, g = E(() => (p, A) => {
    var G;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: P, hours: V } = D(p, A), j = P.filter((W) => +W.hours === V);
      return ((G = j[0]) == null ? void 0 : G.minutes) === "*" ? { hours: [V], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (j == null ? void 0 : j.map((W) => +W.minutes)) ?? [],
        seconds: (j == null ? void 0 : j.map((W) => W.seconds ? +W.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: u,
    updateHours: C,
    updateMinutes: _,
    updateSeconds: k,
    getSetDateTime: i,
    updateTimeValues: h,
    getSecondsValue: o,
    assignStartTime: x,
    validateTime: c,
    disabledTimesConfig: g
  };
}, Xc = (e, n) => {
  const a = () => {
    e.isTextInputDate && A();
  }, { modelValue: t, time: r } = na(e, n, a), { defaultedStartTime: l, defaultedRange: o, defaultedTz: i } = Qe(e), { updateTimeValues: u, getSetDateTime: s, setTime: c, assignStartTime: y, disabledTimesConfig: C, validateTime: _ } = go(e, r, t, k);
  function k() {
    n("update-flow-step");
  }
  const h = (P) => {
    const { hours: V, minutes: j, seconds: W } = P;
    return { hours: +V, minutes: +j, seconds: W ? +W : 0 };
  }, x = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const V = h(e.startTime[0]), j = h(e.startTime[1]);
        return [Ge(se(), V), Ge(se(), j)];
      }
      const P = h(e.startTime);
      return Ge(se(), P);
    }
    return o.value.enabled ? [null, null] : null;
  }, D = () => {
    if (o.value.enabled) {
      const [P, V] = x();
      t.value = [
        Tt(s(P, 0), i.value.timezone),
        Tt(s(V, 1), i.value.timezone)
      ];
    } else
      t.value = Tt(s(x()), i.value.timezone);
  }, g = (P) => Array.isArray(P) ? [pn(se(P[0])), pn(se(P[1]))] : [pn(P ?? se())], p = (P, V, j) => {
    c("hours", P), c("minutes", V), c("seconds", e.enableSeconds ? j : 0);
  }, A = () => {
    const [P, V] = g(t.value);
    return o.value.enabled ? p(
      [P.hours, V.hours],
      [P.minutes, V.minutes],
      [P.seconds, V.seconds]
    ) : p(P.hours, P.minutes, P.seconds);
  };
  Ue(() => {
    if (!e.shadow)
      return y(l.value), t.value ? A() : D();
  });
  const G = () => {
    Array.isArray(t.value) ? t.value = t.value.map((P, V) => P && s(P, V)) : t.value = s(t.value), n("time-update");
  };
  return {
    modelValue: t,
    time: r,
    disabledTimesConfig: C,
    updateTime: (P, V = !0, j = !1) => {
      u(P, V, j, G);
    },
    validateTime: _
  };
}, Qc = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...Lt
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, l = gn(), o = St(l, "timePicker"), i = U(null), { time: u, modelValue: s, disabledTimesConfig: c, updateTime: y, validateTime: C } = Xc(r, t);
    return Ue(() => {
      r.shadow || t("mount", null);
    }), n({ getSidebarProps: () => ({
      modelValue: s,
      time: u,
      updateTime: y
    }), toggleTimePicker: (_, k = !1, h = "") => {
      var x;
      (x = i.value) == null || x.toggleTimePicker(_, k, h);
    } }), (_, k) => (d(), de($a, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: ie(() => [
        Ce(po, st({
          ref_key: "tpRef",
          ref: i
        }, _.$props, {
          hours: m(u).hours,
          minutes: m(u).minutes,
          seconds: m(u).seconds,
          "internal-model-value": _.internalModelValue,
          "disabled-times-config": m(c),
          "validate-time": m(C),
          "onUpdate:hours": k[0] || (k[0] = (h) => m(y)(h)),
          "onUpdate:minutes": k[1] || (k[1] = (h) => m(y)(h, !1)),
          "onUpdate:seconds": k[2] || (k[2] = (h) => m(y)(h, !1, !0)),
          onAmPmChange: k[3] || (k[3] = (h) => _.$emit("am-pm-change", h)),
          onResetFlow: k[4] || (k[4] = (h) => _.$emit("reset-flow")),
          onOverlayClosed: k[5] || (k[5] = (h) => _.$emit("overlay-toggle", { open: !1, overlay: h })),
          onOverlayOpened: k[6] || (k[6] = (h) => _.$emit("overlay-toggle", { open: !0, overlay: h }))
        }), vt({ _: 2 }, [
          Pe(m(o), (h, x) => ({
            name: h,
            fn: ie((D) => [
              ve(_.$slots, h, ct(xt(D)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Zc = { class: "dp--header-wrap" }, Jc = {
  key: 0,
  class: "dp__month_year_wrap"
}, e0 = { key: 0 }, t0 = { class: "dp__month_year_wrap" }, n0 = ["aria-label", "data-test", "onClick", "onKeydown"], a0 = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...Lt
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, {
      defaultedTransitions: l,
      defaultedAriaLabels: o,
      defaultedMultiCalendars: i,
      defaultedFilters: u,
      defaultedConfig: s,
      defaultedHighlight: c,
      propDates: y,
      defaultedUI: C
    } = Qe(r), { transitionName: _, showTransition: k } = ta(l), { buildMatrix: h } = un(), { handleMonthYearChange: x, isDisabled: D, updateMonthYear: g } = wc(r, t), { showLeftIcon: p, showRightIcon: A } = wa(), G = U(!1), P = U(!1), V = U([null, null, null, null]);
    Ue(() => {
      t("mount");
    });
    const j = (v) => ({
      get: () => r[v],
      set: (F) => {
        const f = v === Nt.month ? Nt.year : Nt.month;
        t("update-month-year", { [v]: F, [f]: r[f] }), v === Nt.month ? I(!0) : $(!0);
      }
    }), W = E(j(Nt.month)), N = E(j(Nt.year)), z = E(() => (v) => ({
      month: r.month,
      year: r.year,
      items: v === Nt.month ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: g,
      toggle: v === Nt.month ? I : $
    })), ae = E(() => r.months.find((F) => F.value === r.month) || { text: "", value: 0 }), ce = E(() => On(r.months, (v) => {
      const F = r.month === v.value, f = zn(
        v.value,
        no(r.year, y.value.minDate),
        ao(r.year, y.value.maxDate)
      ) || u.value.months.includes(v.value), H = so(c.value, v.value, r.year);
      return { active: F, disabled: f, highlighted: H };
    })), B = E(() => On(r.years, (v) => {
      const F = r.year === v.value, f = zn(
        v.value,
        Pn(y.value.minDate),
        Pn(y.value.maxDate)
      ) || u.value.years.includes(v.value), H = yr(c.value, v.value);
      return { active: F, disabled: f, highlighted: H };
    })), b = (v, F, f) => {
      f !== void 0 ? v.value = f : v.value = !v.value, v.value ? t("overlay-opened", F) : t("overlay-closed", F);
    }, I = (v = !1, F) => {
      O(v), b(G, gt.month, F);
    }, $ = (v = !1, F) => {
      O(v), b(P, gt.year, F);
    }, O = (v) => {
      v || t("reset-flow");
    }, L = (v, F) => {
      r.arrowNavigation && (V.value[F] = it(v), h(V.value, "monthYear"));
    }, R = E(() => {
      var v, F;
      return [
        {
          type: Nt.month,
          index: 1,
          toggle: I,
          modelValue: W.value,
          updateModelValue: (f) => W.value = f,
          text: ae.value.text,
          showSelectionGrid: G.value,
          items: ce.value,
          ariaLabel: (v = o.value) == null ? void 0 : v.openMonthsOverlay
        },
        {
          type: Nt.year,
          index: 2,
          toggle: $,
          modelValue: N.value,
          updateModelValue: (f) => N.value = f,
          text: to(r.year, r.locale),
          showSelectionGrid: P.value,
          items: B.value,
          ariaLabel: (F = o.value) == null ? void 0 : F.openYearsOverlay
        }
      ];
    }), K = E(() => r.disableYearSelect ? [R.value[0]] : r.yearFirst ? [...R.value].reverse() : R.value);
    return n({
      toggleMonthPicker: I,
      toggleYearPicker: $,
      handleMonthYearChange: x
    }), (v, F) => {
      var f, H, Y, S, oe, $e;
      return d(), w("div", Zc, [
        v.$slots["month-year"] ? (d(), w("div", Jc, [
          ve(v.$slots, "month-year", ct(xt({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: m(g), handleMonthYearChange: m(x), instance: e.instance })))
        ])) : (d(), w(ke, { key: 1 }, [
          v.$slots["top-extra"] ? (d(), w("div", e0, [
            ve(v.$slots, "top-extra", { value: v.internalModelValue })
          ])) : T("", !0),
          q("div", t0, [
            m(p)(m(i), e.instance) && !v.vertical ? (d(), de(Yn, {
              key: 0,
              "aria-label": (f = m(o)) == null ? void 0 : f.prevMonth,
              disabled: m(D)(!1),
              class: le((H = m(C)) == null ? void 0 : H.navBtnPrev),
              onActivate: F[0] || (F[0] = (X) => m(x)(!1, !0)),
              onSetRef: F[1] || (F[1] = (X) => L(X, 0))
            }, {
              default: ie(() => [
                v.$slots["arrow-left"] ? ve(v.$slots, "arrow-left", { key: 0 }) : T("", !0),
                v.$slots["arrow-left"] ? T("", !0) : (d(), de(m(ur), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : T("", !0),
            q("div", {
              class: le(["dp__month_year_wrap", {
                dp__year_disable_select: v.disableYearSelect
              }])
            }, [
              (d(!0), w(ke, null, Pe(K.value, (X, ye) => (d(), w(ke, {
                key: X.type
              }, [
                q("button", {
                  ref_for: !0,
                  ref: (M) => L(M, ye + 1),
                  type: "button",
                  class: "dp__btn dp__month_year_select",
                  tabindex: "0",
                  "aria-label": X.ariaLabel,
                  "data-test": `${X.type}-toggle-overlay-${e.instance}`,
                  onClick: X.toggle,
                  onKeydown: (M) => m(_t)(M, () => X.toggle(), !0)
                }, [
                  v.$slots[X.type] ? ve(v.$slots, X.type, {
                    key: 0,
                    text: X.text,
                    value: r[X.type]
                  }) : T("", !0),
                  v.$slots[X.type] ? T("", !0) : (d(), w(ke, { key: 1 }, [
                    xe(J(X.text), 1)
                  ], 64))
                ], 40, n0),
                Ce(ln, {
                  name: m(_)(X.showSelectionGrid),
                  css: m(k)
                }, {
                  default: ie(() => [
                    X.showSelectionGrid ? (d(), de(ea, {
                      key: 0,
                      items: X.items,
                      "arrow-navigation": v.arrowNavigation,
                      "hide-navigation": v.hideNavigation,
                      "is-last": v.autoApply && !m(s).keepActionRow,
                      "skip-button-ref": !1,
                      config: v.config,
                      type: X.type,
                      "header-refs": [],
                      "esc-close": v.escClose,
                      "menu-wrap-ref": v.menuWrapRef,
                      "text-input": v.textInput,
                      "aria-labels": v.ariaLabels,
                      onSelected: X.updateModelValue,
                      onToggle: X.toggle
                    }, vt({
                      "button-icon": ie(() => [
                        v.$slots["calendar-icon"] ? ve(v.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                        v.$slots["calendar-icon"] ? T("", !0) : (d(), de(m(Nn), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      v.$slots[`${X.type}-overlay-value`] ? {
                        name: "item",
                        fn: ie(({ item: M }) => [
                          ve(v.$slots, `${X.type}-overlay-value`, {
                            text: M.text,
                            value: M.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      v.$slots[`${X.type}-overlay`] ? {
                        name: "overlay",
                        fn: ie(() => [
                          ve(v.$slots, `${X.type}-overlay`, st({ ref_for: !0 }, z.value(X.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      v.$slots[`${X.type}-overlay-header`] ? {
                        name: "header",
                        fn: ie(() => [
                          ve(v.$slots, `${X.type}-overlay-header`, {
                            toggle: X.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : T("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            m(p)(m(i), e.instance) && v.vertical ? (d(), de(Yn, {
              key: 1,
              "aria-label": (Y = m(o)) == null ? void 0 : Y.prevMonth,
              disabled: m(D)(!1),
              class: le((S = m(C)) == null ? void 0 : S.navBtnPrev),
              onActivate: F[2] || (F[2] = (X) => m(x)(!1, !0))
            }, {
              default: ie(() => [
                v.$slots["arrow-up"] ? ve(v.$slots, "arrow-up", { key: 0 }) : T("", !0),
                v.$slots["arrow-up"] ? T("", !0) : (d(), de(m(fr), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : T("", !0),
            m(A)(m(i), e.instance) ? (d(), de(Yn, {
              key: 2,
              ref: "rightIcon",
              disabled: m(D)(!0),
              "aria-label": (oe = m(o)) == null ? void 0 : oe.nextMonth,
              class: le(($e = m(C)) == null ? void 0 : $e.navBtnNext),
              onActivate: F[3] || (F[3] = (X) => m(x)(!0, !0)),
              onSetRef: F[4] || (F[4] = (X) => L(X, v.disableYearSelect ? 2 : 3))
            }, {
              default: ie(() => [
                v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? ve(v.$slots, v.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : T("", !0),
                v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? T("", !0) : (d(), de(Jn(v.vertical ? m(vr) : m(dr)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : T("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), r0 = ["aria-label"], l0 = {
  class: "dp__calendar_header",
  role: "row"
}, o0 = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, i0 = ["aria-label"], s0 = /* @__PURE__ */ q("div", { class: "dp__calendar_header_separator" }, null, -1), u0 = ["aria-label"], d0 = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, c0 = { class: "dp__cell_inner" }, f0 = ["id", "aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], v0 = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Lt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, { buildMultiLevelMatrix: l } = un(), {
      defaultedTransitions: o,
      defaultedConfig: i,
      defaultedAriaLabels: u,
      defaultedMultiCalendars: s,
      defaultedWeekNumbers: c,
      defaultedMultiDates: y,
      defaultedUI: C
    } = Qe(r), _ = U(null), k = U({
      bottom: "",
      left: "",
      transform: ""
    }), h = U([]), x = U(null), D = U(!0), g = U(""), p = U({ startX: 0, endX: 0, startY: 0, endY: 0 }), A = U([]), G = U({ left: "50%" }), P = U(!1), V = E(() => r.calendar ? r.calendar(r.mappedDates) : r.mappedDates), j = E(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : Yd(r.formatLocale, r.locale, +r.weekStart));
    Ue(() => {
      t("mount", { cmp: "calendar", refs: h }), i.value.noSwipe || x.value && (x.value.addEventListener("touchstart", L, { passive: !1 }), x.value.addEventListener("touchend", R, { passive: !1 }), x.value.addEventListener("touchmove", K, { passive: !1 })), r.monthChangeOnScroll && x.value && x.value.addEventListener("wheel", f, { passive: !1 });
    });
    const W = (X) => X ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", N = (X, ye) => {
      if (r.transitions) {
        const M = Ct(Kt(se(), r.month, r.year));
        g.value = tt(Ct(Kt(se(), X, ye)), M) ? o.value[W(!0)] : o.value[W(!1)], D.value = !1, je(() => {
          D.value = !0;
        });
      }
    }, z = E(
      () => ({
        [r.calendarClassName]: !!r.calendarClassName,
        ...C.value.calendar ?? {}
      })
    ), ae = E(() => (X) => {
      const ye = qd(X);
      return {
        dp__marker_dot: ye.type === "dot",
        dp__marker_line: ye.type === "line"
      };
    }), ce = E(() => (X) => Ee(X, _.value)), B = E(() => ({
      dp__calendar: !0,
      dp__calendar_next: s.value.count > 0 && r.instance !== 0
    })), b = E(() => (X) => r.hideOffsetDates ? X.current : !0), I = async (X, ye, M) => {
      const ne = it(h.value[ye][M]);
      if (ne) {
        const { width: fe, height: ue } = ne.getBoundingClientRect();
        _.value = X.value;
        let re = { left: `${fe / 2}px` }, Ne = -50;
        if (await je(), A.value[0]) {
          const { left: Z, width: he } = A.value[0].getBoundingClientRect();
          Z < 0 && (re = { left: "0" }, Ne = 0, G.value.left = `${fe / 2}px`), window.innerWidth < Z + he && (re = { right: "0" }, Ne = 0, G.value.left = `${he - fe / 2}px`);
        }
        k.value = {
          bottom: `${ue}px`,
          ...re,
          transform: `translateX(${Ne}%)`
        }, t("tooltip-open", X.marker);
      }
    }, $ = async (X, ye, M) => {
      var ne, fe;
      if (P.value && y.value.enabled && y.value.dragSelect)
        return t("select-date", X);
      t("set-hover-date", X), (fe = (ne = X.marker) == null ? void 0 : ne.tooltip) != null && fe.length && await I(X, ye, M);
    }, O = (X) => {
      _.value && (_.value = null, k.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), t("tooltip-close", X.marker));
    }, L = (X) => {
      p.value.startX = X.changedTouches[0].screenX, p.value.startY = X.changedTouches[0].screenY;
    }, R = (X) => {
      p.value.endX = X.changedTouches[0].screenX, p.value.endY = X.changedTouches[0].screenY, v();
    }, K = (X) => {
      r.vertical && !r.inline && X.preventDefault();
    }, v = () => {
      const X = r.vertical ? "Y" : "X";
      Math.abs(p.value[`start${X}`] - p.value[`end${X}`]) > 10 && t("handle-swipe", p.value[`start${X}`] > p.value[`end${X}`] ? "right" : "left");
    }, F = (X, ye, M) => {
      X && (Array.isArray(h.value[ye]) ? h.value[ye][M] = X : h.value[ye] = [X]), r.arrowNavigation && l(h.value, "calendar");
    }, f = (X) => {
      r.monthChangeOnScroll && (X.preventDefault(), t("handle-scroll", X));
    }, H = (X) => c.value.type === "local" ? or(X.value, { weekStartsOn: +r.weekStart }) : c.value.type === "iso" ? rr(X.value) : typeof c.value.type == "function" ? c.value.type(X.value) : "", Y = (X) => {
      const ye = X[0];
      return c.value.hideOnOffsetDates ? X.some((M) => M.current) ? H(ye) : "" : H(ye);
    }, S = (X, ye) => {
      y.value.enabled || (an(X, i.value), t("select-date", ye));
    }, oe = (X) => {
      an(X, i.value);
    }, $e = (X) => {
      y.value.enabled && y.value.dragSelect ? (P.value = !0, t("select-date", X)) : y.value.enabled && t("select-date", X);
    };
    return n({ triggerTransition: N }), (X, ye) => {
      var M;
      return d(), w("div", {
        class: le(B.value)
      }, [
        q("div", {
          ref_key: "calendarWrapRef",
          ref: x,
          role: "grid",
          class: le(z.value),
          "aria-label": (M = m(u)) == null ? void 0 : M.calendarWrap
        }, [
          q("div", l0, [
            X.weekNumbers ? (d(), w("div", o0, J(X.weekNumName), 1)) : T("", !0),
            (d(!0), w(ke, null, Pe(j.value, (ne, fe) => {
              var ue, re;
              return d(), w("div", {
                key: fe,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "data-test": "calendar-header",
                "aria-label": (re = (ue = m(u)) == null ? void 0 : ue.weekDay) == null ? void 0 : re.call(ue, fe)
              }, [
                X.$slots["calendar-header"] ? ve(X.$slots, "calendar-header", {
                  key: 0,
                  day: ne,
                  index: fe
                }) : T("", !0),
                X.$slots["calendar-header"] ? T("", !0) : (d(), w(ke, { key: 1 }, [
                  xe(J(ne), 1)
                ], 64))
              ], 8, i0);
            }), 128))
          ]),
          s0,
          Ce(ln, {
            name: g.value,
            css: !!X.transitions
          }, {
            default: ie(() => {
              var ne;
              return [
                D.value ? (d(), w("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((ne = m(u)) == null ? void 0 : ne.calendarDays) || void 0,
                  onMouseleave: ye[1] || (ye[1] = (fe) => P.value = !1)
                }, [
                  (d(!0), w(ke, null, Pe(V.value, (fe, ue) => (d(), w("div", {
                    key: ue,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    X.weekNumbers ? (d(), w("div", d0, [
                      q("div", c0, J(Y(fe.days)), 1)
                    ])) : T("", !0),
                    (d(!0), w(ke, null, Pe(fe.days, (re, Ne) => {
                      var Z, he, Se;
                      return d(), w("div", {
                        id: m(uo)(re.value),
                        ref_for: !0,
                        ref: (Re) => F(Re, ue, Ne),
                        key: Ne + ue,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (re.classData.dp__active_date || re.classData.dp__range_start || re.classData.dp__range_start) ?? void 0,
                        "aria-disabled": re.classData.dp__cell_disabled || void 0,
                        "aria-label": (he = (Z = m(u)) == null ? void 0 : Z.day) == null ? void 0 : he.call(Z, re),
                        tabindex: "0",
                        "data-test": re.value,
                        onClick: Me((Re) => S(Re, re), ["prevent"]),
                        onKeydown: (Re) => m(_t)(Re, () => X.$emit("select-date", re)),
                        onMouseenter: (Re) => $(re, ue, Ne),
                        onMouseleave: (Re) => O(re),
                        onMousedown: (Re) => $e(re),
                        onMouseup: ye[0] || (ye[0] = (Re) => P.value = !1)
                      }, [
                        q("div", {
                          class: le(["dp__cell_inner", re.classData])
                        }, [
                          X.$slots.day && b.value(re) ? ve(X.$slots, "day", {
                            key: 0,
                            day: +re.text,
                            date: re.value
                          }) : T("", !0),
                          X.$slots.day ? T("", !0) : (d(), w(ke, { key: 1 }, [
                            xe(J(re.text), 1)
                          ], 64)),
                          re.marker && b.value(re) ? (d(), w(ke, { key: 2 }, [
                            X.$slots.marker ? ve(X.$slots, "marker", {
                              key: 0,
                              marker: re.marker,
                              day: +re.text,
                              date: re.value
                            }) : (d(), w("div", {
                              key: 1,
                              class: le(ae.value(re.marker)),
                              style: Ie(re.marker.color ? { backgroundColor: re.marker.color } : {})
                            }, null, 6))
                          ], 64)) : T("", !0),
                          ce.value(re.value) ? (d(), w("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: A,
                            class: "dp__marker_tooltip",
                            style: Ie(k.value)
                          }, [
                            (Se = re.marker) != null && Se.tooltip ? (d(), w("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: oe
                            }, [
                              (d(!0), w(ke, null, Pe(re.marker.tooltip, (Re, mt) => (d(), w("div", {
                                key: mt,
                                class: "dp__tooltip_text"
                              }, [
                                X.$slots["marker-tooltip"] ? ve(X.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: Re,
                                  day: re.value
                                }) : T("", !0),
                                X.$slots["marker-tooltip"] ? T("", !0) : (d(), w(ke, { key: 1 }, [
                                  q("div", {
                                    class: "dp__tooltip_mark",
                                    style: Ie(Re.color ? { backgroundColor: Re.color } : {})
                                  }, null, 4),
                                  q("div", null, J(Re.text), 1)
                                ], 64))
                              ]))), 128)),
                              q("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Ie(G.value)
                              }, null, 4)
                            ])) : T("", !0)
                          ], 4)) : T("", !0)
                        ], 2)
                      ], 40, f0);
                    }), 128))
                  ]))), 128))
                ], 40, u0)) : T("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, r0)
      ], 2);
    };
  }
}), Jr = (e) => Array.isArray(e), h0 = (e, n, a, t) => {
  const r = U([]), l = U(/* @__PURE__ */ new Date()), o = U(), i = () => R(e.isTextInputDate), { modelValue: u, calendars: s, time: c, today: y } = na(e, n, i), {
    defaultedMultiCalendars: C,
    defaultedStartTime: _,
    defaultedRange: k,
    defaultedConfig: h,
    defaultedTz: x,
    propDates: D,
    defaultedMultiDates: g
  } = Qe(e), { validateMonthYearInRange: p, isDisabled: A, isDateRangeAllowed: G, checkMinMaxRange: P } = dn(e), { updateTimeValues: V, getSetDateTime: j, setTime: W, assignStartTime: N, validateTime: z, disabledTimesConfig: ae } = go(e, c, u, t), ce = E(
    () => (Q) => s.value[Q] ? s.value[Q].month : 0
  ), B = E(
    () => (Q) => s.value[Q] ? s.value[Q].year : 0
  ), b = (Q) => !h.value.keepViewOnOffsetClick || Q ? !0 : !o.value, I = (Q, me, ee, pe = !1) => {
    var be, $t;
    b(pe) && (s.value[Q] || (s.value[Q] = { month: 0, year: 0 }), s.value[Q].month = Ur(me) ? (be = s.value[Q]) == null ? void 0 : be.month : me, s.value[Q].year = Ur(ee) ? ($t = s.value[Q]) == null ? void 0 : $t.year : ee);
  }, $ = () => {
    e.autoApply && n("select-date");
  };
  Ue(() => {
    e.shadow || (u.value || (ye(), _.value && N(_.value)), R(!0), e.focusStartDate && e.startDate && ye());
  });
  const O = E(() => {
    var Q;
    return (Q = e.flow) != null && Q.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), L = () => {
    e.autoApply && O.value && n("auto-apply");
  }, R = (Q = !1) => {
    if (u.value)
      return Array.isArray(u.value) ? (r.value = u.value, S(Q)) : F(u.value, Q);
    if (C.value.count && Q && !e.startDate)
      return v(se(), Q);
  }, K = () => Array.isArray(u.value) && k.value.enabled ? Fe(u.value[0]) === Fe(u.value[1] ?? u.value[0]) : !1, v = (Q = /* @__PURE__ */ new Date(), me = !1) => {
    if ((!C.value.count || !C.value.static || me) && I(0, Fe(Q), Oe(Q)), C.value.count && (!C.value.solo || !u.value || K()))
      for (let ee = 1; ee < C.value.count; ee++) {
        const pe = Ge(se(), { month: ce.value(ee - 1), year: B.value(ee - 1) }), be = Pl(pe, { months: 1 });
        s.value[ee] = { month: Fe(be), year: Oe(be) };
      }
  }, F = (Q, me) => {
    v(Q), W("hours", Xt(Q)), W("minutes", on(Q)), W("seconds", Tn(Q)), C.value.count && me && X();
  }, f = (Q) => {
    if (C.value.count) {
      if (C.value.solo) return 0;
      const me = Fe(Q[0]), ee = Fe(Q[1]);
      return Math.abs(ee - me) < C.value.count ? 0 : 1;
    }
    return 1;
  }, H = (Q, me) => {
    Q[1] && k.value.showLastInRange ? v(Q[f(Q)], me) : v(Q[0], me);
    const ee = (pe, be) => [
      pe(Q[0]),
      Q[1] ? pe(Q[1]) : c[be][1]
    ];
    W("hours", ee(Xt, "hours")), W("minutes", ee(on, "minutes")), W("seconds", ee(Tn, "seconds"));
  }, Y = (Q, me) => {
    if ((k.value.enabled || e.weekPicker) && !g.value.enabled)
      return H(Q, me);
    if (g.value.enabled && me) {
      const ee = Q[Q.length - 1];
      return F(ee, me);
    }
  }, S = (Q) => {
    const me = u.value;
    Y(me, Q), C.value.count && C.value.solo && X();
  }, oe = (Q, me) => {
    const ee = Ge(se(), { month: ce.value(me), year: B.value(me) }), pe = Q < 0 ? Et(ee, 1) : Sn(ee, 1);
    p(Fe(pe), Oe(pe), Q < 0, e.preventMinMaxNavigation) && (I(me, Fe(pe), Oe(pe)), n("update-month-year", { instance: me, month: Fe(pe), year: Oe(pe) }), C.value.count && !C.value.solo && $e(me), a());
  }, $e = (Q) => {
    for (let me = Q - 1; me >= 0; me--) {
      const ee = Sn(Ge(se(), { month: ce.value(me + 1), year: B.value(me + 1) }), 1);
      I(me, Fe(ee), Oe(ee));
    }
    for (let me = Q + 1; me <= C.value.count - 1; me++) {
      const ee = Et(Ge(se(), { month: ce.value(me - 1), year: B.value(me - 1) }), 1);
      I(me, Fe(ee), Oe(ee));
    }
  }, X = () => {
    if (Array.isArray(u.value) && u.value.length === 2) {
      const Q = se(
        se(u.value[1] ? u.value[1] : Et(u.value[0], 1))
      ), [me, ee] = [Fe(u.value[0]), Oe(u.value[0])], [pe, be] = [Fe(u.value[1]), Oe(u.value[1])];
      (me !== pe || me === pe && ee !== be) && C.value.solo && I(1, Fe(Q), Oe(Q));
    } else u.value && !Array.isArray(u.value) && (I(0, Fe(u.value), Oe(u.value)), v(se()));
  }, ye = () => {
    e.startDate && (I(0, Fe(se(e.startDate)), Oe(se(e.startDate))), C.value.count && $e(0));
  }, M = (Q, me) => {
    if (e.monthChangeOnScroll) {
      const ee = (/* @__PURE__ */ new Date()).getTime() - l.value.getTime(), pe = Math.abs(Q.deltaY);
      let be = 500;
      pe > 1 && (be = 100), pe > 100 && (be = 0), ee > be && (l.value = /* @__PURE__ */ new Date(), oe(e.monthChangeOnScroll !== "inverse" ? -Q.deltaY : Q.deltaY, me));
    }
  }, ne = (Q, me, ee = !1) => {
    e.monthChangeOnArrows && e.vertical === ee && fe(Q, me);
  }, fe = (Q, me) => {
    oe(Q === "right" ? -1 : 1, me);
  }, ue = (Q) => {
    if (D.value.markers)
      return ca(Q.value, D.value.markers);
  }, re = (Q, me) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [Q == 0, !0];
      case "fair":
        return [Q == 0 || me > Q, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Ne = (Q, me, ee, pe) => {
    if (e.sixWeeks && Q.length < 6) {
      const be = 6 - Q.length, $t = (me.getDay() + 7 - pe) % 7, Ot = 6 - (ee.getDay() + 7 - pe) % 7, [cn, aa] = re($t, Ot);
      for (let In = 1; In <= be; In++)
        if (aa ? !!(In % 2) == cn : cn) {
          const Zt = Q[0].days[0], xa = Z(Ft(Zt.value, -7), Fe(me));
          Q.unshift({ days: xa });
        } else {
          const Zt = Q[Q.length - 1], xa = Zt.days[Zt.days.length - 1], To = Z(Ft(xa.value, 1), Fe(me));
          Q.push({ days: To });
        }
    }
    return Q;
  }, Z = (Q, me) => {
    const ee = se(Q), pe = [];
    for (let be = 0; be < 7; be++) {
      const $t = Ft(ee, be), Ot = Fe($t) !== me;
      pe.push({
        text: e.hideOffsetDates && Ot ? "" : $t.getDate(),
        value: $t,
        current: !Ot,
        classData: {}
      });
    }
    return pe;
  }, he = (Q, me) => {
    const ee = [], pe = new Date(me, Q), be = new Date(me, Q + 1, 0), $t = e.weekStart, Ot = Vt(pe, { weekStartsOn: $t }), cn = (aa) => {
      const In = Z(aa, Q);
      if (ee.push({ days: In }), !ee[ee.length - 1].days.some(
        (Zt) => Ee(Ct(Zt.value), Ct(be))
      )) {
        const Zt = Ft(aa, 7);
        cn(Zt);
      }
    };
    return cn(Ot), Ne(ee, pe, be, $t);
  }, Se = (Q) => {
    const me = rn(se(Q.value), c.hours, c.minutes, ge());
    n("date-update", me), g.value.enabled ? $r(me, u, g.value.limit) : u.value = me, t(), je().then(() => {
      L();
    });
  }, Re = (Q) => k.value.noDisabledRange ? ro(r.value[0], Q).some((me) => A(me)) : !1, mt = () => {
    r.value = u.value ? u.value.slice() : [], r.value.length === 2 && !(k.value.fixedStart || k.value.fixedEnd) && (r.value = []);
  }, Te = (Q, me) => {
    const ee = [
      se(Q.value),
      Ft(se(Q.value), +k.value.autoRange)
    ];
    G(ee) ? (me && Mt(Q.value), r.value = ee) : n("invalid-date", Q.value);
  }, Mt = (Q) => {
    const me = Fe(se(Q)), ee = Oe(se(Q));
    if (I(0, me, ee), C.value.count > 0)
      for (let pe = 1; pe < C.value.count; pe++) {
        const be = Zd(
          Ge(se(Q), { year: ce.value(pe - 1), month: B.value(pe - 1) })
        );
        I(pe, be.month, be.year);
      }
  }, Dt = (Q) => {
    if (Re(Q.value) || !P(Q.value, u.value, k.value.fixedStart ? 0 : 1))
      return n("invalid-date", Q.value);
    r.value = ho(se(Q.value), u, n, k);
  }, te = (Q, me) => {
    if (mt(), k.value.autoRange) return Te(Q, me);
    if (k.value.fixedStart || k.value.fixedEnd) return Dt(Q);
    r.value[0] ? P(se(Q.value), u.value) && !Re(Q.value) ? Ze(se(Q.value), se(r.value[0])) ? (r.value.unshift(se(Q.value)), n("range-end", r.value[0])) : (r.value[1] = se(Q.value), n("range-end", r.value[1])) : (e.autoApply && n("auto-apply-invalid", Q.value), n("invalid-date", Q.value)) : (r.value[0] = se(Q.value), n("range-start", r.value[0]));
  }, ge = (Q = !0) => e.enableSeconds ? Array.isArray(c.seconds) ? Q ? c.seconds[0] : c.seconds[1] : c.seconds : 0, He = (Q) => {
    r.value[Q] = rn(
      r.value[Q],
      c.hours[Q],
      c.minutes[Q],
      ge(Q !== 1)
    );
  }, ut = () => {
    var Q, me;
    r.value[0] && r.value[1] && +((Q = r.value) == null ? void 0 : Q[0]) > +((me = r.value) == null ? void 0 : me[1]) && (r.value.reverse(), n("range-start", r.value[0]), n("range-end", r.value[1]));
  }, rt = () => {
    r.value.length && (r.value[0] && !r.value[1] ? He(0) : (He(0), He(1), t()), ut(), u.value = r.value.slice(), ba(r.value, n, e.autoApply, e.modelAuto));
  }, qe = (Q, me = !1) => {
    if (A(Q.value) || !Q.current && e.hideOffsetDates) return n("invalid-date", Q.value);
    if (o.value = JSON.parse(JSON.stringify(Q)), !k.value.enabled) return Se(Q);
    Jr(c.hours) && Jr(c.minutes) && !g.value.enabled && (te(Q, me), rt());
  }, ot = (Q, me) => {
    var ee;
    I(Q, me.month, me.year, !0), C.value.count && !C.value.solo && $e(Q), n("update-month-year", { instance: Q, month: me.month, year: me.year }), a(C.value.solo ? Q : void 0);
    const pe = (ee = e.flow) != null && ee.length ? e.flow[e.flowStep] : void 0;
    !me.fromNav && (pe === gt.month || pe === gt.year) && t();
  }, ze = (Q, me) => {
    vo({
      value: Q,
      modelValue: u,
      range: k.value.enabled,
      timezone: me ? void 0 : x.value.timezone
    }), $(), e.multiCalendars && je().then(() => R(!0));
  }, At = () => {
    const Q = hr(se(), x.value);
    k.value.enabled ? u.value && Array.isArray(u.value) && u.value[0] ? u.value = Ze(Q, u.value[0]) ? [Q, u.value[0]] : [u.value[0], Q] : u.value = [Q] : u.value = Q, $();
  }, qt = () => {
    if (Array.isArray(u.value))
      if (g.value.enabled) {
        const Q = Fn();
        u.value[u.value.length - 1] = j(Q);
      } else
        u.value = u.value.map((Q, me) => Q && j(Q, me));
    else
      u.value = j(u.value);
    n("time-update");
  }, Fn = () => Array.isArray(u.value) && u.value.length ? u.value[u.value.length - 1] : null;
  return {
    calendars: s,
    modelValue: u,
    month: ce,
    year: B,
    time: c,
    disabledTimesConfig: ae,
    today: y,
    validateTime: z,
    getCalendarDays: he,
    getMarker: ue,
    handleScroll: M,
    handleSwipe: fe,
    handleArrow: ne,
    selectDate: qe,
    updateMonthYear: ot,
    presetDate: ze,
    selectCurrentDate: At,
    updateTime: (Q, me = !0, ee = !1) => {
      V(Q, me, ee, qt);
    },
    assignMonthAndYear: v
  };
}, m0 = { key: 0 }, p0 = /* @__PURE__ */ Ae({
  __name: "DatePicker",
  props: {
    ...Lt
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, {
      calendars: l,
      month: o,
      year: i,
      modelValue: u,
      time: s,
      disabledTimesConfig: c,
      today: y,
      validateTime: C,
      getCalendarDays: _,
      getMarker: k,
      handleArrow: h,
      handleScroll: x,
      handleSwipe: D,
      selectDate: g,
      updateMonthYear: p,
      presetDate: A,
      selectCurrentDate: G,
      updateTime: P,
      assignMonthAndYear: V
    } = h0(r, t, K, v), j = gn(), { setHoverDate: W, getDayClassData: N, clearHoverDate: z } = A0(u, r), { defaultedMultiCalendars: ae } = Qe(r), ce = U([]), B = U([]), b = U(null), I = St(j, "calendar"), $ = St(j, "monthYear"), O = St(j, "timePicker"), L = (M) => {
      r.shadow || t("mount", M);
    };
    De(
      l,
      () => {
        r.shadow || setTimeout(() => {
          t("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), De(
      ae,
      (M, ne) => {
        M.count - ne.count > 0 && V();
      },
      { deep: !0 }
    );
    const R = E(() => (M) => _(o.value(M), i.value(M)).map((ne) => ({
      ...ne,
      days: ne.days.map((fe) => (fe.marker = k(fe), fe.classData = N(fe), fe))
    })));
    function K(M) {
      var ne;
      M || M === 0 ? (ne = B.value[M]) == null || ne.triggerTransition(o.value(M), i.value(M)) : B.value.forEach((fe, ue) => fe.triggerTransition(o.value(ue), i.value(ue)));
    }
    function v() {
      t("update-flow-step");
    }
    const F = (M, ne = !1) => {
      g(M, ne), r.spaceConfirm && t("select-date");
    }, f = (M, ne, fe = 0) => {
      var ue;
      (ue = ce.value[fe]) == null || ue.toggleMonthPicker(M, ne);
    }, H = (M, ne, fe = 0) => {
      var ue;
      (ue = ce.value[fe]) == null || ue.toggleYearPicker(M, ne);
    }, Y = (M, ne, fe) => {
      var ue;
      (ue = b.value) == null || ue.toggleTimePicker(M, ne, fe);
    }, S = (M, ne) => {
      var fe;
      if (!r.range) {
        const ue = u.value ? u.value : y, re = ne ? new Date(ne) : ue, Ne = M ? Vt(re, { weekStartsOn: 1 }) : Rl(re, { weekStartsOn: 1 });
        g({
          value: Ne,
          current: Fe(re) === o.value(0),
          text: "",
          classData: {}
        }), (fe = document.getElementById(uo(Ne))) == null || fe.focus();
      }
    }, oe = (M) => {
      var ne;
      (ne = ce.value[0]) == null || ne.handleMonthYearChange(M, !0);
    }, $e = (M) => {
      p(0, { month: o.value(0), year: i.value(0) + (M ? 1 : -1), fromNav: !0 });
    }, X = (M, ne) => {
      M === gt.time && t(`time-picker-${ne ? "open" : "close"}`), t("overlay-toggle", { open: ne, overlay: M });
    }, ye = (M) => {
      t("overlay-toggle", { open: !1, overlay: M }), t("focus-menu");
    };
    return n({
      clearHoverDate: z,
      presetDate: A,
      selectCurrentDate: G,
      toggleMonthPicker: f,
      toggleYearPicker: H,
      toggleTimePicker: Y,
      handleArrow: h,
      updateMonthYear: p,
      getSidebarProps: () => ({
        modelValue: u,
        month: o,
        year: i,
        time: s,
        updateTime: P,
        updateMonthYear: p,
        selectDate: g,
        presetDate: A
      }),
      changeMonth: oe,
      changeYear: $e,
      selectWeekDate: S
    }), (M, ne) => (d(), w(ke, null, [
      Ce($a, {
        "multi-calendars": m(ae).count,
        collapse: M.collapse
      }, {
        default: ie(({ instance: fe, index: ue }) => [
          M.disableMonthYearSelect ? T("", !0) : (d(), de(a0, st({
            key: 0,
            ref: (re) => {
              re && (ce.value[ue] = re);
            },
            months: m(Zl)(M.formatLocale, M.locale, M.monthNameFormat),
            years: m(mr)(M.yearRange, M.locale, M.reverseYears),
            month: m(o)(fe),
            year: m(i)(fe),
            instance: fe
          }, M.$props, {
            onMount: ne[0] || (ne[0] = (re) => L(m(mn).header)),
            onResetFlow: ne[1] || (ne[1] = (re) => M.$emit("reset-flow")),
            onUpdateMonthYear: (re) => m(p)(fe, re),
            onOverlayClosed: ye,
            onOverlayOpened: ne[2] || (ne[2] = (re) => M.$emit("overlay-toggle", { open: !0, overlay: re }))
          }), vt({ _: 2 }, [
            Pe(m($), (re, Ne) => ({
              name: re,
              fn: ie((Z) => [
                ve(M.$slots, re, ct(xt(Z)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Ce(v0, st({
            ref: (re) => {
              re && (B.value[ue] = re);
            },
            "mapped-dates": R.value(fe),
            month: m(o)(fe),
            year: m(i)(fe),
            instance: fe
          }, M.$props, {
            onSelectDate: (re) => m(g)(re, fe !== 1),
            onHandleSpace: (re) => F(re, fe !== 1),
            onSetHoverDate: ne[3] || (ne[3] = (re) => m(W)(re)),
            onHandleScroll: (re) => m(x)(re, fe),
            onHandleSwipe: (re) => m(D)(re, fe),
            onMount: ne[4] || (ne[4] = (re) => L(m(mn).calendar)),
            onResetFlow: ne[5] || (ne[5] = (re) => M.$emit("reset-flow")),
            onTooltipOpen: ne[6] || (ne[6] = (re) => M.$emit("tooltip-open", re)),
            onTooltipClose: ne[7] || (ne[7] = (re) => M.$emit("tooltip-close", re))
          }), vt({ _: 2 }, [
            Pe(m(I), (re, Ne) => ({
              name: re,
              fn: ie((Z) => [
                ve(M.$slots, re, ct(xt({ ...Z })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      M.enableTimePicker ? (d(), w("div", m0, [
        M.$slots["time-picker"] ? ve(M.$slots, "time-picker", ct(st({ key: 0 }, { time: m(s), updateTime: m(P) }))) : (d(), de(po, st({
          key: 1,
          ref_key: "timePickerRef",
          ref: b
        }, M.$props, {
          hours: m(s).hours,
          minutes: m(s).minutes,
          seconds: m(s).seconds,
          "internal-model-value": M.internalModelValue,
          "disabled-times-config": m(c),
          "validate-time": m(C),
          onMount: ne[8] || (ne[8] = (fe) => L(m(mn).timePicker)),
          "onUpdate:hours": ne[9] || (ne[9] = (fe) => m(P)(fe)),
          "onUpdate:minutes": ne[10] || (ne[10] = (fe) => m(P)(fe, !1)),
          "onUpdate:seconds": ne[11] || (ne[11] = (fe) => m(P)(fe, !1, !0)),
          onResetFlow: ne[12] || (ne[12] = (fe) => M.$emit("reset-flow")),
          onOverlayClosed: ne[13] || (ne[13] = (fe) => X(fe, !1)),
          onOverlayOpened: ne[14] || (ne[14] = (fe) => X(fe, !0)),
          onAmPmChange: ne[15] || (ne[15] = (fe) => M.$emit("am-pm-change", fe))
        }), vt({ _: 2 }, [
          Pe(m(O), (fe, ue) => ({
            name: fe,
            fn: ie((re) => [
              ve(M.$slots, fe, ct(xt(re)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : T("", !0)
    ], 64));
  }
}), g0 = (e, n) => {
  const a = U(), {
    defaultedMultiCalendars: t,
    defaultedConfig: r,
    defaultedHighlight: l,
    defaultedRange: o,
    propDates: i,
    defaultedFilters: u,
    defaultedMultiDates: s
  } = Qe(e), { modelValue: c, year: y, month: C, calendars: _ } = na(e, n), { isDisabled: k } = dn(e), { selectYear: h, groupedYears: x, showYearPicker: D, isDisabled: g, toggleYearPicker: p, handleYearSelect: A, handleYear: G } = mo({
    modelValue: c,
    multiCalendars: t,
    range: o,
    highlight: l,
    calendars: _,
    propDates: i,
    month: C,
    year: y,
    filters: u,
    props: e,
    emit: n
  }), P = (b, I) => [b, I].map(($) => jt($, "MMMM", { locale: e.formatLocale })).join("-"), V = E(() => (b) => c.value ? Array.isArray(c.value) ? c.value.some((I) => Gr(b, I)) : Gr(c.value, b) : !1), j = (b) => {
    if (o.value.enabled) {
      if (Array.isArray(c.value)) {
        const I = Ee(b, c.value[0]) || Ee(b, c.value[1]);
        return ga(c.value, a.value, b) && !I;
      }
      return !1;
    }
    return !1;
  }, W = (b, I) => b.quarter === Lr(I) && b.year === Oe(I), N = (b) => typeof l.value == "function" ? l.value({ quarter: Lr(b), year: Oe(b) }) : !!l.value.quarters.find((I) => W(I, b)), z = E(() => (b) => {
    const I = Ge(/* @__PURE__ */ new Date(), { year: y.value(b) });
    return js({
      start: qn(I),
      end: Vl(I)
    }).map(($) => {
      const O = hn($), L = Br($), R = k($), K = j(O), v = N(O);
      return {
        text: P(O, L),
        value: O,
        active: V.value(O),
        highlighted: v,
        disabled: R,
        isBetween: K
      };
    });
  }), ae = (b) => {
    $r(b, c, s.value.limit), n("auto-apply", !0);
  }, ce = (b) => {
    c.value = br(c, b, n), ba(c.value, n, e.autoApply, e.modelAuto);
  }, B = (b) => {
    c.value = b, n("auto-apply");
  };
  return {
    defaultedConfig: r,
    defaultedMultiCalendars: t,
    groupedYears: x,
    year: y,
    isDisabled: g,
    quarters: z,
    showYearPicker: D,
    modelValue: c,
    setHoverDate: (b) => {
      a.value = b;
    },
    selectYear: h,
    selectQuarter: (b, I, $) => {
      if (!$)
        return _.value[I].month = Fe(Br(b)), s.value.enabled ? ae(b) : o.value.enabled ? ce(b) : B(b);
    },
    toggleYearPicker: p,
    handleYearSelect: A,
    handleYear: G
  };
}, y0 = { class: "dp--quarter-items" }, $0 = ["data-test", "disabled", "onClick", "onMouseover"], b0 = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...Lt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, l = gn(), o = St(l, "yearMode"), {
      defaultedMultiCalendars: i,
      defaultedConfig: u,
      groupedYears: s,
      year: c,
      isDisabled: y,
      quarters: C,
      modelValue: _,
      showYearPicker: k,
      setHoverDate: h,
      selectQuarter: x,
      toggleYearPicker: D,
      handleYearSelect: g,
      handleYear: p
    } = g0(r, t);
    return n({ getSidebarProps: () => ({
      modelValue: _,
      year: c,
      selectQuarter: x,
      handleYearSelect: g,
      handleYear: p
    }) }), (A, G) => (d(), de($a, {
      "multi-calendars": m(i).count,
      collapse: A.collapse,
      stretch: ""
    }, {
      default: ie(({ instance: P }) => [
        q("div", {
          class: "dp-quarter-picker-wrap",
          style: Ie({ minHeight: `${m(u).modeHeight}px` })
        }, [
          A.$slots["top-extra"] ? ve(A.$slots, "top-extra", {
            key: 0,
            value: A.internalModelValue
          }) : T("", !0),
          q("div", null, [
            Ce(fo, st(A.$props, {
              items: m(s)(P),
              instance: P,
              "show-year-picker": m(k)[P],
              year: m(c)(P),
              "is-disabled": (V) => m(y)(P, V),
              onHandleYear: (V) => m(p)(P, V),
              onYearSelect: (V) => m(g)(V, P),
              onToggleYearPicker: (V) => m(D)(P, V == null ? void 0 : V.flow, V == null ? void 0 : V.show)
            }), vt({ _: 2 }, [
              Pe(m(o), (V, j) => ({
                name: V,
                fn: ie((W) => [
                  ve(A.$slots, V, ct(xt(W)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          q("div", y0, [
            (d(!0), w(ke, null, Pe(m(C)(P), (V, j) => (d(), w("div", { key: j }, [
              q("button", {
                type: "button",
                class: le(["dp--qr-btn", {
                  "dp--qr-btn-active": V.active,
                  "dp--qr-btn-between": V.isBetween,
                  "dp--qr-btn-disabled": V.disabled,
                  "dp--highlighted": V.highlighted
                }]),
                "data-test": V.value,
                disabled: V.disabled,
                onClick: (W) => m(x)(V.value, P, V.disabled),
                onMouseover: (W) => m(h)(V.value)
              }, [
                A.$slots.quarter ? ve(A.$slots, "quarter", {
                  key: 0,
                  value: V.value,
                  text: V.text
                }) : (d(), w(ke, { key: 1 }, [
                  xe(J(V.text), 1)
                ], 64))
              ], 42, $0)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), w0 = ["id", "aria-label"], k0 = {
  key: 0,
  class: "dp--menu-load-container"
}, C0 = /* @__PURE__ */ q("span", { class: "dp--menu-loader" }, null, -1), x0 = [
  C0
], _0 = {
  key: 0,
  class: "dp__sidebar_left"
}, T0 = ["data-test", "onClick", "onKeydown"], D0 = {
  key: 2,
  class: "dp__sidebar_right"
}, S0 = {
  key: 3,
  class: "dp__action_extra"
}, el = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...ya,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, l = U(null), o = E(() => {
      const { openOnTop: Z, ...he } = r;
      return {
        ...he,
        flowStep: W.value,
        collapse: r.collapse,
        noOverlayFocus: r.noOverlayFocus,
        menuWrapRef: l.value
      };
    }), { setMenuFocused: i, setShiftKey: u, control: s } = co(), c = gn(), { defaultedTextInput: y, defaultedInline: C, defaultedConfig: _, defaultedUI: k } = Qe(r), h = U(null), x = U(0), D = U(null), g = U(!1), p = U(null);
    Ue(() => {
      if (!r.shadow) {
        g.value = !0, A(), window.addEventListener("resize", A);
        const Z = it(l);
        if (Z && !y.value.enabled && !C.value.enabled && (i(!0), I()), Z) {
          const he = (Se) => {
            _.value.allowPreventDefault && Se.preventDefault(), an(Se, _.value, !0);
          };
          Z.addEventListener("pointerdown", he), Z.addEventListener("mousedown", he);
        }
      }
    }), An(() => {
      window.removeEventListener("resize", A);
    });
    const A = () => {
      const Z = it(D);
      Z && (x.value = Z.getBoundingClientRect().width);
    }, { arrowRight: G, arrowLeft: P, arrowDown: V, arrowUp: j } = un(), { flowStep: W, updateFlowStep: N, childMount: z, resetFlow: ae, handleFlow: ce } = N0(r, t, p), B = E(() => r.monthPicker ? Ac : r.yearPicker ? Fc : r.timePicker ? Qc : r.quarterPicker ? b0 : p0), b = E(() => {
      var Z;
      if (_.value.arrowLeft) return _.value.arrowLeft;
      const he = (Z = l.value) == null ? void 0 : Z.getBoundingClientRect(), Se = r.getInputRect();
      return (Se == null ? void 0 : Se.width) < (x == null ? void 0 : x.value) && (Se == null ? void 0 : Se.left) <= ((he == null ? void 0 : he.left) ?? 0) ? `${(Se == null ? void 0 : Se.width) / 2}px` : (Se == null ? void 0 : Se.right) >= ((he == null ? void 0 : he.right) ?? 0) && (Se == null ? void 0 : Se.width) < (x == null ? void 0 : x.value) ? `${(x == null ? void 0 : x.value) - (Se == null ? void 0 : Se.width) / 2}px` : "50%";
    }), I = () => {
      const Z = it(l);
      Z && Z.focus({ preventScroll: !0 });
    }, $ = E(() => {
      var Z;
      return ((Z = p.value) == null ? void 0 : Z.getSidebarProps()) || {};
    }), O = () => {
      r.openOnTop && t("recalculate-position");
    }, L = St(c, "action"), R = E(() => r.monthPicker || r.yearPicker ? St(c, "monthYear") : r.timePicker ? St(c, "timePicker") : St(c, "shared")), K = E(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), v = E(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly,
      "dp-menu-loading": r.loading
    })), F = E(
      () => ({
        dp__menu: !0,
        dp__menu_index: !C.value.enabled,
        dp__relative: C.value.enabled,
        [r.menuClassName]: !!r.menuClassName,
        ...k.value.menu ?? {}
      })
    ), f = (Z) => {
      an(Z, _.value, !0);
    }, H = () => {
      r.escClose && t("close-picker");
    }, Y = (Z) => {
      if (r.arrowNavigation) {
        if (Z === wt.up) return j();
        if (Z === wt.down) return V();
        if (Z === wt.left) return P();
        if (Z === wt.right) return G();
      } else Z === wt.left || Z === wt.up ? ye("handleArrow", wt.left, 0, Z === wt.up) : ye("handleArrow", wt.right, 0, Z === wt.down);
    }, S = (Z) => {
      u(Z.shiftKey), !r.disableMonthYearSelect && Z.code === Ke.tab && Z.target.classList.contains("dp__menu") && s.value.shiftKeyInMenu && (Z.preventDefault(), an(Z, _.value, !0), t("close-picker"));
    }, oe = () => {
      I(), t("time-picker-close");
    }, $e = (Z) => {
      var he, Se, Re;
      (he = p.value) == null || he.toggleTimePicker(!1, !1), (Se = p.value) == null || Se.toggleMonthPicker(!1, !1, Z), (Re = p.value) == null || Re.toggleYearPicker(!1, !1, Z);
    }, X = (Z, he = 0) => {
      var Se, Re, mt;
      return Z === "month" ? (Se = p.value) == null ? void 0 : Se.toggleMonthPicker(!1, !0, he) : Z === "year" ? (Re = p.value) == null ? void 0 : Re.toggleYearPicker(!1, !0, he) : Z === "time" ? (mt = p.value) == null ? void 0 : mt.toggleTimePicker(!0, !1) : $e(he);
    }, ye = (Z, ...he) => {
      var Se, Re;
      (Se = p.value) != null && Se[Z] && ((Re = p.value) == null || Re[Z](...he));
    }, M = () => {
      ye("selectCurrentDate");
    }, ne = (Z, he) => {
      ye("presetDate", Z, he);
    }, fe = () => {
      ye("clearHoverDate");
    }, ue = (Z, he) => {
      ye("updateMonthYear", Z, he);
    }, re = (Z, he) => {
      Z.preventDefault(), Y(he);
    }, Ne = (Z) => {
      var he;
      if (S(Z), Z.key === Ke.home || Z.key === Ke.end)
        return ye(
          "selectWeekDate",
          Z.key === Ke.home,
          Z.target.getAttribute("id")
        );
      switch ((Z.key === Ke.pageUp || Z.key === Ke.pageDown) && (Z.shiftKey ? ye("changeYear", Z.key === Ke.pageUp) : ye("changeMonth", Z.key === Ke.pageUp), Z.target.getAttribute("id") && ((he = l.value) == null || he.focus({ preventScroll: !0 }))), Z.key) {
        case Ke.esc:
          return H();
        case Ke.arrowLeft:
          return re(Z, wt.left);
        case Ke.arrowRight:
          return re(Z, wt.right);
        case Ke.arrowUp:
          return re(Z, wt.up);
        case Ke.arrowDown:
          return re(Z, wt.down);
        default:
          return;
      }
    };
    return n({
      updateMonthYear: ue,
      switchView: X,
      handleFlow: ce
    }), (Z, he) => {
      var Se, Re, mt;
      return d(), w("div", {
        id: Z.uid ? `dp-menu-${Z.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: l,
        tabindex: "0",
        role: "dialog",
        "aria-label": (Se = Z.ariaLabels) == null ? void 0 : Se.menu,
        class: le(F.value),
        style: Ie({ "--dp-arrow-left": b.value }),
        onMouseleave: fe,
        onClick: f,
        onKeydown: Ne
      }, [
        (Z.disabled || Z.readonly) && m(C).enabled || Z.loading ? (d(), w("div", {
          key: 0,
          class: le(v.value)
        }, [
          Z.loading ? (d(), w("div", k0, x0)) : T("", !0)
        ], 2)) : T("", !0),
        !m(C).enabled && !Z.teleportCenter ? (d(), w("div", {
          key: 1,
          class: le(K.value)
        }, null, 2)) : T("", !0),
        q("div", {
          ref_key: "innerMenuRef",
          ref: D,
          class: le({
            dp__menu_content_wrapper: ((Re = Z.presetDates) == null ? void 0 : Re.length) || !!Z.$slots["left-sidebar"] || !!Z.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((mt = Z.presetDates) == null ? void 0 : mt.length) || !!Z.$slots["left-sidebar"] || !!Z.$slots["right-sidebar"])
          }),
          style: Ie({ "--dp-menu-width": `${x.value}px` })
        }, [
          Z.$slots["left-sidebar"] ? (d(), w("div", _0, [
            ve(Z.$slots, "left-sidebar", ct(xt($.value)))
          ])) : T("", !0),
          Z.presetDates.length ? (d(), w("div", {
            key: 1,
            class: le({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (d(!0), w(ke, null, Pe(Z.presetDates, (Te, Mt) => (d(), w(ke, { key: Mt }, [
              Te.slot ? ve(Z.$slots, Te.slot, {
                key: 0,
                presetDate: ne,
                label: Te.label,
                value: Te.value
              }) : (d(), w("button", {
                key: 1,
                type: "button",
                style: Ie(Te.style || {}),
                class: le(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test": Te.testId ?? void 0,
                onClick: Me((Dt) => ne(Te.value, Te.noTz), ["prevent"]),
                onKeydown: (Dt) => m(_t)(Dt, () => ne(Te.value, Te.noTz), !0)
              }, J(Te.label), 47, T0))
            ], 64))), 128))
          ], 2)) : T("", !0),
          q("div", {
            ref_key: "calendarWrapperRef",
            ref: h,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (d(), de(Jn(B.value), st({
              ref_key: "dynCmpRef",
              ref: p
            }, o.value, {
              "flow-step": m(W),
              onMount: m(z),
              onUpdateFlowStep: m(N),
              onResetFlow: m(ae),
              onFocusMenu: I,
              onSelectDate: he[0] || (he[0] = (Te) => Z.$emit("select-date")),
              onDateUpdate: he[1] || (he[1] = (Te) => Z.$emit("date-update", Te)),
              onTooltipOpen: he[2] || (he[2] = (Te) => Z.$emit("tooltip-open", Te)),
              onTooltipClose: he[3] || (he[3] = (Te) => Z.$emit("tooltip-close", Te)),
              onAutoApply: he[4] || (he[4] = (Te) => Z.$emit("auto-apply", Te)),
              onRangeStart: he[5] || (he[5] = (Te) => Z.$emit("range-start", Te)),
              onRangeEnd: he[6] || (he[6] = (Te) => Z.$emit("range-end", Te)),
              onInvalidFixedRange: he[7] || (he[7] = (Te) => Z.$emit("invalid-fixed-range", Te)),
              onTimeUpdate: he[8] || (he[8] = (Te) => Z.$emit("time-update")),
              onAmPmChange: he[9] || (he[9] = (Te) => Z.$emit("am-pm-change", Te)),
              onTimePickerOpen: he[10] || (he[10] = (Te) => Z.$emit("time-picker-open", Te)),
              onTimePickerClose: oe,
              onRecalculatePosition: O,
              onUpdateMonthYear: he[11] || (he[11] = (Te) => Z.$emit("update-month-year", Te)),
              onAutoApplyInvalid: he[12] || (he[12] = (Te) => Z.$emit("auto-apply-invalid", Te)),
              onInvalidDate: he[13] || (he[13] = (Te) => Z.$emit("invalid-date", Te)),
              onOverlayToggle: he[14] || (he[14] = (Te) => Z.$emit("overlay-toggle", Te)),
              "onUpdate:internalModelValue": he[15] || (he[15] = (Te) => Z.$emit("update:internal-model-value", Te))
            }), vt({ _: 2 }, [
              Pe(R.value, (Te, Mt) => ({
                name: Te,
                fn: ie((Dt) => [
                  ve(Z.$slots, Te, ct(xt({ ...Dt })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          Z.$slots["right-sidebar"] ? (d(), w("div", D0, [
            ve(Z.$slots, "right-sidebar", ct(xt($.value)))
          ])) : T("", !0),
          Z.$slots["action-extra"] ? (d(), w("div", S0, [
            Z.$slots["action-extra"] ? ve(Z.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: M
            }) : T("", !0)
          ])) : T("", !0)
        ], 6),
        !Z.autoApply || m(_).keepActionRow ? (d(), de(xc, st({
          key: 2,
          "menu-mount": g.value
        }, o.value, {
          "calendar-width": x.value,
          onClosePicker: he[16] || (he[16] = (Te) => Z.$emit("close-picker")),
          onSelectDate: he[17] || (he[17] = (Te) => Z.$emit("select-date")),
          onInvalidSelect: he[18] || (he[18] = (Te) => Z.$emit("invalid-select")),
          onSelectNow: M
        }), vt({ _: 2 }, [
          Pe(m(L), (Te, Mt) => ({
            name: Te,
            fn: ie((Dt) => [
              ve(Z.$slots, Te, ct(xt({ ...Dt })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : T("", !0)
      ], 46, w0);
    };
  }
});
var kn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(kn || {});
const O0 = ({
  menuRef: e,
  menuRefInner: n,
  inputRef: a,
  pickerWrapperRef: t,
  inline: r,
  emit: l,
  props: o,
  slots: i
}) => {
  const u = U({}), s = U(!1), c = U({
    top: "0",
    left: "0"
  }), y = U(!1), C = jn(o, "teleportCenter");
  De(C, () => {
    c.value = JSON.parse(JSON.stringify({})), A();
  });
  const _ = (b) => {
    if (o.teleport) {
      const I = b.getBoundingClientRect();
      return {
        left: I.left + window.scrollX,
        top: I.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, k = (b, I) => {
    c.value.left = `${b + I - u.value.width}px`;
  }, h = (b) => {
    c.value.left = `${b}px`;
  }, x = (b, I) => {
    o.position === kn.left && h(b), o.position === kn.right && k(b, I), o.position === kn.center && (c.value.left = `${b + I / 2 - u.value.width / 2}px`);
  }, D = (b) => {
    const { width: I, height: $ } = b.getBoundingClientRect(), { top: O, left: L } = o.altPosition ? o.altPosition(b) : _(b);
    return { top: +O, left: +L, width: I, height: $ };
  }, g = () => {
    c.value.left = "50%", c.value.top = "50%", c.value.transform = "translate(-50%, -50%)", c.value.position = "fixed", delete c.value.opacity;
  }, p = () => {
    const b = it(a), { top: I, left: $, transform: O } = o.altPosition(b);
    c.value = { top: `${I}px`, left: `${$}px`, transform: O ?? "" };
  }, A = (b = !0) => {
    var I;
    if (!r.value.enabled) {
      if (C.value) return g();
      if (o.altPosition !== null) return p();
      if (b) {
        const $ = o.teleport ? (I = n.value) == null ? void 0 : I.$el : e.value;
        $ && (u.value = $.getBoundingClientRect()), l("recalculate-position");
      }
      return z();
    }
  }, G = ({ inputEl: b, left: I, width: $ }) => {
    window.screen.width > 768 && !s.value && x(I, $), j(b);
  }, P = (b) => {
    const { top: I, left: $, height: O, width: L } = D(b);
    c.value.top = `${O + I + +o.offset}px`, y.value = !1, s.value || (c.value.left = `${$ + L / 2 - u.value.width / 2}px`), G({ inputEl: b, left: $, width: L });
  }, V = (b) => {
    const { top: I, left: $, width: O } = D(b);
    c.value.top = `${I - +o.offset - u.value.height}px`, y.value = !0, G({ inputEl: b, left: $, width: O });
  }, j = (b) => {
    if (o.autoPosition) {
      const { left: I, width: $ } = D(b), { left: O, right: L } = u.value;
      if (!s.value) {
        if (Math.abs(O) !== Math.abs(L)) {
          if (O <= 0)
            return s.value = !0, h(I);
          if (L >= document.documentElement.clientWidth)
            return s.value = !0, k(I, $);
        }
        return x(I, $);
      }
    }
  }, W = () => {
    const b = it(a);
    if (b) {
      const { height: I } = u.value, { top: $, height: O } = b.getBoundingClientRect(), L = window.innerHeight - $ - O, R = $;
      return I <= L ? vn.bottom : I > L && I <= R ? vn.top : L >= R ? vn.bottom : vn.top;
    }
    return vn.bottom;
  }, N = (b) => W() === vn.bottom ? P(b) : V(b), z = () => {
    const b = it(a);
    if (b)
      return o.autoPosition ? N(b) : P(b);
  }, ae = function(b) {
    if (b) {
      const I = b.scrollHeight > b.clientHeight, $ = window.getComputedStyle(b).overflowY.indexOf("hidden") !== -1;
      return I && !$;
    }
    return !0;
  }, ce = function(b) {
    return !b || b === document.body || b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : ae(b) ? b : ce(b.assignedSlot ? b.assignedSlot.parentNode : b.parentNode);
  }, B = (b) => {
    if (b)
      switch (o.position) {
        case kn.left:
          return { left: 0, transform: "translateX(0)" };
        case kn.right:
          return { left: `${b.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${b.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: y,
    menuStyle: c,
    xCorrect: s,
    setMenuPosition: A,
    getScrollableParent: ce,
    shadowRender: (b, I) => {
      var $, O, L;
      const R = document.createElement("div"), K = ($ = it(a)) == null ? void 0 : $.getBoundingClientRect();
      R.setAttribute("id", "dp--temp-container");
      const v = (O = t.value) != null && O.clientWidth ? t.value : document.body;
      v.append(R);
      const F = B(K), f = Oo(
        b,
        {
          ...I,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...F }
        },
        Object.fromEntries(
          Object.keys(i).filter((H) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(H)).map((H) => [H, i[H]])
        )
      );
      Pr(f, R), u.value = (L = f.el) == null ? void 0 : L.getBoundingClientRect(), Pr(null, R), v.removeChild(R);
    }
  };
}, en = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] }
], P0 = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], M0 = {
  all: () => en,
  monthYear: () => en.filter((e) => e.use.includes("month-year")),
  input: () => P0,
  timePicker: () => en.filter((e) => e.use.includes("time")),
  action: () => en.filter((e) => e.use.includes("action")),
  calendar: () => en.filter((e) => e.use.includes("calendar")),
  menu: () => en.filter((e) => e.use.includes("menu")),
  shared: () => en.filter((e) => e.use.includes("shared")),
  yearMode: () => en.filter((e) => e.use.includes("year-mode"))
}, St = (e, n, a) => {
  const t = [];
  return M0[n]().forEach((r) => {
    e[r.name] && t.push(r.name);
  }), a != null && a.length && a.forEach((r) => {
    r.slot && t.push(r.slot);
  }), t;
}, ta = (e) => {
  const n = E(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), a = E(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: n, showTransition: !!e.value, menuTransition: a };
}, na = (e, n, a) => {
  const { defaultedRange: t, defaultedTz: r } = Qe(e), l = se(Tt(se(), r.value.timezone)), o = U([{ month: Fe(l), year: Oe(l) }]), i = (C) => {
    const _ = {
      hours: Xt(l),
      minutes: on(l),
      seconds: 0
    };
    return t.value.enabled ? [_[C], _[C]] : _[C];
  }, u = sn({
    hours: i("hours"),
    minutes: i("minutes"),
    seconds: i("seconds")
  });
  De(
    t,
    (C, _) => {
      C.enabled !== _.enabled && (u.hours = i("hours"), u.minutes = i("minutes"), u.seconds = i("seconds"));
    },
    { deep: !0 }
  );
  const s = E({
    get: () => e.internalModelValue,
    set: (C) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", C);
    }
  }), c = E(
    () => (C) => o.value[C] ? o.value[C].month : 0
  ), y = E(
    () => (C) => o.value[C] ? o.value[C].year : 0
  );
  return De(
    s,
    (C, _) => {
      a && JSON.stringify(C ?? {}) !== JSON.stringify(_ ?? {}) && a();
    },
    { deep: !0 }
  ), {
    calendars: o,
    time: u,
    modelValue: s,
    month: c,
    year: y,
    today: l
  };
}, A0 = (e, n) => {
  const {
    defaultedMultiCalendars: a,
    defaultedMultiDates: t,
    defaultedUI: r,
    defaultedHighlight: l,
    defaultedTz: o,
    propDates: i,
    defaultedRange: u
  } = Qe(n), { isDisabled: s } = dn(n), c = U(null), y = U(Tt(/* @__PURE__ */ new Date(), o.value.timezone)), C = (f) => {
    !f.current && n.hideOffsetDates || (c.value = f.value);
  }, _ = () => {
    c.value = null;
  }, k = (f) => Array.isArray(e.value) && u.value.enabled && e.value[0] && c.value ? f ? tt(c.value, e.value[0]) : Ze(c.value, e.value[0]) : !0, h = (f, H) => {
    const Y = () => e.value ? H ? e.value[0] || null : e.value[1] : null, S = e.value && Array.isArray(e.value) ? Y() : null;
    return Ee(se(f.value), S);
  }, x = (f) => {
    const H = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !Ze(c.value ?? null, H) : !0;
  }, D = (f, H = !0) => (u.value.enabled || n.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? n.hideOffsetDates && !f.current ? !1 : Ee(se(f.value), e.value[H ? 0 : 1]) : u.value.enabled ? h(f, H) && x(H) || Ee(f.value, Array.isArray(e.value) ? e.value[0] : null) && k(H) : !1, g = (f, H) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const Y = Ee(f.value, c.value);
      return H ? tt(e.value[0], f.value) && Y : Ze(e.value[0], f.value) && Y;
    }
    return !1;
  }, p = (f) => !e.value || n.hideOffsetDates && !f.current ? !1 : u.value.enabled ? n.modelAuto && Array.isArray(e.value) ? Ee(f.value, e.value[0] ? e.value[0] : y.value) : !1 : t.value.enabled && Array.isArray(e.value) ? e.value.some((H) => Ee(H, f.value)) : Ee(f.value, e.value ? e.value : y.value), A = (f) => {
    if (u.value.autoRange || n.weekPicker) {
      if (c.value) {
        if (n.hideOffsetDates && !f.current) return !1;
        const H = Ft(c.value, +u.value.autoRange), Y = zt(se(c.value), n.weekStart);
        return n.weekPicker ? Ee(Y[1], se(f.value)) : Ee(H, se(f.value));
      }
      return !1;
    }
    return !1;
  }, G = (f) => {
    if (u.value.autoRange || n.weekPicker) {
      if (c.value) {
        const H = Ft(c.value, +u.value.autoRange);
        if (n.hideOffsetDates && !f.current) return !1;
        const Y = zt(se(c.value), n.weekStart);
        return n.weekPicker ? tt(f.value, Y[0]) && Ze(f.value, Y[1]) : tt(f.value, c.value) && Ze(f.value, H);
      }
      return !1;
    }
    return !1;
  }, P = (f) => {
    if (u.value.autoRange || n.weekPicker) {
      if (c.value) {
        if (n.hideOffsetDates && !f.current) return !1;
        const H = zt(se(c.value), n.weekStart);
        return n.weekPicker ? Ee(H[0], f.value) : Ee(c.value, f.value);
      }
      return !1;
    }
    return !1;
  }, V = (f) => ga(e.value, c.value, f.value), j = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, W = () => n.modelAuto ? Jl(n.internalModelValue) : !0, N = (f) => {
    if (n.weekPicker) return !1;
    const H = u.value.enabled ? !D(f) && !D(f, !1) : !0;
    return !s(f.value) && !p(f) && !(!f.current && n.hideOffsetDates) && H;
  }, z = (f) => u.value.enabled ? n.modelAuto ? j() && p(f) : !1 : p(f), ae = (f) => l.value ? Kd(f.value, i.value.highlight) : !1, ce = (f) => {
    const H = s(f.value);
    return H && (typeof l.value == "function" ? !l.value(f.value, H) : !l.value.options.highlightDisabled);
  }, B = (f) => {
    var H;
    return typeof l.value == "function" ? l.value(f.value) : (H = l.value.weekdays) == null ? void 0 : H.includes(f.value.getDay());
  }, b = (f) => (u.value.enabled || n.weekPicker) && (!(a.value.count > 0) || f.current) && W() && !(!f.current && n.hideOffsetDates) && !p(f) ? V(f) : !1, I = (f) => {
    const { isRangeStart: H, isRangeEnd: Y } = R(f), S = u.value.enabled ? H || Y : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !n.disabled && !(!f.current && n.hideOffsetDates) && !s(f.value),
      dp__cell_disabled: s(f.value),
      dp__cell_highlight: !ce(f) && (ae(f) || B(f)) && !z(f) && !S && !P(f) && !(b(f) && n.weekPicker) && !Y,
      dp__cell_highlight_active: !ce(f) && (ae(f) || B(f)) && z(f),
      dp__today: !n.noToday && Ee(f.value, y.value) && f.current,
      "dp--past": Ze(f.value, y.value),
      "dp--future": tt(f.value, y.value)
    };
  }, $ = (f) => ({
    dp__active_date: z(f),
    dp__date_hover: N(f)
  }), O = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const H = zt(e.value, n.weekStart);
      return {
        ...v(f),
        dp__range_start: Ee(H[0], f.value),
        dp__range_end: Ee(H[1], f.value),
        dp__range_between_week: tt(f.value, H[0]) && Ze(f.value, H[1])
      };
    }
    return {
      ...v(f)
    };
  }, L = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const H = zt(e.value[0], n.weekStart), Y = e.value[1] ? zt(e.value[1], n.weekStart) : [];
      return {
        ...v(f),
        dp__range_start: Ee(H[0], f.value) || Ee(Y[0], f.value),
        dp__range_end: Ee(H[1], f.value) || Ee(Y[1], f.value),
        dp__range_between_week: tt(f.value, H[0]) && Ze(f.value, H[1]) || tt(f.value, Y[0]) && Ze(f.value, Y[1]),
        dp__range_between: tt(f.value, H[1]) && Ze(f.value, Y[0])
      };
    }
    return {
      ...v(f)
    };
  }, R = (f) => {
    const H = a.value.count > 0 ? f.current && D(f) && W() : D(f) && W(), Y = a.value.count > 0 ? f.current && D(f, !1) && W() : D(f, !1) && W();
    return { isRangeStart: H, isRangeEnd: Y };
  }, K = (f) => {
    const { isRangeStart: H, isRangeEnd: Y } = R(f);
    return {
      dp__range_start: H,
      dp__range_end: Y,
      dp__range_between: b(f),
      dp__date_hover: Ee(f.value, c.value) && !H && !Y && !n.weekPicker,
      dp__date_hover_start: g(f, !0),
      dp__date_hover_end: g(f, !1)
    };
  }, v = (f) => ({
    ...K(f),
    dp__cell_auto_range: G(f),
    dp__cell_auto_range_start: P(f),
    dp__cell_auto_range_end: A(f)
  }), F = (f) => u.value.enabled ? u.value.autoRange ? v(f) : n.modelAuto ? { ...$(f), ...K(f) } : n.weekPicker ? L(f) : K(f) : n.weekPicker ? O(f) : $(f);
  return {
    setHoverDate: C,
    clearHoverDate: _,
    getDayClassData: (f) => n.hideOffsetDates && !f.current ? {} : {
      ...I(f),
      ...F(f),
      [n.dayClass ? n.dayClass(f.value, n.internalModelValue) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName,
      ...r.value.calendarCell ?? {}
    }
  };
}, dn = (e) => {
  const { defaultedFilters: n, defaultedRange: a, propDates: t, defaultedMultiDates: r } = Qe(e), l = (B) => t.value.disabledDates ? typeof t.value.disabledDates == "function" ? t.value.disabledDates(se(B)) : !!ca(B, t.value.disabledDates) : !1, o = (B) => t.value.maxDate ? e.yearPicker ? Oe(B) > Oe(t.value.maxDate) : tt(B, t.value.maxDate) : !1, i = (B) => t.value.minDate ? e.yearPicker ? Oe(B) < Oe(t.value.minDate) : Ze(B, t.value.minDate) : !1, u = (B) => {
    const b = o(B), I = i(B), $ = l(B), O = n.value.months.map((F) => +F).includes(Fe(B)), L = e.disabledWeekDays.length ? e.disabledWeekDays.some((F) => +F === Eu(B)) : !1, R = _(B), K = Oe(B), v = K < +e.yearRange[0] || K > +e.yearRange[1];
    return !(b || I || $ || O || v || L || R);
  }, s = (B, b) => Ze(...tn(t.value.minDate, B, b)) || Ee(...tn(t.value.minDate, B, b)), c = (B, b) => tt(...tn(t.value.maxDate, B, b)) || Ee(...tn(t.value.maxDate, B, b)), y = (B, b, I) => {
    let $ = !1;
    return t.value.maxDate && I && c(B, b) && ($ = !0), t.value.minDate && !I && s(B, b) && ($ = !0), $;
  }, C = (B, b, I, $) => {
    let O = !1;
    return $ ? t.value.minDate && t.value.maxDate ? O = y(B, b, I) : (t.value.minDate && s(B, b) || t.value.maxDate && c(B, b)) && (O = !0) : O = !0, O;
  }, _ = (B) => Array.isArray(t.value.allowedDates) && !t.value.allowedDates.length ? !0 : t.value.allowedDates ? !ca(B, t.value.allowedDates) : !1, k = (B) => !u(B), h = (B) => a.value.noDisabledRange ? !El({ start: B[0], end: B[1] }).some((b) => k(b)) : !0, x = (B) => {
    if (B) {
      const b = Oe(B);
      return b >= +e.yearRange[0] && b <= e.yearRange[1];
    }
    return !0;
  }, D = (B, b) => !!(Array.isArray(B) && B[b] && (a.value.maxRange || a.value.minRange) && x(B[b])), g = (B, b, I = 0) => {
    if (D(b, I) && x(B)) {
      const $ = Fl(B, b[I]), O = ro(b[I], B), L = O.length === 1 ? 0 : O.filter((K) => k(K)).length, R = Math.abs($) - (a.value.minMaxRawRange ? 0 : L);
      if (a.value.minRange && a.value.maxRange)
        return R >= +a.value.minRange && R <= +a.value.maxRange;
      if (a.value.minRange) return R >= +a.value.minRange;
      if (a.value.maxRange) return R <= +a.value.maxRange;
    }
    return !0;
  }, p = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, A = (B) => Array.isArray(B) ? [B[0] ? Ia(B[0]) : null, B[1] ? Ia(B[1]) : null] : Ia(B), G = (B, b, I) => B.find(
    ($) => +$.hours === Xt(b) && $.minutes === "*" ? !0 : +$.minutes === on(b) && +$.hours === Xt(b)
  ) && I, P = (B, b, I) => {
    const [$, O] = B, [L, R] = b;
    return !G($, L, I) && !G(O, R, I) && I;
  }, V = (B, b) => {
    const I = Array.isArray(b) ? b : [b];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? P(e.disabledTimes, I, B) : !I.some(($) => G(e.disabledTimes, $, B)) : B;
  }, j = (B, b) => {
    const I = Array.isArray(b) ? [pn(b[0]), b[1] ? pn(b[1]) : void 0] : pn(b), $ = !e.disabledTimes(I);
    return B && $;
  }, W = (B, b) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? V(b, B) : j(b, B) : b, N = (B) => {
    let b = !0;
    if (!B || p()) return !0;
    const I = !t.value.minDate && !t.value.maxDate ? A(B) : B;
    return (e.maxTime || t.value.maxDate) && (b = Xr(
      e.maxTime,
      t.value.maxDate,
      "max",
      dt(I),
      b
    )), (e.minTime || t.value.minDate) && (b = Xr(
      e.minTime,
      t.value.minDate,
      "min",
      dt(I),
      b
    )), W(B, b);
  }, z = (B) => {
    if (!e.monthPicker) return !0;
    let b = !0;
    const I = se(It(B));
    if (t.value.minDate && t.value.maxDate) {
      const $ = se(It(t.value.minDate)), O = se(It(t.value.maxDate));
      return tt(I, $) && Ze(I, O) || Ee(I, $) || Ee(I, O);
    }
    if (t.value.minDate) {
      const $ = se(It(t.value.minDate));
      b = tt(I, $) || Ee(I, $);
    }
    if (t.value.maxDate) {
      const $ = se(It(t.value.maxDate));
      b = Ze(I, $) || Ee(I, $);
    }
    return b;
  }, ae = E(() => (B) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : N(B)), ce = E(() => (B) => e.monthPicker ? Array.isArray(B) && (a.value.enabled || r.value.enabled) ? !B.filter((b) => !z(b)).length : z(B) : !0);
  return {
    isDisabled: k,
    validateDate: u,
    validateMonthYearInRange: C,
    isDateRangeAllowed: h,
    checkMinMaxRange: g,
    isValidTime: N,
    isTimeValid: ae,
    isMonthValid: ce
  };
}, wa = () => {
  const e = E(() => (t, r) => t == null ? void 0 : t.includes(r)), n = E(() => (t, r) => t.count ? t.solo ? !0 : r === 0 : !0), a = E(() => (t, r) => t.count ? t.solo ? !0 : r === t.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
}, N0 = (e, n, a) => {
  const t = U(0), r = sn({
    [mn.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [mn.calendar]: !1,
    [mn.header]: !1
  }), l = E(() => e.monthPicker || e.timePicker), o = (y) => {
    var C;
    if ((C = e.flow) != null && C.length) {
      if (!y && l.value) return c();
      r[y] = !0, Object.keys(r).filter((_) => !r[_]).length || c();
    }
  }, i = () => {
    var y, C;
    (y = e.flow) != null && y.length && t.value !== -1 && (t.value += 1, n("flow-step", t.value), c()), ((C = e.flow) == null ? void 0 : C.length) === t.value && je().then(() => u());
  }, u = () => {
    t.value = -1;
  }, s = (y, C, ..._) => {
    var k, h;
    e.flow[t.value] === y && a.value && ((h = (k = a.value)[C]) == null || h.call(k, ..._));
  }, c = (y = 0) => {
    y && (t.value += y), s(gt.month, "toggleMonthPicker", !0), s(gt.year, "toggleYearPicker", !0), s(gt.calendar, "toggleTimePicker", !1, !0), s(gt.time, "toggleTimePicker", !0, !0);
    const C = e.flow[t.value];
    (C === gt.hours || C === gt.minutes || C === gt.seconds) && s(C, "toggleTimePicker", !0, !0, C);
  };
  return { childMount: o, updateFlowStep: i, resetFlow: u, handleFlow: c, flowStep: t };
}, F0 = {
  key: 1,
  class: "dp__input_wrap"
}, I0 = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], E0 = {
  key: 2,
  class: "dp__clear_icon"
}, V0 = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...ya
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, {
      defaultedTextInput: l,
      defaultedAriaLabels: o,
      defaultedInline: i,
      defaultedConfig: u,
      defaultedRange: s,
      defaultedMultiDates: c,
      defaultedUI: y,
      getDefaultPattern: C,
      getDefaultStartTime: _
    } = Qe(r), { checkMinMaxRange: k } = dn(r), h = U(), x = U(null), D = U(!1), g = U(!1), p = E(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !l.value.enabled,
        dp__disabled: r.disabled,
        dp__input_readonly: !l.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: !!r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: D.value || r.isMenuOpen,
        dp__input_reg: !l.value.enabled,
        [r.inputClassName]: !!r.inputClassName,
        ...y.value.input ?? {}
      })
    ), A = () => {
      t("set-input-date", null), r.clearable && r.autoApply && (t("set-empty-date"), h.value = null);
    }, G = ($) => {
      const O = _();
      return Xd(
        $,
        l.value.format ?? C(),
        O ?? lo({}, r.enableSeconds),
        r.inputValue,
        g.value,
        r.formatLocale
      );
    }, P = ($) => {
      const { rangeSeparator: O } = l.value, [L, R] = $.split(`${O}`);
      if (L) {
        const K = G(L.trim()), v = R ? G(R.trim()) : null;
        if (Dn(K, v)) return;
        const F = K && v ? [K, v] : [K];
        k(v, F, 0) && (h.value = K ? F : null);
      }
    }, V = () => {
      g.value = !0;
    }, j = ($) => {
      if (s.value.enabled)
        P($);
      else if (c.value.enabled) {
        const O = $.split(";");
        h.value = O.map((L) => G(L.trim())).filter((L) => L);
      } else
        h.value = G($);
    }, W = ($) => {
      var O;
      const L = typeof $ == "string" ? $ : (O = $.target) == null ? void 0 : O.value;
      L !== "" ? (l.value.openMenu && !r.isMenuOpen && t("open"), j(L), t("set-input-date", h.value)) : A(), g.value = !1, t("update:input-value", L);
    }, N = ($) => {
      l.value.enabled ? (j($.target.value), l.value.enterSubmit && Xa(h.value) && r.inputValue !== "" ? (t("set-input-date", h.value, !0), h.value = null) : l.value.enterSubmit && r.inputValue === "" && (h.value = null, t("clear"))) : ce($);
    }, z = ($) => {
      l.value.enabled && l.value.tabSubmit && j($.target.value), l.value.tabSubmit && Xa(h.value) && r.inputValue !== "" ? (t("set-input-date", h.value, !0, !0), h.value = null) : l.value.tabSubmit && r.inputValue === "" && (h.value = null, t("clear", !0));
    }, ae = () => {
      D.value = !0, t("focus"), je().then(() => {
        var $;
        l.value.enabled && l.value.selectOnFocus && (($ = x.value) == null || $.select());
      });
    }, ce = ($) => {
      $.preventDefault(), an($, u.value, !0), l.value.enabled && l.value.openMenu && !i.value.input && !r.isMenuOpen ? t("open") : l.value.enabled || t("toggle");
    }, B = () => {
      t("real-blur"), D.value = !1, (!r.isMenuOpen || i.value.enabled && i.value.input) && t("blur"), r.autoApply && l.value.enabled && h.value && !r.isMenuOpen && (t("set-input-date", h.value), t("select-date"), h.value = null);
    }, b = ($) => {
      an($, u.value, !0), t("clear");
    }, I = ($) => {
      if ($.key === "Tab" && z($), $.key === "Enter" && N($), !l.value.enabled) {
        if ($.code === "Tab") return;
        $.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var $;
        ($ = x.value) == null || $.focus({ preventScroll: !0 });
      },
      setParsedDate: ($) => {
        h.value = $;
      }
    }), ($, O) => {
      var L;
      return d(), w("div", { onClick: ce }, [
        $.$slots.trigger && !$.$slots["dp-input"] && !m(i).enabled ? ve($.$slots, "trigger", { key: 0 }) : T("", !0),
        !$.$slots.trigger && (!m(i).enabled || m(i).input) ? (d(), w("div", F0, [
          $.$slots["dp-input"] && !$.$slots.trigger && (!m(i).enabled || m(i).enabled && m(i).input) ? ve($.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: W,
            onEnter: N,
            onTab: z,
            onClear: b,
            onBlur: B,
            onKeypress: I,
            onPaste: V,
            onFocus: ae,
            openMenu: () => $.$emit("open"),
            closeMenu: () => $.$emit("close"),
            toggleMenu: () => $.$emit("toggle")
          }) : T("", !0),
          $.$slots["dp-input"] ? T("", !0) : (d(), w("input", {
            key: 1,
            id: $.uid ? `dp-input-${$.uid}` : void 0,
            ref_key: "inputRef",
            ref: x,
            "data-test": "dp-input",
            name: $.name,
            class: le(p.value),
            inputmode: m(l).enabled ? "text" : "none",
            placeholder: $.placeholder,
            disabled: $.disabled,
            readonly: $.readonly,
            required: $.required,
            value: e.inputValue,
            autocomplete: $.autocomplete,
            "aria-label": (L = m(o)) == null ? void 0 : L.input,
            "aria-disabled": $.disabled || void 0,
            "aria-invalid": $.state === !1 ? !0 : void 0,
            onInput: W,
            onBlur: B,
            onFocus: ae,
            onKeypress: I,
            onKeydown: I,
            onPaste: V
          }, null, 42, I0)),
          q("div", {
            onClick: O[2] || (O[2] = (R) => t("toggle"))
          }, [
            $.$slots["input-icon"] && !$.hideInputIcon ? (d(), w("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: O[0] || (O[0] = (R) => t("toggle"))
            }, [
              ve($.$slots, "input-icon")
            ])) : T("", !0),
            !$.$slots["input-icon"] && !$.hideInputIcon && !$.$slots["dp-input"] ? (d(), de(m(Nn), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: O[1] || (O[1] = (R) => t("toggle"))
            })) : T("", !0)
          ]),
          $.$slots["clear-icon"] && e.inputValue && $.clearable && !$.disabled && !$.readonly ? (d(), w("span", E0, [
            ve($.$slots, "clear-icon", { clear: b })
          ])) : T("", !0),
          $.clearable && !$.$slots["clear-icon"] && e.inputValue && !$.disabled && !$.readonly ? (d(), de(m(Ql), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: O[3] || (O[3] = Me((R) => b(R), ["prevent"]))
          })) : T("", !0)
        ])) : T("", !0)
      ]);
    };
  }
}), R0 = typeof window < "u" ? window : void 0, Ha = () => {
}, L0 = (e) => Po() ? (Mo(e), !0) : !1, B0 = (e, n, a, t) => {
  if (!e) return Ha;
  let r = Ha;
  const l = De(
    () => m(e),
    (i) => {
      r(), i && (i.addEventListener(n, a, t), r = () => {
        i.removeEventListener(n, a, t), r = Ha;
      });
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    l(), r();
  };
  return L0(o), o;
}, H0 = (e, n, a, t = {}) => {
  const { window: r = R0, event: l = "pointerdown" } = t;
  return r ? B0(r, l, (o) => {
    const i = it(e), u = it(n);
    !i || !u || i === o.target || o.composedPath().includes(i) || o.composedPath().includes(u) || a(o);
  }, { passive: !0 }) : void 0;
}, Y0 = /* @__PURE__ */ Ae({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...ya
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = a, r = e, l = gn(), o = U(!1), i = jn(r, "modelValue"), u = jn(r, "timezone"), s = U(null), c = U(null), y = U(null), C = U(!1), _ = U(null), k = U(!1), h = U(!1), x = U(!1), D = U(!1), { setMenuFocused: g, setShiftKey: p } = co(), { clearArrowNav: A } = un(), { validateDate: G, isValidTime: P } = dn(r), {
      defaultedTransitions: V,
      defaultedTextInput: j,
      defaultedInline: W,
      defaultedConfig: N,
      defaultedRange: z,
      defaultedMultiDates: ae
    } = Qe(r), { menuTransition: ce, showTransition: B } = ta(V);
    Ue(() => {
      H(r.modelValue), je().then(() => {
        if (!W.value.enabled) {
          const ee = K(_.value);
          ee == null || ee.addEventListener("scroll", ue), window == null || window.addEventListener("resize", re);
        }
      }), W.value.enabled && (o.value = !0), window == null || window.addEventListener("keyup", Ne), window == null || window.addEventListener("keydown", Z);
    }), An(() => {
      if (!W.value.enabled) {
        const ee = K(_.value);
        ee == null || ee.removeEventListener("scroll", ue), window == null || window.removeEventListener("resize", re);
      }
      window == null || window.removeEventListener("keyup", Ne), window == null || window.removeEventListener("keydown", Z);
    });
    const b = St(l, "all", r.presetDates), I = St(l, "input");
    De(
      [i, u],
      () => {
        H(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: $, menuStyle: O, xCorrect: L, setMenuPosition: R, getScrollableParent: K, shadowRender: v } = O0({
      menuRef: s,
      menuRefInner: c,
      inputRef: y,
      pickerWrapperRef: _,
      inline: W,
      emit: t,
      props: r,
      slots: l
    }), {
      inputValue: F,
      internalModelValue: f,
      parseExternalModelValue: H,
      emitModelValue: Y,
      formatInputValue: S,
      checkBeforeEmit: oe
    } = bc(t, r, C), $e = E(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: W.value.enabled,
        "dp--flex-display-collapsed": x.value,
        dp__flex_display_with_input: W.value.input
      })
    ), X = E(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), ye = E(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: !r.teleport || W.value.enabled
    } : {}), M = E(() => ({ class: "dp__outer_menu_wrap" })), ne = E(() => W.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)), fe = () => {
      var ee, pe;
      return (pe = (ee = y.value) == null ? void 0 : ee.$el) == null ? void 0 : pe.getBoundingClientRect();
    }, ue = () => {
      o.value && (N.value.closeOnScroll ? ge() : R());
    }, re = () => {
      var ee;
      o.value && R();
      const pe = (ee = c.value) == null ? void 0 : ee.$el.getBoundingClientRect().width;
      x.value = document.body.offsetWidth <= pe;
    }, Ne = (ee) => {
      ee.key === "Tab" && !W.value.enabled && !r.teleport && N.value.tabOutClosesMenu && (_.value.contains(document.activeElement) || ge()), h.value = ee.shiftKey;
    }, Z = (ee) => {
      h.value = ee.shiftKey;
    }, he = () => {
      !r.disabled && !r.readonly && (v(el, r), R(!1), o.value = !0, o.value && t("open"), o.value || te(), H(r.modelValue));
    }, Se = () => {
      var ee;
      F.value = "", te(), (ee = y.value) == null || ee.setParsedDate(null), t("update:model-value", null), t("update:model-timezone-value", null), t("cleared"), N.value.closeOnClearValue && ge();
    }, Re = () => {
      const ee = f.value;
      return !ee || !Array.isArray(ee) && G(ee) ? !0 : Array.isArray(ee) ? ae.value.enabled || ee.length === 2 && G(ee[0]) && G(ee[1]) ? !0 : z.value.partialRange && !r.timePicker ? G(ee[0]) : !1 : !1;
    }, mt = () => {
      oe() && Re() ? (Y(), ge()) : t("invalid-select", f.value);
    }, Te = (ee) => {
      Mt(), Y(), N.value.closeOnAutoApply && !ee && ge();
    }, Mt = () => {
      y.value && j.value.enabled && y.value.setParsedDate(f.value);
    }, Dt = (ee = !1) => {
      r.autoApply && P(f.value) && Re() && (z.value.enabled && Array.isArray(f.value) ? (z.value.partialRange || f.value.length === 2) && Te(ee) : Te(ee));
    }, te = () => {
      j.value.enabled || (f.value = null);
    }, ge = () => {
      W.value.enabled || (o.value && (o.value = !1, L.value = !1, g(!1), p(!1), A(), t("closed"), F.value && H(i.value)), te(), t("blur"));
    }, He = (ee, pe, be = !1) => {
      if (!ee) {
        f.value = null;
        return;
      }
      const $t = Array.isArray(ee) ? !ee.some((cn) => !G(cn)) : G(ee), Ot = P(ee);
      $t && Ot && (D.value = !0, f.value = ee, pe && (k.value = be, mt(), t("text-submit")), je().then(() => {
        D.value = !1;
      }));
    }, ut = () => {
      r.autoApply && P(f.value) && Y(), Mt();
    }, rt = () => o.value ? ge() : he(), qe = (ee) => {
      f.value = ee;
    }, ot = () => {
      j.value.enabled && (C.value = !0, S()), t("focus");
    }, ze = () => {
      if (j.value.enabled && (C.value = !1, H(r.modelValue), k.value)) {
        const ee = Wd(_.value, h.value);
        ee == null || ee.focus();
      }
      t("blur");
    }, At = (ee) => {
      c.value && c.value.updateMonthYear(0, {
        month: Wr(ee.month),
        year: Wr(ee.year)
      });
    }, qt = (ee) => {
      H(ee ?? r.modelValue);
    }, Fn = (ee, pe) => {
      var be;
      (be = c.value) == null || be.switchView(ee, pe);
    }, Q = (ee) => N.value.onClickOutside ? N.value.onClickOutside(ee) : ge(), me = (ee = 0) => {
      var pe;
      (pe = c.value) == null || pe.handleFlow(ee);
    };
    return H0(s, y, () => Q(Re)), n({
      closeMenu: ge,
      selectDate: mt,
      clearValue: Se,
      openMenu: he,
      onScroll: ue,
      formatInputValue: S,
      // exposed for testing purposes
      updateInternalModelValue: qe,
      // modify internal modelValue
      setMonthYear: At,
      parseModel: qt,
      switchView: Fn,
      toggleMenu: rt,
      handleFlow: me
    }), (ee, pe) => (d(), w("div", {
      ref_key: "pickerWrapperRef",
      ref: _,
      class: le($e.value),
      "data-datepicker-instance": ""
    }, [
      Ce(V0, st({
        ref_key: "inputRef",
        ref: y,
        "input-value": m(F),
        "onUpdate:inputValue": pe[0] || (pe[0] = (be) => Or(F) ? F.value = be : null),
        "is-menu-open": o.value
      }, ee.$props, {
        onClear: Se,
        onOpen: he,
        onSetInputDate: He,
        onSetEmptyDate: m(Y),
        onSelectDate: mt,
        onToggle: rt,
        onClose: ge,
        onFocus: ot,
        onBlur: ze,
        onRealBlur: pe[1] || (pe[1] = (be) => C.value = !1)
      }), vt({ _: 2 }, [
        Pe(m(I), (be, $t) => ({
          name: be,
          fn: ie((Ot) => [
            ve(ee.$slots, be, ct(xt(Ot)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (d(), de(Jn(ee.teleport ? ma : "div"), ct(xt(ye.value)), {
        default: ie(() => [
          Ce(ln, {
            name: m(ce)(m($)),
            css: m(B) && !m(W).enabled
          }, {
            default: ie(() => [
              o.value ? (d(), w("div", st({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: s
              }, M.value, {
                class: { "dp--menu-wrapper": !m(W).enabled },
                style: m(W).enabled ? void 0 : m(O)
              }), [
                Ce(el, st({
                  ref_key: "dpMenuRef",
                  ref: c
                }, ee.$props, {
                  "internal-model-value": m(f),
                  "onUpdate:internalModelValue": pe[2] || (pe[2] = (be) => Or(f) ? f.value = be : null),
                  class: { [X.value]: !0, "dp--menu-wrapper": ee.teleport },
                  "open-on-top": m($),
                  "no-overlay-focus": ne.value,
                  collapse: x.value,
                  "get-input-rect": fe,
                  "is-text-input-date": D.value,
                  onClosePicker: ge,
                  onSelectDate: mt,
                  onAutoApply: Dt,
                  onTimeUpdate: ut,
                  onFlowStep: pe[3] || (pe[3] = (be) => ee.$emit("flow-step", be)),
                  onUpdateMonthYear: pe[4] || (pe[4] = (be) => ee.$emit("update-month-year", be)),
                  onInvalidSelect: pe[5] || (pe[5] = (be) => ee.$emit("invalid-select", m(f))),
                  onAutoApplyInvalid: pe[6] || (pe[6] = (be) => ee.$emit("invalid-select", be)),
                  onInvalidFixedRange: pe[7] || (pe[7] = (be) => ee.$emit("invalid-fixed-range", be)),
                  onRecalculatePosition: m(R),
                  onTooltipOpen: pe[8] || (pe[8] = (be) => ee.$emit("tooltip-open", be)),
                  onTooltipClose: pe[9] || (pe[9] = (be) => ee.$emit("tooltip-close", be)),
                  onTimePickerOpen: pe[10] || (pe[10] = (be) => ee.$emit("time-picker-open", be)),
                  onTimePickerClose: pe[11] || (pe[11] = (be) => ee.$emit("time-picker-close", be)),
                  onAmPmChange: pe[12] || (pe[12] = (be) => ee.$emit("am-pm-change", be)),
                  onRangeStart: pe[13] || (pe[13] = (be) => ee.$emit("range-start", be)),
                  onRangeEnd: pe[14] || (pe[14] = (be) => ee.$emit("range-end", be)),
                  onDateUpdate: pe[15] || (pe[15] = (be) => ee.$emit("date-update", be)),
                  onInvalidDate: pe[16] || (pe[16] = (be) => ee.$emit("invalid-date", be)),
                  onOverlayToggle: pe[17] || (pe[17] = (be) => ee.$emit("overlay-toggle", be))
                }), vt({ _: 2 }, [
                  Pe(m(b), (be, $t) => ({
                    name: be,
                    fn: ie((Ot) => [
                      ve(ee.$slots, be, ct(xt({ ...Ot })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : T("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), wr = /* @__PURE__ */ (() => {
  const e = Y0;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), j0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(j0).forEach(([e, n]) => {
  e !== "default" && (wr[e] = n);
});
const q0 = {
  key: 0,
  class: "required"
}, G0 = {
  key: 1,
  class: "left-text"
}, z0 = { key: 1 }, W0 = {
  slot: "end",
  class: "end-content-wrapper"
}, U0 = { key: 1 }, K0 = /* @__PURE__ */ Ae({
  __name: "DateInputField",
  props: {
    config: {},
    allFormValues: {},
    mode: {}
  },
  emits: ["update:value", "update:rawValue", "field-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(t.config.initialValue || t.config.value || ""), o = U(null), i = U(!1), u = U(["year", "month", "calendar"]), s = E(() => Object.prototype.hasOwnProperty.call(t.config, "icon") ? t.config.icon : As.calenderPrimary), c = E(() => Object.prototype.hasOwnProperty.call(t.config, "showTodayButton") ? t.config.showTodayButton : !1);
    De(
      () => t.config.initialValue || t.config.value,
      (j) => {
        j !== void 0 && (l.value = j);
      }
    );
    const y = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (j) {
          return console.warn("Disabled function error:", j), !1;
        }
      return !1;
    }), C = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (j) {
          return console.warn("Condition function error:", j), !1;
        }
      return !0;
    }), _ = E(() => {
      var j, W;
      return !C.value || y.value ? null : ((W = (j = t.config).validation) == null ? void 0 : W.call(j, l.value, t.allFormValues)) || null;
    }), k = E(() => y.value ? !1 : t.config.error || _.value !== null && i.value), h = (j) => sa.toStandardHisDisplayFormat(j), x = (j) => {
      var N, z;
      const W = h(j);
      l.value = W, o.value = j, i.value = !0, r("update:value", W), r("update:rawValue", j), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: W,
        rawValue: j,
        config: t.config
      }), (z = (N = t.config).onChange) == null || z.call(N, W, j);
    }, D = (j) => {
      var W, N;
      i.value = !0, (N = (W = t.config).onBlur) == null || N.call(W, l.value, j);
    }, g = (j) => {
      var W, N;
      i.value = !0, (N = (W = t.config).onInput) == null || N.call(W, l.value, j);
    }, p = (j) => {
      var W, N;
      (N = (W = t.config).onClick) == null || N.call(W, l.value, j);
    }, A = (j) => {
      var W, N;
      (N = (W = t.config).onActionClick) == null || N.call(W, l.value, j);
    }, G = () => {
      var N, z;
      const j = /* @__PURE__ */ new Date(), W = h(j);
      l.value = W, o.value = j, i.value = !0, r("update:value", W), r("update:rawValue", j), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: W,
        rawValue: j,
        config: t.config
      }), (z = (N = t.config).onChange) == null || z.call(N, W, j);
    };
    De(y, (j) => {
      j && l.value && (l.value = "", o.value = null);
    });
    const P = E(() => t.config.mode || t.mode || ""), V = E(() => P.value === "neonatal" || P.value === "card" ? "neonatal-style" : "");
    return n({
      getValue: () => l.value,
      getRawValue: () => o.value,
      setValue: (j) => l.value = j,
      setRawValue: (j) => o.value = j,
      isValid: E(() => y.value || _.value === null),
      validate: () => y.value ? null : (i.value = !0, _.value),
      shouldShow: C,
      markAsTouched: () => i.value = !0,
      resetTouched: () => i.value = !1
    }), (j, W) => {
      var N, z;
      return C.value ? (d(), w("div", {
        key: 0,
        class: le([V.value, { "has-padding": e.config.padding === "true" || e.config.padding === !0 }])
      }, [
        e.config.header ? (d(), w("h6", {
          key: 0,
          class: le(e.config.bold)
        }, [
          xe(J(e.config.header) + " ", 1),
          ((z = (N = e.config).validation) == null ? void 0 : z.call(N, "", e.allFormValues)) != null ? (d(), w("span", q0, "*")) : T("", !0)
        ], 2)) : T("", !0),
        q("div", {
          style: Ie({ width: e.config.width || "100%" })
        }, [
          Ce(m(wr), {
            onDateUpdate: x,
            "auto-apply": "",
            flow: u.value,
            teleport: "body",
            vertical: "",
            "enable-time-picker": !1,
            "auto-position": !0,
            "min-date": e.config.minDate,
            "max-date": "maxDate" in e.config ? e.config.maxDate : m(sa).sessionDate(),
            "prevent-min-max-navigation": ""
          }, {
            trigger: ie(() => [
              Ce(m(pa), {
                value: l.value,
                onIonBlur: D,
                onIonInput: g,
                onClick: p,
                fill: "outline",
                placeholder: e.config.placeholder,
                disabled: y.value,
                class: le(["custom-input", { error: k.value }]),
                style: Ie({
                  minHeight: (e.config.minHeight || 56) + "px",
                  "--placeholder-font-size": e.config.placeholderFontSize || "14px",
                  "--placeholder-font-weight": e.config.placeholderFontWeight || "600"
                })
              }, {
                default: ie(() => {
                  var ae;
                  return [
                    s.value || e.config.leftText ? (d(), de(m(kt), {
                      key: 0,
                      slot: "start",
                      class: "start-content"
                    }, {
                      default: ie(() => [
                        s.value ? (d(), de(m(Ve), {
                          key: 0,
                          icon: s.value
                        }, null, 8, ["icon"])) : T("", !0),
                        e.config.leftText ? (d(), w("span", G0, J(e.config.leftText), 1)) : T("", !0)
                      ]),
                      _: 1
                    })) : T("", !0),
                    e.config.unit || e.config.rightIcon ? (d(), de(m(kt), {
                      key: 1,
                      slot: "end",
                      class: "end-content"
                    }, {
                      default: ie(() => [
                        e.config.rightIcon ? (d(), de(m(Ve), {
                          key: 0,
                          icon: e.config.rightIcon
                        }, null, 8, ["icon"])) : T("", !0),
                        e.config.unit ? (d(), w("span", z0, J(e.config.unit), 1)) : T("", !0)
                      ]),
                      _: 1
                    })) : T("", !0),
                    (ae = e.config.actionButton) != null && ae.show ? (d(), de(m(nn), {
                      key: 2,
                      slot: "end",
                      onClick: A,
                      size: "small"
                    }, {
                      default: ie(() => [
                        e.config.actionButton.icon ? (d(), de(m(Ve), {
                          key: 0,
                          icon: e.config.actionButton.icon,
                          slot: "start"
                        }, null, 8, ["icon"])) : T("", !0),
                        xe(" " + J(e.config.actionButton.text), 1)
                      ]),
                      _: 1
                    })) : T("", !0),
                    q("div", W0, [
                      c.value ? (d(), de(m(nn), {
                        key: 0,
                        onClick: Me(G, ["stop"]),
                        class: "today-btn quick-action-btn",
                        fill: "clear"
                      }, {
                        default: ie(() => [...W[0] || (W[0] = [
                          xe(" Today ", -1)
                        ])]),
                        _: 1
                      })) : T("", !0),
                      e.config.unit || e.config.rightIcon ? (d(), de(m(kt), {
                        key: 1,
                        class: "end-content"
                      }, {
                        default: ie(() => [
                          e.config.rightIcon ? (d(), de(m(Ve), {
                            key: 0,
                            icon: e.config.rightIcon
                          }, null, 8, ["icon"])) : T("", !0),
                          e.config.unit ? (d(), w("span", U0, J(e.config.unit), 1)) : T("", !0)
                        ]),
                        _: 1
                      })) : T("", !0)
                    ])
                  ];
                }),
                _: 1
              }, 8, ["value", "placeholder", "disabled", "class", "style"])
            ]),
            _: 1
          }, 8, ["flow", "min-date", "max-date"]),
          _.value && i.value ? (d(), de(m(ht), {
            key: 0,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(_.value), 1)
            ]),
            _: 1
          })) : T("", !0)
        ], 4)
      ], 2)) : T("", !0);
    };
  }
}), X0 = /* @__PURE__ */ lt(K0, [["__scopeId", "data-v-cb13e77d"]]), Q0 = {
  key: 0,
  class: "required"
}, Z0 = { class: "datetime-input-wrapper" }, J0 = "", ef = /* @__PURE__ */ Ae({
  __name: "DateTimeInputField",
  props: {
    config: {},
    allFormValues: {},
    mode: {}
  },
  emits: ["update:value", "update:rawValue", "field-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = t.config.initialValue || t.config.value || sa.todayDateFormatted(), o = U(l), i = U(l || null), u = U(!1), s = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues || {});
        } catch (D) {
          return console.warn("Disabled function error:", D), !1;
        }
      return !1;
    }), c = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues || {});
        } catch (D) {
          return console.warn("Condition function error:", D), !1;
        }
      return !0;
    }), y = E(() => {
      var D, g;
      return !c.value || s.value ? null : ((g = (D = t.config).validation) == null ? void 0 : g.call(D, o.value)) || null;
    }), C = (D) => {
      var p, A, G;
      const g = (p = D == null ? void 0 : D.detail) == null ? void 0 : p.value;
      g && (o.value = g, i.value = g, u.value = !0, r("update:value", g), r("update:rawValue", g), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: g,
        rawValue: g,
        config: t.config
      }), (G = (A = t.config).onChange) == null || G.call(A, g, t.allFormValues));
    }, _ = () => {
      u.value = !0;
    }, k = E(() => t.config.mode || t.mode || ""), h = E(() => k.value === "neonatal" || k.value === "card" ? "neonatal-style" : ""), x = sa.todayDateFormatted();
    return De(
      () => t.config.initialValue || t.config.value,
      (D) => {
        D !== void 0 && D !== o.value && (o.value = D, i.value = D || null);
      }
    ), n({
      getValue: () => o.value,
      getRawValue: () => i.value,
      setValue: (D) => {
        o.value = D, i.value = D;
      },
      shouldShow: c,
      validate: () => s.value ? null : (u.value = !0, y.value),
      markAsTouched: () => {
        u.value = !0;
      },
      resetTouched: () => {
        u.value = !1;
      }
    }), (D, g) => {
      var p, A;
      return c.value ? (d(), w("div", {
        key: 0,
        class: le([h.value, { "has-padding": e.config.padding === "true" || e.config.padding === !0 }])
      }, [
        e.config.header ? (d(), w("h6", {
          key: 0,
          class: le(e.config.bold)
        }, [
          xe(J(e.config.header) + " ", 1),
          ((A = (p = e.config).validation) == null ? void 0 : A.call(p, "")) != null ? (d(), w("span", Q0, "*")) : T("", !0)
        ], 2)) : T("", !0),
        q("div", Z0, [
          Ce(m(Bo), {
            value: o.value,
            "display-format": e.config.displayFormat || "DD MMM, YYYY HH:mm",
            presentation: "date-time",
            "picker-options": e.config.pickerOptions,
            min: e.config.minDateTime || J0,
            max: e.config.maxDateTime || m(x),
            disabled: s.value,
            onIonChange: C,
            onIonBlur: _
          }, null, 8, ["value", "display-format", "picker-options", "min", "max", "disabled"])
        ]),
        y.value && u.value ? (d(), de(m(ht), {
          key: 1,
          class: "error-note"
        }, {
          default: ie(() => [
            xe(J(y.value), 1)
          ]),
          _: 1
        })) : T("", !0)
      ], 2)) : T("", !0);
    };
  }
}), tf = /* @__PURE__ */ lt(ef, [["__scopeId", "data-v-705d7178"]]), nf = {
  key: 0,
  class: "required"
}, af = {
  class: "input-trigger-wrapper",
  id: "time-input-trigger"
}, rf = {
  key: 1,
  class: "left-text"
}, lf = {
  slot: "end",
  class: "end-content-wrapper"
}, of = { key: 1 }, sf = { class: "popover-content" }, uf = { class: "popover-header" }, df = { class: "picker-main" }, cf = { class: "picker-columns" }, ff = { class: "column" }, vf = ["onClick"], hf = { class: "column" }, mf = ["onClick"], pf = { class: "column meridian" }, gf = ["onClick"], yf = { class: "popover-footer" }, $f = /* @__PURE__ */ Ae({
  __name: "TimeInputField",
  props: {
    config: {},
    allFormValues: {},
    mode: {}
  },
  emits: ["update:value", "update:rawValue", "field-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(t.config.initialValue || t.config.value || ""), o = U(!1), i = U(!1), u = U(null), s = U(t.config.initialHour || 6), c = U(t.config.initialMinute || 30), y = U(t.config.initialMeridian || "AM"), C = U(null), _ = U(null), k = U(null), h = Array.from({ length: 12 }, (K, v) => v + 1), x = Array.from({ length: 60 }, (K, v) => v), D = ["AM", "PM"];
    De(
      () => t.config.initialValue || t.config.value,
      (K) => {
        K !== void 0 && (l.value = K, V(K));
      }
    );
    const g = E(() => {
      if (typeof t.config.disabled == "boolean") return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch {
          return !1;
        }
      return !1;
    }), p = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch {
          return !1;
        }
      return !0;
    }), A = E(() => {
      var K, v;
      return !p.value || g.value ? null : ((v = (K = t.config).validation) == null ? void 0 : v.call(K, l.value, t.allFormValues)) || null;
    });
    E(() => g.value ? !1 : t.config.error || A.value !== null && o.value);
    const G = E(() => t.config.mode || t.mode || ""), P = E(() => G.value === "neonatal" || G.value === "card" ? "neonatal-style" : ""), V = (K) => {
      if (!K) return;
      const v = K.match(/(\d+):(\d+)\s*(AM|PM)/i);
      v && (s.value = parseInt(v[1]), c.value = parseInt(v[2]), y.value = v[3].toUpperCase(), je(N));
    }, j = () => `${s.value.toString().padStart(2, "0")}:${c.value.toString().padStart(2, "0")} ${y.value}`, W = () => {
      var F, f;
      const K = j();
      l.value = K, o.value = !0;
      const v = {
        hour: s.value,
        minute: c.value,
        meridian: y.value
      };
      r("update:value", K), r("update:rawValue", v), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: K,
        rawValue: v,
        config: t.config
      }), (f = (F = t.config).onChange) == null || f.call(F, K, v);
    }, N = () => {
      C.value && (C.value.scrollTop = h.indexOf(s.value) * 44), _.value && (_.value.scrollTop = x.indexOf(c.value) * 44), k.value && (k.value.scrollTop = D.indexOf(y.value) * 44);
    }, z = () => {
      if (!C.value) return;
      const K = Math.round(C.value.scrollTop / 44);
      K >= 0 && K < h.length && (s.value = h[K]);
    }, ae = () => {
      if (!_.value) return;
      const K = Math.round(_.value.scrollTop / 44);
      K >= 0 && K < x.length && (c.value = x[K]);
    }, ce = () => {
      if (!k.value) return;
      const K = Math.round(k.value.scrollTop / 44);
      K >= 0 && K < D.length && (y.value = D[K]);
    }, B = (K) => {
      s.value = K, N(), W();
    }, b = (K) => {
      c.value = K, N(), W();
    }, I = (K) => {
      y.value = K, N(), W();
    }, $ = (K) => {
      g.value || (u.value = K, i.value = !0);
    }, O = () => {
      je(N);
    }, L = () => {
      i.value = !1, o.value = !0, W();
    }, R = (K) => {
      K.stopPropagation();
      const v = /* @__PURE__ */ new Date();
      let F = v.getHours();
      const f = F >= 12 ? "PM" : "AM";
      F = F % 12 || 12, s.value = F, c.value = v.getMinutes(), y.value = f, W(), je(N);
    };
    return Ue(() => {
      l.value && V(l.value);
    }), n({
      getValue: () => l.value,
      getRawValue: () => ({
        hour: s.value,
        minute: c.value,
        meridian: y.value
      }),
      setValue: (K) => {
        l.value = K, V(K);
      },
      isValid: E(() => g.value || A.value === null),
      validate: () => g.value ? null : (o.value = !0, A.value),
      shouldShow: p,
      markAsTouched: () => o.value = !0,
      resetTouched: () => o.value = !1
    }), (K, v) => {
      var F, f;
      return p.value ? (d(), w("div", {
        key: 0,
        class: le(["time-field-container", [P.value, { "has-padding": e.config.padding === "true" || e.config.padding === !0 }]])
      }, [
        e.config.header ? (d(), w("h6", {
          key: 0,
          class: le(e.config.bold)
        }, [
          xe(J(e.config.header) + " ", 1),
          ((f = (F = e.config).validation) == null ? void 0 : f.call(F, "", e.allFormValues)) != null ? (d(), w("span", nf, "*")) : T("", !0)
        ], 2)) : T("", !0),
        q("div", {
          class: "picker-section",
          style: Ie({ width: e.config.width || "100%" })
        }, [
          q("div", af, [
            Ce(m(pa), {
              value: l.value,
              onClick: $,
              fill: "outline",
              placeholder: e.config.placeholder || "Select time",
              disabled: g.value,
              readonly: "",
              class: "custom-input",
              style: Ie({
                minHeight: (e.config.minHeight || 56) + "px",
                "--placeholder-font-size": e.config.placeholderFontSize || "14px",
                "--placeholder-font-weight": e.config.placeholderFontWeight || "600",
                "--color": "#000000",
                "--placeholder-color": "#666666"
              })
            }, {
              default: ie(() => [
                e.config.icon || e.config.leftText ? (d(), de(m(kt), {
                  key: 0,
                  slot: "start",
                  class: "start-content"
                }, {
                  default: ie(() => [
                    e.config.icon ? (d(), de(m(Ve), {
                      key: 0,
                      icon: e.config.icon
                    }, null, 8, ["icon"])) : T("", !0),
                    e.config.leftText ? (d(), w("span", rf, J(e.config.leftText), 1)) : T("", !0)
                  ]),
                  _: 1
                })) : T("", !0),
                q("div", lf, [
                  e.config.showNowButton ? (d(), de(m(nn), {
                    key: 0,
                    onClick: Me(R, ["stop"]),
                    class: "now-btn quick-action-btn",
                    fill: "clear"
                  }, {
                    default: ie(() => [...v[0] || (v[0] = [
                      xe(" Now ", -1)
                    ])]),
                    _: 1
                  })) : T("", !0),
                  e.config.unit || e.config.rightIcon ? (d(), de(m(kt), {
                    key: 1,
                    class: "end-content"
                  }, {
                    default: ie(() => [
                      e.config.rightIcon ? (d(), de(m(Ve), {
                        key: 0,
                        icon: e.config.rightIcon
                      }, null, 8, ["icon"])) : T("", !0),
                      e.config.unit ? (d(), w("span", of, J(e.config.unit), 1)) : T("", !0)
                    ]),
                    _: 1
                  })) : T("", !0)
                ])
              ]),
              _: 1
            }, 8, ["value", "placeholder", "disabled", "style"])
          ]),
          A.value && o.value ? (d(), de(m(ht), {
            key: 0,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(A.value), 1)
            ]),
            _: 1
          })) : T("", !0),
          Ce(m(Ho), {
            "is-open": i.value,
            event: u.value,
            onDidDismiss: L,
            onDidPresent: O,
            class: "time-picker-popover",
            "dismiss-on-select": !1,
            side: "bottom",
            alignment: "start"
          }, {
            default: ie(() => [
              q("div", sf, [
                q("div", uf, [
                  v[1] || (v[1] = q("span", null, "Select Time", -1)),
                  Ce(m(nn), {
                    fill: "clear",
                    onClick: L,
                    size: "small"
                  }, {
                    default: ie(() => [
                      Ce(m(Ve), {
                        icon: m(Zo),
                        slot: "icon-only"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                q("div", df, [
                  q("div", cf, [
                    q("div", ff, [
                      q("div", {
                        class: "scroll-container",
                        ref_key: "hoursScroll",
                        ref: C,
                        onScroll: z
                      }, [
                        v[2] || (v[2] = q("div", { class: "spacer" }, null, -1)),
                        (d(!0), w(ke, null, Pe(m(h), (H) => (d(), w("div", {
                          key: H,
                          class: le(["picker-item", { selected: H === s.value }]),
                          onClick: (Y) => B(H)
                        }, J(H.toString().padStart(2, "0")), 11, vf))), 128)),
                        v[3] || (v[3] = q("div", { class: "spacer" }, null, -1))
                      ], 544)
                    ]),
                    v[8] || (v[8] = q("div", { class: "separator" }, ":", -1)),
                    q("div", hf, [
                      q("div", {
                        class: "scroll-container",
                        ref_key: "minutesScroll",
                        ref: _,
                        onScroll: ae
                      }, [
                        v[4] || (v[4] = q("div", { class: "spacer" }, null, -1)),
                        (d(!0), w(ke, null, Pe(m(x), (H) => (d(), w("div", {
                          key: H,
                          class: le(["picker-item", { selected: H === c.value }]),
                          onClick: (Y) => b(H)
                        }, J(H.toString().padStart(2, "0")), 11, mf))), 128)),
                        v[5] || (v[5] = q("div", { class: "spacer" }, null, -1))
                      ], 544)
                    ]),
                    q("div", pf, [
                      q("div", {
                        class: "scroll-container",
                        ref_key: "meridianScroll",
                        ref: k,
                        onScroll: ce
                      }, [
                        v[6] || (v[6] = q("div", { class: "spacer" }, null, -1)),
                        (d(), w(ke, null, Pe(D, (H) => q("div", {
                          key: H,
                          class: le(["picker-item", { selected: H === y.value }]),
                          onClick: (Y) => I(H)
                        }, J(H), 11, gf)), 64)),
                        v[7] || (v[7] = q("div", { class: "spacer" }, null, -1))
                      ], 544)
                    ])
                  ]),
                  v[9] || (v[9] = q("div", { class: "selection-box" }, null, -1))
                ]),
                q("div", yf, [
                  Ce(m(nn), {
                    expand: "block",
                    onClick: L,
                    class: "done-button"
                  }, {
                    default: ie(() => [...v[10] || (v[10] = [
                      xe(" Done ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }, 8, ["is-open", "event"])
        ], 4)
      ], 2)) : T("", !0);
    };
  }
}), bf = /* @__PURE__ */ lt($f, [["__scopeId", "data-v-92900ffb"]]), wf = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, 0, [["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function kf(e, n) {
  var a = Array.prototype.slice.call(n);
  return a.push(wf), e.apply(this, a);
}
function tl(e, n) {
  e = e.split("-"), n = n.split("-");
  for (var a = e[0].split("."), t = n[0].split("."), r = 0; r < 3; r++) {
    var l = Number(a[r]), o = Number(t[r]);
    if (l > o) return 1;
    if (o > l) return -1;
    if (!isNaN(l) && isNaN(o)) return 1;
    if (isNaN(l) && !isNaN(o)) return -1;
  }
  return e[1] && n[1] ? e[1] > n[1] ? 1 : e[1] < n[1] ? -1 : 0 : !e[1] && n[1] ? 1 : e[1] && !n[1] ? -1 : 0;
}
var Cf = {}.constructor;
function xn(e) {
  return e != null && e.constructor === Cf;
}
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Mn(e);
}
function ka(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function xf(e, n) {
  for (var a = 0; a < n.length; a++) {
    var t = n[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, _f(t.key), t);
  }
}
function Ca(e, n, a) {
  return n && xf(e.prototype, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _f(e) {
  var n = Tf(e, "string");
  return Mn(n) == "symbol" ? n : n + "";
}
function Tf(e, n) {
  if (Mn(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Mn(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Df = "1.2.0", Sf = "1.7.35", nl = " ext. ", Of = /^\d+$/, yt = /* @__PURE__ */ function() {
  function e(n) {
    ka(this, e), yo(n), this.metadata = n, $o.call(this, n);
  }
  return Ca(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(a) {
        return a !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(a) {
      return this.metadata.countries[a];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(a) {
      return this.getCountryMetadata(a) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(a) {
      if (this.getCountryCodesForCallingCode(a))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[a])
          return !0;
      } else {
        var t = this.countryCallingCodes()[a];
        if (t && t.length === 1 && t[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(a) {
      return this.nonGeographic() ? !!this.nonGeographic()[a] : !this.getCountryCodesForCallingCode(a);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(a) {
      return this.selectNumberingPlan(a);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(a, t) {
      if (a && Of.test(a) && (t = a, a = null), a && a !== "001") {
        if (!this.hasCountry(a))
          throw new Error("Unknown country: ".concat(a));
        this.numberingPlan = new al(this.getCountryMetadata(a), this);
      } else if (t) {
        if (!this.hasCallingCode(t))
          throw new Error("Unknown calling code: ".concat(t));
        this.numberingPlan = new al(this.getNumberingPlanMetadata(t), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(a) {
      var t = this.countryCallingCodes()[a];
      if (t)
        return t.length === 1 && t[0].length === 3 ? void 0 : t;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(a) {
      var t = this.getCountryCodesForCallingCode(a);
      if (t)
        return t[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(a) {
      var t = this.getCountryCodeForCallingCode(a);
      if (t)
        return this.getCountryMetadata(t);
      if (this.nonGeographic()) {
        var r = this.nonGeographic()[a];
        if (r)
          return r;
      } else {
        var l = this.countryCallingCodes()[a];
        if (l && l.length === 1 && l[0] === "001")
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
    value: function(a) {
      return this.numberingPlan.type(a);
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
    value: function(a) {
      return this.selectNumberingPlan(a);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]);
}(), al = /* @__PURE__ */ function() {
  function e(n, a) {
    ka(this, e), this.globalMetadataObject = a, this.metadata = n, $o.call(this, a.metadata);
  }
  return Ca(e, [{
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
    value: function(a) {
      return a[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var a = this, t = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return t.map(function(r) {
        return new Pf(r, a);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(a) {
      return a[this.v1 ? 4 : this.v2 ? 5 : 6];
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
    value: function(a) {
      if (this.hasTypes() && rl(this.types(), a))
        return new Af(rl(this.types(), a), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? nl : this.metadata[13] || nl;
    }
  }]);
}(), Pf = /* @__PURE__ */ function() {
  function e(n, a) {
    ka(this, e), this._format = n, this.metadata = a;
  }
  return Ca(e, [{
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
      !Mf.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), Mf = /^\(?\$1\)?$/, Af = /* @__PURE__ */ function() {
  function e(n, a) {
    ka(this, e), this.type = n, this.metadata = a;
  }
  return Ca(e, [{
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
function rl(e, n) {
  switch (n) {
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
function yo(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!xn(e) || !xn(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(xn(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Nf(e) + ": " + e, "."));
}
var Nf = function(n) {
  return Mn(n);
};
function kr(e, n) {
  if (n = new yt(n), n.hasCountry(e))
    return n.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function Ff(e, n) {
  return n.countries.hasOwnProperty(e);
}
function $o(e) {
  var n = e.version;
  typeof n == "number" ? (this.v1 = n === 1, this.v2 = n === 2, this.v3 = n === 3, this.v4 = n === 4) : n ? tl(n, Df) === -1 ? this.v2 = !0 : tl(n, Sf) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function Cr(e, n, a) {
  return If(e, n, void 0, a);
}
function If(e, n, a, t) {
  n && (t = new yt(t.metadata), t.selectNumberingPlan(n));
  var r = t.type(a), l = r && r.possibleLengths() || t.possibleLengths();
  if (!l)
    return "IS_POSSIBLE";
  var o = e.length, i = l[0];
  return i === o ? "IS_POSSIBLE" : i > o ? "TOO_SHORT" : l[l.length - 1] < o ? "TOO_LONG" : l.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Ef(e, n, a) {
  if (n === void 0 && (n = {}), a = new yt(a), n.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    a.selectNumberingPlan(e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!a.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      a.selectNumberingPlan(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      a.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (a.possibleLengths())
    return bo(e.phone || e.nationalNumber, e.country, a);
  if (e.countryCallingCode && a.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function bo(e, n, a) {
  switch (Cr(e, n, a)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function Qt(e, n) {
  return e = e || "", new RegExp("^(?:" + n + ")$").test(e);
}
function Vf(e, n) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a) return (a = a.call(e)).next.bind(a);
  if (Array.isArray(e) || (a = Rf(e)) || n) {
    a && (e = a);
    var t = 0;
    return function() {
      return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rf(e, n) {
  if (e) {
    if (typeof e == "string") return ll(e, n);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? ll(e, n) : void 0;
  }
}
function ll(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = Array(n); a < n; a++) t[a] = e[a];
  return t;
}
var Lf = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function xr(e, n, a) {
  if (n = n || {}, !(!e.country && !e.countryCallingCode)) {
    a = new yt(a), a.selectNumberingPlan(e.country, e.countryCallingCode);
    var t = n.v2 ? e.nationalNumber : e.phone;
    if (Qt(t, a.nationalNumberPattern())) {
      if (Ya(t, "FIXED_LINE", a))
        return a.type("MOBILE") && a.type("MOBILE").pattern() === "" || !a.type("MOBILE") || Ya(t, "MOBILE", a) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var r = Vf(Lf), l; !(l = r()).done; ) {
        var o = l.value;
        if (Ya(t, o, a))
          return o;
      }
    }
  }
}
function Ya(e, n, a) {
  return n = a.type(n), !n || !n.pattern() || n.possibleLengths() && n.possibleLengths().indexOf(e.length) < 0 ? !1 : Qt(e, n.pattern());
}
function Bf(e, n, a) {
  if (n = n || {}, a = new yt(a), a.selectNumberingPlan(e.country, e.countryCallingCode), a.hasTypes())
    return xr(e, n, a.metadata) !== void 0;
  var t = n.v2 ? e.nationalNumber : e.phone;
  return Qt(t, a.nationalNumberPattern());
}
function Hf(e, n, a) {
  var t = new yt(a), r = t.getCountryCodesForCallingCode(e);
  return r ? r.filter(function(l) {
    return Yf(n, l, a);
  }) : [];
}
function Yf(e, n, a) {
  var t = new yt(a);
  return t.selectNumberingPlan(n), t.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var _r = 2, jf = 17, qf = 3, Rt = "0-9０-９٠-٩۰-۹", Gf = "-‐-―−ー－", zf = "／/", Wf = "．.", Uf = "  ­​⁠　", Kf = "()（）［］\\[\\]", Xf = "~⁓∼～", fa = "".concat(Gf).concat(zf).concat(Wf).concat(Uf).concat(Kf).concat(Xf), Tr = "+＋", Qf = new RegExp("([" + Rt + "])");
function Zf(e, n, a, t) {
  if (n) {
    var r = new yt(t);
    r.selectNumberingPlan(n, a);
    var l = new RegExp(r.IDDPrefix());
    if (e.search(l) === 0) {
      e = e.slice(e.match(l)[0].length);
      var o = e.match(Qf);
      if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0"))
        return e;
    }
  }
}
function Jf(e, n) {
  if (e && n.numberingPlan.nationalPrefixForParsing()) {
    var a = new RegExp("^(?:" + n.numberingPlan.nationalPrefixForParsing() + ")"), t = a.exec(e);
    if (t) {
      var r, l, o = t.length - 1, i = o > 0 && t[o];
      if (n.nationalPrefixTransformRule() && i)
        r = e.replace(a, n.nationalPrefixTransformRule()), o > 1 && (l = t[1]);
      else {
        var u = t[0];
        r = e.slice(u.length), i && (l = t[1]);
      }
      var s;
      if (i) {
        var c = e.indexOf(t[1]), y = e.slice(0, c);
        y === n.numberingPlan.nationalPrefix() && (s = n.numberingPlan.nationalPrefix());
      } else
        s = t[0];
      return {
        nationalNumber: r,
        nationalPrefix: s,
        carrierCode: l
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function e1(e, n) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a) return (a = a.call(e)).next.bind(a);
  if (Array.isArray(e) || (a = t1(e)) || n) {
    a && (e = a);
    var t = 0;
    return function() {
      return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function t1(e, n) {
  if (e) {
    if (typeof e == "string") return ol(e, n);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? ol(e, n) : void 0;
  }
}
function ol(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function n1(e, n) {
  var a = n.countries, t = n.metadata;
  t = new yt(t);
  for (var r = e1(a), l; !(l = r()).done; ) {
    var o = l.value;
    if (t.selectNumberingPlan(o), t.leadingDigits()) {
      if (e && e.search(t.leadingDigits()) === 0)
        return o;
    } else if (xr({
      phone: e,
      country: o
    }, void 0, t.metadata))
      return o;
  }
}
function wo(e, n) {
  var a = n.nationalNumber, t = n.metadata, r = t.getCountryCodesForCallingCode(e);
  if (r)
    return r.length === 1 ? r[0] : n1(a, {
      countries: r,
      metadata: t.metadata
    });
}
function Qa(e, n, a) {
  var t = Jf(e, a), r = t.carrierCode, l = t.nationalNumber;
  if (l !== e) {
    if (!a1(e, l, a))
      return {
        nationalNumber: e
      };
    if (a.numberingPlan.possibleLengths() && (n || (n = wo(a.numberingPlan.callingCode(), {
      nationalNumber: l,
      metadata: a
    })), !r1(l, n, a)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: l,
    carrierCode: r
  };
}
function a1(e, n, a) {
  return !(Qt(e, a.nationalNumberPattern()) && !Qt(n, a.nationalNumberPattern()));
}
function r1(e, n, a) {
  switch (Cr(e, n, a)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function l1(e, n, a, t, r) {
  var l = a ? kr(a, r) : t;
  if (e.indexOf(l) === 0) {
    r = new yt(r), r.selectNumberingPlan(a, l);
    var o = e.slice(l.length), i = Qa(o, n, r), u = i.nationalNumber, s = Qa(e, n, r), c = s.nationalNumber;
    if (!Qt(c, r.nationalNumberPattern()) && Qt(u, r.nationalNumberPattern()) || Cr(c, n, r) === "TOO_LONG")
      return {
        countryCallingCode: l,
        number: o
      };
  }
  return {
    number: e
  };
}
function ko(e, n, a, t, r) {
  if (!e)
    return {};
  var l;
  if (e[0] !== "+") {
    var o = Zf(e, a, t, r);
    if (o && o !== e)
      l = !0, e = "+" + o;
    else {
      if (a || t) {
        var i = l1(e, n, a, t, r), u = i.countryCallingCode, s = i.number;
        if (u)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: u,
            number: s
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
  r = new yt(r);
  for (var c = 2; c - 1 <= qf && c <= e.length; ) {
    var y = e.slice(1, c);
    if (r.hasCallingCode(y))
      return r.selectNumberingPlan(y), {
        countryCallingCodeSource: l ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: y,
        number: e.slice(c)
      };
    c++;
  }
  return {};
}
function o1(e) {
  return e.replace(new RegExp("[".concat(fa, "]+"), "g"), " ").trim();
}
var i1 = /(\$\d)/;
function s1(e, n, a) {
  var t = a.useInternationalFormat, r = a.withNationalPrefix, l = e.replace(new RegExp(n.pattern()), t ? n.internationalFormat() : (
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
    r && n.nationalPrefixFormattingRule() ? n.format().replace(i1, n.nationalPrefixFormattingRule()) : n.format()
  ));
  return t ? o1(l) : l;
}
var u1 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function d1(e, n, a) {
  var t = new yt(a);
  if (t.selectNumberingPlan(e, n), t.defaultIDDPrefix())
    return t.defaultIDDPrefix();
  if (u1.test(t.IDDPrefix()))
    return t.IDDPrefix();
}
var c1 = ";ext=", wn = function(n) {
  return "([".concat(Rt, "]{1,").concat(n, "})");
};
function Co(e) {
  var n = "20", a = "15", t = "9", r = "6", l = "[  \\t,]*", o = "[:\\.．]?[  \\t,-]*", i = "#?", u = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", s = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", y = "[  \\t]*", C = "(?:,{2}|;)", _ = c1 + wn(n), k = l + u + o + wn(n) + i, h = l + s + o + wn(t) + i, x = c + wn(r) + "#", D = y + C + o + wn(a) + i, g = y + "(?:,)+" + o + wn(t) + i;
  return _ + "|" + k + "|" + h + "|" + x + "|" + D + "|" + g;
}
var f1 = "[" + Rt + "]{" + _r + "}", v1 = "[" + Tr + "]{0,1}(?:[" + fa + "]*[" + Rt + "]){3,}[" + fa + Rt + "]*", h1 = new RegExp("^[" + Tr + "]{0,1}(?:[" + fa + "]*[" + Rt + "]){1,2}$", "i"), m1 = v1 + // Phone number extensions
"(?:" + Co() + ")?", p1 = new RegExp(
  // Either a short two-digit-only phone number
  "^" + f1 + "$|^" + m1 + "$",
  "i"
);
function g1(e) {
  return e.length >= _r && p1.test(e);
}
function y1(e) {
  return h1.test(e);
}
function $1(e) {
  var n = e.number, a = e.ext;
  if (!n)
    return "";
  if (n[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(n).concat(a ? ";ext=" + a : "");
}
var il = {
  formatExtension: function(n, a, t) {
    return "".concat(n).concat(t.ext()).concat(a);
  }
};
function b1(e, n, a, t) {
  if (a ? a = C1({}, il, a) : a = il, t = new yt(t), e.country && e.country !== "001") {
    if (!t.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    t.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    t.selectNumberingPlan(e.countryCallingCode);
  else return e.phone || "";
  var r = t.countryCallingCode(), l = a.v2 ? e.nationalNumber : e.phone, o;
  switch (n) {
    case "NATIONAL":
      return l ? (o = va(l, e.carrierCode, "NATIONAL", t, a), ja(o, e.ext, t, a.formatExtension)) : "";
    case "INTERNATIONAL":
      return l ? (o = va(l, null, "INTERNATIONAL", t, a), o = "+".concat(r, " ").concat(o), ja(o, e.ext, t, a.formatExtension)) : "+".concat(r);
    case "E.164":
      return "+".concat(r).concat(l);
    case "RFC3966":
      return $1({
        number: "+".concat(r).concat(l),
        ext: e.ext
      });
    case "IDD":
      if (!a.fromCountry)
        return;
      var i = k1(l, e.carrierCode, r, a.fromCountry, t);
      return ja(i, e.ext, t, a.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(n, '"'));
  }
}
function va(e, n, a, t, r) {
  var l = w1(t.formats(), e);
  return l ? s1(e, l, {
    useInternationalFormat: a === "INTERNATIONAL",
    withNationalPrefix: !(l.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && r && r.nationalPrefix === !1)
  }) : e;
}
function w1(e, n) {
  return x1(e, function(a) {
    if (a.leadingDigitsPatterns().length > 0) {
      var t = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
      if (n.search(t) !== 0)
        return !1;
    }
    return Qt(n, a.pattern());
  });
}
function ja(e, n, a, t) {
  return n ? t(e, n, a) : e;
}
function k1(e, n, a, t, r) {
  var l = kr(t, r.metadata);
  if (l === a) {
    var o = va(e, n, "NATIONAL", r);
    return a === "1" ? a + " " + o : o;
  }
  var i = d1(t, void 0, r.metadata);
  if (i)
    return "".concat(i, " ").concat(a, " ").concat(va(e, null, "INTERNATIONAL", r));
}
function C1() {
  for (var e = 1, n = arguments.length, a = new Array(n), t = 0; t < n; t++)
    a[t] = arguments[t];
  for (; e < a.length; ) {
    if (a[e])
      for (var r in a[e])
        a[0][r] = a[e][r];
    e++;
  }
  return a[0];
}
function x1(e, n) {
  for (var a = 0; a < e.length; ) {
    if (n(e[a]))
      return e[a];
    a++;
  }
}
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function sl(e, n) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function ul(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? sl(Object(a), !0).forEach(function(t) {
      _1(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : sl(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function _1(e, n, a) {
  return (n = xo(n)) in e ? Object.defineProperty(e, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = a, e;
}
function T1(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function D1(e, n) {
  for (var a = 0; a < n.length; a++) {
    var t = n[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, xo(t.key), t);
  }
}
function S1(e, n, a) {
  return n && D1(e.prototype, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xo(e) {
  var n = O1(e, "string");
  return Wn(n) == "symbol" ? n : n + "";
}
function O1(e, n) {
  if (Wn(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Wn(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var P1 = /* @__PURE__ */ function() {
  function e(n, a, t) {
    if (T1(this, e), !n)
      throw new TypeError("First argument is required");
    if (typeof n != "string")
      throw new TypeError("First argument must be a string");
    if (n[0] === "+" && !a)
      throw new TypeError("`metadata` argument not passed");
    if (xn(a) && xn(a.countries)) {
      t = a;
      var r = n;
      if (!N1.test(r))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var l = ko(r, void 0, void 0, void 0, t), o = l.countryCallingCode, i = l.number;
      if (a = i, n = o, !a)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!a)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof a != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    yo(t);
    var u = A1(n, t), s = u.country, c = u.countryCallingCode;
    this.country = s, this.countryCallingCode = c, this.nationalNumber = a, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return t;
    };
  }
  return S1(e, [{
    key: "setExt",
    value: function(a) {
      this.ext = a;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : Hf(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Ef(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return Bf(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var a = new yt(this.getMetadata());
      return a.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(a) {
      return this.number === a.number && this.ext === a.ext;
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
      return xr(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(a, t) {
      return b1(this, a, t ? ul(ul({}, t), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(a) {
      return this.format("NATIONAL", a);
    }
  }, {
    key: "formatInternational",
    value: function(a) {
      return this.format("INTERNATIONAL", a);
    }
  }, {
    key: "getURI",
    value: function(a) {
      return this.format("RFC3966", a);
    }
  }]);
}(), M1 = function(n) {
  return /^[A-Z]{2}$/.test(n);
};
function A1(e, n) {
  var a, t, r = new yt(n);
  return M1(e) ? (a = e, r.selectNumberingPlan(a), t = r.countryCallingCode()) : t = e, {
    country: a,
    countryCallingCode: t
  };
}
var N1 = /^\+\d+$/;
function Za(e) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Za(e);
}
function F1(e, n, a) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function I1(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function E1(e, n, a) {
  return n = Kn(n), V1(e, Dr() ? Reflect.construct(n, a || [], Kn(e).constructor) : n.apply(e, a));
}
function V1(e, n) {
  if (n && (Za(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return R1(e);
}
function R1(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function L1(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && Un(e, n);
}
function Ja(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ja = function(t) {
    if (t === null || !H1(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (n !== void 0) {
      if (n.has(t)) return n.get(t);
      n.set(t, r);
    }
    function r() {
      return B1(t, arguments, Kn(this).constructor);
    }
    return r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Un(r, t);
  }, Ja(e);
}
function B1(e, n, a) {
  if (Dr()) return Reflect.construct.apply(null, arguments);
  var t = [null];
  t.push.apply(t, n);
  var r = new (e.bind.apply(e, t))();
  return a && Un(r, a.prototype), r;
}
function Dr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dr = function() {
    return !!e;
  })();
}
function H1(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Un(e, n) {
  return Un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, t) {
    return a.__proto__ = t, a;
  }, Un(e, n);
}
function Kn(e) {
  return Kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Kn(e);
}
var Wt = /* @__PURE__ */ function(e) {
  function n(a) {
    var t;
    return I1(this, n), t = E1(this, n, [a]), Object.setPrototypeOf(t, n.prototype), t.name = t.constructor.name, t;
  }
  return L1(n, e), F1(n);
}(/* @__PURE__ */ Ja(Error)), dl = new RegExp("(?:" + Co() + ")$", "i");
function Y1(e) {
  var n = e.search(dl);
  if (n < 0)
    return {};
  for (var a = e.slice(0, n), t = e.match(dl), r = 1; r < t.length; ) {
    if (t[r])
      return {
        number: a,
        ext: t[r]
      };
    r++;
  }
}
var j1 = {
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
function q1(e) {
  return j1[e];
}
function G1(e, n) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a) return (a = a.call(e)).next.bind(a);
  if (Array.isArray(e) || (a = z1(e)) || n) {
    a && (e = a);
    var t = 0;
    return function() {
      return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z1(e, n) {
  if (e) {
    if (typeof e == "string") return cl(e, n);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? cl(e, n) : void 0;
  }
}
function cl(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function fl(e) {
  for (var n = "", a = G1(e.split("")), t; !(t = a()).done; ) {
    var r = t.value;
    n += W1(r, n) || "";
  }
  return n;
}
function W1(e, n, a) {
  return e === "+" ? n ? void 0 : "+" : q1(e);
}
var _o = "+", U1 = "[\\-\\.\\(\\)]?", vl = "([" + Rt + "]|" + U1 + ")", K1 = "^\\" + _o + vl + "*[" + Rt + "]" + vl + "*$", X1 = new RegExp(K1, "g"), er = Rt, Q1 = "[" + er + "]+((\\-)*[" + er + "])*", Z1 = "a-zA-Z", J1 = "[" + Z1 + "]+((\\-)*[" + er + "])*", ev = "^(" + Q1 + "\\.)*" + J1 + "\\.?$", tv = new RegExp(ev, "g"), hl = "tel:", tr = ";phone-context=", nv = ";isub=";
function av(e) {
  var n = e.indexOf(tr);
  if (n < 0)
    return null;
  var a = n + tr.length;
  if (a >= e.length)
    return "";
  var t = e.indexOf(";", a);
  return t >= 0 ? e.substring(a, t) : e.substring(a);
}
function rv(e) {
  return e === null ? !0 : e.length === 0 ? !1 : X1.test(e) || tv.test(e);
}
function lv(e, n) {
  var a = n.extractFormattedPhoneNumber, t = av(e);
  if (!rv(t))
    throw new Wt("NOT_A_NUMBER");
  var r;
  if (t === null)
    r = a(e) || "";
  else {
    r = "", t.charAt(0) === _o && (r += t);
    var l = e.indexOf(hl), o;
    l >= 0 ? o = l + hl.length : o = 0;
    var i = e.indexOf(tr);
    r += e.substring(o, i);
  }
  var u = r.indexOf(nv);
  if (u > 0 && (r = r.substring(0, u)), r !== "")
    return r;
}
var ov = 250, iv = new RegExp("[" + Tr + Rt + "]"), sv = new RegExp("[^" + Rt + "#]+$");
function uv(e, n, a) {
  if (n = n || {}, a = new yt(a), n.defaultCountry && !a.hasCountry(n.defaultCountry))
    throw n.v2 ? new Wt("INVALID_COUNTRY") : new Error("Unknown country: ".concat(n.defaultCountry));
  var t = cv(e, n.v2, n.extract), r = t.number, l = t.ext, o = t.error;
  if (!r) {
    if (n.v2)
      throw o === "TOO_SHORT" ? new Wt("TOO_SHORT") : new Wt("NOT_A_NUMBER");
    return {};
  }
  var i = vv(r, n.defaultCountry, n.defaultCallingCode, a), u = i.country, s = i.nationalNumber, c = i.countryCallingCode, y = i.countryCallingCodeSource, C = i.carrierCode;
  if (!a.hasSelectedNumberingPlan()) {
    if (n.v2)
      throw new Wt("INVALID_COUNTRY");
    return {};
  }
  if (!s || s.length < _r) {
    if (n.v2)
      throw new Wt("TOO_SHORT");
    return {};
  }
  if (s.length > jf) {
    if (n.v2)
      throw new Wt("TOO_LONG");
    return {};
  }
  if (n.v2) {
    var _ = new P1(c, s, a.metadata);
    return u && (_.country = u), C && (_.carrierCode = C), l && (_.ext = l), _.__countryCallingCodeSource = y, _;
  }
  var k = (n.extended ? a.hasSelectedNumberingPlan() : u) ? Qt(s, a.nationalNumberPattern()) : !1;
  return n.extended ? {
    country: u,
    countryCallingCode: c,
    carrierCode: C,
    valid: k,
    possible: k ? !0 : !!(n.extended === !0 && a.possibleLengths() && bo(s, u, a)),
    phone: s,
    ext: l
  } : k ? fv(u, s, l) : {};
}
function dv(e, n, a) {
  if (e) {
    if (e.length > ov) {
      if (a)
        throw new Wt("TOO_LONG");
      return;
    }
    if (n === !1)
      return e;
    var t = e.search(iv);
    if (!(t < 0))
      return e.slice(t).replace(sv, "");
  }
}
function cv(e, n, a) {
  var t = lv(e, {
    extractFormattedPhoneNumber: function(o) {
      return dv(o, a, n);
    }
  });
  if (!t)
    return {};
  if (!g1(t))
    return y1(t) ? {
      error: "TOO_SHORT"
    } : {};
  var r = Y1(t);
  return r.ext ? r : {
    number: t
  };
}
function fv(e, n, a) {
  var t = {
    country: e,
    phone: n
  };
  return a && (t.ext = a), t;
}
function vv(e, n, a, t) {
  var r = ko(fl(e), void 0, n, a, t.metadata), l = r.countryCallingCodeSource, o = r.countryCallingCode, i = r.number, u;
  if (o)
    t.selectNumberingPlan(o);
  else if (i && (n || a))
    t.selectNumberingPlan(n, a), n && (u = n), o = a || kr(n, t.metadata);
  else return {};
  if (!i)
    return {
      countryCallingCodeSource: l,
      countryCallingCode: o
    };
  var s = Qa(fl(i), u, t), c = s.nationalNumber, y = s.carrierCode, C = wo(o, {
    nationalNumber: c,
    metadata: t
  });
  return C && (u = C, C === "001" || t.selectNumberingPlan(u)), {
    country: u,
    countryCallingCode: o,
    countryCallingCodeSource: l,
    nationalNumber: c,
    carrierCode: y
  };
}
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function ml(e, n) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function pl(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ml(Object(a), !0).forEach(function(t) {
      hv(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ml(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function hv(e, n, a) {
  return (n = mv(n)) in e ? Object.defineProperty(e, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = a, e;
}
function mv(e) {
  var n = pv(e, "string");
  return Xn(n) == "symbol" ? n : n + "";
}
function pv(e, n) {
  if (Xn(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Xn(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function gv(e, n, a) {
  return uv(e, pl(pl({}, n), {}, {
    v2: !0
  }), a);
}
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function gl(e, n) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function yv(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? gl(Object(a), !0).forEach(function(t) {
      $v(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : gl(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function $v(e, n, a) {
  return (n = bv(n)) in e ? Object.defineProperty(e, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = a, e;
}
function bv(e) {
  var n = wv(e, "string");
  return Qn(n) == "symbol" ? n : n + "";
}
function wv(e, n) {
  if (Qn(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Qn(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function kv(e, n) {
  return Tv(e) || _v(e, n) || xv(e, n) || Cv();
}
function Cv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xv(e, n) {
  if (e) {
    if (typeof e == "string") return yl(e, n);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? yl(e, n) : void 0;
  }
}
function yl(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function _v(e, n) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var t, r, l, o, i = [], u = !0, s = !1;
    try {
      if (l = (a = a.call(e)).next, n !== 0) for (; !(u = (t = l.call(a)).done) && (i.push(t.value), i.length !== n); u = !0) ;
    } catch (c) {
      s = !0, r = c;
    } finally {
      try {
        if (!u && a.return != null && (o = a.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw r;
      }
    }
    return i;
  }
}
function Tv(e) {
  if (Array.isArray(e)) return e;
}
function Dv(e) {
  var n = Array.prototype.slice.call(e), a = kv(n, 4), t = a[0], r = a[1], l = a[2], o = a[3], i, u, s;
  if (typeof t == "string")
    i = t;
  else throw new TypeError("A text for parsing must be a string.");
  if (!r || typeof r == "string")
    o ? (u = l, s = o) : (u = void 0, s = l), r && (u = yv({
      defaultCountry: r
    }, u));
  else if (xn(r))
    l ? (u = r, s = l) : s = r;
  else throw new Error("Invalid second argument: ".concat(r));
  return {
    text: i,
    options: u,
    metadata: s
  };
}
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function $l(e, n) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function bl(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $l(Object(a), !0).forEach(function(t) {
      Sv(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : $l(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function Sv(e, n, a) {
  return (n = Ov(n)) in e ? Object.defineProperty(e, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = a, e;
}
function Ov(e) {
  var n = Pv(e, "string");
  return Zn(n) == "symbol" ? n : n + "";
}
function Pv(e, n) {
  if (Zn(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Zn(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Mv(e, n, a) {
  n && n.defaultCountry && !Ff(n.defaultCountry, a) && (n = bl(bl({}, n), {}, {
    defaultCountry: void 0
  }));
  try {
    return gv(e, n, a);
  } catch (t) {
    if (!(t instanceof Wt)) throw t;
  }
}
function Av() {
  var e = Dv(arguments), n = e.text, a = e.options, t = e.metadata;
  return Mv(n, a, t);
}
function qa() {
  return kf(Av, arguments);
}
const Nv = [
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
], Fv = Nv.map(([e, n, a, t = 0, r = null]) => ({
  name: e,
  iso2: n.toUpperCase(),
  dialCode: a,
  priority: t,
  areaCodes: r
}));
function Iv() {
  return fetch("https://ip2c.org/s").then((e) => e.text()).then((e) => {
    const n = (e || "").toString();
    if (!n || n[0] !== "1")
      throw new Error("unable to fetch the country");
    return n.substr(2, 2);
  });
}
function Ev(e, n) {
  if (e.setSelectionRange)
    e.focus(), e.setSelectionRange(n, n);
  else if ("createTextRange" in e && typeof e.createTextRange == "function") {
    const a = e.createTextRange();
    a.collapse(!0), a.moveEnd("character", n), a.moveStart("character", n), a.select();
  }
}
const Vv = [
  {
    name: "allCountries",
    type: Array,
    default: Fv,
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
], Rv = [...Vv].reduce((e, n) => {
  if (n.name.includes(".")) {
    const [a, t] = n.name.split(".");
    e[a] ? Object.assign(e[a], { [t]: n.default }) : Object.assign(e, { [a]: { [t]: n.default } });
  } else
    Object.assign(e, { [n.name]: n.default });
  return e;
}, {}), wl = {
  options: { ...Rv }
};
function bt(e) {
  const n = wl.options[e];
  return typeof n > "u" ? wl.options[e] : n;
}
function Ln(e) {
  return e == null ? void 0 : e.toLowerCase();
}
function Bn(e) {
  return e == null ? void 0 : e.toUpperCase();
}
const Lv = {
  beforeMount(e, n, a) {
    if (typeof n.value != "function") {
      const t = a.context.name;
      let r = `[Vue-click-outside:] provided expression ${n.expression} is not a function, but has to be`;
      t && (r += `Found in component ${t}`), console.warn(r);
    }
    e.clickOutsideEvent = function(t) {
      const r = t.composedPath ? t.composedPath() : t.path;
      e === t.target || e.contains(t.target) || r.includes(e) || n.value(t, e);
    }, document.body.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.body.removeEventListener("click", e.clickOutsideEvent);
  }
}, Bv = ["aria-expanded", "tabindex"], Hv = { class: "vti__selection" }, Yv = {
  key: 1,
  class: "vti__country-code"
}, jv = { class: "vti__dropdown-arrow" }, qv = {
  key: 0,
  class: "vti__search_box_container"
}, Gv = ["placeholder"], zv = ["onClick", "onMousemove", "aria-selected"], Wv = { key: 1 }, Uv = ["type", "autocomplete", "autofocus", "disabled", "id", "maxlength", "name", "placeholder", "readonly", "required", "tabindex", "value", "aria-describedby"], Kv = /* @__PURE__ */ Ae({
  name: "VueTelInput",
  directives: {
    clickOutside: Lv
  },
  __name: "vue-tel-input",
  props: /* @__PURE__ */ Mr({
    allCountries: {
      type: Array,
      default: () => bt("allCountries")
    },
    autoFormat: {
      type: Boolean,
      default: () => bt("autoFormat")
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: () => bt("customValidate")
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: [String, Number],
      default: () => bt("defaultCountry")
    },
    disabled: {
      type: Boolean,
      default: () => bt("disabled")
    },
    autoDefaultCountry: {
      type: Boolean,
      default: () => bt("autoDefaultCountry")
    },
    dropdownOptions: {
      type: Object,
      default: () => bt("dropdownOptions")
    },
    ignoredCountries: {
      type: Array,
      default: () => bt("ignoredCountries")
    },
    inputOptions: {
      type: Object,
      default: () => bt("inputOptions")
    },
    invalidMsg: {
      type: String,
      default: () => bt("invalidMsg")
    },
    mode: {
      type: String,
      default: () => bt("mode")
    },
    onlyCountries: {
      type: Array,
      default: () => bt("onlyCountries")
    },
    preferredCountries: {
      type: Array,
      default: () => bt("preferredCountries")
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => bt("validCharactersOnly")
    },
    styleClasses: {
      type: [String, Array, Object],
      default: () => bt("styleClasses")
    }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Mr([
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
  setup(e, { expose: n, emit: a }) {
    const t = _a(), r = _a(), l = _a(), o = a, i = e, u = No(e, "modelValue");
    De(u, (v, F) => {
      V() ? s.phone = v ?? "" : je(() => {
        s.phone = F ?? "", W();
      });
    });
    const s = sn({
      phone: "",
      activeCountryCode: void 0,
      open: !1,
      finishMounted: !1,
      selectedIndex: null,
      typeToFindInput: "",
      typeToFindTimer: void 0,
      dropdownOpenDirection: "below",
      parsedPlaceholder: i.inputOptions.placeholder,
      searchQuery: ""
    });
    De(() => s.open, (v) => {
      v ? (K(), o("open")) : o("close");
    });
    const c = E(() => i.onlyCountries.length ? i.allCountries.filter(({ iso2: v }) => i.onlyCountries.some((F) => Bn(F) === v)) : i.ignoredCountries.length ? i.allCountries.filter(
      ({ iso2: v }) => !i.ignoredCountries.includes(Bn(v)) && !i.ignoredCountries.includes(Ln(v))
    ) : i.allCountries), y = E(() => g(s.activeCountryCode));
    De(y, (v, F) => {
      if (!v && F != null && F.iso2) {
        s.activeCountryCode = F.iso2;
        return;
      }
      v != null && v.iso2 && o("country-changed", v);
    });
    const C = E(() => {
      var v;
      const F = Ln(i.mode);
      return F === "auto" ? (v = s.phone) != null && v.startsWith("+") ? "international" : "national" : ["national", "international", "e.164", "rfc3966", "idd"].includes(F) ? F : (console.error('Invalid value of prop "mode"'), "international");
    }), _ = E(() => {
      const v = [...D(i.preferredCountries).map((f) => ({ ...f, preferred: !0 })), ...c.value];
      if (!i.dropdownOptions.showSearchBox)
        return v;
      const F = s.searchQuery.toLowerCase().replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, "");
      return v.filter(
        (f) => new RegExp(F, "i").test(f.name) || new RegExp(F, "i").test(f.iso2) || new RegExp(F, "i").test(f.dialCode)
      );
    }), k = E(() => {
      var v;
      const F = s.phone.startsWith("+") ? qa(s.phone) : qa(s.phone, s.activeCountryCode), f = {
        country: F == null ? void 0 : F.country,
        countryCode: F == null ? void 0 : F.country,
        formatted: s.phone,
        valid: F == null ? void 0 : F.isValid(),
        possible: (v = F == null ? void 0 : F.isPossible) == null ? void 0 : v.call(F),
        nationalNumber: F == null ? void 0 : F.nationalNumber
      };
      return f.valid && (f.formatted = F == null ? void 0 : F.format(Bn(C.value))), F != null && F.country && (i.ignoredCountries.length || i.onlyCountries.length) && !g(F.country) && (f.valid = !1, f.possible = !1, F.country = null), F ? {
        ...f,
        ...F
      } : f;
    });
    De(() => k.value.countryCode, (v) => {
      v && (s.activeCountryCode = v);
    }), De(() => k.value.valid, () => {
      o("validate", k.value);
    }), De(() => k.value.formatted, (v) => {
      !i.autoFormat || i.customValidate || (N(v), je(() => {
        v && !u.value && (s.phone = v);
      }));
    }), De(() => i.inputOptions.placeholder, h), Ue(() => {
      u.value && (s.phone = u.value.trim()), P(), x().then(() => {
        var v;
        !s.phone && (v = i.inputOptions) != null && v.showDialCode && s.activeCountryCode && (s.phone = `+${s.activeCountryCode}`), o("validate", k.value);
      }).catch(console.error).then(() => {
        s.finishMounted = !0;
      });
    });
    function h() {
      s.parsedPlaceholder = i.inputOptions.placeholder;
    }
    function x() {
      return new Promise((v) => {
        var F;
        if (((F = s.phone) == null ? void 0 : F[0]) === "+") {
          v();
          return;
        }
        if (i.defaultCountry) {
          if (typeof i.defaultCountry == "string") {
            G(i.defaultCountry), v();
            return;
          }
          if (typeof i.defaultCountry == "number") {
            const H = p(i.defaultCountry);
            if (H) {
              G(H.iso2), v();
              return;
            }
          }
        }
        const f = i.preferredCountries[0] || c.value[0];
        i.autoDefaultCountry ? Iv().then((H) => {
          G(H || s.activeCountryCode);
        }).catch((H) => {
          console.warn(H), G(f);
        }).then(() => {
          v();
        }) : (G(f), v());
      });
    }
    function D(v = []) {
      return v.map(g).filter(Boolean);
    }
    function g(v = "") {
      return c.value.find((F) => F.iso2 === Bn(v));
    }
    function p(v) {
      return c.value.find((F) => Number(F.dialCode) === v);
    }
    function A(v, F) {
      const f = s.selectedIndex === v, H = v === i.preferredCountries.length - 1, Y = i.preferredCountries.some((S) => Bn(S) === F);
      return {
        highlighted: f,
        "last-preferred": H,
        preferred: Y
      };
    }
    function G(v) {
      var F, f, H;
      let Y = v;
      if (typeof Y == "string" && (Y = g(Y)), !!Y) {
        if (((F = s.phone) == null ? void 0 : F[0]) === "+" && Y.iso2 && k.value.nationalNumber) {
          s.activeCountryCode = Y.iso2, s.phone = ((f = qa(
            k.value.nationalNumber,
            Y.iso2
          )) == null ? void 0 : f.formatInternational()) ?? "";
          return;
        }
        if ((H = i.inputOptions) != null && H.showDialCode && Y) {
          s.phone = `+${Y.dialCode}`, s.activeCountryCode = Y.iso2;
          return;
        }
        s.activeCountryCode = Y.iso2, N(s.phone);
      }
    }
    function P() {
      const v = s.phone;
      if (i.validCharactersOnly) {
        const F = s.phone.match(/[()\-+0-9\s]*/g);
        s.phone = F.join("");
      }
      if (i.customValidate && i.customValidate instanceof RegExp) {
        const F = s.phone.match(i.customValidate);
        s.phone = F.join("");
      }
      v !== s.phone && N(s.phone);
    }
    function V() {
      return i.validCharactersOnly && !/^[()\-+0-9\s]*$/.test(s.phone) ? !1 : i.customValidate ? j() : !0;
    }
    function j() {
      return i.customValidate instanceof RegExp ? i.customValidate.test(s.phone) : !1;
    }
    function W() {
      var v;
      (v = l.value) == null || v.setCustomValidity(k.value.valid ? "" : i.invalidMsg), N(s.phone);
    }
    function N(v) {
      u.value = v, o("on-input", v, k.value, l.value);
    }
    function z(v) {
      o("blur", v);
    }
    function ae(v) {
      Ev(l.value, s.phone.length), o("focus", v);
    }
    function ce(v) {
      o("enter", v);
    }
    function B(v) {
      o("space", v);
    }
    function b() {
      var v;
      (v = l.value) == null || v.focus();
    }
    function I() {
      var v;
      (v = l.value) == null || v.blur();
    }
    function $() {
      i.disabled || i.dropdownOptions.disabled || (s.searchQuery = "", s.open = !s.open);
    }
    function O() {
      s.open = !1;
    }
    function L(v) {
      if (v.keyCode === 40) {
        v.preventDefault(), s.open = !0, s.selectedIndex === null ? s.selectedIndex = 0 : s.selectedIndex = Math.min(_.value.length - 1, s.selectedIndex + 1);
        const F = r.value.children[s.selectedIndex];
        F.focus(), F.offsetTop + F.clientHeight > r.value.scrollTop + r.value.clientHeight && (r.value.scrollTop = F.offsetTop - r.value.clientHeight + F.clientHeight);
      } else if (v.keyCode === 38) {
        v.preventDefault(), s.open = !0, s.selectedIndex === null ? s.selectedIndex = _.value.length - 1 : s.selectedIndex = Math.max(0, s.selectedIndex - 1);
        const F = r.value.children[s.selectedIndex];
        F.focus(), F.offsetTop < r.value.scrollTop && (r.value.scrollTop = F.offsetTop);
      } else if (v.keyCode === 13)
        s.selectedIndex !== null && G(_.value[s.selectedIndex]), s.open = !s.open;
      else if (s.open) {
        s.typeToFindInput += v.key, clearTimeout(s.typeToFindTimer), s.typeToFindTimer = setTimeout(() => {
          s.typeToFindInput = "";
        }, 700);
        const F = _.value.slice(i.preferredCountries.length).findIndex((f) => Ln(f.name).startsWith(s.typeToFindInput));
        if (F >= 0) {
          s.selectedIndex = i.preferredCountries.length + F;
          const f = r.value.children[s.selectedIndex], H = f.offsetTop < r.value.scrollTop, Y = f.offsetTop + f.clientHeight > r.value.scrollTop + r.value.clientHeight;
          (H || Y) && (r.value.scrollTop = f.offsetTop - r.value.clientHeight / 2);
        }
      }
    }
    function R() {
      s.selectedIndex = _.value.map((v) => v.iso2).indexOf(s.activeCountryCode), s.open = !1;
    }
    function K() {
      window.innerHeight - t.value.getBoundingClientRect().bottom > 200 ? s.dropdownOpenDirection = "below" : s.dropdownOpenDirection = "above";
    }
    return n({
      focus: b,
      blur: I
    }), (v, F) => {
      const f = Fo("click-outside");
      return d(), w("div", {
        ref_key: "refRoot",
        ref: t,
        class: le(["vue-tel-input", e.styleClasses, { disabled: e.disabled }])
      }, [
        Pt((d(), w("div", {
          "aria-label": "Country Code Selector",
          "aria-haspopup": "listbox",
          "aria-expanded": s.open,
          role: "button",
          class: le(["vti__dropdown", { open: s.open, disabled: e.dropdownOptions.disabled }]),
          tabindex: e.dropdownOptions.tabindex,
          onKeydown: [
            L,
            ft($, ["space"]),
            ft(R, ["esc"]),
            ft(R, ["tab"])
          ],
          onClick: $
        }, [
          q("span", Hv, [
            e.dropdownOptions.showFlags ? (d(), w("span", {
              key: 0,
              class: le(["vti__flag", m(Ln)(s.activeCountryCode)])
            }, null, 2)) : T("", !0),
            e.dropdownOptions.showDialCodeInSelection ? (d(), w("span", Yv, " +" + J(y.value && y.value.dialCode), 1)) : T("", !0),
            ve(v.$slots, "arrow-icon", {
              open: s.open
            }, () => [
              q("span", jv, J(s.open ? "▲" : "▼"), 1)
            ])
          ]),
          s.open ? (d(), w("ul", {
            key: 0,
            ref_key: "refList",
            ref: r,
            class: le(["vti__dropdown-list", s.dropdownOpenDirection]),
            role: "listbox"
          }, [
            e.dropdownOptions.showSearchBox ? (d(), w("div", qv, [
              ve(v.$slots, "search-icon"),
              Pt(q("input", {
                class: le(["vti__input", "vti__search_box"]),
                "aria-label": "Search by country name or country code",
                placeholder: e.dropdownOptions.searchBoxPlaceholder || (_.value.length ? _.value[0].name : ""),
                type: "text",
                "onUpdate:modelValue": F[0] || (F[0] = (H) => s.searchQuery = H),
                onClick: F[1] || (F[1] = Me(() => {
                }, ["stop"]))
              }, null, 8, Gv), [
                [Io, s.searchQuery]
              ])
            ])) : T("", !0),
            (d(!0), w(ke, null, Pe(_.value, (H, Y) => (d(), w("li", {
              role: "option",
              class: le(["vti__dropdown-item", A(Y, H.iso2)]),
              key: H.iso2 + (H.preferred ? "-preferred" : ""),
              tabindex: "-1",
              onClick: (S) => G(H),
              onMousemove: (S) => s.selectedIndex = Y,
              "aria-selected": s.activeCountryCode === H.iso2 && !H.preferred
            }, [
              e.dropdownOptions.showFlags ? (d(), w("span", {
                key: 0,
                class: le(["vti__flag", m(Ln)(H.iso2)])
              }, null, 2)) : T("", !0),
              q("strong", null, J(H.name), 1),
              e.dropdownOptions.showDialCodeInList ? (d(), w("span", Wv, " +" + J(H.dialCode), 1)) : T("", !0)
            ], 42, zv))), 128))
          ], 2)) : T("", !0)
        ], 42, Bv)), [
          [f, O]
        ]),
        Pt(q("input", {
          "onUpdate:modelValue": F[2] || (F[2] = (H) => s.phone = H),
          ref_key: "refInput",
          ref: l,
          type: e.inputOptions.type,
          autocomplete: e.inputOptions.autocomplete,
          autofocus: e.inputOptions.autofocus,
          class: le(["vti__input", "vti__phone", e.inputOptions.styleClasses]),
          disabled: e.disabled,
          id: e.inputOptions.id,
          maxlength: e.inputOptions.maxlength,
          name: e.inputOptions.name,
          placeholder: s.parsedPlaceholder,
          readonly: e.inputOptions.readonly,
          required: e.inputOptions.required,
          tabindex: e.inputOptions.tabindex,
          value: u.value,
          "aria-describedby": e.inputOptions["aria-describedby"],
          onBlur: z,
          onFocus: ae,
          onInput: W,
          onKeyup: [
            ft(ce, ["enter"]),
            ft(B, ["space"])
          ]
        }, null, 42, Uv), [
          [Eo, s.phone]
        ]),
        ve(v.$slots, "icon-right")
      ], 2);
    };
  }
}), Xv = { key: 0 }, Qv = {
  key: 0,
  class: "required"
}, Zv = /* @__PURE__ */ Ae({
  __name: "PhoneInputField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed", "country-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(t.config.initialValue || t.config.value || ""), o = U(!1), i = U({ dialCode: "265", iso2: "MW", name: "Malawi" }), u = (p) => {
      var A;
      if (p && typeof p == "object" && "target" in p) {
        const G = (A = p.target) == null ? void 0 : A.value;
        return String(G ?? "");
      }
      return String(p ?? "");
    }, s = (p) => {
      var A, G;
      return ((G = (A = t.config).normalizePhoneNumber) == null ? void 0 : G.call(A, p)) ?? p.replace(/^0+/, "");
    };
    De(
      l,
      (p) => {
        const A = u(p), G = s(A);
        G !== A && (l.value = G);
      },
      { immediate: !0 }
    );
    const c = E(() => ({
      phoneNumber: s(u(l.value)),
      countryCode: i.value.dialCode,
      countryIso: i.value.iso2,
      countryName: i.value.name
    }));
    De(
      () => t.config.initialValue || t.config.value,
      (p) => {
        p !== void 0 && (typeof p == "string" ? l.value = p : typeof p == "object" && p.phoneNumber && (l.value = p.phoneNumber, p.countryIso && (i.value = {
          dialCode: p.countryCode || i.value.dialCode,
          iso2: p.countryIso,
          name: p.countryName || i.value.name
        })));
      }
    );
    const y = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (p) {
          return console.warn("Disabled function error:", p), !1;
        }
      return !1;
    }), C = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (p) {
          return console.warn("Condition function error:", p), !1;
        }
      return !0;
    }), _ = E(() => {
      var p, A;
      return !C.value || y.value ? null : ((A = (p = t.config).validation) == null ? void 0 : A.call(p, c.value, t.allFormValues)) || null;
    }), k = E(() => y.value ? !1 : t.config.error || _.value !== null && o.value), h = (p) => {
      var A, G;
      o.value = !0, (G = (A = t.config).onBlur) == null || G.call(A, c.value, p);
    }, x = () => {
      o.value = !0;
    }, D = (p) => {
      var A, G;
      (G = (A = t.config).onClick) == null || G.call(A, c.value, p);
    }, g = (p) => {
      var A, G;
      i.value = p, r("country-changed", p), (G = (A = t.config).onCountryChanged) == null || G.call(A, p);
    };
    return De(y, (p) => {
      p && l.value && (l.value = "");
    }), De(
      c,
      (p) => {
        var A, G;
        (G = (A = t.config).onChange) == null || G.call(A, p), r("update:value", p), r("field-changed", {
          fieldName: t.config.name || t.config.header,
          value: p,
          config: t.config,
          country: i.value
        });
      },
      { deep: !0 }
    ), n({
      getValue: () => c.value,
      getPhoneObject: () => c.value,
      // Explicit method for object
      getPhoneNumber: () => l.value,
      // Method to get just the number
      setValue: (p) => {
        typeof p == "string" ? l.value = p : typeof p == "object" && p.phoneNumber && (l.value = p.phoneNumber);
      },
      getCountry: () => i.value,
      isValid: E(() => y.value || _.value === null),
      validate: () => y.value ? null : (o.value = !0, _.value),
      shouldShow: C,
      markAsTouched: () => o.value = !0,
      resetTouched: () => o.value = !1
    }), (p, A) => {
      var G, P;
      return C.value ? (d(), w("div", Xv, [
        e.config.header ? (d(), w("h6", {
          key: 0,
          class: le(e.config.bold)
        }, [
          xe(J(e.config.header) + " ", 1),
          ((P = (G = e.config).validation) == null ? void 0 : P.call(G, "", e.allFormValues)) != null ? (d(), w("span", Qv, "*")) : T("", !0)
        ], 2)) : T("", !0),
        q("div", {
          style: Ie({ width: e.config.width || "100%" })
        }, [
          Ce(m(Kv), {
            class: le(["custom-phone-input", { error: k.value }]),
            modelValue: l.value,
            "onUpdate:modelValue": A[0] || (A[0] = (V) => l.value = V),
            onInput: x,
            onBlur: h,
            onClick: D,
            onCountryChanged: g,
            placeholder: e.config.placeholder,
            disabled: y.value,
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
          _.value && o.value ? (d(), de(m(ht), {
            key: 0,
            class: "error-note"
          }, {
            default: ie(() => [
              xe(J(_.value), 1)
            ]),
            _: 1
          })) : T("", !0)
        ], 4)
      ])) : T("", !0);
    };
  }
}), Jv = /* @__PURE__ */ lt(Zv, [["__scopeId", "data-v-c6b2e2ff"]]), e2 = { key: 0 }, t2 = { class: "warning-title" }, n2 = { class: "warning-message" }, a2 = /* @__PURE__ */ Ae({
  __name: "Alert",
  props: {
    config: {},
    allFormValues: {}
  },
  setup(e) {
    const n = e, a = U(null), t = async () => {
      var r;
      if (n.config.condition && typeof n.config.condition == "function" && !((r = n.config) != null && r.removeConditionAlert))
        try {
          const l = await n.config.condition(n.allFormValues ?? []);
          a.value = l;
        } catch (l) {
          console.error("Error evaluating alert condition:", l), a.value = null;
        }
      else
        a.value = n.config;
    };
    return De(
      () => n.allFormValues,
      async () => {
        await t();
      },
      { deep: !0 }
    ), Ue(async () => {
      await t();
    }), (r, l) => a.value ? (d(), w("span", e2, [
      Ce(m(Tl), {
        style: Ie("margin-bottom:" + (e.config.noMargin ? "0px" : "10px") + "; width: 100%;")
      }, {
        default: ie(() => [
          q("div", {
            class: "alert-warning-box",
            style: Ie({
              backgroundColor: a.value.backgroundColor || e.config.backgroundColor || "#f0f0f0",
              borderColor: a.value.textColor || e.config.textColor || a.value.backgroundColor || e.config.backgroundColor || "#ccc",
              color: a.value.textColor || e.config.textColor || "#000"
            })
          }, [
            q("div", t2, [
              Ce(m(Ve), {
                icon: a.value.icon || e.config.icon,
                "aria-hidden": "true",
                class: "alert-icon",
                style: Ie({ color: a.value.textColor || e.config.textColor || "#000" })
              }, null, 8, ["icon", "style"]),
              xe(" " + J(a.value.index || e.config.index) + " ", 1),
              q("span", n2, J(a.value.value || a.value.message || e.config.value), 1),
              a.value.action ? (d(), de(m(nn), {
                key: 0,
                onClick: l[0] || (l[0] = (o) => a.value.action()),
                size: "small",
                color: a.value.actionColor || "primary",
                disabled: a.value.actionDisabled,
                style: { "margin-left": "10px" }
              }, {
                default: ie(() => [
                  xe(J(a.value.actionLabel || "Action"), 1)
                ]),
                _: 1
              }, 8, ["color", "disabled"])) : T("", !0)
            ])
          ], 4)
        ]),
        _: 1
      }, 8, ["style"])
    ])) : T("", !0);
  }
}), r2 = /* @__PURE__ */ lt(a2, [["__scopeId", "data-v-2b6470cf"]]), l2 = { class: "banner-content" }, o2 = {
  key: 0,
  class: "banner-icon-wrap"
}, i2 = ["src"], s2 = { class: "banner-text" }, u2 = {
  key: 0,
  class: "banner-title-skeleton shimmer"
}, d2 = {
  key: 0,
  class: "banner-title"
}, c2 = { class: "banner-message" }, f2 = /* @__PURE__ */ Ae({
  __name: "Banner",
  props: {
    config: {},
    allFormValues: {}
  },
  setup(e) {
    const n = e, a = U(null), t = async () => {
      if (n.config.condition && typeof n.config.condition == "function")
        try {
          const r = await n.config.condition(n.allFormValues ?? []);
          a.value = r;
        } catch (r) {
          console.error("Error evaluating banner condition:", r), a.value = null;
        }
      else
        a.value = n.config;
    };
    return De(
      () => n.allFormValues,
      async () => {
        await t();
      },
      { deep: !0 }
    ), De(
      () => n.config.condition,
      async () => {
        await t();
      }
    ), Ue(async () => {
      await t();
    }), (r, l) => a.value ? (d(), w("div", {
      key: 0,
      class: "standard-banner",
      style: Ie({
        backgroundColor: a.value.backgroundColor || e.config.backgroundColor || "#FEDF89",
        color: a.value.textColor || e.config.textColor || "#00190E",
        borderColor: a.value.borderColor || e.config.borderColor || "transparent",
        "margin-bottom": e.config.noMargin ? "0px" : "12px"
      })
    }, [
      q("div", l2, [
        a.value.iconSrc || e.config.iconSrc ? (d(), w("div", o2, [
          q("img", {
            src: a.value.iconSrc || e.config.iconSrc,
            alt: "",
            class: "banner-icon-image"
          }, null, 8, i2)
        ])) : T("", !0),
        q("div", s2, [
          a.value.loading || e.config.loading ? (d(), w(ke, { key: 0 }, [
            a.value.title || e.config.title ? (d(), w("div", u2)) : T("", !0),
            l[0] || (l[0] = q("div", { class: "banner-message-skeleton shimmer" }, null, -1))
          ], 64)) : (d(), w(ke, { key: 1 }, [
            a.value.title || e.config.title ? (d(), w("h4", d2, J(a.value.title || e.config.title), 1)) : T("", !0),
            q("p", c2, J(a.value.message || a.value.value || e.config.message || e.config.value), 1)
          ], 64))
        ])
      ])
    ], 4)) : T("", !0);
  }
}), v2 = /* @__PURE__ */ lt(f2, [["__scopeId", "data-v-47744a05"]]);
var nr = { name: "Toggle", emits: ["input", "update:modelValue", "change"], props: { value: { validator: function(e) {
  return (n) => ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
}, required: !1 }, modelValue: { validator: function(e) {
  return (n) => ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
}, required: !1 }, id: { type: [String, Number], required: !1, default: "toggle" }, name: { type: [String, Number], required: !1, default: "toggle" }, disabled: { type: Boolean, required: !1, default: !1 }, required: { type: Boolean, required: !1, default: !1 }, falseValue: { type: [String, Number, Boolean], required: !1, default: !1 }, trueValue: { type: [String, Number, Boolean], required: !1, default: !0 }, onLabel: { type: [String, Object], required: !1, default: "" }, offLabel: { type: [String, Object], required: !1, default: "" }, classes: { type: Object, required: !1, default: () => ({}) }, labelledby: { type: String, required: !1 }, describedby: { type: String, required: !1 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(e, n) {
  const a = function(o, i, u) {
    const { value: s, modelValue: c, falseValue: y, trueValue: C, disabled: _ } = ra(o), k = c && c.value !== void 0 ? c : s, h = E(() => k.value === C.value), x = (p) => {
      i.emit("input", p), i.emit("update:modelValue", p), i.emit("change", p);
    }, D = () => {
      x(C.value);
    }, g = () => {
      x(y.value);
    };
    return [null, void 0, !1, 0, "0", "off"].indexOf(k.value) !== -1 && [y.value, C.value].indexOf(k.value) === -1 && g(), [!0, 1, "1", "on"].indexOf(k.value) !== -1 && [y.value, C.value].indexOf(k.value) === -1 && D(), { externalValue: k, checked: h, update: x, check: D, uncheck: g, handleInput: (p) => {
      x(p.target.checked ? C.value : y.value);
    }, handleClick: () => {
      _.value || (h.value ? g() : D());
    } };
  }(e, n), t = function(o, i, u) {
    const { trueValue: s, falseValue: c, onLabel: y, offLabel: C } = ra(o), _ = u.checked, k = u.update;
    return { label: E(() => {
      let h = _.value ? y.value : C.value;
      return h || (h = "&nbsp;"), h;
    }), toggle: () => {
      k(_.value ? c.value : s.value);
    }, on: () => {
      k(s.value);
    }, off: () => {
      k(c.value);
    } };
  }(e, 0, { checked: a.checked, update: a.update }), r = function(o, i, u) {
    const s = ra(o), c = s.disabled, y = u.checked, C = E(() => ({ container: "toggle-container", toggle: "toggle", toggleOn: "toggle-on", toggleOff: "toggle-off", toggleOnDisabled: "toggle-on-disabled", toggleOffDisabled: "toggle-off-disabled", handle: "toggle-handle", handleOn: "toggle-handle-on", handleOff: "toggle-handle-off", handleOnDisabled: "toggle-handle-on-disabled", handleOffDisabled: "toggle-handle-off-disabled", label: "toggle-label", ...s.classes.value }));
    return { classList: E(() => ({ container: C.value.container, toggle: [C.value.toggle, c.value ? y.value ? C.value.toggleOnDisabled : C.value.toggleOffDisabled : y.value ? C.value.toggleOn : C.value.toggleOff], handle: [C.value.handle, c.value ? y.value ? C.value.handleOnDisabled : C.value.handleOffDisabled : y.value ? C.value.handleOn : C.value.handleOff], label: C.value.label })) };
  }(e, 0, { checked: a.checked }), l = function(o, i, u) {
    const { disabled: s } = ra(o), c = u.check, y = u.uncheck, C = u.checked;
    return { handleSpace: () => {
      s.value || (C.value ? y() : c());
    } };
  }(e, 0, { check: a.check, uncheck: a.uncheck, checked: a.checked });
  return { ...a, ...r, ...t, ...l };
} };
const h2 = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"], m2 = ["id", "name", "value", "checked", "disabled"], p2 = ["innerHTML"], g2 = ["checked"];
nr.render = function(e, n, a, t, r, l) {
  return d(), w("div", st({ class: e.classList.container, tabindex: a.disabled ? void 0 : 0, "aria-checked": e.checked, "aria-describedby": a.describedby, "aria-labelledby": a.labelledby, role: "switch" }, a.aria, { onKeypress: n[1] || (n[1] = ft(Me((...o) => e.handleSpace && e.handleSpace(...o), ["prevent"]), ["space"])) }), [Pt(q("input", { type: "checkbox", id: a.id, name: a.name, value: a.trueValue, checked: e.checked, disabled: a.disabled }, null, 8, m2), [[Ut, !1]]), q("div", { class: le(e.classList.toggle), onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o)) }, [q("span", { class: le(e.classList.handle) }, null, 2), ve(e.$slots, "label", { checked: e.checked, classList: e.classList }, () => [q("span", { class: le(e.classList.label), innerHTML: e.label }, null, 10, p2)]), a.required ? (d(), w("input", { key: 0, type: "checkbox", style: { appearance: "none", height: "1px", margin: "0", padding: "0", fontSize: "0", background: "transparent", position: "absolute", width: "100%", bottom: "0", outline: "none" }, checked: e.checked, "aria-hidden": "true", tabindex: "-1", required: "" }, null, 8, g2)) : T("v-if", !0)], 2)], 16, h2);
}, nr.__file = "src/Toggle.vue";
const y2 = { class: "switch-inline-row" }, $2 = { class: "switch-inline-labels" }, b2 = {
  key: 0,
  class: "switch-prefix"
}, w2 = { class: "switch-main-label" }, k2 = {
  key: 1,
  class: "required"
}, C2 = ["disabled"], x2 = {
  key: 2,
  class: "clear-section"
}, _2 = ["disabled"], T2 = /* @__PURE__ */ Ae({
  __name: "SwitchField",
  props: {
    config: {},
    allFormValues: {}
  },
  emits: ["update:value", "field-changed", "cleared"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(s()), o = U(!1), i = E(() => t.config.trueValue !== void 0 ? t.config.trueValue : !0), u = E(() => t.config.falseValue !== void 0 ? t.config.falseValue : !1);
    function s() {
      return t.config.initialValue !== void 0 ? t.config.initialValue : t.config.value !== void 0 ? t.config.value : null;
    }
    De(
      () => t.config.initialValue ?? t.config.value,
      (g) => {
        l.value = g ?? null;
      }
    );
    const c = E(() => {
      if (typeof t.config.disabled == "boolean") return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (g) {
          return console.warn("Disabled function error:", g), !1;
        }
      return !1;
    }), y = E(() => {
      if (typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (g) {
          return console.warn("Condition error:", g), !1;
        }
      return !0;
    }), C = E({
      get: () => l.value === i.value,
      set: (g) => {
        c.value || (o.value = !0, l.value = g ? i.value : t.config.allowClearToNull ? null : u.value, D());
      }
    }), _ = E(() => {
      var g, p;
      return !y.value || c.value ? null : ((p = (g = t.config).validation) == null ? void 0 : p.call(g, l.value, t.allFormValues)) || null;
    });
    E(() => c.value ? !1 : t.config.error || _.value !== null && o.value);
    const k = E(() => {
      var g, p;
      return ((p = (g = t.config).validation) == null ? void 0 : p.call(g, "", t.allFormValues)) != null;
    });
    function h(g) {
      var p, A;
      c.value || (o.value = !0, l.value = g ? i.value : t.config.allowClearToNull ? null : u.value, (A = (p = t.config).onBlur) == null || A.call(p, l.value, g));
    }
    function x() {
      var p, A;
      if (c.value) return;
      const g = l.value;
      l.value = null, o.value = !0, D(), r("cleared", {
        previousValue: g,
        fieldName: t.config.name || t.config.header,
        config: t.config
      }), (A = (p = t.config).onClear) == null || A.call(p, g);
    }
    function D() {
      const g = l.value;
      r("update:value", g), r("field-changed", {
        fieldName: t.config.name || t.config.header,
        value: g,
        config: t.config
      });
    }
    return De(c, (g) => {
      g && l.value !== null && (l.value = null, D());
    }), n({
      getValue: () => l.value,
      setValue: (g) => l.value = g,
      isValid: E(() => c.value || _.value === null),
      validate: () => c.value ? null : (o.value = !0, _.value),
      shouldShow: y,
      clearSelection: x,
      markAsTouched: () => o.value = !0,
      resetTouched: () => o.value = !1,
      hasSelection: E(() => l.value !== null),
      canClear: E(() => !c.value && l.value !== null)
    }), (g, p) => y.value ? (d(), w("div", {
      key: 0,
      class: "switch-field-wrapper",
      style: Ie({ width: e.config.width || "100%" })
    }, [
      q("div", y2, [
        Ce(m(nr), {
          class: "toggle-green",
          modelValue: C.value,
          "onUpdate:modelValue": p[0] || (p[0] = (A) => C.value = A),
          offLabel: e.config.offLabel || "No",
          onLabel: e.config.onLabel || "Yes",
          disabled: c.value,
          onChange: h
        }, null, 8, ["modelValue", "offLabel", "onLabel", "disabled"]),
        q("div", $2, [
          e.config.prefixText ? (d(), w("span", b2, " (" + J(e.config.prefixText) + ") ", 1)) : T("", !0),
          q("span", w2, J(e.config.label || e.config.header), 1),
          k.value ? (d(), w("span", k2, " * ")) : T("", !0)
        ]),
        e.config.showClearButton && l.value !== null ? (d(), w("button", {
          key: 0,
          type: "button",
          class: "clear-button-inline",
          onClick: x,
          disabled: c.value
        }, [
          Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"])
        ], 8, C2)) : T("", !0)
      ]),
      _.value && o.value ? (d(), de(m(ht), {
        key: 0,
        class: "error-note"
      }, {
        default: ie(() => [
          xe(J(_.value), 1)
        ]),
        _: 1
      })) : T("", !0),
      e.config.helperText && !_.value ? (d(), de(m(ht), {
        key: 1,
        class: "helper-note"
      }, {
        default: ie(() => [
          xe(J(e.config.helperText), 1)
        ]),
        _: 1
      })) : T("", !0),
      e.config.showClearButtonBottom && l.value !== null ? (d(), w("div", x2, [
        q("button", {
          type: "button",
          class: "clear-button-bottom",
          onClick: x,
          disabled: c.value
        }, [
          Ce(m(Ve), { icon: m(Gt) }, null, 8, ["icon"]),
          p[1] || (p[1] = xe(" Clear Selection ", -1))
        ], 8, _2)
      ])) : T("", !0)
    ], 4)) : T("", !0);
  }
}), D2 = /* @__PURE__ */ lt(T2, [["__scopeId", "data-v-ee99374c"]]), S2 = {
  key: 0,
  class: "required"
}, O2 = {
  key: 1,
  class: "selected-items-container"
}, P2 = { class: "item-label" }, M2 = ["onClick"], A2 = {
  key: 2,
  class: "selected-item single-chip"
}, N2 = { class: "item-label" }, F2 = { class: "dropdown-header" }, I2 = {
  key: 0,
  class: "loader-row"
}, E2 = {
  key: 1,
  class: "error-row"
}, V2 = ["onClick"], R2 = {
  key: 0,
  slot: "end",
  class: "checkmark"
}, L2 = {
  key: 0,
  class: "no-results"
}, B2 = {
  key: 3,
  class: "field-empty-state",
  "aria-live": "polite"
}, H2 = {
  key: 0,
  class: "field-empty-state-title"
}, Y2 = { class: "field-empty-state-message" }, j2 = /* @__PURE__ */ Ae({
  __name: "SearchableDropdown",
  props: {
    config: {},
    allFormValues: {},
    mode: {}
  },
  emits: ["update:value", "field-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = () => {
      const te = t.config.options;
      if (typeof te == "function")
        try {
          const ge = te(t.allFormValues);
          return Array.isArray(ge) ? ge : [];
        } catch (ge) {
          return console.warn("[SearchableDropdown] options() error:", ge), [];
        }
      return Array.isArray(te) ? te : [];
    }, l = a, o = U(null), i = U(null), u = U(""), s = U("");
    let c = null;
    const y = U(!1), C = U(!1), _ = U(null), k = U(null), h = U(null), x = U({
      top: "0px",
      left: "0px",
      width: "0px",
      position: "fixed"
    }), D = U(
      t.config.initialValue || t.config.value || null
    ), g = U(t.config.initialValue || t.config.value || []), p = U([...r()]), A = U(!1), G = U(null), P = U(1), V = E(() => t.config.pageSize || 40), j = U(!0), W = U([]), N = E(() => {
      if (typeof t.config.disabled == "boolean")
        return t.config.disabled;
      if (typeof t.config.disabled == "function")
        try {
          return t.config.disabled(t.allFormValues);
        } catch (te) {
          return console.warn("[SearchableDropdown] Disabled function error:", te), !1;
        }
      return !1;
    }), z = E(() => {
      if (t.config.condition && typeof t.config.condition == "function")
        try {
          return t.config.condition(t.allFormValues);
        } catch (te) {
          return console.warn("[SearchableDropdown] Condition function error:", te), !1;
        }
      return !0;
    }), ae = E(() => {
      var ge, He;
      if (!z.value || N.value) return null;
      const te = t.config.multiple ? g.value : D.value;
      return ((He = (ge = t.config).validation) == null ? void 0 : He.call(ge, te, t.allFormValues)) || null;
    }), ce = E(() => t.config.multiple ? g.value.length > 0 : !!D.value), B = E(() => {
      var te;
      return !((te = t.config.emptyState) != null && te.message) || !z.value || N.value ? !1 : !ce.value;
    }), b = E(() => u.value.trim()), I = E(
      () => t.config.allowCustomOption === !0 && b.value.length > 0 && !A.value && !G.value && p.value.length === 0
    ), $ = E(() => {
      if (!t.config.allowCustomOption || !b.value) return "No results found.";
      const te = t.config.customOptionUnavailableLabel || "is not available";
      return `“${b.value}” ${te}.`;
    }), O = E(() => t.config.mode || t.mode || ""), L = E(() => O.value === "card" || O.value === "neonatal" ? "neonatal-style" : ""), R = E(() => typeof t.config.onSearchChange == "function"), K = (te) => te == null ? "" : String(te).toLowerCase(), v = E(() => {
      const te = t.config.exclusiveValues || [];
      return new Set(te.map((ge) => K(ge)));
    }), F = (te) => {
      var ge;
      return t.config.multiple ? g.value.some((He) => He.value === te.value) : ((ge = D.value) == null ? void 0 : ge.value) === te.value;
    }, f = () => {
      je(() => {
        if (oe(), _.value) {
          Sl(_.value);
          const te = new CustomEvent("dropdown-opened", {
            bubbles: !0,
            composed: !0,
            detail: { element: _.value }
          });
          _.value.dispatchEvent(te);
        }
      });
    }, H = () => {
      y.value || (y.value = !0, f()), R.value && W.value.length === 0 && !A.value && re({ reset: !0 });
    }, Y = () => {
      y.value = !1;
    }, S = U(!1), oe = () => {
      if (!_.value) return;
      const te = _.value.getBoundingClientRect();
      x.value = {
        position: "fixed",
        top: `${te.bottom + 6}px`,
        left: `${te.left}px`,
        width: `${te.width}px`,
        zIndex: "20000"
      };
    }, $e = () => {
      y.value && oe();
    }, X = async () => {
      var He, ut, rt, qe, ot, ze, At;
      await je();
      const te = i.value, ge = (te == null ? void 0 : te.$el) ?? te;
      try {
        ge != null && ge.setFocus && await ge.setFocus(), await new Promise((Fn) => requestAnimationFrame(() => Fn()));
        const qt = await ((rt = (He = ge == null ? void 0 : ge.getInputElement) == null ? void 0 : (ut = He.call(ge)).catch) == null ? void 0 : rt.call(ut, () => null)) ?? ((ot = (qe = ge == null ? void 0 : ge.shadowRoot) == null ? void 0 : qe.querySelector) == null ? void 0 : ot.call(qe, "input")) ?? ((ze = ge == null ? void 0 : ge.querySelector) == null ? void 0 : ze.call(ge, "input"));
        qt && typeof qt.select == "function" && (typeof qt.focus == "function" && qt.focus(), qt.select());
      } catch {
        try {
          await ((At = ge == null ? void 0 : ge.setFocus) == null ? void 0 : At.call(ge));
        } catch {
        }
      }
    }, ye = () => {
      if (!N.value) {
        if (C.value = !0, y.value) {
          S.value = !0, Y();
          return;
        }
        H();
      }
    }, M = () => {
      if (!N.value) {
        if (C.value = !0, S.value) {
          S.value = !1;
          return;
        }
        H();
      }
    }, ne = () => {
      if (y.value || H(), R.value) return;
      const te = u.value.toLowerCase().trim(), ge = r();
      p.value = te ? ge.filter((He) => He.label.toLowerCase().includes(te)) : [...ge];
    }, fe = (te) => te ? Array.isArray(te) ? te : Array.isArray(te == null ? void 0 : te.results) ? te.results : Array.isArray(te == null ? void 0 : te.data) ? te.data : Array.isArray(te == null ? void 0 : te.records) ? te.records : [] : [], ue = (te) => {
      if (!te) return null;
      if (typeof (te == null ? void 0 : te.label) == "string" && (te == null ? void 0 : te.value) !== void 0) return te;
      const ge = (te == null ? void 0 : te.name) ?? (te == null ? void 0 : te.title) ?? (te == null ? void 0 : te.label) ?? (te == null ? void 0 : te.concept_name), He = typeof ge == "string" ? ge.trim() : "";
      return He ? { label: He, value: (te == null ? void 0 : te.value) ?? He, ...te } : null;
    }, re = async (te) => {
      var ge, He;
      if (R.value)
        try {
          if (te != null && te.reset && (P.value = 1, W.value = [], j.value = !0, G.value = null), !j.value) return;
          A.value = !0, G.value = null;
          const ut = await ((He = (ge = t.config).onSearchChange) == null ? void 0 : He.call(ge, s.value || "", P.value, V.value)), rt = fe(ut).map(ue).filter((ze) => !!ze);
          rt.length < V.value && (j.value = !1);
          const qe = new Set(W.value.map((ze) => String(ze.value))), ot = [...W.value];
          rt.forEach((ze) => {
            const At = String(ze.value);
            qe.has(At) || (qe.add(At), ot.push(ze));
          }), W.value = ot, p.value = [...W.value];
        } catch {
          G.value = "Failed to load options.", j.value = !1;
        } finally {
          A.value = !1;
        }
    }, Ne = async () => {
      R.value && (!j.value || A.value || (P.value += 1, await re()));
    }, Z = async (te) => {
      if (!R.value || !j.value || A.value) return;
      const ge = te.target;
      if (!ge) return;
      ge.scrollTop + ge.clientHeight >= ge.scrollHeight - 60 && await Ne();
    }, he = (te) => {
      if (t.config.multiple) {
        const ge = K(te.value);
        if (v.value.has(ge)) {
          g.value.some(
            (ot) => K(ot.value) === ge
          ) ? g.value = g.value.filter(
            (ot) => K(ot.value) !== ge
          ) : g.value = [te], X();
          return;
        }
        g.value.some(
          (qe) => v.value.has(K(qe.value))
        ) && (g.value = g.value.filter(
          (qe) => !v.value.has(K(qe.value))
        ));
        const rt = g.value.findIndex((qe) => qe.value === te.value);
        if (rt > -1) {
          const qe = [...g.value];
          qe.splice(rt, 1), g.value = qe;
        } else
          g.value = [...g.value, te];
        X();
        return;
      }
      D.value = te, Y(), u.value = "", R.value ? (s.value = "", P.value = 1, j.value = !0, G.value = null, W.value = [], p.value = []) : p.value = [...r()], S.value = !0, X();
    }, Se = () => {
      if (!I.value) return;
      const te = b.value;
      he({ label: te, value: te, isCustom: !0 }), u.value = "", s.value = "", W.value = [], p.value = [], P.value = 1, j.value = !0, G.value = null, Y();
    }, Re = (te) => {
      t.config.multiple && (g.value = g.value.filter((ge) => ge.value !== te.value));
    }, mt = () => {
      D.value = null;
    }, Te = (te) => {
      const ge = o.value;
      if (!ge) return !1;
      const He = te, ut = typeof He.composedPath == "function" ? He.composedPath() : [];
      if (ut.length) {
        const ot = h.value;
        return ut.includes(ge) || (ot ? ut.includes(ot) : !1);
      }
      const rt = te.target;
      if (!rt) return !1;
      if (ge.contains(rt)) return !0;
      const qe = h.value;
      return !!qe && qe.contains(rt);
    }, Mt = (te) => {
      y.value && (Te(te) || Y());
    }, Dt = (te) => {
      te.key === "Escape" && y.value && Y();
    };
    return Ue(() => {
      document.addEventListener("pointerdown", Mt, !0), document.addEventListener("keydown", Dt), window.addEventListener("resize", $e), window.addEventListener("scroll", $e, !0);
    }), An(() => {
      document.removeEventListener("pointerdown", Mt, !0), document.removeEventListener("keydown", Dt), window.removeEventListener("resize", $e), window.removeEventListener("scroll", $e, !0);
    }), De(
      () => [t.config.options, t.allFormValues],
      () => {
        R.value || (p.value = [...r()]);
      },
      { deep: !0, immediate: !0 }
    ), De(
      u,
      (te) => {
        c && clearTimeout(c), c = setTimeout(() => {
          s.value = te.toLowerCase().trim();
        }, 250);
      },
      { immediate: !0 }
    ), De(s, () => {
      R.value && re({ reset: !0 });
    }), De(y, (te) => {
      te && je(() => oe());
    }), De(D, (te) => {
      t.config.multiple || (l("update:value", te), l("field-changed", {
        fieldName: t.config.name || t.config.header || "",
        value: te,
        config: t.config,
        newValue: te
      }));
    }), De(
      g,
      (te) => {
        t.config.multiple && (l("update:value", te), l("field-changed", {
          fieldName: t.config.name || t.config.header || "",
          value: te,
          config: t.config
        }));
      },
      { deep: !0 }
    ), n({
      getValue: () => t.config.multiple ? g.value : D.value,
      setValue: (te) => {
        t.config.multiple ? g.value = te || [] : D.value = te || null;
      },
      isValid: E(() => N.value || ae.value === null),
      validate: () => N.value ? null : (C.value = !0, ae.value),
      shouldShow: z,
      markAsTouched: () => {
        C.value = !0;
      },
      resetTouched: () => {
        C.value = !1;
      }
    }), (te, ge) => {
      var ut, rt, qe, ot;
      const He = _l("ion-button");
      return d(), w("div", {
        ref_key: "rootRef",
        ref: o,
        class: le(["searchable-dropdown-wrapper", [L.value, { "has-padding": e.config.padding === "true" || e.config.padding === !0 }]])
      }, [
        e.config.header ? (d(), w("h6", {
          key: 0,
          class: le({ "is-bold": e.config.bold })
        }, [
          xe(J(e.config.header) + " ", 1),
          ((rt = (ut = e.config).validation) == null ? void 0 : rt.call(ut, "", e.allFormValues)) != null ? (d(), w("span", S2, "*")) : T("", !0)
        ], 2)) : T("", !0),
        e.config.multiple && g.value.length > 0 ? (d(), w("div", O2, [
          (d(!0), w(ke, null, Pe(g.value, (ze) => (d(), w("div", {
            key: ze.value,
            class: "selected-item chip"
          }, [
            q("span", P2, J(ze.label), 1),
            q("button", {
              onClick: (At) => Re(ze),
              class: "delete-btn",
              type: "button",
              "aria-label": "Remove item"
            }, [
              Ce(m(Ve), {
                icon: m(Ir),
                class: "remove-icon"
              }, null, 8, ["icon"])
            ], 8, M2)
          ]))), 128))
        ])) : T("", !0),
        !e.config.multiple && D.value ? (d(), w("div", A2, [
          q("span", N2, J(D.value.label), 1),
          q("button", {
            onClick: mt,
            class: "delete-btn",
            type: "button",
            "aria-label": "Remove item"
          }, [
            Ce(m(Ve), {
              icon: m(Ir),
              class: "remove-icon"
            }, null, 8, ["icon"])
          ])
        ])) : T("", !0),
        q("div", {
          class: "search-wrapper",
          ref_key: "searchWrapperRef",
          ref: _
        }, [
          q("div", {
            class: "search-input-area",
            onPointerdown: Me(ye, ["stop"])
          }, [
            Ce(m(pa), {
              ref_key: "ionInputRef",
              ref: i,
              modelValue: u.value,
              "onUpdate:modelValue": ge[0] || (ge[0] = (ze) => u.value = ze),
              placeholder: e.config.placeholder || "Search",
              type: "text",
              class: "search-input",
              onIonInput: ne,
              onIonFocus: M,
              disabled: N.value,
              fill: "outline"
            }, {
              default: ie(() => [
                Ce(m(kt), {
                  slot: "start",
                  class: "start-content"
                }, {
                  default: ie(() => [
                    Ce(m(Ve), {
                      icon: m(ei),
                      class: "search-icon"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                I.value ? (d(), de(He, {
                  key: 0,
                  slot: "end",
                  type: "button",
                  size: "small",
                  class: "add-custom-option-button",
                  onPointerdown: Me(Se, ["stop", "prevent"]),
                  onClick: Me(Se, ["stop", "prevent"])
                }, {
                  default: ie(() => [
                    Ce(m(Ve), {
                      icon: m(Uo),
                      slot: "start"
                    }, null, 8, ["icon"]),
                    xe(" " + J(e.config.customOptionButtonLabel || "Add"), 1)
                  ]),
                  _: 1
                })) : T("", !0)
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder", "disabled"])
          ], 32),
          A.value && y.value ? (d(), de(m(Yo), {
            key: 0,
            type: "indeterminate",
            class: "loading-progress-bar"
          })) : T("", !0),
          (d(), de(ma, { to: "body" }, [
            y.value ? (d(), w("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: h,
              class: "dropdown-container",
              style: Ie(x.value)
            }, [
              q("div", F2, J(e.config.dropdownHeader || "Select ONE"), 1),
              q("div", {
                class: "dropdown-list",
                ref_key: "dropdownListRef",
                ref: k,
                onScrollPassive: Z
              }, [
                A.value && !p.value.length ? (d(), w("div", I2, [...ge[1] || (ge[1] = [
                  q("span", { class: "loader-text" }, "Loading options...", -1)
                ])])) : T("", !0),
                G.value ? (d(), w("div", E2, J(G.value), 1)) : T("", !0),
                (d(!0), w(ke, null, Pe(p.value, (ze) => (d(), w("div", {
                  key: ze.value,
                  class: le(["dropdown-item", { selected: F(ze) }]),
                  onClick: (At) => he(ze)
                }, [
                  q("span", null, J(ze.label), 1),
                  F(ze) ? (d(), w("span", R2, "✔")) : T("", !0)
                ], 10, V2))), 128))
              ], 544),
              !A.value && !p.value.length && !G.value ? (d(), w("div", L2, J($.value), 1)) : T("", !0)
            ], 4)) : T("", !0)
          ]))
        ], 512),
        B.value ? (d(), w("div", B2, [
          (qe = e.config.emptyState) != null && qe.title ? (d(), w("p", H2, J(e.config.emptyState.title), 1)) : T("", !0),
          q("p", Y2, J((ot = e.config.emptyState) == null ? void 0 : ot.message), 1)
        ])) : T("", !0),
        ae.value && C.value ? (d(), de(m(ht), {
          key: 4,
          class: "error-note"
        }, {
          default: ie(() => [
            xe(J(ae.value), 1)
          ]),
          _: 1
        })) : T("", !0)
      ], 2);
    };
  }
}), q2 = /* @__PURE__ */ lt(j2, [["__scopeId", "data-v-fac66d4f"]]), G2 = {
  key: 0,
  class: "field-header"
}, z2 = {
  key: 0,
  class: "required"
}, W2 = {
  key: 1,
  class: "field-header-tonal"
}, U2 = { class: "tonal-title" }, K2 = {
  key: 0,
  class: "required"
}, X2 = {
  key: 0,
  class: "tonal-subtitle"
}, Q2 = {
  key: 2,
  class: "helper-text"
}, Z2 = { class: "option-label" }, J2 = {
  key: 0,
  class: "option-description"
}, eh = {
  key: 0,
  class: "selection-indicator-dot"
}, th = {
  key: 1,
  class: "selection-indicator-check"
}, nh = {
  key: 1,
  slot: "end",
  class: "checkmark",
  "aria-hidden": "true"
}, ah = {
  key: 0,
  class: "nested-container"
}, rh = /* @__PURE__ */ Ae({
  name: "ListSelectionField",
  __name: "ListSelectionField",
  props: {
    config: {
      type: Object,
      required: !0
    },
    allFormValues: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: null
    },
    nestedLevel: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue", "change", "field-changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, l = U(t.modelValue), o = sn({});
    De(
      () => t.modelValue,
      (h) => {
        l.value = h;
      },
      { immediate: !0 }
    ), De(
      () => {
        var h, x;
        return (h = t.config) != null && h.name ? (x = t.allFormValues) == null ? void 0 : x[t.config.name] : void 0;
      },
      (h) => {
        var D;
        const x = (D = t.config) == null ? void 0 : D.name;
        x && Object.prototype.hasOwnProperty.call(t.allFormValues || {}, x) && (l.value = h);
      },
      { immediate: !0, deep: !0 }
    );
    const i = E(() => t.config.type || "single"), u = E(() => {
      if (typeof t.config.validation == "function") {
        const h = i.value === "multiple" ? [] : "";
        return t.config.validation(h, t.allFormValues) != null;
      }
      return t.config.allowDeselect === !1;
    }), s = (h) => i.value === "multiple" ? Array.isArray(l.value) && l.value.includes(h) : l.value === h;
    function c(h) {
      var D;
      if (!((D = h.children) != null && D.name)) return;
      const x = h.children.name;
      o[x] = null, r("field-changed", {
        fieldName: x,
        value: null,
        config: h.children
      });
    }
    const y = (h) => {
      if (h.disabled) return;
      const x = t.config.optionsToDiselectOthersSelections ?? [], D = x.includes(String(h.value));
      let g;
      if (i.value === "multiple") {
        let p = Array.isArray(l.value) ? [...l.value] : [];
        if (D)
          if (p.includes(h.value)) {
            if (t.config.allowDeselect === !1) return;
            p = p.filter((G) => G !== h.value), g = p;
          } else
            g = [h.value];
        else {
          p = p.filter((G) => !x.includes(G));
          const A = p.indexOf(h.value);
          if (A > -1) {
            if (t.config.allowDeselect === !1) return;
            p.splice(A, 1), c(h);
          } else
            p.push(h.value);
          g = p;
        }
      } else if (l.value === h.value) {
        if (t.config.allowDeselect === !1) return;
        g = null, c(h);
      } else
        g = h.value;
      l.value = g, r("update:modelValue", g), r("change", g), r("field-changed", {
        fieldName: t.config.name,
        value: g,
        config: t.config
      }), t.config.onChange && t.config.onChange(g);
    };
    function C(h, x) {
      const D = h == null ? void 0 : h.name;
      D && (o[D] = x);
    }
    function _(h) {
      var D;
      const x = (D = h.children) == null ? void 0 : D.name;
      return x ? Object.prototype.hasOwnProperty.call(t.allFormValues || {}, x) ? t.allFormValues[x] : o[x] ?? null : null;
    }
    function k(h) {
      r("field-changed", h);
    }
    return n({
      getValue: () => l.value,
      setValue: (h) => {
        l.value = h, r("update:modelValue", h);
      },
      validate: () => {
        const h = (x, D) => {
          var A;
          if (x.validation && typeof x.validation == "function")
            return x.validation(D, t.allFormValues);
          if (x.allowDeselect === !1) {
            if ((x.type || "single") === "multiple") {
              if (!Array.isArray(D) || D.length === 0)
                return `Select at least one option for ${x.header || "this field"}`;
            } else if (D == null || D === "")
              return `Select an option for ${x.header || "this field"}`;
          }
          const g = x.type || "single", p = (G) => g === "multiple" ? Array.isArray(D) && D.includes(G) : D === G;
          for (const G of x.options || []) {
            if (!(G != null && G.children) || !p(G.value)) continue;
            const P = G.children.name, V = P ? (A = t.allFormValues) == null ? void 0 : A[P] : null, j = V !== void 0 ? V : _(G), W = h(G.children, j);
            if (W) return W;
          }
          return null;
        };
        return h(t.config, l.value);
      }
    }), (h, x) => {
      const D = _l("ListSelectionField", !0);
      return d(), w("div", {
        class: le(["list-selection-field", { nested: e.nestedLevel > 0 }])
      }, [
        e.config.header && e.config.titleStyle !== "tonal" ? (d(), w("div", G2, [
          q("h3", null, [
            xe(J(e.config.header) + " ", 1),
            u.value ? (d(), w("span", z2, "*")) : T("", !0)
          ])
        ])) : T("", !0),
        e.config.titleStyle === "tonal" ? (d(), w("div", W2, [
          q("h5", U2, [
            xe(J(e.config.header) + " ", 1),
            u.value ? (d(), w("span", K2, "*")) : T("", !0)
          ]),
          e.config.subtitle ? (d(), w("p", X2, J(e.config.subtitle), 1)) : T("", !0)
        ])) : T("", !0),
        e.config.helperText ? (d(), w("div", Q2, [
          Array.isArray(e.config.helperText) ? (d(!0), w(ke, { key: 0 }, Pe(e.config.helperText, (g, p) => (d(), w("div", {
            key: p,
            class: "helper-line"
          }, J(g), 1))), 128)) : (d(), w(ke, { key: 1 }, [
            xe(J(e.config.helperText), 1)
          ], 64))
        ])) : T("", !0),
        Ce(m(jo), {
          class: le(["selection-list", { "center-options": e.config.centerOptions, "shadow-options": e.config.shadowOptions }])
        }, {
          default: ie(() => [
            (d(!0), w(ke, null, Pe(e.config.options, (g, p) => (d(), w("div", { key: p }, [
              Ce(m(qo), {
                button: "",
                detail: !1,
                disabled: g.disabled,
                onClick: (A) => y(g),
                class: le([{
                  selected: s(g.value),
                  disabled: g.disabled
                }, "selection-item"])
              }, {
                default: ie(() => [
                  Ce(m(kt), null, {
                    default: ie(() => [
                      q("h3", Z2, J(g.label), 1),
                      g.description ? (d(), w("p", J2, J(g.description), 1)) : T("", !0)
                    ]),
                    _: 2
                  }, 1024),
                  e.config.showSelectionIndicator !== !1 ? (d(), w("span", {
                    key: 0,
                    slot: "end",
                    class: le(["selection-indicator", {
                      checked: s(g.value),
                      multiple: i.value === "multiple"
                    }]),
                    "aria-hidden": "true"
                  }, [
                    s(g.value) && i.value === "single" ? (d(), w("span", eh)) : s(g.value) ? (d(), w("span", th, "✔")) : T("", !0)
                  ], 2)) : e.config.showCheckmark !== !1 && s(g.value) ? (d(), w("span", nh, "✔")) : T("", !0)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick", "class"]),
              g.children && s(g.value) ? (d(), w("div", ah, [
                Ce(D, {
                  config: g.children,
                  allFormValues: e.allFormValues,
                  modelValue: _(g),
                  "onUpdate:modelValue": (A) => C(g.children, A),
                  onFieldChanged: k,
                  nestedLevel: e.nestedLevel + 1
                }, null, 8, ["config", "allFormValues", "modelValue", "onUpdate:modelValue", "nestedLevel"])
              ])) : T("", !0)
            ]))), 128))
          ]),
          _: 1
        }, 8, ["class"])
      ], 2);
    };
  }
}), lh = /* @__PURE__ */ lt(rh, [["__scopeId", "data-v-bddf186a"]]), oh = { class: "summary-field" }, ih = {
  key: 0,
  class: "summary-card-list"
}, sh = {
  key: 0,
  class: "summary-card-header"
}, uh = { class: "summary-card-title" }, dh = { class: "summary-card-body" }, ch = {
  key: 0,
  class: "summary-label"
}, fh = {
  key: 1,
  class: "summary-value"
}, vh = {
  key: 2,
  class: "summary-detail"
}, hh = {
  key: 3,
  class: "summary-placeholder"
}, mh = {
  key: 1,
  class: "summary-empty"
}, ph = /* @__PURE__ */ Ae({
  __name: "SummaryField",
  props: {
    config: {
      type: Object,
      required: !0
    },
    allFormValues: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const n = e, a = (l) => l == null ? "" : String(l).trim(), t = E(() => {
      var o, i;
      return (((i = (o = n.config).builder) == null ? void 0 : i.call(o, n.allFormValues)) ?? n.config.summaryRows ?? []).reduce((u, s) => {
        var k, h;
        if (!s) return u;
        const c = a(s.value), y = ((k = s.label) == null ? void 0 : k.trim()) || "", C = ((h = s.detail) == null ? void 0 : h.trim()) || "";
        return (s.alwaysShow || !!y || !!c || !!C) && u.push({
          ...s,
          label: y || void 0,
          value: c || void 0,
          detail: C || void 0
        }), u;
      }, []);
    }), r = E(() => {
      const l = /* @__PURE__ */ new Map();
      return t.value.forEach((o) => {
        var u, s;
        const i = ((u = o.section) == null ? void 0 : u.trim()) || "";
        l.has(i) || l.set(i, []), (s = l.get(i)) == null || s.push(o);
      }), Array.from(l, ([o, i]) => ({
        title: o,
        rows: i
      }));
    });
    return (l, o) => (d(), w("section", oh, [
      r.value.length ? (d(), w("div", ih, [
        (d(!0), w(ke, null, Pe(r.value, (i) => (d(), w("article", {
          key: i.title || "summary",
          class: "summary-card"
        }, [
          i.title ? (d(), w("header", sh, [
            q("h4", uh, J(i.title), 1)
          ])) : T("", !0),
          q("section", dh, [
            (d(!0), w(ke, null, Pe(i.rows, (u, s) => (d(), w("div", {
              key: `${u.label || u.value}-${i.title}-${s}`,
              class: le(["summary-row", {
                "summary-row-value-only": !u.label,
                "summary-row-has-detail": u.detail
              }])
            }, [
              u.label ? (d(), w("span", ch, J(u.label), 1)) : T("", !0),
              u.value ? (d(), w("span", fh, J(u.value), 1)) : u.detail ? (d(), w("span", vh, J(u.detail), 1)) : u.label ? T("", !0) : (d(), w("span", hh, J(e.config.emptyStateMessage || "No data"), 1))
            ], 2))), 128))
          ])
        ]))), 128))
      ])) : (d(), w("p", mh, J(e.config.emptyStateMessage || "No summary data available yet."), 1))
    ]));
  }
}), gh = /* @__PURE__ */ lt(ph, [["__scopeId", "data-v-0b85fe4b"]]), yh = { class: "score-card" }, $h = { class: "score-value" }, bh = {
  key: 0,
  class: "score-title"
}, wh = {
  key: 1,
  class: "score-description"
}, kh = /* @__PURE__ */ Ae({
  __name: "ScoreField",
  props: {
    config: {
      type: Object,
      required: !0
    },
    allFormValues: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const n = e, a = E(() => n.config.variant || "default"), t = (o) => {
      if (o == null || o === "")
        return n.config.emptyStateMessage || "--";
      if (typeof o == "number")
        return r(o.toString());
      if (typeof o == "string") {
        const i = o.trim();
        return i ? r(i) : n.config.emptyStateMessage || "--";
      }
      return n.config.emptyStateMessage || "--";
    }, r = (o) => n.config.padTo && /^\d+$/.test(o) ? o.padStart(n.config.padTo, "0") : o, l = E(() => {
      if (typeof n.config.computeValue == "function") {
        const o = n.config.computeValue(n.allFormValues);
        return t(o);
      }
      return t(n.config.value);
    });
    return (o, i) => (d(), w("section", {
      class: le(["score-field", [`variant-${a.value}`]])
    }, [
      q("div", yh, [
        q("p", $h, J(l.value), 1),
        e.config.title ? (d(), w("p", bh, J(e.config.title), 1)) : T("", !0),
        e.config.description ? (d(), w("p", wh, J(e.config.description), 1)) : T("", !0)
      ])
    ], 2));
  }
}), Ch = /* @__PURE__ */ lt(kh, [["__scopeId", "data-v-302d6699"]]), xh = { class: "illustration-card" }, _h = {
  key: 0,
  class: "illustration-title"
}, Th = ["src", "alt"], Dh = {
  key: 0,
  class: "illustration-caption"
}, Sh = {
  key: 1,
  class: "illustration-description"
}, Oh = /* @__PURE__ */ Ae({
  __name: "IllustrationField",
  props: {
    config: {}
  },
  setup(e) {
    const n = e, a = E(() => ({
      ...n.config.headerBackgroundColor && { background: n.config.headerBackgroundColor }
    })), t = E(() => ({
      ...n.config.frameBorderColor && { borderColor: n.config.frameBorderColor },
      ...n.config.frameBorderWidth && { borderWidth: n.config.frameBorderWidth }
    })), r = E(() => ({
      ...n.config.footerBackgroundColor && { background: n.config.footerBackgroundColor }
    }));
    return (l, o) => (d(), w("div", xh, [
      e.config.category || e.config.title ? (d(), w("div", {
        key: 0,
        class: "illustration-header",
        style: Ie(a.value)
      }, [
        e.config.title ? (d(), w("h3", _h, J(e.config.title), 1)) : T("", !0)
      ], 4)) : T("", !0),
      q("div", {
        class: "illustration-image-frame",
        style: Ie(t.value)
      }, [
        q("img", {
          src: e.config.imageSrc,
          alt: e.config.imageAlt || e.config.title || e.config.category || "illustration",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }, null, 8, Th)
      ], 4),
      e.config.caption || e.config.description ? (d(), w("div", {
        key: 1,
        class: "illustration-footer",
        style: Ie(r.value)
      }, [
        e.config.caption ? (d(), w("p", Dh, J(e.config.caption), 1)) : T("", !0),
        e.config.description ? (d(), w("p", Sh, J(e.config.description), 1)) : T("", !0)
      ], 4)) : T("", !0)
    ]));
  }
}), Ph = /* @__PURE__ */ lt(Oh, [["__scopeId", "data-v-6be80b6d"]]), Mh = {
  key: 0,
  class: "infographic-heading"
}, Ah = {
  key: 0,
  class: "infographic-title"
}, Nh = {
  key: 1,
  class: "infographic-subtitle"
}, Fh = {
  key: 2,
  class: "infographic-description"
}, Ih = {
  key: 3,
  class: "infographic-helper-banner"
}, Eh = {
  key: 0,
  class: "infographic-helper-text"
}, Vh = ["src"], Rh = {
  key: 1,
  class: "loading-state"
}, Lh = {
  key: 2,
  class: "error-state"
}, Bh = {
  key: 0,
  class: "infographic-step-list"
}, Hh = {
  key: 0,
  class: "step-body"
}, Yh = { class: "step-header" }, jh = { key: 0 }, qh = {
  key: 0,
  class: "step-number-inline"
}, Gh = ["innerHTML"], zh = ["innerHTML"], Wh = ["innerHTML"], Uh = {
  key: 0,
  class: "step-bullets"
}, Kh = ["innerHTML"], Xh = ["innerHTML"], Qh = ["innerHTML"], Zh = {
  key: 1,
  class: "step-figure"
}, Jh = ["src", "alt"], em = ["innerHTML"], tm = ["innerHTML"], nm = /* @__PURE__ */ Ae({
  __name: "InfographicDisplay",
  props: {
    config: {
      type: Object,
      required: !0
    },
    allFormValues: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const n = e, a = U(null), t = U(!1), r = U(null), l = E(() => n.config.displayMode || "list"), o = E(() => n.config.cardVariant || "default"), i = E(() => typeof n.config.showStepNumber == "boolean" ? n.config.showStepNumber : n.config.displayMode !== "visual"), u = E(() => {
      var g;
      return ((g = a.value) == null ? void 0 : g.header) || n.config.header || "";
    }), s = E(() => {
      var g;
      return ((g = a.value) == null ? void 0 : g.subtitle) || n.config.subtitle || "";
    }), c = E(() => {
      var g;
      return ((g = a.value) == null ? void 0 : g.description) || n.config.description || "";
    }), y = E(() => {
      var g;
      return ((g = a.value) == null ? void 0 : g.helperText) || n.config.helperText || "";
    }), C = E(() => {
      var g;
      return ((g = a.value) == null ? void 0 : g.helperImage) || n.config.helperImage || "";
    }), _ = E(() => {
      var g;
      return ((g = a.value) == null ? void 0 : g.footerNote) || n.config.footerNote || "";
    }), k = E(() => {
      var g;
      return ((g = a.value) == null ? void 0 : g.footerNoteType) || n.config.footerNoteType || "info";
    }), h = async () => {
      const g = n.config.infographicData;
      if (typeof g == "object" && g !== null && "key" in g) {
        a.value = g;
        return;
      }
      if (typeof g == "function") {
        t.value = !0, r.value = null;
        try {
          const p = await Promise.resolve(g());
          a.value = p;
        } catch (p) {
          r.value = "Failed to load infographic data", console.error("Error loading infographic data:", p);
        } finally {
          t.value = !1;
        }
        return;
      }
      typeof g == "string" && (r.value = "String keys require a dataSource implementation", console.warn("Infographic data provided as string key but no dataSource specified"));
    }, x = E(() => {
      var P;
      if (!a.value) return [];
      if ((P = a.value.sections) != null && P.length)
        return a.value.sections;
      const g = a.value.labels || [], p = a.value.values || [], A = a.value.descriptions || [], G = a.value.images || [];
      return g.map((V, j) => {
        const W = {
          title: V,
          content: p[j],
          image: G[j]
        }, N = A[j];
        return Array.isArray(N) ? W.bullets = N : N && (W.description = N), W;
      });
    }), D = (g) => {
      var p;
      return !!(g.title || g.subtitle || g.content || (p = g.bullets) != null && p.length || g.description || g.highlightText);
    };
    return Ue(() => {
      h();
    }), (g, p) => (d(), w("div", {
      class: le(["infographic-display", [`display-mode-${l.value}`]])
    }, [
      u.value || s.value || c.value || y.value || C.value ? (d(), w("div", Mh, [
        u.value ? (d(), w("p", Ah, J(u.value), 1)) : T("", !0),
        s.value ? (d(), w("p", Nh, J(s.value), 1)) : T("", !0),
        c.value ? (d(), w("p", Fh, J(c.value), 1)) : T("", !0),
        y.value || C.value ? (d(), w("div", Ih, [
          y.value ? (d(), w("p", Eh, J(y.value), 1)) : T("", !0),
          C.value ? (d(), w("img", {
            key: 1,
            src: C.value,
            alt: "Infographic banner",
            class: "infographic-helper-image",
            loading: "lazy",
            decoding: "async",
            fetchpriority: "low"
          }, null, 8, Vh)) : T("", !0)
        ])) : T("", !0)
      ])) : T("", !0),
      t.value ? (d(), w("div", Rh, [
        Ce(m(Go), { name: "bubbles" }),
        p[0] || (p[0] = q("p", null, "Loading...", -1))
      ])) : r.value ? (d(), w("div", Lh, [
        q("p", null, J(r.value), 1)
      ])) : (d(), w(ke, { key: 3 }, [
        x.value.length ? (d(), w("div", Bh, [
          (d(!0), w(ke, null, Pe(x.value, (A, G) => {
            var P;
            return d(), w("article", {
              key: G,
              class: le(["infographic-step", {
                "with-image": A.image,
                "image-only": A.image && !D(A),
                "variant-summary": o.value === "summary"
              }])
            }, [
              D(A) ? (d(), w("div", Hh, [
                q("header", Yh, [
                  A.title ? (d(), w("h3", jh, [
                    i.value ? (d(), w("span", qh, J(G + 1) + ". ", 1)) : T("", !0),
                    q("span", {
                      innerHTML: A.title
                    }, null, 8, Gh)
                  ])) : T("", !0),
                  A.subtitle ? (d(), w("p", {
                    key: 1,
                    class: "step-subtitle",
                    innerHTML: A.subtitle
                  }, null, 8, zh)) : T("", !0),
                  A.content ? (d(), w("p", {
                    key: 2,
                    class: "step-content",
                    innerHTML: A.content
                  }, null, 8, Wh)) : T("", !0)
                ]),
                (P = A.bullets) != null && P.length ? (d(), w("div", Uh, [
                  q("ul", null, [
                    (d(!0), w(ke, null, Pe(A.bullets, (V, j) => (d(), w("li", {
                      key: j,
                      innerHTML: V
                    }, null, 8, Kh))), 128))
                  ])
                ])) : T("", !0),
                A.description ? (d(), w("p", {
                  key: 1,
                  class: "step-description",
                  innerHTML: A.description
                }, null, 8, Xh)) : T("", !0),
                A.highlightText ? (d(), w("p", {
                  key: 2,
                  class: le(["step-highlight", `type-${A.highlightType || "info"}`]),
                  innerHTML: A.highlightText
                }, null, 10, Qh)) : T("", !0)
              ])) : T("", !0),
              A.image ? (d(), w("figure", Zh, [
                q("img", {
                  src: A.image,
                  alt: A.title || `Step ${G + 1}`,
                  loading: "lazy",
                  decoding: "async",
                  fetchpriority: "low"
                }, null, 8, Jh),
                A.caption ? (d(), w("figcaption", {
                  key: 0,
                  innerHTML: A.caption
                }, null, 8, em)) : T("", !0)
              ])) : T("", !0)
            ], 2);
          }), 128))
        ])) : T("", !0),
        _.value ? (d(), w("div", {
          key: 1,
          class: le(["infographic-footer", `type-${k.value}`])
        }, [
          Ce(m(Ve), {
            icon: m(Jo),
            class: "footer-icon"
          }, null, 8, ["icon"]),
          q("p", { innerHTML: _.value }, null, 8, tm)
        ], 2)) : T("", !0)
      ], 64))
    ], 2));
  }
}), am = /* @__PURE__ */ lt(nm, [["__scopeId", "data-v-02822c05"]]), rm = { class: "yes-no-question-card" }, lm = { class: "question-text" }, om = { class: "controls-group" }, im = { class: "radio-group" }, sm = ["for"], um = ["id", "name", "checked"], dm = ["for"], cm = ["id", "name", "checked"], fm = /* @__PURE__ */ Ae({
  __name: "YesNoQuestion",
  props: {
    question: {
      type: String,
      required: !0
    },
    modelValue: {
      type: [Boolean, String, null],
      default: null
    },
    groupId: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const a = e, t = n, r = E(() => a.groupId || `radio-${Math.random().toString(36).substr(2, 9)}`), l = E(() => {
      if (a.modelValue === null || a.modelValue === void 0) return null;
      if (typeof a.modelValue == "boolean") return a.modelValue;
      if (typeof a.modelValue == "string") {
        const u = a.modelValue.toLowerCase();
        if (u === "yes" || u === "true") return !0;
        if (u === "no" || u === "false") return !1;
      }
      return null;
    }), o = (u) => {
      t("update:modelValue", u);
    }, i = () => {
      t("update:modelValue", null);
    };
    return (u, s) => (d(), w("div", rm, [
      q("div", lm, J(e.question), 1),
      q("div", om, [
        q("div", im, [
          q("label", {
            class: "radio-label",
            for: `${r.value}-yes`
          }, [
            q("input", {
              type: "radio",
              class: "radio-input",
              id: `${r.value}-yes`,
              name: r.value,
              checked: l.value === !0,
              onChange: s[0] || (s[0] = (c) => o(!0))
            }, null, 40, um),
            s[2] || (s[2] = q("span", null, "Yes", -1))
          ], 8, sm),
          q("label", {
            class: "radio-label",
            for: `${r.value}-no`
          }, [
            q("input", {
              type: "radio",
              class: "radio-input",
              id: `${r.value}-no`,
              name: r.value,
              checked: l.value === !1,
              onChange: s[1] || (s[1] = (c) => o(!1))
            }, null, 40, cm),
            s[3] || (s[3] = q("span", null, "No", -1))
          ], 8, dm)
        ]),
        l.value !== null ? (d(), w("button", {
          key: 0,
          onClick: Me(i, ["stop", "prevent"]),
          class: "clear-button",
          type: "button"
        }, [...s[4] || (s[4] = [
          q("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            stroke: "none"
          }, [
            q("path", { d: "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" })
          ], -1),
          xe(" Clear ", -1)
        ])])) : T("", !0)
      ])
    ]));
  }
}), kl = /* @__PURE__ */ lt(fm, [["__scopeId", "data-v-50534989"]]), vm = () => {
  const e = U(/* @__PURE__ */ new Map()), n = (k) => {
    const h = [];
    let x = 0;
    for (; x < k.length; ) {
      const D = k[x];
      if (/\s/.test(D)) {
        x++;
        continue;
      }
      if (D === "(" || D === ")") {
        h.push({ type: "parenthesis", value: D }), x++;
        continue;
      }
      if (D === "'" || D === '"') {
        const g = D;
        let p = "";
        for (x++; x < k.length && k[x] !== g; )
          p += k[x], x++;
        x++, h.push({ type: "value", value: JSON.stringify(p) });
        continue;
      }
      if (/\d/.test(D)) {
        let g = "";
        for (; x < k.length && /[\d.]/.test(k[x]); )
          g += k[x], x++;
        h.push({ type: "value", value: g });
        continue;
      }
      if (/[a-zA-Z_$]/.test(D)) {
        let g = "";
        for (; x < k.length && /[a-zA-Z0-9_$]/.test(k[x]); )
          g += k[x], x++;
        const p = g.toUpperCase();
        ["AND", "OR", "NOT"].includes(p) ? h.push({ type: "operator", value: p }) : h.push({ type: "field", value: g });
        continue;
      }
      if (x + 2 < k.length && k.substring(x, x + 3) === "===") {
        h.push({ type: "operator", value: "===" }), x += 3;
        continue;
      }
      if (x + 2 < k.length && k.substring(x, x + 3) === "!==") {
        h.push({ type: "operator", value: "!==" }), x += 3;
        continue;
      }
      if (x + 1 < k.length && k.substring(x, x + 2) === ">=") {
        h.push({ type: "operator", value: ">=" }), x += 2;
        continue;
      }
      if (x + 1 < k.length && k.substring(x, x + 2) === "<=") {
        h.push({ type: "operator", value: "<=" }), x += 2;
        continue;
      }
      if (D === ">" || D === "<") {
        h.push({ type: "operator", value: D }), x++;
        continue;
      }
      x++;
    }
    return h;
  }, a = (k, h = 0) => t(k, h), t = (k, h) => {
    let [x, D] = r(k, h);
    for (; D < k.length && k[D].type === "operator" && k[D].value === "OR"; ) {
      D++;
      const [g, p] = r(k, D);
      x = {
        type: "logical",
        operator: "OR",
        left: x,
        right: g
      }, D = p;
    }
    return [x, D];
  }, r = (k, h) => {
    let [x, D] = l(k, h);
    for (; D < k.length && k[D].type === "operator" && k[D].value === "AND"; ) {
      D++;
      const [g, p] = l(k, D);
      x = {
        type: "logical",
        operator: "AND",
        left: x,
        right: g
      }, D = p;
    }
    return [x, D];
  }, l = (k, h) => {
    if (h < k.length && k[h].type === "operator" && k[h].value === "NOT") {
      const [x, D] = o(k, h + 1);
      return [
        {
          type: "logical",
          operator: "NOT",
          left: x
        },
        D
      ];
    }
    return o(k, h);
  }, o = (k, h) => {
    var p, A;
    if (((p = k[h]) == null ? void 0 : p.type) === "parenthesis" && k[h].value === "(") {
      const [G, P] = a(k, h + 1);
      return [G, P + 1];
    }
    if (((A = k[h]) == null ? void 0 : A.type) !== "field")
      throw new Error(`Expected field name at position ${h}`);
    const x = k[h].value, D = k[h + 1];
    if (!D || D.type !== "operator")
      throw new Error(`Expected operator after field ${x}`);
    const g = k[h + 2];
    if (!g)
      throw new Error(`Expected value after operator ${D.value}`);
    return [
      {
        type: "comparison",
        field: x,
        operator: D.value,
        value: i(g.value)
      },
      h + 3
    ];
  }, i = (k) => {
    if (k.startsWith('"') || k.startsWith("'"))
      return JSON.parse(k);
    if (!isNaN(Number(k)))
      return Number(k);
    if (k === "true") return !0;
    if (k === "false") return !1;
    if (k === "null") return null;
    if (k !== "undefined")
      return k;
  }, u = (k, h) => {
    if (k.type === "comparison") {
      const x = h[k.field];
      switch (k.operator) {
        case "===":
          return x === k.value;
        case "!==":
          return x !== k.value;
        case ">":
          return x > k.value;
        case "<":
          return x < k.value;
        case ">=":
          return x >= k.value;
        case "<=":
          return x <= k.value;
        default:
          return !1;
      }
    }
    if (k.type === "logical")
      switch (k.operator) {
        case "AND":
          return u(k.left, h) && u(k.right, h);
        case "OR":
          return u(k.left, h) || u(k.right, h);
        case "NOT":
          return !u(k.left, h);
        default:
          return !1;
      }
    return !1;
  }, s = (k, h) => {
    if (!k || typeof k != "string")
      return !0;
    try {
      let x = e.value.get(k);
      if (!x) {
        const D = n(k);
        [x] = a(D), e.value.set(k, x);
      }
      return u(x, h);
    } catch (x) {
      return console.error(`Error evaluating condition: "${k}"`, x), !1;
    }
  }, c = (k) => typeof k == "function" ? k : (h) => s(k, h), y = (k) => {
    try {
      const h = n(k);
      return a(h), { isValid: !0 };
    } catch (h) {
      return {
        isValid: !1,
        error: h instanceof Error ? h.message : "Unknown error"
      };
    }
  }, C = () => {
    e.value.clear();
  }, _ = E(() => ({
    size: e.value.size,
    expressions: Array.from(e.value.keys())
  }));
  return {
    evaluate: s,
    createConditionFunction: c,
    validateExpression: y,
    clearCache: C,
    getCacheStats: _,
    tokenize: n,
    parseExpression: a,
    evaluateExpression: u
  };
}, hm = () => {
  const { evaluate: e } = vm(), n = (s, c) => typeof s == "function" ? s(c) : e(s, c), a = (s, c) => {
    const y = /* @__PURE__ */ new Set();
    return s.forEach((C) => {
      n(C.condition, c) && C.actions.forEach((_) => {
        _.type === "hideField" && _.target && (Array.isArray(_.target) ? _.target : [_.target]).forEach((h) => y.add(h));
      });
    }), y;
  }, t = (s, c) => {
    const y = /* @__PURE__ */ new Set();
    return s.forEach((C) => {
      n(C.condition, c) && C.actions.forEach((_) => {
        _.type === "setDisabled" && _.target && (Array.isArray(_.target) ? _.target : [_.target]).forEach((h) => y.add(h));
      });
    }), y;
  }, r = (s, c) => {
    const y = /* @__PURE__ */ new Set();
    return s.forEach((C) => {
      n(C.condition, c) && C.actions.forEach((_) => {
        _.type === "setRequired" && _.target && (Array.isArray(_.target) ? _.target : [_.target]).forEach((h) => y.add(h));
      });
    }), y;
  }, l = (s, c) => {
    const y = {};
    return s.forEach((C) => {
      n(C.condition, c) && C.actions.forEach((_) => {
        _.type === "setValue" && _.target && _.value !== void 0 && (Array.isArray(_.target) ? _.target : [_.target]).forEach((h) => {
          y[h] = _.value;
        });
      });
    }), y;
  }, o = (s, c) => {
    const y = [];
    return s.forEach((C) => {
      n(C.condition, c) && C.actions.forEach((_) => {
        _.type === "showWarning" && _.message && y.push(_.message);
      });
    }), y;
  }, i = (s, c) => {
    const y = [];
    return s.forEach((C) => {
      n(C.condition, c) && C.actions.forEach((_) => {
        _.type === "showDialog" && _.message && y.push({
          title: _.title || "Information",
          message: _.message
        });
      });
    }), y;
  };
  return {
    evaluateCondition: n,
    getHiddenFields: a,
    getDisabledFields: t,
    getRequiredFields: r,
    getAutoSetValues: l,
    getWarnings: o,
    getDialogs: i,
    applyConditionalRules: (s, c) => ({
      hiddenFields: a(s, c),
      disabledFields: t(s, c),
      requiredFields: r(s, c),
      autoSetValues: l(s, c),
      warnings: o(s, c),
      dialogs: i(s, c)
    })
  };
}, mm = "vue-ionic-standard-form:draft:", Sr = () => {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}, ha = (e) => `${mm}${e}`, pm = (e) => {
  var n;
  if (!e) return null;
  try {
    const a = (n = Sr()) == null ? void 0 : n.getItem(ha(e));
    if (!a) return null;
    const t = JSON.parse(a);
    return t && typeof t == "object" && !Array.isArray(t) ? t : null;
  } catch (a) {
    return console.warn(`[useFormDraft] Could not read the draft for "${e}":`, a), null;
  }
}, Cl = (e, n) => {
  if (e)
    try {
      const a = Sr();
      if (!a) return;
      if (!n || Object.keys(n).length === 0) {
        a.removeItem(ha(e));
        return;
      }
      a.setItem(ha(e), JSON.stringify(n));
    } catch (a) {
      console.warn(`[useFormDraft] Could not save the draft for "${e}":`, a);
    }
}, gm = (e) => {
  var n;
  if (e)
    try {
      (n = Sr()) == null || n.removeItem(ha(e));
    } catch (a) {
      console.warn(`[useFormDraft] Could not clear the draft for "${e}":`, a);
    }
}, ym = /* @__PURE__ */ new Set(["obsValueType", "obsParentConcept", "obsBodyPartPrefix"]), ia = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, xl = (e) => {
  const n = {};
  return Object.entries(e || {}).forEach(([a, t]) => {
    ym.has(a) || ia(t) || (n[a] = t);
  }), n;
}, $m = {
  key: 0,
  class: "section-subtitle"
}, bm = {
  key: 1,
  class: "draft-restored-notice"
}, wm = { class: "form-section-heading" }, km = {
  key: 0,
  class: "form-section-description"
}, Cm = { key: 0 }, xm = { key: 1 }, _m = { key: 3 }, Tm = /* @__PURE__ */ Ae({
  __name: "StandardForm",
  props: {
    formData: {},
    conditionalRules: {},
    subtitle: {},
    allFormValues: {},
    initialData: {},
    draftKey: {},
    enableVoice: { type: Boolean }
  },
  emits: ["update:modelValue", "update:form-values", "field-changed", "ready"],
  setup(e, { expose: n, emit: a }) {
    const t = {
      Heading: Wo,
      inputField: ci,
      textAreaField: mi,
      multiSelectInputField: es,
      checkboxField: is,
      radioButtonField: Ds,
      dateInputField: X0,
      dateTimeInputField: tf,
      timeInputField: bf,
      phoneInputField: Jv,
      Alert: r2,
      Banner: v2,
      switchField: D2,
      searchableDropdown: q2,
      listSelectionField: lh,
      summaryField: gh,
      scoreField: Ch,
      illustration: Ph,
      infographicField: am,
      yesNoQuestion: kl,
      Dashes: null
    }, r = e, l = a, o = Vo("formMode", "default"), i = sn({}), u = E(() => ({ ...i })), s = /* @__PURE__ */ new Map(), c = U(null), y = U(!1), C = U(!1), _ = U(!1), k = U(/* @__PURE__ */ new Set()), { applyConditionalRules: h } = hm(), x = /* @__PURE__ */ new Set(["obsValueType", "obsParentConcept", "obsBodyPartPrefix"]);
    let D = null;
    const g = E(() => {
      const O = [];
      return r.formData.forEach((L, R) => {
        var f;
        const K = { ...L, __originalIndex: R }, v = K.section, F = O[O.length - 1];
        F && ((f = F.section) == null ? void 0 : f.id) === (v == null ? void 0 : v.id) && (F.section || !v) ? F.fields.push(K) : O.push({ section: v, fields: [K] });
      }), O;
    });
    function p(O) {
      const L = O.name || O.header;
      if (L && k.value.has(L)) return !1;
      if (!O.condition) return !0;
      try {
        return !!O.condition(i);
      } catch (R) {
        return console.warn("Condition function error for field:", L, R), !1;
      }
    }
    function A(O) {
      return [r.formData[O - 1], r.formData[O + 1]].some((R) => R && R.componentType !== "Dashes" && p(R));
    }
    function G(O, L) {
      const R = L.name || L.header;
      R && (O ? s.set(R, O) : s.delete(R));
    }
    function P() {
      s.forEach((O, L) => {
        var R;
        Object.prototype.hasOwnProperty.call(i, L) && ((R = O == null ? void 0 : O.setValue) == null || R.call(O, i[L]));
      });
    }
    function V(O) {
      !O || typeof O != "object" || Array.isArray(O) || Object.entries(O).forEach(([L, R]) => {
        Object.is(i[L], R) || j(L, R);
      });
    }
    function j(O, L) {
      var R, K;
      i[O] = L, (K = (R = s.get(O)) == null ? void 0 : R.setValue) == null || K.call(R, L);
    }
    function W(O) {
      i[O.fieldName] = O.value, C.value = !1, O.config.onChange && V(O.config.onChange(O.value, { ...i })), l("field-changed", { fieldName: O.fieldName, value: O.value, allValues: { ...i } });
    }
    function N(O, L, R) {
      i[O] = L, C.value = !1, R.onChange && V(R.onChange(L, { ...i })), l("field-changed", { fieldName: O, value: L, allValues: { ...i } });
    }
    function z(O, L) {
      O.name && N(O.name, L === null ? "" : L ? "Yes" : "No", O);
    }
    function ae() {
      if (r.formData.forEach((O) => {
        const L = O.name || O.header;
        if (!L) return;
        for (const K of x) {
          const v = O[K];
          v !== void 0 && ((i[K] ?? (i[K] = {}))[L] = v);
        }
        const R = O.value ?? O.initialValue;
        R != null && R !== "" && (i[L] = R);
      }), Object.assign(i, r.initialData, r.allFormValues), r.draftKey) {
        const O = pm(r.draftKey);
        O && Object.entries(O).forEach(([L, R]) => {
          ia(i[L]) && (i[L] = R, y.value = !0);
        });
      }
    }
    De(() => r.allFormValues, (O) => {
      !O || _.value || Object.entries(O).forEach(([L, R]) => {
        i[L] !== R && j(L, R);
      });
    }, { deep: !0, immediate: !0 }), De(() => ({ ...i }), (O) => {
      var L;
      if (l("update:modelValue", O), l("update:form-values", O), (L = r.conditionalRules) != null && L.length) {
        const R = h(r.conditionalRules, O);
        k.value = R.hiddenFields, V(R.autoSetValues);
      } else k.value = /* @__PURE__ */ new Set();
      r.formData.forEach((R) => {
        const K = R.name || R.header;
        K && R.componentType !== "Slot" && !p(R) && !ia(i[K]) && j(K, "");
      }), r.draftKey && !_.value && !C.value && (D && clearTimeout(D), D = setTimeout(() => Cl(r.draftKey, xl(O)), 500));
    }, { deep: !0, immediate: !0 }), Ue(async () => {
      ae(), await je(), P(), l("ready", s);
    }), Ro(() => {
      D && clearTimeout(D), r.draftKey && !_.value && !C.value && Cl(r.draftKey, xl(i));
    });
    function ce() {
      const O = {};
      return Object.entries(i).forEach(([L, R]) => {
        (x.has(L) || !ia(R) && !k.value.has(L) && p(r.formData.find((K) => (K.name || K.header) === L) || { componentType: "Slot" })) && (O[L] = R);
      }), O;
    }
    async function B(O) {
      _.value = !0;
      const L = new Set(typeof O == "string" ? [O] : O || []);
      Object.keys(i).forEach((R) => {
        !x.has(R) && !L.has(R) && (i[R] = "");
      }), await je(), s.forEach((R, K) => {
        var v, F, f;
        L.has(K) || ((v = R == null ? void 0 : R.resetTouched) == null || v.call(R), (F = R == null ? void 0 : R.setValue) == null || F.call(R, ""), (f = R == null ? void 0 : R.setUnit) == null || f.call(R, null));
      }), await je(), _.value = !1;
    }
    function b() {
      const O = {};
      return s.forEach((L, R) => {
        var F;
        const K = r.formData.find((f) => (f.name || f.header) === R);
        if (!K || !p(K)) return;
        const v = (F = L == null ? void 0 : L.validate) == null ? void 0 : F.call(L);
        v && (O[R] = String(v));
      }), Object.keys(O).length ? O : null;
    }
    async function I(O) {
      var R;
      await je();
      const L = Array.from(((R = c.value) == null ? void 0 : R.querySelectorAll("[data-field-name]")) || []).find((K) => K.dataset.fieldName === O);
      L == null || L.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    async function $(O) {
      const L = O && Object.keys(O).find((R) => !R.startsWith("_"));
      L && await I(L);
    }
    return n({
      getFormValues: ce,
      formValues: u,
      setFormValue: j,
      resetForm: B,
      validateForm: b,
      scrollFieldIntoView: I,
      scrollToFirstError: $,
      clearDraft: () => {
        D && clearTimeout(D), y.value = !1, C.value = !0, r.draftKey && gm(r.draftKey);
      }
    }), (O, L) => (d(), w("div", {
      ref_key: "rootEl",
      ref: c,
      class: "standard-form-wrapper"
    }, [
      e.subtitle ? (d(), w("div", $m, J(e.subtitle), 1)) : T("", !0),
      y.value ? (d(), w("div", bm, " Unsaved entries from your last attempt were restored. Please check them, then save. ")) : T("", !0),
      Ce(m(zo), { class: "standard-form-grid" }, {
        default: ie(() => [
          (d(!0), w(ke, null, Pe(g.value, (R, K) => {
            var v;
            return d(), de(m(Tl), {
              key: K,
              class: le(["standard-form-row", { "standard-form-section-row": ((v = R.section) == null ? void 0 : v.mode) === "neonatal" }])
            }, {
              default: ie(() => {
                var F;
                return [
                  (F = R.section) != null && F.title ? (d(), de(m(Nr), {
                    key: 0,
                    size: "12",
                    class: "section-heading-col"
                  }, {
                    default: ie(() => [
                      q("div", wm, J(R.section.title), 1),
                      R.section.description ? (d(), w("p", km, J(R.section.description), 1)) : T("", !0)
                    ]),
                    _: 2
                  }, 1024)) : T("", !0),
                  (d(!0), w(ke, null, Pe(R.fields, (f) => {
                    var H, Y, S, oe, $e, X;
                    return d(), de(m(Nr), {
                      key: f.name || f.header || f.__originalIndex,
                      "data-field-name": f.name || f.header,
                      class: le({ "no-padding": f.noPadding, "no-margin": f.noMargin, "zero-height": !f.componentType || !p(f) }),
                      size: ((H = f.grid) == null ? void 0 : H.s) || "12",
                      "size-xs": (Y = f.grid) == null ? void 0 : Y.xs,
                      "size-sm": (S = f.grid) == null ? void 0 : S.sm,
                      "size-md": (oe = f.grid) == null ? void 0 : oe.md,
                      "size-lg": ($e = f.grid) == null ? void 0 : $e.lg,
                      "size-xl": (X = f.grid) == null ? void 0 : X.xl,
                      offset: f.offset
                    }, {
                      default: ie(() => [
                        p(f) ? (d(), w(ke, { key: 0 }, [
                          f.componentType === "Slot" || f.componentType !== "Dashes" && !t[f.componentType || ""] ? (d(), w("div", Cm, [
                            ve(O.$slots, f.slotName || f.componentType || "default", {
                              config: f,
                              formValues: i,
                              updateValue: (ye, M) => N(ye, M, f)
                            }, void 0, !0)
                          ])) : f.componentType === "textAreaField" && e.enableVoice && f.voice !== !1 && O.$slots.voiceTextArea ? (d(), w("div", xm, [
                            ve(O.$slots, "voiceTextArea", {
                              config: f,
                              formValues: i,
                              updateValue: (ye, M) => N(ye, M, f)
                            }, void 0, !0)
                          ])) : f.componentType === "yesNoQuestion" ? (d(), de(kl, {
                            key: 2,
                            question: String(f.header || f.question || ""),
                            modelValue: i[f.name || ""],
                            groupId: f.name,
                            "onUpdate:modelValue": (ye) => z(f, ye)
                          }, null, 8, ["question", "modelValue", "groupId", "onUpdate:modelValue"])) : f.componentType === "Dashes" && A(f.__originalIndex) ? (d(), w("div", _m, [...L[0] || (L[0] = [
                            q("div", { class: "dashed_bottom_border dashed" }, null, -1)
                          ])])) : f.componentType !== "Dashes" ? (d(), de(Jn(t[f.componentType || ""]), {
                            key: 4,
                            config: f,
                            allFormValues: i,
                            mode: m(o),
                            modelValue: i[f.name || ""],
                            onFieldChanged: W,
                            ref_for: !0,
                            ref: (ye) => G(ye, f)
                          }, null, 40, ["config", "allFormValues", "mode", "modelValue"])) : T("", !0)
                        ], 64)) : T("", !0)
                      ]),
                      _: 2
                    }, 1032, ["data-field-name", "class", "size", "size-xs", "size-sm", "size-md", "size-lg", "size-xl", "offset"]);
                  }), 128))
                ];
              }),
              _: 2
            }, 1032, ["class"]);
          }), 128))
        ]),
        _: 3
      })
    ], 512));
  }
}), Pm = /* @__PURE__ */ lt(Tm, [["__scopeId", "data-v-4414fd04"]]);
export {
  Pm as StandardForm,
  Pm as default
};
