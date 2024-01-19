
<template>
    <div>
        <div class="fixed top-0 bottom-0 end-0 start-0 flex items-center justify-center p-5 bg-black/10 z-[99]">
            <div class="p-5 bg-white rounded-xl relative overflow-hidden">
                <div @click="closeDetail" class="absolute top-0 end-0 p-3 cursor-pointer hover:bg-rose-100 hover:text-rose-700 rounded-bl-3xl bg-slate-100 text-slate-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
                </div>
                <div class="text-sm font-medium mb-2">{{ schedule?.activity }}</div>
                <div class="text-xs text-slate-400 mb-2">{{ schedule?.date }} | {{ schedule?.time_start }} - {{ schedule?.time_end }}</div>
                <div class="grid grid-cols-12 items-center gap-x-5 mb-3">
                    <div class="col-span-6">
                        <div class="text-xs mb-2">Terkait</div>
                        <div class="max-h-[10em] overflow-auto">
                            <div class="flex items-center gap-3 p-1 px-2 mb-1 rounded-lg border">
                                <NuxtImg src="https://placeholder.co/50" width="35" height="35" alt="image keterlibatan" class="block rounded-3xl object-fit-cover" />
                                <div>
                                    <div class="text-sm">Name Surname</div>
                                    <div class="inline-block text-xs px-1 rounded bg-slate-100 text-slate-700">Role</div>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 p-1 px-2 mb-1 rounded-lg border">
                                <NuxtImg src="https://placeholder.co/50" width="35" height="35" alt="image keterlibatan" class="block rounded-3xl object-fit-cover" />
                                <div>
                                    <div class="text-sm">Name Surname</div>
                                    <div class="inline-block text-xs px-1 rounded bg-slate-100 text-slate-700">Role</div>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 p-1 px-2 mb-1 rounded-lg border">
                                <NuxtImg src="https://placeholder.co/50" width="35" height="35" alt="image keterlibatan" class="block rounded-3xl object-fit-cover" />
                                <div>
                                    <div class="text-sm">Name Surname</div>
                                    <div class="inline-block text-xs px-1 rounded bg-slate-100 text-slate-700">Role</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="text-xs mb-2">no JO</div>
                        <div class="text-lg font-medium">029788/ISH/01010107/2023</div>
                    </div>
                </div>
                <div class="text-xs mb-1">Detail</div>
                <div class="text-xs text-slate-500 mb-3">{{ schedule?.detail }}</div>
                <div class="p-2 rounded-lg border flex items-center gap-2 mb-3">
                    <svg class="text-emerald-700" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="m4.768 2.922l.01-.006l.046-.027a7.091 7.091 0 0 1 .888-.424C6.31 2.23 7.12 2 8 2c.88 0 1.69.23 2.289.465a7.075 7.075 0 0 1 .887.424c.021.012.036.02.045.027l.01.006h.001a.5.5 0 0 0 .536-.844h-.001l-.002-.002l-.005-.003l-.018-.011a6.004 6.004 0 0 0-.285-.16a8.096 8.096 0 0 0-.802-.367C9.985 1.27 9.045 1 8 1c-1.046 0-1.985.27-2.655.535a8.09 8.09 0 0 0-1.026.49a3.75 3.75 0 0 0-.061.037l-.018.01l-.005.004l-.002.001a.5.5 0 0 0 .535.845M4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1.5a.5.5 0 0 0-.8-.4l-2 1.5a.5.5 0 0 0-.2.4v2a.5.5 0 0 0 .2.4l2 1.5a.5.5 0 0 0 .8-.4zm-9.231 7.579l-.001-.001a.5.5 0 0 0-.536.844h.001l.002.002l.005.003l.018.011c.014.01.035.021.061.037c.053.03.128.073.224.124c.191.1.465.233.802.366c.67.264 1.61.535 2.655.535c1.046 0 1.985-.27 2.655-.535a8.09 8.09 0 0 0 1.026-.49l.061-.037l.018-.01l.005-.004l.002-.001h.001a.5.5 0 0 0-.536-.845l-.01.007l-.046.026a7.085 7.085 0 0 1-.888.424C9.69 13.77 8.88 14 8 14c-.88 0-1.69-.23-2.289-.465a7.101 7.101 0 0 1-.887-.424a2.932 2.932 0 0 1-.045-.027z"/></svg>
                    <a href="https://meet.google.com/" target="_blank" class="flex-1 text-xs me-2 text-emerald-600 line-clamp-1">https://meet.google.com/asxakslhasd</a>
                    <svg class="ms-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.707 15.707L17.5 7.914l1.793 1.793A1 1 0 0 0 21 9V4l-.001-.048A.996.996 0 0 0 20 3h-5a1 1 0 0 0-.707 1.707L16.086 6.5l-7.793 7.793a1 1 0 1 0 1.414 1.414M4 3a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5h6a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex items-center gap-2">
                    <button class="p-2 px-3 rounded-lg text-xs bg-emerald-600 text-white">Selesai</button>
                    <button class="p-2 px-3 rounded-lg text-xs bg-blue-600 text-white">Edit</button>
                    <button class="p-2 px-3 rounded-lg text-xs bg-rose-600 text-white">Batalkan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    schedule : Object,
})
const emit = defineEmits(['close'])
const closeDetail = ()=>{
    emit('close');
}
</script>