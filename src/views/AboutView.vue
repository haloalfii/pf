<template>
    <div>
        <div class="py-5 px-4 mb-5 rounded-3">
            <div class="py-5 row flex-lg-row-reverse">
                <div class="col-md-3 d-flex align-items-center">
                    <img
                        src="../assets/images/alfi.png"
                        class="d-block mx-lg-auto img-fluid"
                        alt="Alfian Luthfi"
                        width="630"
                        height="450"
                        loading="lazy"
                    />
                </div>
                <div class="col-md-9 mt-3">
                    <h1 class="display-5 fw-bold text-dark">
                        <span class="text-primary">Alfian</span> Luthfi
                    </h1>
                    <p class="col-md-8 fs-4 text-dark">
                        Hii, I'm a fullstack web developer who Passionate about
                        developing an awesome web app I've been in this industry
                        for more than 3 year. I love to create a web app that
                        make people work easier than ever.
                    </p>
                    <button
                        class="btn btn-primary text-light btn-lg"
                        type="button"
                    >
                        <i class="fa-solid fa-download"></i>
                        Download CV
                    </button>
                </div>
            </div>
        </div>

        <RecentWork />

        <div class="py-5">
            <h1
                class="border-bottom mb-5 mt-5 text-dark"
                style="line-height: 120px"
            >
                Skills
            </h1>
            <div class="row d-flex justify-content-between">
                <div
                    class="col-md-6 d-flex align-items-center justify-content-center"
                >
                    <h3 class="text-dark mx-3 text-center">
                        <i class="fa-brands fa-vuejs"></i>
                        <p class="fs-6">Vue Js</p>
                    </h3>
                    <h3 class="text-dark mx-3 text-center">
                        <i class="fa-brands fa-laravel"></i>
                        <p class="fs-6">Laravel</p>
                    </h3>
                    <h3 class="text-dark mx-3 text-center">
                        <i class="fa-brands fa-react"></i>
                        <p class="fs-6">React</p>
                    </h3>
                </div>
                <div
                    class="col-md-6 d-flex align-items-center justify-content-center"
                >
                    <h3 class="text-dark mx-3 text-center">
                        <i class="fa-brands fa-node-js"></i>
                        <p class="fs-6">Node Js</p>
                    </h3>
                    <h3 class="text-dark mx-3 text-center">
                        <i class="fa-solid fa-database"></i>
                        <p class="fs-6">Database</p>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecentWork from "../components/about/RecentWork.vue";

export default { components: { RecentWork } };
</script>

<style scoped></style>
