
<template>
    <div class="fixed top-0 start-0 end-0 bottom-0 z-10 bg-black/10 flex items-center justify-center">
        <div class="bg-white p-5 rounded-lg relative w-[30vw]">
            <div class="flex items-center justify-between pb-3 border-b mb-3">
                <h3 class="font-medium mb-2">Manage Internal agencies</h3>
                <div @click="closeAction" class="text-slate-500 hover:text-rose-600 cursor-pointer flex items-center justify-center w-[30px] h-[30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
                </div>
            </div>
            <div class="mb-3">
                <div class="mb-2">
                    <div class="text-xs text-slate-500 mb-1">Name</div>
                    <PartialFormInput :placeholder="`Name`" />
                </div>
                <div class="mb-2">
                    <div class="text-xs text-slate-500 mb-1">Role</div>
                    <PartialFormSelect :label="`Role`" :customClass="`shadow-none border`" />
                </div>
                <div class="mb-2">
                    <div class="text-xs text-slate-500 mb-1">Email</div>
                    <PartialFormInput :type="`email`" :placeholder="`Email`" />
                </div>
                <div class="mb-2">
                    <div class="text-xs text-slate-500 mb-1">Email</div>
                    <PartialFormSelect :label="`Area Office`" :customClass="`shadow-none border`" />
                </div>
            </div>
            <div class="flex items-center justify-start gap-2">
                <button class="p-2 px-4 rounded-lg text-white bg-emerald-600 text-sm">Create</button>
            </div>
        </div>
    </div>
</template>                    

<script setup>
const emit = defineEmits(['close'])
const closeAction = () => {
    emit('close')
}
</script>