<template>
    <div>
        <NuxtImg
            :src="imgBlended"
            alt="Logo Gojobs"
            class="h-[25px] cursor-pointer"
            @click="goToHome"
        />
    </div>
</template>

<script>
export default {
    props: {
        isBlended: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        imgBlended() {
            return this.isBlended
            ? "/image/gojobs-logo-text-white.svg"
            : "/image/gojobs-logo.svg";
        },
    },
    methods: {
        goToHome() {
            this.$router.push('/');
        },
    },
};
</script>
  