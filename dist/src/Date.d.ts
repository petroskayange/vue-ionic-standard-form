import { default as dayjs } from 'dayjs';

export declare const STANDARD_DATE_FORMAT = "YYYY-MM-DD";
declare function calculateAge(birthdate: any, currentdate: any): number;
declare function getCurrentDateTimeWithOffset(timezoneString?: string): string;
declare function calculateDisplayAge(dateOfBirth: string, currentDate?: string): string;
declare function ageInMonths(startDateStr: string): number;
declare function getBirthdateAge(date: any): string;
declare function sessionDate(): string;
declare function currentDisplayDate(): string;
declare function currentDate(): string;
declare function dateDiffInDays(date1: string, date2: string): number;
declare function getAgeInYears(date: string | Date): number;
declare function getAgeInFloatYears(date: string | Date, currentD?: string): number;
declare function toStandardHisTimeFormat(date: string | Date): string;
declare function toStandardHisDisplayFormat(date: string | Date): string;
declare function toStandardHisShortFormat(date: string | Date): string;
declare function toStandardHisFormat(date: string | Date): string;
declare function estimateDateFromAge(age: number): string;
declare function getYearFromAge(age: number): number;
declare function getYear(date: string): number;
declare function getMonth(date: string): string;
declare function getDay(date: string): number;
declare function add(date: string, unit: any, value: number): dayjs.Dayjs;
declare function subtract(date: string, unit: any, value: number): dayjs.Dayjs;
declare function getCurrentYear(): number;
declare function getDateBeforeByDays(date: string, days: number): string;
/**
 * Get Year of specified age in years
 * @param age
 * @returns
 */
declare function getYearOfAge(ageInYears: number): number;
declare function stitchDate(year: number | string, month?: number | string, day?: number | string): string;
declare function todayDateFormatted(): string;
declare function calculateTimeDifference(timestamp: any): string;
declare const _default: {
    sessionDate: typeof sessionDate;
    currentDate: typeof currentDate;
    getYearOfAge: typeof getYearOfAge;
    getYear: typeof getYear;
    dateDiffInDays: typeof dateDiffInDays;
    getAgeInYears: typeof getAgeInYears;
    toStandardHisTimeFormat: typeof toStandardHisTimeFormat;
    toStandardHisDisplayFormat: typeof toStandardHisDisplayFormat;
    toStandardHisShortFormat: typeof toStandardHisShortFormat;
    currentDisplayDate: typeof currentDisplayDate;
    stitchDate: typeof stitchDate;
    toStandardHisFormat: typeof toStandardHisFormat;
    estimateDateFromAge: typeof estimateDateFromAge;
    getYearFromAge: typeof getYearFromAge;
    getCurrentYear: typeof getCurrentYear;
    getDateBeforeByDays: typeof getDateBeforeByDays;
    getMonth: typeof getMonth;
    getDay: typeof getDay;
    add: typeof add;
    subtract: typeof subtract;
    calculateAge: typeof calculateAge;
    calculateDisplayAge: typeof calculateDisplayAge;
    getBirthdateAge: typeof getBirthdateAge;
    ageInMonths: typeof ageInMonths;
    getAgeInFloatYears: typeof getAgeInFloatYears;
    todayDateFormatted: typeof todayDateFormatted;
    calculateTimeDifference: typeof calculateTimeDifference;
    getCurrentDateTimeWithOffset: typeof getCurrentDateTimeWithOffset;
};
export default _default;
