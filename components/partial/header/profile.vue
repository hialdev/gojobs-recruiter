<template>
    <div class="relative">
        <div @click="toggleProfile" class="flex items-center gap-2 text-white px-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 28 28"><path fill="currentColor" d="M21 16a3 3 0 0 1 3 3v.715C24 23.292 19.79 26 14 26S4 23.433 4 19.715V19a3 3 0 0 1 3-3zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12"/></svg>
            <span class="hidden md:block">Name Surname</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>
        </div>
        <div v-if="profileShow" class="absolute top-0 end-0 mt-[2.5em] z-[999] min-w-[13em]">
            <div class="bg-white p-4 rounded-lg">
                <div class="p-4 rounded-lg bg-emerald-50 mb-3">
                    <div class="flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="text-center">
                        <div class="text-sm mb-2 font-medium">Name Surname</div>
                        <div class="text-xs text-slate-500">123456</div>
                    </div>
                </div>
                <NuxtLink class="mb-2 flex px-4 py-2 cursor-pointer rounded-lg hover:bg-red-100 text-red-700 items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"/><path d="M9 12h12l-3-3m0 6l3-3"/></g></svg>
                    Logout
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const profileShow = ref(false);

const toggleProfile = ()=>{
    profileShow.value = !profileShow.value;
}
</script>