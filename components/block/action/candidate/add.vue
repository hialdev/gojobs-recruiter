
<template>
    <div class="fixed top-0 bottom-0 start-0 end-0 bg-black/20 flex justify-end">
        <div class="p-5 bg-white flex flex-col m-5 rounded-xl">
            <div class="flex items-center justify-between gap-3 pb-3 mb-3 border-b">
                <h3 class="font-medium">Tambah Kandidat</h3>
                <PartialFormSelect @selected="applySelectFilters" :label="`Process`" :options="process" :customClass="`border border-slate-200 p-2 text-sm shadow-none hover:ring hover:ring-emerald-600/10`" />

                <button @click="closeAction" class="ms-auto text-sm text-white p-2 px-4 rounded-lg bg-emerald-600 flex items-center gap-3">
                    <div class="text-sm p-1 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center w-[25px] h-[25px]">{{selectedId.length}}</div>
                    Add Candidate
                </button>
                <div @click="closeAction" class="cursor-pointer flex items-center justify-center w-[30px] h-[30px] text-slate-500 hover:text-rose-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
                </div>
            </div>
            <div class="flex-1 max-h-[85vh] overflow-auto">
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
                                <th scope="col" class="px-4 py-3 text-xs">
                                    Tags
                                </th>
                                <th scope="col" class="px-4 py-3 text-xs">
                                    Domisili
                                </th>
                                <th scope="col" class="px-4 py-3 text-xs">
                                    Gender
                                </th>
                                <th scope="col" class="px-4 py-3 text-xs">
                                    Usia
                                </th>
                                <th scope="col" class="px-4 py-3 text-xs">
                                    Pendidikan
                                </th>
                                <th scope="col" class="px-4 py-3 text-xs">
                                    Layanan
                                </th>
                                <th scope="col" class="px-4 py-3 text-xs">
                                    Jabatan
                                </th>
                                <th scope="col" class="px-4 py-3 text-xs">
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
                                <td class="p-1">
                                    
                                </td>
                                <td class="p-1">
                                    <PartialFormSearch @input="applyFilters" v-model="filters.domisili" />
                                </td>
                                <td class="p-1">
                                    <PartialFormSearch @input="applyFilters" v-model="filters.gender" />
                                </td>
                                <td class="p-1">
                                    <PartialFormSearch @input="applyFilters" v-model="filters.usia" />
                                </td>
                                <td class="p-1">
                                    <PartialFormSearch @input="applyFilters" v-model="filters.pendidikan" />
                                </td>
                                <td class="p-1">
                                    <PartialFormSearch @input="applyFilters" v-model="filters.layanan" />
                                </td>
                                <td class="p-1">
                                    <PartialFormSearch @input="applyFilters" v-model="filters.jabatan" />
                                </td>
                                <td class="p-1">
                                    <PartialFormSearch @input="applyFilters" v-model="filters.minat" />
                                </td>
                            </tr>
                            <tr v-for="candidate in candidatesStore.filteredCandidates" :key="candidate.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-4 py-3">
                                    <input @change="selectcandidate(candidate.id)" :checked="selectedId.includes(candidate.id)" :id="candidate.id" :value="candidate.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                                </td>
                                <td @click="navigateTo(`/candidate/${candidate.id}`)" class="px-3 py-3 text-sm">
                                    <span class="hover:text-emerald-600">{{candidate.name}}</span> <br/>
                                    <div v-if="candidate.status == 1" class="inline-block mt-1 text-xs bg-purple-500 text-purple-50 rounded-lg p-1 px-2">Screening</div>
                                    <div v-else-if="candidate.status == 2" class="inline-block mt-1 text-xs bg-orange-500 text-orange-50 rounded-lg p-1 px-2">Psikotest</div>
                                    <div v-else-if="candidate.status == 3" class="inline-block mt-1 text-xs bg-blue-500 text-blue-50 rounded-lg p-1 px-2">Interview HR</div>
                                    <div v-else-if="candidate.status == 4" class="inline-block mt-1 text-xs bg-green-500 text-green-50 rounded-lg p-1 px-2">Interview User</div>
                                    <div v-else-if="candidate.status == 5" class="inline-block mt-1 text-xs bg-sky-500 text-sky-50 rounded-lg p-1 px-2">Peralihan</div>
                                    <div v-else-if="candidate.status == 6" class="inline-block mt-1 text-xs bg-rose-500 text-rose-50 rounded-lg p-1 px-2">Reject</div>
                                    <div v-else-if="candidate.status == 7" class="inline-block mt-1 text-xs bg-emerald-500 text-emerald-50 rounded-lg p-1 px-2">Hiring</div>
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    <div class="group relative">
                                        <div class="w-[10px] h-[10px] rounded-3xl" :class="{'bg-emerald-600': candidate.tags === 1, 'bg-rose-600': candidate.tags === 2, 'bg-purple-600': candidate.tags === 3}"></div>
                                        <div class="group-hover:block hidden absolute top-0 mt-3">
                                            <div class="bg-white p-2 shadow rounded-lg text-xs whitespace-nowrap">
                                                Tags Mean
                                            </div>
                                        </div>
                                    </div>
                                
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    {{candidate.domisili}}
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    {{candidate.gender}}
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    {{candidate.usia}}
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    {{candidate.pendidikan}}
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    {{candidate.layanan}}
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    {{candidate.jabatan}}
                                </td>
                                <td class="px-3 py-3 text-sm">
                                    {{candidate.minat}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="border-t p-3">
                <PartialTablePaginate :label="`Menampilkan 15 dari 8.423 data`" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCandidatesStore } from '@/stores/candidates';
const search = ref('');
const selected = ref(false);
const emit = defineEmits(['close']);
const closeAction = () => {
    emit('close');
}


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