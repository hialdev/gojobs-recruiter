import { defineStore } from "pinia";

export const useStopjoStore = defineStore('stopjo',{
    state : () => ({
        data: [
            {
                id: 1,
                noJO: '00001/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:11',
                approvalI: 'PM1',
                approvalII: 'John Doe',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 2,
                noJO: '00002/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:15',
                approvalI: 'PM2',
                approvalII: 'Jane Doe',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 3,
                noJO: '00003/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:20',
                approvalI: 'PM3',
                approvalII: 'David Smith',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 4,
                noJO: '00004/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:25',
                approvalI: 'PM4',
                approvalII: 'Emily Johnson',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 5,
                noJO: '00005/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:30',
                approvalI: 'PM5',
                approvalII: 'Michael Wilson',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 6,
                noJO: '00006/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:35',
                approvalI: 'PM6',
                approvalII: 'Olivia Brown',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 7,
                noJO: '00007/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:40',
                approvalI: 'PM7',
                approvalII: 'Daniel Miller',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 8,
                noJO: '00008/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:45',
                approvalI: 'PM8',
                approvalII: 'Sophia Wilson',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
              {
                id: 9,
                noJO: '00009/ISH/01010107/2023',
                createdBy: 'FAUZAN REYNALDI',
                createdAt: '08/12/2023 23:50',
                approvalI: 'PM9',
                approvalII: 'Noah Brown',
                status: 'Approved',
                remarks: 'Dikarenakan sudah tidak ada kebutuhan lagi ditoko tersebut',
              },
        ],
        filters:{
            noJO : '',
            createdBy : '',
            createdAt : '',
            approvalI : '',
            approvalII : '',
            status : '',
            remarks : '',
        },
    }),
    getters : {
        filteredJobs(){
            return this.data.filter((job) => {
                const statusMatch = job.status.toLowerCase().includes(this.filters.status.toLowerCase());
                const noJOMatch = job.noJO.toLowerCase().includes(this.filters.noJO.toLowerCase());
                const createdByMatch = job.createdBy.toLowerCase().includes(this.filters.createdBy.toLowerCase());
                const approvalIMatch = job.approvalI.toLowerCase().includes(this.filters.approvalI.toLowerCase());
                const approvalIIMatch = job.approvalII.toLowerCase().includes(this.filters.approvalII.toLowerCase());
                const remarksMatch = job.remarks.toLowerCase().includes(this.filters.remarks.toLowerCase());

                return statusMatch && noJOMatch && createdByMatch && approvalIMatch && approvalIIMatch && remarksMatch;
            });
        },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})