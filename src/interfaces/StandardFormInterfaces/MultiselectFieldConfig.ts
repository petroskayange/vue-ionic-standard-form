import { BaseFormElement } from "../BaseFormElement";

export interface MultiSelectOption {
    value: any;
    label: string;
}

export interface MultiSelectFieldConfig extends BaseFormElement {
    componentType: "multiSelectInputField";
    placeholder?: string;
    helperText?: string;
    isMultiple?: boolean;
    useTeleport?: boolean;
    /**
     * Class added to the option-list container. This is useful when the list is
     * teleported to <body>, where component-scoped styles cannot reach it.
     */
    contentWrapperClass?: string;
    taggable?: boolean;
    hideSelected?: boolean;
    closeOnSelect?: boolean;
    openDirection?: "top" | "bottom" | "auto";
    preventAutofocus?: boolean;
    preventScrollOnOpen?: boolean;
    loading?: boolean;
    searchable?: boolean;
    internalSearch?: boolean;
    trackBy?: string;
    label?: string;
    selectLabel?: string;
    tagPlaceholder?: string;
    customOptionTemplate?: boolean;
    mode?: "standard" | "card" | "neonatal" | "";
    options?: Array<any> | ((allFormValues: Record<string, any>) => Array<any>);
    onOpen?: (value: any) => void;
    onClose?: (value: any) => void;
    onTag?: (tag: any) => void;
    onSearchChange?: (searchQuery: string) => void;
    hasMoreOptions?: boolean;
    loadingMore?: boolean;
    loadMoreText?: string;
    onLoadMore?: () => void | Promise<void>;
}
