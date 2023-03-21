<template>
    <div id="app" class="position-relative">
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
            <RouterView />
        </div>
    </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
    components: {
        Navbar,
    },

    data() {
        return {
            theme: "light",
        };
    },

    methods: {
        themeToggle() {
            var element = document.getElementsByTagName("html")[0];
            if (element.getAttribute("data-bs-theme") == "dark") {
                element.setAttribute("data-bs-theme", "light");
                this.theme = "light";
            } else {
                element.setAttribute("data-bs-theme", "dark");
                this.theme = "dark";
            }
        },
    },
};
</script>
