
<template>
    <div class="fixed top-0 end-0 bottom-0 start-0 bg-black/10 flex items-center justify-center z-10">
        <div class="bg-white p-8 rounded-xl relative overflow-hidden">
            <div @click="closeAction" class="absolute top-0 end-0 flex items-center justify-center cursor-pointer w-[40px] h-[40px] p-1 rounded-bl-3xl bg-slate-100 text-slate-700 hover:bg-rose-100 hover:text-rose-700"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"/></svg></div>
            <div class="grid grid-cols-12 gap-x-5 w-[60em]">
                <div class="col-span-12">
                    <h3 class="font-medium">Pindahkan Kandidat <span class="bg-emerald-600 text-slate-50 ms-2 inline-flex items-center justify-center p-1 rounded-3xl w-[25px] h-[25px] text-xs">{{ selectedId?.length }}</span></h3>
                </div>
                <div class="col-span-6">
                    <div class="text-xs mt-3">Dari</div>
                    <div class="max-h-[25em] overflow-auto">
                        <div v-for="candidate in candidates" class="border-2 border-slate-200 mt-2 rounded-lg p-4 flex items-start gap-4">
                            <div class="flex items-center gap-3 text-sm rounded-lg">
                                <NuxtImg src="https://placeholder.co/150" width="50" height="50" alt="Image Candidate" class="block rounded-3xl" />
                                <div class="text-sm">
                                    <div class="font-medium">{{candidate.name}}</div>
                                    <div v-if="candidate.status == 1" class="inline-block mt-1 text-xs bg-purple-500 text-purple-50 rounded-lg p-1 px-2">Screening</div>
                                    <div v-else-if="candidate.status == 2" class="inline-block mt-1 text-xs bg-orange-500 text-orange-50 rounded-lg p-1 px-2">Psikotest</div>
                                    <div v-else-if="candidate.status == 3" class="inline-block mt-1 text-xs bg-blue-500 text-blue-50 rounded-lg p-1 px-2">Interview HR</div>
                                    <div v-else-if="candidate.status == 4" class="inline-block mt-1 text-xs bg-green-500 text-green-50 rounded-lg p-1 px-2">Interview User</div>
                                    <div v-else-if="candidate.status == 5" class="inline-block mt-1 text-xs bg-sky-500 text-sky-50 rounded-lg p-1 px-2">Peralihan</div>
                                    <div v-else-if="candidate.status == 6" class="inline-block mt-1 text-xs bg-rose-500 text-rose-50 rounded-lg p-1 px-2">Reject</div>
                                    <div v-else-if="candidate.status == 7" class="inline-block mt-1 text-xs bg-emerald-500 text-emerald-50 rounded-lg p-1 px-2">Hiring</div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="border-2 rounded-lg px-4 p-2">
                                    <div class="font-medium">{{candidate.jabatan}}</div>
                                    <div class="text-xs text-slate-500">{{candidate.layanan}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-6 mb-3">
                    <div class="text-xs mb-2">Ke</div>
                    <div class="relative">
                        <PartialFormSearch @input="applyFilters" v-model="search" :label="`Cari Job (Posisi, PT, No JO)`" class="border rounded-lg" />
                        <div v-if="search.length > 1 && store.filteredJobs.length > 0" class="absolute top-0 start-0 end-0 my-[3em]">
                            <div class="bg-white shadow rounded-xl p-3 max-h-[20em] overflow-auto">
                                <div v-for="job in store?.filteredJobs" @click="selectJob(job)" :key="job?.id" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-emerald-100" :class="{'bg-slate-100 hover:bg-slate-100 cursor-default' : selectedJob?.id == job?.id}">
                                    <div>
                                        <h5 class="text-sm font-medium m-0">{{job?.posisi}}</h5>
                                        <p class="text-sm text-slate-500 m-0">{{job?.lokasi}} - {{job?.no_jo}}</p>
                                    </div>
                                    <div v-if="job?.status == '1'" class="bg-emerald-600 p-1 rounded-lg text-xs px-2 text-white">Published</div>
                                    <div v-if="job?.status == '2'" class="bg-yellow-400 p-1 rounded-lg text-xs px-2 text-white">Internal</div>
                                    <div v-if="job?.status == '3'" class="bg-blue-600 p-1 rounded-lg text-xs px-2 text-white">External</div>
                                    <div v-if="job?.status == '4'" class="bg-slate-100 text-slate-700 p-1 rounded-lg text-xs px-2">Draft</div>
                                </div>
                            </div>
                        </div>
                        <div v-if="search.length > 1 && store.filteredJobs.length == 0" class="absolute top-0 start-0 end-0 my-[3em]">
                            <div class="bg-white shadow rounded-xl p-3 max-h-[20em] overflow-auto flex items-center justify-center">
                                <span class="text-slate-500 text-xs">Data tidak ditemukan, perhatikan pencarian</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="selectedJob" class=" my-4 flex items-center justify-between p-3 rounded-lg cursor-pointer bg-slate-100">
                        <div>
                            <h5 class="text-sm font-medium m-0">{{selectedJob.posisi}}</h5>
                            <p class="text-sm text-slate-500 m-0">{{selectedJob.lokasi}} - {{selectedJob.no_jo}}</p>
                        </div>
                        <div v-if="selectedJob.status == '1'" class="ms-auto me-3 bg-emerald-600 p-1 rounded-lg text-xs px-2 text-white">Published</div>
                        <div v-if="selectedJob.status == '2'" class="ms-auto me-3 bg-yellow-400 p-1 rounded-lg text-xs px-2 text-white">Internal</div>
                        <div v-if="selectedJob.status == '3'" class="ms-auto me-3 bg-blue-600 p-1 rounded-lg text-xs px-2 text-white">External</div>
                        <div v-if="selectedJob.status == '4'" class="ms-auto me-3 bg-slate-200 text-slate-700 p-1 rounded-lg text-xs px-2">Draft</div>
                        <div @click="selectedJob = null" class="text-slate-700 hover:text-rose-600 flex items-center justify-center w-[25px] h-[25px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-width="2" d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="12;0"/></path></svg></div>
                    </div>
                </div>
                <div class="col-span-12">
                    <div class="flex items-center gap-2 justify-end">
                        <button class="p-2 px-4 rounded-lg bg-emerald-600 text-white mt-3 text-sm">Pindahkan</button>
                        <button @click="closeAction" class="p-2 px-4 rounded-lg text-slate-700 bg-slate-100 mt-3 text-sm">Batal</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import {useJobsStore} from '@/stores/jobs'
const store = useJobsStore();
const selectedJob = ref(null);
const search = ref('');

const props = defineProps({
    selectedId : Array,
})

const candidateStore = useCandidatesStore();

const getSelectedCandidates = (candidates = candidateStore.filteredCandidates, selectedId = props?.selectedId) => {
    return candidates.filter(candidate => selectedId.includes(candidate.id));
}

const candidates = getSelectedCandidates();

const applyFilters = () => {
    store.updateFilter('search', search.value)
}
const selectJob = (job) => {
    selectedJob.value = job;
    search.value = '';
}
const emit = defineEmits(['close']);
const closeAction = () => {
    emit('close');
}
</script>