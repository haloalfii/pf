<template>
    <div>
        <div class="py-5 px-4 mb-5 mt-5 rounded-3">
            <div class="py-5 row">
                <div class="col-md-6 mt-3">
                    <h1 class="display-5 fw-bold text-dark">
                        <span class="text-primary">Error</span> Pages 🚨
                    </h1>
                    <p class="col-md-8 fs-4 text-dark">
                        Sorry, we could not find the page you are looking for.
                        Do you want to return to the home page?
                    </p>
                    <RouterLink
                        to="/"
                        class="text-primary fs-4 text-decoration-none"
                        >Bring me back</RouterLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>

<style lang="scss" scoped></style>
