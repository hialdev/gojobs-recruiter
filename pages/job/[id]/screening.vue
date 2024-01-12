<template>
    <div>
        <div class="table-scroll relative overflow-x-auto">
            <CardJobCandidateStatus :applicants="filteredApplicants" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'job-status',
})

const applicants = [
    {
        name: 'Budi Santoso',
        tags: '',
        status: 1,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Dewi Lestari',
        tags: '',
        status: 2,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Anwar Setiawan',
        tags: '',
        status: 3,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Rini Cahyani',
        tags: '',
        status: 4,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Joko Susanto',
        tags: '',
        status: 5,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Siti Aminah',
        tags: '',
        status: 6,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Adi Pratama',
        tags: '',
        status: 7,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Budi Luhur',
        tags: '',
        status: 1,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Maya Wijaya',
        tags: '',
        status: 2,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Ryan Ramadhan',
        tags: '',
        status: 5,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Rizki Ramadhan',
        tags: '',
        status: 6,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
    {
        name: 'Novan Setya',
        tags: '',
        status: 3,
        source: '',
        rating: 4,
        apply_date: '02 Jan 24 18:32',
    },
]
let filteredApplicants = [];
const filterApplicants = () => {
    filteredApplicants = applicants.filter(applicant => applicant.status === 1);
}
filterApplicants();

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