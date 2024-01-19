<template>
    <div>
        <div v-if="selectedId.length > 0" class="flex items-center gap-2 text-sm mb-4 rounded-xl p-2 px-5 bg-white">
            <div @click="unchecked" class="flex items-center justify-center cursor-pointer text-slate-500 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"/></svg>
            </div>
            <div class="fw-medium text-slate-500 me-4">{{ selectedId.length }} selected</div>
            <button class="flex items-center gap-3 p-2 px-4 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                Edit
            </button>
            <button class="flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><g fill="currentColor"><path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2V5h8a2 2 0 0 0-2-2z"/></g></svg>
                Duplicate
            </button>
            <button class="flex items-center gap-3 p-2 px-4 rounded-lg bg-rose-100 hover:bg-rose-100 text-rose-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-3 -2 24 24"><path fill="currentColor" d="M12 2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm3.8 6l-.613 9.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.205 8zM7 9a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1"/></svg>
                Delete
            </button>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                <thead class="text-xs text-gray-700 bg-white border-b-2">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            <!-- Select All -->
                            <input
                                :checked="selectedId.length === jobs.length"
                                id="select-all-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                                @change="selectAll"
                            />
                        </th>
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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="job in jobs" :key="job.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-4 py-3">
                            <input @click="selectJob(job.id)" :checked="selectedId.includes(job.id)" :id="job.id" :value="job.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                        </td>
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
                        </template>
                        <template v-else>
                            <td class="px-3 py-3 bg-slate-50" colspan="7">
                                <div class="flex items-center justify-end">
                                    <button class="p-2 px-4 rounded-lg bg-emerald-100 text-emerald-600">Create Job Posting</button>
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

const props = defineProps({
    jobs : Array,
})
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
}

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