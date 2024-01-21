<template>
    <div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-2">
                    <tr>
                        <th v-if="selectedRow.includes(rows[0].id)" scope="col" class="px-4 py-3">
                            Name
                        </th>
                        <th v-if="selectedRow.includes(rows[1].id)" scope="col" class="px-4 py-3">
                            Perner
                        </th>
                        <th v-if="selectedRow.includes(rows[2].id)" scope="col" class="px-4 py-3">
                            No JO
                        </th>
                        <th v-if="selectedRow.includes(rows[3].id)" scope="col" class="px-4 py-3">
                            Cancel Date
                        </th>
                        <th v-if="selectedRow.includes(rows[4].id)" scope="col" class="px-4 py-3">
                            Created By
                        </th>
                        <th v-if="selectedRow.includes(rows[5].id)" scope="col" class="px-4 py-3">
                            Approver
                        </th>
                        <th v-if="selectedRow.includes(rows[6].id)" scope="col" class="px-4 py-3">
                            Status
                        </th>
                        <th v-if="selectedRow.includes(rows[7].id)" scope="col" class="px-4 py-3">
                            Remarks
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td v-if="selectedRow.includes(rows[0].id)"><PartialFormSearch @input="applyFilters" v-model="filters.name" /></td>
                        <td v-if="selectedRow.includes(rows[1].id)"><PartialFormSearch @input="applyFilters" v-model="filters.perner" /></td>
                        <td v-if="selectedRow.includes(rows[2].id)"><PartialFormSearch @input="applyFilters" v-model="filters.noJO" /></td>
                        <td v-if="selectedRow.includes(rows[3].id)"><PartialFormSearch @input="applyFilters" v-model="filters.cancelDate" /></td>
                        <td v-if="selectedRow.includes(rows[4].id)"><PartialFormSearch @input="applyFilters" v-model="filters.createdBy" /></td>
                        <td v-if="selectedRow.includes(rows[5].id)"><PartialFormSearch @input="applyFilters" v-model="filters.approver" /></td>
                        <td v-if="selectedRow.includes(rows[6].id)"><PartialFormSearch @input="applyFilters" v-model="filters.status" /></td>
                        <td v-if="selectedRow.includes(rows[7].id)"><PartialFormSearch @input="applyFilters" v-model="filters.remarks" /></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cj, index) in store.filteredCancels" :key="cj.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td v-if="selectedRow.includes(rows[0].id)" class="px-3 py-3 text-xs">
                            {{cj.name}}
                        </td>
                        <td v-if="selectedRow.includes(rows[1].id)" class="px-3 py-3 text-xs">
                            {{cj.perner}}
                        </td>
                        <td v-if="selectedRow.includes(rows[2].id)" class="px-3 py-3 text-xs">
                            {{cj.noJO}}
                        </td>
                        <td v-if="selectedRow.includes(rows[3].id)" class="px-3 py-3 text-xs">
                            {{cj.cancelDate}}
                        </td>
                        <td v-if="selectedRow.includes(rows[4].id)" class="px-3 py-3 text-xs">
                            {{cj.createdBy}}
                        </td>
                        <td v-if="selectedRow.includes(rows[5].id)" class="px-3 py-3 text-xs">
                            {{cj.approver}}
                        </td>
                        <td v-if="selectedRow.includes(rows[6].id)" class="px-3 py-3 text-xs">
                            <span class="p-1 px-3 rounded-lg whitespace-nowrap" :class="{'bg-blue-600 text-white' : cj.status === 'On Process', 'bg-yellow-400 text-white' : cj.status === 'Waiting', 'bg-emerald-600 text-white' : cj.status === 'Done', 'bg-rose-600 text-white' : cj.status === 'Reject'}">{{cj.status}}</span>
                        </td>
                        <td v-if="selectedRow.includes(rows[7].id)" class="px-3 py-3 text-xs">
                            {{cj.remarks}}
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
                                <div v-if="openModalIndex === index" class="absolute z-10" :class="{'bottom-0 end-0 me-[2em]' : index >= (store.filteredCancels.length-5), 'top-0 end-0 mt-[2em]' : index <= (store.filteredCancels.length-5)}">
                                    <div class="p-3 rounded-lg bg-white shadow">
                                        <div class="mb-2">
                                            <button @click="duplicateItem(cj.id)" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><circle cx="22" cy="24" r="2" fill="currentColor"/><path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4M7 17h5v2H7zm0-5h12v2H7zm0-5h12v2H7z"/><path fill="currentColor" d="M22 2H4a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H4V4h18v11h2V4a2.006 2.006 0 0 0-2-2"/></svg>
                                                Detail
                                            </button>
                                        </div>
                                        <div class="mb-2">
                                            <NuxtLink :to="cj.status === 'Reject' ? `/cancel-join/${cj.id}/edit` : ''" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg" :class="{'hidden' : cj.status !== 'Reject', 'cursor-pointer bg-blue-100 hover:bg-blue-100 text-blue-700' : cj.status === 'Reject'}">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z" />
                                                </svg>
                                                Update
                                            </NuxtLink>
                                        </div>
                                        <div class="">
                                            <button @click="deleteItem(cj.id)" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-rose-100 hover:bg-rose-100 text-rose-700">
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
    </div>
</template>

<script setup>
import {useCancelStore} from '@/stores/cancels'
const openModalIndex = ref(null);
const store = useCancelStore();
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

const duplicateItem = (id) => {
  closeAllModals();
};

const deleteItem = (id) => {
  closeAllModals();
};
const selectedCj = ref([]);
const filters = ref({
    name: '',
    perner: '',
    noJO: '',
    cancelDate: '',
    createdBy: '',
    approver: '',
    status: '',
    remarks: '',
});

const selectCJ = (cjId, status) => {
    const index = selectedCj.value.findIndex(item => item.id === cjId);
    if (index === -1) {
        selectedCj.value.push({ id: cjId, status });
    } else {
        selectedCj.value.splice(index, 1);
    }
};

const selectAll = () => {
    if (selectedCj.value.length === store.filteredCancels.value.length) {
        selectedCj.value = [];
    } else {
        selectedCj.value = store.filteredCancels.value.map((cj) => ({ id: cj.id, status: cj.status }));
    }
};

const unchecked = () => {
    selectedCj.value = [];
}

const applyFilters = () => {
    store.updateFilter('name', filters.value.name);
    store.updateFilter('perner', filters.value.perner);
    store.updateFilter('noJO', filters.value.noJO);
    store.updateFilter('cancelDate', filters.value.cancelDate);
    store.updateFilter('createdBy', filters.value.createdBy);
    store.updateFilter('approver', filters.value.approver);
    store.updateFilter('status', filters.value.status);
    store.updateFilter('remarks', filters.value.remarks);
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