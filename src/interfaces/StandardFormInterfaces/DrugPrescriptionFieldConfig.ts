import { BaseFormElement } from "../BaseFormElement";
import type { UnitOption } from "./InputFieldConfig";

export interface DrugPrescriptionValue {
    name: string;
    frequency: string;
    dosage: string;
    drug_id: string;
}

export interface DrugPrescriptionFieldConfig extends Omit<BaseFormElement, "bold"> {
    componentType: "drugPrescriptionField";
    name: string;
    header?: string;
    bold?: boolean;
    placeholder?: string;
    frequencies?: string[];
    pageSize?: number;
    predefinedDrugs?: Array<{ drug_id: number | string; name: string }>;
    conceptSetName?: string;
    prefillFromPastMedications?: boolean;
    dosageUnits?: UnitOption[];
    validation?: (value: DrugPrescriptionValue[], allFormValues?: Record<string, any>) => string | null;
}
