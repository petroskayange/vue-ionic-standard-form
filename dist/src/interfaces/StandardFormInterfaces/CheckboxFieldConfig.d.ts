import { BaseFormElement } from '../BaseFormElement';

export interface CheckboxOption {
    value: any;
    label: string;
    description?: string;
    icon?: any;
    disabled?: boolean;
}
export interface CheckboxFieldConfig extends BaseFormElement {
    componentType: "checkboxField";
    type?: "single" | "multiple" | "list";
    label?: string;
    options?: CheckboxOption[];
    helperText?: string;
}
