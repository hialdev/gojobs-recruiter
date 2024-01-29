
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
                                <td class="p-2 px-4 text-sm">Perner</td>
                                <td class="p-2 px-4 text-sm">275723</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Nama</td>
                                <td class="p-2 px-4 text-sm">FAUZAN RIVALDY</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">No Job Order</td>
                                <td class="p-2 px-4 text-sm">029399/ISH/01010107/2023</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Personal Area</td>
                                <td class="p-2 px-4 text-sm">HAIER INDONESIA ISH</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Area</td>
                                <td class="p-2 px-4 text-sm">SEMARANG</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Skill Layanan</td>
                                <td class="p-2 px-4 text-sm">BPO</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Payroll Area</td>
                                <td class="p-2 px-4 text-sm">HAIER - SMG</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Jabatan</td>
                                <td class="p-2 px-4 text-sm">PROMOTERS</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Level</td>
                                <td class="p-2 px-4 text-sm"></td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Cancel Date</td>
                                <td class="p-2 px-4 text-sm">20/11/2023   20:05</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Status</td>
                                <td class="p-2 px-4 text-sm"><span class="bg-blue-600 text-white rounded-lg p-1 px-2">ON PROCESS</span></td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Remarks</td>
                                <td class="p-2 px-4 text-sm">Waiting for Cancel Join Execution process</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">User</td>
                                <td class="p-2 px-4 text-sm">Dear PM, Mohon dibantu cancel join perner 230035 an FAHRUDDIN karena ybs mengundurkan diri. Terimakasih</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Created By</td>
                                <td class="p-2 px-4 text-sm">Ayu Setya Wardhani</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Create Time</td>
                                <td class="p-2 px-4 text-sm">2023-12-15 11:29:45</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-2 px-4 text-sm">Updated Time</td>
                                <td class="p-2 px-4 text-sm">2023-12-15 11:29:45</td>
                            </tr>
                            <tr class="bg-slate-100">
                                <td class="p-2 px-4 text-sm">Document</td>
                                <td class="p-2 px-4 text-sm"><button class="flex items-center gap-2 rounded-lg bg-white border border-slate-500 p-2 px-4 text-slate-700">Download</button></td>
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