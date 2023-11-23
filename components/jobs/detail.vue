<template>
    <div class="bg-white rounded-3xl overflow-hidden max-h-[60em] overflow-y-scroll listjob">
        <NuxtImg
            src="/image/cover-company.png"
            alt="Cover Company"
            width="848"
            height="166"
            class="w-full"
        />
        <div class="grid grid-cols-12 relative">
            <div class="col-span-8 px-5 border-e-2">
                <div class="flex items-center gap-3 py-6">
                    <NuxtImg :src="`${selectedJob?.logo}`" :alt="`logo ${selectedJob?.company}`" class="h-[3em]" />
                    <div>
                        <h2 class="text-xl">{{selectedJob?.title}}</h2>
                        <p class="text-slate-500">{{selectedJob?.company}}</p>
                    </div>
                </div>
                <div class="py-6 border-t-2 px-5">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="span px-3 p-1 text-primary bg-orange-100 rounded-3xl">Fulltime</span>
                    </div>
                    <h5 class="font-medium">Lokasi</h5>
                    <p class="text-sm mb-4 text-slate-500">{{selectedJob?.location}}</p>
                    <h5 class="font-medium">Gaji</h5>
                    <p class="text-sm mb-4 text-slate-500">{{selectedJob?.salary}}</p>

                    <h5 class="font-medium">Deskripsi Pekerjaan</h5>
                    <div>
                        <ol class="list-decimal ms-4 text-slate-500">
                            <li class="text-sm">Buat agenda rapat, buat notulensi, dan buat memo.</li>
                            <li class="text-sm">Memelihara dokumentasi digital dan fisik, memperbarui database secara berkala.</li>
                            <li class="text-sm">Memproses faktur, kwitansi, dan dokumentasi akuntansi dasar.</li>
                            <li class="text-sm">Menyiapkan dan memproses faktur dan kuitansi pajak.</li>
                            <li class="text-sm">Membuat laporan harian, mingguan, dan bulanan untuk piutang, PPH, PPN, dll.</li>
                            <li class="text-sm">Menyimpan catatan kehadiran karyawan, cuti, dan informasi terkait SDM secara akurat.</li>
                            <li class="text-sm">Perbarui dan kelola daftar kontak internal dan eksternal.</li>
                            <li class="text-sm">Berkolaborasi dengan departemen lain demi kelancaran operasional.</li>
                            <li class="text-sm">Memberikan dukungan administratif/logistik ke berbagai tim.</li>
                            <li class="text-sm">Melaporkan dan mengeskalasi permasalahan yang kompleks ke saluran yang tepat.</li>
                            <li class="text-sm">Rajin menindaklanjuti pembayaran yang tertunda.</li>
                            <li class="text-sm">Menangani tugas administratif lainnya yang mungkin timbul.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="col-span-4 relative">
                <div class="absolute top-0 bottom-0">
                    <div class="p-6">
                        <h3 class="text-2xl mb-6">Informasi Tambahan</h3>
                        <div>
                            <h5 class="font-medium">Gaji</h5>
                            <p class="text-sm mb-4 text-slate-500">{{selectedJob?.salary}}</p>
                            <h5 class="font-medium">Pengalaman Kerja </h5>
                            <p class="text-sm mb-4 text-slate-500">1 tahun</p>
                            <h5 class="font-medium">Spesialisasi Pekerjaan</h5>
                            <p class="text-sm mb-4 text-slate-500">Sumber Daya Manusia/Personalia, Staf / Administrasi umum</p>
                            <h5 class="font-medium">Kualifikasi</h5>
                            <p class="text-sm mb-4 text-slate-500">SMA, SMU/SMK/STM</p>
                            <h5 class="font-medium">Tunjangan dan Lain-lain</h5>
                            <p class="text-sm mb-4 text-slate-500">Waktu regular, Senin - Jumat, Kasual (contoh: Kaos)</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 bg-white p-5">
                        <PartialsButton class="w-full text-center">Lamar</PartialsButton>
                        <PartialsButton class="bg-transparent border-primary" :primary="false">
                            <div class="w-[24px] h-[24px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22Z" fill="#FA6900"/>
                                </svg>
                            </div>
                        </PartialsButton>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
  props: ['selectedJob']
}
</script>

<style scoped>
.listjob::-webkit-scrollbar {
    width: 0px;
}
   
.listjob::-webkit-scrollbar-track {
    @apply bg-transparent;
}
   
.listjob::-webkit-scrollbar-thumb {
    @apply bg-transparent;
}
</style>