<template>
    <BlockHeaderManager v-if="role == 0" />
    <BlockHeaderRecruiter v-if="role == 1" />
    <BlockHeaderOperation v-if="role == 2" />
    <BlockHeaderPm v-if="role == 3" />
    <BlockHeaderSourcing v-if="role == 4" />
</template>

<script setup>
const role = ref('');

onMounted(() => {
  role.value = localStorage.getItem('role');
});
</script>