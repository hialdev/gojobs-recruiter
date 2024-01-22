<template>
    <NuxtLink :to="to ?? '/dashboard'">
        <NuxtImg src="/image/placehold-logo-white.svg" width="100" height="50" />
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    to: String,
})
</script>