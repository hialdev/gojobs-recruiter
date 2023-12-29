<template>
    <div>
        <div class="table-scroll relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl overflow-hidden">
                <thead class="text-xs text-gray-700 uppercase bg-white border-b">
                    <tr>
                        <th scope="col" class="px-6 py-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500">
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Gender
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Documents
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Questions
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Apply Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <td class="px-6 py-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500">
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Maya Wijaya<br/>
                            <div class="inline-block mt-1 text-xs bg-sky-500 text-sky-50 rounded-lg p-1 px-2">Peralihan</div>
                        </th>
                        <td class="px-6 py-4">
                            P
                        </td>
                        <td class="px-6 py-4">
                            <NuxtLink class="inline-block bg-slate-100 border-slate-500 text-slate-500 rounded-lg p-1 px-2">cv: <span class="underline cursor-pointer">filenameforcv.pdf</span></NuxtLink><br/>
                            <div class="text-xs mt-3 inline-block me-2">others : </div>
                            <NuxtLink class="inline-block bg-slate-100 border-slate-500 text-slate-500 rounded-lg p-1 px-2 me-1"><span class="underline cursor-pointer">filenameforcv.pdf</span></NuxtLink>
                            <NuxtLink class="inline-block bg-slate-100 border-slate-500 text-slate-500 rounded-lg p-1 px-2 me-1"><span class="underline cursor-pointer">filenameforcv.pdf</span></NuxtLink>
                        </td>
                        <td class="px-6 py-4">
                            <button @click="openQuestion" class="p-2 px-4 rounded-lg border hover:bg-slate-100 border-slate-600 text-slate-600 flex items-center gap-3">
                                Lihat jawaban
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C6.5 3 2 6.6 2 11c0 2.1 1 4.1 2.8 5.5c0 .6-.4 2.2-2.8 4.5c0 0 3.5 0 6.5-2.5c1.1.3 2.3.5 3.5.5c5.5 0 10-3.6 10-8s-4.5-8-10-8m1 12h-2v-2h2zm1.8-5c-.3.4-.7.6-1.1.8c-.3.2-.4.3-.5.5c-.2.2-.2.4-.2.7h-2c0-.5.1-.8.3-1.1c.2-.2.6-.5 1.1-.8c.3-.1.5-.3.6-.5c.1-.2.2-.5.2-.7c0-.3-.1-.5-.3-.7c-.2-.2-.5-.3-.8-.3c-.3 0-.5.1-.7.2c-.2.1-.3.3-.3.6h-2c.1-.7.4-1.3.9-1.7c.5-.4 1.2-.5 2.1-.5c.9 0 1.7.2 2.2.6c.5.4.8 1 .8 1.7c.1.4 0 .8-.3 1.2"/></svg>
                            </button>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            08 jan 24 18:44 WIB
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>

        <div v-if="showQuestion" class="fixed top-0 start-0 bottom-0 end-0 flex items-center justify-center h-screen w-full bg-black/20">
            <div class="bg-white p-7 rounded-xl w-full max-w-[40em] mx-5">
                <div @click="closeQuestion" class="flex items-center justify-between pb-4 border-b mb-2">
                    <h3 class="font-medium">Question</h3>
                    <div class="cursor-pointer flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8"/></svg>
                    </div>
                </div>
                <ul class="pt-4 max-h-[20em] overflow-auto">
                    <li class="mb-4">
                        <div class="text-sm font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</div>
                        <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsum at quas quisquam eveniet omnis ipsa voluptates totam recusandae nisi quibusdam corrupti tempora fugiat harum iure, unde voluptas! Sed, animi?</p>
                    </li>
                    <li class="mb-4">
                        <div class="text-sm font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</div>
                        <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsum at quas quisquam eveniet omnis ipsa voluptates totam recusandae nisi quibusdam corrupti tempora fugiat harum iure, unde voluptas! Sed, animi?</p>
                    </li>
                    <li class="mb-4">
                        <div class="text-sm font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</div>
                        <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsum at quas quisquam eveniet omnis ipsa voluptates totam recusandae nisi quibusdam corrupti tempora fugiat harum iure, unde voluptas! Sed, animi?</p>
                    </li>
                    <li class="mb-4">
                        <div class="text-sm font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</div>
                        <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsum at quas quisquam eveniet omnis ipsa voluptates totam recusandae nisi quibusdam corrupti tempora fugiat harum iure, unde voluptas! Sed, animi?</p>
                    </li>
                    <li class="mb-4">
                        <div class="text-sm font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</div>
                        <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsum at quas quisquam eveniet omnis ipsa voluptates totam recusandae nisi quibusdam corrupti tempora fugiat harum iure, unde voluptas! Sed, animi?</p>
                    </li>
                    <li class="mb-4">
                        <div class="text-sm font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</div>
                        <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsum at quas quisquam eveniet omnis ipsa voluptates totam recusandae nisi quibusdam corrupti tempora fugiat harum iure, unde voluptas! Sed, animi?</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'job-status',
})

const showQuestion = ref(false);
const openQuestion = ()=>{
    showQuestion.value = true;
}
const closeQuestion = ()=>{
    showQuestion.value = false;
}
</script>

<style scoped>
.table-scroll::-webkit-scrollbar {
    width: 1px;
    height: 10px;
}
   
.table-scroll::-webkit-scrollbar-track {
    @apply bg-emerald-100;
}
   
.table-scroll::-webkit-scrollbar-thumb {
    @apply bg-emerald-600 rounded-2xl;
}
</style>