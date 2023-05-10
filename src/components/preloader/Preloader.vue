<template>
    <div class="preloader">
        <div v-for="(data, index) of list" :key="'index-' + index">
            <p v-if="index == showing" class="fs-1 text-dark">
                {{ data }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ["Hello!", "¡Hola!", "Bonjour!", "Nǐ hǎo!", "Kon nichiwa!"],
            show: 0,
        };
    },

    computed: {
        showing() {
            setTimeout(() => {
                this.show++;
            }, 400);

            return this.show;
        },
    },
};
</script>
