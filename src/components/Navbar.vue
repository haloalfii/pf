<template>
    <header>
        <div
            class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
        >
            <a
                href="/"
                class="d-flex align-items-center text-dark text-decoration-none"
            >
                <span class="fs-1 text-dark">Alfi</span>
            </a>

            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <RouterLink
                    to="/"
                    class="mx-2 py-2 text-dark text-decoration-none cursor-pointer"
                    >Home</RouterLink
                >
                <RouterLink
                    to="/about"
                    class="mx-2 py-2 text-dark text-decoration-none cursor-pointer"
                    >About</RouterLink
                >
                <a class="mx-2 py-2 text-dark text-decoration-none" href="#"
                    >Contact</a
                >
            </nav>
        </div>
    </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>

<style lang="scss" scoped></style>
