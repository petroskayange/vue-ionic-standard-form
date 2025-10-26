import { RadioButtonFieldConfig } from '../interfaces/StandardFormInterfaces/RadioButtonFieldConfig';

declare function clearSelection(): void;
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: RadioButtonFieldConfig;
    allFormValues: Record<string, any>;
}>>, {
    getValue: () => any;
    setValue: (value: string | number | boolean | null) => void;
    isValid: import('vue').ComputedRef<boolean>;
    validate: () => any;
    shouldShow: import('vue').ComputedRef<boolean>;
    clearSelection: typeof clearSelection;
    getSelectedOption: () => import('../interfaces/StandardFormInterfaces/RadioButtonFieldConfig').RadioOption | null;
    markAsTouched: () => boolean;
    resetTouched: () => boolean;
    hasSelection: import('vue').ComputedRef<boolean>;
    canClear: import('vue').ComputedRef<boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (...args: any[]) => void;
    "field-changed": (...args: any[]) => void;
    cleared: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: RadioButtonFieldConfig;
    allFormValues: Record<string, any>;
}>>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onField-changed"?: ((...args: any[]) => any) | undefined;
    onCleared?: ((...args: any[]) => any) | undefined;
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
