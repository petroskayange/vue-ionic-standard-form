import { BaseFormElement } from "../BaseFormElement";

export interface SearchableDropdownOption {
    label: string;
    value: any;
    [key: string]: any;
}

export interface SearchableDropdownConfig extends Omit<BaseFormElement, "bold"> {
    componentType: "searchableDropdown";
    name: string;
    header?: string;
    placeholder?: string;
    dropdownHeader?: string;
    options: SearchableDropdownOption[] | ((allValues: Record<string, any>) => SearchableDropdownOption[]);
    helperText?: string;
    multiple?: boolean;
    bold?: boolean;
    mode?: string;
    exclusiveValues?: Array<string | number | boolean>;
    allowCustomOption?: boolean;
    customOptionButtonLabel?: string;
    customOptionUnavailableLabel?: string;
    pageSize?: number;
    emptyState?: {
        title?: string;
        message: string;
    };
    onSearchChange?: (query: string, page?: number, pageSize?: number) => Promise<SearchableDropdownOption[] | any[]> | void;
    validation?: (value: any, allValues?: Record<string, any>) => string | null;
}
