import { BaseFormElement } from '../BaseFormElement';

export interface HeadingFieldConfig extends BaseFormElement {
    componentType: "Heading";
    position?: "left" | "center" | "right" | string;
    name?: string;
}
