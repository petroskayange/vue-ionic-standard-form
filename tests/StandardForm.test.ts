// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import StandardForm from "../src/components/StandardForm.vue";

vi.mock("@ionic/vue", async () => {
  const { h } = await import("vue");
  const stub = { inheritAttrs: false, render(this: any) { return h("div", this.$attrs, this.$slots.default?.()); } };
  return Object.fromEntries([
    "IonButton", "IonCheckbox", "IonCol", "IonDatetime", "IonGrid", "IonIcon",
    "IonInput", "IonItem", "IonLabel", "IonList", "IonNote", "IonPopover",
    "IonProgressBar", "IonRadio", "IonRadioGroup", "IonRow", "IonSpinner", "IonTextarea",
  ].map(name => [name, stub]));
});

const stubs = { IonGrid: true, IonRow: true, IonCol: true };
const flush = async () => { await nextTick(); await nextTick(); };

beforeEach(() => localStorage.clear());
afterEach(() => { vi.useRealTimers(); localStorage.clear(); });

describe("StandardForm", () => {
  it("keeps false and zero defaults, metadata, and parent values", async () => {
    const wrapper = mount(StandardForm, {
      props: {
        formData: [
          { componentType: "Slot", name: "enabled", value: false, obsValueType: "value_coded" },
          { componentType: "Slot", name: "count", value: 0 },
          { componentType: "Slot", name: "name", initialValue: "old" },
        ],
        initialData: { name: "saved" },
      },
      global: { stubs },
    });
    await flush();
    expect((wrapper.vm as any).getFormValues()).toMatchObject({
      enabled: false, count: 0, name: "saved", obsValueType: { enabled: "value_coded" },
    });
    wrapper.unmount();
  });

  it("applies slot changes, returned onChange updates, and visibility rules", async () => {
    const wrapper = mount(StandardForm, {
      props: {
        formData: [
          { componentType: "facilitySelectorField", name: "choice", onChange: () => ({ detail: "derived" }) },
          { componentType: "Slot", name: "detail", value: "initial", condition: values => values.choice === "show" },
        ],
        conditionalRules: [{ condition: values => values.choice === "hide", actions: [{ type: "hideField", target: "detail" }] }],
      },
      slots: { facilitySelectorField: (scope: any) => h("button", { onClick: () => scope.updateValue("choice", "show") }, "select") },
      global: { stubs },
    });
    await flush();
    await wrapper.get("button").trigger("click");
    await flush();
    expect((wrapper.vm as any).getFormValues()).toMatchObject({ choice: "show", detail: "derived" });
    (wrapper.vm as any).setFormValue("choice", "hide");
    await flush();
    expect((wrapper.vm as any).getFormValues()).not.toHaveProperty("detail");
    wrapper.unmount();
  });

  it("persists a draft and clears it after save", async () => {
    vi.useFakeTimers();
    const props = { formData: [{ componentType: "Slot", name: "answer" }], draftKey: "test-patient:form" };
    const wrapper = mount(StandardForm, { props, global: { stubs } });
    await flush();
    (wrapper.vm as any).setFormValue("answer", "unsaved");
    await flush();
    vi.advanceTimersByTime(600);
    wrapper.unmount();
    const restored = mount(StandardForm, { props, global: { stubs } });
    await flush();
    expect((restored.vm as any).getFormValues().answer).toBe("unsaved");
    (restored.vm as any).clearDraft();
    restored.unmount();
    const fresh = mount(StandardForm, { props, global: { stubs } });
    await flush();
    expect((fresh.vm as any).getFormValues()).not.toHaveProperty("answer");
    fresh.unmount();
  });

  it("renders new field types and records yes/no answers", async () => {
    const wrapper = mount(StandardForm, {
      props: { formData: [
        { componentType: "textAreaField", name: "note", header: "Note" },
        { componentType: "Dashes" },
        { componentType: "yesNoQuestion", name: "consent", header: "Consent?" },
      ] },
      global: { stubs },
    });
    await flush();
    expect(wrapper.text()).toContain("Note");
    expect(wrapper.find(".dashed_bottom_border").exists()).toBe(true);
    await wrapper.get('input[type="radio"][id="consent-yes"]').setValue();
    await flush();
    expect((wrapper.vm as any).getFormValues().consent).toBe("Yes");
    wrapper.unmount();
  });
});
