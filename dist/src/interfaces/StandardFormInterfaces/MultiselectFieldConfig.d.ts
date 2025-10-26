import { BaseFormElement } from '../BaseFormElement';

export interface MultiSelectOption {
    value: any;
    label: string;
}
export interface MultiSelectFieldConfig extends BaseFormElement {
    componentType: "multiSelectInputField";
    placeholder?: string;
    helperText?: string;
    isMultiple?: boolean;
    taggable?: boolean;
    hideSelected?: boolean;
    closeOnSelect?: boolean;
    openDirection?: "top" | "bottom";
    preventAutofocus?: boolean;
    loading?: boolean;
    searchable?: boolean;
    trackBy?: string;
    label?: string;
    selectLabel?: string;
    tagPlaceholder?: string;
    options?: Array<any> | ((allFormValues: Record<string, any>) => Array<any>);
    onOpen?: (value: any) => void;
    onClose?: (value: any) => void;
    onTag?: (tag: any) => void;
    onSearchChange?: (searchQuery: string) => void;
}
