import { BaseFormElement } from '../BaseFormElement';

export interface AlertFieldConfig extends BaseFormElement {
    componentType: "Alert";
    backgroundColor?: string;
    textColor?: string;
    index?: string;
    message?: string;
    icon?: any;
}
