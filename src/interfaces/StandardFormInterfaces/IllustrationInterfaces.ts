import { BaseFormElement } from "../BaseFormElement";

export interface IllustrationFieldConfig extends BaseFormElement {
    componentType: "illustration";
    category?: string;
    title?: string;
    caption?: string;
    description?: string;
    imageSrc: string;
    imageAlt?: string;
    borderColor?: string;
    backgroundColor?: string;
    contentPadding?: string;
    headerBackgroundColor?: string;
    headerPadding?: string;
    frameBorderColor?: string;
    frameBorderWidth?: string;
    footerBackgroundColor?: string;
    footerPadding?: string;
}
