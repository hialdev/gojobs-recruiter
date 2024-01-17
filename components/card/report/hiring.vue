<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <h1 class="text-xl font-medium">Hiring Data</h1>
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
                        <th v-if="selectedRow.includes('jbt')" scope="col" class="px-4 py-3 text-xs">
                            Jabatan SAP
                        </th>
                        <th v-if="selectedRow.includes('jbf')" scope="col" class="px-4 py-3 text-xs">
                            Job Family
                        </th>
                        <th v-if="selectedRow.includes('sjf')" scope="col" class="px-4 py-3 text-xs">
                            Sub Job Family
                        </th>
                        <th v-if="selectedRow.includes('prn')" scope="col" class="px-4 py-3 text-xs">
                            Perner
                        </th>
                        <th v-if="selectedRow.includes('sts')" scope="col" class="px-4 py-3 text-xs">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employe, index) in employees" :key="employe.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3">
                            {{index+1}}
                        </td>
                        <td class="px-3 py-3 text-sm">
                            {{employe.name}} <br/>
                        </td>
                        <td v-if="selectedRow.includes('jbt')" class="px-3 py-3 text-sm">
                            {{employe.jabatan}}
                        </td>
                        <td v-if="selectedRow.includes('jbf')" class="px-3 py-3 text-sm">
                            {{employe.jobfamily}}
                        </td>
                        <td v-if="selectedRow.includes('sjf')" class="px-3 py-3 text-sm">
                            {{employe.subJobFamily}}
                        </td>
                        <td v-if="selectedRow.includes('prn')" class="px-3 py-3 text-sm">
                            {{employe.perner}}
                        </td>
                        <td v-if="selectedRow.includes('sts')" class="px-3 py-3 text-sm">
                            <span class="text-white p-1 px-3 rounded-lg whitespace-nowrap" :class="{'bg-blue-600' : employe.status === 'Approved', 'bg-emerald-600' : employe.status === 'New'}">{{employe.status}}</span>
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
        id : 'jbt',
        row  : 'Jabatan',
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
        id : 'prn',
        row  : 'Perner',
    },
    {
        id : 'sts',
        row  : 'Status',
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

const employees = [
  {
    id: 1,
    name: "John Doe",
    jabatan: "Software Developer",
    jobfamily: "IT",
    subJobFamily: "Backend Developer",
    perner: "123456",
    status: "Approved",
  },
  {
    id: 2,
    name: "Jane Doe",
    jabatan: "Financial Analyst",
    jobfamily: "Finance",
    subJobFamily: "Financial Planning Analyst",
    perner: "654321",
    status: "Approved",
  },
  {
    id: 3,
    name: "Alice Smith",
    jabatan: "Mechanical Engineer",
    jobfamily: "Engineering",
    subJobFamily: "Mechanical Design Engineer",
    perner: "987654",
    status: "Approved",
  },
  {
    id: 4,
    name: "Bob Johnson",
    jabatan: "Marketing Specialist",
    jobfamily: "Marketing",
    subJobFamily: "Digital Marketing Specialist",
    perner: "456789",
    status: "Approved",
  },
  {
    id: 5,
    name: "Eva Williams",
    jabatan: "HR Generalist",
    jobfamily: "Human Resources",
    subJobFamily: "Recruitment Specialist",
    perner: "135790",
    status: "Approved",
  },
  {
    id: 6,
    name: "David Lee",
    jabatan: "Sales Representative",
    jobfamily: "Sales",
    subJobFamily: "Sales Manager",
    perner: "246801",
    status: "Approved",
  },
  {
    id: 7,
    name: "Catherine Brown",
    jabatan: "Accountant",
    jobfamily: "Finance",
    subJobFamily: "Financial Accountant",
    perner: "112233",
    status: "Approved",
  },
  {
    id: 8,
    name: "George Miller",
    jabatan: "Database Administrator",
    jobfamily: "IT",
    subJobFamily: "Database Analyst",
    perner: "445566",
    status: "Approved",
  },
  {
    id: 9,
    name: "Grace Davis",
    jabatan: "Electrical Engineer",
    jobfamily: "Engineering",
    subJobFamily: "Electrical Design Engineer",
    perner: "778899",
    status: "Approved",
  },
  {
    id: 10,
    name: "Frank Wilson",
    jabatan: "Digital Marketing Specialist",
    jobfamily: "Marketing",
    subJobFamily: "Content Marketing Specialist",
    perner: "112233",
    status: "Approved",
  },
  {
    id: 11,
    name: "Helen Anderson",
    jabatan: "Recruitment Specialist",
    jobfamily: "Human Resources",
    subJobFamily: "HR Manager",
    perner: "334455",
    status: "Approved",
  },
  {
    id: 12,
    name: "Ivan Garcia",
    jabatan: "Sales Manager",
    jobfamily: "Sales",
    subJobFamily: "Senior Sales Manager",
    perner: "556677",
    status: "Approved",
  },
  {
    id: 13,
    name: "Jessica Moore",
    jabatan: "Financial Controller",
    jobfamily: "Finance",
    subJobFamily: "Senior Financial Controller",
    perner: "889900",
    status: "Approved",
  },
  {
    id: 14,
    name: "Kevin Taylor",
    jabatan: "Network Administrator",
    jobfamily: "IT",
    subJobFamily: "Network Analyst",
    perner: "112233",
    status: "Approved",
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