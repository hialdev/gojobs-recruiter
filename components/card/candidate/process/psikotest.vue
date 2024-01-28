
<template>
    <div class="p-5 bg-white rounded-lg">
        <div class="flex items-center justify-between mb-3 pb-4 border-b">
            <h4 class="text-lg font-medium">Detail</h4>
            <button v-if="!edited" @click="edited = true" class="flex items-center gap-3 text-sm text-emerald-600"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"/></svg> Edit</button>
            <button v-if="edited" @click="edited = false" class="flex items-center gap-3 text-sm bg-emerald-600 text-white p-1 px-2 rounded-lg">Save</button>
        </div>
        <div v-if="!edited" class="grid grid-cols-12">
            <div class="col-span-6">
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Current Status</span>
                    <span class="p-1 px-3 rounded-lg bg-emerald-600 text-white text-sm uppercase">Pass</span>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Stage</span>
                    <span class="font-medium text-sm whitespace-nowrap">Psikotest</span>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                    <span class="font-medium text-sm whitespace-nowrap">28 Nov - 08 Des 2023</span>
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
                <div class="cursor-pointer flex items-center gap-3 mb-2 p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                    <div class="flex-1 me-auto text-xs line-clamp-1 text-emerald-600">File_Name_In_this_title_of_file.pdf</div>
                    <button class="ms-auto flex items-center justify-center w-[20px] h-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></svg></button>
                </div>
                <div class="flex items-center gap-2">
                    <button @click="rejectHandle" class="bg-rose-600 text-white p-2 px-4 rounded-lg">Reject</button>
                    <button @click="lolosHandle" class="bg-emerald-600 text-white p-2 px-4 rounded-lg">Lolos</button>
                </div>
            </div>
        </div>

        <div v-if="edited" class="grid grid-cols-12 gap-x-4">
            <div class="col-span-6">
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Current Status</span>
                    <span class="p-1 px-3 rounded-lg bg-emerald-600 text-white text-sm uppercase">Pass</span>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Stage</span>
                    <span class="font-medium text-sm whitespace-nowrap">Psikotest</span>
                </div>
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                    <PartialFormInput :type="`date`" :placeholder="`Date`" />
                </div>
            </div>
            <div class="col-span-6">
                <div class="mb-3">
                    <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                    <PartialFormMultiselect :label="`Pilih PIC`" class="shadow-none border border-slate-200 rounded-lg text-sm" :options="pics" />
                </div>
                <button @click="showUpload = true" class="mb-3 flex items-center gap-2 text-sm p-2 px-4 rounded-lg border border-slate-200">
                    Upload
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"/></svg>
                </button>
                <!-- <div class="cursor-pointer flex items-center gap-3 mb-2 p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                    <div class="flex-1 me-auto text-xs line-clamp-1 text-emerald-600">File_Name_In_this_title_of_file.pdf</div>
                    <button class="ms-auto flex items-center justify-center w-[20px] h-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></svg></button>
                </div> -->
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
                <div class="mb-3">
                    <div class="text-xs mb-2 text-slate-500">Interview Result</div>
                    <select name="" id="" class="p-2 mb-2 px-4 text-slate-700 w-full rounded-lg border border-slate-200">
                        <option selected>-- Result --</option>
                        <option>Pass</option>
                        <option>Failed</option>
                    </select>
                </div>
                <div class="flex items-center justify-end gap-2">
                    <button @click="showUpload = false" class="p-2 px-4 text-sm rounded-lg bg-emerald-600 text-white">Confirm</button>
                    <button @click="showUpload = false" class="p-2 px-4 text-sm rounded-lg bg-slate-100 text-slate-700">Batal</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {usePICStore} from '@/stores/pic'
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