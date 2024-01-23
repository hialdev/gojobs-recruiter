import { defineStore } from "pinia";

export const useHiringStore = defineStore('hirings',{
    state : () => ({
        data: [
            {
                id: 1,
                name: "John Doe",
                status : 1,
                profile: "80%",
                noJO: "029788/ISH/01010101/2023",
                posisi: "Manager",
                lokasi: "DKI Jakarta",
                layanan: "ABC Company"
            },
            {
                id: 2,
                name: "Jane Doe",
                status : 1,
                profile: "65%",
                noJO: "029788/ISH/01010102/2023",
                posisi: "Senior Engineer",
                lokasi: "Jawa Barat",
                layanan: "XYZ Corporation"
            },
            {
                id: 3,
                name: "Alice Smith",
                status : 1,
                profile: "45%",
                noJO: "029788/ISH/01010103/2023",
                posisi: "Marketing Specialist",
                lokasi: "Banten",
                layanan: "PQR Industries"
            },
            {
                id: 4,
                name: "Bob Johnson",
                status : 1,
                profile: "75%",
                noJO: "029788/ISH/01010104/2023",
                posisi: "Finance Analyst",
                lokasi: "Jawa Tengah",
                layanan: "LMN Solutions"
            },
            {
                id: 5,
                name: "Eva Williams",
                status : 3,
                profile: "90%",
                noJO: "029788/ISH/01010105/2023",
                posisi: "Software Developer",
                lokasi: "Sumatra Utara",
                layanan: "DEF Tech"
            },
            {
                id: 6,
                name: "David Lee",
                status : 3,
                profile: "50%",
                noJO: "029788/ISH/01010106/2023",
                posisi: "HR Specialist",
                lokasi: "Kalimantan Barat",
                layanan: "GHI Solutions"
            },
            {
                id: 7,
                name: "Catherine Brown",
                status : 2,
                profile: "85%",
                noJO: "029788/ISH/01010107/2023",
                posisi: "Sales Manager",
                lokasi: "Sulawesi Selatan",
                layanan: "JKL Corporation"
            },
            {
                id: 8,
                name: "George Miller",
                status : 2,
                profile: "60%",
                noJO: "029788/ISH/01010108/2023",
                posisi: "Quality Assurance Analyst",
                lokasi: "Nusa Tenggara Timur",
                layanan: "MNO Tech"
            },
            {
                id: 9,
                name: "Grace Davis",
                status : 1,
                profile: "70%",
                noJO: "029788/ISH/01010109/2023",
                posisi: "Customer Support Specialist",
                lokasi: "Maluku",
                layanan: "PST Services"
            },
            {
                id: 10,
                name: "Frank Wilson",
                status : 2,
                profile: "55%",
                noJO: "029788/ISH/01010110/2023",
                posisi: "Logistics Coordinator",
                lokasi: "Papua Barat",
                layanan: "UVW Logistics"
            },
            {
                id: 11,
                name: "Helen Anderson",
                status : 2,
                profile: "80%",
                noJO: "029788/ISH/01010111/2023",
                posisi: "Operations Manager",
                lokasi: "Aceh",
                layanan: "XYZ Operations"
            },
            {
                id: 12,
                name: "Ivan Garcia",
                status : 2,
                profile: "40%",
                noJO: "029788/ISH/01010112/2023",
                posisi: "IT Specialist",
                lokasi: "Sulawesi Tengah",
                layanan: "ABC IT Solutions"
            },
            {
                id: 13,
                name: "Jessica Moore",
                status : 1,
                profile: "75%",
                noJO: "029788/ISH/01010113/2023",
                posisi: "Research Scientist",
                lokasi: "Bangka Belitung",
                layanan: "DEF Research"
            },
            {
                id: 14,
                name: "Kevin Taylor",
                status : 1,
                profile: "95%",
                noJO: "029788/ISH/01010114/2023",
                posisi: "CEO",
                lokasi: "Lampung",
                layanan: "GHI Enterprises"
            }
        ],
        filters:{
            search : '',
            name : '',
            profile : '',
            noJO : '',
            posisi : '',
            lokasi : '',
            layanan : '',
            status : '',
        },
    }),
    getters : {
        filteredHirings(){
            return this.data.filter((hiring) => {
                const nameMatch = hiring.name.toLowerCase().includes(this.filters.name.toLowerCase());
                const profileMatch = hiring.profile.toLowerCase().includes(this.filters.profile.toLowerCase());
                const noJOMatch = hiring.noJO.toLowerCase().includes(this.filters.noJO.toLowerCase());
                const searchJOMatch = hiring.noJO.toLowerCase().includes(this.filters.search.toLowerCase());
                const searchNameMatch = hiring.name.toLowerCase().includes(this.filters.search.toLowerCase());
                const posisiMatch = hiring.posisi.toLowerCase().includes(this.filters.posisi.toLowerCase());
                const lokasiMatch = hiring.lokasi.toLowerCase().includes(this.filters.lokasi.toLowerCase());
                const layananMatch = hiring.layanan.toLowerCase().includes(this.filters.layanan.toLowerCase());
                const searchMatch = searchJOMatch || searchNameMatch;
                let statusMatch = true;
                if(this.filters.status !== ''){
                  statusMatch = hiring.status === this.filters.status;
                }

                return statusMatch && nameMatch && profileMatch && noJOMatch && posisiMatch && lokasiMatch && layananMatch && searchMatch;
            });
        },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})