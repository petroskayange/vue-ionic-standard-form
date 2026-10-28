# Vue Ionic Standard Form

A schema-driven form component for Vue 3 and Ionic Vue. A `formData` array selects the controls to render; `StandardForm` keeps their values, runs field validation, and exposes methods through a Vue ref.

The examples are adapted from form configurations in MaHIS, with application services removed so they can be used in another project.

## Upgrading from 1.0.2

Version 2.0.0 changes the result of `getFormValues()`: it now returns only nonempty, visible answers plus observation metadata. Values such as `false` and `0` remain in the result. If your application needs every current value, including empty answers, use the exposed `formValues` snapshot instead. The form also clears answers when their fields become hidden by a condition. `resetForm()` is asynchronous; await it before reading the reset state.

## Install and first form

Install the package in an Ionic Vue 8 application and import its CSS once:

```bash
npm install vue-ionic-standard-form
```

```ts
// main.ts
import "vue-ionic-standard-form/dist/style.css";
```

Use `header` for a field label and `name` for the key returned by `getFormValues()`:

```vue
<template>
  <ion-page>
    <ion-content>
      <StandardForm ref="formRef" :form-data="fields" />
      <ion-button @click="save">Save</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { StandardForm } from "vue-ionic-standard-form";
import type { FormElement } from "vue-ionic-standard-form";

const formRef = ref<InstanceType<typeof StandardForm> | null>(null);
const fields: FormElement[] = [
  { componentType: "Heading", name: "Vital signs" },
  {
    componentType: "inputField",
    name: "weight",
    header: "Weight",
    type: "number",
    unit: "kg",
    obsValueType: "value_numeric",
    validation: value => Number(value) > 0 ? null : "Enter a valid weight",
  },
  {
    componentType: "radioButtonField",
    name: "oedema",
    header: "Bilateral pitting oedema",
    type: "inline",
    options: [
      { label: "None", value: "None" },
      { label: "+", value: "+" },
      { label: "++", value: "++" },
    ],
  },
];

function save() {
  const errors = formRef.value?.validateForm();
  if (errors) {
    void formRef.value?.scrollToFirstError(errors);
    return;
  }
  const values = formRef.value?.getFormValues();
  console.log(values); // { weight: "3.2", oedema: "None", obsValueType: { weight: "value_numeric" } }
}
</script>
```

MaHIS uses this same pattern in `src/apps/IMPOW/components/IMPOWVitals.vue`, with field definitions from `src/apps/IMPOW/composables/forms/vitals/useHeightWeightForm.ts`.

## How a form works

### Form props

| Prop | Purpose |
| --- | --- |
| `formData` | Required array of field configs, in display order. |
| `subtitle` | Optional text above the grid. |
| `initialData` | Saved values to load on mount; these override field `value` and `initialValue`. |
| `allFormValues` | Values supplied by a parent. Incoming keys are merged into the form and watched for changes. |
| `conditionalRules` | Rules for hiding fields and setting values; see [Conditions](#conditions-and-dependent-fields). |
| `draftKey` | Optional local storage key for recovering unsaved values. Use a stable key scoped to one patient and form. |
| `enableVoice` | When true, text areas may use a supplied `#voiceTextArea` slot. Without that slot they remain ordinary text areas. |

The form emits `update:modelValue` and `update:form-values` with the current value object. `field-changed` emits `{ fieldName, value, allValues }`. `ready` emits the field-ref map after initial values have been applied. `update:modelValue` is an event; the component does not have a `modelValue` prop, so use `allFormValues` for incoming values.

```vue
<StandardForm
  ref="formRef"
  :form-data="fields"
  :initial-data="savedValues"
  :all-form-values="currentValues"
  @field-changed="event => console.log(event.fieldName, event.value)"
  @update:form-values="values => currentValues = values"
  @ready="fieldRefs => console.log(fieldRefs)"
/>
```

### Methods on `ref`

| Method | Result |
| --- | --- |
| `getFormValues()` | Current nonempty, visible answers plus observation metadata. Keeps `false` and `0`. |
| `formValues` | Reactive snapshot of internal state, including values that `getFormValues()` filters out. |
| `setFormValue(name, value)` | Sets a value and updates the rendered control when it has a field ref. |
| `resetForm(excludeFields?)` | Async reset; pass a field name or array of names to preserve. Metadata maps are retained. |
| `validateForm()` | Returns `null` or `{ [fieldName]: errorMessage }` for visible controls with a `validate` method. |
| `scrollFieldIntoView(name)` | Scrolls to a named field. |
| `scrollToFirstError(errors)` | Scrolls to the first key in a validation result. |
| `clearDraft()` | Removes the local draft after a successful save. |

`Slot`, `yesNoQuestion`, and read-only display components do not expose a child `validate` method to the form. Validate their values in your submit handler if they are required. A MaHIS example of a slot owning its own validation is `src/components/Registration/Referral.vue`.

### Shared field options

All field configs extend `BaseFormElement`. Use a stable `name` for answer fields. `header` is the visible label for most controls; `checkboxField` can also use `label`, and `Heading` displays its `name`.

| Option | Use |
| --- | --- |
| `value`, `initialValue` | Starting answer. `value` takes precedence when non-null; `false` and `0` are valid defaults. |
| `condition(values)` | Returns a truthy value to show a field. Hidden answer values are cleared, except values owned by `Slot`. For `Alert` and `Banner`, the return value can be the content object described below. |
| `disabled` | Boolean or function of current values for editable controls that support disabling. |
| `validation(value, allValues)` | Return an error string or `null`. Use this instead of a generic `required` flag. |
| `grid` | Ionic column sizes, such as `{ s: "12", md: "6" }`. Supported keys: `s`, `xs`, `sm`, `md`, `lg`, `xl`. |
| `offset`, `noPadding`, `noMargin`, `padding`, `mode` | Layout and style options used by the form or individual controls. |
| `section` | `{ id, title?, description?, mode? }`. Consecutive fields with the same `section.id` are grouped under one heading. |
| `obsValueType`, `obsParentConcept`, `obsBodyPartPrefix` | MaHIS observation metadata. Returned in maps by `getFormValues()`. |
| `onChange`, `onInput`, `onBlur`, `onClick` | Control callbacks where supported. Prefer the form's `field-changed` event for side effects. |

For the complete TypeScript shape of each field, see [the config interfaces](src/interfaces/StandardFormInterfaces/). Config types are exported from the package entry point.

### Conditions and dependent fields

MaHIS uses both `condition` on individual fields and `conditionalRules` for neonatal forms. This package applies the `hideField` and `setValue` actions from a matching rule. A hidden non-slot field is cleared, and `getFormValues()` omits it. Other action names exist in the shared type but are not applied by this package form component.

```ts
import type { ConditionalRule, FormElement } from "vue-ionic-standard-form";

const fields: FormElement[] = [
  {
    componentType: "switchField",
    name: "can_measure_oxygen_saturation",
    label: "Oxygen saturation available",
    initialValue: false,
  },
  {
    componentType: "inputField",
    name: "oxygen_saturation",
    header: "Oxygen saturation in air",
    type: "number",
    unit: "%",
    condition: values => values.can_measure_oxygen_saturation === true,
    validation: value => value === "" || value == null ? "Enter oxygen saturation" : null,
  },
];

const rules: ConditionalRule[] = [
  {
    condition: values => values.can_measure_oxygen_saturation !== true,
    actions: [{ type: "hideField", target: "oxygen_saturation" }],
  },
];
```

Use `:form-data="fields" :conditional-rules="rules"`. The switch and conditional oxygen field are adapted from `src/apps/Neonatal/config/vitals.ts`; neonatal section components pass both props to MaHIS `StandardForm`.

### Draft recovery

Pass `draftKey` to save nonempty answers to local storage. On mount, `initialData` and `allFormValues` are applied before a draft; the draft only fills empty values. Clear it once the server accepts the form. MaHIS follows this pattern in `src/apps/AETC/components/MedicalInpatient/ManagementPlan.vue`:

```vue
<StandardForm ref="formRef" :form-data="fields" :draft-key="`patient:${patientId}:admission`" />
```

```ts
async function save() {
  const errors = formRef.value?.validateForm();
  if (errors) return;
  await saveAdmission(formRef.value?.getFormValues()); // Your application API
  formRef.value?.clearDraft();
}
```

## Component reference

Each object below belongs in `formData`. The examples use the same field patterns as MaHIS, with service calls and imported icons replaced by self-contained values. Display components do not emit answer changes.

| Display and guidance | Inputs and choices | Derived and custom |
| --- | --- | --- |
| [Heading](#heading) | [inputField](#inputfield) | [summaryField](#summaryfield) |
| [Alert](#alert) | [textAreaField](#textareafield) | [scoreField](#scorefield) |
| [Banner](#banner) | [multiSelectInputField](#multiselectinputfield) | [Slot](#slot) |
| [Dashes](#dashes) | [checkboxField](#checkboxfield) | [MaHIS-specific slots](#mahis-specific-controls-through-slots) |
| [illustration](#illustration) | [radioButtonField](#radiobuttonfield) | |
| [infographicField](#infographicfield) | [dateInputField](#dateinputfield) | |
| | [dateTimeInputField](#datetimeinputfield) | |
| | [timeInputField](#timeinputfield) | |
| | [phoneInputField](#phoneinputfield) | |
| | [switchField](#switchfield) | |
| | [yesNoQuestion](#yesnoquestion) | |
| | [listSelectionField](#listselectionfield) | |
| | [searchableDropdown](#searchabledropdown) | |

### `Heading`

Displays `name` as static heading text. `position` is part of its config type; the current component template uses inline `text-align` from this value.

```ts
{ componentType: "Heading", name: "Height and weight", position: "left" }
```

MaHIS: `src/apps/IMPOW/composables/forms/vitals/useHeightWeightForm.ts`.

### `inputField`

Single-line text or number input. Use `type`, `placeholder`, `inputMode`, `min`, `max`, `step`, `digitsOnly`, `capitalizeFirstLetter`, `unit`, `unitOptions`, `actionButton`, or `validateOnBlur` as needed. The answer is the entered value; numeric input may still arrive as a string, so convert it when building an API payload.

```ts
{
  componentType: "inputField",
  name: "weight",
  header: "Weight",
  type: "number",
  placeholder: "Enter weight",
  unit: "kg",
  grid: { s: "12", md: "4" },
  obsValueType: "value_numeric",
  validation: value => Number(value) > 0 ? null : "Enter a valid weight",
}
```

MaHIS: `src/apps/IMPOW/composables/forms/vitals/useHeightWeightForm.ts`.

### `textAreaField`

Multiline text. `rows`, `autoGrow`, `maxLength`, `showCounter`, `helperText`, and `actionButton` control its behavior. Use `voice: false` to keep an individual field typed when the form enables a voice slot. The answer is a string.

```ts
{
  componentType: "textAreaField",
  name: "congenitalAbnormalitiesDescription",
  header: "Describe the congenital abnormality",
  placeholder: "Enter details",
  rows: 4,
  maxLength: 1000,
  condition: values => values.congenitalAbnormalitiesType === "other",
  validation: (value, values) =>
    values?.congenitalAbnormalitiesType === "other" && !value ? "Please add a description" : null,
}
```

MaHIS: `src/apps/Neonatal/config/generalExamination.ts`. See [Voice text areas](#voice-text-areas) for the package slot.

### `multiSelectInputField`

Searchable Vue Multiselect. `options` can be an array or a function of all current values. Set `label` to the display property and `trackBy` to its stable key. `isMultiple: true` returns an array of option objects; otherwise it returns one selected option. Other options include `taggable`, `loading`, `openDirection`, `onSearchChange`, `onLoadMore`, and `useTeleport`.

```ts
{
  componentType: "multiSelectInputField",
  name: "printer_type",
  header: "Printer type",
  placeholder: "Select printer type",
  label: "label",
  trackBy: "value",
  options: [
    { label: "Small label", value: "small_label" },
    { label: "A4 document", value: "a4" },
  ],
  validation: value => value ? null : "Select a printer type",
}
```

MaHIS: `src/components/AddWebPrinter.vue`.

### `checkboxField`

Use `type: "single"` for a boolean, or `"multiple"`/`"list"` for an array of selected option values. Options can include `disabled`, `description`, and `exclusive`; an exclusive option clears other selections. `twoColumns` changes the layout.

```ts
{
  componentType: "checkboxField",
  name: "danger_signs",
  header: "Does the mother have any danger signs?",
  type: "multiple",
  twoColumns: true,
  options: [
    { label: "None", value: "none", exclusive: true },
    { label: "Bleeding", value: "Bleeding" },
    { label: "Headache", value: "Headache" },
  ],
  validation: value => Array.isArray(value) && value.length ? null : "Select an option",
}
```

MaHIS: `src/apps/PNC/composables/forms/useDischargeWoman.ts`.

### `radioButtonField`

Select one option value. `type` controls presentation: `standard`, `inline`, `list`, or `button`. `allowDeselect` and `showClearButton` permit clearing; `onClear` receives the previous value.

```ts
{
  componentType: "radioButtonField",
  name: "oedema",
  header: "Bilateral pitting oedema",
  type: "inline",
  options: [
    { label: "None", value: "None" },
    { label: "+", value: "+" },
    { label: "++", value: "++" },
  ],
}
```

MaHIS: `src/apps/IMPOW/composables/forms/vitals/useHeightWeightForm.ts`.

### `dateInputField`

Date picker shown through an Ionic input. Use `minDate` and `maxDate` to restrict dates, `showTodayButton` for a shortcut, and `validation` for required dates. The form value is a display string such as `28 Oct, 2026`; convert it to the format expected by your API when saving. If `maxDate` is omitted, the component defaults to today.

```ts
{
  componentType: "dateInputField",
  name: "birthDate",
  header: "Date of birth",
  placeholder: "Select date",
  showTodayButton: true,
  maxDate: new Date(),
  validation: value => value ? null : "Capture the date of birth",
}
```

MaHIS: `src/apps/Neonatal/config/enrollment.ts`.

### `dateTimeInputField`

Ionic date and time picker. It emits an ISO-like date-time string as the form answer. Set `minDateTime`, `maxDateTime`, `displayFormat`, `pickerOptions`, and `helperText` when needed. The picker displays the current date and time by default and caps selection at the current date and time unless `maxDateTime` is provided. Set `value` or `initialValue` if that initial display must also be present in `getFormValues()` before interaction.

```ts
{
  componentType: "dateTimeInputField",
  name: "reviewed_at",
  header: "Reviewed at",
  maxDateTime: new Date().toISOString(),
  validation: value => value ? null : "Choose a review time",
}
```

The current MaHIS checkout has this component and config type, but no active `formData` example using `dateTimeInputField`.

### `timeInputField`

12-hour time picker. The answer is a string such as `06:30 AM`. Use `showNowButton`, `initialHour`, `initialMinute`, `initialMeridian`, and `validation` for time entry. `minHeight` and `mode` control presentation.

```ts
{
  componentType: "timeInputField",
  name: "birthTime",
  header: "Time of birth",
  showNowButton: true,
  validation: value => value ? null : "Capture the time of birth",
}
```

MaHIS: `src/apps/Neonatal/config/enrollment.ts`.

### `phoneInputField`

Country-aware phone input. Its answer is `{ phoneNumber, countryCode, countryIso, countryName }`, not a plain string. The default country is Malawi (`MW`). Use `preferredCountries`, `defaultCountry`, `mode`, `autoFormat`, `inputOptions`, `dropdownOptions`, or `normalizePhoneNumber` for other requirements.

```ts
{
  componentType: "phoneInputField",
  name: "provider_phone",
  header: "Phone number for provider",
  defaultCountry: "MW",
  preferredCountries: ["MW", "ZM"],
  validation: value => value?.phoneNumber ? null : "Phone number is required",
}
```

MaHIS: `src/apps/LABOUR/composables/forms/useLabourReferralForm.ts`.

### `Alert`

Reactive warning or status box. `condition(values)` can return an object with `message`, `backgroundColor`, `textColor`, `icon`, `index`, and optionally `action`/`actionLabel`; return `null` or `false` to hide it. Without a condition, the config itself supplies the content. `condition` may be async. It does not contribute an answer.

```ts
{
  componentType: "Alert",
  name: "high_score_alert",
  type: "error",
  condition: values => Number(values.score) >= 7
    ? { message: "High score: review the patient", backgroundColor: "#FEF2F2", textColor: "#991B1B" }
    : null,
}
```

MaHIS: `src/apps/Neonatal/config/systemicExamination.ts` uses an alert driven by the Thompson score; IMPOW uses alerts derived from vitals.

### `Banner`

Informational panel with optional `title`, `message`, `backgroundColor`, `textColor`, `borderColor`, `iconSrc`, and `loading`. Its `condition(values)` may return a content object, or `false`/`null` to hide it. It does not contribute an answer.

```ts
{
  componentType: "Banner",
  name: "assessment_guide",
  title: "Postpartum assessment guide",
  message: "Complete the breast, abdomen, uterus, incision, and perineum assessment.",
  backgroundColor: "#FFF7E6",
  condition: values => values.dischargeStatus === "Discharged alive",
}
```

MaHIS: `src/apps/PNC/composables/forms/useDischargeWoman.ts`.

### `Dashes`

Visual divider. It appears only when its own condition passes and a neighboring non-divider field is visible. It has no answer.

```ts
{ componentType: "Dashes", grid: { s: "12" } }
```

MaHIS: `src/apps/PNC/composables/forms/useDischargeWoman.ts` uses dividers between discharge questions.

### `switchField`

Boolean-style toggle. `label` is the main text; `prefixText`, `onLabel`, `offLabel`, `onText`, and `offText` adjust its copy. The answer is `true`/`false` by default; `trueValue` and `falseValue` can replace those values. `allowClearToNull` and `showClearButton` allow a null state.

```ts
{
  componentType: "switchField",
  name: "can_measure_oxygen_saturation",
  prefixText: "Are you able to measure",
  label: "Oxygen saturation",
  initialValue: true,
  allowClearToNull: false,
}
```

MaHIS: `src/apps/Neonatal/config/vitals.ts`.

### `yesNoQuestion`

Compact yes/no radio question. The form stores `"Yes"`, `"No"`, or an empty string when cleared. Set `name` and `header` or `question`. This component has no field ref for `validateForm()`, so check a required answer when submitting.

```ts
{ componentType: "yesNoQuestion", name: "consent", question: "Was consent obtained?" }
```

The current MaHIS checkout includes this component and config type but no active `formData` example using `yesNoQuestion`.

### `listSelectionField`

Card-like choice list. `type: "single"` returns one option value; `"multiple"` returns an array. `options` may include a nested `children` list. Use `titleStyle`, `subtitle`, `showCheckmark`, `allowDeselect`, and `optionsToDiselectOthersSelections` for presentation and selection rules.

```ts
{
  componentType: "listSelectionField",
  name: "activityAssessment",
  header: "How is the baby's activity?",
  type: "single",
  titleStyle: "tonal",
  allowDeselect: false,
  options: [
    { label: "Alert, active, appropriate", value: "Alert" },
    { label: "Lethargic, quiet", value: "Leth" },
    { label: "Convulsions", value: "Convulsions" },
  ],
  validation: value => value ? null : "Select an activity assessment",
}
```

MaHIS: `src/apps/Neonatal/config/generalExamination.ts`.

### `searchableDropdown`

Search and select one or more options. `options` is an array or a function of current values. Set `multiple: true` for an array; otherwise the selected option is returned. For remote search, provide `onSearchChange(query, page, pageSize)` and optionally `pageSize`. `allowCustomOption`, `exclusiveValues`, `emptyState`, and `dropdownHeader` control other interactions.

```ts
{
  componentType: "searchableDropdown",
  name: "workingDiagnosis",
  header: "Primary diagnosis",
  placeholder: "Search for diagnosis",
  dropdownHeader: "Select ONE",
  options: [
    { label: "Neonatal sepsis", value: "sepsis" },
    { label: "Hypothermia", value: "hypothermia" },
  ],
  validation: value => value ? null : "Select a primary diagnosis",
}
```

MaHIS: `src/apps/Neonatal/config/diagnosis.ts` defines the fields; the application loads diagnosis options from its concept service.

### `summaryField`

Read-only summary of current answers. Supply `summaryRows` or `builder(formValues)`; each row can contain `section`, `label`, `value`, `detail`, and `alwaysShow`. The package component does **not** generate rows from `autoSummary` by itself. MaHIS's wizard prepares auto summaries outside the package; use `builder` for a self-contained form.

```ts
{
  componentType: "summaryField",
  name: "reviewSummary",
  emptyStateMessage: "No findings captured yet.",
  builder: values => [
    { section: "Vitals", label: "Weight", value: values.weight ? `${values.weight} kg` : "" },
    { section: "Vitals", label: "Oedema", value: values.oedema || "" },
  ],
}
```

MaHIS: `src/apps/Neonatal/config/clinical_review_outcomes.ts` uses `builder`; other neonatal forms use `autoSummary` with wizard support.

### `scoreField`

Read-only calculated value. Use a static `value` or `computeValue(formValues)` for a reactive score. `title`, `description`, `padTo`, `variant` (`default`, `success`, `warning`, `danger`), and `emptyStateMessage` control display.

```ts
{
  componentType: "scoreField",
  name: "thompsonScoreComputed",
  title: "Final score",
  variant: "success",
  padTo: 2,
  computeValue: values => Number(values.posture || 0) + Number(values.reflexes || 0),
}
```

MaHIS: `src/apps/Neonatal/config/systemicExamination.ts` computes the Thompson score from examination answers.

### `illustration`

Read-only image card. `imageSrc` is required; `imageAlt`, `title`, `caption`, `description`, and header/frame/footer style properties control presentation. Pass a trusted image URL or a locally imported asset.

```ts
{
  componentType: "illustration",
  name: "cleftIllustration",
  title: "Look at the lip and palate. Is it intact?",
  imageSrc: "/images/cleft-lip-example.png",
  imageAlt: "Example of cleft lip and palate",
  caption: "Select one answer below.",
}
```

MaHIS: `src/apps/Neonatal/config/generalExamination.ts` places an illustration above a `listSelectionField`.

### `infographicField`

Read-only steps or cards. Supply `infographicData` as an object or function returning an object. Each `sections` item may contain `title`, `content`, `bullets`, `image`, `caption`, or highlight text. `displayMode` is `list`, `cards`, or `visual`; `showStepNumber`, `helperText`, and `footerNote` adjust presentation. The package does not resolve a string `infographicData` key; provide the data or a loader function. Content fields use HTML rendering, so supply trusted content.

```ts
{
  componentType: "infographicField",
  name: "hypothermia_management",
  header: "Hypothermia management",
  displayMode: "cards",
  showStepNumber: true,
  infographicData: {
    key: "hypothermia",
    sections: [
      { title: "Keep warm", content: "Dry and wrap the baby." },
      { title: "Recheck", content: "Repeat the temperature measurement." },
    ],
    footerNote: "Escalate if temperature remains low.",
  },
}
```

MaHIS: `src/apps/Neonatal/config/vitals.ts` uses infographics for temperature management.

### `Slot`

A named Vue slot for a control that the package does not provide. Set `slotName`; the slot receives `config`, reactive `formValues`, and `updateValue(name, value)`. Use `updateValue` for answer changes. Slot controls own their validation and reset behavior.

```ts
{ componentType: "Slot", name: "investigationComponent", slotName: "investigationComponent" }
```

```vue
<StandardForm :form-data="fields">
  <template #investigationComponent="{ formValues, updateValue }">
    <InvestigationPicker
      :model-value="formValues.investigationComponent"
      @update:model-value="value => updateValue('investigationComponent', value)"
    />
  </template>
</StandardForm>
```

MaHIS: `src/apps/Neonatal/config/investigation.ts` defines an investigation slot; `src/components/Registration/Referral.vue` shows an application component in a slot and handles its validation.

## MaHIS-specific controls through slots

The MaHIS `StandardForm` directly renders `facilitySelectorField`, `drugPrescriptionField`, and voice text areas because it has access to MaHIS stores, services, and device APIs. This package keeps those dependencies in the application. An unsupported `componentType` is used as the slot name by default, so existing MaHIS configs can be supplied to the package without renaming the field.

### Facility selector

MaHIS uses `facilitySelectorField` in `src/apps/Neonatal/config/discharge.ts` for receiving facilities and `src/apps/PNC/composables/forms/useDischargeWoman.ts` for referrals.

```ts
const fields = [{
  componentType: "facilitySelectorField",
  name: "transferFacility",
  header: "Receiving facility",
  condition: values => values.outcome === "Transferred",
}];
```

```vue
<StandardForm :form-data="fields">
  <template #facilitySelectorField="{ formValues, updateValue }">
    <YourFacilitySelector
      :model-value="formValues.transferFacility"
      @update:model-value="value => updateValue('transferFacility', value)"
    />
  </template>
</StandardForm>
```

### Drug prescription

MaHIS configures `drugPrescriptionField` in `src/apps/Neonatal/config/treatmentPlan.ts` with a drug concept set, frequencies, and dosage units. The package passes that config to a `#drugPrescriptionField` slot; your application resolves the drug catalog and validates the selected prescriptions.

```ts
const fields = [{
  componentType: "drugPrescriptionField",
  name: "prescriptions",
  header: "Your selected medications",
  conceptSetName: "Neonate drugs",
  frequencies: ["once a day", "twice a day"],
  dosageUnits: [{ label: "mg", value: "mg" }, { label: "mL", value: "mL" }],
}];
```

```vue
<StandardForm :form-data="fields">
  <template #drugPrescriptionField="{ config, formValues, updateValue }">
    <YourPrescriptionPicker
      :config="config"
      :model-value="formValues.prescriptions"
      @update:model-value="value => updateValue('prescriptions', value)"
    />
  </template>
</StandardForm>
```

Validate the prescription list in the submit handler because slot controls are not included in `validateForm()`.

### Voice text areas

MaHIS enables voice entry in forms such as `src/apps/IPD/views/ConsultationForm.vue`. In this package, pass `enable-voice` and provide a `#voiceTextArea` slot. Fields with `voice: false` use the ordinary text area.

```vue
<StandardForm :form-data="fields" enable-voice>
  <template #voiceTextArea="{ config, formValues, updateValue }">
    <YourVoiceTextArea
      :config="config"
      :model-value="formValues[config.name]"
      @update:model-value="value => config.name && updateValue(config.name, value)"
    />
  </template>
</StandardForm>
```

## License

MIT. Developed by Petros Kayange.
