<template>
    <div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-2">
                    <tr>
                        <th class="px-4 py-3">#</th>
                        <th v-if="selectedRow.includes(rows[0].id)" scope="col" class="px-4 py-3">
                            No JO
                        </th>
                        <th v-if="selectedRow.includes(rows[1].id)" scope="col" class="px-4 py-3">
                            Created By
                        </th>
                        <th v-if="selectedRow.includes(rows[2].id)" scope="col" class="px-4 py-3">
                            Created at
                        </th>
                        <th v-if="selectedRow.includes(rows[3].id)" scope="col" class="px-4 py-3">
                            Approval I
                        </th>
                        <th v-if="selectedRow.includes(rows[4].id)" scope="col" class="px-4 py-3">
                            Approval II
                        </th>
                        <th v-if="selectedRow.includes(rows[5].id)" scope="col" class="px-4 py-3">
                            Status
                        </th>
                        <th v-if="selectedRow.includes(rows[6].id)" scope="col" class="px-4 py-3">
                            Remarks
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td v-if="selectedRow.includes(rows[0].id)"><PartialFormSearch @input="applyFilters" v-model="filters.noJO" /></td>
                        <td v-if="selectedRow.includes(rows[1].id)"><PartialFormSearch @input="applyFilters" v-model="filters.createdBy" /></td>
                        <td v-if="selectedRow.includes(rows[2].id)"><PartialFormSearch @input="applyFilters" v-model="filters.createdAt" /></td>
                        <td v-if="selectedRow.includes(rows[3].id)"><PartialFormSearch @input="applyFilters" v-model="filters.approvalI" /></td>
                        <td v-if="selectedRow.includes(rows[4].id)"><PartialFormSearch @input="applyFilters" v-model="filters.approvalII" /></td>
                        <td v-if="selectedRow.includes(rows[6].id)"><PartialFormSearch @input="applyFilters" v-model="filters.status" /></td>
                        <td v-if="selectedRow.includes(rows[5].id)"><PartialFormSearch @input="applyFilters" v-model="filters.remarks" /></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stopJO, index) in store.filteredStopjo" :key="stopJO.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3 text-xs font-medium">{{ index+1 }}</td>
                        <td v-if="selectedRow.includes(rows[0].id)" class="px-3 py-3 text-xs">
                            {{stopJO.noJO}}
                        </td>
                        <td v-if="selectedRow.includes(rows[1].id)" class="px-3 py-3 text-xs">
                            {{stopJO.createdBy}}
                        </td>
                        <td v-if="selectedRow.includes(rows[2].id)" class="px-3 py-3 text-xs">
                            {{stopJO.createdAt}}
                        </td>
                        <td v-if="selectedRow.includes(rows[3].id)" class="px-3 py-3 text-xs">
                            {{stopJO.approvalI}}
                        </td>
                        <td v-if="selectedRow.includes(rows[4].id)" class="px-3 py-3 text-xs">
                            {{stopJO.approvalII}}
                        </td>
                        <td v-if="selectedRow.includes(rows[5].id)" class="px-3 py-3 text-xs">
                            <span class="p-1 px-3 rounded-lg whitespace-nowrap" :class="{'bg-emerald-600 text-white' : stopJO.status === 'Approved', 'bg-yellow-400 text-white' : stopJO.status === 'Waiting', 'bg-rose-600 text-white' : stopJO.status === 'Reject'}">{{stopJO.status}}</span>
                        </td>
                        <td v-if="selectedRow.includes(rows[6].id)" class="px-3 py-3 text-xs">
                            {{stopJO.remarks}}
                        </td>
                        <td v-if="role == 2" class="px-3 py-3 text-xs">
                            <button @click="action.detail = true" class="inline-block text-xs flex items-center gap-3 p-2 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><circle cx="22" cy="24" r="2" fill="currentColor"/><path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4M7 17h5v2H7zm0-5h12v2H7zm0-5h12v2H7z"/><path fill="currentColor" d="M22 2H4a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H4V4h18v11h2V4a2.006 2.006 0 0 0-2-2"/></svg>
                            </button>
                        </td>
                        <td v-else-if="role == 3" class="px-3 py-3 text-xs">
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
                                <div v-if="openModalIndex === index" class="absolute z-10" :class="{'bottom-0 end-0 me-[2em]' : index >= (store.filteredStopjo.length-5), 'top-0 end-0 mt-[2em]' : index <= (store.filteredStopjo.length-5)}">
                                    <div class="p-3 rounded-lg bg-white shadow">
                                        <div class="mb-2">
                                            <button @click="action.detail = true" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><circle cx="22" cy="24" r="2" fill="currentColor"/><path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4M7 17h5v2H7zm0-5h12v2H7zm0-5h12v2H7z"/><path fill="currentColor" d="M22 2H4a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H4V4h18v11h2V4a2.006 2.006 0 0 0-2-2"/></svg>
                                                Detail
                                            </button>
                                        </div>
                                        <div class="">
                                            <button class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-600 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 2a1 1 0 0 0-1 1v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2zm9 2.414L17.586 8H14zm1.707 9.293a1 1 0 0 0-1.414-1.414L11 15.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" clip-rule="evenodd"/></svg>
                                                Approve
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
        <PartialTablePaginate :label="`Menampilkan 15 dari 472 data`" />

        <BlockActionStopjoView v-if="action.detail" @close="action.detail = false" />
    </div>
</template>

<script setup>
import {useStopjoStore} from '@/stores/stopjo'
const openModalIndex = ref(null);
const action = ref({
    detail : false,
})
const role = ref('');
onMounted(() => {
  role.value = localStorage.getItem('role');
});
const store = useStopjoStore();
console.log(store);
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
const selectedstopJO = ref([]);
const filters = ref({
    noJO : '',
    createdBy : '',
    createdAt : '',
    approvalI : '',
    approvalII : '',
    status : '',
    remarks : '',
});

const selectstopJO = (stopJOId, status) => {
    const index = selectedstopJO.value.findIndex(item => item.id === stopJOId);
    if (index === -1) {
        selectedstopJO.value.push({ id: stopJOId, status });
    } else {
        selectedstopJO.value.splice(index, 1);
    }
};

const selectAll = () => {
    if (selectedstopJO.value.length === store.filteredStopjo.value.length) {
        selectedstopJO.value = [];
    } else {
        selectedstopJO.value = store.filteredStopjo.value.map((stopJO) => ({ id: stopJO.id, status: stopJO.status }));
    }
};

const unchecked = () => {
    selectedstopJO.value = [];
}

const applyFilters = () => {
    store.updateFilter('noJO', filters.value.noJO);
    store.updateFilter('createdBy', filters.value.createdBy);
    store.updateFilter('createdAt', filters.value.createdAt);
    store.updateFilter('approvalI', filters.value.approvalI);
    store.updateFilter('approvalII', filters.value.approvalII);
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