import { BaseFormElement } from "../BaseFormElement";

export interface YesNoQuestionFieldConfig extends BaseFormElement {
    componentType: "yesNoQuestion";
    question?: string;
    name?: string;
}
