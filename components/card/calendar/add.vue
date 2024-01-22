<template>
    <div>
        <div class="fixed top-0 end-0 start-0 bottom-0 flex justify-end bg-black/20 z-[99]">
            <div class="p-5 bg-white max-h-screen overflow-auto">
                <div class="flex items-center justify-between border-b pb-3 mb-3">
                    <div class="text-lg font-medium">Detail Appointment</div>
                    <div @click="closeDetail" class="flex items-center justify-center p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"/></svg>
                    </div>
                </div>
                <div class="flex items-center gap-3 mb-3">
                    <input type="date" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" placeholder="name@flowbite.com">
                    <div class="flex items-center gap-2">
                    <input type="time" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" placeholder="name@flowbite.com">
                    <div class="py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 8l4 4l-4 4M2 12h20"/></svg>
                    </div>
                    <input type="time" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" placeholder="name@flowbite.com">
                    </div>
                </div>
                <div class="mb-3 flex items-center gap-2">
                    <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M12 0H5v6h.7l.2.7l.1.1V1h5v4h4v9H9l.3.5l-.5.5H16V4zm0 4V1l3 3zm-6.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><path fill="currentColor" d="M7.9 12.4L9 12v-1l-1.1-.4c-.1-.3-.2-.6-.4-.9l.5-1l-.7-.7l-1 .5c-.3-.2-.6-.3-.9-.4L5 7H4l-.4 1.1c-.3.1-.6.2-.9.4l-1-.5l-.7.7l.5 1.1c-.2.3-.3.6-.4.9L0 11v1l1.1.4c.1.3.2.6.4.9l-.5 1l.7.7l1.1-.5c.3.2.6.3.9.4L4 16h1l.4-1.1c.3-.1.6-.2.9-.4l1 .5l.7-.7l-.5-1.1c.2-.2.3-.5.4-.8m-3.4 1.1c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>
                    <div class="flex-1">
                        <PartialFormSelect :label="`Process`" :options="steps" :customClass="['border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 shadow-none z-[23]']" :modalClass="`z-[]]`"/>
                    </div>
                </div>
                <div class="mb-3 flex items-center gap-2">
                    <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"/></svg>
                    <div class="flex-1">
                        <PartialFormSelect :label="`no JO`" :options="steps" :customClass="['border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 shadow-none']" :modalClass="`z-[11]`"/>
                    </div>
                </div>
                <div class="mb-3 flex items-center gap-2">
                    <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6 9v-3a6 6 0 1 1 12 0v3M13 5c.404-1.664 2.015-3 4-3c2.172 0 3.98 1.79 4 4c-.02 2.21-1.828 4-4 4h-1h1c3.288 0 6 2.686 6 6v2M11 5c-.404-1.664-2.015-3-4-3c-2.172 0-3.98 1.79-4 4c.02 2.21 1.828 4 4 4h1h-1c-3.288 0-6 2.686-6 6v2"/></svg>
                    <div class="flex-1">
                        <PartialFormMultiselect :label="`Kandidat`" :options="candidates" class="p-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full shadow-none" :modalClass="`z-[10]`"/>
                    </div>
                </div>
                <div class="mb-3 flex items-center gap-2">
                    <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c1.68 0 3.162.44 4.18 1.041c1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1m5.5-4c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4" clip-rule="evenodd"/></svg>
                    <div class="flex-1">
                        <PartialFormMultiselect :label="`Pewawancara`" :options="rekurters" class="p-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full shadow-none" :modalClass="`z-[9]`"/>
                    </div>
                </div>
                <div class="w-full text-xs text-slate-500 mb-2 mt-4">Link Meeting Online</div>
                <div class="mb-3 flex items-center gap-2">
                    <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="m4.768 2.922l.01-.006l.046-.027a7.091 7.091 0 0 1 .888-.424C6.31 2.23 7.12 2 8 2c.88 0 1.69.23 2.289.465a7.075 7.075 0 0 1 .887.424c.021.012.036.02.045.027l.01.006h.001a.5.5 0 0 0 .536-.844h-.001l-.002-.002l-.005-.003l-.018-.011a6.004 6.004 0 0 0-.285-.16a8.096 8.096 0 0 0-.802-.367C9.985 1.27 9.045 1 8 1c-1.046 0-1.985.27-2.655.535a8.09 8.09 0 0 0-1.026.49a3.75 3.75 0 0 0-.061.037l-.018.01l-.005.004l-.002.001a.5.5 0 0 0 .535.845M4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1.5a.5.5 0 0 0-.8-.4l-2 1.5a.5.5 0 0 0-.2.4v2a.5.5 0 0 0 .2.4l2 1.5a.5.5 0 0 0 .8-.4zm-9.231 7.579l-.001-.001a.5.5 0 0 0-.536.844h.001l.002.002l.005.003l.018.011c.014.01.035.021.061.037c.053.03.128.073.224.124c.191.1.465.233.802.366c.67.264 1.61.535 2.655.535c1.046 0 1.985-.27 2.655-.535a8.09 8.09 0 0 0 1.026-.49l.061-.037l.018-.01l.005-.004l.002-.001h.001a.5.5 0 0 0-.536-.845l-.01.007l-.046.026a7.085 7.085 0 0 1-.888.424C9.69 13.77 8.88 14 8 14c-.88 0-1.69-.23-2.289-.465a7.101 7.101 0 0 1-.887-.424a2.932 2.932 0 0 1-.045-.027z"/></svg>
                    <input type="text" class="p-2 px-4 rounded-lg border-slate-300 text-sm focus:ring-emerald-600 focus:border-emerald-600 w-full">
                </div>
                <div class="w-full text-xs text-slate-500 mb-2 mt-4">Psikotest</div>
                <div class="flex mb-3 items-center gap-2">
                    <div class="mb-3 flex items-center gap-2">
                        <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17.55l-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43a2.75 2.75 0 0 0-.18-.21a4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55M20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43a2.75 2.75 0 0 0 .23.21a4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33"/></svg>
                        <input type="text" placeholder="link psikotest" class="p-2 px-4 rounded-lg border-slate-300 text-sm focus:ring-emerald-600 focus:border-emerald-600 w-full">
                    </div>
                    <div class="mb-3 flex items-center gap-2">
                        <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722c0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12z"/></svg>
                        <input type="text" placeholder="kode akses" class="p-2 px-4 rounded-lg border-slate-300 text-sm focus:ring-emerald-600 focus:border-emerald-600 w-full">
                    </div>
                </div>
                <div class="flex items-center justify-between mb-3">
                    <span class="text-sm">Sertakan CV saat mengirim email</span>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                </div>
                <div>
                    <textarea placeholder="catatan" name="" id="" cols="30" rows="10" class="text-sm p-2 px-4 rounded-xl border border-slate-300 focus:ring-emerald-600 focus:border-emerald-600 w-full"></textarea>
                </div>
                
                <div class="sticky bottom-0 start-0 end-0 bg-slate-50/50 mb-[-1em] p-2 rounded-lg">
                    <div class="flex items-center gap-2">
                        <button @click="closeDetail" class="p-2 px-4 text-sm rounded-lg bg-slate-100 text-slate-700">Cancel</button>
                        <button class="p-2 px-4 text-sm rounded-lg bg-emerald-600 flex-1 text-white">Schedule</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCandidatesStore } from '@/stores/candidates';

const candidate = useCandidatesStore();
const candidates = ref(candidate.data.map(cnd => ({ key: cnd.id, value: cnd.name })));
const emit = defineEmits(['close']);
const closeDetail = () => {
    emit('close');
}
</script>