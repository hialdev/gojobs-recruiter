import { defineStore } from "pinia";

export const useResignStore = defineStore('resign',{
    state : () => ({
        data: [
          {
            id: 1,
            perner: '123456',
            name: 'John Doe',
            resignDate: '2023-01-15',
            alasan: 'Pindah kerja',
            tags: 1,
            creator: 'Manager A',
            approver: 'Director B',
            status: 'Approved',
            remarks: 'Data pekerja sudah tidak ada di SAP atau sudah diresignkan. Layanan Selesai.',
          },
          {
            id: 2,
            perner: '234567',
            name: 'Jane Doe',
            resignDate: '2023-02-28',
            alasan: 'Alasan Lain',
            tags: 2,
            creator: 'Supervisor C',
            approver: 'Manager A',
            status: 'Waiting',
            remarks: 'Menunggu persetujuan',
          },
          {
            id: 3,
            perner: '345678',
            name: 'David Smith',
            resignDate: '2023-03-10',
            alasan: 'Alasan Lain',
            tags: 1,
            creator: 'HR Manager D',
            approver: 'Director B',
            status: 'Draft',
            remarks: 'Data pekerja belum diajukan',
          },
          {
            id: 4,
            perner: '456789',
            name: 'Emily Johnson',
            resignDate: '2023-04-05',
            alasan: 'Pindah domisili',
            tags: 3,
            creator: 'Manager A',
            approver: 'Supervisor C',
            status: 'Waiting',
            remarks: 'Menunggu persetujuan',
          },
          {
            id: 5,
            perner: '567890',
            name: 'Michael Wilson',
            resignDate: '2023-05-20',
            alasan: 'Pensiun',
            tags: 1,
            creator: 'HR Manager D',
            approver: 'Director B',
            status: 'Rejected',
            remarks: 'Pengajuan ditolak',
          },
          {
            id: 6,
            perner: '678901',
            name: 'Olivia Brown',
            resignDate: '2023-06-02',
            alasan: 'Alasan Lain',
            tags: 2,
            creator: 'Supervisor C',
            approver: 'Manager A',
            status: 'Approved',
            remarks: 'Data pekerja sudah tidak ada di SAP atau sudah diresignkan. Layanan Selesai.',
          },
        ],
        filters:{
          perner: '',
          name: '',
          resignDate: '',
          alasan: '',
          creator: '',
          approver: '',
          status: '',
          remarks: '',
        },
    }),
    getters : {
      filteredResign(){
        return this.data.filter((employee) => {
            const pernerMatch = employee.perner.includes(this.filters.perner);
            const nameMatch = employee.name.toLowerCase().includes(this.filters.name.toLowerCase());
            const resignDateMatch = employee.resignDate.includes(this.filters.resignDate);
            const alasanMatch = employee.alasan.toLowerCase().includes(this.filters.alasan.toLowerCase());
            const creatorMatch = employee.creator.toLowerCase().includes(this.filters.creator.toLowerCase());
            const approverMatch = employee.approver.toLowerCase().includes(this.filters.approver.toLowerCase());
            const statusMatch = employee.status.toLowerCase().includes(this.filters.status.toLowerCase());
            const remarksMatch = employee.remarks.toLowerCase().includes(this.filters.remarks.toLowerCase());

            return (
                pernerMatch &&
                nameMatch &&
                resignDateMatch &&
                alasanMatch &&
                creatorMatch &&
                approverMatch &&
                statusMatch &&
                remarksMatch
            );
        });
      },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})