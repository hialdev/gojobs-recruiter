<template>
    <div class="container mx-auto py-5">
        <div class="grid grid-cols-12 gap-x-5">
            <div class="col-span-8">
                <div class="mb-3 p-5 bg-emerald-600 text-white rounded-xl overflow-hidden relative">
                    <div class="max-w-[25em]">
                        <div class="text-base">Hello, Nisa!</div>
                        <div class="text-xl font-medium">
                            Anda memiliki 2 pelamar baru hari ini Yuk review sekarang!
                        </div>
                    </div>
                    <NuxtImg src="/image/dashboard_decoration.png" class="block absolute end-0 top-0 bottom-0 h-full" />
                </div>
                <div class="p-5 bg-white rounded-xl mb-3">
                    <div class="flex items-center gap-6 border-b pb-3 mb-3">
                        <h5 class="text-lg font-medium text-emerald-600 m-0">Hiring Pipeline</h5>
                        <select name="" id="" class="p-2 px-4 rounded-lg bg-emerald-100 text-emerald-700 border-0 active:border-0">
                            <option selected>Terbaru</option>
                            <option>Terlama</option>
                        </select>
                        <NuxtLink to="/job" class="ms-auto text-emerald-600 underline">View All Task</NuxtLink>
                    </div>
                    <table class="w-full mt-6">
                        <tr>
                            <th class="text-start text-emerald-700 text-xs py-3 font-medium w-[10.2%] px-3">Job</th>
                            <th class="text-center bg-emerald-100 text-emerald-800 text-xs w-[10.2%] px-3">Screening</th>
                            <th class="text-center bg-emerald-200 text-emerald-800 text-xs w-[10.2%] px-3">Psikotest</th>
                            <th class="text-center bg-emerald-300 text-emerald-800 text-xs w-[10.2%] px-3">Interview HR</th>
                            <th class="text-center bg-emerald-400 text-emerald-50 text-xs w-[10.2%] px-3">Interview User</th>
                            <th class="text-center bg-emerald-500 text-emerald-50 text-xs w-[10.2%] px-3">Peralihan</th>
                            <th class="text-center bg-emerald-600 text-emerald-50 text-xs w-[10.2%] px-3">Reject</th>
                            <th class="text-center bg-emerald-700 text-emerald-50 text-xs w-[10.2%] px-3">Hiring</th>
                        </tr>
                        <tr @click="navigateTo('job/1')" class="group cursor-pointer">
                            <td>
                                <div class="group-hover:text-emerald-600 text-sm font-medium">Promotor Elektronik</div>
                                <div class="group-hover:text-emerald-800 text-xs text-slate-500">030149/ISH/01010107/2023</div>
                            </td>
                            <td>
                                <div class="text-xs text-center py-4 w-full rounded-lg">5</div>
                            </td>
                            <td>
                                <div class="text-xs text-center py-4 w-full rounded-lg">5</div>
                            </td>
                            <td>
                                <div class="text-xs text-center py-4 w-full rounded-lg">5</div>
                            </td>
                            <td>
                                <div class="text-xs text-center py-4 w-full rounded-lg">5</div>
                            </td>
                            <td>
                                <div class="text-xs text-center py-4 w-full rounded-lg">5</div>
                            </td>
                            <td>
                                <div class="text-xs text-center py-4 w-full rounded-lg">5</div>
                            </td>
                            <td>
                                <div class="text-xs text-center py-4 w-full rounded-lg">5</div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="mb-3">
                    <div class="p-5 flex items-center justify-between bg-white rounded-lg mb-2">
                        <div class="font-medium text-emerald-600">My Task</div>
                        <button @click="showAddSchedule = true" class="flex items-center text-sm gap-2 py-2 px-4 rounded-lg bg-emerald-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5z"/></svg>
                            Add Schedule
                        </button>
                    </div>
                    <div class="mb-2 flex items-center py-3 border-l-2 border-emerald-600 rounded bg-white">
                        <div class="flex items-center gap-2 text-slate-500 text-xs px-5 border-r">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48"/></g></svg>
                            08:32 - 12:23
                        </div>
                        <div class="text-sm px-5">Kamu memiliki jadwal <span class="text-emerald-600">Interview HR</span> pada job <span class="font-medium">Admin Warehouse (029788/ISH/01010107/2023)</span> </div>
                    </div>
                </div>
            </div>
            <div class="col-span-4">
                <div class="bg-white rounded-xl flex items-center mb-3">
                    <div class="p-5 flex items-center gap-2 flex-auto border-r-2">
                        <div class="flex items-center justify-center p-2 rounded-3xl bg-emerald-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="9" r="4" fill="currentColor"/><circle cx="17" cy="9" r="3" fill="currentColor"/><circle cx="7" cy="9" r="3" fill="currentColor"/><path fill="currentColor" fill-rule="evenodd" d="M17.569 18h2.326c.592 0 1.045-.51.902-1.084C20.428 15.446 19.448 13 17 13c-.886 0-1.58.32-2.122.8c1.508.977 2.287 2.69 2.69 4.2m-8.446-4.2A3.11 3.11 0 0 0 7 13c-2.448 0-3.428 2.446-3.797 3.916c-.143.574.31 1.084.902 1.084h2.327c.403-1.51 1.182-3.223 2.69-4.2" clip-rule="evenodd"/><path fill="currentColor" d="M12 14c3.709 0 4.666 3.301 4.914 5.006c.08.547-.362.994-.914.994H8c-.552 0-.993-.447-.914-.994C7.334 17.301 8.291 14 12 14"/></svg>
                        </div>
                        <div>
                            <div class="text-xs text-slate-500">Total Pelamar</div>
                            <div class="text-lg font-medium text-emerald-600">329</div>
                        </div>
                    </div>
                    <div class="p-5 flex items-center gap-2 flex-auto">
                        <div class="flex items-center justify-center p-2 rounded-3xl bg-emerald-100 text-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M119.76 217.94A8 8 0 0 1 112 224a8.13 8.13 0 0 1-2-.24l-32-8a8 8 0 0 1-2.5-1.11l-24-16a8 8 0 1 1 8.88-13.31l22.84 15.23l30.66 7.67a8 8 0 0 1 5.88 9.7m132.69-96.46a15.89 15.89 0 0 1-8 9.25l-23.68 11.84l-15.08 15.09l-40 40a8 8 0 0 1-7.6 2.1l-64-16a8.06 8.06 0 0 1-2.71-1.25l-55.52-39.64l-24.28-12.14a16 16 0 0 1-7.16-21.46l24.85-49.69a16 16 0 0 1 21.46-7.16l22.06 11l53-15.14a8 8 0 0 1 4.4 0l53 15.14l22.06-11a16 16 0 0 1 21.46 7.16l24.85 49.69a15.9 15.9 0 0 1 .89 12.21M188 152.66l-27.71-22.19c-19.54 16-44.35 18.11-64.91 5a16 16 0 0 1-2.72-24.82a.6.6 0 0 1 .08-.08l44.86-43.51l-9.6-2.74l-50.42 14.41l-27.37 54.73l49.2 35.15l58.14 14.53Zm18.24-18.24L179.06 80h-31.82L104 122c12.66 8.09 32.51 10.32 50.32-7.63a8 8 0 0 1 10.68-.61l34.41 27.57Z"/></svg>
                        </div>
                        <div>
                            <div class="text-xs text-slate-500">Total Hiring</div>
                            <div class="text-lg font-medium text-emerald-600">6</div>
                        </div>
                    </div>
                </div>
                <div class="p-5 rounded-xl bg-white mb-3">
                    <div class="flex items-center justify-between pb-3 border-b mb-3">
                        <div class="font-medium text-emerald-600">Jobs Summary</div>
                        <select name="" id="" class="p-2 px-4 rounded-lg bg-emerald-100 text-emerald-700 border-0 active:border-0">
                            <option selected>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div class="relative">
                        <div class="relative z-[99] h-[20em]">
                            <Doughnut :data="data" :options="options"/>
                        </div>
                        <div class="absolute top-0 end-0 start-0 bottom-0 flex flex-col items-center justify-center text-center">
                            <div class="text-2xl font-medium mt-12">39</div>
                            <p class="text-sm text-slate-500">Total Jobs</p>
                        </div>
                    </div>
                </div>
                <table class="w-full rounded-xl overflow-hidden">
                    <tr class="bg-emerald-100 text-emerald-700">
                        <th class="text-start p-3 px-5 text-sm font-medium">Recuirtment Process</th>
                        <th class="text-start text-sm font-medium">Total</th>
                    </tr>
                    <template v-for="data in processData" :key="data.id">
                        <tr class="border-b bg-white">
                            <th class="text-start p-3 px-5 text-sm font-medium">{{data.process}}</th>
                            <td><span class="p-1 px-2 rounded-lg text-white text-sm" :style="{backgroundColor : `${data.color}`}">{{data.total}}</span></td>
                        </tr>
                        <tr class="border-b bg-white">
                            <td class="text-start p-3 px-5 text-sm text-slate-500">On Process</td>
                            <td><span class="text-sm text-blue-600">{{data.on}}</span></td>
                        </tr>
                        <tr class="border-b bg-white">
                            <td class="text-start p-3 px-5 text-sm text-slate-500">Pass</td>
                            <td><span class="text-sm text-emerald-600">{{data.pass}}</span></td>
                        </tr>
                        <tr class="border-b bg-white">
                            <td class="text-start p-3 px-5 text-sm text-slate-500">Fail</td>
                            <td><span class="text-sm text-rose-600">{{data.fail}}</span></td>
                        </tr>
                    </template>
                </table>
            </div>
        </div>

        <CardCalendarAdd v-if="showAddSchedule" @close="showAddSchedule = false" />
    </div>
</template>

<script lang="ts" setup>
import { Doughnut } from 'vue-chartjs'
const showAddSchedule = ref(false);
const data = ref({
    labels: [
        'Published',
        'Draft',
        'Closed',
        'Internal'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 50],
        backgroundColor: [
            '#10b981',
            '#f7f7f7',
            '#fb7185',
            '#fdba74'
        ],
        hoverOffset: 4
    }]

})

const options = ref({
  responsive: true,
  maintainAspectRatio: false
})

const processData = [
    {
        id: 1,
        process : 'Psikotest',
        color : '#fb7185',
        total : 226,
        on : 176,
        pass : 32,
        fail : 18,
    },
    {
        id: 2,
        process : 'Interview HR',
        color : '#fdba74',
        total : 226,
        on : 176,
        pass : 32,
        fail : 18,
    },
    {
        id: 3,
        process : 'Interview User',
        color : '#10b981',
        total : 226,
        on : 176,
        pass : 32,
        fail : 18,
    },
]
</script>
