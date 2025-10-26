import { PhoneInputFieldConfig, PhoneObject } from '../interfaces/StandardFormInterfaces/PhoneInputFieldConfig';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: PhoneInputFieldConfig;
    allFormValues: Record<string, any>;
}>>, {
    getValue: () => {
        phoneNumber: any;
        countryCode: string;
        countryIso: string;
        countryName: string;
    };
    getPhoneObject: () => {
        phoneNumber: any;
        countryCode: string;
        countryIso: string;
        countryName: string;
    };
    getPhoneNumber: () => any;
    setValue: (value: string | PhoneObject | {
        phoneNumber: string;
        countryCode: string;
        countryIso: string;
        countryName: string;
    }) => void;
    getCountry: () => {
        dialCode: string;
        iso2: string;
        name: string;
    };
    isValid: import('vue').ComputedRef<boolean>;
    validate: () => any;
    shouldShow: import('vue').ComputedRef<boolean>;
    markAsTouched: () => boolean;
    resetTouched: () => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (...args: any[]) => void;
    "field-changed": (...args: any[]) => void;
    "country-changed": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: PhoneInputFieldConfig;
    allFormValues: Record<string, any>;
}>>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onField-changed"?: ((...args: any[]) => any) | undefined;
    "onCountry-changed"?: ((...args: any[]) => any) | undefined;
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
