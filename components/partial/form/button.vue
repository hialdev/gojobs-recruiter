<template>
    <button class="flex items-center gap-3 rounded-lg p-2 px-4" :class="{'bg-emerald-600 text-white': primary},{'bg-emerald-100 text-emerald-700': !primary}, {customClass : true}">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    primary : {
        type: Boolean,
        default: true,
    },
    customClass : String,
})
</script>