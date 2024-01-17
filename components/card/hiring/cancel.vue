<template>
    <div>
        <div v-if="selectedCj.length > 0" class="flex items-center gap-2 text-sm mb-4 rounded-xl p-2 px-5 bg-white">
            <div @click="unchecked" class="flex items-center justify-center cursor-pointer text-slate-500 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"/></svg>
            </div>
            <div class="fw-medium text-slate-500 me-4">{{ selectedCj.length }} selected</div>
            <button v-if="selectedCj.every(cj => cj.status === 'Reject')" class="flex items-center gap-3 p-2 px-4 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                Update
            </button>
            <div v-else class="flex items-center gap-3 p-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-100 text-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                Update
            </div>
            <button class="flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path fill="currentColor" d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226m256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128m0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72"/></svg>
                View
            </button>
            <div v-if="!selectedCj.every(cj => cj.status === 'Reject')" class="text-xs text-rose-600">Hanya berstatus Reject yang dapat di update</div>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-2">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            <!-- Select All -->
                            <input
                                :checked="selectedCj.length === filteredCancelJoins.length"
                                id="select-all-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                                @change="selectAll"
                            />
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Perner
                        </th>
                        <th scope="col" class="px-4 py-3">
                            No JO
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Cancel Date
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Created By
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
                    </tr>
                    <tr>
                        <td></td>
                        <td><PartialFormSearch v-model="filters.name" /></td>
                        <td><PartialFormSearch v-model="filters.perner" /></td>
                        <td><PartialFormSearch v-model="filters.noJO" /></td>
                        <td></td>
                        <td><PartialFormSearch v-model="filters.createdBy" /></td>
                        <td><PartialFormSearch v-model="filters.approver" /></td>
                        <td><PartialFormSearch v-model="filters.status" /></td>
                        <td><PartialFormSearch v-model="filters.remarks" /></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cj in filteredCancelJoins" :key="cj.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3">
                            <input @click="selectCJ(cj.id, cj.status)" :checked="selectedCj.some(item => item.id === cj.id)" :id="cj.id" :value="cj.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{cj.name}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{cj.perner}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{cj.noJO}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{cj.cancelDate}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{cj.createdBy}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{cj.approver}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            <span class="p-1 px-3 rounded-lg whitespace-nowrap" :class="{'bg-blue-600 text-white' : cj.status === 'On Process', 'bg-yellow-400 text-white' : cj.status === 'Waiting', 'bg-emerald-600 text-white' : cj.status === 'Done', 'bg-rose-600 text-white' : cj.status === 'Reject'}">{{cj.status}}</span>
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{cj.remarks}}
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
import { ref, computed } from 'vue';

const selectedCj = ref([]);
const filters = ref({
    name: '',
    perner: '',
    noJO: '',
    createdBy: '',
    approver: '',
    status: '',
    remarks: '',
});
const updateFilter = (column, value) => {
  filters.value[column] = value;
};
const filteredCancelJoins = computed(() => {
    return cancelJoins.filter((cj) => {
        // Implementasi logika filter sesuai dengan kebutuhan
        const nameMatch = cj.name.toLowerCase().includes(filters.value.name.toLowerCase());
        const pernerMatch = cj.perner.toLowerCase().includes(filters.value.perner.toLowerCase());
        const noJOMatch = cj.noJO.toLowerCase().includes(filters.value.noJO.toLowerCase());
        const createdByMatch = cj.createdBy.toLowerCase().includes(filters.value.createdBy.toLowerCase());
        const approverMatch = cj.approver.toLowerCase().includes(filters.value.approver.toLowerCase());
        const statusMatch = cj.status.toLowerCase().includes(filters.value.status.toLowerCase());
        const remarksMatch = cj.remarks.toLowerCase().includes(filters.value.remarks.toLowerCase());

        // Mengembalikan hasil filter
        return nameMatch && pernerMatch && noJOMatch && approverMatch && statusMatch && remarksMatch && createdByMatch;
        // ... (tambahkan logika filter untuk setiap kolom yang ingin di-filter)
    });
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
    if (selectedCj.value.length === filteredCancelJoins.value.length) {
        selectedCj.value = [];
    } else {
        selectedCj.value = filteredCancelJoins.value.map((cj) => ({ id: cj.id, status: cj.status }));
    }
};

const unchecked = () => {
    selectedCj.value = [];
}

const cancelJoins = [
  {
    id: 1,
    name: "John Doe",
    perner: "123456",
    noJO: "029788/JO/01010101/2023",
    cancelDate: "2023-02-15",
    createdBy: "Alice Smith",
    approver: "Bob Johnson",
    status: "On Process",
    remarks: "Waiting for approval",
  },
  {
    id: 2,
    name: "Jane Doe",
    perner: "654321",
    noJO: "029788/JO/01010102/2023",
    cancelDate: "2023-02-20",
    createdBy: "David Lee",
    approver: "Catherine Brown",
    status: "Waiting",
    remarks: "Pending further review",
  },
  {
    id: 3,
    name: "Alice Smith",
    perner: "987654",
    noJO: "029788/JO/01010103/2023",
    cancelDate: "2023-02-25",
    createdBy: "Eva Williams",
    approver: "Frank Wilson",
    status: "Reject",
    remarks: "Rejected due to incomplete information",
  },
  {
    id: 4,
    name: "Bob Johnson",
    perner: "456789",
    noJO: "029788/JO/01010104/2023",
    cancelDate: "2023-03-01",
    createdBy: "Grace Davis",
    approver: "Helen Anderson",
    status: "Done",
    remarks: "Cancellation successfully processed",
  },
  {
    id: 5,
    name: "Eva Williams",
    perner: "135790",
    noJO: "029788/JO/01010105/2023",
    cancelDate: "2023-03-05",
    createdBy: "Ivan Garcia",
    approver: "Jessica Moore",
    status: "On Process",
    remarks: "Under review by the HR department",
  },
  {
    id: 6,
    name: "David Lee",
    perner: "246801",
    noJO: "029788/JO/01010106/2023",
    cancelDate: "2023-03-10",
    createdBy: "Kevin Taylor",
    approver: "George Miller",
    status: "Waiting",
    remarks: "Pending further processing",
  },
  {
    id: 7,
    name: "Catherine Brown",
    perner: "112233",
    noJO: "029788/JO/01010107/2023",
    cancelDate: "2023-03-15",
    createdBy: "Jessica Moore",
    approver: "John Doe",
    status: "Reject",
    remarks: "Rejected due to policy violation",
  },
  {
    id: 8,
    name: "George Miller",
    perner: "445566",
    noJO: "029788/JO/01010108/2023",
    cancelDate: "2023-03-20",
    createdBy: "Kevin Taylor",
    approver: "Ivan Garcia",
    status: "Done",
    remarks: "Cancellation successfully processed",
  },
  {
    id: 9,
    name: "Grace Davis",
    perner: "778899",
    noJO: "029788/JO/01010109/2023",
    cancelDate: "2023-03-25",
    createdBy: "John Doe",
    approver: "Helen Anderson",
    status: "On Process",
    remarks: "Waiting for review",
  },
  {
    id: 10,
    name: "Frank Wilson",
    perner: "112233",
    noJO: "029788/JO/01010110/2023",
    cancelDate: "2023-03-30",
    createdBy: "Jane Doe",
    approver: "David Lee",
    status: "Waiting",
    remarks: "Pending further processing",
  },
  {
    id: 11,
    name: "Helen Anderson",
    perner: "334455",
    noJO: "029788/JO/01010111/2023",
    cancelDate: "2023-04-05",
    createdBy: "Kevin Taylor",
    approver: "Alice Smith",
    status: "Reject",
    remarks: "Rejected due to incomplete documentation",
  },
  {
    id: 12,
    name: "Ivan Garcia",
    perner: "556677",
    noJO: "029788/JO/01010112/2023",
    cancelDate: "2023-04-10",
    createdBy: "Jessica Moore",
    approver: "Catherine Brown",
    status: "Done",
    remarks: "Cancellation successfully processed",
  },
];

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