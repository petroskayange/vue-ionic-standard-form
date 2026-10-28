import { BaseFormElement } from "../BaseFormElement";

export interface DateTimeFieldConfig extends BaseFormElement {
    componentType: "dateTimeInputField";
    minDateTime?: string;
    maxDateTime?: string;
    displayFormat?: string;
    pickerOptions?: Record<string, any>;
    helperText?: string;
}
