
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
                    <PartialFormSearch v-model="search" :label="`Cari Kandidat (min. 3 huruf)`" :customClass="`w-full lg:max-w-[100em] border rounded-lg`" />
                    <div v-if="search.length >= 3" class="absolute top-0 start-0 end-0 mt-[3em]">
                        <div class="bg-white p-4 rounded-lg shadow">
                            <div @click="selected = true" title="Klik untuk memilih" class="cursor-pointer p-2 px-4 rounded-lg hover:bg-emerald-100 flex items-center justify-between" :class="{'bg-emerald-100':selected}">
                                <div>
                                    <div class="text-sm">Ririn Ekawati</div>
                                    <p class="text-xs text-slate-500">Bandung - SPG - Sharp</p>
                                </div>
                                <div class="inline-block p-2 px-4 text-xs rounded-lg bg-emerald-600 text-white">
                                    Interview HR
                                </div>
                                <div v-if="selected" class="flex items-center justify-center p-2 rounded-lg text-sm w-[30px] h-[30px] cursor-pointer text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M16 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0"/><path fill="currentColor" fill-rule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5c0-1.65 0-2.475.513-2.987C14.025 15 14.85 15 16.5 15c1.65 0 2.475 0 2.987.513C20 16.025 20 16.85 20 18.5c0 1.65 0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m1.968-4.254a.583.583 0 1 0-.825-.825l-1.92 1.92l-.366-.365a.583.583 0 1 0-.825.825l.778.778a.583.583 0 0 0 .825 0z" clip-rule="evenodd"/><path fill="currentColor" d="M14.477 21.92c-.726.053-1.547.08-2.477.08c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.88 0 5.406.856 6.814 2.141C18.298 15 17.574 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.65 0 2.475.513 2.987c.237.238.542.365.964.434" opacity=".5"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div v-if="selected" class="mb-3">
                    <div class="text-sm text-slate-500 mt-3 mb-2">Kandidat dipilih</div>
                    <div class="flex items-center gap-3 justify-between p-2 px-4 rounded-lg bg-slate-100 w-full mb-2">
                        <div class="flex items-center justify-between gap-x-3">
                            <div>
                                <div class="text-sm">Ririn Ekawati</div>
                                <p class="text-xs text-slate-500">Bandung - SPG - Sharp</p>
                            </div>
                            <div class="inline-block p-1 px-3 text-xs rounded-lg bg-emerald-600 text-white">
                                Interview HR
                            </div>
                        </div>
                        <div @click="selected = false" class="flex items-center justify-center p-2 rounded-lg text-sm w-[30px] h-[30px] cursor-pointer bg-rose-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 14h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2m-7-5c0 1.381-.56 2.631-1.464 3.535C11.631 13.44 10.381 14 9 14s-2.631-.56-3.536-1.465C4.56 11.631 4 10.381 4 9s.56-2.631 1.464-3.535C6.369 4.56 7.619 4 9 4s2.631.56 3.536 1.465A4.984 4.984 0 0 1 14 9m-5 6c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4"/></svg>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="flex justify-end border-t p-3">
                <button @click="closeAction" class="text-sm rounded-lg bg-emerald-600 text-white p-2 px-4">Tambahkan Pelamar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const search = ref('');
const selected = ref(false);
const emit = defineEmits(['close']);
const closeAction = () => {
    emit('close');
}
</script>