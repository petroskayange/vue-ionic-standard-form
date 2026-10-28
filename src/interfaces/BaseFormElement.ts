import { GridConfig } from "./CommonTypes";
import { FormSectionInfo } from "./FormSectionInfo";

export interface BaseFormElement {
    name?: string;
    header?: string;
    icon?: string;

    grid?: GridConfig;
    width?: string;
    offset?: string;
    bold?: string;
    obsValueType?: "value_coded" | "value_drug" | "value_date" | "value_text" | "value_datetime" | "value_numeric" | "obs_datetime" | "image";
    obsParentConcept?: string;
    obsBodyPartPrefix?: string;

    padding?: boolean | string;
    noPadding?: boolean;
    noMargin?: boolean;
    hidden?: boolean;
    disabled?: boolean | ((formValues: Record<string, any>) => boolean);
    condition?: (formValues: Record<string, any>) => boolean | any;

    value?: any;
    initialValue?: any;

    onChange?: (value: any, allValues?: Record<string, any>) => void;
    onInput?: (value: any, event: Event) => void;
    onClick?: (value: any, event: Event) => void;
    onBlur?: (value: any, event: Event) => void;
    onKeydown?: (value: any, event: KeyboardEvent) => void;
    onActionClick?: (value: any, event: Event, func?: (value: any) => void) => void;

    validation?: (value: any, allValues?: Record<string, any>) => any;
    error?: boolean;
    section?: FormSectionInfo;
    mode?: string;
}
