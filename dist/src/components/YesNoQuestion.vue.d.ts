declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    question: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: () => boolean | string | null;
        default: null;
    };
    groupId: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    question: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: () => boolean | string | null;
        default: null;
    };
    groupId: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string | boolean | null;
    groupId: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
