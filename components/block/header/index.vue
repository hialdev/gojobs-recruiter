<template>
    <BlockHeaderOperation v-if="role == 1" />
    <BlockHeaderRecruiter v-if="role == 2" />
</template>

<script setup>
const role = ref(2);
</script>