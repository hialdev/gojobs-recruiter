<template>
    <div class="bg-slate-100 min-h-screen flex justify-center items-center flex-col" style="background-image: url('/illustration/1.svg'); background-size: cover;">
        <div class="px-5 md:px-7 py-3 container mx-auto flex justify-center my-5">
            <PartialsLogo class="inline-block my-auto" />
        </div>
        <slot />
    </div>
</template>
