<script setup>
definePageMeta({
    layout: 'fixed',
})
</script>

<script>
export default {
    data(){
        return {
            countries : [
                { key: 'us', value: 'United States' },
                { key: 'ca', value: 'Canada' },
                { key: 'fr', value: 'France' },
            ],
            industries : [
                { key: 'it', value: 'Information Technology' },
                { key: 'eng', value: 'Engineering' },
                { key: 'med', value: 'Medical' },
                { key: 'fin', value: 'Finance' },
                { key: 'edu', value: 'Education' },
                { key: 'man', value: 'Manufacturing' },
                { key: 'art', value: 'Arts and Entertainment' },
                { key: 'mar', value: 'Marketing' },
                { key: 'ret', value: 'Retail' },
                { key: 'agr', value: 'Agriculture' }
            ]
        }
    },
    mounted() {
       
    },
};
</script>

<template>
    <div>
        <section class="bg-cover aspect-video min-h-screen" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/image/hero.png'), lightgray 0px -117px / 100% 117.676% no-repeat; background-size:cover; background-repeat: no-repeat;">
            <div class="container mx-auto h-full px-5">
                <div class="grid grid-cols-12 items-center h-full">
                    <div class="col-span-6">
                        <h1 class="mb-8 text-white text-5xl font-semibold mb-4">Jelajahi Peluang Kerja Terbaik Bersama Kami</h1>
                        <input type="text" placeholder="Cari Lowongan (Cth: Marketing, Product Manager...)" class="mb-4 w-full rounded-3xl focus:ring-2 focus:ring-primary focus:ring-opacity-70 text-gray-800 focus:border-white p-3 px-4 bg-white">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <PartialsSelect @selected="SelectedKategori" :options="industries" :label="'Kategori'" />
                            <PartialsSelect @selected="SelectedLokasi" :options="countries" :label="'Lokasi'" />
                        </div>
                        <PartialsButton>Cari Pekerjaan</PartialsButton>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-100 py-[4em]">
            <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 gap-8">
                    <NuxtLink to="/lowongan" class="col-span-4">
                        <div class="w-[6em] h-[6em] bg-primary rounded-[99px] mb-[-3em] relative z-10 ms-[2em]">
                            <NuxtImg src="/icon/it.svg" alt="Icon Industries" width="100" height="100" />
                        </div>
                        <div class="p-6 px-8 pt-[4em] bg-white rounded-3xl shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                            <h3 class="text-xl mb-2">Lorem Ipsum Dikit Aja</h3>
                            <ol class="list-disc ms-5">
                                <li class="mb-1 text-sm text-gray-500">List Item Job First</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Second</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Third</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fourth</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fifth</li>
                            </ol>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/lowongan" class="col-span-4">
                        <div class="w-[6em] h-[6em] bg-primary rounded-[99px] mb-[-3em] relative z-10 ms-[2em]">
                            <NuxtImg src="/icon/it.svg" alt="Icon Industries" width="100" height="100" />
                        </div>
                        <div class="p-6 px-8 pt-[4em] bg-white rounded-3xl shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                            <h3 class="text-xl mb-2">Lorem Ipsum Dikit Aja</h3>
                            <ol class="list-disc ms-5">
                                <li class="mb-1 text-sm text-gray-500">List Item Job First</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Second</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Third</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fourth</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fifth</li>
                            </ol>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/lowongan" class="col-span-4">
                        <div class="w-[6em] h-[6em] bg-primary rounded-[99px] mb-[-3em] relative z-10 ms-[2em]">
                            <NuxtImg src="/icon/it.svg" alt="Icon Industries" width="100" height="100" />
                        </div>
                        <div class="p-6 px-8 pt-[4em] bg-white rounded-3xl shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                            <h3 class="text-xl mb-2">Lorem Ipsum Dikit Aja</h3>
                            <ol class="list-disc ms-5">
                                <li class="mb-1 text-sm text-gray-500">List Item Job First</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Second</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Third</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fourth</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fifth</li>
                            </ol>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/lowongan" class="col-span-4">
                        <div class="w-[6em] h-[6em] bg-primary rounded-[99px] mb-[-3em] relative z-10 ms-[2em]">
                            <NuxtImg src="/icon/it.svg" alt="Icon Industries" width="100" height="100" />
                        </div>
                        <div class="p-6 px-8 pt-[4em] bg-white rounded-3xl shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                            <h3 class="text-xl mb-2">Lorem Ipsum Dikit Aja</h3>
                            <ol class="list-disc ms-5">
                                <li class="mb-1 text-sm text-gray-500">List Item Job First</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Second</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Third</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fourth</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fifth</li>
                            </ol>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/lowongan" class="col-span-4">
                        <div class="w-[6em] h-[6em] bg-primary rounded-[99px] mb-[-3em] relative z-10 ms-[2em]">
                            <NuxtImg src="/icon/it.svg" alt="Icon Industries" width="100" height="100" />
                        </div>
                        <div class="p-6 px-8 pt-[4em] bg-white rounded-3xl shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                            <h3 class="text-xl mb-2">Lorem Ipsum Dikit Aja</h3>
                            <ol class="list-disc ms-5">
                                <li class="mb-1 text-sm text-gray-500">List Item Job First</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Second</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Third</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fourth</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fifth</li>
                            </ol>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/lowongan" class="col-span-4">
                        <div class="w-[6em] h-[6em] bg-primary rounded-[99px] mb-[-3em] relative z-10 ms-[2em]">
                            <NuxtImg src="/icon/it.svg" alt="Icon Industries" width="100" height="100" />
                        </div>
                        <div class="p-6 px-8 pt-[4em] bg-white rounded-3xl shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                            <h3 class="text-xl mb-2">Lorem Ipsum Dikit Aja</h3>
                            <ol class="list-disc ms-5">
                                <li class="mb-1 text-sm text-gray-500">List Item Job First</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Second</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Third</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fourth</li>
                                <li class="mb-1 text-sm text-gray-500">List Item Job Fifth</li>
                            </ol>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

