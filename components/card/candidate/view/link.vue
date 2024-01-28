<template>        
    <div class="text-sm">Lamaran untuk <NuxtLink :to="to" target="_blank" class="text-emerald-600">{{text}}</NuxtLink></div>
</template>

<script setup>
const props = defineProps({
    text: String,
    to: String,
})
</script>