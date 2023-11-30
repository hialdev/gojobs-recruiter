<template>
    <div :class="{' bg-white text-black': !isBlended, 'absolute top-0 start-0 end-0 lg:fixed bg-transparent text-white': isBlended, 'lg:fixed lg:start-0 lg:end-0 lg:top-0 lg:w-full':isFixed }" class="z-50">
        <div id="navbar" class="grid grid-cols-12 items-center gap-3 px-5 md:px-7 py-3 container mx-auto">
            <div class="col-span-6 lg:col-span-6">
                <PartialsLogo :isBlended="isBlended" class="inline-block my-auto" />
            </div>
            <div class="col-span-6 lg:col-span-6">
                <div class="flex items-center gap-10 justify-end">
                    <PartialsNavbar :isBlended="isBlended"/>
                    <PartialsButton @click="openLoginDialog" class="text-sm lg:text-normal whitespace-nowrap" :primary="true">Masuk</PartialsButton>
                </div>
            </div>
        </div>

        <div class="fixed bottom-0 start-0 end-0 z-[99] flex justify-center lg:hidden">
            <div class="m-3 p-2 rounded-2xl bg-white inline-flex items-center gap-2">
                <NuxtLink to="/" activeClass="active" class="inline-flex m-0 items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-primary cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="currentColor" d="M5.37 1.222a1 1 0 0 1 1.26 0l3.814 3.09A1.5 1.5 0 0 1 11 5.476V10a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V7.5A.5.5 0 0 0 7 7H5a.5.5 0 0 0-.5.5V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5.477a1.5 1.5 0 0 1 .556-1.166l3.815-3.089Z"/></svg>
                    <span class="camelcase pe-2 text-sm">Beranda</span>
                </NuxtLink>

                <NuxtLink to="/lowongan" activeClass="active" class="inline-flex m-0 items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-primary cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm6-15h4V4h-4v2Z"/></svg>
                    <span class="camelcase pe-2 text-sm">Lowongan</span>
                </NuxtLink>

            </div>
        </div>

        <AuthLogin :isOpen="isOpen" @close="closeLoginDialog" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    props:{
        isBlended:{
            type:Boolean,
            default:false,
        },
        isFixed:{
            type:Boolean,
            default:false,
        },
    },
    methods:{
        openLoginDialog() {
            this.isOpen = true;
        },
        closeLoginDialog() {
            this.isOpen = false;
        },
    }
}
</script>

<style scoped>
.active{
    @apply text-primary bg-orange-100;
}
</style>