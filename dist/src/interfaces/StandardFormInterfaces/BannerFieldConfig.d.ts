import { BaseFormElement } from '../BaseFormElement';

export interface BannerFieldConfig extends BaseFormElement {
    componentType: "Banner";
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    iconColor?: string;
    title?: string;
    message?: string;
    icon?: any;
    iconSrc?: string;
    loading?: boolean;
}
