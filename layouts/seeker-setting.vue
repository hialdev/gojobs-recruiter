<template>
    <div>
        <NuxtLayout name="seeker">
            <div class="py-10">
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-3">
                            <div class="bg-white rounded-xl p-4 px-7">
                                <div class="border-b py-4">
                                    <h4 class="font-medium">Pengaturan</h4>
                                </div>
                                <div class="py-4">
                                    <NuxtLink to="/seeker/settings/detail" activeClass="activeTab" class="mb-3 cursor-pointer flex items-center p-3 px-5 gap-5 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30c3.198 0 6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
                                        Detail Akun
                                    </NuxtLink>
                                    <NuxtLink to="/seeker/settings/kontak" activeClass="activeTab" class="mb-3 cursor-pointer flex items-center p-3 px-5 gap-5 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75z" clip-rule="evenodd"/></svg>
                                        Kontak
                                    </NuxtLink>
                                    <NuxtLink to="/seeker/settings/notifikasi" activeClass="activeTab" class="mb-3 cursor-pointer flex items-center p-3 px-5 gap-5 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"/></svg>
                                        Notifikasi
                                    </NuxtLink>
                                    <NuxtLink to="/seeker/settings/hapus-akun" activeClass="bg-red-50/50" class="mb-3 cursor-pointer flex items-center p-3 px-5 gap-5 hover:bg-red-50/50 text-red-500 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/><path stroke-linecap="round" d="m33 31l8 8m-8 0l8-8m-14-3h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21"/></g></svg>
                                        Hapus Akun
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-9">
                            <NuxtPage />
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
        
    </div>
</template>

<style scoped>
.activeTab{
    @apply bg-primary text-white;
}
</style>