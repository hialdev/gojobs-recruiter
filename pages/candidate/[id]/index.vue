<template>
    <div>
        <div class="grid grid-cols-12">
            <div class="col-span-3 bg-white border-e min-h-screen">
                <div class="p-5 flex items-center gap-2 border-b">
                    <button @click="$router.back()" class="flex items-center justif-center p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
                    </button>
                    <div class="">
                        <h5 class="font-medium text-lg mb-0">Candidate</h5>
                        <div class="text-slate-500 text-sm">8 Results</div>
                    </div>
                </div>
                <ul class="m-0 max-h-[50em] overflow-auto">
                    <li v-for="candidate in candidates" :key="candidate.id" class="mb-0">
                        <NuxtLink :to="`/candidate/${candidate.id}`" class="flex items-center py-5 border-b gap-4 px-4 hover:bg-emerald-50 cursor-pointer">
                            <NuxtImg :src="candidate.image" class="w-[50px] h-[50px] block rounded-3xl" alt="Candidate Profile Image" />
                            <div>
                                <h6 class="font-medium">{{candidate.name}}</h6>
                                <p v-if="candidate.status == 1" class="uppercase text-sm text-purple-600">Screening</p>
                                <p v-if="candidate.status == 2" class="uppercase text-sm text-orange-600">Psikotest</p>
                                <p v-if="candidate.status == 3" class="uppercase text-sm text-blue-600">Interview HR</p>
                                <p v-if="candidate.status == 4" class="uppercase text-sm text-green-600">Interview User</p>
                                <p v-if="candidate.status == 5" class="uppercase text-sm text-sky-600">Peralihan</p>
                                <p v-if="candidate.status == 6" class="uppercase text-sm text-rose-600">Reject</p>
                                <p v-if="candidate.status == 7" class="uppercase text-sm text-emerald-600">Hiring</p>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="col-span-9">
                <div class="p-5 bg-white flex items-center gap-5 border-b">
                    <div class="relative">
                        <NuxtImg src="https://placeholder.co/150" alt="Selected Image Candidate" class="block rounded-[50px] w-[70px] h-[70px]" />
                        <div class="absolute bottom-0 start-0 end-0 mb-[-0.8em] flex items-center justify-center">
                            <div class="p-1 bg-slate-100 flex items-center gap-1 text-xs rounded-xl px-3">
                                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z" clip-rule="evenodd"/></svg>
                                4.0
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-medium">Budi Santoso</h3>
                        <div class="flex items-center gap-3 text-xs text-slate-500">
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"/></svg>
                                Marketing at Lazada
                            </div>
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></g></svg>
                                Jakarta Selatan
                            </div>
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512"><path fill="currentColor" d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56m-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26"/></svg>
                                budi@mail.com
                            </div>
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><path fill="currentColor" d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81"/></svg>
                                089671052050
                            </div>
                        </div>
                        <div class="flex items-center gap-2 mt-2">
                            <svg class="text-slate-500" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59c.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"/></svg>
                            <div class="p-1 px-2 bg-emerald-50 text-emerald-800 text-xs rounded-xl">Tag One</div>
                            <div class="p-1 px-2 bg-emerald-50 text-emerald-800 text-xs rounded-xl">Tag Two</div>
                            <div class="relative">
                                <div @click="showAddTag = !showAddTag" class="cursor-pointer p-1 px-2 bg-emerald-600 text-white text-xs rounded-xl flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg> Add Tag</div>
                                <div v-if="showAddTag" class="absolute top-0 start-0 z-10 mt-[2em]">
                                    <div class="p-4 rounded-lg bg-white shadow">
                                        <div class="flex items-center gap-3 pb-3 mb-3 border-b">
                                            <input type="text" placeholder="Tag Baru" name="" id="" class="text-sm p-2 px-4 rounded-lg border-2 border-slate-200 focus:border-emerald-600 focus:ring-emerald-600">
                                            <button class="text-sm p-2 px-4 rounded-lg bg-emerald-600 text-white">Buat</button>
                                        </div>
                                        <PartialFormMultiselect :label="`Tags`" class="text-sm min-w-[20em] border-2 rounded-lg" :options="[{key: 1, value : 'Tags 1'}, {key: 2, value : 'Tags 2'}]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @click="showAddSchedule = true" class="cursor-pointer flex items-center bg-emerald-600 text-white p-2 px-3 rounded-lg gap-2 ms-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><rect width="18" height="15" x="3" y="6" stroke="currentColor" stroke-width="2" rx="2"/><path fill="currentColor" d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"/><rect width="4" height="2" x="7" y="12" fill="currentColor" rx=".5"/><rect width="4" height="2" x="7" y="16" fill="currentColor" rx=".5"/><rect width="4" height="2" x="13" y="12" fill="currentColor" rx=".5"/><rect width="4" height="2" x="13" y="16" fill="currentColor" rx=".5"/></g></svg>
                        Schedule
                    </div>
                    <div class="relative">
                        <div @click="() => { showAction = !showAction }" class="flex items-center justify-center cursor-pointer text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>
                        </div>
                        <div v-if="showAction" class="absolute top-0 end-0 mt-[2em] z-10">
                            <div class="p-3 rounded-lg bg-white shadow-xl shadow-gray-900/10 text-sm">
                                <button @click="action.edit = true" class="flex w-full mb-2 items-center gap-3 p-2 px-4 rounded-lg hover:bg-blue-100 text-blue-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                                    Edit
                                </button>
                                <button @click="action.move = true" class="flex w-full mb-2 items-center gap-3 p-2 px-4 rounded-lg hover:bg-emerald-100 text-emerald-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 14a1.5 1.5 0 0 1 .144 2.993L20 17H7.621l1.44 1.44a1.5 1.5 0 0 1-2.008 2.224l-.114-.103l-3.829-3.83c-.974-.974-.34-2.617.991-2.725l.14-.006zM14.94 3.44a1.5 1.5 0 0 1 2.007-.104l.114.103l3.829 3.83c.974.974.34 2.617-.991 2.725l-.14.006H4a1.5 1.5 0 0 1-.144-2.993L4 7h12.379l-1.44-1.44a1.5 1.5 0 0 1 0-2.12Z"/></g></svg>
                                    Move
                                </button>
                                <button class="flex w-full whitespace-nowrap mb-2 items-center gap-3 p-2 px-4 rounded-lg hover:bg-emerald-100 text-emerald-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/></svg>
                                    Print Profile
                                </button>
                                <button class="flex w-full mb-2 items-center gap-3 p-2 px-4 rounded-lg hover:bg-emerald-100 text-emerald-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92c1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"/></svg>
                                    Share
                                </button>
                                <button @click="action.delete = false" class="flex w-full mb-2 items-center gap-3 p-2 px-4 rounded-lg hover:bg-rose-100 text-rose-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-3 -2 24 24"><path fill="currentColor" d="M12 2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm3.8 6l-.613 9.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.205 8zM7 9a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1"/></svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center gap-4 border-b-2 mb-5">
                        <div @click="selectTab('resume')" class="cursor-pointer p-2 px-5 text-sm hover:text-emerald-600 mb-[-2px] border-b-2 hover:border-emerald-600 uppercase" :class="{'border-emerald-600 text-emerald-600' : activeTab == 'resume'}">Resume</div>
                        <div @click="selectTab('question')" class="cursor-pointer p-2 px-5 text-sm hover:text-emerald-600 mb-[-2px] border-b-2 hover:border-emerald-600 uppercase" :class="{'border-emerald-600 text-emerald-600' : activeTab == 'question'}">Question JOb</div>
                        <div @click="selectTab('process')" class="cursor-pointer p-2 px-5 text-sm hover:text-emerald-600 mb-[-2px] border-b-2 hover:border-emerald-600 uppercase" :class="{'border-emerald-600 text-emerald-600' : activeTab == 'process'}">Process</div>
                        <div @click="selectTab('history')" class="cursor-pointer p-2 px-5 text-sm hover:text-emerald-600 mb-[-2px] border-b-2 hover:border-emerald-600 uppercase" :class="{'border-emerald-600 text-emerald-600' : activeTab == 'history'}">History Candidate</div>
                        <div @click="selectTab('log')" class="cursor-pointer p-2 px-5 text-sm hover:text-emerald-600 mb-[-2px] border-b-2 hover:border-emerald-600 uppercase" :class="{'border-emerald-600 text-emerald-600' : activeTab == 'log'}">Log Activity</div>
                    </div>
                    <div class="pb-5 max-h-[44em] overflow-auto">
                        <CardCandidateViewResume v-if="activeTab == 'resume'" />
                        <CardCandidateViewQuestion v-if="activeTab == 'question'" />
                        <CardCandidateViewProcess v-if="activeTab == 'process'" />
                        <CardCandidateViewHistory v-if="activeTab == 'history'" />
                        <CardCandidateViewLog v-if="activeTab == 'log'" />
                    </div>
                </div>
            </div>
        </div>

        <CardCalendarAdd v-if="showAddSchedule" @close="showAddSchedule = false" />
        <BlockActionCandidateMove v-if="action.move" @close="action.move = false" />
        <!-- <BlockActionCandidateDelete v-if="action.delete" @close="action.delete = false" /> -->
        <div v-if="action.edit" class="fixed z-10 top-0 bottom-0 start-0 end-0 bg-black/10 flex items-center justify-center">
            <div class="rounded-xl overflow-hidden relative">
                <div class="bg-white p-5">
                    <div @click="action.edit = false" class="cursor-pointer absolute top-0 end-0 flex items-center justify-center p-1 w-[40px] h-[40px] rounded-bl-3xl bg-slate-100 text-slate-700 hover:bg-rose-100 hover:text-rose-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
                    </div>
                    <h3 class="font-medium pb-3 mb-2 border-b">Edit Candidate</h3>
                </div>
                <div class="max-h-[80vh] overflow-auto">
                    <BlockActionCandidateEdit />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let activeTab = ref('resume');

const showAction = ref(false);
const action = ref({
    move : false,
    delete : false,
})
const showAddTag = ref(false);
const showAddSchedule = ref(false);

const candidates = [
  {
    id: 1,
    name: 'Budi Santoso',
    status: 1,
    image: 'https://placeholder.co/100',
  },
  {
    id: 2,
    name: 'Dewi Lestari',
    status: 2,
    image: 'https://placeholder.co/100',
  },
  {
    id: 3,
    name: 'Anwar Setiawan',
    status: 3,
    image: 'https://placeholder.co/100',
  },
  {
    id: 4,
    name: 'Rini Cahyani',
    status: 4,
    image: 'https://placeholder.co/100',
  },
  {
    id: 5,
    name: 'Joko Susanto',
    status: 5,
    image: 'https://placeholder.co/100',
  },
  {
    id: 6,
    name: 'Siti Aminah',
    status: 6,
    image: 'https://placeholder.co/100',
  },
  {
    id: 7,
    name: 'Adi Pratama',
    status: 1,
    image: 'https://placeholder.co/100',
  },
  {
    id: 8,
    name: 'Budi Luhur',
    status: 2,
    image: 'https://placeholder.co/100',
  },
  {
    id: 9,
    name: 'Maya Wijaya',
    status: 5,
    image: 'https://placeholder.co/100',
  },
  {
    id: 10,
    name: 'Ryan Ramadhan',
    status: 6,
    image: 'https://placeholder.co/100',
  },
  {
    id: 11,
    name: 'Rizki Ramadhan',
    status: 3,
    image: 'https://placeholder.co/100',
  },
  {
    id: 12,
    name: 'Novan Setya',
    status: 4,
    image: 'https://placeholder.co/100',
  },
  {
    id: 13,
    name: 'Example Candidate',
    status: 1,
    image: 'https://placeholder.co/100',
  },
];

const selectTab = (tab) => {
    activeTab.value = tab;
}
</script>