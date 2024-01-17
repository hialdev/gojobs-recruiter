<template>
    <div class="container mx-auto py-5">
        <h1 class="text-xl font-medium mb-3">Job Order Report</h1>
        <div class="p-5 bg-white rounded-xl">   
            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-4">
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Priode Create Job Order</div>
                        <div class="flex item-center w-full">
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                            <div class="p-2">to</div>
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Type JO</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Personal Area</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                </div>
                <div class="col-span-4">
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
                </div>
                <div class="col-span-4">
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
                </div>
                <div class="col-span-12">
                    <div class="flex items-center gap-3">
                        <button class="ms-auto bg-emerald-600 text-white rounded-lg p-2 px-3 tex-sm">Search</button>
                        <button class="bg-slate-50 rounded-lg text-slate-800 p-2 px-3 tex-sm">Reset</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-4 grid grid-cols-12 gap-x-4">
            <div class="col-span-3">
                <div class="p-5 rounded-lg bg-emerald-100 text-emerald flex flex-col items-center gap-3">
                    <div class="text-emerald-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"/></svg>
                    </div>
                    <span class="text-xs text-emerald-700">Total Job Order</span>
                    <div class="text-xl font-medium text-emerald-700">0</div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="p-5 rounded-lg bg-emerald-200 text-emerald flex flex-col items-center gap-3">
                    <div class="text-emerald-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 19H7v-9h2zm4 0h-2v-6h2zm4 0h-2v-3h2zM14 9h-1V4l5 5z"/></svg>
                    </div>
                    <span class="text-xs text-emerald-700">Total Pelamar</span>
                    <div class="text-xl font-medium text-emerald-700">0</div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="p-5 rounded-lg bg-emerald-500 text-emerald flex flex-col items-center gap-3">
                    <div class="text-emerald-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M119.76 217.94A8 8 0 0 1 112 224a8.13 8.13 0 0 1-2-.24l-32-8a8 8 0 0 1-2.5-1.11l-24-16a8 8 0 1 1 8.88-13.31l22.84 15.23l30.66 7.67a8 8 0 0 1 5.88 9.7m132.69-96.46a15.89 15.89 0 0 1-8 9.25l-23.68 11.84l-15.08 15.09l-40 40a8 8 0 0 1-7.6 2.1l-64-16a8.06 8.06 0 0 1-2.71-1.25l-55.52-39.64l-24.28-12.14a16 16 0 0 1-7.16-21.46l24.85-49.69a16 16 0 0 1 21.46-7.16l22.06 11l53-15.14a8 8 0 0 1 4.4 0l53 15.14l22.06-11a16 16 0 0 1 21.46 7.16l24.85 49.69a15.9 15.9 0 0 1 .89 12.21M188 152.66l-27.71-22.19c-19.54 16-44.35 18.11-64.91 5a16 16 0 0 1-2.72-24.82a.6.6 0 0 1 .08-.08l44.86-43.51l-9.6-2.74l-50.42 14.41l-27.37 54.73l49.2 35.15l58.14 14.53Zm18.24-18.24L179.06 80h-31.82L104 122c12.66 8.09 32.51 10.32 50.32-7.63a8 8 0 0 1 10.68-.61l34.41 27.57Z"/></svg>
                    </div>
                    <span class="text-xs text-emerald-50">Total Hiring</span>
                    <div class="text-xl font-medium text-emerald-50">0</div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="p-5 rounded-lg bg-emerald-700 text-emerald flex flex-col items-center gap-3">
                    <div class="text-emerald-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m7.5 3a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-13.5 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0m4.06 5.368A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498a.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75a12.69 12.69 0 0 1-6.337-1.684a.75.75 0 0 1-.372-.568a6.787 6.787 0 0 1 1.019-4.38" clip-rule="evenodd"/><path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135a9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047m15.144 5.135a8.287 8.287 0 0 0-1.308-5.135a3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441"/></g></svg>
                    </div>
                    <span class="text-xs text-emerald-50">Total Kebutuhan</span>
                    <div class="text-xl font-medium text-emerald-50">0</div>
                </div>
            </div>
        </div>

        <CardReportJobOrder />
    </div>
</template>