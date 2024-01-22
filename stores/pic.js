import { defineStore } from "pinia";

export const usePICStore = defineStore('pic',{
    state : () => ({
        data: [
          {
            id: 1,
            name: 'John Doe',
            perner: '123456',
            category: 'Software Developer',
            area: ['Jakarta', 'Surabaya'],
          },
          {
            id: 2,
            name: 'Jane Doe',
            perner: '234567',
            category: 'Marketing Specialist',
            area: ['Bandung'],
          },
          {
            id: 3,
            name: 'David Smith',
            perner: '345678',
            category: 'Data Analyst',
            area: ['Yogyakarta', 'Semarang'],
          },
          {
            id: 4,
            name: 'Emily Johnson',
            perner: '456789',
            category: 'HR Manager',
            area: ['Surabaya'],
          },
          {
            id: 5,
            name: 'Michael Wilson',
            perner: '567890',
            category: 'Graphic Designer',
            area: ['Bandung', 'Medan'],
          },
          {
            id: 6,
            name: 'Olivia Brown',
            perner: '678901',
            category: 'Finance Analyst',
            area: ['Surabaya'],
          },
          {
            id: 7,
            name: 'Daniel Miller',
            perner: '789012',
            category: 'Sales Executive',
            area: ['Jakarta', 'Bandung'],
          },
          {
            id: 8,
            name: 'Sophia Wilson',
            perner: '890123',
            category: 'Customer Support',
            area: ['Surabaya', 'Semarang'],
          },
          {
            id: 9,
            name: 'Noah Brown',
            perner: '901234',
            category: 'Project Manager',
            area: ['Jakarta', 'Surabaya'],
          },
          {
            id: 10,
            name: 'Ava Jones',
            perner: '123321',
            category: 'Network Engineer',
            area: ['Yogyakarta', 'Bandung'],
          },
          {
            id: 11,
            name: 'Ethan Taylor',
            perner: '321123',
            category: 'UX/UI Designer',
            area: ['Surabaya', 'Jakarta'],
          },
        ],
        filters:{
            name : '',
            perner : '',
            category : '',
            area : '',
        },
    }),
    getters : {
      filteredPICs() {
        return this.data.filter((pic) => {
          const nameMatch = pic.name.toLowerCase().includes(this.filters.name.toLowerCase());
          const pernerMatch = pic.perner.toLowerCase().includes(this.filters.perner.toLowerCase());
          const categoryMatch = pic.category.toLowerCase().includes(this.filters.category.toLowerCase());
          const areaMatch = pic.area.some((a) => a.toLowerCase().includes(this.filters.area.toLowerCase()));
  
          return nameMatch && pernerMatch && categoryMatch && areaMatch;
        });
      },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})