<template>
    <div class="bg-[#3D405B] flex items-center px-5 py-3 gap-9 container mx-auto">
        <PartialHeaderLogo />
        <nav class="flex items-center gap-7 ms-5 hidden lg:flex">
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/job">Jobs</NuxtLink>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/cancel-join">Cancel Join</NuxtLink>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/stop-jo">Stop JO</NuxtLink>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/hiring">Hiring</NuxtLink>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/recuirtment-request">Job Order</NuxtLink>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/cancel-join">Cancel Join</NuxtLink>
            <div class="relative">
                <button @click="() => { showReport = !showReport }" class="flex items-center gap-2 text-white text-sm hover:text-emerald-300">
                    Report
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div v-if="showReport" class="z-10 absolute top-0 mt-[2em] font-normal bg-white rounded-lg shadow w-44">
                    <ul class="py-2 text-sm text-gray-700 m-0">
                        <li class="m-0">
                            <NuxtLink to="/report/hiring" class="block px-4 py-2 hover:bg-gray-100 text-sm">Hiring</NuxtLink>
                        </li>
                        <li class="m-0">
                            <NuxtLink to="/report/job-order" class="block px-4 py-2 hover:bg-gray-100 text-sm">Job Order</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/calendar">Calendar</NuxtLink>
        </nav>
        
        <div class="flex items-center ms-auto">
            <div class="">
                <div @click="toggleMenu" class="cursor-pointer flex items-center justify-center text-emerald-900 bg-emerald-50 p-2 rounded-lg ms-auto lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>
                </div>
                <div v-if="isShow" class="absolute top-0 end-0 border-t-4 border-emerald-400 mt-[3.7em] z-[99] w-screen lg:hidden">
                    <div class="bg-white p-5">
                        <nav class="flex flex-col items-start gap-4">
                            <NuxtLink activeClass="menuActive" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/job">Jobs</NuxtLink>
                            <NuxtLink activeClass="menuActive" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/candidate">Candidates</NuxtLink>
                            <NuxtLink activeClass="menuActive" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/hiring">Hiring</NuxtLink>
                            <NuxtLink activeClass="menuActive" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/cancel-join">Cancel Join</NuxtLink>
                            <button @click="() => { showReport = !showReport }" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Report
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <!-- Dropdown menu -->
                            <div v-if="showReport" id="dropdownNavbar" class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-full">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <NuxtLink to="/report/hiring" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hiring</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/report/job-order" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Job Order</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <NuxtLink activeClass="menuActive" class="text-emerald-900 hover:bg-emerald-50 p-3 w-full rounded-xl" to="/calendar">Calendar</NuxtLink>
                        </nav>
                    </div>
                </div>
            </div>
            <PartialHeaderProfile />
        </div>
    </div>
</template>

<script setup>
const isShow = ref(false);
const showReport = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isShow.value = !isShow.value;
  showReport.value = false; // Menutup dropdown menu saat menu toggle
};

watch(
    () => route.path,
    () => {
        toggleMenu();  
    }
)
</script>

<style scoped>
.menuActive{
    @apply text-emerald-300 font-medium;
}
</style>