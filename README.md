# 🧩 Vue Ionic Standard Form

[](https://www.npmjs.com/package/vue-ionic-standard-form)
[](https://bundlephobia.com/package/vue-ionic-standard-form)
[](https://www.google.com/search?q=LICENSE)
[](https://vuejs.org/)
[](https://ionicframework.com/)

> A reusable, configurable form builder built with **Vue 3**, **Ionic Framework**, and **TypeScript**.
> Dynamically render and manage complex forms from a JSON schema with reactive validation, conditional logic, and full type safety.

---

## 📦 Installation

```bash
npm install vue-ionic-standard-form
# or
yarn add vue-ionic-standard-form
```

---

## 🧰 Quick Start

The component is registered **locally** via import, which is the recommended method for modern Vue applications.

### 1️⃣ Ensure CSS is available

The necessary global styles should be imported once, typically in your main entry file or root component.

```typescript
// main.ts or App.vue <script> setup
import "vue-ionic-standard-form/dist/style.css"; // Required CSS
```

### 2️⃣ Use in a component (Local Registration)

Simply import the component within your setup script (`<script setup>`) to make it available in the template as `<StandardForm />`.

```vue
<template>
  <ion-page>
    <ion-content>
      <standard-form :formData="formSchema" ref="formRef" />
      <ion-button @click="submitForm">Submit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { StandardForm } from "vue-ionic-standard-form";

const formRef = ref();

const formSchema = [
  { componentType: "Heading", name: "Patient Registration" },
  {
    componentType: "inputField",
    name: "fullName",
    label: "Full Name",
    required: true,
  },
  { componentType: "dateInputField", name: "dob", label: "Date of Birth" },
  {
    componentType: "phoneInputField",
    name: "phoneNumber",
    label: "Phone Number",
  },
  {
    componentType: "checkboxField",
    name: "consent",
    label: "I agree to the terms",
  },
];

const submitForm = () => {
  // Access exposed methods via ref
  const values = formRef.value.getFormValues();
  console.log("Form Submitted:", values);

  const errors = formRef.value.validateForm();
  if (errors) {
    console.error("Validation Errors:", errors);
  }
};
</script>
```

---

## 🧩 Supported Field Types

| `componentType`             | Component                  | Description                                            |
| :-------------------------- | :------------------------- | :----------------------------------------------------- |
| **`Heading`**               | `<Heading />`              | Displays a static section title                        |
| **`Alert`**                 | `<Alert />`                | Displays a dynamic, conditional informational banner   |
| **`inputField`**            | `<InputField />`           | Text or numeric input with optional units and actions  |
| **`multiSelectInputField`** | `<MultiselectInput />`     | Multi-select dropdown with dynamic options and tagging |
| **`checkboxField`**         | `<CheckboxField />`        | Single or multiple selection checkbox control          |
| **`radioButtonField`**      | `<RadioButtonField />`     | Single-selection radio group with multiple styles      |
| **`dateInputField`**        | `<DateInputField />`       | Date picker input (trigger via `ion-input`)            |
| **`phoneInputField`**       | `<PhoneInputField />`      | Phone input with country code picker                   |
| `Dashes`                    | Divider / visual separator | Visual divider line                                    |

---

## ⚙️ Component Usage Details 🧩

This section details how to configure and use the individual field components within your `formData` array.

### **`inputField`** (`<InputField />`)

The `inputField` is a highly versatile text or numeric input built using **`ion-input`**. It supports units, icons, action buttons, and client-side validation.

#### **Configuration Example**

```typescript
{
  componentType: "inputField",
  name: "weight",
  type: "number",
  icon: "scale-outline",
  placeholder: "0.0",
  unitOptions: [
    { label: "Kilograms (kg)", value: "kg" },
    { label: "Pounds (lb)", value: "lb" },
  ],
  validation: (value: number) => (value <= 0 ? "Weight must be positive." : null),
  actionButton: {
    show: true,
    text: "Calculate",
    onActionClick: (value: any) => console.log(value * 2.2046)
  }
}
```

#### **Key Specific Props**

| Prop           | Type                                   | Description                                                         |
| :------------- | :------------------------------------- | :------------------------------------------------------------------ |
| `type`         | `'text' \| 'number' \| ...`            | The native HTML input type. Defaults to `'text'`.                   |
| `icon`         | `string`                               | An **Ionicons** string name for the left side.                      |
| `unitOptions`  | `Array<{ label: string, value: any }>` | Array to render a dropdown for unit selection.                      |
| `actionButton` | `object`                               | Configuration for a button shown inside the input's right-end slot. |

---

### **`multiSelectInputField`** (`<MultiselectInput />`)

The `multiSelectInputField` is a robust dropdown for single or multiple selections, supporting **dynamic options** and **tagging**.

#### **Configuration Example**

```typescript
{
  componentType: "multiSelectInputField",
  name: "diagnosis",
  isMultiple: true,
  placeholder: "Search and select conditions...",
  trackBy: "concept_id",
  // Options dynamically filtered based on other form values
  options: (values: Record<string, any>) => {
    return values.gender === 'Female' ? [ { name: "Anemia", concept_id: 201 } ] : [ { name: "Common Cold", concept_id: 202 } ];
  },
  validation: (value: any) => (
    (Array.isArray(value) && value.length === 0) ? "Select at least one." : null
  ),
}
```

#### **Key Specific Props**

| Prop         | Type                                                        | Description                                                                     |
| :----------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------ |
| `options`    | `Array<any> \| (values: Record<string, any>) => Array<any>` | The list of options. Can be a static array or a **reactive function**.          |
| `trackBy`    | `string`                                                    | The unique key in your option objects used for tracking (e.g., `'concept_id'`). |
| `isMultiple` | `boolean`                                                   | If `true`, allows multiple selections (output is an array).                     |
| `taggable`   | `boolean`                                                   | If `true`, allows users to create new options/tags.                             |

---

### **`phoneInputField`** (`<PhoneInputField />`)

A specialized input that provides country code selection and outputs a structured object containing the phone number, ISO, and dial code.

#### **Output Value Structure**

The output is an object: `{ phoneNumber: string, countryCode: string, countryIso: string, countryName: string }`.

#### **Configuration Example**

```typescript
{
  componentType: "phoneInputField",
  name: "contactPhone",
  placeholder: "Enter mobile number",
  preferredCountries: ['MW', 'ZM'],
  defaultCountry: 'MW',
  validation: (value: { phoneNumber: string }) => {
    if (!value.phoneNumber) return "A phone number is required.";
    return null;
  },
}
```

#### **Key Specific Props**

| Prop                 | Type                                  | Description                                                        |
| :------------------- | :------------------------------------ | :----------------------------------------------------------------- |
| `preferredCountries` | `string[]`                            | Array of country ISO codes to show at the top of the country list. |
| `defaultCountry`     | `string`                              | The ISO code for the country pre-selected on mount.                |
| `mode`               | `'international' \| 'national'`       | Determines the input display format.                               |
| `onCountryChanged`   | `(country: PhoneCountryInfo) => void` | Event handler that fires when the user changes the country flag.   |

---

### **`radioButtonField`** (`<RadioButtonField />`)

A single-selection control supporting different visual styles (`standard`, `inline`, `list`, `button`) and features like deselection and clearing.

#### **Configuration Example**

```typescript
{
  componentType: "radioButtonField",
  name: "priority",
  header: "Task Priority",
  type: "button", // Styles: 'standard', 'inline', 'list', 'button'
  allowDeselect: true, // Clicking the selected button clears selection
  options: [
    { label: "High", value: 3, icon: "flame-outline" },
    { label: "Medium", value: 2, icon: "water-outline" },
  ],
  validation: (value: any) => (!value ? "Please select one option." : null),
  showClearButton: true,
}
```

#### **Key Specific Props**

| Prop              | Type                                           | Description                                                     |
| :---------------- | :--------------------------------------------- | :-------------------------------------------------------------- |
| `options`         | `Array<{ label: string, value: any, ... }>`    | Array of selection options.                                     |
| `type`            | `'standard' \| 'inline' \| 'list' \| 'button'` | The visual style of the radio buttons.                          |
| `allowDeselect`   | `boolean`                                      | If `true`, clicking a selected option will clear the selection. |
| `showClearButton` | `boolean`                                      | Displays a 'Clear' button near the header.                      |

---

### **`checkboxField`** (`<CheckboxField />`)

A versatile component supporting single boolean consent (`type: 'single'`) or multiple independent selections (`type: 'multiple' \| 'list'`).

#### **Output Value Structure**

- **Single:** `boolean`
- **Multiple/List:** `Array<any>` of selected option values.

#### **Configuration Example**

```typescript
{
  componentType: "checkboxField",
  name: "termsConsent",
  label: "I agree to the Terms and Conditions.",
  type: "single",
  validation: (value: boolean) => (!value ? "You must agree to the terms." : null),
},

{
  componentType: "checkboxField",
  name: "allergies",
  header: "Select Allergies",
  type: "list",
  options: [
    { label: "Pollen", value: "P", icon: "leaf-outline" },
    { label: "Peanuts", value: "N", icon: "warning-outline" },
  ],
}
```

#### **Key Specific Props**

| Prop         | Type                                        | Description                                               |
| :----------- | :------------------------------------------ | :-------------------------------------------------------- |
| `type`       | `'single' \| 'multiple' \| 'list'`          | The mode of the component.                                |
| `options`    | `Array<{ label: string, value: any, ... }>` | Options for multiple/list types.                          |
| `helperText` | `string`                                    | Supplementary information text displayed below the field. |

---

### **`dateInputField`** (`<DateInputField />`)

Uses an `ion-input` as a trigger for a date picker, ensuring consistent appearance and handling date formatting.

#### **Configuration Example**

```typescript
{
  componentType: "dateInputField",
  name: "appointmentDate",
  placeholder: "Select Date of Service",
  icon: "calendar-outline",
  required: true,
  maxDate: new Date(), // Prevents future dates
  onChange: (formatted: string, raw: Date) => console.log(formatted)
}
```

#### **Key Specific Props**

| Prop       | Type                                     | Description                                                          |
| :--------- | :--------------------------------------- | :------------------------------------------------------------------- |
| `minDate`  | `string \| Date`                         | The earliest date a user can select.                                 |
| `maxDate`  | `string \| Date`                         | The latest date a user can select.                                   |
| `onChange` | `(formatted: string, raw: Date) => void` | Called when the date changes, providing both string and Date object. |

---

### **`Heading`** (`<Heading />`)

A static display element used to provide clear separation and titles for sections within the form.

#### **Configuration Example**

```typescript
{
  componentType: "Heading",
  name: "Demographic Information",
  position: "left", // Alignment: 'left', 'center', or 'right'
}
```

#### **Key Specific Props**

| Prop       | Type                            | Description                              |
| :--------- | :------------------------------ | :--------------------------------------- |
| `name`     | `string`                        | **The text content** of the heading.     |
| `position` | `'left' \| 'center' \| 'right'` | Horizontal alignment of the header text. |

---

### **`Alert`** (`<Alert />`)

A dynamic, reactive banner used to display contextual messages based on the real-time state of the form.

#### **Configuration Example**

```typescript
{
  componentType: "Alert",
  name: "SeniorAlert",
  // Alert shows only when age > 65.
  condition: (values: Record<string, any>) => {
    if (values.patientAge > 65) {
      return {
        message: "Patient is over 65. Additional screenings are recommended.",
        icon: "warning-outline",
        backgroundColor: "#fff3cd",
        textColor: "#664d03",
      };
    }
    return false; // Hides the alert
  },
}
```

#### **Key Specific Props**

| Prop              | Type                                   | Description                                                                                               |
| :---------------- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| `condition`       | `(values: Record<string, any>) => any` | Function that controls visibility. **Returns `false`/`null` to hide**, or an object/truthy value to show. |
| `value`           | `string`                               | The default message displayed.                                                                            |
| `backgroundColor` | `string`                               | CSS color for the banner background.                                                                      |

---

## 🧠 Exposed Methods

These methods are available via the `ref` on the **`StandardForm`** component.

| Method                      | Description                                                                                              |
| :-------------------------- | :------------------------------------------------------------------------------------------------------- |
| `getFormValues()`           | Returns current form values as an object (`Record<string, any>`).                                        |
| `setFormValue(name, value)` | Programmatically set a field's value (updates internal state and component).                             |
| `resetForm()`               | Clears all field values.                                                                                 |
| `validateForm()`            | Runs validation on all visible fields. Returns `null` if valid, or an object of field errors if invalid. |

---

## 🧱 Base Form Element Interface

All component configurations must adhere to this base structure:

```typescript
export interface FormElement {
  componentType: string;
  name?: string;
  header?: string;
  label?: string;
  value?: any;
  initialValue?: any;
  required?: boolean;
  grid?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    s?: string;
  };
  // Dynamic Visibility
  condition?: (values: Record<string, any>) => boolean;
  // Custom Logic on Change
  onChange?: (value: any, values: Record<string, any>) => void;
  // Custom Validation
  validation?: (value: any) => string | null;
}
```

---

## 🧾 License

MIT License © 2025
Developed by Petros Kayange
