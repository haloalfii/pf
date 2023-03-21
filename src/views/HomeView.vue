<template>
    <div>
        <div class="col-xxl-12 px-4 py-5">
            <div
                class="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5"
            >
                <div class="col-12 col-sm-8 col-lg-6">
                    <img
                        src="../assets/images/alfi.png"
                        class="d-block mx-lg-auto img-fluid"
                        alt="Alfian Luthfi"
                        width="630"
                        height="450"
                        loading="lazy"
                    />
                </div>
                <div class="col-lg-6">
                    <!-- <p class="lead text-muted">Hello There!</p> -->
                    <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
                        Hello There!👋<br />
                        I'm <span class="text-primary">Alfian Luthfi</span>
                    </h1>
                    <p class="lead mb-0 text-dark">
                        Indonesian-based
                        <vue-typed-js
                            :loop="true"
                            :strings="[
                                'Fullstack Engineer',
                                'Programming Mentor',
                                'Web Enthusiast',
                            ]"
                        >
                            <span
                                class="typing fw-semibold text-highlight"
                            ></span>
                        </vue-typed-js>
                    </p>
                    <SocialNavigation />
                    <div
                        class="d-grid gap-2 mt-3 d-md-flex justify-content-md-start"
                    >
                        <RouterLink
                            to="/about"
                            type="button"
                            class="btn btn-primary btn-lg px-4 me-md-2 text-light"
                        >
                            Know me more
                            <i class="fa-solid fa-arrow-right ms-2"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <Experience />
            <Education />
        </div>
    </div>
</template>

<script>
import SocialNavigation from "../components/hero/SocialNavigation.vue";
import Experience from "../components/Experience.vue";
import Education from "../components/Education.vue";
import { RouterLink } from "vue-router";

export default {
    components: {
        SocialNavigation,
        Experience,
        Education,
        RouterLink,
    },
};
</script>
