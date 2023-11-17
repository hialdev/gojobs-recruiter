<template>
    <div id="navbar" :class="{'bg-white text-black': !isBlended, 'bg-transparent text-white': isBlended, 'fixed top-0 w-full':isFixed }" class="z-50 grid grid-cols-12 items-center gap-3 px-7 py-3">
        <div class="col-span-4">
            <PartialsLogo :isBlended="isBlended" class="inline-block my-auto" />
        </div>
        <div class="col-span-4">
            <PartialsNavbar :isBlended="isBlended"/>
        </div>
        <div class="col-span-4">
            <div class="flex items-center gap-2 justify-end">
                <PartialsButton :primary="false">Buat CV</PartialsButton>
                <PartialsButton :primary="true">Login</PartialsButton>
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