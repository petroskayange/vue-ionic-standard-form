import { BaseFormElement } from "../BaseFormElement";

export interface FacilitySelectorFieldConfig extends BaseFormElement {
    componentType: "facilitySelectorField";
    inline?: boolean;
    useTeleport?: boolean;
}
