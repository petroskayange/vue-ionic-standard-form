<template>
    <div
        v-if="shouldShowField"
        class="time-field-container"
        :class="[modeClass, { 'has-padding': config.padding === 'true' || config.padding === true }]"
    >
        <!-- Header -->
        <h6 v-if="config.header" :class="config.bold">
            {{ config.header }}
            <span class="required" v-if="config.validation?.('', allFormValues) != null">*</span>
        </h6>

        <!-- Time Input Wrapper -->
        <div class="picker-section" :style="{ width: config.width || '100%' }">
            <div class="input-trigger-wrapper" id="time-input-trigger">
                <ion-input
                    :value="inputValue"
                    @click="startEditing"
                    fill="outline"
                    :placeholder="config.placeholder || 'Select time'"
                    :disabled="isDisabled"
                    readonly
                    class="custom-input"
                    :style="{
                        minHeight: (config.minHeight || 56) + 'px',
                        '--placeholder-font-size': config.placeholderFontSize || '14px',
                        '--placeholder-font-weight': config.placeholderFontWeight || '600',
                        '--color': '#000000',
                        '--placeholder-color': '#666666',
                    }"
                >
                    <!-- Left content -->
                    <ion-label v-if="config.icon || config.leftText" slot="start" class="start-content">
                        <ion-icon v-if="config.icon" :icon="config.icon" />
                        <span v-if="config.leftText" class="left-text">{{ config.leftText }}</span>
                    </ion-label>

                    <!-- Right content/Action buttons -->
                    <div slot="end" class="end-content-wrapper">
                        <ion-button v-if="config.showNowButton" @click.stop="setToNow" class="now-btn quick-action-btn" fill="clear">
                            Now
                        </ion-button>

                        <ion-label v-if="config.unit || config.rightIcon" class="end-content">
                            <ion-icon v-if="config.rightIcon" :icon="config.rightIcon" />
                            <span v-if="config.unit">{{ config.unit }}</span>
                        </ion-label>
                    </div>
                </ion-input>
            </div>

            <!-- Error message -->
            <ion-note v-if="errorMessage && isTouched" class="error-note">
                {{ errorMessage }}
            </ion-note>

            <!-- Time Picker Popover using IonPopover -->
            <ion-popover
                :is-open="isEditing"
                :event="popoverEvent"
                @didDismiss="stopEditing"
                @didPresent="onPopoverPresented"
                class="time-picker-popover"
                :dismiss-on-select="false"
                side="bottom"
                alignment="start"
            >
                <div class="popover-content">
                    <div class="popover-header">
                        <span>Select Time</span>
                        <ion-button fill="clear" @click="stopEditing" size="small">
                            <ion-icon :icon="closeOutline" slot="icon-only"></ion-icon>
                        </ion-button>
                    </div>

                    <div class="picker-main">
                        <div class="picker-columns">
                            <!-- Hours -->
                            <div class="column">
                                <div class="scroll-container" ref="hoursScroll" @scroll="handleHourScroll">
                                    <div class="spacer"></div>
                                    <div
                                        v-for="hour in hours"
                                        :key="hour"
                                        class="picker-item"
                                        :class="{ selected: hour === selectedHour }"
                                        @click="selectHour(hour)"
                                    >
                                        {{ hour.toString().padStart(2, "0") }}
                                    </div>
                                    <div class="spacer"></div>
                                </div>
                            </div>

                            <div class="separator">:</div>

                            <!-- Minutes -->
                            <div class="column">
                                <div class="scroll-container" ref="minutesScroll" @scroll="handleMinuteScroll">
                                    <div class="spacer"></div>
                                    <div
                                        v-for="minute in minutes"
                                        :key="minute"
                                        class="picker-item"
                                        :class="{ selected: minute === selectedMinute }"
                                        @click="selectMinute(minute)"
                                    >
                                        {{ minute.toString().padStart(2, "0") }}
                                    </div>
                                    <div class="spacer"></div>
                                </div>
                            </div>

                            <!-- Meridian -->
                            <div class="column meridian">
                                <div class="scroll-container" ref="meridianScroll" @scroll="handleMeridianScroll">
                                    <div class="spacer"></div>
                                    <div
                                        v-for="period in meridians"
                                        :key="period"
                                        class="picker-item"
                                        :class="{ selected: period === selectedMeridian }"
                                        @click="selectMeridian(period)"
                                    >
                                        {{ period }}
                                    </div>
                                    <div class="spacer"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Selection highlight -->
                        <div class="selection-box"></div>
                    </div>

                    <div class="popover-footer">
                        <ion-button expand="block" @click="stopEditing" class="done-button"> Done </ion-button>
                    </div>
                </div>
            </ion-popover>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { IonInput, IonButton, IonLabel, IonIcon, IonNote, IonPopover } from "@ionic/vue";
import { closeOutline } from "ionicons/icons";
import type { TimeFieldConfig } from "../interfaces/StandardFormInterfaces/TimeFieldConfig";

const props = defineProps<{
    config: TimeFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>();

const emit = defineEmits(["update:value", "update:rawValue", "field-changed"]);

// Business Logic State
const inputValue = ref(props.config.initialValue || props.config.value || "");
const isTouched = ref(false);
const isEditing = ref(false);
const popoverEvent = ref<Event | null>(null);

const selectedHour = ref(props.config.initialHour || 6);
const selectedMinute = ref(props.config.initialMinute || 30);
const selectedMeridian = ref(props.config.initialMeridian || "AM");

const hoursScroll = ref<HTMLElement | null>(null);
const minutesScroll = ref<HTMLElement | null>(null);
const meridianScroll = ref<HTMLElement | null>(null);

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) => i);
const meridians = ["AM", "PM"];

// Watchers
watch(
    () => props.config.initialValue || props.config.value,
    (newValue) => {
        if (newValue !== undefined) {
            inputValue.value = newValue;
            parseTimeValue(newValue);
        }
    }
);

// Computed properties
const isDisabled = computed(() => {
    if (typeof props.config.disabled === "boolean") return props.config.disabled;
    if (typeof props.config.disabled === "function") {
        try {
            return props.config.disabled(props.allFormValues);
        } catch (_error) {
            return false;
        }
    }
    return false;
});

const shouldShowField = computed(() => {
    if (props.config.condition && typeof props.config.condition === "function") {
        try {
            return props.config.condition(props.allFormValues);
        } catch (_error) {
            return false;
        }
    }
    return true;
});

const errorMessage = computed(() => {
    if (!shouldShowField.value || isDisabled.value) return null;
    return props.config.validation?.(inputValue.value, props.allFormValues) || null;
});

void (computed(() => {
    if (isDisabled.value) return false;
    return props.config.error || (errorMessage.value !== null && isTouched.value);
}));

const mode = computed(() => props.config.mode || props.mode || "");
const modeClass = computed(() => (mode.value === "neonatal" || mode.value === "card" ? "neonatal-style" : ""));

// Methods (Logic)
const parseTimeValue = (timeStr: string) => {
    if (!timeStr) return;
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (match) {
        selectedHour.value = parseInt(match[1]);
        selectedMinute.value = parseInt(match[2]);
        selectedMeridian.value = match[3].toUpperCase() as "AM" | "PM";
        nextTick(scrollToSelected);
    }
};

const formatTimeValue = () => {
    return `${selectedHour.value.toString().padStart(2, "0")}:${selectedMinute.value.toString().padStart(2, "0")} ${selectedMeridian.value}`;
};

const updateValue = () => {
    const formattedTime = formatTimeValue();
    inputValue.value = formattedTime;
    isTouched.value = true;

    const timeObject = {
        hour: selectedHour.value,
        minute: selectedMinute.value,
        meridian: selectedMeridian.value,
    };

    emit("update:value", formattedTime);
    emit("update:rawValue", timeObject);
    emit("field-changed", {
        fieldName: props.config.name || props.config.header,
        value: formattedTime,
        rawValue: timeObject,
        config: props.config,
    });

    props.config.onChange?.(formattedTime, timeObject);
};

const scrollToSelected = () => {
    const itemHeight = 44; // Matches CSS
    if (hoursScroll.value) hoursScroll.value.scrollTop = hours.indexOf(selectedHour.value) * itemHeight;
    if (minutesScroll.value) minutesScroll.value.scrollTop = minutes.indexOf(selectedMinute.value) * itemHeight;
    if (meridianScroll.value) meridianScroll.value.scrollTop = meridians.indexOf(selectedMeridian.value) * itemHeight;
};

const handleHourScroll = () => {
    if (!hoursScroll.value) return;
    const index = Math.round(hoursScroll.value.scrollTop / 44);
    if (index >= 0 && index < hours.length) selectedHour.value = hours[index];
};

const handleMinuteScroll = () => {
    if (!minutesScroll.value) return;
    const index = Math.round(minutesScroll.value.scrollTop / 44);
    if (index >= 0 && index < minutes.length) selectedMinute.value = minutes[index];
};

const handleMeridianScroll = () => {
    if (!meridianScroll.value) return;
    const index = Math.round(meridianScroll.value.scrollTop / 44);
    if (index >= 0 && index < meridians.length) selectedMeridian.value = meridians[index] as "AM" | "PM";
};

const selectHour = (hour: number) => {
    selectedHour.value = hour;
    scrollToSelected();
    updateValue();
};
const selectMinute = (minute: number) => {
    selectedMinute.value = minute;
    scrollToSelected();
    updateValue();
};
const selectMeridian = (meridian: string) => {
    selectedMeridian.value = meridian as "AM" | "PM";
    scrollToSelected();
    updateValue();
};

const startEditing = (event: Event) => {
    if (isDisabled.value) return;
    popoverEvent.value = event;
    isEditing.value = true;
};

const onPopoverPresented = () => {
    nextTick(scrollToSelected);
};

const stopEditing = () => {
    isEditing.value = false;
    isTouched.value = true;
    updateValue();
};

const setToNow = (event: Event) => {
    event.stopPropagation();
    const now = new Date();
    let hour = now.getHours();
    const meridian = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    selectedHour.value = hour;
    selectedMinute.value = now.getMinutes();
    selectedMeridian.value = meridian as "AM" | "PM";
    updateValue();
    nextTick(scrollToSelected);
};

onMounted(() => {
    if (inputValue.value) parseTimeValue(inputValue.value);
});

// Expose
defineExpose({
    getValue: () => inputValue.value,
    getRawValue: () => ({
        hour: selectedHour.value,
        minute: selectedMinute.value,
        meridian: selectedMeridian.value,
    }),
    setValue: (value: string) => {
        inputValue.value = value;
        parseTimeValue(value);
    },
    isValid: computed(() => isDisabled.value || errorMessage.value === null),
    validate: () => {
        if (isDisabled.value) return null;
        isTouched.value = true;
        return errorMessage.value;
    },
    shouldShow: shouldShowField,
    markAsTouched: () => (isTouched.value = true),
    resetTouched: () => (isTouched.value = false),
});
</script>

<style scoped>
.time-field-container {
    width: 100%;
}

h6 {
    margin-top: 0;
    /* margin-bottom: 12px; */
}

.required {
    color: #ef4444;
}

.custom-input {
    --background: #fff;
    --placeholder-font-weight: 600;
    --placeholder-font-size: var(--mahis-text-sm, 0.875rem);
    --placeholder-opacity: 0.7;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    --border-color: #e6e6e6;
}

.start-content {
    display: flex;
    align-items: center;
}

.left-text {
    font-size: var(--mahis-text-md, 1rem);
    padding-left: 10px;
    color: #b4b0b0;
    width: 95px;
}

.end-content-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
}

.end-content {
    border-left: 1px solid #e6e6e6;
    padding-left: 10px;
    display: flex;
    align-items: center;
}

.quick-action-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background: #2d7a2e;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.quick-action-btn:hover {
    background: #246a24;
}

.now-btn {
    --color: #2d7a2e;
    --padding-start: 8px;
    --padding-end: 8px;
    font-size: var(--mahis-text-xs, 0.75rem);
    font-weight: 600;
    text-transform: none;
    height: 25px;
}

.error-note {
    text-align: center;
    display: block;
    margin-top: 4px;
    color: #ef4444;
}

/* Neonatal Style Card */
.neonatal-style {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
}

.has-padding {
    padding: 20px !important;
}

.neonatal-style h6 {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 500;
    color: #1f2937;
    margin-bottom: 12px;
}
</style>

<style>
/* IonPopover styles - must be unscoped to apply to the popover overlay */
ion-popover.time-picker-popover {
    --width: 300px;
    --background: #ffffff;
    --border-radius: 12px;
    --box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.2);
}

ion-popover.time-picker-popover .popover-content {
    padding: 16px;
}

ion-popover.time-picker-popover .popover-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

ion-popover.time-picker-popover .popover-header span {
    font-weight: 600;
    color: #374151;
}

ion-popover.time-picker-popover .picker-main {
    position: relative;
    height: 220px;
    background: #f9fafb;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    border: 1px solid #f3f4f6;
}

ion-popover.time-picker-popover .picker-columns {
    display: flex;
    height: 100%;
    position: relative;
    z-index: 2;
}

ion-popover.time-picker-popover .column {
    flex: 1;
    height: 100%;
}

ion-popover.time-picker-popover .scroll-container {
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
    scroll-snap-type: y mandatory;
}

ion-popover.time-picker-popover .scroll-container::-webkit-scrollbar {
    display: none;
}

ion-popover.time-picker-popover .spacer {
    height: 88px;
}

ion-popover.time-picker-popover .picker-item {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--mahis-text-lg, 1.125rem);
    color: #9ca3af;
    scroll-snap-align: center;
    cursor: pointer;
    transition: all 0.2s;
}

ion-popover.time-picker-popover .picker-item.selected {
    color: #2d7a2e;
    font-size: var(--mahis-text-xl, 1.25rem);
    font-weight: 700;
}

ion-popover.time-picker-popover .separator {
    display: flex;
    align-items: center;
    font-size: var(--mahis-text-lg, 1.125rem);
    font-weight: bold;
    color: #d1d5db;
}

ion-popover.time-picker-popover .selection-box {
    position: absolute;
    top: 50%;
    left: 8px;
    right: 8px;
    height: 44px;
    margin-top: -22px;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    background: rgba(45, 122, 46, 0.04);
    pointer-events: none;
    z-index: 1;
}

ion-popover.time-picker-popover .meridian {
    flex: 0.8;
}

ion-popover.time-picker-popover .done-button {
    --background: #2d7a2e;
    --border-radius: 8px;
    font-weight: 600;
    margin: 0;
}
</style>
