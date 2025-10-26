import { BaseFormElement } from '../BaseFormElement';
import { ActionButtonConfig } from '../CommonTypes';

export interface UnitOption {
    label: string;
    value: string;
}
export interface InputFieldConfig extends BaseFormElement {
    componentType?: "inputField";
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
}
