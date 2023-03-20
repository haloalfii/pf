<template>
    <div id="app" class="container py-3">
        <Navbar />
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
    components: {
        Navbar,
    },
};
</script>
