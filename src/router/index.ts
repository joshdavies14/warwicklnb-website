import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/blog",
            name: "blog",
            component: () => import("../views/BlogView.vue"),
        },
        {
            path: "/blog/:slug",
            name: "blog-post",
            component: () => import("../views/BlogPostView.vue"),
        },
        {
            path: "/calendar",
            name: "calendar",
            component: () => import("../views/CalendarView.vue"),
        },
        {
            path: "/socials",
            name: "socials",
            component: () => import("../views/whatson/SocialsView.vue"),
        },
        {
            path: "/classes",
            name: "classes",
            component: () => import("../views/dance/ClassesView.vue"),
        },
        {
            path: "/competitions",
            name: "competitions",
            component: () => import("../views/dance/CompetitionsView.vue"),
        },
    ],
});

export default router;
