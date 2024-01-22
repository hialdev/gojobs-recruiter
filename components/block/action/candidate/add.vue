
<template>
    <div class="fixed top-0 bottom-0 start-0 end-0 bg-black/10 flex justify-end">
        <div class="p-5 bg-white flex flex-col w-[30em]">
            <div class="flex items-center justify-between gap-3 pb-3 mb-3 border-b">
                <h3 class="font-medium">Tambah Kandidat</h3>
                <div @click="closeAction" class="cursor-pointer flex items-center justify-center w-[30px] h-[30px] text-slate-500 hover:text-rose-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"/></svg>
                </div>
            </div>
            <div class="flex-1">
                <div class="relative">
                    <PartialFormSearch :label="`Cari Kandidat`" :customClass="`w-full lg:max-w-[100em]`" />
                    <div class="absolute top-0 start-0 end-0 mt-[3em]">
                        <div class="bg-white p-4 rounded-lg shadow">
                            <div class="p-2 px-4 rounded-lg hover:bg-emerald-100 flex items-center justify-between">
                                <div>
                                    <div class="text-sm">Ririn Ekawati</div>
                                    <p class="text-xs text-slate-500">Bandung - SPG - Sharp</p>
                                </div>
                                <div class="inline-block p-2 px-4 text-xs rounded-lg bg-emerald-600 text-white">
                                    Interview HR
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end border-t p-3">
                <button class="text-sm rounded-lg bg-emerald-600 text-white p-2 px-4">Tambahkan Pelamar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['close']);
const closeAction = () => {
    emit('close');
}
</script>