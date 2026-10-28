import { PropType } from 'vue';
import { ListSelectionFieldConfig } from '../interfaces/StandardFormInterfaces/ListSelectionFieldConfig';

type OptionWithChildren = {
    label: string;
    value: string | number | boolean;
    description?: string;
    disabled?: boolean;
    children?: ListSelectionFieldConfig;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<ListSelectionFieldConfig & {
            options: OptionWithChildren[];
        }>;
        required: true;
    };
    allFormValues: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    modelValue: {
        type: PropType<string | number | boolean | (string | number | boolean)[]>;
        default: null;
    };
    nestedLevel: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    getValue: () => any;
    setValue: (value: any) => void;
    validate: () => string | null;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "field-changed": (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<ListSelectionFieldConfig & {
            options: OptionWithChildren[];
        }>;
        required: true;
    };
    allFormValues: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    modelValue: {
        type: PropType<string | number | boolean | (string | number | boolean)[]>;
        default: null;
    };
    nestedLevel: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onField-changed"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    allFormValues: Record<string, any>;
    modelValue: string | number | boolean | (string | number | boolean)[];
    nestedLevel: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
