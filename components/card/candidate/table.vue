<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <h1 class="font-medium text-lg">Candidate</h1>
            <div class="ms-auto relative">
                <button @click="() => {showFilter = !showFilter}" class="hover:ring hover:ring-emerald-600/10 p-2 px-4 bg-white text-slate-500 text-sm rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 2.75m2 3A.75.75 0 0 1 3.75 5h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 5.75M5.25 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"/></svg>
                    Showed row
                </button>
                <div v-if="showFilter" class="absolute top-0 end-0 z-10 mt-[2.5em] p-4 rounded-lg bg-white">
                    <div v-for="row in rows" :key="row.id" class="text-sm flex items-center gap-3 mb-2 p-2 px-4 rounded-lg" :class="selectedRow.includes(row.id) ? 'bg-emerald-50' : 'bg-transparent'">
                        <input @change="selectRow(row.id)" :checked="selectedRow.includes(row.id)" :id="row.id" :value="row.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                        {{row.row}}
                    </div>
                </div>
            </div>
            <PartialFormSelect @selected="applySelectFilters" :label="`Process`" :options="process" :customClass="`p-2 text-sm shadow-none hover:ring hover:ring-emerald-600/10`" />
            <button @click="action.move = true" class="p-2 px-4 bg-emerald-600 text-white text-sm rounded-lg flex items-center gap-2"><span v-if="selectedId.length > 0" class="p-1 flex items-center justify-center w-[20px] h-[20px] rounded-lg bg-emerald-100 text-emerald-700">{{ selectedId.length }}</span> Move</button>
        </div>
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
            <button @click="action.delete = true" class="flex items-center gap-3 p-2 px-4 rounded-lg bg-rose-100 hover:bg-rose-100 text-rose-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-3 -2 24 24"><path fill="currentColor" d="M12 2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm3.8 6l-.613 9.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.205 8zM7 9a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1"/></svg>
                Delete / Reject
            </button>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            <!-- Select All -->
                            <input
                                :checked="selectedId.length === candidatesStore.filteredCandidates.length"
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
                        <th v-if="selectedRow.includes('tg')" scope="col" class="px-4 py-3 text-xs">
                            Tags
                        </th>
                        <th v-if="selectedRow.includes('dm')" scope="col" class="px-4 py-3 text-xs">
                            Domisili
                        </th>
                        <th v-if="selectedRow.includes('gd')" scope="col" class="px-4 py-3 text-xs">
                            Gender
                        </th>
                        <th v-if="selectedRow.includes('us')" scope="col" class="px-4 py-3 text-xs">
                            Usia
                        </th>
                        <th v-if="selectedRow.includes('pd')" scope="col" class="px-4 py-3 text-xs">
                            Pendidikan
                        </th>
                        <th v-if="selectedRow.includes('ly')" scope="col" class="px-4 py-3 text-xs">
                            Layanan
                        </th>
                        <th v-if="selectedRow.includes('jb')" scope="col" class="px-4 py-3 text-xs">
                            Jabatan
                        </th>
                        <th v-if="selectedRow.includes('mn')" scope="col" class="px-4 py-3 text-xs">
                            Minat
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b-[5px] border-slate-50 bg-white">
                        <td class="p-1">
                        </td>
                        <td class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.name" />
                        </td>
                        <td v-if="selectedRow.includes('tg')" class="p-1">
                            
                        </td>
                        <td v-if="selectedRow.includes('dm')" class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.domisili" />
                        </td>
                        <td v-if="selectedRow.includes('gd')" class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.gender" />
                        </td>
                        <td v-if="selectedRow.includes('us')" class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.usia" />
                        </td>
                        <td v-if="selectedRow.includes('pd')" class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.pendidikan" />
                        </td>
                        <td v-if="selectedRow.includes('ly')" class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.layanan" />
                        </td>
                        <td v-if="selectedRow.includes('jb')" class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.jabatan" />
                        </td>
                        <td v-if="selectedRow.includes('mn')" class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.minat" />
                        </td>
                    </tr>
                    <tr v-for="candidate in candidatesStore.filteredCandidates" :key="candidate.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3">
                            <input @change="selectcandidate(candidate.id)" :checked="selectedId.includes(candidate.id)" :id="candidate.id" :value="candidate.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                        </td>
                        <td class="px-3 py-3 text-sm">
                            <NuxtLink :to="`/candidate/${candidate.id}`">
                                <span class="hover:text-emerald-600">{{candidate.name}}</span> <br/>
                                <div v-if="candidate.status == 1" class="inline-block mt-1 text-xs bg-purple-500 text-purple-50 rounded-lg p-1 px-2">Screening</div>
                                <div v-else-if="candidate.status == 2" class="inline-block mt-1 text-xs bg-orange-500 text-orange-50 rounded-lg p-1 px-2">Psikotest</div>
                                <div v-else-if="candidate.status == 3" class="inline-block mt-1 text-xs bg-blue-500 text-blue-50 rounded-lg p-1 px-2">Interview HR</div>
                                <div v-else-if="candidate.status == 4" class="inline-block mt-1 text-xs bg-green-500 text-green-50 rounded-lg p-1 px-2">Interview User</div>
                                <div v-else-if="candidate.status == 5" class="inline-block mt-1 text-xs bg-sky-500 text-sky-50 rounded-lg p-1 px-2">Peralihan</div>
                                <div v-else-if="candidate.status == 6" class="inline-block mt-1 text-xs bg-rose-500 text-rose-50 rounded-lg p-1 px-2">Reject</div>
                                <div v-else-if="candidate.status == 7" class="inline-block mt-1 text-xs bg-emerald-500 text-emerald-50 rounded-lg p-1 px-2">Hiring</div>
                            </NuxtLink>
                        </td>
                        <td v-if="selectedRow.includes('tg')" class="px-3 py-3 text-sm">
                            <div class="group relative">
                                <div class="w-[10px] h-[10px] rounded-3xl" :class="{'bg-emerald-600': candidate.tags === 1, 'bg-rose-600': candidate.tags === 2, 'bg-purple-600': candidate.tags === 3}"></div>
                                <div class="group-hover:block hidden absolute top-0 mt-3">
                                    <div class="bg-white p-2 shadow rounded-lg text-xs whitespace-nowrap">
                                        Tags Mean
                                    </div>
                                </div>
                            </div>
                        
                        </td>
                        <td v-if="selectedRow.includes('dm')" class="px-3 py-3 text-sm">
                            {{candidate.domisili}}
                        </td>
                        <td v-if="selectedRow.includes('gd')" class="px-3 py-3 text-sm">
                            {{candidate.gender}}
                        </td>
                        <td v-if="selectedRow.includes('us')" class="px-3 py-3 text-sm">
                            {{candidate.usia}}
                        </td>
                        <td v-if="selectedRow.includes('pd')" class="px-3 py-3 text-sm">
                            {{candidate.pendidikan}}
                        </td>
                        <td v-if="selectedRow.includes('ly')" class="px-3 py-3 text-sm">
                            {{candidate.layanan}}
                        </td>
                        <td v-if="selectedRow.includes('jb')" class="px-3 py-3 text-sm">
                            {{candidate.jabatan}}
                        </td>
                        <td v-if="selectedRow.includes('mn')" class="px-3 py-3 text-sm">
                            {{candidate.minat}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center gap-3 text-sm mt-4">
                <button class="flex items-center gap-1 cursor-pointer p-1 px-2 pe-4 text-emerald-600 bg-slate-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 36L19 24l12-12"/></svg>
                    prev
                </button>
                <ul class="flex items-center gap-1 m-0">
                    <li class="m-0 w-[25px] h-[25px] flex items-center justify-center cursor-pointer p-1 rounded-lg text-center border border-slate-200 hover:bg-emerald-200 hover:text-emerald-800 hover:border-emerald-200">1</li>
                    <li class="m-0 w-[25px] h-[25px] flex items-center justify-center cursor-pointer p-1 rounded-lg text-center border border-slate-200 hover:bg-emerald-200 hover:text-emerald-800 hover:border-emerald-200">2</li>
                    <li class="m-0 w-[25px] h-[25px] flex items-center justify-center cursor-pointer p-1 rounded-lg text-center border border-slate-200 hover:bg-emerald-200 hover:text-emerald-800 hover:border-emerald-200">3</li>
                    <li class="m-0 w-[25px] h-[25px] flex items-center justify-center cursor-pointer p-1 rounded-lg text-center border border-slate-200 hover:bg-emerald-200 hover:text-emerald-800 hover:border-emerald-200">..</li>
                    <li class="m-0 w-[25px] h-[25px] flex items-center justify-center cursor-pointer p-1 rounded-lg text-center border border-slate-200 hover:bg-emerald-200 hover:text-emerald-800 hover:border-emerald-200">8</li>
                </ul>
                <button class="flex items-center gap-1 cursor-pointer p-1 px-2 ps-4 text-white bg-emerald-600 rounded-lg">
                    next
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 12l12 12l-12 12"/></svg>
                </button>
            </div>
        </div>

        <!-- Action Modal -->
        <BlockActionCandidateMove v-if="action.move" @close="action.move = false" />
        <BlockActionCandidateDuplicate v-if="action.duplicate" @close="action.duplicate = false" />
        <BlockActionCandidateDelete v-if="action.delete" @close="action.delete = false" />
    </div>
</template>

<script setup>
import { useCandidatesStore } from '@/stores/candidates';
const action = ref({
    move : false,
    duplicate : false,
    delete : false,
})
const showFilter = ref(false);
const selectedId = ref([]);
const selectedRow = ref([]);
const filters = ref({
    name : '',
    status : '',
    domisili : '',
    gender : '',
    usia : '',
    pendidikan : '',
    layanan : '',
    jabatan : '',
    minat : '',
});

const candidatesStore = useCandidatesStore();

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
const rows = [
    {
        id : 'tg',
        row  : 'Tags',
    },
    {
        id : 'dm',
        row  : 'Domisili',
    },
    {
        id : 'gd',
        row  : 'Gender',
    },
    {
        id : 'us',
        row  : 'Usia',
    },
    {
        id : 'pd',
        row  : 'Pendidikan',
    },
    {
        id : 'ly',
        row  : 'Layanan',
    },
    {
        id : 'jb',
        row  : 'Jabatan',
    },
    {
        id : 'mn',
        row  : 'Minat',
    }
]
selectedRow.value = rows.map((row) => row.id)

const applySelectFilters = (value) => {
    candidatesStore.updateFilter('status', value);
}
const applyFilters = () => {
    candidatesStore.updateFilter('name', filters.value.name);
    candidatesStore.updateFilter('domisili', filters.value.domisili);
    candidatesStore.updateFilter('gender', filters.value.gender);
    candidatesStore.updateFilter('usia', filters.value.usia);
    candidatesStore.updateFilter('pendidikan', filters.value.pendidikan);
    candidatesStore.updateFilter('layanan', filters.value.layanan);
    candidatesStore.updateFilter('jabatan', filters.value.jabatan);
    candidatesStore.updateFilter('minat', filters.value.minat);
};

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

const selectRow = (rowId) => {
    const index = selectedRow.value.indexOf(rowId);

    if (index === -1) {
        selectedRow.value.push(rowId);
    } else {
        selectedRow.value.splice(index, 1);
    }
};

const selectAll = () => {
    if (selectedId.value.length === candidatesStore.filteredCandidates.length) {
        selectedId.value = [];
    } else {
        selectedId.value = candidatesStore.filteredCandidates.map((candidate) => candidate.id);
    }
};

const unchecked = () => {
    selectedId.value = [];
}



</script>

<style scoped>

*::-webkit-scrollbar {
    width: 2px;
    height: 2px;
}
   
*::-webkit-scrollbar-track {
    @apply bg-slate-100;
}
   
*::-webkit-scrollbar-thumb {
    @apply bg-slate-300 rounded-2xl;
}
</style>