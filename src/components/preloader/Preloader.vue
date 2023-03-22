<template>
    <div class="preloader">
        <p class="fs-1 text-dark">
            <vue-typed-js
                :typeSpeed="30"
                :startDelay="10"
                :backDelay="40"
                :cursorChar="''"
                :loop="true"
                :strings="[
                    'Hello!',
                    '¡Hola!',
                    'Bonjour!',
                    'Nǐ hǎo!',
                    'Kon nichiwa!',
                ]"
            >
                <span class="typing"></span>
            </vue-typed-js>
        </p>
    </div>
</template>

<script>
export default {};
</script>
