<template>
    <div class="relative bg-white p-7 rounded-lg">
        <div class="flex flex-col md:flex-row items-start justify-between lg:mb-5">
            <NuxtLink to="/job/1szc23asdede" class="block flex-initial w-full order-last md:order-first">
                <h2 class="text-xl font-medium mb-2">Senior Project Mangement</h2>
                <div class="flex flex-wrap gap-x-5 gap-y-2 items-center text-xs text-slate-500">
                    <span>030149/ISH/01010107/2023</span>
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
            </NuxtLink>
            <div class="flex items-center justify-between md:justify-auto gap-4 w-full md:w-auto mb-2">
                <div class="p-1 px-2 rounded-lg bg-blue-600 text-white lowercase text-sm">Published</div>
                <div class="relative">
                    <div @click="jobDot3" class="cursor-pointer flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/></svg>
                    </div>
                    <div v-if="dot3" class="absolute top-0 mt-[1.5em] end-0 z-10 shadow-2xl shadow-emerald-900/10 rounded-2xl">
                        <div class="bg-white p-4 rounded-lg">
                            <NuxtLink class="flex px-4 py-2 cursor-pointer rounded-lg hover:bg-emerald-50 hover:text-emerald-700 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"/></svg> Edit</NuxtLink>
                            <NuxtLink class="flex px-4 py-2 cursor-pointer rounded-lg hover:bg-emerald-50 hover:text-emerald-700 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><g fill="currentColor"><path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2V5h8a2 2 0 0 0-2-2z"/></g></svg> Duplicate</NuxtLink>
                            <NuxtLink class="flex px-4 py-2 cursor-pointer rounded-lg hover:bg-red-100 text-red-700 items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 6H3v3a2 2 0 0 1 2 2v4c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h2c2.829 0 4.243 0 5.121-.879c.88-.878.88-2.293.88-5.121v-4a2 2 0 0 1 2-2zm-10.5 5a1 1 0 0 0-2 0v5a1 1 0 1 0 2 0zm5 0a1 1 0 0 0-2 0v5a1 1 0 1 0 2 0z" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10.068 3.37c.114-.106.365-.2.715-.267A6.68 6.68 0 0 1 12 3c.44 0 .868.036 1.217.103c.35.067.6.161.715.268"/></g></svg>
                                Delete
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="box">
            <li class="relative box-item">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0">
                    <h3 class="text-xl font-medium mt-1 mb-[-0.1em]">3</h3>
                    <p class="text-sm">Screening</p>
                </div>
            </li>
            <li class="relative box-item">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0">
                    <h3 class="text-xl font-medium mt-1 mb-[-0.1em]">3</h3>
                    <p class="text-sm">Psikotest</p>
                </div>
            </li>
            <li class="relative box-item">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0">
                    <h3 class="text-xl font-medium mt-1 mb-[-0.1em]">3</h3>
                    <p class="text-sm">Interview HR</p>
                </div>
            </li>
            <li class="relative box-item">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0">
                    <h3 class="text-xl font-medium mt-1 mb-[-0.1em]">3</h3>
                    <p class="text-sm">Interview User</p>
                </div>
            </li>
            <li class="relative box-item">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0">
                    <h3 class="text-xl font-medium mt-1 mb-[-0.1em]">3</h3>
                    <p class="text-sm">Peralihan</p>
                </div>
            </li>
            <li class="relative box-item">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0">
                    <h3 class="text-xl font-medium mt-1 mb-[-0.1em]">3</h3>
                    <p class="text-sm">Reject</p>
                </div>
            </li>
            <li class="relative box-item">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0">
                    <h3 class="text-xl font-medium mt-1 mb-[-0.1em]">3</h3>
                    <p class="text-sm">Hiring</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const dot3 = ref(false);
const jobDot3 = () => {
    dot3.value = !dot3.value;
}
</script>

<style scoped>
.box {
  display: block;
  width: 100%;
  margin: 0 auto;
  @apply text-center;
  overflow: hidden;
}

.box-item {
  display: block;
  position: relative;
  float: left;
  height: 80px;
  line-height: 40px;
  margin-right: 10px;
  padding: 0 10px;
  @apply ps-5 bg-emerald-600 text-white w-[13.5%] hidden lg:block;
  border-radius: 4px;
}
.box-item:before {
  content: "";
  position: absolute;
  right: -9px;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 10px solid #fcc;
  @apply border-l-emerald-600;
  border-radius: 4px;
}
.box-item:after {
  content: "";
  position: absolute;
  left: -1px;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 10px solid #fff;
  border-radius: 4px;
}
.box-item:first-child:after {
    display: none;
}

.box-item:first-child{
  @apply ps-5 bg-emerald-100  text-emerald-900;
}
.box-item:first-child:before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-100;
}

.box-item:nth-child(2){
  @apply ps-5 bg-emerald-200  text-emerald-900;
}
.box-item:nth-child(2):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-200;
}

.box-item:nth-child(3){
  @apply ps-5 bg-emerald-300  text-emerald-900;
}
.box-item:nth-child(3):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-300;
}

.box-item:nth-child(4){
  @apply ps-5 bg-emerald-500  text-white;
}
.box-item:nth-child(4):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-500;
}

.box-item:nth-child(5){
  @apply ps-5 bg-emerald-600  text-white;
}
.box-item:nth-child(5):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-600;
}

.box-item:nth-child(6){
  @apply ps-5 bg-emerald-700  text-white;
}
.box-item:nth-child(6):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-700;
}

.box-item:nth-child(7){
  @apply ps-5 bg-emerald-900  text-white;
}
.box-item:nth-child(7):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-900;
}

.box-item:last-child {
  margin-right: 0;
}
.box-item:last-child:before {
  display: none;
}
</style>