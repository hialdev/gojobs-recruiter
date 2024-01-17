<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <h1 class="text-xl font-medium">Job Order Data</h1>
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
                            No JO
                        </th>
                        <th v-if="selectedRow.includes('cjo')" scope="col" class="px-4 py-3 text-xs">
                            Create JO
                        </th>
                        <th v-if="selectedRow.includes('tjo')" scope="col" class="px-4 py-3 text-xs">
                            Tipe JO
                        </th>
                        <th v-if="selectedRow.includes('lyn')" scope="col" class="px-4 py-3 text-xs">
                            Layanan
                        </th>
                        <th v-if="selectedRow.includes('lks')" scope="col" class="px-4 py-3 text-xs">
                            Lokasi
                        </th>
                        <th v-if="selectedRow.includes('jbs')" scope="col" class="px-4 py-3 text-xs">
                            Status
                        </th>
                        <th v-if="selectedRow.includes('jmk')" scope="col" class="px-4 py-3 text-xs">
                            Jumlah
                        </th>
                        <th v-if="selectedRow.includes('jbf')" scope="col" class="px-4 py-3 text-xs">
                            Job Family
                        </th>
                        <th v-if="selectedRow.includes('sjf')" scope="col" class="px-4 py-3 text-xs">
                            Sub Job Family
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
                            {{job.noJO}} <br/>
                        </td>
                        <td v-if="selectedRow.includes('cjo')" class="px-3 py-3 text-sm">
                            {{job.created}}
                        </td>
                        <td v-if="selectedRow.includes('tjo')" class="px-3 py-3 text-sm">
                            {{job.typeJO}}
                        </td>
                        <td v-if="selectedRow.includes('lyn')" class="px-3 py-3 text-sm">
                            {{job.layanan}}
                        </td>
                        <td v-if="selectedRow.includes('lks')" class="px-3 py-3 text-sm">
                            {{job.lokasi}}
                        </td>
                        <td v-if="selectedRow.includes('jbs')" class="px-3 py-3 text-sm">
                            <span class="text-white p-1 px-3 rounded-lg whitespace-nowrap" :class="{'bg-blue-600' : job.status === 'On Process', 'bg-emerald-600' : job.status === 'New'}">{{job.status}}</span>
                        </td>
                        <td v-if="selectedRow.includes('jmk')" class="px-3 py-3 text-sm">
                            {{job.jumlahKebutuhan}}
                        </td>
                        <td v-if="selectedRow.includes('jbf')" class="px-3 py-3 text-sm">
                            {{job.jobFamily}}
                        </td>
                        <td v-if="selectedRow.includes('sjf')" class="px-3 py-3 text-sm">
                            {{job.subJobFamily}}
                        </td>
                        <td v-if="selectedRow.includes('hrg')" class="px-3 py-3 text-sm">
                            {{job.hiring}}
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