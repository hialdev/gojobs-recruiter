<template>
    <div>
        <div class="table-scroll relative overflow-x-auto">
            <CardJobCandidateStatus :status="`reject`" />

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'job-status',
})

</script>

<style scoped>
.table-scroll::-webkit-scrollbar {
    width: 1px;
    height: 10px;
}
   
.table-scroll::-webkit-scrollbar-track {
    @apply bg-emerald-100;
}
   
.table-scroll::-webkit-scrollbar-thumb {
    @apply bg-emerald-600 rounded-2xl;
}
</style>