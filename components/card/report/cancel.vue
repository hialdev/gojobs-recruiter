<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <h1 class="text-xl font-medium">Cancel Join Data</h1>
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
            <div class="relative">
                <button @click="() => {showExport = !showExport}" class="p-2 px-4 bg-emerald-600 text-white text-sm rounded-lg flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 19H7v-9h2zm4 0h-2v-6h2zm4 0h-2v-3h2zM14 9h-1V4l5 5z"/></svg> Export</button>
                <div v-if="showExport" class="absolute top-0 mt-[2.8em] end-0 z-10">
                    <div class="p-5 rounded-lg bg-white shadow">
                        <button class="p-2 px-4 w-full text-start rounded-lg text-emerald-600 hover:bg-emerald-100 text-xs whitespace-nowrap">Microsoft Excel (.xls)</button>
                        <button class="p-2 px-4 w-full text-start rounded-lg text-emerald-600 hover:bg-emerald-100 text-xs whitespace-nowrap">CSV (.csv)</button>
                        <button class="p-2 px-4 w-full text-start rounded-lg text-emerald-600 hover:bg-emerald-100 text-xs whitespace-nowrap">Microsoft Excel 2016 (.xls)</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            #
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Nama
                        </th>
                        <th v-if="selectedRow.includes('njo')" scope="col" class="px-4 py-3 text-xs">
                            No JO
                        </th>
                        <th v-if="selectedRow.includes('prn')" scope="col" class="px-4 py-3 text-xs">
                            Perner
                        </th>
                        <th v-if="selectedRow.includes('cby')" scope="col" class="px-4 py-3 text-xs">
                            Created By
                        </th>
                        <th v-if="selectedRow.includes('rsn')" scope="col" class="px-4 py-3 text-xs">
                            Reason
                        </th>
                        <th v-if="selectedRow.includes('cdt')" scope="col" class="px-4 py-3 text-xs">
                            Cancel Date
                        </th>
                        <th v-if="selectedRow.includes('sgm')" scope="col" class="px-4 py-3 text-xs">
                            Segmen
                        </th>
                        <th v-if="selectedRow.includes('sts')" scope="col" class="px-4 py-3 text-xs">
                            Status
                        </th>
                        <th v-if="selectedRow.includes('jml')" scope="col" class="px-4 py-3 text-xs">
                            Jumlah
                        </th>
                        <th v-if="selectedRow.includes('hrg')" scope="col" class="px-4 py-3 text-xs">
                            Hiring
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(job, index) in jobOrders" :key="job.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3">
                            {{index+1}}
                        </td>
                        <td class="px-3 py-3 text-sm">
                            NOVITA AYU RAHMAWATI <br/>
                        </td>
                        <td v-if="selectedRow.includes('njo')" class="px-3 py-3 text-sm">
                            {{job.noJO}}
                        </td>
                        <td v-if="selectedRow.includes('prn')" class="px-3 py-3 text-sm">
                            230325
                        </td>
                        <td v-if="selectedRow.includes('cby')" class="px-3 py-3 text-sm">
                            ELISA
                        </td>
                        <td v-if="selectedRow.includes('rsn')" class="px-3 py-3 text-sm">
                            Pekerja Mundur
                        </td>
                        <td v-if="selectedRow.includes('cdt')" class="px-3 py-3 text-sm">
                            27-12-2023
                        </td>
                        <td v-if="selectedRow.includes('sgm')" class="px-3 py-3 text-sm">
                            {{job.layanan}}
                        </td>
                        <td v-if="selectedRow.includes('sts')" class="px-3 py-3 text-sm">
                            <span class="bg-emerald-600 text-white rounded-lg p-1 px-2 text-xs">DONE</span>
                        </td>
                        <td v-if="selectedRow.includes('jml')" class="px-3 py-3 text-sm">
                            2
                        </td>
                        <td v-if="selectedRow.includes('hrg')" class="px-3 py-3 text-sm">
                            {{job.hiring}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <PartialTablePaginate />

    </div>
</template>

<script setup>
const showFilter = ref(false);
const showExport = ref(false);

const selectedRow = ref([]);

const rows = [
    {
        id : 'njo',
        row  : 'No JO',
    },
    {
        id : 'prn',
        row  : 'Perner',
    },
    {
        id : 'cby',
        row  : 'Created By',
    },
    {
        id : 'rsn',
        row  : 'Reason',
    },
    {
        id : 'cdt',
        row  : 'Cancel Date',
    },
    {
        id : 'sgm',
        row  : 'Segmen',
    },
    {
        id : 'sts',
        row  : 'Status',
    },
    {
        id : 'jml',
        row  : 'Jumlah',
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