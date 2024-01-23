<template>
    <NuxtLayout name="default">
        <div class="flex flex-col md:flex-row items-center gap-4 bg-white p-7" style="padding: 2em; background-color: #fff;">
            <button @click="$router.back()" class="cursor-pointer me-auto flex items-center justify-center text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg></button>
            <div class="">
                <h1 class="text-xl font-medium mb-2">Senior Project Management</h1>
                <div class="flex flex-wrap gap-x-5 gap-y-2 items-center text-xs text-slate-500">
                    <span class="flex-initial w-full">030149/ISH/01010107/2023</span>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
                        PT Devtektif
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></g></svg>
                        Jakarta Selatan
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28"><path fill="currentColor" d="M21 16a3 3 0 0 1 3 3v.715C24 23.292 19.79 26 14 26S4 23.433 4 19.715V19a3 3 0 0 1 3-3zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12"/></svg>
                        20 Pelamar
                    </div>
                </div>
            </div>
            <div class="ms-auto flex flex-wrap items-center gap-2">
                <button @click="action.add = true" class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5z"/></svg>
                    Add Candidate
                </button>
                <div class="relative">
                    <button @click="() => {showFilter = !showFilter}" class="hover:ring hover:ring-emerald-600/10 p-2 px-4 text-sm rounded-lg flex items-center gap-2 bg-slate-50  hover:bg-emerald-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 2.75m2 3A.75.75 0 0 1 3.75 5h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 5.75M5.25 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"/></svg>
                        Filter
                    </button>
                    <div v-if="showFilter" class="absolute top-0 end-0 z-10 mt-[2.5em] p-4 rounded-lg bg-white">
                        <div v-for="row in store.rows" :key="row.id" class="text-sm whitespace-nowrap flex items-center gap-3 mb-2 p-2 px-4 rounded-lg" :class="store.selectedRow.includes(row.id) ? 'bg-emerald-50' : 'bg-transparent'">
                            <input @change="store.selectRow(row.id)" :checked="store.selectedRow.includes(row.id)" :id="row.id" :value="row.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                            {{row.row}}
                        </div>
                    </div>
                </div>
                <NuxtLink to="/job/1/activity" class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11 19a1 1 0 0 1-2 0V8a1 1 0 1 1 2 0zm-4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0zm6 0v-9a1 1 0 0 1 2 0v9a1 1 0 0 1-2 0m4-14a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0z"/></svg>
                    Activity
                </NuxtLink>
                <button class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="M27.53 24a5 5 0 0 0-3.6 1.55l-12.19-6.1a4.47 4.47 0 0 0 0-2.8l12.21-6.21a5.12 5.12 0 1 0-1.07-1.7l-12.09 6.15a5 5 0 1 0 0 6.33l12.06 6.07a4.93 4.93 0 0 0-.31 1.71a5 5 0 1 0 5-5Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    Share
                </button>
                <button @click="navigateTo('/job/1/edit')" class="flex-auto p-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"/></svg>
                </button>
                <button @click="navigateTo('/job/1/setting')" class="flex-auto p-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.485c-.658 0-1.23.421-2.373 1.264L7.906 4.018c-.18.133-.27.199-.367.255c-.097.056-.2.1-.405.19l-1.959.856c-1.302.57-1.953.854-2.282 1.423c-.328.57-.25 1.276-.091 2.688l.238 2.125c.025.222.037.333.037.445c0 .112-.012.223-.037.445l-.238 2.125c-.158 1.412-.237 2.118.091 2.688c.33.57.98.854 2.282 1.423l1.96.856c.204.09.307.134.404.19c.096.056.187.122.367.255l1.72 1.269c1.145.843 1.717 1.264 2.374 1.264s1.23-.421 2.373-1.264l1.721-1.269c.18-.133.27-.199.367-.255c.097-.056.2-.1.405-.19l1.959-.856c1.302-.57 1.953-.854 2.282-1.423c.328-.57.25-1.276.09-2.688l-.237-2.125c-.025-.222-.038-.333-.038-.445c0-.112.013-.223.038-.445l.238-2.125c.158-1.412.237-2.118-.091-2.688c-.33-.57-.98-.854-2.282-1.423l-1.96-.856a4.128 4.128 0 0 1-.404-.19a4.132 4.132 0 0 1-.367-.255l-1.72-1.269C13.228 1.906 12.656 1.485 12 1.485M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"/></svg>
                </button>
                <BlockJobStatus />
            </div>
        </div>
        <slot />

        <BlockActionCandidateAdd v-if="action.add" @close="action.add = false" />
    </NuxtLayout>
</template>

<script setup>
import {useCandidatesStore} from '@/stores/candidates'
const action = ref({
    add : false,
})
const showStatus = ref(false);
const showFilter = ref(false);
const store = useCandidatesStore();
</script>