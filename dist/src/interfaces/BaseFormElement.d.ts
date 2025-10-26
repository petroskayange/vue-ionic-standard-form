import { GridConfig } from './CommonTypes';

export interface BaseFormElement {
    name?: string;
    header?: string;
    icon?: string;
    grid?: GridConfig;
    width?: string;
    bold?: string;
    obsValueType?: "value_coded" | "value_drug" | "value_date" | "value_text" | "value_datetime" | "value_numeric" | "obs_datetime";
    disabled?: boolean | ((formValues: Record<string, any>) => boolean);
    condition?: (formValues: Record<string, any>) => boolean;
    value?: any;
    initialValue?: any;
    onChange?: (value: any, allValues?: Record<string, any>) => void;
    onInput?: (value: any, event: Event) => void;
    onClick?: (value: any, event: Event) => void;
    onBlur?: (value: any, event: Event) => void;
    onActionClick?: (value: any, event: Event) => void;
    validation?: (value: any, allValues?: Record<string, any>) => any;
    error?: boolean;
}
