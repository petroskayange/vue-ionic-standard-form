import { InputFieldConfig } from "./StandardFormInterfaces/InputFieldConfig";
import { CheckboxFieldConfig } from "./StandardFormInterfaces/CheckboxFieldConfig";
import { RadioButtonFieldConfig } from "./StandardFormInterfaces/RadioButtonFieldConfig";
import { DateFieldConfig } from "./StandardFormInterfaces/DateFieldConfig";
import { PhoneInputFieldConfig } from "./StandardFormInterfaces/PhoneInputFieldConfig";
import { AlertFieldConfig } from "./StandardFormInterfaces/AlertFieldConfig";
import { HeadingFieldConfig } from "./StandardFormInterfaces/ItemHeaderConfig";
import { MultiSelectFieldConfig } from "./StandardFormInterfaces/MultiselectFieldConfig";
import { DashesFieldConfig } from "./StandardFormInterfaces/DashesFieldConfig";

export type FormElement =
    | InputFieldConfig
    | CheckboxFieldConfig
    | RadioButtonFieldConfig
    | DateFieldConfig
    | PhoneInputFieldConfig
    | AlertFieldConfig
    | HeadingFieldConfig
    | MultiSelectFieldConfig
    | DashesFieldConfig;
