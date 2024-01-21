<template>
    <div>
        <div class="border-b pb-3 mb-3">
            <h3 class="font-medium">Confirmation Email</h3>
            <p class="text-sm text-slate-500">Setiap pemohon menerima pemberitahuan konfirmasi default untuk mengkonfirmasi aplikasi mereka</p>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900">Use custom auto response</span>
        </label>
        <div class="my-4 grid grid-cols-12 items-start gap-4">
            <div class="col-span-3"><span class="text-sm block">Subject</span></div>
            <div class="col-span-9">
                <input type="text" name="" id="" class="block w-full p-2 px-4 rounded-lg border-2 border-slate-100">
            </div>
            <div class="col-span-3"><span class="text-sm block">Body</span></div>
            <div class="col-span-9">
                <textarea name="" id="" cols="30" rows="10" class="block w-full p-2 px-4 rounded-lg border-2 border-slate-100 mb-3" placeholder="Body Message"></textarea>
                <button class="text-sm p-2 px-4 rounded-lg bg-emerald-600 text-white">Save</button>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'job-setting'
})
</script>