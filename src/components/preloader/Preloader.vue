<template>
    <div class="preloader">
        <p class="fs-1 text-dark">
            <vue-typed-js
                :typeSpeed="50"
                :startDelay="100"
                :backDelay="50"
                :cursorChar="''"
                :loop="true"
                :strings="['Hello!', 'Nǐ hǎo', 'Kon`nichiwa']"
            >
                <span class="typing text-highlight"></span>
            </vue-typed-js>
        </p>
    </div>
</template>

<script>
export default {};
</script>
