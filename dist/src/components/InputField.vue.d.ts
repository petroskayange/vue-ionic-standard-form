import { InputFieldConfig } from '../interfaces/StandardFormInterfaces/InputFieldConfig';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: InputFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>>, {
    getValue: () => any;
    getUnit: () => string | null;
    setValue: (value: any) => void;
    setUnit: (unit: string | null) => void;
    isValid: import('vue').ComputedRef<boolean>;
    validate: () => any;
    shouldShow: import('vue').ComputedRef<any>;
    markAsTouched: () => void;
    resetTouched: () => void;
    clearError: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (...args: any[]) => void;
    "field-changed": (...args: any[]) => void;
    "update:unit": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: InputFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onField-changed"?: ((...args: any[]) => any) | undefined;
    "onUpdate:unit"?: ((...args: any[]) => any) | undefined;
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
