import { BaseFormElement } from "../BaseFormElement";

export interface SummaryFieldRow {
    section?: string;
    label?: string;
    value?: string | null;
    detail?: string;
    alwaysShow?: boolean;
}

export type AutoSummaryScope = "all" | "beforeCurrent";

export interface AutoSummaryConfig {
    enabled?: boolean;
    scope?: AutoSummaryScope;
    showMissingAsDash?: boolean;
    respectSkipCondition?: boolean;
    includeFieldNames?: string[];
    excludeFieldNames?: string[];
    excludeComponentTypes?: string[];
}

export interface SummaryFieldConfig extends BaseFormElement {
    componentType?: "summaryField";
    title?: string;
    subtitle?: string;
    description?: string;
    summaryRows?: SummaryFieldRow[];
    builder?: (formValues: Record<string, any>) => SummaryFieldRow[];
    autoSummary?: AutoSummaryConfig;
    emptyStateMessage?: string;
}
