import { BaseFormElement } from '../BaseFormElement';

export type AlertType = "info" | "warning" | "error" | "success";
export interface AlertFieldConfig extends BaseFormElement {
    componentType: "Alert";
    type?: AlertType;
    backgroundColor?: string;
    textColor?: string;
    index?: string;
    message?: string | ((allFormValues: any) => string);
    icon?: any;
    removeConditionAlert?: any;
}
