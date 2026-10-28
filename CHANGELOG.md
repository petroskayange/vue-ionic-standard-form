# Changelog

## 2.0.0

- Add the form controls, conditional rules, draft persistence, and observation metadata used by MaHIS.
- Add TypeScript exports for the field configurations and form rules.
- Document every supported component with a schema example and a MaHIS use case.
- Change `getFormValues()` to omit empty and hidden answers while preserving `false`, `0`, and observation metadata. Use `formValues` to access the full state.
- Make `resetForm()` asynchronous and allow selected fields to be retained.

## 1.0.2

- Previous npm release.
