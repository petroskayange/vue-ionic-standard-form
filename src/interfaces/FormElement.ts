import { InputFieldConfig } from "./StandardFormInterfaces/InputFieldConfig";
import { TextAreaFieldConfig } from "./StandardFormInterfaces/TextAreaFieldConfig";
import { CheckboxFieldConfig } from "./StandardFormInterfaces/CheckboxFieldConfig";
import { RadioButtonFieldConfig } from "./StandardFormInterfaces/RadioButtonFieldConfig";
import { DateFieldConfig } from "./StandardFormInterfaces/DateFieldConfig";
import { PhoneInputFieldConfig } from "./StandardFormInterfaces/PhoneInputFieldConfig";
import { AlertFieldConfig } from "./StandardFormInterfaces/AlertFieldConfig";
import { HeadingFieldConfig } from "./StandardFormInterfaces/ItemHeaderConfig";
import { MultiSelectFieldConfig } from "./StandardFormInterfaces/MultiselectFieldConfig";
import { DashesFieldConfig } from "./StandardFormInterfaces/DashesFieldConfig";
import { TimeFieldConfig } from "./StandardFormInterfaces/TimeFieldConfig";
import { SlotConfig } from "./StandardFormInterfaces/SlotConfig";
import { InfographicFieldConfig } from "./StandardFormInterfaces/InfographicFieldConfig";
import { IllustrationFieldConfig } from "./StandardFormInterfaces/IllustrationInterfaces";
import { ListSelectionFieldConfig } from "./StandardFormInterfaces/ListSelectionFieldConfig";
import { SummaryFieldConfig } from "./StandardFormInterfaces/SummaryFieldConfig";
import { ScoreFieldConfig } from "./StandardFormInterfaces/ScoreFieldConfig";
import { SwitchFieldConfig } from "./StandardFormInterfaces/SwitchFieldConfig";
import { YesNoQuestionFieldConfig } from "./StandardFormInterfaces/YesNoQuestionFieldConfig";
import { SearchableDropdownConfig } from "./StandardFormInterfaces/SearchableDropdownConfig";
import { DrugPrescriptionFieldConfig } from "./StandardFormInterfaces/DrugPrescriptionFieldConfig";
import { DateTimeFieldConfig } from "./StandardFormInterfaces/DateTimeFieldConfig";
import { BannerFieldConfig } from "./StandardFormInterfaces/BannerFieldConfig";
import { FacilitySelectorFieldConfig } from "./StandardFormInterfaces/FacilitySelectorFieldConfig";

/**
 * Compatibility shape for form configurations that predate the typed
 * StandardForm interfaces. Runtime form rendering is driven by componentType
 * and supports additional component-specific properties.
 */
export interface LegacyFormElement {
    componentType?: string;
    [key: string]: any;
}

export type FormElement =
    | InputFieldConfig
    | TextAreaFieldConfig
    | CheckboxFieldConfig
    | RadioButtonFieldConfig
    | DateFieldConfig
    | DateTimeFieldConfig
    | PhoneInputFieldConfig
    | AlertFieldConfig
    | HeadingFieldConfig
    | MultiSelectFieldConfig
    | DashesFieldConfig
    | TimeFieldConfig
    | SlotConfig
    | InfographicFieldConfig
    | IllustrationFieldConfig
    | ListSelectionFieldConfig
    | SummaryFieldConfig
    | ScoreFieldConfig
    | SwitchFieldConfig
    | YesNoQuestionFieldConfig
    | SearchableDropdownConfig
    | DrugPrescriptionFieldConfig
    | BannerFieldConfig
    | LegacyFormElement
    | FacilitySelectorFieldConfig;
