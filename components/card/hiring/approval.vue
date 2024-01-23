<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <PartialFormSelect @selected="applySelectFilter" :label="`Pilih Status`" :options="statuses" :customClass="`lg:max-w-[20em] shadow-none`" />
        </div>
    
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-[8px] border-slate-50">
                    <tr>
                        
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
                        <th scope="col" class="px-4 py-3">
                            
                        </th>
                    </tr>
                    <tr>
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
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="hiring in store.filteredHirings" :key="hiring.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        
                        <td class="px-3 py-3 text-sm">
                            <div class="flex items-center gap-3">
                                {{hiring.name}} <button @click="getProfile(hiring.id)" class="text-emerald-600"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28"><path fill="currentColor" d="M6.75 3H17v22H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3M18.5 17v-6H25v6zm0 8v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25zm0-22v6.5H25V6.75A3.75 3.75 0 0 0 21.25 3zM7.75 7.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25zM8 12V9h4.5v3zm-1.5 4.25c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75M7.25 19a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"/></svg></button><br/>
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
                        <td class="px-4 py-3">
                            <button v-if="hiring.status == 2" @click="() => {showApprove = true}" class="p-2 rounded-lg flex items-center justify-center text-sm" :class="{'bg-yellow-100 text-yellow-700' : hiring.status == 2}">
                                <!-- Waiting Icon -->
                                <svg v-if="hiring.status == 2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m3.293 14.707L11 12.414V6h2v5.586l3.707 3.707z"/></svg>
                            </button>
                            <button v-if="hiring.status != 2" class="p-2 rounded-lg flex items-center justify-center text-sm" :class="{'bg-yellow-100 text-yellow-700' : hiring.status == 2, 'cursor-default bg-emerald-100 text-emerald-700' : hiring.status == 1, 'cursor-default bg-rose-100 text-rose-700' : hiring.status == 3}">
                                <!-- Approved Icon -->
                                <svg v-if="hiring.status == 1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 2a1 1 0 0 0-1 1v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2zm9 2.414L17.586 8H14zm1.707 9.293a1 1 0 0 0-1.414-1.414L11 15.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" clip-rule="evenodd"/></svg>
                                <!-- Reject Icon -->
                                <svg v-if="hiring.status == 3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512L353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336L616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512L670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"/></svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <BlockActionHiringApprove v-if="showApprove" @close="showApprove = false" />

        <PartialTablePaginate :label="`Menampilkan 15 dari 762 data`"/>

    </div>
</template>

<script setup>
import {useHiringStore} from '@/stores/hiring';
const action = ref({
    request : false,
    cancel : false
})
const store = useHiringStore();
const showApprove = ref(false);
const selectedRow = ref([]);
const statuses = [
    {
        key : '',
        value : 'Semua Status',
    },
    {
        key : 1,
        value : 'Approved',
    },
    {
        key : 2,
        value : 'Waiting',
    },
    {
        key : 3,
        value : 'Reject',
    }
]
const filters = ref({
    search : '',
    name : '',
    profile : '',
    noJO : '',
    posisi : '',
    lokasi : '',
    layanan : '',
})

const applyFilters = () => {
    store.updateFilter('search',filters.value.search)
    store.updateFilter('name',filters.value.name)
    store.updateFilter('profile',filters.value.profile)
    store.updateFilter('noJO',filters.value.noJO)
    store.updateFilter('posisi',filters.value.posisi)
    store.updateFilter('layanan',filters.value.layanan)
    store.updateFilter('lokasi',filters.value.lokasi)
}

const applySelectFilter = (value) => {
    console.log(value);
    store.updateFilter('status',value)
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