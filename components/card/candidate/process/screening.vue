
<template>
    <div class="p-5 bg-white rounded-lg">
        <div class="flex items-center justify-between mb-3 pb-4 border-b">
            <h4 class="text-lg font-medium">Detail</h4>
        </div>
        <div class="grid grid-cols-12">
            <div class="col-span-6">
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Current Status</span>
                    <span class="p-1 px-3 rounded-lg bg-emerald-600 text-white text-sm uppercase">Pass</span>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Stage</span>
                    <span class="font-medium text-sm whitespace-nowrap">Screening</span>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                    <span class="font-medium text-sm whitespace-nowrap">28 Nov 2023</span>
                </div>
            </div>
            <div class="col-span-6">
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                    <div class="flex items-center gap-3">
                        <NuxtImg src="https://placeholder.co/70" alt="Image Asignee" class="block rounded-3xl w-[40px] h-[40px]" />
                        <span class="font-medium text-sm">Name Surname</span>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button @click="rejectHandle" class="bg-rose-600 text-white p-2 px-4 text-sm rounded-lg">Reject</button>
                    <button @click="lolosHandle" class="bg-emerald-600 text-white p-2 px-4 text-sm rounded-lg">Lolos</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['reject', 'lolos']);

const rejectHandle = () => {
    emit('reject');
}
const lolosHandle = () => {
    emit('lolos');
}

</script>