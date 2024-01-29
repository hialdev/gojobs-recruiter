<template>
    <div>
        <client-only>
            <div class="px-5 pb-5">
                <h2 class="mb-5 font-medium">Tambah Deskripsi Pekerjaan</h2>
                <h4 class="text-sm mb-3">Deskripsi Pekerjaan</h4>
                <PartialFormEditor />
                <div class="my-5 flex justify-end">
                    <Button @click="navigateTo('/job/add/3')" class="text-white bg-emerald-700 p-2 px-5 rounded text-sm">Lanjut</Button>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script setup>
definePageMeta({
    layout:"job-add",
})
</script>