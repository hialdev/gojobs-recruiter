<template>
    <div id="navbar" :class="{'bg-white text-black': !isBlended, 'bg-transparent text-white': isBlended, 'fixed top-0 w-full':isFixed }" class="z-50 grid grid-cols-12 items-center gap-3 px-7 py-3">
        <div class="col-span-6 lg:col-span-4">
            <PartialsLogo :isBlended="isBlended" class="inline-block my-auto" />
        </div>
        <div class="hidden lg:block lg:col-span-4">
            <PartialsNavbar :isBlended="isBlended"/>
        </div>
        <div class="hidden lg:block col-span-6 lg:col-span-4">
            <div class="flex items-center gap-2 justify-end">
                <PartialsButton :primary="false">Buat CV</PartialsButton>
                <PartialsButton :primary="true">Login</PartialsButton>
            </div>
        </div>
        <div class="col-span-6 lg:hidden">
            <div class="flex items-center justify-end">
                <div class="flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" d="M5 3.75A.75.75 0 0 1 5.75 3h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 3.75Zm-4 4A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75Zm8 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"/></svg>
                </div>
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