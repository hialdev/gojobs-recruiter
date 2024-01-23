<template>
    <div class="container mx-auto p-5">
        <h1 class="text-xl font-medium mb-3">{{ role == 3 ? 'Hiring' : 'Ready to Hiring'}}</h1>
        <CardHiringTable v-if="role != 3" />
        <CardHiringApproval v-if="role == 3" />
    </div>
</template>

<script setup>
const role = ref('');
onMounted(() => {
  role.value = localStorage.getItem('role');
});
</script>
