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

const DRAFT_PREFIX = "vue-ionic-standard-form:draft:";

const storage = (): Storage | null => {
    try {
        return window.localStorage;
    } catch {
        // Private browsing and locked-down webviews throw on access.
        return null;
    }
};

const storageKey = (key: string) => `${DRAFT_PREFIX}${key}`;

export const readFormDraft = (key: string): Record<string, any> | null => {
    if (!key) return null;

    try {
        const raw = storage()?.getItem(storageKey(key));
        if (!raw) return null;

        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
    } catch (error) {
        console.warn(`[useFormDraft] Could not read the draft for "${key}":`, error);
        return null;
    }
};

export const writeFormDraft = (key: string, values: Record<string, any>) => {
    if (!key) return;

    try {
        const store = storage();
        if (!store) return;

        // An empty form has nothing worth restoring, and keeping the entry would
        // mask a later draft check.
        if (!values || Object.keys(values).length === 0) {
            store.removeItem(storageKey(key));
            return;
        }

        store.setItem(storageKey(key), JSON.stringify(values));
    } catch (error) {
        // A full quota or an unserialisable value must never interrupt data entry.
        console.warn(`[useFormDraft] Could not save the draft for "${key}":`, error);
    }
};

export const clearFormDraft = (key: string) => {
    if (!key) return;

    try {
        storage()?.removeItem(storageKey(key));
    } catch (error) {
        console.warn(`[useFormDraft] Could not clear the draft for "${key}":`, error);
    }
};

/**
 * Drops every draft belonging to one form group - used when a whole sheet has
 * been submitted successfully, so the next admission starts clean.
 */
export const clearFormDraftsByPrefix = (keyPrefix: string) => {
    if (!keyPrefix) return;

    try {
        const store = storage();
        if (!store) return;

        const prefix = storageKey(keyPrefix);
        const staleKeys: string[] = [];
        for (let index = 0; index < store.length; index += 1) {
            const key = store.key(index);
            if (key && key.startsWith(prefix)) staleKeys.push(key);
        }

        staleKeys.forEach((key) => store.removeItem(key));
    } catch (error) {
        console.warn(`[useFormDraft] Could not clear drafts for "${keyPrefix}":`, error);
    }
};

/**
 * Values that describe the form rather than the patient's answers. They are
 * rebuilt from the form config on every mount, so storing them would only risk
 * restoring stale metadata over a changed form.
 */
const METADATA_KEYS = new Set(["obsValueType", "obsParentConcept", "obsBodyPartPrefix"]);

const isEmptyValue = (value: any) =>
    value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0);

export const draftableValues = (values: Record<string, any>) => {
    const draftable: Record<string, any> = {};

    Object.entries(values || {}).forEach(([key, value]) => {
        if (METADATA_KEYS.has(key)) return;
        if (isEmptyValue(value)) return;
        draftable[key] = value;
    });

    return draftable;
};

export { isEmptyValue };
