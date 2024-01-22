
<template>
    <div class="fixed top-0 end-0 bottom-0 start-0 bg-black/10 flex items-center justify-center z-10">
        <div class="bg-white p-8 rounded-xl relative overflow-hidden">
            <div @click="closeMove" class="absolute top-0 end-0 flex items-center justify-center cursor-pointer w-[40px] h-[40px] p-1 rounded-bl-3xl bg-slate-100 text-slate-700 hover:bg-rose-100 hover:text-rose-700"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"/></svg></div>
            <div class="grid grid-cols-12 gap-x-5 w-[60em]">
                <div class="col-span-12">
                    <h3 class="font-medium">Memindahkan Kandidat <span class="bg-emerald-600 text-slate-50 ms-2 inline-flex items-center justify-center p-1 rounded-3xl w-[25px] h-[25px] text-xs">5</span></h3>
                </div>
                <div class="col-span-6">
                    <div class="text-xs mt-3">Dari</div>
                    <div class="max-h-[25em] overflow-auto">
                        <div class="border-2 border-slate-200 mt-2 rounded-lg p-4 flex items-start gap-4">
                            <div class="flex items-center gap-3 text-sm rounded-lg">
                                <NuxtImg src="https://placeholder.co/150" width="50" height="50" alt="Image Candidate" class="block rounded-3xl" />
                                <div class="text-sm">
                                    <div class="font-medium">Name Suname</div>
                                    <div class="text-xs inline-block p-1 rounded-lg px-2 bg-slate-100 text-slate-700">Interview HR</div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="border-2 rounded-lg px-4 p-2">
                                    <div class="font-medium">Promotor Elektronik</div>
                                    <div class="text-xs text-slate-500">029886/ISH/01010107/2023</div>
                                </div>
                            </div>
                        </div>
                        <div class="border-2 border-slate-200 mt-2 rounded-lg p-4 flex items-start gap-4">
                            <div class="flex items-center gap-3 text-sm rounded-lg">
                                <NuxtImg src="https://placeholder.co/150" width="50" height="50" alt="Image Candidate" class="block rounded-3xl" />
                                <div class="text-sm">
                                    <div class="font-medium">Name Suname</div>
                                    <div class="text-xs inline-block p-1 rounded-lg px-2 bg-slate-100 text-slate-700">Interview HR</div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="border-2 rounded-lg px-4 p-2">
                                    <div class="font-medium">Promotor Elektronik</div>
                                    <div class="text-xs text-slate-500">029886/ISH/01010107/2023</div>
                                </div>
                            </div>
                        </div>
                        <div class="border-2 border-slate-200 mt-2 rounded-lg p-4 flex items-start gap-4">
                            <div class="flex items-center gap-3 text-sm rounded-lg">
                                <NuxtImg src="https://placeholder.co/150" width="50" height="50" alt="Image Candidate" class="block rounded-3xl" />
                                <div class="text-sm">
                                    <div class="font-medium">Name Suname</div>
                                    <div class="text-xs inline-block p-1 rounded-lg px-2 bg-slate-100 text-slate-700">Interview HR</div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="border-2 rounded-lg px-4 p-2">
                                    <div class="font-medium">Promotor Elektronik</div>
                                    <div class="text-xs text-slate-500">029886/ISH/01010107/2023</div>
                                </div>
                            </div>
                        </div>
                        <div class="border-2 border-slate-200 mt-2 rounded-lg p-4 flex items-start gap-4">
                            <div class="flex items-center gap-3 text-sm rounded-lg">
                                <NuxtImg src="https://placeholder.co/150" width="50" height="50" alt="Image Candidate" class="block rounded-3xl" />
                                <div class="text-sm">
                                    <div class="font-medium">Name Suname</div>
                                    <div class="text-xs inline-block p-1 rounded-lg px-2 bg-slate-100 text-slate-700">Interview HR</div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="border-2 rounded-lg px-4 p-2">
                                    <div class="font-medium">Promotor Elektronik</div>
                                    <div class="text-xs text-slate-500">029886/ISH/01010107/2023</div>
                                </div>
                            </div>
                        </div>
                        <div class="border-2 border-slate-200 mt-2 rounded-lg p-4 flex items-start gap-4">
                            <div class="flex items-center gap-3 text-sm rounded-lg">
                                <NuxtImg src="https://placeholder.co/150" width="50" height="50" alt="Image Candidate" class="block rounded-3xl" />
                                <div class="text-sm">
                                    <div class="font-medium">Name Suname</div>
                                    <div class="text-xs inline-block p-1 rounded-lg px-2 bg-slate-100 text-slate-700">Interview HR</div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="border-2 rounded-lg px-4 p-2">
                                    <div class="font-medium">Promotor Elektronik</div>
                                    <div class="text-xs text-slate-500">029886/ISH/01010107/2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-6 mb-3">
                    <div class="text-xs mb-2">Ke</div>
                    <PartialFormSelect :label="`Job`" :options="jobsOptions" :customClass="`shadow-none border-slate-200 border-2`"/>
                </div>
                <div class="col-span-12">
                    <div class="flex items-center gap-2">
                        <button class="p-2 px-4 rounded-lg bg-emerald-600 text-white mt-3 text-sm w-full">Pindahkan</button>
                        <button @click="closeMove" class="p-2 px-4 rounded-lg text-slate-700 bg-slate-100 mt-3 text-sm">Batal</button>
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
const closeMove = () => {
    emit('close');
}
</script>