<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <PartialFormSearch @input="applyFilters" v-model="filters.search" :customClass="`lg:max-w-[20em]`" />
            
            <NuxtLink to="/hiring/report" class="ms-auto p-2 px-4 bg-white text-slate-600 text-sm rounded-lg flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 19H7v-9h2zm4 0h-2v-6h2zm4 0h-2v-3h2zM14 9h-1V4l5 5z"/></svg> Report Hiring</NuxtLink>
            <button @click="action.request = true" class="p-2 px-4 bg-emerald-600 text-white text-sm rounded-lg flex items-center"><span v-if="selectedId.length > 0" class="p-1 rounded-lg bg-emerald-100 text-emerald-600 me-2 flex items-center justify-center w-[25px] h-[25px]">{{selectedId.length}}</span>Request Hiring</button>
            <button @click="action.cancel = true" class="p-2 px-4 bg-rose-100 text-rose-700 text-sm rounded-lg flex items-center"><span v-if="selectedId.length > 0" class="p-1 rounded-lg bg-rose-600 text-rose-100 me-2 flex items-center justify-center w-[25px] h-[25px]">{{selectedId.length}}</span>Cancel Join</button>
        </div>
        <div v-if="selectedId.length > 0" class="flex items-center gap-2 text-sm mb-4 rounded-xl p-2 px-5 bg-white">
            <div @click="unchecked" class="flex items-center justify-center cursor-pointer text-slate-500 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"/></svg>
            </div>
            <div class="fw-medium text-slate-500 me-4">{{ selectedId.length }} selected</div>
            <button @click="action.request = true" class="flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m23 19l-3-3v2h-4v2h4v2zm-10 0c0-.3 0-.7.1-1H6v-2h7.8c.5-.8 1.1-1.5 1.9-2H6v-2h12v1.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.8c-.5-.9-.8-1.9-.8-3m0-15.5L18.5 9H13z"/></svg>
                Request
            </button>
            <button @click="action.cancel = true" class="flex items-center gap-3 p-2 px-4 rounded-lg bg-rose-100 hover:bg-rose-100 text-rose-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22" clip-rule="evenodd" opacity=".5"/><path fill="currentColor" d="M6.53 14.47a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zm4.98-12.21l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052c.013.155.022.321.028.5H22c0-.268 0-.402-.01-.56a5.322 5.322 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a5.488 5.488 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"/></svg>
                Cancel
            </button>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-[8px] border-slate-50">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            <!-- Select All -->
                            <input
                                :checked="selectedId.length === store.filteredHirings.length"
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
                            Profile
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            No JO
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Posisi
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Lokasi
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Layanan
                        </th>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.name" />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.profile" />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.noJO" />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.posisi" />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.lokasi" />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch @input="applyFilters" v-model="filters.layanan" />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="hiring in store.filteredHirings" :key="hiring.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3">
                            <input @change="selecthiring(hiring.id)" :checked="selectedId.includes(hiring.id)" :id="hiring.id" :value="hiring.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                        </td>
                        <td @click="getProfile(hiring.id)" class="cursor-pointer group px-3 py-3 text-sm">
                            <div class="flex items-center gap-3 group-hover:text-emerald-600">
                                {{hiring.name}} <button class="text-emerald-600"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28"><path fill="currentColor" d="M6.75 3H17v22H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3M18.5 17v-6H25v6zm0 8v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25zm0-22v6.5H25V6.75A3.75 3.75 0 0 0 21.25 3zM7.75 7.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25zM8 12V9h4.5v3zm-1.5 4.25c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75M7.25 19a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"/></svg></button><br/>
                            </div>
                        </td>
                        <td class="px-3 py-3 text-sm">
                            <span class="p-1 px-2 border text-emerald-600 border-emerald-600">{{hiring.profile}}</span>
                        </td>
                        <td class="px-3 py-3 text-sm">
                            <div @click="getJo(id)" class="cursor-pointer text-emerald-600">{{hiring.noJO}}</div>
                        </td>
                        <td class="px-3 py-3 text-sm">
                            {{hiring.posisi}}
                        </td>
                        <td class="px-3 py-3 text-sm">
                            {{hiring.lokasi}}
                        </td>
                        <td class="px-3 py-3 text-sm">
                            {{hiring.layanan}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="showProfile" class="fixed top-0 bottom-0 start-0 end-0 bg-black/10">
            <div class="bg-slate-50 relative m-10 overflow-hidden rounded-xl">
                <div @click="()=>{showProfile = false}" class="absolute flex items-center top-0 end-0 text-slate-700 bg-slate-100 hover:bg-rose-100 hover:text-rose-700 p-3 rounded-bl-3xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
                </div>
                <h3 class="text-lg font-medium pb-3 border-b p-5">View Profile</h3>
                <div class=" max-h-[80vh] overflow-auto">
                    <CardHiringProfile />
                </div>
            </div>
        </div>
        <div v-if="showJo" class="fixed top-0 bottom-0 start-0 end-0 bg-black/10">
            <div class="bg-white h-screen relative p-5 m-10 max-h-[87vh] overflow-hidden rounded-xl">
                <div class="flex items-center mb-5">
                    <h3 class="text-lg font-medium">View JO Recruitment Request</h3>
                    <div @click="()=>{showJo = false}" class="absolute flex items-center top-0 end-0 text-slate-700 bg-slate-100 hover:bg-rose-100 hover:text-rose-700 p-3 rounded-bl-3xl cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
                    </div>
                </div>
                <div class="h-full max-h-[87vh] overflow-auto">
                    <CardHiringJo />
                </div>
            </div>
        </div>
        <PartialTablePaginate :label="`Menampilkan 15 dari 762 data`"/>

        <BlockActionHiringRequest v-if="action.request" @click="action.request = false" />
        <BlockActionHiringCancel v-if="action.cancel" @click="action.cancel = false" />
    </div>
</template>

<script setup>
import {useHiringStore} from '@/stores/hiring';
const action = ref({
    request : false,
    cancel : false
})
const showProfile = ref(false);
const showJo = ref(false);
const store = useHiringStore();
const selectedId = ref([]);
const selectedRow = ref([]);
const filters = ref({
    search : '',
    name : '',
    profile : '',
    noJO : '',
    posisi : '',
    lokasi : '',
    layanan : '',
})
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

const selecthiring = (hiringId) => {
    const index = selectedId.value.indexOf(hiringId);

    if (index === -1) {
        selectedId.value.push(hiringId);
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
    if (selectedId.value.length === store.filteredHirings.length) {
        selectedId.value = [];
    } else {
        selectedId.value = store.filteredHirings.map((hiring) => hiring.id);
    }
};

const unchecked = () => {
    selectedId.value = [];
}

const applyFilters = () => {
    store.updateFilter('search',filters.value.search)
    store.updateFilter('name',filters.value.name)
    store.updateFilter('profile',filters.value.profile)
    store.updateFilter('noJO',filters.value.noJO)
    store.updateFilter('posisi',filters.value.posisi)
    store.updateFilter('layanan',filters.value.layanan)
    store.updateFilter('lokasi',filters.value.lokasi)
}

const getProfile = (id) => {
    showProfile.value = true;
}
const getJo = (id) => {
    showJo.value = true;
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