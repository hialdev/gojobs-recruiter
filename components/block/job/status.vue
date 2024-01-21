<template>
    <div class="relative">
        <div @click="toggleStatus" class="cursor-pointer px-4 py-2 pe-0 whitespace-nowrap text-[#41806D] text-sm bg-[#DCF7E1] rounded-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg>
            {{selectedStatus}}
            <div class="px-1 pe-2 border-s border-emerald-400 flex items-center jusity-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>
            </div>
        </div>
        <div v-if="showStatus" class="absolute top-0 end-0 mt-[2.3em] z-10">
            <div class="bg-white p-5 rounded-2xl min-w-[10em]">
                <nav class="flex flex-col items-start gap-1">
                    <button v-for="sts in status" :key="sts.key" @click="() => {selectedStatus = sts.value; showStatus = false}" :class="{'bg-[#DCF7E1]' : selectedStatus === sts.value}" class="text-start cursor-pointer text-emerald-900 p-3 w-full rounded-lg text-[#41806D] text-sm hover:bg-[#DCF7E1]">{{sts.value}}</button>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
const showStatus = ref(false);
const toggleStatus = ()=>{
    showStatus.value = !showStatus.value;
}
const selectedStatus = ref('Draft');
const status = [
    {
        key: 'draft',
        value: 'Draft'
    },
    {
        key: 'publish',
        value: 'Publish'
    },
    {
        key: 'internal',
        value: 'Internal'
    },
    {
        key: 'external',
        value: 'External'
    },
]
</script>