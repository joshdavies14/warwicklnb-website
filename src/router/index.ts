import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CalendarView from "../views/CalendarView.vue";
import BlogView from "../views/BlogView.vue";
import BlogPostView from "../views/BlogPostView.vue";
import SocialsView from "../views/whatson/SocialsView.vue";

import ClassesView from "../views/dance/ClassesView.vue";
import CompetitionsView from "../views/dance/CompetitionsView.vue";

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
            path: "/blog",
            name: "blog",
            component: BlogView,
        },
        {
            path: "/blog/:slug",
            name: "blog-post",
            component: BlogPostView,
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
        },
        {
            path: "/classes",
            name: "classes",
            component: ClassesView,
        },
        {
            path: "/competitions",
            name: "competitions",
            component: CompetitionsView,
        },
    ],
});

export default router;
