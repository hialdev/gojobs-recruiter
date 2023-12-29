<template>
    <NuxtLayout name="job-item">
        <div class="container mx-auto px-5 py-5">
            <div class="flex flex-wrap items-center gap-2 mb-5">
                <form class="flex-auto w-full lg:w-auto lg:max-w-[20em] lg:min-w-[15em]">   
                    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="search" class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-white bg-white rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Search Applicant" required>
                    </div>
                </form>
                <div class="status-scroll flex items-center gap-2 overflow-auto pb-3 lg:pb-0">
                    <NuxtLink to="/job/1szc23asdede/screening" activeClass="activeScreening" class="flex-auto whitespace-nowrap cursor-pointer bg-white text-slate-500 border border-white flex items-center gap-2 text-sm p-2 px-4 pe-3 bg-white rounded-lg">
                        Screening
                        <span class="p-1 font-medium bg-slate-50 rounded-lg px-2">4</span>
                    </NuxtLink>
                    <NuxtLink to="/job/1szc23asdede/psikotest" activeClass="activePsikotest" class="flex-auto whitespace-nowrap cursor-pointer bg-white text-slate-500 border border-white flex items-center gap-2 text-sm p-2 px-4 pe-3 bg-white rounded-lg">
                        Psikotest
                        <span class="p-1 font-medium bg-slate-50 rounded-lg px-2">4</span>
                    </NuxtLink>
                    <NuxtLink to="/job/1szc23asdede/interview-hr" activeClass="activeInthr" class="flex-auto whitespace-nowrap cursor-pointer bg-white text-slate-500 border border-white flex items-center gap-2 text-sm p-2 px-4 pe-3 bg-white rounded-lg">
                        Interview HR
                        <span class="p-1 font-medium bg-slate-50 rounded-lg px-2">4</span>
                    </NuxtLink>
                    <NuxtLink to="/job/1szc23asdede/interview-user" activeClass="activeIntuser" class="flex-auto whitespace-nowrap cursor-pointer bg-white text-slate-500 border border-white flex items-center gap-2 text-sm p-2 px-4 pe-3 bg-white rounded-lg">
                        Interview User
                        <span class="p-1 font-medium bg-slate-50 rounded-lg px-2">4</span>
                    </NuxtLink>
                    <NuxtLink to="/job/1szc23asdede/peralihan" activeClass="activePeralihan" class="flex-auto whitespace-nowrap cursor-pointer bg-white text-slate-500 border border-white flex items-center gap-2 text-sm p-2 px-4 pe-3 bg-white rounded-lg">
                        Peralihan
                        <span class="p-1 font-medium bg-slate-50 rounded-lg px-2">4</span>
                    </NuxtLink>
                    <NuxtLink to="/job/1szc23asdede/reject" activeClass="activeReject" class="flex-auto whitespace-nowrap cursor-pointer bg-white text-slate-500 border border-white flex items-center gap-2 text-sm p-2 px-4 pe-3 bg-white rounded-lg">
                        Reject
                        <span class="p-1 font-medium bg-slate-50 rounded-lg px-2">4</span>
                    </NuxtLink>
                    <NuxtLink to="/job/1szc23asdede/hiring" activeClass="activeHiring" class="flex-auto whitespace-nowrap cursor-pointer bg-white text-slate-500 border border-white flex items-center gap-2 text-sm p-2 px-4 pe-3 bg-white rounded-lg">
                        Hiring
                        <span class="p-1 font-medium bg-slate-50 rounded-lg px-2">4</span>
                    </NuxtLink>
                </div>
            </div>

            <slot />
        </div>
    </NuxtLayout>
</template>

<style scoped>
.status-scroll::-webkit-scrollbar {
    width: 1px;
    height: 5px;
}
   
.status-scroll::-webkit-scrollbar-track {
    @apply bg-slate-100;
}
   
.status-scroll::-webkit-scrollbar-thumb {
    @apply bg-slate-300 rounded-2xl;
}

.activeScreening{
    @apply bg-purple-50 text-purple-800 border border-purple-800 ;
}
.activeScreening>span{
    @apply bg-purple-800 text-purple-50 ;
}

.activePsikotest{
    @apply bg-orange-50 text-orange-800 border border-orange-800 ;
}
.activePsikotest>span{
    @apply bg-orange-800 text-orange-50 ;
}

.activeInthr{
    @apply bg-blue-50 text-blue-800 border border-blue-800 ;
}
.activeInthr>span{
    @apply bg-blue-800 text-blue-50 ;
}

.activeIntuser{
    @apply bg-green-50 text-green-800 border border-green-800 ;
}
.activeIntuser>span{
    @apply bg-green-800 text-green-50 ;
}

.activePeralihan{
    @apply bg-sky-50 text-sky-800 border border-sky-800 ;
}
.activePeralihan>span{
    @apply bg-sky-800 text-sky-50 ;
}

.activeReject{
    @apply bg-rose-50 text-rose-800 border border-rose-800 ;
}
.activeReject>span{
    @apply bg-rose-800 text-rose-50 ;
}

.activeHiring{
    @apply bg-emerald-50 text-emerald-800 border border-emerald-800 ;
}
.activeHiring>span{
    @apply bg-emerald-800 text-emerald-50 ;
}
</style>