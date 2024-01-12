<template>
    <div>
        <div class="grid grid-cols-12">
            <div class="col-span-12 px-5 mb-5">
                <h2 class="font-medium mb-4">Sesuaikan Pertanyaan dari Perusahaan</h2>
                <div v-for="question in dataQuestion" class="py-5">
                    <div><span v-if="question" class="text-red-700">*</span>{{ question?.question }}</div>
                    <textarea v-if="question?.type == 'p'" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="flex items-center gap-3 relative py-5 border-b border-t">
                    <input
                        v-model="newQuestion.question"
                        type="text"
                        placeholder="Pertanyaan anda"
                        class="w-full max-w-[30em] px-3 p-2 bg-gray-50 border-none rounded-lg ring-emerald-700 focus:ring-emerald-700 text-sm"
                    />
                    <div class="flex items-center gap-3 text-sm">
                        <PartialJobTypeAdd @selected="selectedItemHandle" />
                    </div>
                    <div class="ms-auto flex items-center gap-3">
                        <label class="relative inline-flex items-center me-5 cursor-pointer">
                            <input v-model="newQuestion.required" type="checkbox" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Required</span>
                        </label>
                        <button @click="addQuestion" class="p-2 px-5 bg-emerald-700 text-white rounded-lg">Tambah</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'job-add',
})

let selectedType = null;
const dataQuestion = ref([
    {
        key: '',
        type: '',
        question: '',
        required: false,
        options: [],
    },
]);

const newQuestion = ref({
    key: '',
    type: '',
    question: '',
    required: false,
    options: [],
});

const addQuestion = () => {
    if (selectedType) {
        newQuestion.value.type = selectedType.key;
    }

    dataQuestion.value.push({ ...newQuestion.value });
    newQuestion.value.question = '';
    newQuestion.value.required = false;
    selectedType = null;
};

const selectedItemHandle = (value) => {
    selectedType = value;
}
</script>
