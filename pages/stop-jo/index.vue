<template>
    <div class="container mx-auto py-5">
        <div class="flex items-center gap-3 mb-4">
            <h1 class="text-xl font-medium">Stop JO</h1>
            <div class="ms-auto relative">
                <button @click="() => {showFilter = !showFilter}" class="hover:ring hover:ring-emerald-600/10 p-2 px-4 bg-white text-slate-500 text-sm rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 2.75m2 3A.75.75 0 0 1 3.75 5h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 5.75M5.25 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"/></svg>
                    Showed row
                </button>
                <div v-if="showFilter" class="absolute top-0 end-0 z-10 mt-[2.5em] p-4 rounded-lg bg-white">
                    <div v-for="row in rows" :key="row.id" class="text-sm whitespace-nowrap flex items-center gap-3 mb-2 p-2 px-4 rounded-lg" :class="selectedRow.includes(row.id) ? 'bg-emerald-50' : 'bg-transparent'">
                        <input @change="selectRow(row.id)" :checked="selectedRow.includes(row.id)" :id="row.id" :value="row.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                        {{row.row}}
                    </div>  
                </div>
            </div>                
        </div>

        <CardStopjoTable :rows="rows" :selectedRow="selectedRow" />
        
    </div>
</template>

<script setup>
const showFilter = ref(false);

const selectedRow = ref([]);

const rows = [
    {
        id : 'noJO',
        row  : 'no JO',
    },
    {
        id : 'crb',
        row  : 'Created By',
    },
    {
        id : 'cra',
        row  : 'Created at',
    },
    {
        id : 'apvi',
        row  : 'Approval I',
    },
    {
        id : 'apvii',
        row  : 'Approval II',
    },
    {
        id : 'sts',
        row  : 'Status',
    },
    {
        id : 'rmk',
        row  : 'Remarks',
    }
]
selectedRow.value = rows.map((row) => row.id)

const selectRow = (rowId) => {
    const index = selectedRow.value.indexOf(rowId);

    if (index === -1) {
        selectedRow.value.push(rowId);
    } else {
        selectedRow.value.splice(index, 1);
    }
};


</script>