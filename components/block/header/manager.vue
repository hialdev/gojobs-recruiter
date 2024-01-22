<template>
    <div class="bg-[#3D405B] flex items-center px-5 py-3 gap-9 container mx-auto">
        <PartialHeaderLogo :to="`/manager`" />
        <nav class="flex items-center gap-7 ms-5 hidden lg:flex">
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/manager">Dashboard</NuxtLink>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/job">Jobs</NuxtLink>
            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/job-access">Job Access</NuxtLink>
        </nav>
        
        <div class="flex items-center ms-auto">
            <div class="">
                <div @click="toggleMenu" class="cursor-pointer flex items-center justify-center text-emerald-900 bg-emerald-50 p-2 rounded-lg ms-auto lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>
                </div>
                <div v-if="isShow" class="absolute top-0 end-0 border-t-4 border-emerald-400 mt-[3.7em] z-[99] w-screen lg:hidden">
                    <div class="bg-white p-5">
                        <nav class="flex flex-col items-start gap-4">
                            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/manager">Dashboard</NuxtLink>
                            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/job">Jobs</NuxtLink>
                            <NuxtLink activeClass="menuActive" class="text-white text-sm hover:text-emerald-300" to="/job-access">Job Access</NuxtLink>
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