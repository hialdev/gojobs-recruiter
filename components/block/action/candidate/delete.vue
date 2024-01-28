
<template>
    <div class="fixed top-0 end-0 bottom-0 start-0 bg-black/10 flex items-center justify-center z-10">
        <div class="bg-white p-8 rounded-xl relative overflow-hidden">
            <div @click="closeMove" class="absolute top-0 end-0 flex items-center justify-center cursor-pointer w-[40px] h-[40px] p-1 rounded-bl-3xl bg-slate-100 text-slate-700 hover:bg-rose-100 hover:text-rose-700"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"/></svg></div>
            <div class="grid grid-cols-12 gap-x-5 w-[40em]">
                <div class="col-span-12">
                    <h3 class="font-medium">Menghapus Kandidat <span class="bg-rose-600 text-slate-50 ms-2 inline-flex items-center justify-center p-1 rounded-3xl w-[25px] h-[25px] text-xs">{{selectedId.length}}</span></h3>
                </div>
                <div class="col-span-12">
                    <div class="text-xs mt-3">Data</div>
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
                            <div class="flex items-center gap-x-3 my-2">
                                <button class="text-sm p-2 px-4 rounded-lg bg-rose-100 text-rose-700">Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-span-12">
                    <div class="flex items-center gap-2 mt-3 justify-end">
                        <button class="text-sm p-2 px-4 rounded-lg bg-rose-700 text-white">Reject Semua</button>
                        <button @click="closeMove" class="p-2 px-4 rounded-lg text-slate-700 bg-slate-100 text-sm">Batal</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import {useCandidatesStore} from '@/stores/candidates'
const props = defineProps({
    selectedId : Array,
})
const store = useCandidatesStore();

const getSelectedCandidates = (candidates = store.filteredCandidates, selectedId = props?.selectedId) => {
    return candidates.filter(candidate => selectedId.includes(candidate.id));
}

const candidates = getSelectedCandidates();

const emit = defineEmits(['close']);
const closeMove = () => {
    emit('close');
}
</script>