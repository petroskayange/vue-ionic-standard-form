import { BaseFormElement } from '../BaseFormElement';
import { ActionButtonConfig } from '../CommonTypes';

export interface DateFieldConfig extends BaseFormElement {
    componentType: "dateInputField";
    minDate?: Date | string;
    maxDate?: Date | string;
    placeholder?: string;
    icon?: any;
    leftText?: string;
    rightIcon?: any;
    unit?: string;
    minHeight?: number;
    placeholderFontSize?: string;
    placeholderFontWeight?: string;
    actionButton?: ActionButtonConfig;
}
