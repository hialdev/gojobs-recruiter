<template>
    <div>
        <div v-if="selectedId.length > 0" class="flex items-center gap-2 text-sm mb-4 rounded-xl p-2 px-5 bg-white">
            <div @click="unchecked" class="flex items-center justify-center cursor-pointer text-slate-500 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"/></svg>
            </div>
            <div class="fw-medium text-slate-500 me-4">{{ selectedId.length }} selected</div>
            <button class="flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 9.79V14H9c-.55 0-1-.45-1-1s.45-1 1-1h3v-1.79c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36"/></svg>
                Move
            </button>
            <button @click="viewCandidate()" class="flex items-center gap-3 p-2 px-4 rounded-lg bg-emerald-100 hover:bg-emerald-100 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path fill="currentColor" d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226m256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128m0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72"/></svg>
                View
            </button>
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
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl overflow-hidden">
            <thead class="text-xs text-gray-700 uppercase bg-white border-b">
                <tr>
                    <th scope="col" class="px-6 py-5">
                        <!-- Select All -->
                        <input
                            :checked="selectedId.length === applicants.length"
                            id="select-all-checkbox"
                            type="checkbox"
                            class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                            @change="selectAll"
                        />
                    </th>
                    <th scope="col" class="px-6 py-5">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-5">
                        Tags
                    </th>
                    <th scope="col" class="px-6 py-5">
                        Source
                    </th>
                    <th scope="col" class="px-6 py-5">
                        Rating
                    </th>
                    <th scope="col" class="px-6 py-5">
                        Apply Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(applicant, index) in applicants" :key="index" class="bg-white border-b">
                    <td class="px-6 py-4">
                        <input @click="selectApplicant(applicant.id)" :checked="selectedId.includes(applicant.id)" :id="applicant.id" :value="applicant.id" type="checkbox" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ applicant.name }}<br/>
                        <div v-if="applicant.status == 1" class="inline-block mt-1 text-xs bg-purple-500 text-purple-50 rounded-lg p-1 px-2">Screening</div>
                        <div v-else-if="applicant.status == 2" class="inline-block mt-1 text-xs bg-orange-500 text-orange-50 rounded-lg p-1 px-2">Psikotest</div>
                        <div v-else-if="applicant.status == 3" class="inline-block mt-1 text-xs bg-blue-500 text-blue-50 rounded-lg p-1 px-2">Interview HR</div>
                        <div v-else-if="applicant.status == 4" class="inline-block mt-1 text-xs bg-green-500 text-green-50 rounded-lg p-1 px-2">Interview User</div>
                        <div v-else-if="applicant.status == 5" class="inline-block mt-1 text-xs bg-sky-500 text-sky-50 rounded-lg p-1 px-2">Peralihan</div>
                        <div v-else-if="applicant.status == 6" class="inline-block mt-1 text-xs bg-rose-500 text-rose-50 rounded-lg p-1 px-2">Reject</div>
                        <div v-else-if="applicant.status == 7" class="inline-block mt-1 text-xs bg-emerald-500 text-emerald-50 rounded-lg p-1 px-2">Hiring</div>
                    </th>
                    <td class="px-6 py-4">
                        {{ applicant.tags }}
                    </td>
                    <td class="px-6 py-4">
                        <!-- <NuxtLink class="inline-block bg-slate-100 border-slate-500 text-slate-500 rounded-lg p-1 px-2">cv: <span class="underline cursor-pointer">filenameforcv.pdf</span></NuxtLink><br/>
                        <div class="text-xs mt-3 inline-block me-2">others : </div>
                        <NuxtLink class="inline-block bg-slate-100 border-slate-500 text-slate-500 rounded-lg p-1 px-2 me-1"><span class="underline cursor-pointer">filenameforcv.pdf</span></NuxtLink>
                        <NuxtLink class="inline-block bg-slate-100 border-slate-500 text-slate-500 rounded-lg p-1 px-2 me-1"><span class="underline cursor-pointer">filenameforcv.pdf</span></NuxtLink> -->
                        {{ applicant.source }}
                    </td>
                    <td class="px-6 py-4">
                        <!-- <button @click="openQuestion" class="p-2 px-4 rounded-lg border hover:bg-slate-100 border-slate-600 text-slate-600 flex items-center gap-3">
                            Lihat jawaban
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C6.5 3 2 6.6 2 11c0 2.1 1 4.1 2.8 5.5c0 .6-.4 2.2-2.8 4.5c0 0 3.5 0 6.5-2.5c1.1.3 2.3.5 3.5.5c5.5 0 10-3.6 10-8s-4.5-8-10-8m1 12h-2v-2h2zm1.8-5c-.3.4-.7.6-1.1.8c-.3.2-.4.3-.5.5c-.2.2-.2.4-.2.7h-2c0-.5.1-.8.3-1.1c.2-.2.6-.5 1.1-.8c.3-.1.5-.3.6-.5c.1-.2.2-.5.2-.7c0-.3-.1-.5-.3-.7c-.2-.2-.5-.3-.8-.3c-.3 0-.5.1-.7.2c-.2.1-.3.3-.3.6h-2c.1-.7.4-1.3.9-1.7c.5-.4 1.2-.5 2.1-.5c.9 0 1.7.2 2.2.6c.5.4.8 1 .8 1.7c.1.4 0 .8-.3 1.2"/></svg>
                        </button> -->
                        {{ applicant.rating }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        {{ applicant.apply_date }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    applicants : Array,
})

const selectedId = ref([]);
const selectApplicant = (applicantId) => {
    const index = selectedId.value.indexOf(applicantId);

    if (index === -1) {
        selectedId.value.push(applicantId);
    } else {
        selectedId.value.splice(index, 1);
    }
};

const selectAll = () => {
    if (selectedId.value.length === props.applicants.length) {
        selectedId.value = [];
    } else {
        selectedId.value = props.applicants.map((applicant) => applicant.id);
    }
};


const unchecked = () => {
    selectedId.value = [];
}
</script>