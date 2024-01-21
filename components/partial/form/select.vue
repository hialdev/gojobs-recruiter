<template>
    <div>
        <label v-if="showLabel" for="" class="text-sm mb-3 block">{{label}}</label>
        <div class="relative text-sm">
            <div :class="['cursor-pointer bg-white p-2 px-4 rounded-4xl flex justify-between items-center gap-3 text-gray-800 rounded-lg shadow-lg shadow-gray-900/10', $parent.class, customClass]"
                @click="toggleModal"
                ref="dropdownTrigger"
            >
                <span class="">{{selectItem ? selectItem?.value : label}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
            </div>
            <div ref="modalElement" v-if="isModalOpen" :class="['modal absolute shadow rounded-xl top-0 w-full mt-[3.5em] min-w-[17em] z-10', modalClass]">
                <ul 
                    class="p-3 bg-white rounded-xl max-h-[20em] overflow-auto"
                >
                    <li class="mb-3"><PartialFormSearch :label="'Cari '+label" :customClass="'lg:max-w-[25em]'" @input="searchOptions" /></li>
                    <div v-for="option in filteredOptions"
                        :key="option.key"
                        >
                        <li
                            @click="selectedItem(option)"
                            class="p-3 px-4 rounded-xl hover:bg-gray-100 cursor-pointer text-sm"
                            :class="{ 'bg-emerald-200 hover:bg-emerald-200': option?.key === selectItem?.key }"
                        >
                            <div v-if="option?.icon !== ''" class="flex items-center gap-4">
                                <div v-html="option?.icon"></div>
                                {{ option?.value }}
                            </div>
                            <div v-else>
                                {{ option?.value }}
                            </div>
                            
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
        customClass:{
            type: String,
            default: "",
        },
        options:{
            type: Array,
            default: () => [
                { key: "1", value: "Tidak ada pilihan" },
            ],
        },
        modalClass:{
            type: String,
        },
        showLabel:{
            type: Boolean,
            default: false,
        },
        defaultValue:{
            type: String,
        }
    },
    data() {
        return {
            isModalOpen: false,
            selectItem: null,
            searchQuery: "",
        };
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
            if (this.isModalOpen) {
                document.addEventListener("click", this.handleDocumentClick);
            } else {
                document.removeEventListener("click", this.handleDocumentClick);
            }
        },
        selectedItem(item) {
            this.selectItem = item;
            this.isModalOpen = !this.isModalOpen;
            this.$emit('selected', this.selectItem.key);
        },
        handleDocumentClick(event) {
            const dropdownTrigger = this.$refs.dropdownTrigger;
            const modalElement = this.$refs.modalElement;
            if (!dropdownTrigger.contains(event.target) && !modalElement.contains(event.target)) {
                this.isModalOpen = false;
                document.removeEventListener("click", this.handleDocumentClick);
            }
        },
        searchOptions(event) {
            this.searchQuery = String(event.target?.value).toLowerCase();
        },
        getDefaultValue() {
            if (this.defaultValue) {
                const defaultOption = this.options.find(option => option.key === this.defaultValue);
                if (defaultOption) {
                    this.selectItem = defaultOption;
                }
            }
        },
    },
    computed: {
        filteredOptions() {
            const filtered = this.options.filter((option) =>
                option.value.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            return filtered;
        },
    },
    mounted(){
        this.getDefaultValue();
    },
    watch: {
        options : {
            handler(){
                this.getDefaultValue();
            }
        },
        defaultValue : {
            handler(){
                this.getDefaultValue();
            }
        },
    }
};
</script>

<style scoped>

*::-webkit-scrollbar {
    width: 4px;
    height: 2px;
}
   
*::-webkit-scrollbar-track {
    @apply bg-slate-100;
}
   
*::-webkit-scrollbar-thumb {
    @apply bg-slate-300 rounded-2xl;
}
</style>