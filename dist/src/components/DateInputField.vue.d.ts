import { DateFieldConfig } from '../interfaces/StandardFormInterfaces/DateFieldConfig';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: DateFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>>, {
    getValue: () => any;
    getRawValue: () => string | Date | null;
    setValue: (value: string) => string;
    setRawValue: (value: string | Date | null) => string | Date | null;
    isValid: import('vue').ComputedRef<boolean>;
    validate: () => any;
    shouldShow: import('vue').ComputedRef<any>;
    markAsTouched: () => boolean;
    resetTouched: () => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (...args: any[]) => void;
    "field-changed": (...args: any[]) => void;
    "update:rawValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: DateFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onField-changed"?: ((...args: any[]) => any) | undefined;
    "onUpdate:rawValue"?: ((...args: any[]) => any) | undefined;
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
