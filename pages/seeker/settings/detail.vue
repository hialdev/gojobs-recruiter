<template>
    <div>
        <div class="bg-white p-6 rounded-xl mb-6">
            <div class="py-3 border-b">
                <h3 class="font-medium">Perbarui Email</h3>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-6 py-6">
                    <div class="mb-2">johnsmith@gmail.com</div>
                    <div class="flex items-center gap-2">
                        <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-2 16l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"/></svg>
                        <span class="text-sm text-slate-500">Alamat email telah diverifikasi</span>
                    </div>
                </div>
                <div class="col-span-6 py-6">
                    <PartialsInput class="m-0" :inputClass="`border rounded-xl`" :placeholder="`Masukan Email Baru`" />
                    <PartialsButton>Perbarui Email</PartialsButton>
                </div>
            </div>
        </div>
        <div class="bg-white p-6 rounded-xl">
            <div class="py-3 border-b">
                <h3 class="font-medium">Ganti Kata Sandi</h3>
            </div>
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-6 py-6">
                    <PartialsInput :typeInput="`password`" :inputClass="`border rounded-xl`" :placeholder="`Kata sandi lama`" />
                </div>
                <div class="col-span-6 py-6">
                    <PartialsInput :typeInput="`password`" :inputClass="`border rounded-xl`" :placeholder="`Kata sandi baru`" />
                    <PartialsInput :typeInput="`password`" :inputClass="`border rounded-xl`" :placeholder="`Konfirmasi Kata sandi baru`" />
                    <PartialsButton>Perbarui Email</PartialsButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'seeker-setting',
})
</script>