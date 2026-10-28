import { SearchableDropdownConfig, SearchableDropdownOption } from '../interfaces/StandardFormInterfaces/SearchableDropdownConfig';

interface Props {
    config: SearchableDropdownConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>, {
    getValue: () => SearchableDropdownOption | SearchableDropdownOption[] | null;
    setValue: (value: SearchableDropdownOption | SearchableDropdownOption[] | null) => void;
    isValid: import('vue').ComputedRef<boolean>;
    validate: () => string | null;
    shouldShow: import('vue').ComputedRef<boolean>;
    markAsTouched: () => void;
    resetTouched: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (value: SearchableDropdownOption | SearchableDropdownOption[] | null) => void;
    "field-changed": (payload: {
        fieldName: string;
        value: any;
        config: SearchableDropdownConfig;
        newValue?: any;
    }) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>> & Readonly<{
    "onUpdate:value"?: ((value: SearchableDropdownOption | SearchableDropdownOption[] | null) => any) | undefined;
    "onField-changed"?: ((payload: {
        fieldName: string;
        value: any;
        config: SearchableDropdownConfig;
        newValue?: any;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
