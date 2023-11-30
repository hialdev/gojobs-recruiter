<template>
    <button v-if="path === ''" :class="[buttonClass, $parent.buttonClass]">
        <slot />
    </button>
    <NuxtLink v-else :to="path" :class="[buttonClass, $parent.buttonClass]">
        <slot />
    </NuxtLink>
</template>
  
<script>
    export default {
        props: {
            primary: {
                type: Boolean,
                default: true,
            },
            path:{
                type: String,
                default: '',
            }
        },
        computed: {
            buttonClass() {
                return {
                    'cursor-pointer p-2 px-4 rounded-3xl inline-block' : true,
                    'bg-primary text-white border-2 border-primary hover:shadow-xl': this.primary,
                    'bg-slate-100 border-slate-100 border-2 hover:bg-slate-100 text-slate-800 ': !this.primary,
                };
            },
        },
    };
</script>
  
  