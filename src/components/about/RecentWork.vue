<template>
    <div class="py-5">
        <h1
            class="border-bottom mb-5 mt-5 text-dark"
            style="line-height: 120px"
        >
            Recent Work
        </h1>
        <div
            v-for="(data, index) of recentWorks"
            :key="'index-exp-' + index"
            class="row gx-2 mb-5"
        >
            <div class="col-12 col-lg-4">
                <p class="fw-bolder mb-1 fs-5 text-dark">{{ data.at }}</p>
            </div>
            <div class="col-12 col-lg-8">
                <p class="fw-bolder fs-5 text-dark">{{ data.what }}</p>
                <img :src="data.image" class="img-fluid rounded mb-2" alt="" />
                <p class="text-muted text-dark fw-light fs-5">
                    <span v-html="data.how"></span>
                </p>
                <a
                    class="link-body fs-5 text-primary"
                    target="_blank"
                    :href="data.link"
                    >{{ data.link }}</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recentWorks: [
                {
                    what: "Worxspace (Nuxt Js)",
                    at: "PT Gamatechno Indonesia",
                    how: "Worxspace is next level company instanst messaging by PT Gamatechno Indonesia, this apps is a solution to many problems in office. This apps include Chat Engine, Task management, etc",
                    image: "/images/wrx.png",
                    link: "https://worxspace.id/",
                },
                {
                    what: "SiDig (Code Igniter)",
                    at: "PT Gamatechno Indonesia",
                    how: "Sidig is an all in one distribution platform for medical device companies or products to optimize supply chain management and product after sales services so as to be able to support business operations and regulatory implementation.",
                    image: "/images/sidig.png",
                    link: "https://sidig.id/",
                },
                {
                    what: "Dunia Coding (Nuxt Js + Laravel)",
                    at: "@duniacoding",
                    how: "Dunia Coding Website apps is a web app that provides many conveniences to Dunia Coding itself. This web app contains Event Management, Partner Management, and Online Course",
                    image: "/images/dc.png",
                    link: "https://duniacoding.id/",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
