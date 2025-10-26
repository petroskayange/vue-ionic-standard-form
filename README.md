# 🧩 Vue Ionic Standard Form

[![npm version](https://img.shields.io/npm/v/vue-ionic-standard-form.svg?color=brightgreen)](https://www.npmjs.com/package/vue-ionic-standard-form)
[![bundle size](https://img.shields.io/bundlephobia/minzip/vue-ionic-standard-form?label=gzipped)](https://bundlephobia.com/package/vue-ionic-standard-form)
[![license](https://img.shields.io/github/license/petroskayange/vue-ionic-standard-form)](LICENSE)
[![vue](https://img.shields.io/badge/Vue-3.x-42b883.svg?logo=vue.js)](https://vuejs.org/)
[![ionic](https://img.shields.io/badge/Ionic-7.x-3880ff.svg?logo=ionic)](https://ionicframework.com/)

> A reusable, configurable form builder built with **Vue 3**, **Ionic Framework**, and **TypeScript**.  
> Dynamically render and manage complex forms from a JSON schema with reactive validation, conditional logic, and full type safety.

---

## 🚀 Features

- ⚡ Dynamic form rendering from JSON schema
- 🧱 Built on **Ionic Vue components** (`ion-grid`, `ion-row`, `ion-col`)
- 📞 Integrated **Phone Input** via `vue-tel-input`
- 🎯 Built-in validation and reactive form state
- 🧩 Supports **custom and conditional components**
- 🎨 **CSS bundled** for easy drop-in use
- 📦 Exports **ES + UMD bundles** with **TypeScript declarations**

---

## 📦 Installation

```bash
npm install vue-ionic-standard-form
# or
yarn add vue-ionic-standard-form
🧰 Quick Start
1️⃣ Register in your Vue app
ts
Copy code
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueIonicStandardForm from "vue-ionic-standard-form";
import "vue-ionic-standard-form/dist/style.css";

const app = createApp(App);
app.use(VueIonicStandardForm);
app.mount("#app");
2️⃣ Use in a component
vue
Copy code
<template>
  <ion-page>
    <ion-content>
      <vue-ionic-standard-form :formData="formSchema" ref="formRef" />
      <ion-button @click="submitForm">Submit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formRef = ref();

const formSchema = [
  { componentType: "Heading", header: "Patient Registration" },
  { componentType: "inputField", name: "fullName", label: "Full Name", required: true },
  { componentType: "dateInputField", name: "dob", label: "Date of Birth" },
  { componentType: "phoneInputField", name: "phoneNumber", label: "Phone Number" },
  { componentType: "checkboxField", name: "consent", label: "I agree to the terms" },
];

const submitForm = () => {
  const values = formRef.value.getFormValues();
  console.log("Form Submitted:", values);
};
</script>
🧩 Supported Field Types
componentType	Component	Description
Heading	<Heading />	Displays a section title
inputField	<InputField />	Text or numeric input
multiSelectInputField	<MultiselectInput />	Multi-select dropdown
checkboxField	<CheckboxField />	Checkbox input
radioButtonField	<RadioButtonField />	Radio group input
dateInputField	<DateInputField />	Date picker input
phoneInputField	<PhoneInputField />	Phone input with country code
Alert	<Alert />	Displays info or alert banner
Dashes	Divider / visual separator

⚙️ Props
Prop	Type	Description
formData	FormElement[]	Array of field configuration objects defining the form layout

🧠 Exposed Methods
Method	Description
getFormValues()	Returns current form values as an object
setFormValue(name, value)	Programmatically set a field value
resetForm()	Clears all field values
validateForm()	Returns null if valid, or an object of field errors

🧱 Example of a Form Element
ts
Copy code
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
  obsValueType?: string;
  condition?: (values: Record<string, any>) => boolean;
  onChange?: (value: any, values: Record<string, any>) => void;
}
🧑‍💻 Development Setup
Clone and build locally:

bash
Copy code
git clone https://github.com/petroskayange/vue-ionic-standard-form.git
cd vue-ionic-standard-form
npm install
npm run build
This will:

🧰 Build ES and UMD bundles

🧾 Generate .d.ts type declarations

🎨 Bundle styles into dist/style.css

🔗 Local Testing with npm link
bash
Copy code
# In vue-ionic-standard-form project
npm link

# In your consuming project
npm link vue-ionic-standard-form
Then use it like:

ts
Copy code
import VueIonicStandardForm from "vue-ionic-standard-form";
import "vue-ionic-standard-form/dist/style.css";
📁 Project Structure
css
Copy code
vue-ionic-standard-form/
├── src/
│   ├── components/
│   │   ├── InputField.vue
│   │   ├── CheckboxField.vue
│   │   ├── RadioButtonField.vue
│   │   ├── DateInputField.vue
│   │   ├── PhoneInputField.vue
│   │   ├── MultiSelectInput.vue
│   │   ├── Alert.vue
│   │   └── Heading.vue
│   └── interfaces/
│       └── FormElement.ts
├── dist/
│   ├── style.css
│   └── index.js
├── package.json
├── vite.config.ts
└── README.md
🧾 License
MIT License © 2025
Developed by Petros Kayange

🌟 Acknowledgements
Vue 3

Ionic Vue

vue-tel-input

Vite

```
