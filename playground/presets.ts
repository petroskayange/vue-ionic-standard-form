import type { FormElement } from "../src/interfaces/FormElement";
import assessmentIllustrationUrl from "./assessment-illustration.svg?url";

export interface PlaygroundPreset {
  id: string;
  title: string;
  description: string;
  fields: FormElement[];
}

export const presets: PlaygroundPreset[] = [
  {
    id: "vitals",
    title: "Vital signs",
    description: "Inputs, a switch, and a radio group adapted from MaHIS clinical forms.",
    fields: [
      { componentType: "Heading", name: "Height and weight" },
      { componentType: "Banner", name: "vitals_guide", title: "Record the observations", message: "Try a field, then inspect its live value on the right.", backgroundColor: "#e9f4ff" },
      { componentType: "inputField", name: "weight", header: "Weight", type: "number", placeholder: "Enter weight", unit: "kg", grid: { s: "12", md: "6" }, obsValueType: "value_numeric", validation: value => Number(value) > 0 ? null : "Enter a valid weight" },
      { componentType: "inputField", name: "temperature", header: "Temperature", type: "number", placeholder: "Enter temperature", unit: "°C", grid: { s: "12", md: "6" }, obsValueType: "value_numeric" },
      { componentType: "switchField", name: "can_measure_oxygen_saturation", label: "Oxygen saturation available", initialValue: false },
      { componentType: "inputField", name: "oxygen_saturation", header: "Oxygen saturation in air", type: "number", unit: "%", condition: values => values.can_measure_oxygen_saturation === true },
      { componentType: "radioButtonField", name: "oedema", header: "Bilateral pitting oedema", type: "inline", options: [{ label: "None", value: "None" }, { label: "+", value: "+" }, { label: "++", value: "++" }] },
    ],
  },
  {
    id: "choices",
    title: "Choices & text",
    description: "Selection controls, a question, and a multiline note.",
    fields: [
      { componentType: "Heading", name: "Assessment choices" },
      { componentType: "checkboxField", name: "danger_signs", header: "Danger signs", type: "multiple", twoColumns: true, options: [{ label: "None", value: "none", exclusive: true }, { label: "Bleeding", value: "Bleeding" }, { label: "Headache", value: "Headache" }] },
      { componentType: "multiSelectInputField", name: "printer_type", header: "Printer type", placeholder: "Select a printer", label: "label", trackBy: "value", options: [{ label: "Small label", value: "small_label" }, { label: "A4 document", value: "a4" }] },
      { componentType: "listSelectionField", name: "activityAssessment", header: "How is the baby's activity?", type: "single", titleStyle: "tonal", options: [{ label: "Alert, active, appropriate", value: "Alert" }, { label: "Lethargic, quiet", value: "Leth" }, { label: "Convulsions", value: "Convulsions" }] },
      { componentType: "searchableDropdown", name: "workingDiagnosis", header: "Primary diagnosis", placeholder: "Search for diagnosis", options: [{ label: "Neonatal sepsis", value: "sepsis" }, { label: "Hypothermia", value: "hypothermia" }] },
      { componentType: "yesNoQuestion", name: "consent", question: "Was consent obtained?" },
      { componentType: "textAreaField", name: "assessment_note", header: "Assessment note", placeholder: "Enter clinical notes", rows: 4, showCounter: true, maxLength: 500 },
    ],
  },
  {
    id: "date_contact",
    title: "Date & contact",
    description: "Date, time, date-time, and country-aware phone inputs.",
    fields: [
      { componentType: "Heading", name: "Enrollment details" },
      { componentType: "dateInputField", name: "birthDate", header: "Date of birth", placeholder: "Select date", showTodayButton: true },
      { componentType: "timeInputField", name: "birthTime", header: "Time of birth", showNowButton: true },
      { componentType: "dateTimeInputField", name: "reviewed_at", header: "Reviewed at" },
      { componentType: "phoneInputField", name: "provider_phone", header: "Provider phone", defaultCountry: "MW", preferredCountries: ["MW", "ZM"] },
    ],
  },
  {
    id: "display_slots",
    title: "Display & slots",
    description: "Read-only components and examples of MaHIS controls supplied by the app.",
    fields: [
      { componentType: "Heading", name: "Review and guidance" },
      { componentType: "Alert", name: "assessment_alert", type: "warning", message: "Review all findings before saving." },
      { componentType: "Banner", name: "assessment_guide", title: "Assessment guide", message: "Use the controls below to see how display fields and slots behave.", backgroundColor: "#fff5df" },
      { componentType: "Dashes" },
      { componentType: "scoreField", name: "thompsonScoreComputed", title: "Example score", value: 4, variant: "success", padTo: 2 },
      { componentType: "summaryField", name: "reviewSummary", title: "Example summary", summaryRows: [{ section: "Vitals", label: "Weight", value: "3.2 kg" }, { section: "Vitals", label: "Oedema", value: "None" }] },
      { componentType: "illustration", name: "assessmentIllustration", title: "Illustration", imageSrc: assessmentIllustrationUrl, imageAlt: "Simple line illustration of a clipboard and heart", caption: "Replace this image with an application asset." },
      { componentType: "infographicField", name: "hypothermia_management", header: "Hypothermia management", displayMode: "cards", showStepNumber: true, infographicData: { key: "hypothermia", sections: [{ title: "Keep warm", content: "Dry and wrap the baby." }, { title: "Recheck", content: "Repeat the temperature measurement." }], footerNote: "Escalate if temperature remains low." } },
      { componentType: "Slot", name: "demoCounter", slotName: "playgroundCounter" },
      { componentType: "facilitySelectorField", name: "transferFacility", header: "Receiving facility" },
      { componentType: "drugPrescriptionField", name: "prescriptions", header: "Prescriptions" },
    ],
  },
];
