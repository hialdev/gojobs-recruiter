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
                            No JO
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Tipe JO
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Due Date
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Jabatan
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Lokasi
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Layanan
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Kebutuhan
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Pelamar
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Kandidat
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Hiring
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.perner" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.noJO" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.tipeJO" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.dueDate" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.jabatan" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.lokasi" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.layanan" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.status" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.kebutuhan" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.pelamar" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.kandidat" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.hiring" /></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(recreq, index) in store.filteredRecreq" :key="recreq.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3 text-xs font-medium">{{ index+1 }}</td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.perner}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.noJO}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.tipeJO}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.dueDate}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.jabatan}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.lokasi}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.layanan}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            <span class="p-1 px-3 rounded-lg whitespace-nowrap" :class="{'bg-emerald-600 text-white' : recreq.status === 'Done', 'bg-blue-600 text-white' : recreq.status === 'On Progress'}">{{recreq.status}}</span>
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.kebutuhan}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.pelamar}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.kandidat}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{recreq.hiring}}
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
                                <div v-if="openModalIndex === index" class="absolute z-10" :class="{'bottom-0 end-0 me-[2em]' : index >= (store.filteredRecreq.length-5), 'top-0 end-0 mt-[2em]' : index <= (store.filteredRecreq.length-5)}">
                                    <div class="p-3 rounded-lg bg-white shadow">
                                        <div class="mb-2">
                                            <NuxtLink :to="`/recruitment-request/${recreq.id}`" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><circle cx="22" cy="24" r="2" fill="currentColor"/><path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4M7 17h5v2H7zm0-5h12v2H7zm0-5h12v2H7z"/><path fill="currentColor" d="M22 2H4a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H4V4h18v11h2V4a2.006 2.006 0 0 0-2-2"/></svg>
                                                View
                                            </NuxtLink>
                                        </div>
                                        <div v-if="role == 3" class="">
                                            <button @click="action.addCandidate = true" class="whitespace-nowrap w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 text-emerald-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1m-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10"/></g></svg>
                                                Add Candidate
                                            </button>
                                        </div>
                                        <div v-else class="">
                                            <button class="whitespace-nowrap w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-rose-100 text-rose-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3 14H9c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1"/></svg>
                                                Stop JO
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
        <PartialTablePaginate :label="`Menampilkan 15 data dari 12732 data`" />

        <BlockActionCandidateAdd v-if="action.addCandidate" @close="action.addCandidate = false" class="z-[99]" />
        <!-- <BlockActionRecreqStopjo v-if="action.stopjo" @close="action.stopjo = false" /> -->
    </div>
</template>

<script setup>
import {useRecreqStore} from '@/stores/recrequest'
const openModalIndex = ref(null);
const action = ref({
    addCandidate : false,
})
const role = ref('');

onMounted(() => {
  role.value = localStorage.getItem('role');
});
const store = useRecreqStore();
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
    noJO: '',
    tipeJO: '',
    dueDate: '',
    jabatan: '',
    lokasi: '',
    layanan: '',
    kebutuhan: '',
    status: '',
    pelamar: '',
    kandidat: '',
    hiring: '',
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