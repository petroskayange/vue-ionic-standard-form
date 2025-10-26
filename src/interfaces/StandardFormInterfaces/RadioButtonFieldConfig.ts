import { BaseFormElement } from "../BaseFormElement";

export interface RadioOption {
    label: string;
    value: string | number | boolean;
    disabled?: boolean;
    description?: string;
    icon?: string;
}

export type RadioGroupType = "standard" | "list" | "inline" | "button";

export interface RadioButtonFieldConfig extends BaseFormElement {
    componentType: "radioButtonField";
    type?: RadioGroupType;
    options: RadioOption[];
    helperText?: string;
    showClearButton?: boolean;
    showClearButtonBottom?: boolean;
    showOptionClear?: boolean;
    showIndividualClear?: boolean;
    showButtonClear?: boolean;
    allowDeselect?: boolean;
    onClear?: (previousValue: string | number | boolean | null) => void;
}
