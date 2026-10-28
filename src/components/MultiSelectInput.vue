<!-- MultiselectField.vue -->
<template>
    <div v-if="shouldShowField" :class="[modeClass, { 'has-padding': config.padding === 'true' || config.padding === true }]">
        <!-- Header -->
        <div class="field-header">
            <h6 v-if="config.header" :class="config.bold">
                {{ config.header }}
                <span class="required" v-if="config.validation?.('', allFormValues) != null">*</span>
            </h6>
        </div>

        <!-- Multiselect Container -->
        <div
            :style="{ width: config.width || '100%' }"
            class="multiselect-wrapper"
            :class="{ disabled: isDisabled }"
            ref="multiselectWrapperRef"
            @click="handleToggle"
        >
            <!-- Left Icon -->
            <ion-icon v-if="config.icon" class="left-icon" :icon="config.icon" />
            <!-- <div v-if="config.leftIcon" class="left-icon" v-html="config.leftIcon"></div> -->

            <VueMultiselect
                ref="multiselectRef"
                v-model="selectedValue"
                @update:model-value="handleChange"
                @open="handleOpen"
                @close="handleClose"
                @search-change="handleSearchChange"
                @tag="handleTag"
                :multiple="config.isMultiple || false"
                :taggable="config.taggable || false"
                :hide-selected="config.hideSelected || true"
                :close-on-select="config.closeOnSelect || !config.isMultiple || false"
                :open-direction="config.openDirection || 'bottom'"
                :prevent-autofocus="config.preventAutofocus || false"
                :loading="config.loading || false"
                :searchable="config.searchable !== false"
                :internal-search="config.internalSearch !== false"
                :disabled="isDisabled"
                :placeholder="computedPlaceholder"
                :select-label="config.selectLabel || ''"
                :tag-placeholder="config.tagPlaceholder || ''"
                :label="config.label || 'name'"
                :track-by="config.trackBy || 'concept_id'"
                :options="computedOptions"
                :use-teleport="config.useTeleport"
                teleport-target="body"
                :content-wrapper-class="config.contentWrapperClass"
                :class="['custom-multiselect', { error: hasError, 'disabled-field': isDisabled }]"
                :tabindex="-1"
                class="no-focus"
            >
                <!-- Custom option template -->
                <template v-if="config.customOptionTemplate" #option="{ option }">
                    <div class="custom-option">
                        <span class="option-code">{{ option.code }}</span>
                        <span class="option-name">{{ option.name }}</span>
                    </div>
                </template>

                <!-- Custom single label template -->
                <template v-if="config.customOptionTemplate" #singleLabel="{ option }">
                    <div class="custom-single-label">
                        <span class="label-code">{{ option.code }}</span>
                        <span class="label-name">{{ option.name }}</span>
                    </div>
                </template>

                <!-- Custom tag template for multiple selection -->
                <template v-if="config.customOptionTemplate && config.isMultiple" #tag="{ option, remove }">
                    <div class="custom-tag">
                        <span class="tag-code">{{ option.code }}</span>
                        <span class="tag-name">{{ option.name }}</span>
                        <span class="multiselect__tag-icon" @click="remove(option)"></span>
                    </div>
                </template>

                <template #afterList>
                    <li v-if="config.hasMoreOptions" class="multiselect-load-more">
                        <button
                            type="button"
                            class="multiselect-load-more__button"
                            :disabled="config.loadingMore"
                            @mousedown.prevent.stop
                            @click.prevent.stop="handleLoadMore"
                        >
                            {{ config.loadingMore ? "Loading more..." : config.loadMoreText || "Load more" }}
                        </button>
                    </li>
                </template>
            </VueMultiselect>

            <!-- Disabled overlay -->
            <div v-if="isDisabled" class="disabled-overlay"></div>

            <!-- Error message -->
            <ion-note v-if="errorMessage && isTouched" class="error-note">
                {{ errorMessage }}
            </ion-note>

            <!-- Helper text -->
            <ion-note v-if="config.helperText && !errorMessage" class="helper-note">
                {{ config.helperText }}
            </ion-note>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { IonNote, IonIcon } from "@ionic/vue";
import VueMultiselect from "vue-multiselect";
import type { MultiSelectFieldConfig } from "../interfaces/StandardFormInterfaces/MultiselectFieldConfig";
import { scrollNearestParentIntoView } from "../utils/scroll";

const props = defineProps<{
    config: MultiSelectFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>();

const emit = defineEmits(["update:value", "field-changed", "search-change"]);

const multiselectWrapperRef = ref<HTMLElement | null>(null);
const multiselectRef = ref<any>(null);
const isDropdownOpen = ref(false);
const lastOpenTime = ref(0);

// Internal state
const selectedValue = ref(props.config.initialValue || props.config.value || (props.config.isMultiple ? [] : null));
const isTouched = ref(false); // Track if field has been interacted with
void (ref<any[]>([]));

// Watch for external config changes
watch(
    () => props.config.initialValue || props.config.value,
    (newValue) => {
        if (newValue !== undefined) {
            selectedValue.value = newValue;
            emitChange();
        }
    }
);

// Computed options - can be static array or dynamic function
const computedOptions = computed(() => {
    // If options is a function, call it with allFormValues
    if (typeof props.config.options === "function") {
        try {
            const result = props.config.options(props.allFormValues);
            // Ensure the result is an array
            return Array.isArray(result) ? result : [];
        } catch (error) {
            console.warn("Options function error:", error);
            return []; // Return empty array if function fails
        }
    }

    // If options is an array, return it directly
    if (Array.isArray(props.config.options)) {
        return props.config.options;
    }

    // Default to empty array
    return [];
});

const modeClass = computed(() => {
    if (props.config.mode === "card" || props.config.mode === "neonatal") {
        return "card-style";
    }
    if (props.config.mode === "standard") {
        return "standard-style";
    }
    return "";
});

// Determine if any option is currently selected
const hasSelection = computed(() => {
    if (props.config.isMultiple) {
        return Array.isArray(selectedValue.value) && selectedValue.value.length > 0;
    }

    return selectedValue.value !== undefined && selectedValue.value !== null && selectedValue.value !== "";
});

// Placeholder should disappear once there is a selection
const computedPlaceholder = computed(() => {
    return hasSelection.value ? "" : props.config.placeholder || "";
});

// Check if field should be disabled (dynamic disable functionality)
const isDisabled = computed(() => {
    // Check for static disabled property
    if (typeof props.config.disabled === "boolean") {
        return props.config.disabled;
    }

    // Check for dynamic disabled function
    if (typeof props.config.disabled === "function") {
        try {
            return props.config.disabled(props.allFormValues);
        } catch (error) {
            console.warn("Disabled function error:", error);
            return false; // Default to enabled if function fails
        }
    }

    return false; // Default to enabled
});

// Check if field should be shown based on condition
const shouldShowField = computed(() => {
    if (props.config.condition && typeof props.config.condition === "function") {
        try {
            return props.config.condition(props.allFormValues);
        } catch (error) {
            console.warn("Condition function error:", error);
            return false;
        }
    }
    return true;
});

// Validation
const errorMessage = computed(() => {
    if (!shouldShowField.value) return null;
    // Don't validate if field is disabled
    if (isDisabled.value) return null;
    return props.config.validation?.(selectedValue.value, props.allFormValues) || null;
});

const hasError = computed(() => {
    // Don't show error if field is disabled
    if (isDisabled.value) return false;
    return props.config.error || (errorMessage.value !== null && isTouched.value);
});

// Event handlers
const handleChange = (value: any) => {
    if (isDisabled.value) return; // Prevent changes when disabled

    isTouched.value = true; // Mark as touched when value changes
    selectedValue.value = value;
    emitChange();
};

const handleOpen = () => {
    if (isDisabled.value) return; // Prevent opening when disabled

    isDropdownOpen.value = true;
    lastOpenTime.value = Date.now();
    isTouched.value = true; // Mark as touched when dropdown opens
    props.config.onOpen?.(selectedValue.value);

    nextTick(() => {
        if (multiselectWrapperRef.value) {
            if (!props.config.preventScrollOnOpen) {
                scrollNearestParentIntoView(multiselectWrapperRef.value);
            }

            multiselectWrapperRef.value.dispatchEvent(
                new CustomEvent("dropdown-opened", {
                    bubbles: true,
                    composed: true,
                    detail: { element: multiselectWrapperRef.value },
                })
            );
        }
    });
};

const handleClose = () => {
    isDropdownOpen.value = false;
    props.config.onClose?.(selectedValue.value);
};

const handleToggle = (event: MouseEvent) => {
    if (isDisabled.value) return;

    // If the dropdown is already open and we click the wrapper area again, toggle it closed
    // But ONLY if it wasn't just opened (to prevent opening then immediately closing)
    if (isDropdownOpen.value && Date.now() - lastOpenTime.value > 300) {
        const target = event.target as HTMLElement;
        // Don't close if we're clicking a tag-remove icon or an actual option
        if (target.closest(".multiselect__tag-icon") || target.closest(".multiselect__option")) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        if (multiselectRef.value) {
            multiselectRef.value.deactivate();
        }
    }
};

const handleSearchChange = (searchQuery: string) => {
    if (isDisabled.value) return; // Prevent search when disabled

    isTouched.value = true; // Mark as touched when user searches
    props.config.onSearchChange?.(searchQuery);
    emit("search-change", searchQuery);
};

const handleLoadMore = async () => {
    if (isDisabled.value || props.config.loadingMore || !props.config.onLoadMore) return;
    await props.config.onLoadMore();
};

const handleTag = (newTag: any) => {
    if (isDisabled.value) return; // Prevent adding tags when disabled

    isTouched.value = true; // Mark as touched when user adds a tag
    props.config.onTag?.(newTag);
};

// Emit changes
const emitChange = () => {
    props.config.onChange?.(selectedValue.value);
    emit("update:value", selectedValue.value);
    emit("field-changed", {
        fieldName: props.config.name || props.config.header,
        value: selectedValue.value,
        config: props.config,
    });
};

// Watch for disabled state changes and clear value if disabled
watch(isDisabled, (newDisabled) => {
    if (newDisabled && selectedValue.value) {
        selectedValue.value = props.config.isMultiple ? [] : null;
        emitChange();
    }
});

// Expose methods for parent access
defineExpose({
    getValue: () => selectedValue.value,
    setValue: (value: any) => {
        selectedValue.value = value;
    },
    isValid: computed(() => isDisabled.value || errorMessage.value === null), // Consider disabled fields as valid
    validate: () => {
        // Don't validate disabled fields
        if (isDisabled.value) return null;
        isTouched.value = true; // Mark as touched when manually validating
        return errorMessage.value;
    },
    shouldShow: shouldShowField,
    markAsTouched: () => (isTouched.value = true), // Allow parent to mark as touched
    resetTouched: () => (isTouched.value = false), // Allow parent to reset touched state
    clearSelection: () => {
        selectedValue.value = props.config.isMultiple ? [] : null;
        emitChange();
    },
    getOptions: () => computedOptions.value, // Expose computed options
});
</script>

<style scoped>
h6 {
    margin-top: 0;
}

.required {
    color: red;
}

.custom-multiselect {
    min-height: 56px;
}

.multiselect-wrapper {
    position: relative;
}

.multiselect-wrapper.disabled {
    position: relative;
}

.multiselect-load-more {
    padding: 8px 12px;
    list-style: none;
}

.multiselect-load-more__button {
    width: 100%;
    min-height: 40px;
    border: 1px solid var(--ion-color-primary, #3880ff);
    border-radius: 6px;
    background: #fff;
    color: var(--ion-color-primary, #3880ff);
    font-weight: 600;
    cursor: pointer;
}

.multiselect-load-more__button:disabled {
    cursor: default;
    opacity: 0.6;
}

.disabled-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(237, 237, 237, 0);
    cursor: not-allowed;
    border-radius: 4px;
}

.left-icon {
    position: absolute;
    left: 15px;
    top: 28px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    z-index: 10;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left-icon :deep(svg) {
    width: 100%;
    height: 100%;
    fill: #999;
}

.custom-multiselect.error :deep(.multiselect__tags) {
    border-color: #dc3545;
    border-width: 2px;
}

.no-focus {
    outline: none !important;
}

.error-note {
    display: block;
    margin-top: 8px;
    color: #dc3545;
    font-size: var(--mahis-text-xs, 0.75rem);
    text-align: center;
}

.helper-note {
    display: block;
    margin-top: 8px;
    color: #666;
    font-size: var(--mahis-text-xs, 0.75rem);
}

/* Card Style Overrides (Card-like design) */
.card-style {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    gap: 16px;
    transition: all 0.2s ease;
}

.card-style:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.card-style .field-header {
    margin-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1;
}

.card-style .field-header h6 {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 500;
    color: #1f2937;
    line-height: 1.4;
    text-align: left;
}

.card-style .multiselect-wrapper {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.has-padding {
    padding: 20px !important;
}

/* Vue Multiselect styling */
:deep(.multiselect__tags) {
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    min-height: 56px;
    padding: 0 60px 0 16px; /* Adjust left padding based on icon presence */
    font-size: var(--mahis-text-lg, 1.125rem);
    font-weight: 700;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

/* Add left padding when icon is present */
.multiselect-wrapper:has(.left-icon) :deep(.multiselect__tags) {
    padding-left: 45px;
}

:deep(.multiselect__placeholder) {
    color: #999;
    font-weight: 400;
    font-size: var(--mahis-text-sm, 0.875rem);
    margin: 0;
    padding: 0;
    line-height: 56px; /* Center vertically */
    position: absolute;
    left: 0; /* Default position */
    top: 0;
    width: calc(100% - 60px); /* Account for right arrow */
    display: block;
}

/* Hide placeholder when there are selected items */
:deep(.multiselect__tags:has(.multiselect__tags-wrap) .multiselect__placeholder) {
    display: none;
}

:deep(.multiselect--disabled) {
    border-radius: 5px;
}
/* Adjust placeholder position when icon is present */
.multiselect-wrapper:has(.left-icon) :deep(.multiselect__placeholder) {
    left: 40px; /* Space for left icon */
    width: calc(100% - 100px); /* Account for both icons */
    padding-left: 0;
}

:deep(.multiselect__input) {
    background: transparent;
    border: none;
    font-size: var(--mahis-text-md, 1rem) !important;
    font-weight: 700 !important;
    color: #000 !important; /* Black color */
    margin: 0 !important;
    padding: 0 !important;
    line-height: 56px !important; /* Center vertically */
    height: 56px !important;
    width: 100% !important;
    position: relative;
    z-index: 1;
}

/* Adjust input position when icon is present */
.multiselect-wrapper:has(.left-icon) :deep(.multiselect__input) {
    padding-left: 0 !important;
}

:deep(.multiselect__input::placeholder) {
    color: #999 !important;
    font-weight: 400 !important;
}

:deep(.multiselect__tag) {
    background: #ddeedd;
    color: #006401;
    border-radius: 4px;
    margin: 2px 8px 2px 0;
    padding: 4px 36px 4px 10px;
    padding-top: 8px;
    padding-bottom: 10px;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 400;
    align-self: center;
}
:deep(.multiselect__tag-icon) {
    background-color: darkseagreen;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    top: 3.5px;
    right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 3px;
}

:deep(.multiselect__tag-icon:after) {
    color: #006401;
    font-size: 25px;
    padding-bottom: 6px;
}

:deep(.multiselect__tag-icon:hover) {
    background: rgba(255, 255, 255, 0.2);
}

:deep(.multiselect__select) {
    height: 56px;
    width: 40px;
    top: 0;
    right: 0;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

:deep(.multiselect__select:before) {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: "";
    height: 0;
    width: 0;
    position: relative;
    top: 0;
}

:deep(.multiselect__content-wrapper) {
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    z-index: 1000;
}

:deep(.multiselect__option) {
    padding: 12px;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #333;
}

:deep(.multiselect__option--highlight) {
    background: #ddeedd;
    color: #006401;
}

:deep(.multiselect__option--selected) {
    background: #ddeedd;
    color: #fff;
    font-weight: 600;
}

:deep(.multiselect__loading) {
    background: #f8f9fa;
}

/* Single select specific styling */
:deep(.multiselect__single) {
    background: transparent;
    color: #000 !important;
    font-size: var(--mahis-text-sm, 0.875rem) !important;
    font-weight: 700 !important;
    margin: 0;
    margin-left: 5px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    height: 40px;
    align-content: center;
}

/* Adjust single select position when icon is present */
.multiselect-wrapper:has(.left-icon) :deep(.multiselect__single) {
    left: 40px; /* Space for left icon */
    width: calc(100% - 100px); /* Account for both icons */
}

/* Custom option styling */
:deep(.custom-option) {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 0;
}

:deep(.option-code) {
    background: #e0f2fe;
    color: #0369a1;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: var(--mahis-text-xs, 0.75rem);
    font-weight: 600;
    min-width: 80px;
    text-align: center;
    flex-shrink: 0;
}

:deep(.option-name) {
    color: #374151;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 400;
    flex: 1;
}

/* Custom single label styling */
:deep(.custom-single-label) {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    overflow: hidden;
}

:deep(.label-code) {
    background: #dbeafe;
    color: #1e40af;
    padding: 0px 5px 0px 5px;
    border-radius: 3px;
    font-size: var(--mahis-text-xs, 0.75rem);
    font-weight: 600;
    flex-shrink: 0;
}

:deep(.label-name) {
    color: #000;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Custom tag styling for multiple selection */
:deep(.custom-tag) {
    background: #ddeedd;
    color: #006401;
    border-radius: 4px;
    padding: 6px 36px 6px 10px;
    margin: 2px 8px 2px 0;
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
    max-width: calc(100% - 60px);
}

:deep(.tag-code) {
    background: rgba(0, 100, 1, 0.15);
    color: #006401;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: var(--mahis-text-xs, 0.75rem);
    font-weight: 600;
    flex-shrink: 0;
}

:deep(.tag-name) {
    color: #006401;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

:deep(.custom-tag .multiselect__tag-icon) {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
}

/* Improved Disabled State Styling */
.disabled-field :deep(.multiselect__tags) {
    background: #f8f9fa !important;
    border-color: #dee2e6 !important;
    color: #6c757d !important;
}

.disabled-field :deep(.multiselect__placeholder) {
    color: #6c757d !important;
}

.disabled-field :deep(.multiselect__input) {
    color: #6c757d !important;
    cursor: not-allowed;
}

.disabled-field :deep(.multiselect__single) {
    color: #6c757d !important;
}

.disabled-field :deep(.multiselect__select) {
    cursor: not-allowed;
}

.disabled-field :deep(.multiselect__select:before) {
    border-color: #6c757d transparent transparent !important;
}

.disabled-field :deep(.multiselect__tag) {
    background: #e9ecef !important;
    color: #6c757d !important;
}

.disabled-field :deep(.multiselect__tag-icon:after) {
    color: #6c757d !important;
}

/* Disabled state for left icon */
.multiselect-wrapper.disabled .left-icon :deep(svg) {
    fill: #6c757d !important;
}

/* Remove the old disabled styling */
:deep(.multiselect--disabled .multiselect__tags) {
    background: #efefef !important;
    border-color: #dee2e6 !important;
    opacity: 1 !important; /* Remove opacity for cleaner look */
    cursor: not-allowed;
}

:deep(.multiselect--disabled .multiselect__placeholder) {
    color: #6c757d !important;
}

:deep(.multiselect--disabled .multiselect__input) {
    background: none !important;
    cursor: not-allowed;
    color: #6c757d !important;
}

:deep(.multiselect--disabled .multiselect__single) {
    color: #6c757d !important;
}

:deep(.multiselect--disabled .multiselect__select) {
    cursor: not-allowed;
    background: #ededed;
    color: #a6a6a6;
    border: solid 1px #dee2e6;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

:deep(.multiselect--disabled .multiselect__select:before) {
    border-color: #6c757d transparent transparent !important;
}

:deep(.multiselect--disabled .multiselect__tag) {
    background: #e9ecef !important;
    color: #6c757d !important;
    opacity: 1 !important; /* Remove opacity for cleaner look */
}

:deep(.multiselect__tags-wrap) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
</style>
