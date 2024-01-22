<template>
    <div class="container mx-auto py-5">
        <div class="flex items-center gap-3 mb-4">
            <h1 class="text-xl font-medium">Resign</h1>
            <div class="relative ms-auto ">
                <PartialFormButton @click="showExport = !showExport" class="text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"/></svg> Export</PartialFormButton>
                <div v-if="showExport" class="absolute top-0 start-0 mt-[3em] z-10">
                    <div class="p-3 text-xs whitespace-nowrap bg-white rounded-lg shadow">
                        <div class="cursor-pointer text-emerald-600 p-2 rounded-lg hover:bg-emerald-100">Microsoft Excel (xls)</div>
                        <div class="cursor-pointer text-emerald-600 p-2 rounded-lg hover:bg-emerald-100">Microsoft Excel 2016 (xlsx)</div>
                        <div class="cursor-pointer text-emerald-600 p-2 rounded-lg hover:bg-emerald-100">CSV (.csv)</div>
                    </div>
                </div>
            </div>
            <PartialFormButton @click="navigateTo('/resign/create')" class="text-sm" :primary="false">Create</PartialFormButton>
        </div>

        <CardResignTable />
        
    </div>
</template>

<script setup>
const showExport = ref(false)
</script>