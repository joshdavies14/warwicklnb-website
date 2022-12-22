import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CalendarView from "../views/CalendarView.vue";
import SocialsView from "../views/whatson/SocialsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/calendar",
            name: "calendar",
            component: CalendarView,
        },
        {
            path: "/socials",
            name: "socials",
            component: SocialsView,
        }
    ],
});

export default router;
