<template>
    <div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-[8px] border-slate-50">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Nama
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Status
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Req Date
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            App Date
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Perner
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            PIC
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            No JO
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Area SAP
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Jabatan
                        </th>
                        <th scope="col" class="px-4 py-3 text-xs">
                            Status SAP
                        </th>
                    </tr>
                    <tr>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                        <td class="p-1">
                            <PartialFormSearch />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="hiring in reportHirings" :key="hiring.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-3 py-3 text-xs">
                            {{hiring.name}} <br/>
                        </td>
                        <td class="px-3 py-3 text-xs">
                            <span class="p-1 px-2 border" :class="{'text-emerald-600 border-emerald-600': hiring.status === 'Approved', 'text-yellow-400 border-yellow-400': hiring.status === 'Waiting'}">{{hiring.status}}</span>
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.requestDate}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.applyDate}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.perner}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.pic}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.noJO}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.areaSAP}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.jabatan}}
                        </td>
                        <td class="px-3 py-3 text-xs">
                            {{hiring.statusSAP}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>

const reportHirings = [
  {
    id: 1,
    name: "John Doe",
    status: "Approved",
    requestDate: "20/11/2023 10:30",
    applyDate: "01/12/2023 08:45",
    perner: "123456",
    pic: "HR Manager",
    noJO: "029788/ISH/01010101/2023",
    areaSAP: "DKI Jakarta",
    jabatan: "Manager",
    statusSAP: "Successfull"
  },
  {
    id: 2,
    name: "Jane Doe",
    status: "Waiting",
    requestDate: "20/11/2023 09:15",
    applyDate: "15/11/2023 14:20",
    perner: "654321",
    pic: "Recruitment Officer",
    noJO: "029788/ISH/01010102/2023",
    areaSAP: "Jawa Barat",
    jabatan: "Senior Engineer",
    statusSAP: "Pending"
  },
  {
    id: 3,
    name: "Alice Smith",
    status: "Approved",
    requestDate: "14/11/2023 11:45",
    applyDate: "20/11/2023 16:30",
    perner: "987654",
    pic: "HR Coordinator",
    noJO: "029788/ISH/01010103/2023",
    areaSAP: "Banten",
    jabatan: "Marketing Specialist",
    statusSAP: "Successfull"
  },
  {
    id: 4,
    name: "Bob Johnson",
    status: "Waiting",
    requestDate: "14/11/2023 13:20",
    applyDate: "05/12/2023 09:55",
    perner: "456789",
    pic: "Head of Finance",
    noJO: "029788/ISH/01010104/2023",
    areaSAP: "Jawa Tengah",
    jabatan: "Finance Analyst",
    statusSAP: "Pending"
  },
  {
    id: 5,
    name: "Eva Williams",
    status: "Approved",
    requestDate: "13/11/2023 14:30",
    applyDate: "25/11/2023 12:10",
    perner: "135790",
    pic: "IT Manager",
    noJO: "029788/ISH/01010105/2023",
    areaSAP: "Sumatra Utara",
    jabatan: "Software Developer",
    statusSAP: "Successfull"
  },
  {
    id: 6,
    name: "David Lee",
    status: "Waiting",
    requestDate: "13/11/2023 16:45",
    applyDate: "10/12/2023 11:30",
    perner: "246801",
    pic: "HR Specialist",
    noJO: "029788/ISH/01010106/2023",
    areaSAP: "Kalimantan Barat",
    jabatan: "HR Specialist",
    statusSAP: "Pending"
  },
  {
    id: 7,
    name: "Catherine Brown",
    status: "Approved",
    requestDate: "12/11/2023 10:15",
    applyDate: "02/12/2023 08:40",
    perner: "112233",
    pic: "Sales Director",
    noJO: "029788/ISH/01010107/2023",
    areaSAP: "Sulawesi Selatan",
    jabatan: "Sales Manager",
    statusSAP: "Successfull"
  },
  {
    id: 8,
    name: "George Miller",
    status: "Waiting",
    requestDate: "12/11/2023 12:30",
    applyDate: "15/12/2023 10:05",
    perner: "445566",
    pic: "QA Manager",
    noJO: "029788/ISH/01010108/2023",
    areaSAP: "Nusa Tenggara Timur",
    jabatan: "Quality Assurance Analyst",
    statusSAP: "Pending"
  },
  {
    id: 9,
    name: "Grace Davis",
    status: "Approved",
    requestDate: "11/11/2023 11:30",
    applyDate: "09/11/2023 14:25",
    perner: "778899",
    pic: "IT Director",
    noJO: "029788/ISH/01010109/2023",
    areaSAP: "Maluku",
    jabatan: "Customer Support Specialist",
    statusSAP: "Successfull"
  },
  {
    id: 10,
    name: "Frank Wilson",
    status: "Waiting",
    requestDate: "11/11/2023 13:45",
    applyDate: "03/12/2023 09:50",
    perner: "112233",
    pic: "Logistics Manager",
    noJO: "029788/ISH/01010110/2023",
    areaSAP: "Papua Barat",
    jabatan: "Logistics Coordinator",
    statusSAP: "Pending"
  },
  {
    id: 11,
    name: "Helen Anderson",
    status: "Approved",
    requestDate: "10/11/2023 15:10",
    applyDate: "11/11/2023 12:45",
    perner: "334455",
    pic: "COO",
    noJO: "029788/ISH/01010111/2023",
    areaSAP: "Aceh",
    jabatan: "Operations Manager",
    statusSAP: "Successfull"
  },
  {
    id: 12,
    name: "Ivan Garcia",
    status: "Waiting",
    requestDate: "10/11/2023 17:25",
    applyDate: "12/12/2023 08:30",
    perner: "556677",
    pic: "IT Manager",
    noJO: "029788/ISH/01010112/2023",
    areaSAP: "Sulawesi Tengah",
    jabatan: "IT Specialist",
    statusSAP: "Pending"
  },
  {
    id: 13,
    name: "Jessica Moore",
    status: "Approved",
    requestDate: "09/11/2023 09:45",
    applyDate: "13/11/2023 15:20",
    perner: "889900",
    pic: "Research Director",
    noJO: "029788/ISH/01010113/2023",
    areaSAP: "Bangka Belitung",
    jabatan: "Research Scientist",
    statusSAP: "Successfull"
  },
  {
    id: 14,
    name: "Kevin Taylor",
    status: "Waiting",
    requestDate: "09/11/2023 11:50",
    applyDate: "14/12/2023 10:15",
    perner: "112233",
    pic: "CEO",
    noJO: "029788/ISH/01010114/2023",
    areaSAP: "Lampung",
    jabatan: "CEO",
    statusSAP: "Pending"
  }
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