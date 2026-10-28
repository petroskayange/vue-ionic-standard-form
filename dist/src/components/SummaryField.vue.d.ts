import { PropType } from 'vue';
import { SummaryFieldConfig } from '../interfaces/StandardFormInterfaces/SummaryFieldConfig';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<SummaryFieldConfig>;
        required: true;
    };
    allFormValues: {
        type: PropType<Record<string, any>>;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<SummaryFieldConfig>;
        required: true;
    };
    allFormValues: {
        type: PropType<Record<string, any>>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
