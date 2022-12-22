<template>
<div class="head-block">
        <section
            class="head-inner align-middle h-100 d-flex align-items-center justify-content-center py-4"
        >
            <h1 class="display-5 fw-bold">what's on</h1>
        </section>
    </div>

    <div
        v-if="!isLoading"
        class="container align-items-center justify-content-center pt-4"
        id="calendar"
    >
        <calendar
            :show-date="showDate"
            :items="events"
            :enable-date-selection="true"
            :display-week-numbers="false"
            :starting-day-of-week="1"
            :show-times="true"
            :time-format-options="themeOptions.timeOptions"
            :item-top="themeOptions.top"
            :item-content-height="themeOptions.height"
            :item-border-height="themeOptions.border"
            class="calendar-lnb"
        >
            <template #header="{ headerProps }">
                <cal-header :header-props="headerProps" @input="setShowDate">
                </cal-header>
            </template>
        </calendar>
    </div>
    <div v-else class="text-center pt-4">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script lang="ts">
import { getEventsForCalendar } from "../utils/googleCalendar";
import { CalendarView } from "vue-simple-calendar";
import JoshCalendarHeader from "../components/JoshCalendarHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "CalendarView",
    components: {
        calendar: CalendarView,
        "cal-header": JoshCalendarHeader,
    },
    data() {
        return {
            events: [],
            isLoading: true,
            showDate: new Date(),
            themeOptions: {
                top: "2.6em",
                height: "2.1em",
                border: "0px",
                timeOptions: {
                    hour: "numeric",
                    minute: "numeric",
                },
            },
        };
    },
    watch: {
        events() {
            if (this.events !== []) {
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.isLoading = true;
        this.getEvents().then(() => {
            this.isLoading = false;
        });
    },
    methods: {
        async getEvents() {
            let events = <any>[];
            try {
                events = await getEventsForCalendar();
            } catch (err) {
                console.error("Error getting events", err);
            }
            this.events = events;
        },
        setShowDate(d: any) {
            this.showDate = d;
        },
    },
});
</script>

<style scoped>
#calendar {
    height: 85vh;
    margin-left: auto;
    margin-right: auto;
}
</style>
