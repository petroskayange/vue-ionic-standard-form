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
    inputMode?: string;
    capitalizeFirstLetter?: boolean;
    digitsOnly?: boolean;
    /** Show the validation error only once the user leaves the field, not while typing. */
    validateOnBlur?: boolean;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    showStepperControls?: boolean;
    pattern?: string;
    icon?: any;
    imageIcon?: string;
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
    clearValueOnUnitChange?: boolean;
}
