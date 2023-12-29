<template>
    <div class="bg-[#3D405B] flex items-center px-5 py-3 gap-9 container mx-auto">
        <NuxtLink to="/dashboard">
            <NuxtImg src="/image/placehold-logo-white.svg" width="100" height="50" />
        </NuxtLink>
        <nav class="flex items-center gap-7 ms-5 hidden lg:flex">
            <NuxtLink activeClass="text-emerald-300" class="text-white" to="/job">Jobs</NuxtLink>
            <NuxtLink activeClass="text-emerald-300" class="text-white" to="/candidate">Candidates</NuxtLink>
            <NuxtLink activeClass="text-emerald-300" class="text-white" to="/hiring">Hiring</NuxtLink>
            <NuxtLink activeClass="text-emerald-300" class="text-white" to="/report">Report</NuxtLink>
        </nav>
        
        <div class="flex items-center ms-auto">
            <div class="">
                <div @click="toggleMenu" class="cursor-pointer flex items-center justify-center text-emerald-900 bg-emerald-50 p-2 rounded-lg ms-auto lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>
                </div>
                <div v-if="isShow" class="absolute top-0 end-0 border-t-4 border-emerald-400 mt-[3.7em] z-[99] w-screen lg:hidden">
                    <div class="bg-white p-5">
                        <nav class="flex flex-col items-start gap-4">
                            <NuxtLink activeClass="text-emerald-300" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/job">Jobs</NuxtLink>
                            <NuxtLink activeClass="text-emerald-300" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/candidate">Candidates</NuxtLink>
                            <NuxtLink activeClass="text-emerald-300" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/hiring">Hiring</NuxtLink>
                            <NuxtLink activeClass="text-emerald-300" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/report">Report</NuxtLink>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="cursor-pointer flex items-center justify-center text-white px-4 border-r">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 512 512"><path fill="currentColor" d="M256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48m144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48Z"/></svg>
            </div>
            <div class="relative">
                <div @click="toggleProfile" class="flex items-center gap-2 text-white px-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 28 28"><path fill="currentColor" d="M21 16a3 3 0 0 1 3 3v.715C24 23.292 19.79 26 14 26S4 23.433 4 19.715V19a3 3 0 0 1 3-3zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12"/></svg>
                    <span class="hidden md:block">nisa@ish.co.id</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>
                </div>
                <div v-if="profileShow" class="absolute top-0 end-0 mt-[2.5em] z-10 min-w-[13em]">
                    <div class="bg-white p-4 rounded-lg">
                        <NuxtLink class="mb-2 flex px-4 py-2 cursor-pointer rounded-lg hover:bg-emerald-50 hover:text-emerald-700 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg>
                            Profile
                        </NuxtLink>
                        <NuxtLink class="mb-2 flex px-4 py-2 cursor-pointer rounded-lg hover:bg-emerald-50 hover:text-emerald-700 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.485c-.658 0-1.23.421-2.373 1.264L7.906 4.018c-.18.133-.27.199-.367.255c-.097.056-.2.1-.405.19l-1.959.856c-1.302.57-1.953.854-2.282 1.423c-.328.57-.25 1.276-.091 2.688l.238 2.125c.025.222.037.333.037.445c0 .112-.012.223-.037.445l-.238 2.125c-.158 1.412-.237 2.118.091 2.688c.33.57.98.854 2.282 1.423l1.96.856c.204.09.307.134.404.19c.096.056.187.122.367.255l1.72 1.269c1.145.843 1.717 1.264 2.374 1.264s1.23-.421 2.373-1.264l1.721-1.269c.18-.133.27-.199.367-.255c.097-.056.2-.1.405-.19l1.959-.856c1.302-.57 1.953-.854 2.282-1.423c.328-.57.25-1.276.09-2.688l-.237-2.125c-.025-.222-.038-.333-.038-.445c0-.112.013-.223.038-.445l.238-2.125c.158-1.412.237-2.118-.091-2.688c-.33-.57-.98-.854-2.282-1.423l-1.96-.856a4.128 4.128 0 0 1-.404-.19a4.132 4.132 0 0 1-.367-.255l-1.72-1.269C13.228 1.906 12.656 1.485 12 1.485M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"/></svg>
                            Settings
                        </NuxtLink>
                        <NuxtLink class="mb-2 flex px-4 py-2 cursor-pointer rounded-lg hover:bg-red-100 text-red-700 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"/><path d="M9 12h12l-3-3m0 6l3-3"/></g></svg>
                            Logout
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isShow = ref(false);

const toggleMenu = ()=>{
    isShow.value = !isShow.value;
}

const profileShow = ref(false);

const toggleProfile = ()=>{
    profileShow.value = !profileShow.value;
}
</script>