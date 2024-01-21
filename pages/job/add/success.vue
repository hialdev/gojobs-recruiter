<template>
    <div class="container mx-auto py-5">
        <NuxtLink to="/jobs" class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg>
            <span class="font-medium">Kembali ke Jobs</span>
        </NuxtLink>
        <div class="flex items-center justify-center py-10">
            <div class="max-w-[35em] text-center">
                <h3 class="text-lg mb-3 font-medium text-emerald-600">Lowongan Pekerjaan Berhasil Dibuat!</h3>
                <p class="text-sm mb-3">Marketing berhasil dibuat, Anda dapat melihatnya di website gojobs dan jangan lupa untuk membagikannya!</p>
                <div class="rounded-xl overflow-hidden my-4">
                    <NuxtImg class="block w-full" src="https://placeholder.co/400x100" />
                    <div class="p-5 bg-white text-start">
                        <h6 class="text-sm font-medium mb-2">Marketing</h6>
                        <p class="text-sm mb-1">030149/ISH/01010107/2023</p>
                        <p class="text-xs">Jakarta Selatan</p>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-x-2">
                    <button class="p-2 px-4 text-sm rounded-lg border border-emerald-600 text-emerald-600">Lihat di Gojobs</button>
                    <button class="p-2 px-4 text-sm rounded-lg border border-emerald-600 bg-emerald-600 text-white">Share</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>