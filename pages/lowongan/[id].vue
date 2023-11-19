<template>
    <div class="bg-slate-100 min-h-screen py-[3em]">
        <div class="container mx-auto">
            <div class="flex items-center gap-5 mb-8">
                <div class="flex-1">
                    <PartialsSearch :label="`Posisi / Jabatan`" />
                </div>
                <PartialsMultiselect :label="`Jenis kerja`" :svgData="svgJenisKontrak" :options="[{'key':1,'value':'full time'},{'key':2,'value':'part time'},{'key':3,'value':'freelance'},{'key':4,'value':'remote'}]" />
                <PartialsMultiselect :label="`Lokasi`" :svgData="svgLocation" :options="countries" />
                <PartialsButton>Cari</PartialsButton>
            </div>

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-3 max-h-[80em] listjob overflow-auto p-1">
                    <div v-for="job in jobs" :key="id" >
                        <NuxtLink :to="`/lowongan/${job?.id}`" class="block mb-5 bg-white rounded-3xl p-6 hover:ring-4 hover:ring-orange-700/20 border border-white hover:border-primary">
                            <div class="flex items-center justify-between">
                                <NuxtImg :src="job?.logo" :alt="`Logo ${job?.company}`" class="h-[3em] mb-3" />
                                <div class="w-[24px] cursor-pointer text-orange-100 hover:text-orange-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor">
                                        <path d="M23.75 26.25L15 21.25L6.25 26.25V6.25C6.25 5.58696 6.51339 4.95107 6.98223 4.48223C7.45107 4.01339 8.08696 3.75 8.75 3.75H21.25C21.913 3.75 22.5489 4.01339 23.0178 4.48223C23.4866 4.95107 23.75 5.58696 23.75 6.25V26.25Z" stroke="#FA6900" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="text-xl">{{job?.title}}</h3>
                            <p class="text-slate-500 text-sm mb-4">{{job?.company}}</p>
                            <div class="font-medium">{{job?.location}}</div>
                            <div class="font-medium">{{job?.salary}}</div>
                            <ul class="list-disc mt-4 ms-5 text-slate-500">
                                <li v-for="(benefit, index) in job?.benefits" :key="index">{{benefit}}</li>
                            </ul>
                            <div class="flex items-center gap-4 mt-4">
                                <div class="flex items-center gap-2">
                                    <div class="text-slate-500 w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                                            <path d="M12.0039 6V12.005L16.2434 16.245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <p class="text-sm italic text-slate-500">{{job?.datePosted}}</p>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="text-slate-500 w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" fill="#A6A6A6"/>
                                        </svg>
                                    </div>
                                    <p class="text-sm italic text-slate-500">{{job?.applicants}} Aplicants</p>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-span-9">
                    <div class="bg-white rounded-3xl overflow-hidden">
                        <NuxtImg
                            src="/image/cover-company.png"
                            alt="Cover Company"
                            width="848"
                            height="166"
                            class="w-full"
                        />
                        <div class="grid grid-cols-12">
                            <div class="col-span-8 px-5 border-e-2">
                                <div class="flex items-center gap-3 py-6">
                                    <NuxtImg src="/image/company/4.png" alt="Logo Selected" class="h-[3em]" />
                                    <div>
                                        <h2 class="text-2xl">Administrative Assistant</h2>
                                        <p class="text-slate-500">Cogency Marketing Indonesia</p>
                                    </div>
                                </div>
                                <div class="py-6 border-t-2">
                                    <div class="flex items-center gap-2">
                                        <span class="span px-3 p-1 text-primary bg-orange-100 rounded-3xl">Fulltime</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return{
            svgJenisKontrak: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"> <path d="M21.5997 5.32789H16.3533V4.05109C16.3533 3.60553 16.1763 3.17822 15.8613 2.86315C15.5462 2.54809 15.1189 2.37109 14.6733 2.37109H9.32613C8.88056 2.37109 8.45325 2.54809 8.13819 2.86315C7.82313 3.17822 7.64613 3.60553 7.64613 4.05109V5.32789H2.39973C1.95416 5.32789 1.52685 5.50489 1.21179 5.81995C0.896726 6.13502 0.719727 6.56233 0.719727 7.00789V19.9487C0.719727 20.3943 0.896726 20.8216 1.21179 21.1366C1.52685 21.4517 1.95416 21.6287 2.39973 21.6287H21.5997C22.0453 21.6287 22.4726 21.4517 22.7877 21.1366C23.1027 20.8216 23.2797 20.3943 23.2797 19.9487V7.00789C23.2797 6.56233 23.1027 6.13502 22.7877 5.81995C22.4726 5.50489 22.0453 5.32789 21.5997 5.32789ZM8.60613 4.05109C8.60613 3.86014 8.68198 3.677 8.81701 3.54198C8.95203 3.40695 9.13517 3.33109 9.32613 3.33109H14.6733C14.8643 3.33109 15.0474 3.40695 15.1824 3.54198C15.3175 3.677 15.3933 3.86014 15.3933 4.05109V5.32789H8.60613V4.05109ZM1.67973 7.00789C1.67973 6.81694 1.75558 6.6338 1.89061 6.49878C2.02564 6.36375 2.20877 6.28789 2.39973 6.28789H21.5997C21.7907 6.28789 21.9738 6.36375 22.1088 6.49878C22.2439 6.6338 22.3197 6.81694 22.3197 7.00789V10.0655C22.3185 10.9002 21.9863 11.7004 21.3961 12.2906C20.8058 12.8809 20.0056 13.213 19.1709 13.2143H13.9701V11.7311C13.9701 11.6038 13.9196 11.4817 13.8295 11.3917C13.7395 11.3017 13.6174 11.2511 13.4901 11.2511H10.5093C10.382 11.2511 10.2599 11.3017 10.1699 11.3917C10.0799 11.4817 10.0293 11.6038 10.0293 11.7311V13.2143H4.82853C3.9938 13.213 3.19363 12.8809 2.60339 12.2906C2.01315 11.7004 1.681 10.9002 1.67973 10.0655V7.00789ZM13.0101 12.2111V15.1775H10.9893V12.2111H13.0101ZM22.3197 19.9487C22.3197 20.1397 22.2439 20.3228 22.1088 20.4578C21.9738 20.5928 21.7907 20.6687 21.5997 20.6687H2.39973C2.20877 20.6687 2.02564 20.5928 1.89061 20.4578C1.75558 20.3228 1.67973 20.1397 1.67973 19.9487V12.7007C2.06464 13.1619 2.54617 13.533 3.09028 13.7876C3.63438 14.0422 4.22778 14.1743 4.82853 14.1743H10.0293V15.6575C10.0293 15.7848 10.0799 15.9069 10.1699 15.9969C10.2599 16.0869 10.382 16.1375 10.5093 16.1375H13.4901C13.6174 16.1375 13.7395 16.0869 13.8295 15.9969C13.9196 15.9069 13.9701 15.7848 13.9701 15.6575V14.1743H19.1709C19.7717 14.1743 20.3651 14.0422 20.9092 13.7876C21.4533 13.533 21.9348 13.1619 22.3197 12.7007V19.9487Z" fill="currentColor"/> </svg>`,
            svgLocation: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9Z" fill="currentColor"/>
                            <path d="M18.75 8.875C18.75 12.6725 16.25 17 11.875 22C7.5 17 5 12.6725 5 8.875C5 7.05164 5.72433 5.30295 7.01364 4.01364C8.30295 2.72433 10.0516 2 11.875 2C13.6984 2 15.447 2.72433 16.7364 4.01364C18.0257 5.30295 18.75 7.05164 18.75 8.875Z" stroke="currentColor" stroke-linejoin="round"/>
                        </svg>`,
            countries : [
                { key: 'us', value: 'United States' },
                { key: 'ca', value: 'Canada' },
                { key: 'fr', value: 'France' },
            ],
            jobs : [
                {
                    id:1,
                    title: 'Administrative Assistant',
                    company: 'Cogency Marketing Indonesia',
                    location: 'Jakarta Barat',
                    salary: '4,8 - 6jt per bulan',
                    benefits: ['Fast paced', 'Hybrid working arrangement', 'Casual working environment'],
                    datePosted: '3 hari yang lalu',
                    applicants: 15,
                    logo: '/image/company/4.png',
                },
                {
                    id:2,
                    title: 'Software Developer',
                    company: 'Tech Solutions Inc.',
                    location: 'Jakarta Selatan',
                    salary: '8 - 10jt per bulan',
                    benefits: ['Flexible working hours', 'Health insurance coverage', 'Professional development opportunities'],
                    datePosted: '5 hari yang lalu',
                    applicants: 20,
                    logo: '/image/company/1.png',
                },
                {
                    id:3,
                    title: 'Marketing Specialist',
                    company: 'Dynamic Marketing Agency',
                    location: 'Tangerang',
                    salary: '5 - 7jt per bulan',
                    benefits: ['Generous commission structure', 'Team building events', 'Career advancement opportunities'],
                    datePosted: '1 minggu yang lalu',
                    applicants: 10,
                    logo: '/image/company/2.png',
                },
                {
                    id:4,
                    title: 'Graphic Designer',
                    company: 'Creative Designs Studio',
                    location: 'Depok',
                    salary: '6 - 8jt per bulan',
                    benefits: ['Creative and collaborative work environment', 'Flexible work hours', 'Career growth opportunities'],
                    datePosted: '2 minggu yang lalu',
                    applicants: 12,
                    logo: '/image/company/3.png',
                },
                {
                    id:5,
                    title: 'Customer Support Specialist',
                    company: 'Supportive Solutions LLC',
                    location: 'Bekasi',
                    salary: '5 - 7jt per bulan',
                    benefits: ['Comprehensive training programs', 'Health and wellness programs', 'Opportunities for advancement'],
                    datePosted: '2 minggu yang lalu',
                    applicants: 18,
                    logo: '/image/company/4.png',
                },
                {
                    id:6,
                    title: 'Accounting Assistant',
                    company: 'Numbers Crunch Inc.',
                    location: 'Bogor',
                    salary: '4,5 - 6,5jt per bulan',
                    benefits: ['Competitive salary', 'Professional development opportunities', 'Flexible work schedule'],
                    datePosted: '3 minggu yang lalu',
                    applicants: 8,
                    logo: '/image/company/2.png',
                },
                {
                    id:7,
                    title: 'Sales Representative',
                    company: 'Sales Dynamics Ltd.',
                    location: 'Cirebon',
                    salary: '6 - 8jt per bulan',
                    benefits: ['Uncapped commission structure', 'Sales training programs', 'Opportunities for career growth'],
                    datePosted: '1 bulan yang lalu',
                    applicants: 25,
                    logo: '/image/company/1.png',
                },
                {
                    id:8,
                    title: 'Human Resources Manager',
                    company: 'PeopleFirst Solutions',
                    location: 'Serang',
                    salary: '8 - 10jt per bulan',
                    benefits: ['Competitive compensation package', 'Employee wellness programs', 'Career development opportunities'],
                    datePosted: '1 bulan yang lalu',
                    applicants: 14,
                    logo: '/image/company/3.png',
                },
            ]
        }
    },
}

</script>

<style scoped>
.listjob::-webkit-scrollbar {
    width: 3px;
}
   
.listjob::-webkit-scrollbar-track {
    @apply bg-transparent;
}
   
.listjob::-webkit-scrollbar-thumb {
    @apply bg-transparent;
}
</style>