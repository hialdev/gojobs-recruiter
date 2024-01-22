<template>
    <div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-2">
                    <tr>
                        <th class="px-4 py-3">#</th>
                        <th scope="col" class="px-4 py-3">
                            Perner
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Resign Date
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Alasan
                        </th>
                        <th scope="col" class="px-4 py-3">Tags</th>
                        <th scope="col" class="px-4 py-3">
                            Creator
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Approver
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Remarks
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.perner" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.name" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.resignDate" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.alasan" /></td>
                        <td></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.creator" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.approver" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.status" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.remarks" /></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(resign, index) in store.filteredResign" :key="resign.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3 text-xs font-medium">{{ index+1 }}</td>
                        <td class="px-3 py-3 text-xs">
                            {{resign.perner}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{resign.name}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{resign.resignDate}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{resign.alasan}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            <div class="group relative">
                                <div class="w-[10px] h-[10px] rounded-3xl" :class="{'bg-emerald-600': resign.tags === 1, 'bg-rose-600': resign.tags === 2, 'bg-purple-600': resign.tags === 3}"></div>
                                <div class="group-hover:block hidden absolute top-0 mt-3">
                                    <div class="bg-white p-2 shadow rounded-lg text-xs whitespace-nowrap">
                                        Tags Mean
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{resign.creator}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{resign.approver}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            <span class="p-1 px-3 rounded-lg whitespace-nowrap" :class="{'bg-emerald-600 text-white' : resign.status === 'Approved', 'bg-rose-600 text-white' : resign.status === 'Rejected', 'bg-slate-600 text-white' : resign.status === 'Draft', 'bg-orange-400 text-white' : resign.status === 'Waiting'}">{{resign.status}}</span>
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{resign.remarks}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            <div class="relative">
                                <!-- 3 Dots -->
                                <div @click="dotsModal(index)" class="flex items-center justify-center w-[20px] h-[20px] text-emerald-600 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                                        <g fill="currentColor">
                                        <circle cx="10" cy="15" r="2" />
                                        <circle cx="10" cy="10" r="2" />
                                        <circle cx="10" cy="5" r="2" />
                                        </g>
                                    </svg>
                                </div>
                                <!-- 3 Dots Modal -->
                                <div v-if="openModalIndex === index" class="absolute z-10" :class="{'bottom-0 end-0 me-[2em]' : index >= (store.filteredResign.length-5), 'top-0 end-0 mt-[2em]' : index <= (store.filteredResign.length-5)}">
                                    <div class="p-3 rounded-lg bg-white shadow">
                                        <div class="mb-2">
                                            <button @click="action.view = true" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 400a144 144 0 1 1 144-144a143.93 143.93 0 0 1-144 144m0-240a95.31 95.31 0 0 0-25.31 3.79a47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160"/></svg>
                                                View
                                            </button>
                                        </div>
                                        <div class="mb-2">
                                            <NuxtLink :to="`resign/${resign.id}/edit`" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z" />
                                                </svg>
                                                Edit
                                            </NuxtLink>
                                        </div>
                                        <div class="">
                                            <button @click="deleteItem(job.id)" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-rose-100 hover:bg-rose-100 text-rose-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-3 -2 24 24">
                                                <path fill="currentColor" d="M12 2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm3.8 6l-.613 9.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.205 8zM7 9a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1" />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex items-center gap-3 text-sm my-4">
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
        
        <BlockActionResignView v-if="action.view" @close="action.view = false" />
    </div>
</template>

<script setup>
import {useResignStore} from '@/stores/resign'
const openModalIndex = ref(null);
const action = ref({
    view : false,
})
const store = useResignStore();
const props = defineProps({
    rows : Array,
    selectedRow : Array,
})
const dotsModal = (index) => {
  openModalIndex.value = openModalIndex.value === index ? null : index;
};

const closeAllModals = () => {
  openModalIndex.value = null;
};

const filters = ref({
    perner: '',
    name: '',
    resignDate: '',
    alasan: '',
    creator: '',
    approver: '',
    status: '',
    remarks: '',
});

const applyFilters = () => {
    store.updateFilter('perner', filters.value.perner);
    store.updateFilter('noJO', filters.value.noJO);
    store.updateFilter('tipeJO', filters.value.tipeJO);
    store.updateFilter('dueDate', filters.value.dueDate);
    store.updateFilter('jabatan', filters.value.jabatan);
    store.updateFilter('lokasi', filters.value.lokasi);
    store.updateFilter('status', filters.value.status);
    store.updateFilter('layanan', filters.value.layanan);
    store.updateFilter('kebutuhan', filters.value.kebutuhan);
    store.updateFilter('pelamar', filters.value.pelamar);
    store.updateFilter('kandidat', filters.value.kandidat);
    store.updateFilter('hiring', filters.value.hiring);
}

</script>