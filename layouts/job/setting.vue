<template>
    <div>
        <NuxtLayout name="default">
            <div class="py-5 border-b mb-4">
                <div class="container mx-auto">
                    <NuxtLink to="/job/add" class="flex items-center gap-4 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg>
                        <span class="text-slate-500">Jobs</span>/<span class="text-slate-900">Settings</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="container mx-auto">
                <div class="grid grid-cols-12 gap-x-5">
                    <div class="col-span-2">
                        <h2 class="mb-4 font-medium">Setting</h2>
                        <div class="flex flex-col gap-3">
                            <NuxtLink activeClass="activeMenu" to="/job/add/setting/job-access" class="text-slate-500 block p-2 px-4 rounded-lg hover:bg-emerald-600 hover:text-white">Job Access</NuxtLink>
                            <NuxtLink activeClass="activeMenu" to="/job/add/setting/notification" class="text-slate-500 block p-2 px-4 rounded-lg hover:bg-emerald-600 hover:text-white">Notification</NuxtLink>
                            <NuxtLink activeClass="activeMenu" to="/job/add/setting/process" class="text-slate-500 block p-2 px-4 rounded-lg hover:bg-emerald-600 hover:text-white">Process</NuxtLink>
                        </div>
                    </div>
                    <div class="col-span-10">
                        <div class="p-5 rounded-lg bg-white">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.activeMenu{
    @apply bg-emerald-600 text-white;
}
</style>