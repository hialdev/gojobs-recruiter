import { defineStore } from "pinia";

export const useCandidatesStore = defineStore('candidates',{
    state : () => ({
        data: [
            {
              id: 1,
              name: 'Budi Santoso',
              status: 1,
              tags: 2,
              domisili: 'Jakarta',
              gender: 'Laki-laki',
              usia: '28',
              pendidikan: 'S1 Teknik Informatika',
              layanan: 'ABC Corp',
              jabatan: 'Software Engineer',
              minat: 'Promotor'
            },
            {
              id: 2,
              name: 'Dewi Lestari',
              status: 2,
              tags: 1,
              domisili: 'Surabaya',
              gender: 'Perempuan',
              usia: '24',
              pendidikan: 'S1 Ekonomi',
              layanan: 'XYZ Solutions',
              jabatan: 'Marketing Specialist',
              minat: 'Promotor'
            },
            {
              id: 3,
              name: 'Anwar Setiawan',
              status: 3,
              tags: 3,
              domisili: 'Bandung',
              gender: 'Laki-laki',
              usia: '30',
              pendidikan: 'S1 Teknik Elektro',
              layanan: '123 Services',
              jabatan: 'Electrical Engineer',
              minat: 'Promotor'
            },
            {
              id: 4,
              name: 'Rini Cahyani',
              status: 4,
              tags: 2,
              domisili: 'Yogyakarta',
              gender: 'Perempuan',
              usia: '26',
              pendidikan: 'S1 Psikologi',
              layanan: 'Tech Innovators',
              jabatan: 'HR Specialist',
              minat: 'Promotor'
            },
            {
              id: 5,
              name: 'Joko Susanto',
              status: 5,
              tags: 1,
              domisili: 'Semarang',
              gender: 'Laki-laki',
              usia: '29',
              pendidikan: 'S1 Manajemen',
              layanan: 'Global Solutions',
              jabatan: 'Business Analyst',
              minat: 'Promotor'
            },
            {
              id: 6,
              name: 'Siti Aminah',
              status: 6,
              tags: 3,
              domisili: 'Medan',
              gender: 'Perempuan',
              usia: '25',
              pendidikan: 'S1 Teknik Industri',
              layanan: 'Innovate Tech',
              jabatan: 'Quality Assurance',
              minat: 'Promotor'
            },
            {
              id: 7,
              name: 'Adi Pratama',
              status: 1,
              tags: 2,
              domisili: 'Surabaya',
              gender: 'Laki-laki',
              usia: '27',
              pendidikan: 'S1 Akuntansi',
              layanan: 'Tech Wizards',
              jabatan: 'Accountant',
              minat: 'Promotor'
            },
            {
              id: 8,
              name: 'Budi Luhur',
              status: 2,
              tags: 1,
              domisili: 'Jakarta',
              gender: 'Laki-laki',
              usia: '31',
              pendidikan: 'S1 Ilmu Komunikasi',
              layanan: 'Digital Innovations',
              jabatan: 'Content Creator',
              minat: 'Promotor'
            },
            {
              id: 9,
              name: 'Maya Wijaya',
              status: 5,
              tags: 3,
              domisili: 'Bandung',
              gender: 'Perempuan',
              usia: '28',
              pendidikan: 'S1 Desain Grafis',
              layanan: 'Creative Minds',
              jabatan: 'Graphic Designer',
              minat: 'Promotor'
            },
            {
              id: 10,
              name: 'Ryan Ramadhan',
              status: 6,
              tags: 2,
              domisili: 'Yogyakarta',
              gender: 'Laki-laki',
              usia: '25',
              pendidikan: 'S1 Hukum',
              layanan: 'Legal Eagles',
              jabatan: 'Legal Consultant',
              minat: 'Promotor'
            },
            {
              id: 11,
              name: 'Rizki Ramadhan',
              status: 3,
              tags: 1,
              domisili: 'Semarang',
              gender: 'Laki-laki',
              usia: '29',
              pendidikan: 'S1 Teknik Sipil',
              layanan: 'Urban Builders',
              jabatan: 'Civil Engineer',
              minat: 'Promotor'
            },
            {
              id: 12,
              name: 'Novan Setya',
              status: 4,
              tags: 3,
              domisili: 'Medan',
              gender: 'Laki-laki',
              usia: '26',
              pendidikan: 'S1 Farmasi',
              layanan: 'Health Innovations',
              jabatan: 'Pharmacist',
              minat: 'Promotor'
            },
            {
              id: 13,
              name: 'Example Candidate',
              status: 1,
              tags: 1,
              domisili: 'Example City',
              gender: 'Laki-laki',
              usia: '30',
              pendidikan: 'S1 Example',
              layanan: 'Example Services',
              jabatan: 'Example candidate',
              minat: 'Promotor'
            }
        ],
        filters:{
            name : '',
            status : '',
            domisili : '',
            gender : '',
            usia : '',
            pendidikan : '',
            layanan : '',
            jabatan : '',
            minat : '',
        },
    }),
    getters : {
        getByStatus(){
            return this.data.filter((candidate) => {
                const statusMatch = candidate.status.toLowerCase().includes(this.filters.status.toLowerCase());
                return statusMatch;
            });
        },
        filteredCandidates(){
            return this.data.filter((candidate) => {
                const nameMatch = candidate.name.toLowerCase().includes(this.filters.name.toLowerCase());
                const domisiliMatch = candidate.domisili.toLowerCase().includes(this.filters.domisili.toLowerCase());
                const usiaMatch = candidate.usia.toLowerCase().includes(this.filters.usia.toLowerCase());
                const pendidikanMatch = candidate.pendidikan.toLowerCase().includes(this.filters.pendidikan.toLowerCase());
                const genderMatch = candidate.gender.toLowerCase().includes(this.filters.gender.toLowerCase());
                const layananMatch = candidate.layanan.toLowerCase().includes(this.filters.layanan.toLowerCase());
                const jabatanMatch = candidate.jabatan.toLowerCase().includes(this.filters.jabatan.toLowerCase());
                const minatMatch = candidate.minat.toLowerCase().includes(this.filters.minat.toLowerCase());

                return domisiliMatch && genderMatch && usiaMatch && nameMatch && pendidikanMatch && layananMatch && jabatanMatch && minatMatch;
            });
        },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})