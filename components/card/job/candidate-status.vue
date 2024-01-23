<template>
    <div>
        <div v-if="selectedId.length > 0" class="flex items-center gap-2 text-sm mb-4 rounded-xl p-2 px-5 bg-white">
            <div @click="unchecked" class="flex items-center justify-center cursor-pointer text-slate-500 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"/></svg>
            </div>
            <div class="fw-medium text-slate-500 me-4">{{ selectedId.length }} selected</div>
            <button @click="action.move = true" class="flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 9.79V14H9c-.55 0-1-.45-1-1s.45-1 1-1h3v-1.79c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36"/></svg>
                Move
            </button>
            <button @click="action.duplicate = true" class="flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><g fill="currentColor"><path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2V5h8a2 2 0 0 0-2-2z"/></g></svg>
                Duplicate
            </button>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-[5px] border-slate-50">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            <!-- Select All -->
                            <input
                                :checked="selectedId.length === candidatesStore.filteredBySearch.length"
                                id="select-all-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                                @change="selectAll"
                            />
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Nama
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('tg')" scope="col" class="px-4 py-3 text-xs">
                            Tags
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('dm')" scope="col" class="px-4 py-3 text-xs">
                            Domisili
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('gd')" scope="col" class="px-4 py-3 text-xs">
                            Gender
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('us')" scope="col" class="px-4 py-3 text-xs">
                            Usia
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('pd')" scope="col" class="px-4 py-3 text-xs">
                            Pendidikan
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('ly')" scope="col" class="px-4 py-3 text-xs">
                            Layanan
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('jb')" scope="col" class="px-4 py-3 text-xs">
                            Jabatan
                        </th>
                        <th v-if="candidatesStore.selectedRow.includes('mn')" scope="col" class="px-4 py-3 text-xs">
                            Minat
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="candidate in candidatesStore.filteredBySearch" :key="candidate.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3">
                            <input @change="selectcandidate(candidate.id)" :checked="selectedId.includes(candidate.id)" :id="candidate.id" :value="candidate.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                        </td>
                        <td class="px-3 py-3 text-sm">
                            <NuxtLink :to="`/candidate/${candidate.id}`">
                                <span class="text-emerald-600">{{candidate.name}}</span> <br/>
                                <div v-if="candidate.status == 1" class="inline-block mt-1 text-xs bg-purple-500 text-purple-50 rounded-lg p-1 px-2">Screening</div>
                                <div v-else-if="candidate.status == 2" class="inline-block mt-1 text-xs bg-orange-500 text-orange-50 rounded-lg p-1 px-2">Psikotest</div>
                                <div v-else-if="candidate.status == 3" class="inline-block mt-1 text-xs bg-blue-500 text-blue-50 rounded-lg p-1 px-2">Interview HR</div>
                                <div v-else-if="candidate.status == 4" class="inline-block mt-1 text-xs bg-green-500 text-green-50 rounded-lg p-1 px-2">Interview User</div>
                                <div v-else-if="candidate.status == 5" class="inline-block mt-1 text-xs bg-sky-500 text-sky-50 rounded-lg p-1 px-2">Peralihan</div>
                                <div v-else-if="candidate.status == 6" class="inline-block mt-1 text-xs bg-rose-500 text-rose-50 rounded-lg p-1 px-2">Reject</div>
                                <div v-else-if="candidate.status == 7" class="inline-block mt-1 text-xs bg-emerald-500 text-emerald-50 rounded-lg p-1 px-2">Hiring</div>
                            </NuxtLink>
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('tg')" class="px-3 py-3 text-sm">
                            <div class="group relative">
                                <div class="w-[10px] h-[10px] rounded-3xl" :class="{'bg-emerald-600': candidate.tags === 1, 'bg-rose-600': candidate.tags === 2, 'bg-purple-600': candidate.tags === 3}"></div>
                                <div class="group-hover:block hidden absolute top-0 mt-3">
                                    <div class="bg-white p-2 shadow rounded-lg text-xs whitespace-nowrap">
                                        Tags Mean
                                    </div>
                                </div>
                            </div>
                        
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('dm')" class="px-3 py-3 text-sm">
                            {{candidate.domisili}}
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('gd')" class="px-3 py-3 text-sm">
                            {{candidate.gender}}
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('us')" class="px-3 py-3 text-sm">
                            {{candidate.usia}}
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('pd')" class="px-3 py-3 text-sm">
                            {{candidate.pendidikan}}
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('ly')" class="px-3 py-3 text-sm">
                            {{candidate.layanan}}
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('jb')" class="px-3 py-3 text-sm">
                            {{candidate.jabatan}}
                        </td>
                        <td v-if="candidatesStore.selectedRow.includes('mn')" class="px-3 py-3 text-sm">
                            {{candidate.minat}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <PartialTablePaginate :label="`Menampilkan 15 dari 8.423 data`" />
        </div>

        <!-- Action Modal -->
        <BlockActionCandidateMove v-if="action.move" @close="action.move = false" />
        <BlockActionCandidateDuplicate v-if="action.duplicate" @close="action.duplicate = false" />
    </div>
</template>

<script setup>
import { useCandidatesStore } from '@/stores/candidates';
const action = ref({
    move : false,
    duplicate : false,
    delete : false,
})
const selectedId = ref([]);
const props = defineProps({
    status : String,
})
const candidatesStore = useCandidatesStore();
const statusFilter = ()=>{
    let number = '';
    if(props?.status == 'screening') number = 1;
    if(props?.status == 'psikotest') number = 2;
    if(props?.status == 'interview-hr') number = 3;
    if(props?.status == 'interview-user') number = 4;
    if(props?.status == 'peralihan') number = 5;
    if(props?.status == 'reject') number = 6;
    if(props?.status == 'hiring') number = 7;
    candidatesStore.updateFilter('status', number);
}
statusFilter();
const process = [
    {
        key : '',
        value : 'Semua',
    },
    {
        key : 1,
        value : 'Screening',
    },
    {
        key : 2,
        value : 'Psikotest',
    },
    {
        key : 3,
        value : 'Interview HR',
    },
    {
        key : 4,
        value : 'Interview User',
    },
    {
        key : 5,
        value : 'Peralihan',
    },
    {
        key : 6,
        value : 'Reject',
    },
    {
        key : 7,
        value : 'Hiring',
    }
]

const viewCandidate = () => {
    const id = selectedId.value;
    navigateTo(`/candidate/${id}`);
}

const selectcandidate = (candidateId) => {
    const index = selectedId.value.indexOf(candidateId);

    if (index === -1) {
        selectedId.value.push(candidateId);
    } else {
        selectedId.value.splice(index, 1);
    }
};


const selectAll = () => {
    if (selectedId.value.length === candidatesStore.filteredBySearch.length) {
        selectedId.value = [];
    } else {
        selectedId.value = candidatesStore.filteredBySearch.map((candidate) => candidate.id);
    }
};

const unchecked = () => {
    selectedId.value = [];
}

</script>
