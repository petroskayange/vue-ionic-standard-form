interface Token {
    type: "field" | "operator" | "value" | "parenthesis";
    value: string;
}
interface Expression {
    type: "comparison" | "logical";
    operator?: string;
    left?: Expression;
    right?: Expression;
    field?: string;
    value?: any;
}
export type ConditionalActionType = "hideField" | "showField" | "hideSection" | "showSection" | "setValue" | "clearValue" | "setRequired" | "setOptional" | "setDisabled" | "setEnabled" | "showWarning" | "showError" | "showDialog" | "customAction";
export interface ConditionalAction {
    type: ConditionalActionType;
    target?: string | string[];
    value?: any;
    message?: string;
    title?: string;
    customFn?: (formValues: Record<string, any>) => void;
}
export interface ConditionalRule {
    id?: string;
    name?: string;
    condition: string | ((formValues: Record<string, any>) => boolean);
    actions: ConditionalAction[];
    priority?: number;
}
export interface FieldConditionalConfig {
    fieldName: string;
    rules: ConditionalRule[];
}
export interface SectionConditionalConfig {
    sectionName: string;
    rules: ConditionalRule[];
}
export type { Expression, Token };
