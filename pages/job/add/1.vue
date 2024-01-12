<template>
    <div>
        <div class="px-5 border-b-[4px] border-slate-50 mb-5">
            <h1 class="font-medium">Tambah detail pekerjaan</h1>
            <div class="grid grid-cols-12 py-4 gap-5">
                <div class="col-span-12 lg:col-span-6">
                    <label for="ads" class="block mb-2 text-sm text-slate-500">Type Ads</label>
                    <select id="ads" class="mb-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5">
                        <option selected>Others</option>
                    </select>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <label class="block mb-2 text-sm text-slate-500" for="file_input">Bukti Request dari user</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file" 
                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*">
                    <p class="mt-1 text-xs text-gray-500" id="file_input_help">Docx, Pdf, PPT, Png, Jpg, Svg.</p>
                </div>
            </div>
        </div>

        <div class="px-5 border-b-[4px] border-slate-50 pb-5 mb-5">
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 md:col-span-6">
                    <label for="first_name" class="block mb-2 text-sm text-slate-500">Posisi Pekerjaan</label>
                    <input type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="" required>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <label for="first_name" class="block mb-2 text-sm text-slate-500">Gaji</label>
                    <input type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="" required>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <label for="ads" class="block mb-2 text-sm text-slate-500">Job Category</label>
                    <select id="ads" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5">
                        <option selected>Category</option>
                    </select>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <label for="ads" class="block mb-2 text-sm text-slate-500">Lokasi</label>
                    <select id="ads" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5">
                        <option selected>Lokasi</option>
                    </select>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <label for="ads" class="block mb-2 text-sm text-slate-500">Job Level</label>
                    <select id="ads" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5">
                        <option selected>Staff</option>
                    </select>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <label for="number-input" class="block mb-2 text-sm text-slate-500">Min pengalaman (thn)</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="0 jika tidak perlu" required>
                </div>
            </div>
        </div>

        <div class="px-5 pb-5">
            <h3 class="font-medium mb-3">Company Details</h3>
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 md:col-span-6">
                    <div class="flex flex-col gap-4">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm text-slate-500">Nama Perusahaan</label>
                            <input type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="" required>
                        </div>
                        <div>
                            <label for="ads" class="block mb-2 text-sm text-slate-500">Industri</label>
                            <select id="ads" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5">
                                <option selected>FCMG</option>
                            </select>
                        </div>
                        <div>
                            <label for="ads" class="block mb-2 text-sm text-slate-500">Tentang Perusahaan</label>
                            <textarea id="ads" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" rows="5" placeholder="Deskripsi perusahaan"></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="flex flex-col gap-4">
                        <div>
                            <label for="ads" class="block mb-2 text-sm text-slate-500">Alamat</label>
                            <textarea id="ads" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" rows="5"></textarea>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm text-slate-500" for="file_input">Add logo Company</label>
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file" 
                                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*">
                        </div>
                        <div>
                            <label for="ads" class="block mb-2 text-sm text-slate-500">Tampilkan nama perusahaan</label>
                            <select id="ads" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5">
                                <option selected>Ya</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-span-12">
                    <button class="px-4 py-2 text-sm bg-emerald-700 text-white rounded-lg w-full">Lanjut</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'job-add',
})
</script>