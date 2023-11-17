<template>
    <div>
        <AppHeader :isBlended="isBlended" :isFixed="isFixed" />
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isBlended: false,
            isFixed: false,
        };
    },
};
</script>