import { PropType } from 'vue';
import { ScoreFieldConfig } from '../interfaces/StandardFormInterfaces/ScoreFieldConfig';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<ScoreFieldConfig>;
        required: true;
    };
    allFormValues: {
        type: PropType<Record<string, any>>;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<ScoreFieldConfig>;
        required: true;
    };
    allFormValues: {
        type: PropType<Record<string, any>>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
