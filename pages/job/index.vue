<template>
    <div class="container mx-auto p-5">
        <div class="flex flex-wrap items-center gap-5 mb-5">
            <form class="flex-auto max-w-[20em]">   
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-white bg-white rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Search Job" required>
                </div>
            </form>
            <div class="cursor-pointer text-sm hover:text-emerald-600 whitespace-nowrap">Hapus Semua</div>
            <select id="countries" class="flex-auto bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5">
                <option selected>Job creator</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <select id="countries" class="flex-auto bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5">
                <option selected>Location</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <select id="countries" class="flex-auto bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5">
                <option selected>Status</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <button @click="addJob" class="px-4 pe-5 whitespace-nowrap py-2 bg-emerald-600 text-white rounded-lg flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5z"/></svg>
                New Job
            </button>
        </div>

        <CardJobTable />
    </div>
</template>

<script setup>
const addJob = () => {
    navigateTo('/job/add')
}
</script>