import { BaseFormElement } from "../BaseFormElement";

export type InfographicHighlightType = "info" | "warning" | "danger";

export interface InfographicSectionItem {
    title?: string;
    subtitle?: string;
    content?: string;
    bullets?: string[];
    description?: string;
    caption?: string;
    image?: string;
    highlightText?: string;
    highlightType?: InfographicHighlightType;
}

export interface InfographicData {
    key: string;
    header?: string;
    subtitle?: string;
    description?: string;
    helperText?: string;
    helperImage?: string;
    labels?: string[];
    values?: string[];
    images?: string[];
    descriptions?: Array<string | string[]>;
    sections?: InfographicSectionItem[];
    footerNote?: string;
    footerNoteType?: InfographicHighlightType;
}

export interface InfographicFieldConfig extends BaseFormElement {
    componentType: "infographicField";
    showValues?: boolean;
    displayMode?: "list" | "cards" | "visual";
    showStepNumber?: boolean;
    cardVariant?: "default" | "summary";
    subtitle?: string;
    description?: string;
    helperText?: string;
    helperImage?: string;
    footerNote?: string;
    footerNoteType?: InfographicHighlightType;
    infographicData: InfographicData | string | (() => Promise<InfographicData> | InfographicData);
    dataSource?: string;
}
