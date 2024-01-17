<template>
    <div class="container mx-auto py-5">
        <h1 class="text-xl font-medium mb-3">Hiring Report</h1>
        <div class="grid grid-cols-12 gap-x-5">
            <div class="col-span-4">
                <div class="p-5 bg-white rounded-xl">   
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Priode Kontrak</div>
                        <div class="flex item-center w-full">
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                            <div class="p-2">to</div>
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Priode Resign</div>
                        <div class="flex item-center w-full">
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                            <div class="p-2">to</div>
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">SAP</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Jabatan</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Status</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Job Family</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Area ISH</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Kota</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Sub Job Family</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Region</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="ms-auto bg-emerald-600 text-white rounded-lg p-2 px-3 tex-sm">Search</button>
                        <button class="bg-slate-50 rounded-lg text-slate-800 p-2 px-3 tex-sm">Reset</button>
                    </div>
                </div>
            </div>
            <div class="col-span-8">
                <div class="mb-4 grid grid-cols-12 gap-x-4">
                    <div class="col-span-3">
                        <div class="p-5 rounded-lg bg-emerald-100 text-emerald flex flex-col items-center gap-3 mb-4">
                            <div class="text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"/></svg>
                            </div>
                            <span class="text-xs text-emerald-700">Total Job Order</span>
                            <div class="text-xl font-medium text-emerald-700">0</div>
                        </div>
                        <div class="p-5 rounded-lg bg-emerald-500 text-emerald flex flex-col items-center gap-3">
                            <div class="text-emerald-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M119.76 217.94A8 8 0 0 1 112 224a8.13 8.13 0 0 1-2-.24l-32-8a8 8 0 0 1-2.5-1.11l-24-16a8 8 0 1 1 8.88-13.31l22.84 15.23l30.66 7.67a8 8 0 0 1 5.88 9.7m132.69-96.46a15.89 15.89 0 0 1-8 9.25l-23.68 11.84l-15.08 15.09l-40 40a8 8 0 0 1-7.6 2.1l-64-16a8.06 8.06 0 0 1-2.71-1.25l-55.52-39.64l-24.28-12.14a16 16 0 0 1-7.16-21.46l24.85-49.69a16 16 0 0 1 21.46-7.16l22.06 11l53-15.14a8 8 0 0 1 4.4 0l53 15.14l22.06-11a16 16 0 0 1 21.46 7.16l24.85 49.69a15.9 15.9 0 0 1 .89 12.21M188 152.66l-27.71-22.19c-19.54 16-44.35 18.11-64.91 5a16 16 0 0 1-2.72-24.82a.6.6 0 0 1 .08-.08l44.86-43.51l-9.6-2.74l-50.42 14.41l-27.37 54.73l49.2 35.15l58.14 14.53Zm18.24-18.24L179.06 80h-31.82L104 122c12.66 8.09 32.51 10.32 50.32-7.63a8 8 0 0 1 10.68-.61l34.41 27.57Z"/></svg>
                            </div>
                            <span class="text-xs text-emerald-50">Total Hiring</span>
                            <div class="text-xl font-medium text-emerald-50">0</div>
                        </div>
                    </div>
                    <div class="col-span-9">
                        <div class="p-5 bg-white rounded-xl">
                            <div class="border-b pb-3 mb-3">
                                <div class="text-sm">Hired By Education</div>
                                <div class="text-xl font-medium">5.987,34</div>
                            </div>
                            <div class="max-h-[15em]">
                                <PolarArea :data="data" :options="options"/>
                            </div>
                        </div>
                    </div>
                </div>

                <CardReportHiring />
            </div>
        </div>

        
    </div>
</template>

<script setup>
import { PolarArea } from 'vue-chartjs'

const data = {
  labels: [
    'Elementary School',
    'Junior High School',
    'Senior High School',
    'Associate Degree',
    'Bachelor Degree',
    'Master Degree',
    'Doctoral Degree'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: [
        '#C30C0C78',
        '#41806D78',
        '#1685D678',
        '#FFCF2378',
        '#FF7F0078',
        '#C4C4C478',
        '#3F3F3F78'
      ],
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins : {
    legend: {
      position: 'right',
      fullWidth: true,
      maintainAspectRatio: false,
    },
  }
}

</script>