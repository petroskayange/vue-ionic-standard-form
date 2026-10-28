<template>
    <div
        ref="rootRef"
        class="searchable-dropdown-wrapper"
        :class="[modeClass, { 'has-padding': config.padding === 'true' || config.padding === true }]"
    >
        <h6 v-if="config.header" :class="{ 'is-bold': config.bold }">
            {{ config.header }}
            <span class="required" v-if="config.validation?.('', allFormValues) != null">*</span>
        </h6>


        <!-- Selected Items Display (for multiple selection) -->
        <div v-if="config.multiple && selectedItems.length > 0" class="selected-items-container">
            <div v-for="item in selectedItems" :key="item.value" class="selected-item chip">
                <span class="item-label">{{ item.label }}</span>
                <button @click="removeItem(item)" class="delete-btn" type="button" aria-label="Remove item">
                    <ion-icon :icon="trash" class="remove-icon"></ion-icon>
                </button>
            </div>
        </div>

        <!-- Selected Single Item Display -->
        <div v-if="!config.multiple && selectedValue" class="selected-item single-chip">
            <span class="item-label">{{ selectedValue.label }}</span>
            <button @click="clearSelection" class="delete-btn" type="button" aria-label="Remove item">
                <ion-icon :icon="trash" class="remove-icon"></ion-icon>
            </button>
        </div>

        <!-- Search Input -->
        <div class="search-wrapper" ref="searchWrapperRef">
            <div class="search-input-area" @pointerdown.stop="handlePointerDown">
                <ion-input
                    ref="ionInputRef"
                    v-model="searchQuery"
                    :placeholder="config.placeholder || 'Search'"
                    type="text"
                    class="search-input"
                    @ionInput="handleSearch"
                    @ionFocus="handleFocus"
                    :disabled="isDisabled"
                    fill="outline"
                >
                    <ion-label slot="start" class="start-content">
                        <ion-icon :icon="searchOutline" class="search-icon"></ion-icon>
                    </ion-label>
                    <ion-button
                        v-if="canAddCustomOption"
                        slot="end"
                        type="button"
                        size="small"
                        class="add-custom-option-button"
                        @pointerdown.stop.prevent="addCustomOption"
                        @click.stop.prevent="addCustomOption"
                    >
                        <ion-icon :icon="addOutline" slot="start"></ion-icon>
                        {{ config.customOptionButtonLabel || "Add" }}
                    </ion-button>
                </ion-input>
            </div>

            <!-- Loading Progress Bar -->
            <ion-progress-bar
                v-if="isLoading && isDropdownOpen"
                type="indeterminate"
                class="loading-progress-bar"
            ></ion-progress-bar>

            <!-- Dropdown List -->
            <Teleport to="body">
                <div v-if="isDropdownOpen" ref="dropdownRef" class="dropdown-container" :style="dropdownStyle">
                    <div class="dropdown-header">{{ config.dropdownHeader || "Select ONE" }}</div>
                    <div class="dropdown-list" ref="dropdownListRef" @scroll.passive="handleScroll">
                        <div v-if="isLoading && !filteredOptions.length" class="loader-row">
                            <span class="loader-text">Loading options...</span>
                        </div>
                        <div v-if="fetchError" class="error-row">{{ fetchError }}</div>
                        <div
                            v-for="option in filteredOptions"
                            :key="option.value"
                            class="dropdown-item"
                            :class="{ selected: isSelected(option) }"
                            @click="selectOption(option)"
                        >
                            <span>{{ option.label }}</span>
                            <span v-if="isSelected(option)" slot="end" class="checkmark">✔</span>
                        </div>
                    </div>
                    <div v-if="!isLoading && !filteredOptions.length && !fetchError" class="no-results">
                        {{ customOptionUnavailableMessage }}
                    </div>
                </div>
            </Teleport>
        </div>

        <div v-if="showEmptyState" class="field-empty-state" aria-live="polite">
            <p v-if="config.emptyState?.title" class="field-empty-state-title">{{ config.emptyState.title }}</p>
            <p class="field-empty-state-message">{{ config.emptyState?.message }}</p>
        </div>

        <!-- Error Message -->
        <ion-note v-if="errorMessage && isTouched" class="error-note">
            {{ errorMessage }}
        </ion-note>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import { IonIcon, IonNote, IonInput, IonLabel, IonProgressBar } from "@ionic/vue";
import { addOutline, searchOutline, trash } from "ionicons/icons";
import type { SearchableDropdownConfig, SearchableDropdownOption } from "../interfaces/StandardFormInterfaces/SearchableDropdownConfig";
import { scrollNearestParentIntoView } from "../utils/scroll";

interface Props {
    config: SearchableDropdownConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}

const props = defineProps<Props>();

const getResolvedOptions = (): SearchableDropdownOption[] => {
    const raw = props.config.options;
    if (typeof raw === "function") {
        try {
            const r = raw(props.allFormValues);
            return Array.isArray(r) ? r : [];
        } catch (e) {
            console.warn("[SearchableDropdown] options() error:", e);
            return [];
        }
    }
    if (Array.isArray(raw)) return raw;
    return [];
};

const emit = defineEmits<{
    "update:value": [value: SearchableDropdownOption | SearchableDropdownOption[] | null];
    "field-changed": [
        payload: {
            fieldName: string;
            value: any;
            config: SearchableDropdownConfig;
            newValue?: any;
        }
    ];
}>();

// State
const rootRef = ref<HTMLElement | null>(null);
const ionInputRef = ref<InstanceType<typeof IonInput> | null>(null);
const searchQuery = ref<string>("");
const debouncedQuery = ref<string>("");
let searchTimeout: ReturnType<typeof setTimeout> | null = null;

const isDropdownOpen = ref<boolean>(false);
const isTouched = ref<boolean>(false);
const searchWrapperRef = ref<HTMLElement | null>(null);
const dropdownListRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const dropdownStyle = ref<Record<string, string>>({
    top: "0px",
    left: "0px",
    width: "0px",
    position: "fixed",
});

const selectedValue = ref<SearchableDropdownOption | null>(
    (props.config.initialValue || props.config.value || null) as SearchableDropdownOption | null
);
const selectedItems = ref<SearchableDropdownOption[]>((props.config.initialValue || props.config.value || []) as SearchableDropdownOption[]);

const filteredOptions = ref<SearchableDropdownOption[]>([...getResolvedOptions()]);
const isLoading = ref<boolean>(false);
const fetchError = ref<string | null>(null);
const currentPage = ref<number>(1);
const pageSize = computed<number>(() => props.config.pageSize || 40);
const hasMore = ref<boolean>(true);
const remoteOptions = ref<SearchableDropdownOption[]>([]);

// Computed
const isDisabled = computed<boolean>(() => {
    if (typeof props.config.disabled === "boolean") {
        return props.config.disabled;
    }
    if (typeof props.config.disabled === "function") {
        try {
            return props.config.disabled(props.allFormValues);
        } catch (error) {
            console.warn("[SearchableDropdown] Disabled function error:", error);
            return false;
        }
    }
    return false;
});

const shouldShowField = computed<boolean>(() => {
    if (props.config.condition && typeof props.config.condition === "function") {
        try {
            return props.config.condition(props.allFormValues);
        } catch (error) {
            console.warn("[SearchableDropdown] Condition function error:", error);
            return false;
        }
    }
    return true;
});

const errorMessage = computed<string | null>(() => {
    if (!shouldShowField.value) return null;
    if (isDisabled.value) return null;
    const value = props.config.multiple ? selectedItems.value : selectedValue.value;
    return props.config.validation?.(value, props.allFormValues) || null;
});
const hasSelection = computed<boolean>(() => {
    if (props.config.multiple) {
        return selectedItems.value.length > 0;
    }
    return !!selectedValue.value;
});
const showEmptyState = computed<boolean>(() => {
    if (!props.config.emptyState?.message) return false;
    if (!shouldShowField.value || isDisabled.value) return false;
    return !hasSelection.value;
});
const trimmedSearchQuery = computed(() => searchQuery.value.trim());
const canAddCustomOption = computed(
    () =>
        props.config.allowCustomOption === true &&
        trimmedSearchQuery.value.length > 0 &&
        !isLoading.value &&
        !fetchError.value &&
        filteredOptions.value.length === 0
);
const customOptionUnavailableMessage = computed(() => {
    if (!props.config.allowCustomOption || !trimmedSearchQuery.value) return "No results found.";
    const label = props.config.customOptionUnavailableLabel || "is not available";
    return `“${trimmedSearchQuery.value}” ${label}.`;
});

const mode = computed(() => props.config.mode || props.mode || "");
const modeClass = computed(() => {
    if (mode.value === "card" || mode.value === "neonatal") return "neonatal-style";
    return "";
});
const isRemoteSearch = computed<boolean>(() => typeof props.config.onSearchChange === "function");
const normalizeValue = (value: unknown): string => {
    if (value === undefined || value === null) return "";
    return String(value).toLowerCase();
};
const exclusiveValueSet = computed<Set<string>>(() => {
    const configured = props.config.exclusiveValues || [];
    return new Set(configured.map((value) => normalizeValue(value)));
});

// Methods
const isSelected = (option: SearchableDropdownOption): boolean => {
    if (props.config.multiple) {
        return selectedItems.value.some((item) => item.value === option.value);
    }
    return selectedValue.value?.value === option.value;
};

const emitDropdownOpened = () => {
    nextTick(() => {
        updateDropdownPosition();
        if (searchWrapperRef.value) {
            scrollNearestParentIntoView(searchWrapperRef.value);
            const event = new CustomEvent("dropdown-opened", {
                bubbles: true,
                composed: true,
                detail: { element: searchWrapperRef.value },
            });
            searchWrapperRef.value.dispatchEvent(event);
        }
    });
};

const openDropdown = () => {
    if (!isDropdownOpen.value) {
        isDropdownOpen.value = true;
        emitDropdownOpened();
    }
    if (isRemoteSearch.value && remoteOptions.value.length === 0 && !isLoading.value) {
        fetchOptions({ reset: true });
    }
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const suppressNextFocusOpen = ref<boolean>(false);
const updateDropdownPosition = () => {
    if (!searchWrapperRef.value) return;
    const rect = searchWrapperRef.value.getBoundingClientRect();
    dropdownStyle.value = {
        position: "fixed",
        top: `${rect.bottom + 6}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        zIndex: "20000",
    };
};

const handleWindowChange = () => {
    if (!isDropdownOpen.value) return;
    updateDropdownPosition();
};

const focusAndSelectSearch = async () => {
    await nextTick();
    const ionInstance = ionInputRef.value as any;
    const ion = ionInstance?.$el ?? ionInstance;
    try {
        if (ion?.setFocus) {
            await ion.setFocus();
        }
        await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
        const inputEl =
            (await ion?.getInputElement?.().catch?.(() => null)) ??
            ion?.shadowRoot?.querySelector?.("input") ??
            ion?.querySelector?.("input");
        if (inputEl && typeof inputEl.select === "function") {
            if (typeof inputEl.focus === "function") inputEl.focus();
            inputEl.select();
        }
    } catch {
        try {
            await ion?.setFocus?.();
        } catch {}
    }
};

const handlePointerDown = () => {
    if (isDisabled.value) return;
    isTouched.value = true;
    if (isDropdownOpen.value) {
        suppressNextFocusOpen.value = true;
        closeDropdown();
        return;
    }
    openDropdown();
};

const handleFocus = (): void => {
    if (isDisabled.value) return;
    isTouched.value = true;
    // TAB navigation support: ensure it opens when focused via keyboard
    if (suppressNextFocusOpen.value) {
        suppressNextFocusOpen.value = false;
        return;
    }
    openDropdown();
};

const handleSearch = (): void => {
    if (!isDropdownOpen.value) openDropdown();
    if (isRemoteSearch.value) return;

    const query = searchQuery.value.toLowerCase().trim();
    const base = getResolvedOptions();
    filteredOptions.value = query ? base.filter((opt) => opt.label.toLowerCase().includes(query)) : [...base];
};

const coerceOptions = (payload: any): SearchableDropdownOption[] => {
    if (!payload) return [];
    if (Array.isArray(payload)) return payload as SearchableDropdownOption[];
    if (Array.isArray(payload?.results)) return payload.results as SearchableDropdownOption[];
    if (Array.isArray(payload?.data)) return payload.data as SearchableDropdownOption[];
    if (Array.isArray(payload?.records)) return payload.records as SearchableDropdownOption[];
    return [];
};

const normalizeOption = (item: any): SearchableDropdownOption | null => {
    if (!item) return null;
    if (typeof item?.label === "string" && item?.value !== undefined) return item as SearchableDropdownOption;
    const labelCandidate = item?.name ?? item?.title ?? item?.label ?? item?.concept_name;
    const label = typeof labelCandidate === "string" ? labelCandidate.trim() : "";
    if (!label) return null;
    return { label, value: item?.value ?? label, ...item };
};

const fetchOptions = async (opts?: { reset?: boolean }) => {
    if (!isRemoteSearch.value) return;

    try {
        if (opts?.reset) {
            currentPage.value = 1;
            remoteOptions.value = [];
            hasMore.value = true;
            fetchError.value = null;
        }

        if (!hasMore.value) return;

        isLoading.value = true;
        fetchError.value = null;

        const result = await props.config.onSearchChange?.(debouncedQuery.value || "", currentPage.value, pageSize.value);
        const incoming = coerceOptions(result)
            .map(normalizeOption)
            .filter((opt): opt is SearchableDropdownOption => !!opt);

        if (incoming.length < pageSize.value) hasMore.value = false;

        const existingValues = new Set(remoteOptions.value.map((o) => String(o.value)));
        const merged = [...remoteOptions.value];
        incoming.forEach((opt) => {
            const key = String(opt.value);
            if (!existingValues.has(key)) {
                existingValues.add(key);
                merged.push(opt);
            }
        });

        remoteOptions.value = merged;
        filteredOptions.value = [...remoteOptions.value];
    } catch (_e) {
        fetchError.value = "Failed to load options.";
        hasMore.value = false;
    } finally {
        isLoading.value = false;
    }
};

const loadMore = async () => {
    if (!isRemoteSearch.value) return;
    if (!hasMore.value || isLoading.value) return;
    currentPage.value += 1;
    await fetchOptions();
};

const handleScroll = async (event: Event) => {
    if (!isRemoteSearch.value) return;
    if (!hasMore.value || isLoading.value) return;
    const el = event.target as HTMLElement | null;
    if (!el) return;

    const thresholdPx = 60;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - thresholdPx;
    if (nearBottom) {
        await loadMore();
    }
};

const selectOption = (option: SearchableDropdownOption): void => {
    if (props.config.multiple) {
        const normalizedOptionValue = normalizeValue(option.value);
        const isExclusive = exclusiveValueSet.value.has(normalizedOptionValue);

        if (isExclusive) {
            const alreadySelected = selectedItems.value.some(
                (item) => normalizeValue(item.value) === normalizedOptionValue
            );
            if (alreadySelected) {
                selectedItems.value = selectedItems.value.filter(
                    (item) => normalizeValue(item.value) !== normalizedOptionValue
                );
            } else {
                selectedItems.value = [option];
            }
            focusAndSelectSearch();
            return;
        }

        const hasExclusiveSelection = selectedItems.value.some((item) =>
            exclusiveValueSet.value.has(normalizeValue(item.value))
        );
        if (hasExclusiveSelection) {
            selectedItems.value = selectedItems.value.filter(
                (item) => !exclusiveValueSet.value.has(normalizeValue(item.value))
            );
        }

        const index = selectedItems.value.findIndex((item) => item.value === option.value);
        if (index > -1) {
            const nextValues = [...selectedItems.value];
            nextValues.splice(index, 1);
            selectedItems.value = nextValues;
        } else {
            selectedItems.value = [...selectedItems.value, option];
        }

        focusAndSelectSearch();
        return;
    }

    selectedValue.value = option;
    closeDropdown();
    searchQuery.value = "";
    if (isRemoteSearch.value) {
        debouncedQuery.value = "";
        currentPage.value = 1;
        hasMore.value = true;
        fetchError.value = null;
        remoteOptions.value = [];
        filteredOptions.value = [];
    } else {
        filteredOptions.value = [...getResolvedOptions()];
    }
    suppressNextFocusOpen.value = true;
    focusAndSelectSearch();
};

const addCustomOption = (): void => {
    if (!canAddCustomOption.value) return;

    const label = trimmedSearchQuery.value;
    selectOption({ label, value: label, isCustom: true });
    searchQuery.value = "";
    debouncedQuery.value = "";
    remoteOptions.value = [];
    filteredOptions.value = [];
    currentPage.value = 1;
    hasMore.value = true;
    fetchError.value = null;
    closeDropdown();
};

const removeItem = (item: SearchableDropdownOption): void => {
    if (props.config.multiple) {
        selectedItems.value = selectedItems.value.filter((i) => i.value !== item.value);
    }
};

const clearSelection = (): void => {
    selectedValue.value = null;
};

const isEventInsideComponent = (event: Event): boolean => {
    const root = rootRef.value;
    if (!root) return false;
    const anyEvent = event as any;
    const path = typeof anyEvent.composedPath === "function" ? (anyEvent.composedPath() as EventTarget[]) : [];
    if (path.length) {
        const dropdownEl = dropdownRef.value;
        return path.includes(root) || (dropdownEl ? path.includes(dropdownEl) : false);
    }
    const target = event.target as Node | null;
    if (!target) return false;
    if (root.contains(target)) return true;
    const dropdownEl = dropdownRef.value;
    return !!dropdownEl && dropdownEl.contains(target);
};

const handleDocumentPointerDown = (event: PointerEvent): void => {
    if (!isDropdownOpen.value) return;
    if (isEventInsideComponent(event)) return;
    closeDropdown();
};

const handleDocumentKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== "Escape") return;
    if (!isDropdownOpen.value) return;
    closeDropdown();
};

// Lifecycle & Watchers
onMounted(() => {
    document.addEventListener("pointerdown", handleDocumentPointerDown, true);
    document.addEventListener("keydown", handleDocumentKeyDown);
    window.addEventListener("resize", handleWindowChange);
    window.addEventListener("scroll", handleWindowChange, true);
});

onUnmounted(() => {
    document.removeEventListener("pointerdown", handleDocumentPointerDown, true);
    document.removeEventListener("keydown", handleDocumentKeyDown);
    window.removeEventListener("resize", handleWindowChange);
    window.removeEventListener("scroll", handleWindowChange, true);
});

watch(
    () => [props.config.options, props.allFormValues] as const,
    () => {
        if (!isRemoteSearch.value) {
            filteredOptions.value = [...getResolvedOptions()];
        }
    },
    { deep: true, immediate: true }
);

watch(
    searchQuery,
    (val) => {
        if (searchTimeout) clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            debouncedQuery.value = val.toLowerCase().trim();
        }, 250);
    },
    { immediate: true }
);

watch(debouncedQuery, () => {
    if (!isRemoteSearch.value) return;
    fetchOptions({ reset: true });
});

watch(isDropdownOpen, (open) => {
    if (open) {
        nextTick(() => updateDropdownPosition());
    }
});

watch(selectedValue, (newValue) => {
    if (!props.config.multiple) {
        emit("update:value", newValue);
        emit("field-changed", {
            fieldName: props.config.name || props.config.header || "",
            value: newValue,
            config: props.config,
            newValue: newValue,
        });
    }
});

watch(
    selectedItems,
    (newValue) => {
        if (props.config.multiple) {
            emit("update:value", newValue);
            emit("field-changed", {
                fieldName: props.config.name || props.config.header || "",
                value: newValue,
                config: props.config,
            });
        }
    },
    { deep: true }
);

// Expose methods for parent components
defineExpose({
    getValue: (): SearchableDropdownOption | SearchableDropdownOption[] | null => {
        return props.config.multiple ? selectedItems.value : selectedValue.value;
    },
    setValue: (value: SearchableDropdownOption | SearchableDropdownOption[] | null): void => {
        if (props.config.multiple) {
            selectedItems.value = (value as SearchableDropdownOption[]) || [];
        } else {
            selectedValue.value = (value as SearchableDropdownOption) || null;
        }
    },
    isValid: computed<boolean>(() => isDisabled.value || errorMessage.value === null),
    validate: (): string | null => {
        if (isDisabled.value) return null;
        isTouched.value = true;
        return errorMessage.value;
    },
    shouldShow: shouldShowField,
    markAsTouched: (): void => {
        isTouched.value = true;
    },
    resetTouched: (): void => {
        isTouched.value = false;
    },
});
</script>

<style scoped>
/* Component wrapper */
.searchable-dropdown-wrapper {
    position: relative;
    background-color: white;
}

/* Header styles */
h6 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #333333;
    font-weight: 500;
}

h6.is-bold {
    font-weight: 700;
}

.required {
    color: #dc3545;
    margin-left: 2px;
}


/* Selected items display */
.selected-items-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
}

.selected-item {
    background-color: #e8f5e9;
    color: #303030;
    border-radius: 8px;
    padding: 10px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
}

.selected-item:hover {
    background-color: #dcedc8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.single-chip {
    margin-bottom: 12px;
    background-color: #e8f5e9;
    border: 1px solid #c8e6c9;
    color: #1b5e20;
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.item-label {
    font-weight: 600;
    font-size: var(--mahis-text-md, 1rem);
    flex: 1;
}

.delete-btn {
    background-color: #fecdca;
    border: none;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b42318;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.delete-btn:hover {
    background-color: #ffc1bb;
    color: #912018;
}

.remove-icon {
    font-size: 18px;
}

/* Search Input */
.search-wrapper {
    position: relative;
    margin-bottom: 0;
}

.start-content {
    display: flex;
    align-items: center;
}

.search-icon {
    font-size: 20px;
    color: #666666;
}

.search-input {
    --background: #fff;
    --border-color: #e6e6e6;
    --border-color-focused: #006401;
    --highlight-color-focused: #006401;
    --border-radius: 8px;
    --placeholder-font-weight: 600;
    --placeholder-font-size: var(--mahis-text-sm, 0.875rem);
    --placeholder-opacity: 0.7;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    min-height: 56px;
}

.search-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.add-custom-option-button {
    margin-inline-end: 8px;
    --border-radius: 5px;
    --background: var(--ion-color-primary);
    --color: var(--ion-color-primary-contrast, #ffffff);
    font-weight: 600;
    text-transform: none;
}

/* Dropdown Container */
.dropdown-container {
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-top: 0;
    position: fixed;
    z-index: 20000;
}

.dropdown-header {
    padding: 12px 16px;
    background-color: #f5f5f5;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #666666;
    font-weight: 500;
    border-bottom: 1px solid #e6e6e6;
}

.dropdown-list {
    max-height: 300px;
    overflow-y: auto;
}

.loading-progress-bar {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    z-index: 10;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 16px;
    --progress-background: #006401;
    --background: rgba(0, 100, 1, 0.1);
    outline: none;
    border: none;
}

.loading-progress-bar:focus,
.loading-progress-bar:active {
    outline: none;
    border: none;
    box-shadow: none;
}

.loader-row {
    padding: 12px;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #666666;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 4px;
}

.loader-text {
    color: #006401;
    font-weight: 500;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.error-row {
    padding: 12px;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #b42318;
}

.no-results {
    padding: 12px;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #666666;
    text-align: center;
}

.dropdown-item {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.15s;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #333;
}

.dropdown-item:hover {
    background: #ddeedd;
    color: #006401;
}

.dropdown-item.selected {
    background: #ddeedd;
    color: #006401;
    font-weight: 600;
}

.dropdown-item.selected:hover {
    color: #006401;
}

.check-icon {
    font-size: 20px;
    color: inherit;
    flex-shrink: 0;
}

/* Error Note */
.error-note {
    text-align: center;
    display: block;
    margin-top: 4px;
    color: #dc3545;
}

.field-empty-state {
    margin-top: 12px;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px dashed rgba(0, 100, 1, 0.15);
    background: rgba(0, 100, 1, 0.05);
}

.field-empty-state-title {
    margin: 0 0 4px;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 700;
    color: #1f2937;
}

.field-empty-state-message {
    margin: 0;
    font-size: var(--mahis-text-sm, 0.875rem);
    line-height: 1.5;
    color: #5f6b7a;
}


.checkmark {
    color: #1b6b2a !important;
    font-weight: bold;
}
/* Neonatal Style Overrides */
.neonatal-style {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    transition: all 0.2s ease;
}

.has-padding {
    padding: 10px 20px !important;
}

.neonatal-style h6 {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 500;
    color: #1f2937;
    line-height: 1.4;
    margin-bottom: 12px;
}

.neonatal-style .search-input {
    --border-radius: 8px;
    --background: #fff;
    --border-color: #e6e6e6;
}
</style>
