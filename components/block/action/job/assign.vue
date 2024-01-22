<template>
    <div class="fixed top-0 end-0 bottom-0 start-0 bg-black/10 flex items-center justify-center p-5">
        <div class="bg-white p-5 rounded-xl w-[80vw] grid grid-cols-12 gap-x-5">
            <div class="col-span-12">
                <div class="flex items-center justify-between pb-3 mb-3 border-b">
                    <h3 class="font-medium">Send Assignments</h3>
                    <div @click="closeAction" class="cursor-pointer flex items-center justify-center w-[30px] h-[30px] text-slate-500 hover:text-rose-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>
                    </div>
                </div>
            </div>
            <div class="col-span-6">
                <div class="flex items-center gap-3 mb-3">
                    <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1z"/></svg>
                    <PartialFormMultiselect :svg-data="``" :label="`Pilih PIC`" class="border rounded-lg text-sm w-full z-10"/>
                </div>
                <div class="flex items-center gap-3">
                    <svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"/></svg>
                    <PartialFormSelect :label="`Job Category`" :customClass="`shadow-none border `" class="w-full"/>
                </div>
            </div>
            <div class="col-span-6">
                <div class="text-sm text-slate-500">Area / Kota</div>
                <div class="grid grid-cols-12">
                    <div class="col-span-4">
                        <ul class="mt-2 text-xs">
                            <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jabodetabek </li>
                            <ul class="ms-3">
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jakarta </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bogor </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Depok </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Tangerang </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bekasi </li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-span-4">
                        <ul class="mt-2 text-xs">
                            <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jabodetabek </li>
                            <ul class="ms-3">
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jakarta </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bogor </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Depok </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Tangerang </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bekasi </li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-span-4">
                        <ul class="mt-2 text-xs">
                            <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jabodetabek </li>
                            <ul class="ms-3">
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jakarta </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bogor </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Depok </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Tangerang </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bekasi </li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-span-4">
                        <ul class="mt-2 text-xs">
                            <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jabodetabek </li>
                            <ul class="ms-3">
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jakarta </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bogor </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Depok </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Tangerang </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bekasi </li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-span-4">
                        <ul class="mt-2 text-xs">
                            <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jabodetabek </li>
                            <ul class="ms-3">
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jakarta </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bogor </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Depok </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Tangerang </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bekasi </li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-span-4">
                        <ul class="mt-2 text-xs">
                            <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jabodetabek </li>
                            <ul class="ms-3">
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Jakarta </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bogor </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Depok </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Tangerang </li>
                                <li class="flex items-center gap-2"><input type="checkbox" name="" id="" class="rounded-[5px] cursor-pointer"> Bekasi </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-12">
                <div class="flex items-center gap-3">
                    <PartialFormButton class="min-w-[15em] text-center flex justify-center">Assign</PartialFormButton>
                    <PartialFormButton @click="closeAction" :primary="false">Cancel</PartialFormButton>
                </div>
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