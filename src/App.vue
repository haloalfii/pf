<template>
    <div id="app" class="position-relative">
        <Transition name="fade">
            <Preloader v-if="loading" />
        </Transition>

        <template v-if="!loading">
            <div
                v-if="theme == 'light'"
                @click="themeToggle"
                title="Change to Dark Mode"
                class="mode-toggle d-flex align-items-center justify-content-center cursor-pointer"
            >
                <p class="mb-0" style="font-size: 28px">☀️</p>
            </div>

            <div
                v-else
                @click="themeToggle"
                title="Change to Light Mode"
                class="mode-toggle d-flex align-items-center justify-content-center cursor-pointer"
            >
                <p class="mb-0" style="font-size: 28px">🌙</p>
            </div>

            <div class="container py-3">
                <Navbar />
                <vue-page-transition name="fade-in-right">
                    <router-view />
                </vue-page-transition>
                <Footer />
            </div>
        </template>
    </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Preloader from "./components/preloader/Preloader.vue";

export default {
    components: {
        Navbar,
        Footer,
        Preloader,
    },

    data() {
        return {
            theme: "dark",
            loading: 1,
        };
    },

    mounted() {
        setTimeout(() => {
            this.loading = 0;
        }, 2000);

        if (localStorage.getItem("theme") == null) {
            localStorage.setItem("theme", "dark");
        } else {
            var element = document.getElementsByTagName("html")[0];
            element.setAttribute(
                "data-bs-theme",
                localStorage.getItem("theme")
            );
            this.theme = localStorage.getItem("theme");
        }
    },

    methods: {
        themeToggle() {
            var element = document.getElementsByTagName("html")[0];
            if (element.getAttribute("data-bs-theme") == "dark") {
                element.setAttribute("data-bs-theme", "light");
                this.theme = "light";
                localStorage.setItem("theme", "light");
            } else {
                element.setAttribute("data-bs-theme", "dark");
                this.theme = "dark";
                localStorage.setItem("theme", "dark");
            }
        },
    },
};
</script>
