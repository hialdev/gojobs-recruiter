<template>
    <div class="container mx-auto py-5">
        <h1 class="font-medium mb-4">PIC Job Access</h1>
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
                            Perner
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
                            {{pic.perner}}
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
    </div>
</template>

<script setup>
import {usePICStore} from '@/stores/pic'
const openModalIndex = ref(null);
const action = ref({
    edit : false,
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