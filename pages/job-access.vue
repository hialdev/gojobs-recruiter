<template>
    <div class="container mx-auto py-5">
        <div class="flex items-center justify-between mb-4">
            <h1 class="font-medium">PIC Job Access</h1>
            <button @click="action.add = true" class="text-sm p-2 px-4 bg-emerald-600 text-white rounded-lg flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1M12 7a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"/></svg> Assign Access</button>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-2">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            #
                        </th>
                        <th scope="col" class="px-4 py-3">
                            PIC Name
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Regional
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Job Category
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Layanan
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Area
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.name" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.perner" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.category" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.layanan" /></td>
                        <td><PartialFormSearch @input="applyFilters" v-model="filters.area" /></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pic, index) in store.filteredPICs" :key="pic.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-3 py-3 text-xs font-medium">{{ index+1 }}</td>
                        <td class="px-3 py-3 text-xs">
                            {{pic.name}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            Regional
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{pic.category}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{pic.layanan}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{pic.area}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            <button @click="action.edit = true" class="inline-block text-xs flex items-center gap-3 p-2 rounded-lg bg-emerald-50 text-emerald-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <PartialTablePaginate :label="`Menampilkan 15 dari 352 data`" />

        <BlockActionJobAssign v-if="action.edit" @close="action.edit = false" />
        <BlockActionJobAssign v-if="action.add" @close="action.add = false" />
    </div>
</template>

<script setup>
import {usePICStore} from '@/stores/pic'
const openModalIndex = ref(null);
const action = ref({
    edit : false,
    add : false,
})
const store = usePICStore();
const dotsModal = (index) => {
  openModalIndex.value = openModalIndex.value === index ? null : index;
};

const selectedCj = ref([]);
const filters = ref({
    name: '',
    perner: '',
    category: '',
    area: '',
    layanan: '',
});


const applyFilters = () => {
    store.updateFilter('name', filters.value.name);
    store.updateFilter('perner', filters.value.perner);
    store.updateFilter('category', filters.value.category);
    store.updateFilter('area', filters.value.area);
    store.updateFilter('layanan', filters.value.layanan);
}

</script>