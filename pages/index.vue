<script setup>
definePageMeta({
    layout: 'fixed',
})
</script>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import required modules

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

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
            ],
            industriesList : [
                {
                    title: "Teknologi Informasi",
                    listJobs: [
                        "Software Engineer",
                        "Database Administrator",
                        "Network Administrator",
                        "IT Project Manager",
                        "UI/UX Designer",
                    ],
                    to: "/lowongan",
                    image: {
                        src: "/icon/it.svg",
                        alt: "Icon Teknologi Informasi Industry",
                        width: 100,
                        height: 100,
                    },
                },
                {
                    title: "Keuangan dan Bisnis",
                    listJobs: [
                        "Accountant",
                        "Financial Analyst",
                        "Investment Banker",
                        "Marketing Manager",
                        "Business Development Executive",
                    ],
                    to: "/lowongan",
                    image: {
                        src: "/icon/finance.svg",
                        alt: "Icon Keuangan dan Bisnis Industry",
                        width: 100,
                        height: 100,
                    },
                },
                {
                    title: "Ritel dan Penjualan",
                    listJobs: [
                        "Retail Sales Associate",
                        "Store Manager",
                        "Sales Representative",
                        "Customer Service Representative",
                        "E-commerce Specialist",
                    ],
                    to: "/lowongan",
                    image: {
                        src: "/icon/ritel.svg",
                        alt: "Icon Ritel dan Penjualan Industry",
                        width: 100,
                        height: 100,
                    },
                },
                {
                    title: "Hubungan Masyarakat",
                    listJobs: [
                        "Public Relations Specialist",
                        "Communications Manager",
                        "Social Media Coordinator",
                        "Event Planner",
                        "Content Writer",
                    ],
                    to: "/lowongan",
                    image: {
                        src: "/icon/humas.svg",
                        alt: "Icon Hubungan Masyarakat Industry",
                        width: 100,
                        height: 100,
                    },
                },
                {
                    title: "Manufaktur dan Produksi",
                    listJobs: [
                        "Manufacturing Engineer",
                        "Production Supervisor",
                        "Quality Control Inspector",
                        "Supply Chain Manager",
                        "Operations Manager",
                    ],
                    to: "/lowongan",
                    image: {
                        src: "/icon/manufaktur.svg",
                        alt: "Icon Manufaktur dan Produksi Industry",
                        width: 100,
                        height: 100,
                    },
                },
                {
                    title: "Pariwisata dan Perhotelan",
                    listJobs: [
                        "Hotel Manager",
                        "Tour Guide",
                        "Event Coordinator",
                        "Travel Consultant",
                        "Catering Manager",
                    ],
                    to: "/lowongan",
                    image: {
                        src: "/icon/pariwisata.svg",
                        alt: "Icon Pariwisata dan Perhotelan Industry",
                        width: 100,
                        height: 100,
                    },
                }
            ],
            values: [
                {
                    title: "Brand Terbaik",
                    icon: {
                        src: "/icon/achiev.svg",
                        width: 50,
                        height: 50,
                    },
                    description: "Peluang kerja dari perusahaan terkemuka yang bekerja sama dengan gojobs.",
                },
                {
                    title: "Pengembangan",
                    icon: {
                        src: "/icon/toga.svg",
                        width: 50,
                        height: 50,
                    },
                    description: "Pelatihan pengembangan keterampilan membantu meningkatkan keahlian Anda.",
                },
                {
                    title: "Regulasi",
                    icon: {
                        src: "/icon/letter.svg",
                        width: 50,
                        height: 50,
                    },
                    description: "Remunerasi memenuhi aturan atau regulasi pemerintah.",
                },
                {
                    title: "Benefit Kesejahteraan",
                    icon: {
                        src: "/icon/health.svg",
                        width: 50,
                        height: 50,
                    },
                    description: "Diikut sertakan dalam program asuransi kesehatan nasional (BPJS).",
                },
                {
                    title: "CV Gratis",
                    icon: {
                        src: "/icon/card.svg",
                        width: 50,
                        height: 50,
                    },
                    description: "Buat CV Anda secara gratis dengan alat yang mudah digunakan.",
                },
                {
                    title: "Share",
                    icon: {
                        src: "/icon/health.svg",
                        width: 50,
                        height: 50,
                    },
                    description: "Dapat dengan mudah menyebarkan peluang kerja menarik kepada rekan Anda.",
                },
            ],
            recruitmentProcess: [
                {
                    number: 1,
                    title: "Screening",
                    description: "Proses awal seleksi berkas dan informasi kandidat.",
                },
                {
                    number: 2,
                    title: "Psikotest",
                    description: "Pengujian psikologi untuk mengukur kecocokan kandidat dengan posisi yang dibutuhkan.",
                },
                {
                    number: 3,
                    title: "Wawancara HR",
                    description: "Wawancara dengan tim HR untuk menilai kemampuan dan kecocokan kandidat dengan perusahaan.",
                },
                {
                    number: 4,
                    title: "Wawancara User",
                    description: "Wawancara dengan tim atau individu yang akan bekerja bersama kandidat.",
                },
                {
                    number: 5,
                    title: "Hiring",
                    description: "Proses akhir pemilihan dan penawaran pekerjaan kepada kandidat terpilih.",
                },
            ],
            testimonials: [
                {
                    name: "Albert Flores",
                    rate: 5,
                    position: "Admin HR",
                    quote: "GoJobs membantu saya menemukan kandidat berkualitas dengan cepat dan mudah.",
                },
                {
                    name: "Eva Simmons",
                    rate: 4,
                    position: "Recruitment Manager",
                    quote: "Pelayanan pelanggan GoJobs sangat responsif dan membantu kami mengelola proses rekrutmen dengan baik.",
                },
                {
                    name: "John Carter",
                    rate: 5,
                    position: "Senior Developer",
                    quote: "Saya sangat senang bisa bergabung dengan perusahaan ini melalui GoJobs. Prosesnya sangat lancar dan efisien.",
                },
                {
                    name: "Grace Lee",
                    rate: 3,
                    position: "Marketing Specialist",
                    quote: "GoJobs memberikan banyak peluang pekerjaan menarik, namun masih perlu beberapa fitur penyempurnaan.",
                },
                {
                    name: "Diana Miller",
                    rate: 5,
                    position: "HR Coordinator",
                    quote: "Pengalaman menggunakan GoJobs sangat memuaskan. Saya merekomendasikannya kepada rekan-rekan HR lainnya.",
                },
            ],
        }
    },
    mounted() {
       
    },
};
</script>

<template>
    <div>
        <AuthLogin />
        <section class="bg-cover min-h-screen" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/image/hero.png'), lightgray 0px -117px / 100% 117.676% no-repeat; background-size:cover; background-repeat: no-repeat;">
            <div class="container mx-auto h-screen px-5">
                <div class="grid grid-cols-12 items-center h-full">
                    <div class="col-span-12 lg:col-span-6">
                        <h1 class="mb-8 text-white text-5xl font-semibold mb-4">Jelajahi Peluang Kerja Terbaik Bersama Kami</h1>
                        <input type="text" placeholder="Cari Lowongan (Cth: Marketing, Product Manager...)" class="mb-4 w-full rounded-3xl focus:ring-2 focus:ring-primary focus:ring-opacity-70 text-slate-800 focus:border-white p-3 px-4 bg-white">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <PartialsSelect @selected="SelectedKategori" :options="industries" :label="'Kategori'" />
                            <PartialsSelect @selected="SelectedLokasi" :options="countries" :label="'Lokasi'" />
                        </div>
                        <PartialsButton>Cari Pekerjaan</PartialsButton>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-[4em] bg-slate-200">
            <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-12">
                        <h2 class="text-2xl text-center my-9">Industri pekerjaan yang dibutuhkan</h2>
                    </div>
                    <div v-for="industry in industriesList" :key="industry.title" class="col-span-12 md:col-span-6 lg:col-span-4">
                        <NuxtLink :to="industry.to">
                            <div class="relative z-10 w-full">
                                <NuxtImg :src="industry.image?.src" :alt="industry.image?.alt" :width="industry.image?.width" :height="industry.image?.height" class="mx-auto w-[6em] h-[6em] rounded-[99px] mb-[-3em]" />
                            </div>
                            <div class="p-6 px-8 pt-[4em] bg-white rounded-[50px] shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                                <h3 class="text-xl mb-2">{{industry.title}}</h3>
                                <ol v-for="(job, index) in industry.listJobs" :key="index" class="list-disc ms-5">
                                    <li class="mb-1 text-sm text-slate-500">{{job}}</li>
                                </ol>
                            </div>
                        </NuxtLink>
                    </div>
                    
                </div>
            </div>
        </section>

        <section class="bg-slate-100 py-[5em]">
            <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 gap-6 items-stretch">
                    <div class="col-span-12 lg:col-span-6">
                        <h2 class="text-2xl mb-3">Berbagai keuntungan untukmu!</h2>
                        <p class="text-slate-500">Temukan peluang tak terbatas dan hadapi tantangan baru. Jangan lewatkan momen untuk menciptakan masa depan suksesmu. Gabunglah sekarang bersama gojobs!</p>
                    </div>
                
                    <div v-for="(value, index) in values" :key="index" class="col-span-6 lg:col-span-3">
                        <div class="p-6 h-full rounded-3xl bg-white">
                            <NuxtImg 
                                :src="value?.icon?.src"
                                :alt="value?.icon?.alt"
                                class="mb-3"
                                :width="value?.icon?.width"
                                :height="value?.icon?.height"
                            />
                            <h3 class="text-xl mb-2 lg:mb-3">{{value?.title}}</h3>
                            <p class="line-clamp-5 text-slate-500 text-sm lg:text-normal">{{value?.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-[5em] bg-white">
            <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 lg:gap-12">
                    <div class="col-span-12 mb-12 lg:mb-0 lg:col-span-5">
                        <NuxtImg
                            src="/image/alur.png"
                            alt="Pekerja yang ceria di Gojobs"
                            class="w-full"
                            height="643"
                            width="599"
                        />
                    </div>
                    <div class="col-span-12 lg:col-span-7">
                        <h2 class="text-2xl mb-3">Alur Proses Rekurtmen</h2>
                        <p class="text-slate-500 mb-6">Mendapatkan pekerjaan dapat melibatkan beberapa langkah penting, berikut beberapa tip umum yang dapat membantu Anda dalam pekerjaan Anda.</p>
                        
                        <ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">                  
                            <li v-for="alur in recruitmentProcess" :key="alur.number" class="mb-7 ms-6">            
                                <span class="absolute flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full -start-5 ring-4 ring-orange-300/40">
                                    {{alur?.number}}
                                </span>
                                <div class="ps-4">
                                    <h3 class="font-medium mb-3 text-primary">{{alur?.title}}</h3>
                                    <p class="text-sm">{{alur?.description}}</p>
                                </div>
                            </li>
                            
                        </ol>

                    </div>
                </div>
            </div>
        </section>

        <section class="bg-slate-100 py-[7em] rounded-t-[3em] md:rounded-t-[5em]">
            <div class="container mx-auto px-5">
                <div class="text-center max-w-[40em] mx-auto mb-[4em]">
                    <h2 class="text-2xl mb-3">Testimoni</h2>
                    <p class="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <swiper
                    :slidesPerView="'auto'"
                    :spaceBetween="30"
                    :pagination="{
                        clickable: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(testimonial,index) in testimonials" :key="index" class="max-w-[30em]">
                        <div class="p-6 bg-white rounded-3xl">
                            <div class="flex items-center gap-2 mb-4">
                                <template v-for="star in Array(testimonial.rate).fill('')">
                                    <NuxtImg src="/icon/star.svg" class="w-[20px]" />
                                </template>
                            </div>
                            <q class="text-slate-500">{{testimonial?.quote}}</q>
                            <div class="flex items-center mt-4 justify-between">
                                <div class="flex items-center gap-4">
                                    <NuxtImg 
                                        src="/image/person.png"
                                        alt="Person Profile Testimonial"
                                        width="60"
                                        height="60"
                                        class="rounded-[50px]"
                                    />
                                    <div>
                                        <h4 class="text-xl uppercase">{{testimonial?.name}}</h4>
                                        <p class="text-sm text-blue-600">{{testimonial?.position}}</p>
                                    </div>
                                </div>
                                <div class="text-primary">
                                    <NuxtImg 
                                        src="/icon/quote.svg"
                                        alt="quote icon"
                                        class="w-full h-[2em] text-primary"
                                    />
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    
                </swiper>
            </div>
        </section>

        <footer class="bg-slate-100">
            <div class="bg-[#182430] rounded-t-[3em] md:rounded-t-[5em]">
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 py-[4em] lg:py-[6em] px-5 lg:gap-12">
                        <div class="col-span-12 lg:col-span-3 mb-12 lg:mb-0">
                            <NuxtImg src="/image/gojobs-logo-full-whte.svg" class="h-[2em] mb-6" />
                            <p class="text-white mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="flex items-center gap-6">
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/fb.svg" /></NuxtLink>
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/x.svg" /></NuxtLink>
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/ig.svg" /></NuxtLink>
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/yt.svg" /></NuxtLink>
                            </div>
                        </div>
                        <div class="col-span-6 lg:col-span-3">
                            <nav class="flex flex-col gap-6">
                                <h5 class="text-2xl font-semibold text-white">Link Terkait</h5>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Tentang Perusahaan</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Proses Rekrutmen</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Industri Pekerjaan</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Kebijakan Privasi</a>
                            </nav>
                        </div>
                        <div class="col-span-6 lg:col-span-3">
                            <nav class="flex flex-col gap-6">
                                <h5 class="text-2xl font-semibold text-white">Layanan</h5>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">CV Gratis</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Pencari Lowongan</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Bantuan</a>
                            </nav>
                        </div>
                        <div class="col-span-12 lg:col-span-3 mt-12 lg:mt-0">
                            <nav class="flex flex-col gap-6">
                                <h5 class="text-2xl font-semibold text-white">Kontak Informasi</h5>
                                <div class="flex items-center gap-6">
                                    <NuxtImg class="w-[40px] h-[40px]" src="/icon/phone.svg" />
                                    <div>
                                        <div class="text-xs text-slate-400">Nomor Telepon</div>
                                        <a href="" class="hover:underline hover:underline-2 hover:decoration-primary text-xl text-white">0420 102 198</a>
                                    </div>
                                </div>
                                <div class="flex items-center gap-6">
                                    <NuxtImg class="w-[40px] h-[40px]" src="/icon/mail.svg" />
                                    <div>
                                        <div class="text-xs text-slate-400">Email</div>
                                        <a href="" class="hover:underline hover:underline-2 hover:decoration-primary text-xl text-white">hi@gojobs.id</a>
                                    </div>
                                </div>
                                <div class="flex items-center gap-6">
                                    <NuxtImg class="w-[40px] h-[40px]" src="/icon/location.svg" />
                                    <div>
                                        <div class="text-xs text-slate-400">Lokasi</div>
                                        <a href="" class="hover:underline hover:underline-2 hover:decoration-primary text-xl text-white">Fatmawati, Jakarta</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#182430]">
                <div class="bg-gray-900 p-8 text-center text-white">
                    &copy; Made with love by Infomedia Solusi Humanika - 2023
                </div>
            </div>
        </footer>
    </div>
</template>