<template>
    <div class="cv-header">
        <div class="cv-header-nav">
            <button
                :disabled="!headerProps.previousYear"
                class="previousYear"
                aria-label="Previous Year"
                @click.prevent="onInput(headerProps.previousYear)"
            >
                <font-awesome-icon
                    icon="fa-solid fa-chevron-left"
                /><font-awesome-icon icon="fa-solid fa-chevron-left" />
            </button>
            <button
                :disabled="!headerProps.previousPeriod"
                class="previousPeriod"
                aria-label="Previous Period"
                @click.prevent="onInput(headerProps.previousPeriod)"
            >
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </button>
            <button
                class="currentPeriod"
                aria-label="Current Period"
                @click.prevent="onInput(headerProps.currentPeriod)"
            >
                Today
            </button>
            <button
                :disabled="!headerProps.nextPeriod"
                class="nextPeriod"
                aria-label="Next Period"
                @click.prevent="onInput(headerProps.nextPeriod)"
            >
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
            <button
                :disabled="!headerProps.nextYear"
                class="nextYear"
                aria-label="Next Year"
                @click.prevent="onInput(headerProps.nextYear)"
            >
                <font-awesome-icon
                    icon="fa-solid fa-chevron-right"
                /><font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </div>
        <div class="periodLabel">
            <slot name="label">{{ headerProps.periodLabel }}</slot>
        </div>
    </div>
</template>

<script lang="ts">
import type { IHeaderProps } from "../utils/iHeaderProps";
import { defineComponent } from "vue";

export default defineComponent({
    name: "JoshCalendarHeader",
    props: {
        headerProps: {
            type: Object as () => IHeaderProps,
            required: true,
        },
    },
    data() {
        return {
            previousMonthLabel:
                '<font-awesome-icon icon="fa-solid fa-chevron-left" />',
        };
    },
    methods: {
        onInput(d: Date | null): void {
            this.$emit("input", d);
        },
    },
});
</script>

<script setup lang="ts">
const emit = defineEmits<{
    (e: "input", day: Date | null): void;
}>();
</script>
