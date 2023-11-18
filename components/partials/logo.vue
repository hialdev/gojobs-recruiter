<template>
    <div>
        <NuxtLink to="/">
            <NuxtImg
                :src="imgBlended"
                alt="Logo Gojobs"
                class="h-[25px] cursor-pointer"
            />
        </NuxtLink>
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
};
</script>
  