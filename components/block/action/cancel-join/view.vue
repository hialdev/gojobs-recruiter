
<template>
    <div class="fixed top-0 end-0 bottom-0 start-0 bg-black/10 flex items-center justify-end z-10">
        <div class="bg-white min-w-[30em] p-5 pt-3 h-screen relative overflow-hidden">
            <div class="flex items-center pb-3 border-b mb-4">
                <h3 class="font-medium">View Change Cancel Join</h3>
                <div @click="closeAction" class="ms-auto flex items-center justify-center cursor-pointer text-slate-500 hover:text-rose-700"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"/></svg></div>
            </div>
            <div class="max-h-[90vh] overflow-auto">
                <div class="grid grid-cols-12 gap-x-5">
                    <div class="col-span-12 mb-3">
                        <table class="w-full rounded-xl overflow-hidden">
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Data</td>
                                <td class="p-2 px-4 text-sm">Value</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Data</td>
                                <td class="p-2 px-4 text-sm">Value</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Data</td>
                                <td class="p-2 px-4 text-sm">Value</td>
                            </tr>
                        </table>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useJobsStore} from '@/stores/jobs'
const store = useJobsStore();
const jobsOptions = store.filteredJobs.map(job => ({key : job.id, value : job.posisi + ' - ' + job.no_jo + ' - ' + job.lokasi}));

const emit = defineEmits(['close']);
const closeAction = () => {
    emit('close');
}
</script>