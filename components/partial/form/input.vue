<template>
    <div class="mb-2" :class="[customClass]">
        <label v-if="label" class="text-xs text-slate-500 mb-2 block">{{ label }}</label>
        <input :type="type" :placeholder="placeholder" class="text-sm p-2 px-4 rounded-lg border w-full border-slate-200 focus:border-emerald-600 focus:ring-emerald-600" :class="[inputClass]">
    </div>
</template>

<script setup>
const props = defineProps({
    type : {
        type : String,
        default : 'text',
    },
    placeholder : String,
    label : String,
    customClass : String,
    inputClass : String,
})
</script>