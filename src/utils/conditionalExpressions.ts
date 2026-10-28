import { computed, ref } from "vue";
import { Expression, Token } from "../interfaces/conditions";

export const useConditionalExpressions = () => {
    const expressionCache = ref<Map<string, Expression>>(new Map());
    const tokenize = (expression: string): Token[] => {
        const tokens: Token[] = [];
        let i = 0;

        while (i < expression.length) {
            const char = expression[i];

            if (/\s/.test(char)) {
                i++;
                continue;
            }

            if (char === "(" || char === ")") {
                tokens.push({ type: "parenthesis", value: char });
                i++;
                continue;
            }

            if (char === "'" || char === '"') {
                const quote = char;
                let value = "";
                i++;
                while (i < expression.length && expression[i] !== quote) {
                    value += expression[i];
                    i++;
                }
                i++;
                tokens.push({ type: "value", value: JSON.stringify(value) });
                continue;
            }

            if (/\d/.test(char)) {
                let value = "";
                while (i < expression.length && /[\d.]/.test(expression[i])) {
                    value += expression[i];
                    i++;
                }
                tokens.push({ type: "value", value });
                continue;
            }

            if (/[a-zA-Z_$]/.test(char)) {
                let value = "";
                while (i < expression.length && /[a-zA-Z0-9_$]/.test(expression[i])) {
                    value += expression[i];
                    i++;
                }

                const upperValue = value.toUpperCase();
                if (["AND", "OR", "NOT"].includes(upperValue)) {
                    tokens.push({ type: "operator", value: upperValue });
                } else {
                    tokens.push({ type: "field", value });
                }
                continue;
            }

            if (i + 2 < expression.length && expression.substring(i, i + 3) === "===") {
                tokens.push({ type: "operator", value: "===" });
                i += 3;
                continue;
            }
            if (i + 2 < expression.length && expression.substring(i, i + 3) === "!==") {
                tokens.push({ type: "operator", value: "!==" });
                i += 3;
                continue;
            }
            if (i + 1 < expression.length && expression.substring(i, i + 2) === ">=") {
                tokens.push({ type: "operator", value: ">=" });
                i += 2;
                continue;
            }
            if (i + 1 < expression.length && expression.substring(i, i + 2) === "<=") {
                tokens.push({ type: "operator", value: "<=" });
                i += 2;
                continue;
            }
            if (char === ">" || char === "<") {
                tokens.push({ type: "operator", value: char });
                i++;
                continue;
            }

            i++;
        }

        return tokens;
    };

    /**
     * @method parseExpression Parses tokens into an expression tree
     * Handles operator precedence: NOT > comparison > AND > OR
     */
    const parseExpression = (tokens: Token[], startIndex = 0): [Expression, number] => {
        return parseOr(tokens, startIndex);
    };

    const parseOr = (tokens: Token[], startIndex: number): [Expression, number] => {
        let [left, index] = parseAnd(tokens, startIndex);

        while (index < tokens.length && tokens[index].type === "operator" && tokens[index].value === "OR") {
            index++;
            const [right, newIndex] = parseAnd(tokens, index);
            left = {
                type: "logical",
                operator: "OR",
                left,
                right,
            };
            index = newIndex;
        }

        return [left, index];
    };

    const parseAnd = (tokens: Token[], startIndex: number): [Expression, number] => {
        let [left, index] = parseNot(tokens, startIndex);

        while (index < tokens.length && tokens[index].type === "operator" && tokens[index].value === "AND") {
            index++;
            const [right, newIndex] = parseNot(tokens, index);
            left = {
                type: "logical",
                operator: "AND",
                left,
                right,
            };
            index = newIndex;
        }

        return [left, index];
    };

    const parseNot = (tokens: Token[], startIndex: number): [Expression, number] => {
        if (startIndex < tokens.length && tokens[startIndex].type === "operator" && tokens[startIndex].value === "NOT") {
            const [expr, index] = parseComparison(tokens, startIndex + 1);
            return [
                {
                    type: "logical",
                    operator: "NOT",
                    left: expr,
                },
                index,
            ];
        }

        return parseComparison(tokens, startIndex);
    };

    const parseComparison = (tokens: Token[], startIndex: number): [Expression, number] => {
        if (tokens[startIndex]?.type === "parenthesis" && tokens[startIndex].value === "(") {
            const [expr, index] = parseExpression(tokens, startIndex + 1);
            return [expr, index + 1];
        }

        if (tokens[startIndex]?.type !== "field") {
            throw new Error(`Expected field name at position ${startIndex}`);
        }

        const field = tokens[startIndex].value;
        const op = tokens[startIndex + 1];

        if (!op || op.type !== "operator") {
            throw new Error(`Expected operator after field ${field}`);
        }

        const val = tokens[startIndex + 2];
        if (!val) {
            throw new Error(`Expected value after operator ${op.value}`);
        }

        return [
            {
                type: "comparison",
                field,
                operator: op.value,
                value: parseValue(val.value),
            },
            startIndex + 3,
        ];
    };

    const parseValue = (valueStr: string): any => {
        if (valueStr.startsWith('"') || valueStr.startsWith("'")) {
            return JSON.parse(valueStr);
        }

        if (!isNaN(Number(valueStr))) {
            return Number(valueStr);
        }

        if (valueStr === "true") return true;
        if (valueStr === "false") return false;

        if (valueStr === "null") return null;
        if (valueStr === "undefined") return undefined;

        return valueStr;
    };

    const evaluateExpression = (expr: Expression, formValues: Record<string, any>): boolean => {
        if (expr.type === "comparison") {
            const fieldValue = formValues[expr.field!];

            switch (expr.operator) {
                case "===":
                    return fieldValue === expr.value;
                case "!==":
                    return fieldValue !== expr.value;
                case ">":
                    return fieldValue > expr.value;
                case "<":
                    return fieldValue < expr.value;
                case ">=":
                    return fieldValue >= expr.value;
                case "<=":
                    return fieldValue <= expr.value;
                default:
                    return false;
            }
        }

        if (expr.type === "logical") {
            switch (expr.operator) {
                case "AND":
                    return evaluateExpression(expr.left!, formValues) && evaluateExpression(expr.right!, formValues);
                case "OR":
                    return evaluateExpression(expr.left!, formValues) || evaluateExpression(expr.right!, formValues);
                case "NOT":
                    return !evaluateExpression(expr.left!, formValues);
                default:
                    return false;
            }
        }

        return false;
    };

    /**
     * Evaluates a condition string against form values
     * @param condition - Expression string like "field1 === 'Yes' AND field2 > 5"
     * @param formValues - Current form values
     * @returns Boolean result of the condition
     */
    const evaluate = (condition: string, formValues: Record<string, any>): boolean => {
        if (!condition || typeof condition !== "string") {
            return true;
        }

        try {
            let expr = expressionCache.value.get(condition);
            if (!expr) {
                const tokens = tokenize(condition);
                [expr] = parseExpression(tokens);
                expressionCache.value.set(condition, expr);
            }

            return evaluateExpression(expr, formValues);
        } catch (error) {
            console.error(`Error evaluating condition: "${condition}"`, error);
            return false;
        }
    };

    /**
     * Creates a function that can replace inline condition functions
     * @param condition - Expression string or function
     * @returns Function that evaluates the condition
     */
    const createConditionFunction = (condition: string | ((formValues: Record<string, any>) => boolean)) => {
        if (typeof condition === "function") {
            return condition;
        }

        return (formValues: Record<string, any>) => evaluate(condition, formValues);
    };

    /**
     * Validates that an expression is syntactically correct
     * @param expression - Expression string to validate
     * @returns Object with isValid and error message if invalid
     */
    const validateExpression = (expression: string): { isValid: boolean; error?: string } => {
        try {
            const tokens = tokenize(expression);
            parseExpression(tokens);
            return { isValid: true };
        } catch (error) {
            return {
                isValid: false,
                error: error instanceof Error ? error.message : "Unknown error",
            };
        }
    };

    const clearCache = () => {
        expressionCache.value.clear();
    };
    const getCacheStats = computed(() => ({
        size: expressionCache.value.size,
        expressions: Array.from(expressionCache.value.keys()),
    }));

    return {
        evaluate,
        createConditionFunction,
        validateExpression,
        clearCache,
        getCacheStats,
        tokenize,
        parseExpression,
        evaluateExpression,
    };
};

/**
 * Validation rules for conditional validation expressions
 * Can be used with validation functions
 */
export const ValidationRules = {
    required: (value: any): boolean => {
        if (value === null || value === undefined || value === "") return false;
        if (Array.isArray(value) && value.length === 0) return false;
        return true;
    },
    numeric: (value: any): boolean => {
        return !isNaN(Number(value)) && value !== "" && value !== null;
    },
    range: (min: number, max: number) => (value: any): boolean => {
        const num = Number(value);
        return !isNaN(num) && num >= min && num <= max;
    },
    length: (min: number, max?: number) => (value: any): boolean => {
        if (!value) return min === 0;
        const len = Array.isArray(value) ? value.length : String(value).length;
        return len >= min && (max ? len <= max : true);
    },
    pattern: (regex: RegExp) => (value: any): boolean => {
        if (!value) return false;
        return regex.test(String(value));
    },
    mwPhone: (value: any): boolean => {
        const phoneRegex = /^(\+?265|0)(((8[89]|9[89])\d{7})|(1\d{6})|(2\d{8})|(31\d{8}))$/;
        return phoneRegex.test(String(value));
    },
    mwNationalId: (value: any): boolean => {
        const idRegex = /^(?=[a-zA-Z0-9]*$)(?=\d+[a-zA-Z]|[a-zA-Z]+\d)([a-zA-Z\d]){8}$/;
        return idRegex.test(String(value));
    },
    min: (min: number) => (value: any): boolean => {
        return Number(value) >= min;
    },
    max: (max: number) => (value: any): boolean => {
        return Number(value) <= max;
    },
};

/**
 * Helper to create type-safe field conditions with autocomplete
 * @example
 * const condition = createFieldCondition<FormType>(
 *   (fields) => `${fields.referredFromAnotherFacility} === 'Yes'`
 * );
 */
export const createFieldCondition = <T extends Record<string, any>>(
    builder: (fields: T) => string
): ((formValues: T) => boolean) => {
    const expression = builder({} as T);
    const { createConditionFunction } = useConditionalExpressions();
    return createConditionFunction(expression);
};

/**
 * Hook for applying conditional rules and actions to forms
 * Provides methods to execute conditional actions like hiding fields, setting values, etc.
 */
export const useConditionalActions = () => {
    const { evaluate } = useConditionalExpressions();

    /**
     * Evaluates a condition and returns whether it's met
     */
    const evaluateCondition = (
        condition: string | ((formValues: Record<string, any>) => boolean),
        formValues: Record<string, any>
    ): boolean => {
        if (typeof condition === "function") {
            return condition(formValues);
        }
        return evaluate(condition, formValues);
    };

    /**
     * Checks which fields should be hidden based on conditional rules
     * @param rules - Array of conditional rules
     * @param formValues - Current form values
     * @returns Set of field names that should be hidden
     */
    const getHiddenFields = (
        rules: import("../interfaces/conditions").ConditionalRule[],
        formValues: Record<string, any>
    ): Set<string> => {
        const hiddenFields = new Set<string>();

        rules.forEach((rule) => {
            if (evaluateCondition(rule.condition, formValues)) {
                rule.actions.forEach((action) => {
                    if (action.type === "hideField" && action.target) {
                        const targets = Array.isArray(action.target) ? action.target : [action.target];
                        targets.forEach((target) => hiddenFields.add(target));
                    }
                });
            }
        });

        return hiddenFields;
    };

    /**
     * Checks which fields should be disabled based on conditional rules
     */
    const getDisabledFields = (
        rules: import("../interfaces/conditions").ConditionalRule[],
        formValues: Record<string, any>
    ): Set<string> => {
        const disabledFields = new Set<string>();

        rules.forEach((rule) => {
            if (evaluateCondition(rule.condition, formValues)) {
                rule.actions.forEach((action) => {
                    if (action.type === "setDisabled" && action.target) {
                        const targets = Array.isArray(action.target) ? action.target : [action.target];
                        targets.forEach((target) => disabledFields.add(target));
                    }
                });
            }
        });

        return disabledFields;
    };

    /**
     * Checks which fields should be required based on conditional rules
     */
    const getRequiredFields = (
        rules: import("../interfaces/conditions").ConditionalRule[],
        formValues: Record<string, any>
    ): Set<string> => {
        const requiredFields = new Set<string>();

        rules.forEach((rule) => {
            if (evaluateCondition(rule.condition, formValues)) {
                rule.actions.forEach((action) => {
                    if (action.type === "setRequired" && action.target) {
                        const targets = Array.isArray(action.target) ? action.target : [action.target];
                        targets.forEach((target) => requiredFields.add(target));
                    }
                });
            }
        });

        return requiredFields;
    };

    /**
     * Gets field values that should be set based on conditional rules
     */
    const getAutoSetValues = (
        rules: import("../interfaces/conditions").ConditionalRule[],
        formValues: Record<string, any>
    ): Record<string, any> => {
        const valuesToSet: Record<string, any> = {};

        rules.forEach((rule) => {
            if (evaluateCondition(rule.condition, formValues)) {
                rule.actions.forEach((action) => {
                    if (action.type === "setValue" && action.target && action.value !== undefined) {
                        const targets = Array.isArray(action.target) ? action.target : [action.target];
                        targets.forEach((target) => {
                            valuesToSet[target] = action.value;
                        });
                    }
                });
            }
        });

        return valuesToSet;
    };

    /**
     * Gets all warnings that should be displayed based on conditional rules
     */
    const getWarnings = (
        rules: import("../interfaces/conditions").ConditionalRule[],
        formValues: Record<string, any>
    ): string[] => {
        const warnings: string[] = [];

        rules.forEach((rule) => {
            if (evaluateCondition(rule.condition, formValues)) {
                rule.actions.forEach((action) => {
                    if (action.type === "showWarning" && action.message) {
                        warnings.push(action.message);
                    }
                });
            }
        });

        return warnings;
    };

    /**
     * Gets all dialogs that should be displayed based on conditional rules
     */
    const getDialogs = (
        rules: import("../interfaces/conditions").ConditionalRule[],
        formValues: Record<string, any>
    ): Array<{ title: string; message: string }> => {
        const dialogs: Array<{ title: string; message: string }> = [];

        rules.forEach((rule) => {
            if (evaluateCondition(rule.condition, formValues)) {
                rule.actions.forEach((action) => {
                    if (action.type === "showDialog" && action.message) {
                        dialogs.push({
                            title: action.title || "Information",
                            message: action.message,
                        });
                    }
                });
            }
        });

        return dialogs;
    };

    /**
     * Applies all conditional rules to a form
     * Returns comprehensive state about what should happen
     */
    const applyConditionalRules = (
        rules: import("../interfaces/conditions").ConditionalRule[],
        formValues: Record<string, any>
    ) => {
        return {
            hiddenFields: getHiddenFields(rules, formValues),
            disabledFields: getDisabledFields(rules, formValues),
            requiredFields: getRequiredFields(rules, formValues),
            autoSetValues: getAutoSetValues(rules, formValues),
            warnings: getWarnings(rules, formValues),
            dialogs: getDialogs(rules, formValues),
        };
    };

    return {
        evaluateCondition,
        getHiddenFields,
        getDisabledFields,
        getRequiredFields,
        getAutoSetValues,
        getWarnings,
        getDialogs,
        applyConditionalRules,
    };
};
