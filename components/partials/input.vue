<template>
    <div class="mb-6">
        <label v-if="label" for="" class="text-sm mb-3 block">{{label}}</label>
        <input :class="['block w-full bg-white rounded-3xl p-3 px-4 outline-transparent focus:outline-orange-500/20', $parent.class]" :type="typeInput" />
    </div>
</template>

<script>
export default{
    props:{
        label:{
            type: String,
            default : '',
        },
        typeInput:{
            type: String,
            default: 'text',
        }
    }
}
</script>