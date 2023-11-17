<template>
    <div :class="[buttonClass, $parent.buttonClass]">
        <slot />
    </div>
</template>
  
<script>
    export default {
        props: {
            primary: {
                type: Boolean,
                default: true,
            },
        },
        computed: {
            buttonClass() {
                return {
                    'cursor-pointer p-2 px-4 rounded-3xl inline-block': true,
                    'bg-primary text-white border-2 border-primary hover:shadow-xl': this.primary,
                    'text-primary border-orange-200 bg-orange-200 border-2 hover:bg-orange-200 hover:text-orange-800 ': !this.primary,
                };
            },
        },
    };
</script>
  
  