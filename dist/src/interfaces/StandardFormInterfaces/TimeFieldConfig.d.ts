import { BaseFormElement } from '../BaseFormElement';
import { ActionButtonConfig } from '../CommonTypes';

export interface TimeFieldConfig extends BaseFormElement {
    componentType: "timeInputField";
    placeholder?: string;
    placeholderFontSize?: string;
    placeholderFontWeight?: string;
    minHeight?: number;
    rightIcon?: string;
    leftText?: string;
    unit?: string;
    actionButton?: ActionButtonConfig;
    initialHour?: number;
    initialMinute?: number;
    initialMeridian?: "AM" | "PM";
    mode?: string;
    showNowButton?: boolean;
    onChange?: (value: string, timeObject?: any) => void;
}
