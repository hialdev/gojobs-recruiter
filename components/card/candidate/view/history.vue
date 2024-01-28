<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <CardCandidateViewLink :to="to" :text="text" />
        </div>
        <ul>
            <li class="mb-4">
                <div class="flex items-center gap-3 mb-3">
                    <div class="text-sm">Besok, Kamis 23 Jan 23</div>
                    <div class="ms-auto text-slate-500 hover:text-emerald-600 cursor-pointer flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/></g></svg></div>
                    <div class="text-slate-500 hover:text-rose-600 cursor-pointer flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg></div>
                </div>
                <div class="flex items-center gap-12 p-3 px-4 rounded border-s-2 bg-white border-emerald-600">
                    <div class="flex items-center gap-2">
                        <NuxtImg src="https://placeholder.co/70" alt="Image Asignee" class="block rounded-3xl w-[40px] h-[40px]" />
                        <div>
                            <div class="text-sm font-medium">Name Surname</div>
                            <p class="text-slate-500 text-xs">Forum Group Discussion - Online</p>
                        </div>
                    </div>
                    <div>
                        <div class="text-sm font-medium">11:00 - 13:00 WIB</div>
                        <p class="text-slate-500 text-xs">Interview</p>
                    </div>
                    <div>
                        <p class="text-slate-500 text-xs">Scheduled By</p>
                        <div class="text-sm font-medium">Name Surname</div>
                    </div>
                    <button class="ms-auto p-2 px-4 text-sm border border-emerald-600 text-emerald-600 rounded-lg hover:border-emerald-100 hover:bg-emerald-100">Add Feedback</button>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex items-center gap-3 mb-3">
                    <div class="text-sm">Kemarin, Selasa 21 Jan 23</div>
                    <div class="ms-auto text-slate-500 hover:text-emerald-600 cursor-pointer flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/></g></svg></div>
                    <div class="text-slate-500 hover:text-rose-600 cursor-pointer flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg></div>
                </div>
                <div class="flex items-center gap-12 p-3 px-4 rounded border-s-2 bg-white border-emerald-600">
                    <div class="flex items-center gap-2">
                        <NuxtImg src="https://placeholder.co/70" alt="Image Asignee" class="block rounded-3xl w-[40px] h-[40px]" />
                        <div>
                            <div class="text-sm font-medium">Name Surname</div>
                            <p class="text-slate-500 text-xs">Forum Group Discussion - Online</p>
                        </div>
                    </div>
                    <div>
                        <div class="text-sm font-medium">11:00 - 13:00 WIB</div>
                        <p class="text-slate-500 text-xs">Interview</p>
                    </div>
                    <div>
                        <p class="text-slate-500 text-xs">Scheduled By</p>
                        <div class="text-sm font-medium">Name Surname</div>
                    </div>
                    <button class="ms-auto p-2 px-4 text-sm border border-emerald-600 text-emerald-600 rounded-lg hover:border-emerald-100 hover:bg-emerald-100">Add Feedback</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    to : String,
    text : String,
})
</script>