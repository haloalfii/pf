import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ErrorView from "../views/ErrorView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    base: import.meta.env.BASE_URL,
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
            path: "/contact",
            name: "contact",
            component: ContactView,
        },
        {
            path: "/*",
            name: "error",
            component: ErrorView,
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router;
