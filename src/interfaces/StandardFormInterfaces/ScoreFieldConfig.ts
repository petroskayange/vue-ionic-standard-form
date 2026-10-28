import { BaseFormElement } from "../BaseFormElement";

export type ScoreVariant = "default" | "success" | "warning" | "danger";

export interface ScoreFieldConfig extends BaseFormElement {
    componentType: "scoreField";
    title?: string;
    subtitle?: string;
    description?: string;
    value?: number | string;
    padTo?: number;
    unit?: string;
    variant?: ScoreVariant;
    emptyStateMessage?: string;
    computeValue?: (formValues: Record<string, any>) => number | string | undefined | null;
}
