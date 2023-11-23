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
                        <h1 class="mb-8 text-white text-4xl lg:text-5xl font-semibold mb-4">Jelajahi Peluang Kerja Terbaik Bersama Kami</h1>
                        <input type="text" placeholder="Cari Lowongan (Cth: Marketing, Product Manager...)" class="mb-4 w-full rounded-3xl focus:ring-2 focus:ring-primary focus:ring-opacity-70 text-slate-800 focus:border-white p-3 px-4 bg-white">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <PartialsSelect @selected="SelectedKategori" :options="industries" :label="'Kategori'" />
                            <PartialsSelect @selected="SelectedLokasi" :options="countries" :label="'Lokasi'" />
                        </div>
                        <PartialsButton>Cari Lowongan</PartialsButton>
                        <NuxtLink to="/lowongan" class="mt-8 text-normal lowercase text-white flex items-center gap-4">lihat semua lowongan <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379l-1.97 1.97Z" clip-rule="evenodd"/></svg></NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-[4em] bg-slate-200">
            <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 md:gap-8">
                    <div class="col-span-12">
                        <h2 class="text-2xl text-center my-9">Industri pekerjaan yang dibutuhkan</h2>
                    </div>
                    <div v-for="industry in industriesList" :key="industry.title" class="col-span-12 md:col-span-6 lg:col-span-4 mb-8 md:mb-0">
                        <NuxtLink :to="industry.to" class="block w-full">
                            <div class="relative z-10 w-full">
                                <NuxtImg :src="industry.image?.src" :alt="industry.image?.alt" :width="industry.image?.width" :height="industry.image?.height" class="mx-auto w-[6em] h-[6em] rounded-[99px] mb-[-3em]" />
                            </div>
                            <div class="p-6 px-8 pt-[4em] bg-white rounded-[50px] shadow-4xl hover:shadow-2xl hover:shadow-orange-300/20">
                                <h3 class="text-xl mb-4">{{industry.title}}</h3>
                                <ol v-for="(job, index) in industry.listJobs" :key="index" class="list-disc ms-5">
                                    <li class="text-sm text-slate-500">{{job}}</li>
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
                
                    <div v-for="(value, index) in values" :key="index" class="col-span-12 sm:col-span-6 lg:col-span-3">
                        <div class="p-6 h-full rounded-3xl bg-white">
                            <NuxtImg 
                                :src="value?.icon?.src"
                                :alt="value?.icon?.alt"
                                class="mb-3"
                                :width="value?.icon?.width"
                                :height="value?.icon?.height"
                            />
                            <h3 class="text-normal md:text-xl mb-2 lg:mb-3">{{value?.title}}</h3>
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
                            <div class="flex items-center gap-5">
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/fb.svg" /></NuxtLink>
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/x.svg" /></NuxtLink>
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/ig.svg" /></NuxtLink>
                                <NuxtLink to="" class="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-[99px] p-2 hover:border-primary cursor-pointer"><NuxtImg class="hover:text-primary" src="/icon/yt.svg" /></NuxtLink>
                            </div>
                        </div>
                        <div class="order-1 lg:order-none col-span-6 lg:col-span-3">
                            <nav class="flex flex-col gap-2">
                                <h5 class="text-xl lg:text-2xl font-semibold text-white">Link Terkait</h5>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Tentang Perusahaan</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Proses Rekrutmen</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Industri Pekerjaan</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Kebijakan Privasi</a>
                            </nav>
                        </div>
                        <div class="order-last lg:order-none col-span-6 lg:col-span-3">
                            <nav class="flex flex-col gap-2">
                                <h5 class="text-xl lg:text-2xl font-semibold text-white">Layanan</h5>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">CV Gratis</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Pencari Lowongan</a>
                                <a href="" class="text-white hover:underline hover:underline-2 hover:decoration-primary">Bantuan</a>
                            </nav>
                        </div>
                        <div class="col-span-12 lg:col-span-3 mb-12 lg:mt-0">
                            <nav class="flex flex-col gap-5">
                                <h5 class="text-xl lg:text-2xl font-semibold text-white">Kontak Informasi</h5>
                                <div class="flex items-center gap-6">
                                    <NuxtImg class="w-[40px] h-[40px]" src="/icon/phone.svg" />
                                    <div>
                                        <div class="text-xs text-slate-400">Nomor Telepon</div>
                                        <a href="" class="hover:underline hover:underline-2 hover:decoration-primary text-normal lg:text-xl text-white">0420 102 198</a>
                                    </div>
                                </div>
                                <div class="flex items-center gap-6">
                                    <NuxtImg class="w-[40px] h-[40px]" src="/icon/mail.svg" />
                                    <div>
                                        <div class="text-xs text-slate-400">Email</div>
                                        <a href="" class="hover:underline hover:underline-2 hover:decoration-primary text-normal lg:text-xl text-white">hi@gojobs.id</a>
                                    </div>
                                </div>
                                <div class="flex items-center gap-6">
                                    <NuxtImg class="w-[40px] h-[40px]" src="/icon/location.svg" />
                                    <div>
                                        <div class="text-xs text-slate-400">Lokasi</div>
                                        <a href="" class="hover:underline hover:underline-2 hover:decoration-primary text-normal lg:text-xl text-white">Fatmawati, Jakarta</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#182430]">
                <div class="flex items-center gap-2 justify-center bg-gray-900 p-8 text-center text-white">
                    &copy; Made with 
                    <div class="text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M239.125 97.438c-8.085.263-14.998 3.486-22.125 9.062c-10.136 7.93-19.822 21.153-28.906 36.47c-12.06 20.333-22.702 43.987-35.188 63.686l1.156.72c-.418.68-.383.62-.25 1.374c.134.754.767 2.354 2.407 4.5c3.277 4.293 10.342 10.21 19.936 16.156c19.188 11.89 48.29 24.49 78.813 34.906c30.52 10.418 62.6 18.744 87.874 22.625c12.637 1.94 23.6 2.753 31.406 2.313c6.83-.385 10.57-2.374 11.094-2.47c2.313-12.74 5.12-26.273 7.437-40.03c5.32-31.57 7.318-63.1-.686-79.188c-7.48-15.038-17.617-20.69-29.03-22.375c-7.012-1.034-14.537-.068-21.627 1.97c8.783 5.46 18.177 9.676 28.594 11.624l-3.436 18.376c-29.7-5.554-51.25-24.54-69.344-42c-18.093-17.46-33.43-33.012-47.156-36.437c-3.314-.828-6.41-1.236-9.344-1.282a31.44 31.44 0 0 0-1.625 0zM51.72 172.156c-3.565.077-6.743.487-9.532 1.22c-11.158 2.926-17.707 9.42-21.282 27.343c-5.598 28.066 2.315 52.298 19.938 74.874c17.622 22.576 45.243 42.83 77.625 59.937c62.247 32.887 141.57 54.053 199.155 63.19l7.594-18.064l4.342-10.28l9.344 6.062l54.25 35.062c32.376 2.315 60.15-1.828 77.78-10.563c9.02-4.468 15.296-9.976 18.94-16.062c3.642-6.086 5.003-12.87 3.437-21.72c-4.446-25.12-12.418-39.6-23.375-49.31c-10.958-9.712-25.828-15.125-45.313-19.22c-6.452-1.356-13.402-2.563-20.75-3.75c-2.82 16.205-4.812 30.047-4.188 38.344c.416 5.53-2.52 11.542-6.625 14.717c-4.104 3.176-8.748 4.535-13.843 5.407c-10.19 1.743-22.893 1.178-37.908-.75c-30.03-3.857-68.82-13.617-106.125-26.375c-37.304-12.76-72.902-28.365-96.687-44.908c-11.892-8.27-21.073-16.588-25.813-26.78c-2.37-5.097-3.465-10.944-2.28-16.688c1.183-5.744 4.534-10.91 9.156-15.094c5.593-5.063 11.163-12.628 16.78-21.625c-15.758-6.912-30.355-12.82-43.468-17.125c-16.417-5.39-30.464-8.075-41.156-7.844zm88.968 51.47c-2.743 3.246-5.603 6.26-8.594 8.968c-2.423 2.193-3.146 3.77-3.406 5.03c-.26 1.262-.158 2.677.937 5.032c2.19 4.71 9.037 11.992 19.563 19.313c21.05 14.64 55.74 30.15 92.03 42.56c36.292 12.413 74.398 21.896 102.47 25.5c14.035 1.804 25.686 2.02 32.375.876c2.73-.467 4.262-1.1 4.968-1.47c-.39-6.627.103-14.072 1.095-22.123c-2.2.287-4.467.46-6.813.593c-9.955.562-21.878-.436-35.312-2.5c-26.868-4.126-59.644-12.682-91.063-23.406c-31.418-10.724-61.326-23.52-82.625-36.72c-10.65-6.598-19.196-13.17-24.937-20.686c-.24-.316-.456-.648-.688-.97z"/></svg>
                    </div>
                    by Infomedia Solusi Humanika - 2023
                </div>
            </div>
        </footer>
    </div>
</template>