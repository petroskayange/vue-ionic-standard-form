import { BaseFormElement } from '../BaseFormElement';

export interface PhoneInputFieldConfig extends BaseFormElement {
    componentType: "phoneInputField";
    placeholder?: string;
    helperText?: string;
    preferredCountries?: string[];
    defaultCountry?: string;
    initialCountry?: string;
    mode?: "international" | "national";
    autoFormat?: boolean;
    inputOptions?: Record<string, any>;
    dropdownOptions?: Record<string, any>;
    onCountryChanged?: (country: PhoneCountryInfo) => void;
}
export interface PhoneCountryInfo {
    dialCode: string;
    iso2: string;
    name: string;
}
export interface PhoneObject {
    phoneNumber: string;
    countryCode: string;
    countryIso: string;
    countryName: string;
}
