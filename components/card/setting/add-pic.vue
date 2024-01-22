
<template>
    <div class="fixed top-0 start-0 end-0 bottom-0 z-10 bg-black/10 flex items-center justify-center">
        <div class="bg-white p-5 rounded-lg relative w-[70vw]">
            <div @click="closeAction" class="absolute top-0 end-0 m-4 text-slate-500 hover:text-rose-600 cursor-pointer flex items-center justify-center w-[30px] h-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
            </div>
            <h3 class="font-medium mb-2">Manage Internal agencies</h3>
            <p class="text-sm text-slate-500 mb-3">Agensi yang ditugaskan dan perekrut individu akan dapat mengirimkan kandidat untuk pekerjaan ini melalui portal agensi internal. Setiap kandidat yang mereka ajukan akan ditandai dengan jelas sebagai ditambahkan secara internal.</p>
            <div class="flex items-center justify-between mb-2">
                <PartialFormSearch :label="`Cari External Recruiter`" :customClass="`border rounded-lg`" />
                <button @click="create_pic = true" class="p-2 px-4 text-sm rounded-lg bg-emerald-600 text-white">Create PIC</button>
            </div>
            <div class="border rounded-lg overflow-hidden mb-3">
                <table class="w-full">
                    <tr class="border-b text-sm">
                        <th></th>
                        <th class="p-2 px-4">Name</th>
                        <th class="p-2 px-4">Role</th>
                        <th class="p-2 px-4">Email</th>
                        <th class="p-2 px-4">Office</th>
                    </tr>
                    <tr class="border-b text-sm">
                        <td class="p-2 px-4"><input type="checkbox" name="" id=""></td>
                        <td class="p-2 px-4">Fauzan</td>
                        <td class="p-2 px-4">Sourcing</td>
                        <td class="p-2 px-4">fauzan@ish.com</td>
                        <td class="p-2 px-4">ISH Palembang</td>
                    </tr>
                </table>
            </div>
            <div class="flex items-center justify-end gap-2">
                <button @click="closeAction" class="p-2 px-4 rounded-lg bg-slate-100 text-slate-700 text-sm">Cancel</button>
                <button class="p-2 px-4 rounded-lg text-white bg-emerald-600 text-sm">Update</button>
            </div>
        </div>

        <CardSettingCreatePic v-if="create_pic" @close="create_pic = false" />
    </div>
</template>                    

<script setup>
const create_pic = ref(false);
const emit = defineEmits(['close'])
const closeAction = () => {
    emit('close')
}
</script>