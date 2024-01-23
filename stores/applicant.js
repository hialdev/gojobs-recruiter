import { defineStore } from "pinia";

export const useApplicantStore = defineStore('applicant',{
    state : () => ({
        data: [
            {
                id: 1,
                name: 'Budi Santoso',
                tags: 1,
                status: 'Hiring',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 2,
                name: 'Dewi Lestari',
                tags: 2,
                status: 'Screening',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 3,
                name: 'Anwar Setiawan',
                tags: 1,
                status: 'Hiring',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 4,
                name: 'Rini Cahyani',
                tags: 1,
                status: 'Reject',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 5,
                name: 'Joko Susanto',
                tags: 1,
                status: 'Peralihan',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 6,
                name: 'Siti Aminah',
                tags: 1,
                status: 'Psikotest',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 7,
                name: 'Adi Pratama',
                tags: 1,
                status: 'Screening',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 8,
                name: 'Budi Luhur',
                tags: 1,
                status: '',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 9,
                name: 'Maya Wijaya',
                tags: 1,
                status: 'Interview HR',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 10,
                name: 'Ryan Ramadhan',
                tags: 1,
                status: 'Interview User',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 11,
                name: 'Rizki Ramadhan',
                tags: 1,
                status: 'Interview User',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
            {
                id: 12,
                name: 'Novan Setya',
                tags: 1,
                status: 'Interview HR',
                source: '',
                rating: 4,
                apply_date: '02 Jan 24 18:32',
            },
        ],
        filters:{
			status: '',
			search: '',
        },
        rows: [
            {
                id : 'nme',
                row  : 'Name',
            },
            {
                id : 'tag',
                row  : 'Tags',
            },
            {
                id : 'src',
                row  : 'Source',
            },
            {
                id : 'rtg',
                row  : 'Rating',
            },
            {
                id : 'apd',
                row  : 'Apply Date',
            },
        ],
		selectedRow : [
			{
                id : 'nme',
            },
            {
                id : 'tag',
            },
            {
                id : 'src',
            },
            {
                id : 'rtg',
            },
            {
                id : 'apd',
            },
		]
    }),
    getters : {
      filteredData(){
        return this.data.filter((employee) => {
            const nameMatch = employee.name.toLowerCase().includes(this.filters.search.toLowerCase());
            const apply_dateMatch = employee.apply_date.toLowerCase().includes(this.filters.search.toLowerCase());

            return (
                apply_dateMatch &&
                nameMatch
            );
        });
      },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
		selectRow(rowId) {
			const index = this.selectedRow.indexOf(rowId);
			if (index === -1) {
				this.selectedRow.push(rowId);
			} else {
				this.selectedRow.splice(index, 1);
			}
		},
		isSelected(rowId) {
			this.selectedRow.includes(rowId);
		}
    },
    
})