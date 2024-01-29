
<template>
    <div class="p-5 bg-white rounded-lg">
        <div class="flex items-center justify-between mb-3 pb-4 border-b">
            <h4 class="text-lg font-medium">Detail</h4>
        </div>
        <div class="grid grid-cols-12">
            <div class="col-span-6">
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Current Status</span>
                    <div class="flex items-center gap-2">
                        <span class="p-1 px-3 rounded-lg text-sm uppercase" :class="{'bg-yellow-100 text-yellow-400' : !addedSchedule, 'bg-blue-600 text-white' : addedSchedule}">{{ addedSchedule ? 'On Process' : 'Waiting Schedule'}}</span>
                        <button v-if="!addedSchedule" class="flex items-center justify-center gap-2 text-sm px-2 py-1 rounded-lg bg-emerald-600 text-white" @click="showAddSchedule = true"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2m-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25z" clip-rule="evenodd"/></svg> Add</button>
                    </div>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Stage</span>
                    <span class="font-medium text-sm whitespace-nowrap">Interview HR</span>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                    <span class="font-medium text-sm whitespace-nowrap">28 Nov 2023</span>
                </div>
            </div>
            <div class="col-span-6">
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                    <div class="flex items-center gap-3">
                        <NuxtImg src="https://placeholder.co/70" alt="Image Asignee" class="block rounded-3xl w-[40px] h-[40px]" />
                        <span class="font-medium text-sm">Name Surname</span>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button @click="showForm = true" class="text-slate-700 hover:text-emerald-600 mb-3 flex items-center gap-2 text-sm p-2 px-4 rounded-lg border border-slate-200">
                        Form
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h6v2h-6zM9 7H7v2h2zm2 6h6v-2h-6zm0-4h6V7h-6zm-2 2H7v2h2zm12-6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-2 0H5v14h14zM9 15H7v2h2z"/></svg>
                    </button>
                    <button @click="showForm = true" class="text-slate-700 hover:text-emerald-600 mb-3 flex items-center justify-center gap-2 text-sm w-[30px] h-[30px] rounded-lg bg-emerald-100 text-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/></svg>
                    </button>
                </div>
                <div class="flex items-center gap-2">
                    <button @click="rejectHandle" class="bg-rose-600 text-white p-2 px-4 rounded-lg">Reject</button>
                    <button @click="lolosHandle" class="bg-emerald-600 text-white p-2 px-4 rounded-lg">Lolos</button>
                </div>
            </div>
        </div>

        <div v-if="showForm" class="fixed bg-black/20 top-0 end-0 start-0 bottom-0 flex items-center justify-center">
            <div class="p-4 rounded-lg bg-white w-[50em] max-h-[88vh] overflow-auto">
                <div class="flex items-center justify-between mb-3">
                    <div class="font-medium">Form Interview HR</div>
                    <div @click="showForm = false" class="cursor-pointer flex items-center text-slate-500 hover:text-rose-500 justify-center w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z" clip-rule="evenodd"/></svg></div>
                </div>
                <div class="grid grid-cols-12 gap-3">
                    <div class="col-span-6">
                        <div class="text-xs text-slate-500 mb-1">Nama Pelamar</div>
                        <div class="p-2 px-4 rounded-lg bg-slate-100 text-slate-700 text-sm">Budi Utama</div>
                    </div>
                    <div class="col-span-6">
                        <div class="text-xs text-slate-500 mb-1">Form Type</div>
                        <PartialFormSelect :label="`Form Type`" :options="[{key : 1, value : 'Sales Mobile'}]" :customClass="`shadow-none border border-slate-200 rounded-lg`" />
                    </div>
                    <div class="col-span-12">
                        <div class="text-xs text-slate-500 mb-1">Posisi</div>
                        <PartialFormSelect :label="`Posisi`" :options="[{key: 1, value: `029404/ISH/01010107/2023 - Account Management - Jakarta`}]" :customClass="`shadow-none border border-slate-200 rounded-lg`" />
                    </div>
                    <div class="col-span-12">
                        <div class="font-medium text-xs mb-2 mt-3">Skala : K (Kurang), C (Cukup), B (Baik), T (Tinggi)</div>
                        <table class="w-full border rounded-lg">
                            <tr>
                                <th class="p-2 px-3 font-medium text-xs">#</th>
                                <th class="text-start p-2 px-3 font-medium text-xs">Aspek Penilaian</th>
                                <th class="text-start p-2 px-3 font-medium text-xs">Nilai</th>
                                <th class="text-start p-2 px-3 font-medium text-xs">Deskripsi</th>
                            </tr>
                            <template v-for="(asses, index) in assesments" :key="asses.id">
                                <tr>
                                    <td colspan="6" class="p-2 px-3 font-medium text-xs bg-slate-100 text-slate-700">{{asses.aspect}}</td>
                                </tr>
                                <template v-for="(question, index) in asses.questions" :key="question.id">
                                    <tr>
                                        <th class="p-2 px-3 font-medium text-xs">
                                            {{ index+1 }}
                                        </th>
                                        <td class="p-2 px-3 font-medium text-xs">
                                            {{ question.text }}
                                        </td>
                                        <td class="p-2 px-3">
                                            <div class="flex items-center gap-2">
                                                <div class="flex flex-col items-center">
                                                    <input checked id="default-radio-2" type="radio" value="" :name="`nilai_${asses.id}_${question.id}`" class="block w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 focus:ring-emerald-500 focus:ring-2">
                                                    <label for="default-radio-2" class="block text-xs font-medium text-gray-900">K</label>
                                                </div>
                                                <div class="flex flex-col items-center">
                                                    <input checked id="default-radio-2" type="radio" value="" :name="`nilai_${asses.id}_${question.id}`" class="block w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 focus:ring-emerald-500 focus:ring-2">
                                                    <label for="default-radio-2" class="block text-xs font-medium text-gray-900">C</label>
                                                </div>
                                                <div class="flex flex-col items-center">
                                                    <input checked id="default-radio-2" type="radio" value="" :name="`nilai_${asses.id}_${question.id}`" class="block w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 focus:ring-emerald-500 focus:ring-2">
                                                    <label for="default-radio-2" class="block text-xs font-medium text-gray-900">B</label>
                                                </div>
                                                <div class="flex flex-col items-center">
                                                    <input checked id="default-radio-2" type="radio" value="" :name="`nilai_${asses.id}_${question.id}`" class="block w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 focus:ring-emerald-500 focus:ring-2">
                                                    <label for="default-radio-2" class="block text-xs font-medium text-gray-900">T</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-2 px-3 text-sm">{{question.desc}}</td>
                                    </tr>
                                </template>
                            </template>
                        </table>
                    </div>
                    <div class="col-span-12">
                        <div class="mb-3">
                            <div class="text-xs mb-2 text-slate-500">Interview Result</div>
                            <textarea name="" id="" placeholder="Ringkasan hasil wawancara disertai alasannya, berdasarkan pengalaman / pendidikan / keterampilan pelamar" cols="30" rows="4" class="w-full text-sm p-2 px-4 rounded-lg border border-slate-200"></textarea>
                        </div>
                        <div class="mb-3">
                            <div class="text-xs mb-2 text-slate-500">Interview Result</div>
                            <select name="" id="" class="p-2 mb-2 px-4 text-slate-700 w-full text-sm rounded-lg border border-slate-200">
                                <option selected>-- Result --</option>
                                <option>Pass</option>
                                <option>Failed</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center justify-end gap-2">
                    <button @click="showForm = false" class="p-2 px-4 text-sm rounded-lg bg-emerald-600 text-white">Confirm</button>
                    <button @click="showForm = false" class="p-2 px-4 text-sm rounded-lg bg-slate-100 text-slate-700">Batal</button>
                </div>
            </div>
        </div>

        <CardCalendarAdd v-if="showAddSchedule" :process="`interview`" @added="() => {addedSchedule = true; showAddSchedule = false}" @close="showAddSchedule = false" />
        
    </div>
</template>

<script setup>
import {usePICStore} from '@/stores/pic'
const showAddSchedule = ref(false);
const addedSchedule = ref(false);
const showForm = ref(false);
const file = ref(null);
const emit = defineEmits(['reject', 'lolos']);

const rejectHandle = () => {
    emit('reject');
}
const lolosHandle = () => {
    emit('lolos');
}

const assesments = [
    {
        id: 1,
        aspect : 'Penampilan',
        questions : [
            {
                id: 1,
                text: 'Penampilan fisik yang cukup proporsional, keserasian, dan kerapian berpakaian sesuai dengan suasana kerja',
                desc: 'xxx',
                value: '',
            },
            {
                id: 2,
                text: 'Menunjukkan sikap/perilaku yang sopan dan ramah, optimis, rasa ingin tahu dan percaya diri',
                desc: 'xxx',
                value: '',
            },
            {
                id: 3,
                text: 'Cara berpakaian, make up dan aksesoris (khusus perempuan), dan sepatu, yang sesuai dengan suasana kerja',
                desc: 'xxx',
                value: '',
            },
        ]
    },
    {
        id: 2,
        aspect : 'Suara / Komunikasi',
        questions : [
            {
                id: 1,
                text: 'Menunjukkan artikulasi kata yang tepat dan jelas, serta dapat menjaga intonasi suara, kecepatan berbicara dan volume dengan baik',
                desc: 'xxx',
                value: '',
            },
            {
                id: 2,
                text: 'Mendengar secara aktif pembicaraan yang disampaikan orang lain dan mampu memberikan respon yang sesuai untuk mengembangkan dialog',
                desc: 'xxx',
                value: '',
            },
            {
                id: 3,
                text: 'Menyampaikan informasi secara lisan dan efisien dengan tata bahasa yang benar',
                desc: 'xxx',
                value: '',
            },
            {
                id: 4,
                text: 'Menggunakan komunikasi non-verbal (body language) untuk memperjelas apa yang disampaikan secara tepat',
                desc: 'xxx',
                value: '',
            },
            
        ]
    }
]

const fileHandle = (event) => {
    const selectedFile = event.target.files[0];
    file.value = selectedFile;
    console.log('File yang dipilih:', selectedFile);
}
</script>