<template>
    <div>
        <div class="relative">
            <div class="cursor-pointer bg-white p-3 px-5 rounded-4xl flex justify-between items-center gap-3 text-gray-800 rounded-3xl"
                @click="toggleModal"
            >
                <span class="">{{selectItem ? selectItem?.value : label}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
            </div>
            <div v-if="isModalOpen" class="modal absolute top-0 w-full mt-[3.5em]">
                <ul 
                    class="p-3 bg-white rounded-xl max-h-[20em] overflow-auto"
                >
                    <div v-for="(option, index) in options"
                        :key="option.key"
                        >
                        <li
                            @click="selectedItem(option)"
                            class="p-3 px-4 rounded-xl hover:bg-gray-100 cursor-pointer"
                            :class="{ 'bg-orange-200 hover:bg-orange-200': option?.key === selectItem?.key }"
                        >
                            {{ option?.value }}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type: String,
            default: "Pilih",
        },
        options:{
            type: Array,
            default: () => [
                { key: "1", value: "Tidak ada pilihan" },
            ],
        }
    },
    data() {
        return {
            isModalOpen: false,
            selectItem: null,
        };
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
        },
        selectedItem(item){
            this.selectItem = item;
            this.isModalOpen = !this.isModalOpen;
            this.$emit('selected', this.selectItem);
        }
    },
};
</script>