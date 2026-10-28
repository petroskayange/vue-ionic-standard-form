import { Expression, Token } from '../interfaces/conditions';

export declare const useConditionalExpressions: () => {
    evaluate: (condition: string, formValues: Record<string, any>) => boolean;
    createConditionFunction: (condition: string | ((formValues: Record<string, any>) => boolean)) => (formValues: Record<string, any>) => boolean;
    validateExpression: (expression: string) => {
        isValid: boolean;
        error?: string;
    };
    clearCache: () => void;
    getCacheStats: import('vue').ComputedRef<{
        size: number;
        expressions: string[];
    }>;
    tokenize: (expression: string) => Token[];
    parseExpression: (tokens: Token[], startIndex?: number) => [Expression, number];
    evaluateExpression: (expr: Expression, formValues: Record<string, any>) => boolean;
};
/**
 * Validation rules for conditional validation expressions
 * Can be used with validation functions
 */
export declare const ValidationRules: {
    required: (value: any) => boolean;
    numeric: (value: any) => boolean;
    range: (min: number, max: number) => (value: any) => boolean;
    length: (min: number, max?: number) => (value: any) => boolean;
    pattern: (regex: RegExp) => (value: any) => boolean;
    mwPhone: (value: any) => boolean;
    mwNationalId: (value: any) => boolean;
    min: (min: number) => (value: any) => boolean;
    max: (max: number) => (value: any) => boolean;
};
/**
 * Helper to create type-safe field conditions with autocomplete
 * @example
 * const condition = createFieldCondition<FormType>(
 *   (fields) => `${fields.referredFromAnotherFacility} === 'Yes'`
 * );
 */
export declare const createFieldCondition: <T extends Record<string, any>>(builder: (fields: T) => string) => ((formValues: T) => boolean);
/**
 * Hook for applying conditional rules and actions to forms
 * Provides methods to execute conditional actions like hiding fields, setting values, etc.
 */
export declare const useConditionalActions: () => {
    evaluateCondition: (condition: string | ((formValues: Record<string, any>) => boolean), formValues: Record<string, any>) => boolean;
    getHiddenFields: (rules: import('../interfaces/conditions').ConditionalRule[], formValues: Record<string, any>) => Set<string>;
    getDisabledFields: (rules: import('../interfaces/conditions').ConditionalRule[], formValues: Record<string, any>) => Set<string>;
    getRequiredFields: (rules: import('../interfaces/conditions').ConditionalRule[], formValues: Record<string, any>) => Set<string>;
    getAutoSetValues: (rules: import('../interfaces/conditions').ConditionalRule[], formValues: Record<string, any>) => Record<string, any>;
    getWarnings: (rules: import('../interfaces/conditions').ConditionalRule[], formValues: Record<string, any>) => string[];
    getDialogs: (rules: import('../interfaces/conditions').ConditionalRule[], formValues: Record<string, any>) => Array<{
        title: string;
        message: string;
    }>;
    applyConditionalRules: (rules: import('../interfaces/conditions').ConditionalRule[], formValues: Record<string, any>) => {
        hiddenFields: Set<string>;
        disabledFields: Set<string>;
        requiredFields: Set<string>;
        autoSetValues: Record<string, any>;
        warnings: string[];
        dialogs: {
            title: string;
            message: string;
        }[];
    };
};
