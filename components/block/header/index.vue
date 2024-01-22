<template>
    <BlockHeaderManager v-if="role == 0" />
    <BlockHeaderRecruiter v-if="role == 1" />
    <BlockHeaderOperation v-if="role == 2" />
</template>

<script setup>
const role = ref('');

onMounted(() => {
  role.value = localStorage.getItem('role');
});
</script>