<template>
    <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top"
    >
        <p class="col-md-4 mb-0 text-muted text-dark">
            &copy; 2023
            <a
                href="https://github.com/haloalfii/"
                target="_blank"
                class="text-dark text-decoration-none"
                rel="noopener noreferrer"
                >@haloalfii</a
            >
        </p>

        <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center d-none d-lg-flex mb-md-0 me-md-auto link-dark text-decoration-none"
        >
            <i
                class="fa-solid fa-heart text-danger"
                style="font-size: 24px"
            ></i>
        </a>

        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
                <RouterLink
                    to="/"
                    class="nav-link ps-0 pe-2 text-muted text-dark"
                    >Home</RouterLink
                >
            </li>
            <li class="nav-item">
                <RouterLink
                    to="/about"
                    class="nav-link ps-0 pe-2 text-muted text-dark"
                    >About</RouterLink
                >
            </li>
            <li class="nav-item">
                <RouterLink
                    to="/contact"
                    class="nav-link ps-0 pe-2 text-muted text-dark"
                    >Contact</RouterLink
                >
            </li>
        </ul>
    </footer>
</template>

<script>
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>

<style lang="scss" scoped></style>
