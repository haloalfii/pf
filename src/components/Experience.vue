<template>
    <div class="py-5">
        <h1 class="border-bottom mb-5 mt-5" style="line-height: 120px">
            Experience
        </h1>
        <div
            v-for="(data, index) of experiences"
            :key="'index-exp-' + index"
            class="row gx-2 mb-5"
        >
            <div class="col-12 col-lg-4">
                <p class="fw-bolder mb-1 fs-5">{{ data.where }}</p>
                <p class="text-muted small">{{ data.when }}</p>
            </div>
            <div class="col-12 col-lg-8">
                <p class="fw-bolder fs-5">{{ data.as }}</p>
                <p class="text-muted fw-light fs-5">
                    <span v-html="data.how"></span>
                </p>
                <a class="link-body fs-5" target="_blank" :href="data.link">{{
                    data.link
                }}</a>
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
                    where: "PT Gamatechno Indonesia",
                    when: "(2021 - present)",
                    as: "Fullstack Engineer",
                    how: "<span>Before graduating from Amikom Yogyakarta University, I worked full-time as a Fullstack Engineer at PT Gamatechno Indonesia. I entered as a Fullstack Engineer in the Product Division. There I worked on several projects, such as <a target='_blank' href='https://worxspace.id/'>Worxspace</a> (Office collaboration application) and also <a target='_blank' href='https://sidig.id/'>Sidig</a> (Digital Guarantee Application).</span>",
                    link: "https://www.gamatechno.com/",
                },
                {
                    where: "Dunia Coding",
                    when: "(2020 - present)",
                    as: "Fullstack Engineer and Web Development Mentor",
                    how: "Dunia Coding is a platform for learning programming especially for beginners. I started entering the Dunia Coding in November 2020, to work on a Web Apps-based information system that the <a target='_blank' href='https://duniacoding.id/'>Dunia Coding</a> had not previously had. In the Dunia Coding, I also often give material for Webinars and Workshops related to Web Development",
                    link: "https://duniacoding.id/",
                },
                {
                    where: "PT Zerolim Tekno Lestari ",
                    when: "(2020)",
                    as: "Backend Engineer Intern",
                    how: "I entered as a Backend Engineer Intern at Zerolim when Zerolim opened an Intern opportunity at Grow With Zerolim #4. At Zerolim I was assigned as a Backend, with <a target='_blank' href='https://codeigniter.com/'>Code Igniter</a> as the Framework for the Backend there.",
                    link: "https://zerolim.id/",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
