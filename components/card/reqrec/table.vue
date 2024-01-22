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
                                        <div class="">
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

        <!-- <BlockActionRecreqStopjo v-if="action.stopjo" @close="action.stopjo = false" /> -->
    </div>
</template>

<script setup>
import {useRecreqStore} from '@/stores/recrequest'
const openModalIndex = ref(null);
const action = ref({
    stopjo : false,
})
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