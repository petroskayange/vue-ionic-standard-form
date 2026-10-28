/**
 * Local, unsent-work drafts for StandardForm.
 *
 * Clinicians reported retyping a whole medical admission up to three times when
 * the server tripped: step values live only in component state until they reach
 * the server, so a reload or a crash took everything with it. A draft is a
 * best-effort local copy of what has been typed but not yet accepted by the
 * server. It is never a source of truth - saved observations always win - and it
 * is dropped as soon as the work it protects has been saved.
 */
export declare const readFormDraft: (key: string) => Record<string, any> | null;
export declare const writeFormDraft: (key: string, values: Record<string, any>) => void;
export declare const clearFormDraft: (key: string) => void;
/**
 * Drops every draft belonging to one form group - used when a whole sheet has
 * been submitted successfully, so the next admission starts clean.
 */
export declare const clearFormDraftsByPrefix: (keyPrefix: string) => void;
declare const isEmptyValue: (value: any) => boolean;
export declare const draftableValues: (values: Record<string, any>) => Record<string, any>;
export { isEmptyValue };
