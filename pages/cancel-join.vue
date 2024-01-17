<template>
    <div class="container mx-auto py-5">
        <div class="flex items-center gap-3 mb-4">
            <h1 class="text-xl font-medium">Cancel Join</h1>
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
            <button class="p-2 px-4 bg-emerald-600 text-white text-sm rounded-lg">Create</button>
                
        </div>

        <CardHiringCancel />

    </div>
</template>

<script setup>
const showFilter = ref(false);
const showExport = ref(false);

const selectedRow = ref([]);

const rows = [
    {
        id : 'cjo',
        row  : 'Created JO',
    },
    {
        id : 'tjo',
        row  : 'Domisili',
    },
    {
        id : 'lyn',
        row  : 'Layanan',
    },
    {
        id : 'lks',
        row  : 'Lokasi',
    },
    {
        id : 'jbs',
        row  : 'Status',
    },
    {
        id : 'jmk',
        row  : 'Jumlah Kebutuhan',
    },
    {
        id : 'jbf',
        row  : 'Job Family',
    },
    {
        id : 'sjf',
        row  : 'Sub Job Family',
    },
    {
        id : 'hrg',
        row  : 'Hiring',
    }
]
selectedRow.value = rows.map((row) => row.id)

const viewjob = () => {
    const id = selectedId.value;
    navigateTo(`/job/${id}`);
}

const selectRow = (rowId) => {
    const index = selectedRow.value.indexOf(rowId);

    if (index === -1) {
        selectedRow.value.push(rowId);
    } else {
        selectedRow.value.splice(index, 1);
    }
};

const jobOrders = [
  {
    id: 1,
    noJO: "029788/JO/01010101/2023",
    created: "2023-01-01",
    typeJO: "Replacement",
    layanan: "ABC Company",
    lokasi: "Jakarta",
    status: "On Process",
    jumlahKebutuhan: 3,
    jobFamily: "IT",
    subJobFamily: "Software Developer",
    hiring: 2,
  },
  {
    id: 2,
    noJO: "029788/JO/01010102/2023",
    created: "2023-01-05",
    typeJO: "New",
    layanan: "XYZ Corporation",
    lokasi: "Bandung",
    status: "On Process",
    jumlahKebutuhan: 2,
    jobFamily: "Finance",
    subJobFamily: "Financial Analyst",
    hiring: 1,
  },
  {
    id: 3,
    noJO: "029788/JO/01010103/2023",
    created: "2023-01-10",
    typeJO: "Replacement",
    layanan: "DEF Industries",
    lokasi: "Surabaya",
    status: "New",
    jumlahKebutuhan: 4,
    jobFamily: "Engineering",
    subJobFamily: "Mechanical Engineer",
    hiring: 3,
  },
  {
    id: 4,
    noJO: "029788/JO/01010104/2023",
    created: "2023-01-15",
    typeJO: "New",
    layanan: "GHI Solutions",
    lokasi: "Medan",
    status: "On Process",
    jumlahKebutuhan: 2,
    jobFamily: "Marketing",
    subJobFamily: "Marketing Specialist",
    hiring: 1,
  },
  {
    id: 5,
    noJO: "029788/JO/01010105/2023",
    created: "2023-01-20",
    typeJO: "Replacement",
    layanan: "JKL Enterprises",
    lokasi: "Yogyakarta",
    status: "On Process",
    jumlahKebutuhan: 5,
    jobFamily: "Human Resources",
    subJobFamily: "HR Generalist",
    hiring: 4,
  },
  {
    id: 6,
    noJO: "029788/JO/01010106/2023",
    created: "2023-01-25",
    typeJO: "New",
    layanan: "MNO Innovations",
    lokasi: "Semarang",
    status: "On Process",
    jumlahKebutuhan: 3,
    jobFamily: "Sales",
    subJobFamily: "Sales Representative",
    hiring: 2,
  },
  {
    id: 7,
    noJO: "029788/JO/01010107/2023",
    created: "2023-02-01",
    typeJO: "Replacement",
    layanan: "PQR Services",
    lokasi: "Palembang",
    status: "On Process",
    jumlahKebutuhan: 4,
    jobFamily: "Finance",
    subJobFamily: "Accountant",
    hiring: 3,
  },
  {
    id: 8,
    noJO: "029788/JO/01010108/2023",
    created: "2023-02-05",
    typeJO: "New",
    layanan: "STU Solutions",
    lokasi: "Makassar",
    status: "On Process",
    jumlahKebutuhan: 2,
    jobFamily: "IT",
    subJobFamily: "Database Administrator",
    hiring: 1,
  },
  {
    id: 9,
    noJO: "029788/JO/01010109/2023",
    created: "2023-02-10",
    typeJO: "Replacement",
    layanan: "VWX Corporation",
    lokasi: "Malang",
    status: "On Process",
    jumlahKebutuhan: 3,
    jobFamily: "Engineering",
    subJobFamily: "Electrical Engineer",
    hiring: 2,
  },
  {
    id: 10,
    noJO: "029788/JO/01010110/2023",
    created: "2023-02-15",
    typeJO: "New",
    layanan: "YZA Industries",
    lokasi: "Bandar Lampung",
    status: "On Process",
    jumlahKebutuhan: 4,
    jobFamily: "Marketing",
    subJobFamily: "Digital Marketing Specialist",
    hiring: 3,
  },
  {
    id: 11,
    noJO: "029788/JO/01010111/2023",
    created: "2023-02-20",
    typeJO: "Replacement",
    layanan: "BCD Innovations",
    lokasi: "Pekanbaru",
    status: "On Process",
    jumlahKebutuhan: 2,
    jobFamily: "Human Resources",
    subJobFamily: "Recruitment Specialist",
    hiring: 1,
  },
  {
    id: 12,
    noJO: "029788/JO/01010112/2023",
    created: "2023-02-25",
    typeJO: "New",
    layanan: "EFG Enterprises",
    lokasi: "Pontianak",
    status: "On Process",
    jumlahKebutuhan: 3,
    jobFamily: "Sales",
    subJobFamily: "Sales Manager",
    hiring: 2,
  },
  {
    id: 13,
    noJO: "029788/JO/01010113/2023",
    created: "2023-03-01",
    typeJO: "Replacement",
    layanan: "HIJ Corporation",
    lokasi: "Balikpapan",
    status: "On Process",
    jumlahKebutuhan: 4,
    jobFamily: "Finance",
    subJobFamily: "Financial Controller",
    hiring: 3,
  },
  {
    id: 14,
    noJO: "029788/JO/01010114/2023",
    created: "2023-03-05",
    typeJO: "New",
    layanan: "KLM Solutions",
    lokasi: "Batam",
    status: "On Process",
    jumlahKebutuhan: 2,
    jobFamily: "IT",
    subJobFamily: "Network Administrator",
    hiring: 1,
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