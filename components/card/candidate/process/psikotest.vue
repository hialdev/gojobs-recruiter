
<template>
    <div class="p-5 bg-white rounded-lg">
        <div class="flex items-center justify-between mb-3 pb-4 border-b">
            <h4 class="text-lg font-medium">Detail</h4>
        </div>
        <div v-if="!edited" class="grid grid-cols-12">
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
                    <span class="font-medium text-sm whitespace-nowrap">Psikotest</span>
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
                <button @click="showUpload = true" class="mb-3 flex items-center gap-2 text-sm p-2 px-4 rounded-lg border border-slate-200">
                    Upload
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"/></svg>
                </button>
                <div class="flex items-center gap-2">
                    <button @click="rejectHandle" class="bg-rose-600 text-white p-2 px-4 rounded-lg">Reject</button>
                    <button @click="lolosHandle" class="bg-emerald-600 text-white p-2 px-4 rounded-lg">Lolos</button>
                </div>
            </div>
        </div>

        <div v-if="showUpload" class="fixed bg-black/20 top-0 end-0 start-0 bottom-0 flex items-center justify-center">
            <div class="p-4 rounded-lg bg-white w-[40em]">
                <div class="flex items-center justify-between">
                    <div class="font-medium">Psikotest Upload</div>
                    <div @click="showUpload = false" class="cursor-pointer flex items-center text-slate-500 hover:text-rose-500 justify-center w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z" clip-rule="evenodd"/></svg></div>
                </div>
                <div class="mb-3">
                    <div class="text-xs mb-2 text-slate-500">File Upload</div>
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" @change="fileHandle" type="file" class="hidden" />
                        </label>
                    </div>
                    <div v-if="file" class="flex items-center justify-between my-2 gap-2">
                        <div class="flex-1 p-1 px-3 rounded-lg bg-slate-100 text-slate-700 text-sm"><strong>File : </strong>{{ file.name }}</div>
                        <button class="p-1 px-3 text-sm rounded-lg bg-emerald-600 text-white">Upload</button>
                    </div>
                </div>
            </div>
        </div>

        <CardCalendarAdd v-if="showAddSchedule" :process="`psikotest`" @added="() => {addedSchedule = true; showAddSchedule = false}" @close="showAddSchedule = false" />

    </div>
</template>

<script setup>
import {usePICStore} from '@/stores/pic'
const addedSchedule = ref(false);
const showAddSchedule = ref(false);
const edited = ref(false);
const showUpload = ref(false);
const store = usePICStore();
const file = ref(null);

const emit = defineEmits(['reject', 'lolos']);

const rejectHandle = () => {
    emit('reject');
}
const lolosHandle = () => {
    emit('lolos');
}

const fileHandle = (event) => {
    const selectedFile = event.target.files[0];
    file.value = selectedFile;
    console.log('File yang dipilih:', selectedFile);
}
const pics = store.filteredPICs.map(pic => ({key: pic.id, value: `${pic.name} - ${pic.perner}` }))
</script>