<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <CardCandidateViewLink :to="to" :text="text" />
            <button class="ms-auto text-sm text-slate-500 hover:text-emerald-600 hover:border-emerald-600 flex items-center gap-3 p-1 px-3 text-sm border rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 17H5a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-3M8 4h8v5H8zm0 11h8v4H8z"/><circle cx="7" cy="12" r="1" fill="currentColor"/></g></svg>
                Print
            </button>
            <button class="text-sm text-slate-500 hover:text-emerald-600 hover:border-emerald-600 flex items-center gap-3 p-1 px-3 text-sm border rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                Download
            </button>
        </div>
        <div class="grid grid-cols-12 gap-x-5">
            <div class="col-span-4">
                <div class="p-5 bg-white rounded-lg">
                    <h4 class="text-lg font-medium mb-3">Note</h4>
                    <textarea name="" id="" cols="20" rows="10" placeholder="Catatan.." class="mb-2 block w-full p-4 rounded-lg border border-slate-300"></textarea>
                    <button class="p-2 px-4 text-sm font-medium ms-auto inline-block bg-emerald-600 text-white rounded-lg">Add Note</button>
                </div>
            </div>
            <div class="col-span-8">
                <div class="rounded-lg bg-white max-h-[36em] overflow-auto">
                    <NuxtImg src="/image/cv_gojobs.png" alt="Image CV" class="block w-full h-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    to : String,
    text : String,
})
</script>