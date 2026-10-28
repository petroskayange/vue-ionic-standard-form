import { BaseFormElement } from "../BaseFormElement";

export interface SlotConfig extends BaseFormElement {
    componentType: "Slot";
    slotName?: string;
}
