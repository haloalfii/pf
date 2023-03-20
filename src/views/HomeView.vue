<template>
    <div class="col-xxl-12 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
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
                <h1 class="display-5 fw-bold lh-1 mb-3">
                    Hello There!.<br />
                    I'm <span class="text-primary">Alfian Luthfi</span>
                </h1>
                <p class="lead mb-0">
                    Indonesian-based
                    <vue-typed-js
                        :loop="true"
                        :strings="['Fullstack Engineer', 'Web Enthusiast']"
                    >
                        <span class="typing fw-bold text-highlight"></span>
                    </vue-typed-js>
                </p>
                <SocialNavigation />
                <div
                    class="d-grid gap-2 mt-3 d-md-flex justify-content-md-start"
                >
                    <button
                        type="button"
                        class="btn btn-primary btn-lg px-4 me-md-2"
                    >
                        Get in touch
                        <i class="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialNavigation from "../components/hero/SocialNavigation.vue";

export default {
    components: {
        SocialNavigation,
    },
};
</script>
