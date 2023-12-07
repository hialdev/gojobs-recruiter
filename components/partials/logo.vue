<template>
    <div>
        <NuxtLink :to="path">
            <NuxtImg
                :src="imgBlended"
                alt="Logo Gojobs"
                :class="['h-[25px] cursor-pointer', customClass]"
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
        customClass: {
            type: String,
            default: ''
        },
        path:{
            type: String,
            default: '/'
        }
    },
    computed: {
        imgBlended() {
            return this.isBlended
            ? "/image/placehold-logo-white.svg"
            : "/image/placehold-logo-black.svg";
        },
    },
};
</script>
  