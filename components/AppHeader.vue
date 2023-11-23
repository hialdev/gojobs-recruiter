<template>
    <div>
        <div id="navbar" :class="{'absolute lg:fixed top-0 start-0 end-0 bg-white text-black': !isBlended, 'absolute top-0 start-0 end-0 lg:fixed bg-transparent text-white': isBlended, 'lg:fixed lg:top-0 lg:w-full':isFixed }" class="z-50 grid grid-cols-12 items-center gap-3 px-5 md:px-7 py-3">
            <div class="col-span-6 lg:col-span-4">
                <PartialsLogo :isBlended="isBlended" class="inline-block my-auto" />
            </div>
            <div class="hidden lg:block lg:col-span-4">
                <PartialsNavbar :isBlended="isBlended"/>
            </div>
            <div class="col-span-6 lg:col-span-4">
                <div class="flex items-center gap-2 justify-end">
                    <PartialsButton class="text-sm lg:text-normal whitespace-nowrap" :primary="false">Buat CV</PartialsButton>
                    <PartialsButton class="text-sm lg:text-normal whitespace-nowrap" :primary="true">Login</PartialsButton>
                </div>
            </div>
        </div>

        <div class="fixed bottom-0 start-0 end-0 z-[99] flex justify-center lg:hidden">
            <div class="m-3 p-2 rounded-2xl bg-white inline-flex items-center gap-2">
                <NuxtLink to="/" activeClass="active" class="inline-flex m-0 items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-primary cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="currentColor" d="M5.37 1.222a1 1 0 0 1 1.26 0l3.814 3.09A1.5 1.5 0 0 1 11 5.476V10a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V7.5A.5.5 0 0 0 7 7H5a.5.5 0 0 0-.5.5V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5.477a1.5 1.5 0 0 1 .556-1.166l3.815-3.089Z"/></svg>
                    <span class="camelcase pe-2 text-sm hidden sm:block">Beranda</span>
                </NuxtLink>

                <NuxtLink to="/lowongan" activeClass="active" class="inline-flex m-0 items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-primary cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm6-15h4V4h-4v2Z"/></svg>
                    <span class="camelcase pe-2 text-sm hidden sm:block">Lowongan</span>
                </NuxtLink>

                <NuxtLink to="/perusahaan" activeClass="active" class="inline-flex m-0 items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-primary cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.16 10.4l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63z"/><path fill="currentColor" d="M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3zM19 9h-2V7h2v2z"/></svg>
                    <span class="camelcase pe-2 text-sm hidden sm:block">Perusahaan</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isBlended:{
            type:Boolean,
            default:false,
        },
        isFixed:{
            type:Boolean,
            default:false,
        }
    },

}
</script>

<style scoped>
.active{
    @apply text-primary bg-orange-100;
}
</style>