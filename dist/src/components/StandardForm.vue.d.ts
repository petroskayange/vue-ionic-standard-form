import { FormElement } from '../interfaces/FormElement';
import { ConditionalRule } from '../interfaces/conditions';

type Field = FormElement & {
    __originalIndex: number;
    [key: string]: any;
};
declare function setFormValue(name: string, value: any): void;
declare function getFormValues(): Record<string, any>;
declare function resetForm(excludeFields?: string | string[]): Promise<void>;
declare function validateForm(): Record<string, string> | null;
declare function scrollFieldIntoView(name: string): Promise<void>;
declare function scrollToFirstError(errors: Record<string, string> | null | undefined): Promise<void>;
declare function __VLS_template(): Partial<Record<any, (_: {
    config: Field;
    formValues: Record<string, any>;
    updateValue: (name: string, value: unknown) => void;
}) => any>> & {
    voiceTextArea?(_: {
        config: (import('..').TextAreaFieldConfig & {
            [key: string]: any;
            __originalIndex: number;
        }) | (import('../interfaces/FormElement').LegacyFormElement & {
            [key: string]: any;
            __originalIndex: number;
        });
        formValues: Record<string, any>;
        updateValue: (name: string, value: unknown) => void;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    formData: FormElement[];
    conditionalRules?: ConditionalRule[];
    subtitle?: string;
    allFormValues?: Record<string, any>;
    initialData?: Record<string, any>;
    draftKey?: string;
    enableVoice?: boolean;
}>>, {
    getFormValues: typeof getFormValues;
    formValues: import('vue').ComputedRef<{
        [x: string]: any;
    }>;
    setFormValue: typeof setFormValue;
    resetForm: typeof resetForm;
    validateForm: typeof validateForm;
    scrollFieldIntoView: typeof scrollFieldIntoView;
    scrollToFirstError: typeof scrollToFirstError;
    clearDraft: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "field-changed": (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "update:form-values": (...args: any[]) => void;
    ready: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    formData: FormElement[];
    conditionalRules?: ConditionalRule[];
    subtitle?: string;
    allFormValues?: Record<string, any>;
    initialData?: Record<string, any>;
    draftKey?: string;
    enableVoice?: boolean;
}>>> & Readonly<{
    "onField-changed"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:form-values"?: ((...args: any[]) => any) | undefined;
    onReady?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
