<template>
    <div>
        <div class="grid grid-cols-12">
            <div class="col-span-12 px-5 mb-5">
                <h2 class="font-medium mb-4">Sesuaikan Pertanyaan dari Perusahaan</h2>
                <div v-for="(question ,qIndex) in dataQuestion" class="mb-5">
                    <div class="mb-2 flex items-center gap-2">
                        <span v-if="question?.required === true" class="text-red-700">*</span>{{ question?.question }}
                        <!-- Button Up Order -->
                        <button @click="moveQuestionUp(qIndex)" class="ms-auto flex items-center justify-center p-1.5 rounded-lg bg-emerald-600 text-white w-[25px] h-[25px] text-xs" :disabled="qIndex === 0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m13 30l12-12l12 12"/></svg>
                        </button>
                        <!-- Button Down Order -->
                        <button @click="moveQuestionDown(qIndex)" class="flex items-center justify-center p-1.5 rounded-lg bg-slate-100 text-slate-800 w-[25px] h-[25px] text-xs" :disabled="qIndex === dataQuestion.length - 1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>
                        </button>
                        <!-- Button Delete Question -->
                        <button @click="deleteQuestion(qIndex)" class="flex items-center justify-center p-1.5 rounded-lg bg-rose-600 text-white w-[25px] h-[25px] text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 5h4a2 2 0 1 0-4 0M8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14.25 9a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75"/></svg>
                        </button>
                    </div>
                    <textarea v-if="question?.type === 'paragraf'" id="" cols="30" rows="4" class="w-full p-2 px-4 text-sm focus:border-emerald-600 focus:ring-emerald-600 rounded-lg border-slate-300"></textarea>
                    <input v-if="question?.type === 'text'" type="text" class="w-full p-2 px-4 text-sm focus:border-emerald-600 focus:ring-emerald-600 rounded-lg border-slate-300">
                    <input v-if="question?.type === 'date'" type="date" class="w-full p-2 px-4 text-sm focus:border-emerald-600 focus:ring-emerald-600 rounded-lg border-slate-300">
                    <input v-if="question?.type === 'time'" type="time" class="w-full p-2 px-4 text-sm focus:border-emerald-600 focus:ring-emerald-600 rounded-lg border-slate-300">
                    <label v-if="question?.type === 'toggle'" class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" :value="question?.key" class="sr-only peer" checked>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                    <input v-if="question?.type === 'file'" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <div v-if="question?.type === 'radio' || question?.type === 'multicheckbox'" class="border-2 border-slate-300 rounded-lg p-4">
                        <div class="flex items-center gap-4 mb-3">
                            <label for="options" class="text-xs text-slate-4">Tambah Pilihan :</label>
                            <input v-model="newOption" type="text" id="options" class="p-2 px-4 rounded-lg border-slate-300 text-sm focus:border-emerald-600 focus:ring-emerald-600">
                            <button @click="addOption(question?.key)" class="text-center text-sm bg-emerald-600 text-white p-2 px-4 rounded-lg">+</button>
                        </div>
                        
                        <div v-for="(option, oIndex) in question.options" :key="oIndex" class="flex items-center mb-4">
                            <input v-if="question?.type === 'multicheckbox'" id="default-checkbox" type="checkbox" :value="option" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2">
                            <input v-if="question?.type === 'radio'" id="default-radio-1" type="radio" :value="option" :name="`radio-${question.key}`" class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 focus:ring-emerald-500 focus:ring-2">
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900">{{option}}</label>
                            <!-- Button Delete Option -->
                            <button @click="deleteOption(qIndex, oIndex)" class="ms-7 flex items-center justify-center p-1.5 rounded-lg bg-rose-600 text-white w-[25px] h-[25px] text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 5h4a2 2 0 1 0-4 0M8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14.25 9a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75"/></svg>
                            </button>
                        </div>
                    </div>
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
                <div class="mt-4">
                    <button @click="navigateTo('/job/1/edit/success')" class="p-2 px-4 rounded-lg bg-emerald-600 text-white w-full">Buat Job Posting</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'job-edit',
})

const dataQuestion = ref([]);

const newQuestion = ref({
    key: '',
    type: '',
    question: '',
    required: false,
    options: [],
    order: '',
});

const addQuestion = () => {
    if(newQuestion.value.type === 'radio' || newQuestion.value.type === 'multicheckbox'){
        newQuestion.value.options = []
    }
    newQuestion.value.key = Math.random().toString(36).substr(2, 9);
    dataQuestion.value.push({ ...newQuestion.value });
    console.log(dataQuestion);
};

const selectedItemHandle = (value) => {
    newQuestion.value.type = value;
}

const newOption = ref({});

const addOption = (questionKey) => {
    const qIndex = dataQuestion.value.findIndex(question => question.key === questionKey);

    if (qIndex !== -1) {
        dataQuestion.value[qIndex].options.push(newOption.value);
    }
}

const moveQuestionUp = (index) => {
    if (index > 0) {
        swapArrayElements(dataQuestion.value, index, index - 1);
    }
};

const moveQuestionDown = (index) => {
    if (index < dataQuestion.value.length - 1) {
        swapArrayElements(dataQuestion.value, index, index + 1);
    }
};

const deleteQuestion = (index) => {
    dataQuestion.value.splice(index, 1);
};

const deleteOption = (qIndex, oIndex) => {
    dataQuestion.value[qIndex].options.splice(oIndex, 1);
};

const swapArrayElements = (array, indexA, indexB) => {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
};
</script>
