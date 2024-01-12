<template>
    <div>
        <div class="table-scroll relative overflow-x-auto">
            <CardJobCandidateStatus :applicants="applicants" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'job-status',
})

let applicants = [
    {
        id: 1,
        name: 'Budi Santoso',
        tags: '',
        status: 1,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 2,
        name: 'Dewi Lestari',
        tags: '',
        status: 2,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 3,
        name: 'Anwar Setiawan',
        tags: '',
        status: 3,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 4,
        name: 'Rini Cahyani',
        tags: '',
        status: 4,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 5,
        name: 'Joko Susanto',
        tags: '',
        status: 5,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 6,
        name: 'Siti Aminah',
        tags: '',
        status: 6,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 7,
        name: 'Adi Pratama',
        tags: '',
        status: 7,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 8,
        name: 'Budi Luhur',
        tags: '',
        status: 1,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 9,
        name: 'Maya Wijaya',
        tags: '',
        status: 2,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 10,
        name: 'Ryan Ramadhan',
        tags: '',
        status: 5,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 11,
        name: 'Rizki Ramadhan',
        tags: '',
        status: 6,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        id: 12,
        name: 'Novan Setya',
        tags: '',
        status: 3,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
]

</script>

<style scoped>
.table-scroll::-webkit-scrollbar {
    width: 1px;
    height: 10px;
}
   
.table-scroll::-webkit-scrollbar-track {
    @apply bg-emerald-100;
}
   
.table-scroll::-webkit-scrollbar-thumb {
    @apply bg-emerald-600 rounded-2xl;
}
</style>