<template>
    <NuxtLayout name="default">
        <div class="flex flex-col md:flex-row items-center gap-4 bg-white p-7" style="padding: 2em; background-color: #fff;">
            <NuxtLink to="/job" class="me-auto flex items-center justify-center text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg></NuxtLink>
            <div class="me-auto">
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
                <button class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5z"/></svg>
                    Add Candidate
                </button>
                <button class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    Activity
                </button>
                <button class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"/></svg>
                    Edit
                </button>
                <button class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z"/></svg>
                    Filter
                </button>
                <button class="flex-auto px-4 py-2 whitespace-nowrap bg-slate-50 text-dark text-sm hover:bg-emerald-50 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="M27.53 24a5 5 0 0 0-3.6 1.55l-12.19-6.1a4.47 4.47 0 0 0 0-2.8l12.21-6.21a5.12 5.12 0 1 0-1.07-1.7l-12.09 6.15a5 5 0 1 0 0 6.33l12.06 6.07a4.93 4.93 0 0 0-.31 1.71a5 5 0 1 0 5-5Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    Share
                </button>
                <div class="relative">
                    <div @click="toggleStatus" class="cursor-pointer px-4 py-2 pe-0 whitespace-nowrap text-[#41806D] text-sm bg-[#DCF7E1] rounded-lg flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg>
                        Open
                        <div class="px-1 pe-2 border-s border-emerald-400 flex items-center jusity-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>
                        </div>
                    </div>
                    <div v-if="showStatus" class="absolute top-0 end-0 mt-[2.3em]">
                        <div class="bg-white p-5 rounded-2xl min-w-[10em]">
                            <nav class="flex flex-col items-start gap-1">
                                <NuxtLink activeClass="text-emerald-300" class="cursor-pointer text-emerald-900 p-3 w-full rounded-lg text-[#41806D] text-sm bg-[#DCF7E1]">Open</NuxtLink>
                                <NuxtLink activeClass="text-emerald-300" class="cursor-pointer text-emerald-900 p-3 w-full rounded-lg text-sm hover:bg-slate-100 text-slate-600">Hold</NuxtLink>
                                <NuxtLink activeClass="text-emerald-300" class="cursor-pointer text-emerald-900 p-3 w-full rounded-lg text-sm hover:bg-red-100 text-red-600">Close</NuxtLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot />
    </NuxtLayout>
</template>

<script setup>
const showStatus = ref(false);
const toggleStatus = ()=>{
    showStatus.value = !showStatus.value;
}
</script>