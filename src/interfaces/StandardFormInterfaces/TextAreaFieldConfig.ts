import { BaseFormElement } from "../BaseFormElement";
import { ActionButtonConfig } from "../CommonTypes";

export interface UnitOption {
    label: string;
    value: string;
}
export interface TextAreaFieldConfig extends BaseFormElement {
    componentType?: "textAreaField";
    placeholder?: string;
    helperText?: string;
    type?: string;
    icon?: any;
    leftText?: string;
    rightIcon?: any;
    unit?: string;
    minHeight?: number;
    placeholderFontSize?: string;
    placeholderFontWeight?: string;
    actionButton?: ActionButtonConfig;
    unitOptions?: UnitOption[];
    unitPlaceholder?: string;
    initialUnit?: string;
    unitValidation?: (unitValue: string | null) => string | null;
    rows?: number;
    autoGrow?: boolean;
    maxLength?: number;
    showCounter?: boolean;
    /**
     * Set false to keep dictation off this field even when the form enables it.
     * Use for numeric or coded answers, where a misheard word is a clinical error
     * rather than a typo.
     */
    voice?: boolean;
}
