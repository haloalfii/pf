<template>
    <div class="py-5">
        <h1
            class="border-bottom mb-5 mt-5 text-dark"
            style="line-height: 120px"
        >
            Education
        </h1>
        <div
            v-for="(data, index) of experiences"
            :key="'index-exp-' + index"
            class="row gx-2 mb-5"
        >
            <div class="col-12 col-lg-4">
                <p class="fw-bolder mb-1 fs-5 text-dark">{{ data.where }}</p>
                <p class="text-muted small text-dark">{{ data.when }}</p>
            </div>
            <div class="col-12 col-lg-8">
                <p class="fw-bolder fs-5 text-dark">{{ data.as }}</p>
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
            experiences: [
                {
                    where: "Amikom University",
                    when: "(2018 - 2022)",
                    as: "Informatics",
                    how: "at Amikom Yogyakarta University, I entered the <a href='https://informatika.amikom.ac.id/' class='text-primary' target='_blank'>Informatics</a> Study Program. In the Informatics Study Program I learned a lot about the basics of Programming and continued up to Advance Programming. I graduated from Amikom University with 3.71 GPA",
                    link: "https://amikom.ac.id/",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
