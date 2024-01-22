import { defineStore } from "pinia";

export const useRecreqStore = defineStore('recreq',{
    state : () => ({
        data: [
          {
            id: 1,
            perner: '123456',
            noJO: '12345/ISH/01010107/2023',
            tipeJO: 'New Project',
            dueDate: '2023-12-29',
            jabatan: 'Software Developer',
            lokasi: 'Jakarta',
            layanan: 'JOYDAY',
            kebutuhan: '5',
            status: 'Done',
            pelamar: '20',
            kandidat: '10',
            hiring: '5',
          },
          {
            id: 2,
            perner: '234567',
            noJO: '23456/ISH/01010107/2023',
            tipeJO: 'Replacement',
            dueDate: '2023-12-29',
            jabatan: 'Marketing Specialist',
            lokasi: 'Bandung',
            layanan: 'HUNTER',
            kebutuhan: '8',
            status: 'On Progress',
            pelamar: '15',
            kandidat: '7',
            hiring: '3',
          },
          {
            id: 3,
            perner: '345678',
            noJO: '34567/ISH/01010107/2023',
            tipeJO: 'New Project',
            dueDate: '2023-12-29',
            jabatan: 'Data Analyst',
            lokasi: 'Yogyakarta',
            layanan: 'GT',
            kebutuhan: '6',
            status: 'Done',
            pelamar: '18',
            kandidat: '9',
            hiring: '4',
          },
          {
            id: 4,
            perner: '456789',
            noJO: '45678/ISH/01010107/2023',
            tipeJO: 'Replacement',
            dueDate: '2023-12-29',
            jabatan: 'HR Manager',
            lokasi: 'Surabaya',
            layanan: 'ISH',
            kebutuhan: '10',
            status: 'On Progress',
            pelamar: '22',
            kandidat: '12',
            hiring: '6',
          },
          {
            id: 5,
            perner: '567890',
            noJO: '56789/ISH/01010107/2023',
            tipeJO: 'New Project',
            dueDate: '2023-12-29',
            jabatan: 'Graphic Designer',
            lokasi: 'Bandung',
            layanan: 'GT',
            kebutuhan: '7',
            status: 'Done',
            pelamar: '25',
            kandidat: '15',
            hiring: '7',
          },
          {
            id: 6,
            perner: '678901',
            noJO: '67890/ISH/01010107/2023',
            tipeJO: 'Replacement',
            dueDate: '2023-12-29',
            jabatan: 'Finance Analyst',
            lokasi: 'Surabaya',
            layanan: 'HUNTER',
            kebutuhan: '9',
            status: 'On Progress',
            pelamar: '19',
            kandidat: '11',
            hiring: '5',
          },
          {
            id: 7,
            perner: '789012',
            noJO: '78901/ISH/01010107/2023',
            tipeJO: 'New Project',
            dueDate: '2023-12-29',
            jabatan: 'Sales Executive',
            lokasi: 'Jakarta',
            layanan: 'JOYDAY',
            kebutuhan: '8',
            status: 'Done',
            pelamar: '21',
            kandidat: '14',
            hiring: '6',
          },
          {
            id: 8,
            perner: '890123',
            noJO: '89012/ISH/01010107/2023',
            tipeJO: 'Replacement',
            dueDate: '2023-12-29',
            jabatan: 'Customer Support',
            lokasi: 'Semarang',
            layanan: 'GT',
            kebutuhan: '7',
            status: 'On Progress',
            pelamar: '17',
            kandidat: '10',
            hiring: '4',
          },
          {
            id: 9,
            perner: '901234',
            noJO: '90123/ISH/01010107/2023',
            tipeJO: 'New Project',
            dueDate: '2023-12-29',
            jabatan: 'Project Manager',
            lokasi: 'Surabaya',
            layanan: 'ISH',
            kebutuhan: '10',
            status: 'Done',
            pelamar: '23',
            kandidat: '12',
            hiring: '8',
          },
          {
            id: 10,
            perner: '123321',
            noJO: '12332/ISH/01010107/2023',
            tipeJO: 'Replacement',
            dueDate: '2023-12-29',
            jabatan: 'Network Engineer',
            lokasi: 'Bandung',
            layanan: 'GT',
            kebutuhan: '6',
            status: 'On Progress',
            pelamar: '20',
            kandidat: '11',
            hiring: '5',
          },
          {
            id: 11,
            perner: '321123',
            noJO: '32112/ISH/01010107/2023',
            tipeJO: 'New Project',
            dueDate: '2023-12-29',
            jabatan: 'UX/UI Designer',
            lokasi: 'Jakarta',
            layanan: 'JOYDAY',
            kebutuhan: '8',
            status: 'Done',
            pelamar: '18',
            kandidat: '10',
            hiring: '7',
          },
        ],
        filters:{
          perner: '',
          noJO: '',
          tipeJO: '',
          dueDate: '',
          jabatan: '',
          lokasi: '',
          layanan: '',
          kebutuhan: '',
          status: '',
          pelamar: '',
          kandidat: '',
          hiring: '',
        },
    }),
    getters : {
        filteredRecreq(){
            return this.data.filter((recreq) => {
                const pernerMatch = recreq.perner.toLowerCase().includes(this.filters.perner.toLowerCase());
                const noJOMatch = recreq.noJO.toLowerCase().includes(this.filters.noJO.toLowerCase());
                const tipeJOMatch = recreq.tipeJO.toLowerCase().includes(this.filters.tipeJO.toLowerCase());
                const dueDateMatch = recreq.dueDate.toLowerCase().includes(this.filters.dueDate.toLowerCase());
                const jabatanMatch = recreq.jabatan.toLowerCase().includes(this.filters.jabatan.toLowerCase());
                const lokasiMatch = recreq.lokasi.toLowerCase().includes(this.filters.lokasi.toLowerCase());
                const layananMatch = recreq.layanan.toLowerCase().includes(this.filters.layanan.toLowerCase());
                const kebutuhanMatch = recreq.kebutuhan.toLowerCase().includes(this.filters.kebutuhan.toLowerCase());
                const statusMatch = recreq.status.toLowerCase().includes(this.filters.status.toLowerCase());
                const pelamarMatch = recreq.pelamar.toLowerCase().includes(this.filters.pelamar.toLowerCase());
                const kandidatMatch = recreq.kandidat.toLowerCase().includes(this.filters.kandidat.toLowerCase());
                const hiringMatch = recreq.hiring.toLowerCase().includes(this.filters.hiring.toLowerCase());

                return statusMatch && pernerMatch && noJOMatch && tipeJOMatch && dueDateMatch && jabatanMatch && lokasiMatch && layananMatch && kebutuhanMatch && pelamarMatch && kandidatMatch && hiringMatch;
            });
        },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})