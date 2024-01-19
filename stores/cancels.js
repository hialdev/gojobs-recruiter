import { defineStore } from "pinia";

export const useCancelStore = defineStore('cancels',{
    state : () => ({
        data: [
            {
              id: 1,
              name: "John Doe",
              perner: "123456",
              noJO: "029788/JO/01010101/2023",
              cancelDate: "2023-02-15",
              createdBy: "Alice Smith",
              approver: "Bob Johnson",
              status: "On Process",
              remarks: "Waiting for approval",
            },
            {
              id: 2,
              name: "Jane Doe",
              perner: "654321",
              noJO: "029788/JO/01010102/2023",
              cancelDate: "2023-02-20",
              createdBy: "David Lee",
              approver: "Catherine Brown",
              status: "Waiting",
              remarks: "Pending further review",
            },
            {
              id: 3,
              name: "Alice Smith",
              perner: "987654",
              noJO: "029788/JO/01010103/2023",
              cancelDate: "2023-02-25",
              createdBy: "Eva Williams",
              approver: "Frank Wilson",
              status: "Reject",
              remarks: "Rejected due to incomplete information",
            },
            {
              id: 4,
              name: "Bob Johnson",
              perner: "456789",
              noJO: "029788/JO/01010104/2023",
              cancelDate: "2023-03-01",
              createdBy: "Grace Davis",
              approver: "Helen Anderson",
              status: "Done",
              remarks: "Cancellation successfully processed",
            },
            {
              id: 5,
              name: "Eva Williams",
              perner: "135790",
              noJO: "029788/JO/01010105/2023",
              cancelDate: "2023-03-05",
              createdBy: "Ivan Garcia",
              approver: "Jessica Moore",
              status: "On Process",
              remarks: "Under review by the HR department",
            },
            {
              id: 6,
              name: "David Lee",
              perner: "246801",
              noJO: "029788/JO/01010106/2023",
              cancelDate: "2023-03-10",
              createdBy: "Kevin Taylor",
              approver: "George Miller",
              status: "Waiting",
              remarks: "Pending further processing",
            },
            {
              id: 7,
              name: "Catherine Brown",
              perner: "112233",
              noJO: "029788/JO/01010107/2023",
              cancelDate: "2023-03-15",
              createdBy: "Jessica Moore",
              approver: "John Doe",
              status: "Reject",
              remarks: "Rejected due to policy violation",
            },
            {
              id: 8,
              name: "George Miller",
              perner: "445566",
              noJO: "029788/JO/01010108/2023",
              cancelDate: "2023-03-20",
              createdBy: "Kevin Taylor",
              approver: "Ivan Garcia",
              status: "Done",
              remarks: "Cancellation successfully processed",
            },
            {
              id: 9,
              name: "Grace Davis",
              perner: "778899",
              noJO: "029788/JO/01010109/2023",
              cancelDate: "2023-03-25",
              createdBy: "John Doe",
              approver: "Helen Anderson",
              status: "On Process",
              remarks: "Waiting for review",
            },
            {
              id: 10,
              name: "Frank Wilson",
              perner: "112233",
              noJO: "029788/JO/01010110/2023",
              cancelDate: "2023-03-30",
              createdBy: "Jane Doe",
              approver: "David Lee",
              status: "Waiting",
              remarks: "Pending further processing",
            },
            {
              id: 11,
              name: "Helen Anderson",
              perner: "334455",
              noJO: "029788/JO/01010111/2023",
              cancelDate: "2023-04-05",
              createdBy: "Kevin Taylor",
              approver: "Alice Smith",
              status: "Reject",
              remarks: "Rejected due to incomplete documentation",
            },
            {
              id: 12,
              name: "Ivan Garcia",
              perner: "556677",
              noJO: "029788/JO/01010112/2023",
              cancelDate: "2023-04-10",
              createdBy: "Jessica Moore",
              approver: "Catherine Brown",
              status: "Done",
              remarks: "Cancellation successfully processed",
            },
        ],
        filters:{
            name : '',
            perner : '',
            noJO : '',
            cancelDate : '',
            createdBy : '',
            approver : '',
            status : '',
            remarks : '',
        },
    }),
    getters : {
        filteredCancels(){
            return this.data.filter((cancel) => {
                const nameMatch = cancel.name.toLowerCase().includes(this.filters.name.toLowerCase());
                const pernerMatch = cancel.perner.toLowerCase().includes(this.filters.perner.toLowerCase());
                const noJOMatch = cancel.noJO.toLowerCase().includes(this.filters.noJO.toLowerCase());
                const cancelDateJOMatch = cancel.cancelDate.toLowerCase().includes(this.filters.cancelDate.toLowerCase());
                const createdByNameMatch = cancel.createdBy.toLowerCase().includes(this.filters.createdBy.toLowerCase());
                const approverMatch = cancel.approver.toLowerCase().includes(this.filters.approver.toLowerCase());
                const statusMatch = cancel.status.toLowerCase().includes(this.filters.status.toLowerCase());
                const remarksMatch = cancel.remarks.toLowerCase().includes(this.filters.remarks.toLowerCase());

                return nameMatch && pernerMatch && noJOMatch && cancelDateJOMatch && createdByNameMatch && approverMatch && statusMatch && remarksMatch;
            });
        },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})