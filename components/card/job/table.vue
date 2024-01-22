<template>
    <div>
        
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-2">
                    <tr>
                
                        <th scope="col" class="px-4 py-3">
                            Posisi
                        </th>
                        <th scope="col" class="px-4 py-3">
                            No JO
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Lokasi
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Total
                        </th>
                        <th scope="col" class="px-4 py-3 bg-emerald-50 text-emerald-800">
                            Screening
                        </th>
                        <th scope="col" class="px-4 py-3 bg-emerald-200 text-emerald-800">
                            Psikotest
                        </th>
                        <th scope="col" class="px-4 py-3 bg-emerald-400 text-emerald-800">
                            Interview HR
                        </th>
                        <th scope="col" class="px-4 py-3 bg-emerald-600 text-emerald-100">
                            Interview User
                        </th>
                        <th scope="col" class="px-4 py-3 bg-emerald-700 text-emerald-100">
                            Peralihan
                        </th>
                        <th scope="col" class="px-4 py-3 bg-emerald-800 text-emerald-100">
                            Reject
                        </th>
                        <th scope="col" class="px-4 py-3 bg-emerald-900 text-emerald-100">
                            Hiring
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(job, index) in jobs" :key="job.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        
                        <td class="px-3 py-3 text-sm">
                            {{job.posisi}}
                        </td>
                        <td class="px-3 py-3 text-sm">
                            <nuxt-link :to="`/job/${job.id}`" class="text-emerald-700">{{job.no_jo}}</nuxt-link>
                        </td>
                        <td class="px-3 py-3 text-sm">
                            {{job.lokasi}}
                        </td>
                        <td class="px-3 py-3 text-sm">
                            {{job.total}}
                        </td>
                        <template v-if="job.isPosted === false">
                            <td class="px-3 py-3 text-sm">
                                {{job.screening}}
                            </td>
                            <td class="px-3 py-3 text-sm">
                                {{job.psikotest}}
                            </td>
                            <td class="px-3 py-3 text-sm">
                                {{job.interview_hr}}
                            </td>
                            <td class="px-3 py-3 text-sm">
                                {{job.interview_user}}
                            </td>
                            <td class="px-3 py-3 text-sm">
                                {{job.peralihan}}
                            </td>
                            <td class="px-3 py-3 text-sm">
                                {{job.reject}}
                            </td>
                            <td class="px-3 py-3 text-sm">
                                {{job.hiring}}
                            </td>
                            <td class="px-3 py-3 text-sm">
                                <div class="relative">
                                    <!-- 3 Dots -->
                                    <div @click="toggleModal(index, job.id)" class="flex items-center justify-center w-[20px] h-[20px] text-emerald-600 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                                            <g fill="currentColor">
                                            <circle cx="10" cy="15" r="2" />
                                            <circle cx="10" cy="10" r="2" />
                                            <circle cx="10" cy="5" r="2" />
                                            </g>
                                        </svg>
                                    </div>
                                    <!-- 3 Dots Modal -->
                                    <div v-if="openModalIndex === index" class="absolute z-10" :class="{'bottom-0 end-0 me-[2em]' : index >= (jobs.length-5), 'top-0 end-0 mt-[2em]' : index <= (jobs.length-5)}">
                                        <div class="p-3 rounded-lg bg-white shadow">
                                            <div class="mb-2">
                                                <NuxtLink :to="`job/${job.id}/edit`" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z" />
                                                    </svg>
                                                    Edit
                                                </NuxtLink>
                                            </div>
                                            <div class="mb-2">
                                                <button @click="duplicateItem(job.id)" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                                                    <g fill="currentColor">
                                                        <path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
                                                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2V5h8a2 2 0 0 0-2-2z" />
                                                    </g>
                                                    </svg>
                                                    Duplicate
                                                </button>
                                            </div>
                                            <div class="">
                                                <button @click="deleteItem(job.id)" class="w-full text-xs flex items-center gap-3 p-2 px-4 rounded-lg bg-rose-100 hover:bg-rose-100 text-rose-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-3 -2 24 24">
                                                    <path fill="currentColor" d="M12 2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm3.8 6l-.613 9.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.205 8zM7 9a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </template>
                        <template v-else>
                            <td class="px-3 py-3 bg-slate-50" colspan="7">
                                <div class="flex items-center justify-end">
                                    <NuxtLink :to="`/job/${job.id}/edit`" class="p-2 px-4 rounded-lg bg-emerald-100 text-emerald-600">Create Job Posting</NuxtLink>
                                </div>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const selectedId = ref([]);
const openModalIndex = ref(null);

const props = defineProps({
  jobs: Array,
});

const toggleModal = (index, id) => {
  openModalIndex.value = openModalIndex.value === index ? null : index;
};

const closeAllModals = () => {
  openModalIndex.value = null;
};

const duplicateItem = (id) => {
  closeAllModals();
};

const deleteItem = (id) => {
  closeAllModals();
};

const selectJob = (jobId) => {
  const index = selectedId.value.indexOf(jobId);

  if (index === -1) {
    selectedId.value.push(jobId);
  } else {
    selectedId.value.splice(index, 1);
  }
};

const selectAll = () => {
  if (selectedId.value.length === props.jobs.length) {
    selectedId.value = [];
  } else {
    selectedId.value = props.jobs.map((job) => job.id);
  }
};

const unchecked = () => {
  selectedId.value = [];
};

</script>

<style scoped>
*::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

*::-webkit-scrollbar-track {
  @apply bg-slate-100;
}

*::-webkit-scrollbar-thumb {
  @apply bg-slate-300 rounded-2xl;
}
</style>