<template>
    <div class="h-screen min-w-full bg-slate-100">
        <div class="grid grid-cols-12">
            <div class="hidden md:block md:col-span-7">
                <div class="relative">
                    <NuxtImg src="/image/bg-login.png" width="520" height="720" class="w-full object-cover h-screen" />
                    <div class="absolute flex flex-col justify-end top-0 end-0 start-0 bottom-0 bg-[#29675B] bg-opacity-[0.8] bg-blend-multiply p-9">
                        <h2 class="text-5xl text-white font-medium mb-3">
                            HR Management Platform
                        </h2>
                        <p class="text-white">Manage all applicant candidate </p>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-5 md:rounded-l-3xl md:overflow-hidden md:ms-[-2em] md:z-10">
                <div class="bg-white p-12 h-screen text-center">
                    <h1 class="text-2xl font-medium mb-2 text-emerald-600">Hi Recruter</h1>
                    <p class="text-sm text-slate-500">Jelajahi beragam profil yang sesuai dengan kebutuhan Anda, dan temukan kandidat ideal untuk memperkuat tim Anda</p>
                    <form @submit.prevent="login" class="flex flex-col gap-6 mt-12 max-w-[30em] mx-auto">
                        <div class="relative">
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16"><path fill="currentColor" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/></svg>
                            </div>
                            <input type="text" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700/50 focus:border-emerald-700/50 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="NIK">
                        </div>
                        <div class="relative">
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"/></svg>
                            </div>
                            <input type="password" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700/50 focus:border-emerald-700/50 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="Password">
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingat saya</label>
                        </div>
                        <div class="mb-3">
                            <div class="mb-2 text-xs">Masuk sebagai (Untuk uji coba Frontend)</div>
                            <PartialFormSelect @selected="updateSelectedRole" :label="`Pilih Role`" :customClass="`shadow-none border`" :options="roles"/>
                        </div>
                        <button @click="login" class="p-3 px-5 text-center bg-emerald-700 text-white rounded-3xl">Login</button>
                    </form>
                    <div class="text-sm text-start px-3 text-slate-500 mt-12">
                        <p class="mb-2">Developed by IT Service Management for its internal use.</p>
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1c1.71 0 3.1 1.39 3.1 3.1z"/></svg>
                            <span>Every bit of data transmitted is encrypted and officially signed.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'blank',
})
const roles = [
    {
        key : 0,
        value : 'Manager',
    },
    {
        key : 1,
        value : 'Recruiter',
    },
    // {
    //     key : 2,
    //     value : 'Operation',
    // },
    // {
    //     key : 3,
    //     value : 'Project Manager',
    // },
]
const selectedRole = ref('');
const updateSelectedRole = (value) => {
    console.log(value);
    selectedRole.value = value;
}
const login = ()=>{
    localStorage.setItem('role', selectedRole.value);
    if(selectedRole.value === 0){
        navigateTo('/manager');
    }else{
        navigateTo('/dashboard');
    }
}

</script>