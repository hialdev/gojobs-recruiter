import { defineStore } from "pinia";

export const usePICStore = defineStore('pic',{
    state : () => ({
        data: [
          {
            id: 1,
            name: 'John Doe',
            perner: '123456',
            layanan : ['Administrasi Keuangan', 'Content Creator'],
            category: 'Software Developer',
            area: ['Jakarta', 'Surabaya'],
          },
          {
            id: 2,
            name: 'Jane Doe',
            perner: '234567',
            layanan : ['Perhotelan'],
            category: 'Marketing Specialist',
            area: ['Bandung'],
          },
          {
            id: 3,
            name: 'David Smith',
            perner: '345678',
            layanan : ['Sales Promotion', 'Office Boy'],
            category: 'Data Analyst',
            area: ['Yogyakarta', 'Semarang'],
          },
          {
            id: 4,
            name: 'Emily Johnson',
            perner: '456789',
            layanan : ['Sales Promotion', 'Talent Aquisition'],
            category: 'HR Manager',
            area: ['Surabaya'],
          },
          {
            id: 5,
            name: 'Michael Wilson',
            perner: '567890',
            layanan : ['IT Engineer', ''],
            category: 'Graphic Designer',
            area: ['Bandung', 'Medan'],
          },
          {
            id: 6,
            name: 'Olivia Brown',
            perner: '678901',
            layanan : ['Sales Promotion', 'IT Engineer'],
            category: 'Finance Analyst',
            area: ['Surabaya'],
          },
          {
            id: 7,
            name: 'Daniel Miller',
            perner: '789012',
            layanan : ['Sales Promotion'],
            category: 'Sales Executive',
            area: ['Jakarta', 'Bandung'],
          },
          {
            id: 8,
            name: 'Sophia Wilson',
            perner: '890123',
            layanan : ['Sales Promotion', 'IT Engineer', 'Software Development'],
            category: 'Customer Support',
            area: ['Surabaya', 'Semarang'],
          },
          {
            id: 9,
            name: 'Noah Brown',
            perner: '901234',
            layanan : ['Sales Promotion', 'IT Engineer', 'Customer Service'],
            category: 'Project Manager',
            area: ['Jakarta', 'Surabaya'],
          },
          {
            id: 10,
            name: 'Ava Jones',
            perner: '123321',
            layanan : ['Sales Promotion', 'IT Engineer', 'Office Girl'],
            category: 'Network Engineer',
            area: ['Yogyakarta', 'Bandung'],
          },
          {
            id: 11,
            name: 'Ethan Taylor',
            perner: '321123',
            layanan : ['Sales Promotion', 'IT Engineer', 'RnD'],
            category: 'UX/UI Designer',
            area: ['Surabaya', 'Jakarta'],
          },
        ],
        filters:{
            name : '',
            perner : '',
            category : '',
            area : '',
            layanan : '',
        },
    }),
    getters : {
      filteredPICs() {
        return this.data.filter((pic) => {
          const nameMatch = pic.name.toLowerCase().includes(this.filters.name.toLowerCase());
          const pernerMatch = pic.perner.toLowerCase().includes(this.filters.perner.toLowerCase());
          const categoryMatch = pic.category.toLowerCase().includes(this.filters.category.toLowerCase());
          const areaMatch = pic.area.some((a) => a.toLowerCase().includes(this.filters.area.toLowerCase()));
          const layananMatch = pic.layanan.some((a) => a.toLowerCase().includes(this.filters.layanan.toLowerCase()));
  
          return nameMatch && pernerMatch && categoryMatch && areaMatch && layananMatch;
        });
      },
    },
    actions : {
        updateFilter(column, value) {
            this.filters[column] = value;
        },
    },
    
})