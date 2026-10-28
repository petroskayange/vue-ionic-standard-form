import { BaseFormElement } from "../BaseFormElement";

export interface ListSelectionOption {
    label: string;
    value: string | number | boolean;
    disabled?: boolean;
    description?: string;
    icon?: string;
    // Optional nested list selection when an option expands to another list
    children?: ListSelectionFieldConfig;
}

export type ListSelectionType = "single" | "multiple";
export type ListSelectionTitleStyle = "regular" | "tonal";

export interface ListSelectionFieldConfig extends BaseFormElement {
    componentType: "listSelectionField";
    type?: ListSelectionType;
    options: ListSelectionOption[];
    helperText?: string | string[];
    allowDeselect?: boolean;
    showCheckmark?: boolean;
    showSelectionIndicator?: boolean;
    titleStyle?: ListSelectionTitleStyle;
    subtitle?: string;
    optionsToDiselectOthersSelections?: string[];
    centerOptions?: boolean;
    shadowOptions?: boolean;
}
