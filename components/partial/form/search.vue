<template>
    <form class="flex-auto w-full lg:w-auto " :class="[customClass]">   
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search" class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-white bg-white rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500" :placeholder="label" @input="handleInput" required>
        </div>
    </form>
</template>

<script>

export default{
    props:{
        label:{
            type:String,
            default: 'Search...'
        },
        customClass: {
            type: String,
            default: '',
        },
    },
    methods: {
        handleInput(event) {
            this.$emit('update:modelValue', event.target.value);
            this.$emit('input', event.target.value);
        },
    },
}

</script>