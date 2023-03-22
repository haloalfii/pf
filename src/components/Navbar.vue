<template>
    <header>
        <div
            class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
        >
            <div class="d-flex align-items-center">
                <img src="/images/logo.png" width="48" height="48" alt="" />
                <RouterLink
                    to="/"
                    class="d-flex text-dark text-decoration-none"
                >
                    <span class="fs-1 text-dark mt-3">Alfi</span>
                </RouterLink>
            </div>

            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <RouterLink
                    to="/"
                    :class="{
                        'text-primary': this.$route.fullPath == '/',
                    }"
                    class="mx-2 py-2 text-dark text-decoration-none cursor-pointer"
                    >Home</RouterLink
                >
                <RouterLink
                    to="/about"
                    :class="{
                        'text-primary': this.$route.fullPath == '/about',
                    }"
                    class="mx-2 py-2 text-dark text-decoration-none cursor-pointer"
                    >About</RouterLink
                >
                <RouterLink
                    to="/contact"
                    :class="{
                        'text-primary': this.$route.fullPath == '/contact',
                    }"
                    class="mx-2 py-2 text-dark text-decoration-none cursor-pointer"
                    >Contact</RouterLink
                >
            </nav>
        </div>
    </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    components: { RouterLink },
};
</script>

<style lang="scss" scoped></style>
