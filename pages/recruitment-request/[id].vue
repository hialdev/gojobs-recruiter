<template>
    <div class="container mx-auto py-5">
        <NuxtLink to="/recruitment-request" class="flex items-center gap-4 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg>
            <span class="font-medium">Recruitment Request : 030170/ISH/01010107/2023</span>
        </NuxtLink>
        <div v-if="role != 3" class="grid grid-cols-12 gap-x-5">
            <div class="col-span-4 order-last">
                <div class="p-5 rounded-lg bg-white">
                    <div class="mb-3">
                        <div class="text-xs mb-2">Alasan Stop JO / Nama</div>
                        <PartialFormSelect :label="`Alasan Stop JO`" :customClass="`shadow-none border-2`" />
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2">Jumlah kebutuhan yang di stop untuk NO JO tersebut</div>
                        <input type="number" name="" id="" class="w-full border-2 border-slate-200 rounded-lg p-2 px-4 text-sm focus:ring-emerald-600/20 focus:border-emerald-600">
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2">Bukti</div>
                        <input class="block w-full text-sm text-gray-900 border-2 border-slate-200 rounded-lg cursor-pointer bg-white focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                        <p class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">pdf, docx, jpg, jpeg, xls (MAX. 1 mb).</p>
                    </div>
                    <div class="mb-3">
                        <div class="text-xs mb-2">Note</div>
                        <textarea name="" id="" cols="30" rows="4" class="w-full text-sm p-2 px-4 border-2 focus:border-emerald-600 focus:ring-emerald-600 rounded-lg border-slate-200"></textarea>
                    </div>
                    <div class="mt-4 flex items-center gap-3">
                        <button class="p-2 px-4 rounded-lg bg-emerald-600 text-white text-sm">Submit</button>
                    </div>
                </div>
            </div>
            <div class="col-span-8">
                <div class="p-5 bg-white rounded-lg">
                    <h3 class="text-lg font-medium pb-3 border-b mb-3">Personal Informasi</h3>
                    <div class="border-2 border-slate-200 rounded-lg overflow-hidden">
                        <table class="w-full">
                            <tr class="text-sm bg-slate-50">
                                <th class="p-2 px-4 font-medium text-start">Perner</th>
                                <td class="p-2 px-4">132246</td>
                            </tr>
                            <tr class="text-sm ">
                                <th class="p-2 px-4 font-medium text-start">Nama</th>
                                <td class="p-2 px-4">Eka Saputra</td>
                            </tr>
                            <tr class="text-sm bg-slate-50">
                                <th class="p-2 px-4 font-medium text-start">Personal Area</th>
                                <td class="p-2 px-4">TELKOM TAM DCS CC</td>
                            </tr>
                            <tr class="text-sm ">
                                <th class="p-2 px-4 font-medium text-start">Area</th>
                                <td class="p-2 px-4">MEDAN</td>
                            </tr>
                            <tr class="text-sm bg-slate-50">
                                <th class="p-2 px-4 font-medium text-start">Skill Layanan</th>
                                <td class="p-2 px-4">OB_TLH</td>
                            </tr>
                            <tr class="text-sm ">
                                <th class="p-2 px-4 font-medium text-start">Payroll Area</th>
                                <td class="p-2 px-4">ANTERAJA ISH-SBY</td>
                            </tr>
                            <tr class="text-sm bg-slate-50">
                                <th class="p-2 px-4 font-medium text-start">Jabatan</th>
                                <td class="p-2 px-4">AGENT</td>
                            </tr>
                            <tr class="text-sm ">
                                <th class="p-2 px-4 font-medium text-start">Level</th>
                                <td class="p-2 px-4">TELKOM TAM DCS CC</td>
                            </tr>
                            <tr class="text-sm bg-slate-50">
                                <th class="p-2 px-4 font-medium text-start">Hiring From</th>
                                <td class="p-2 px-4">Gojobs</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <BlockActionRecreqView v-if="role == 3" />
    </div>

</template>

<script setup>
const role = localStorage.getItem('role');
</script>