// SwitchFieldConfig.ts
import { BaseFormElement } from "../BaseFormElement";

export interface SwitchFieldConfig extends BaseFormElement {
    componentType: "switchField";

    /**
     * Main text label (usually the field name)
     */
    label?: string;
    offLabel?: string;
    onLabel?: string;

    /**
     * Small grey text appearing before the main label
     * Example: (Are you able to measure)
     */
    prefixText?: string;

    helperText?: string;

    onText?: string;
    offText?: string;

    trueValue?: string | number | boolean;
    falseValue?: string | number | boolean;
    allowClearToNull?: boolean;

    showClearButton?: boolean;
    showClearButtonBottom?: boolean;

    onClear?: (previousValue: string | number | boolean | null) => void;
}
