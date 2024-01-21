
<template>
    <div>
        <PartialFormSelect :label="`Type Jawaban`" :options="options" @selected="handleSelectedOption" />
    </div>
</template>

<script setup>
const options = [
    {
        key: 'text',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M184 208a8 8 0 0 1-8 8h-16a40 40 0 0 1-32-16a40 40 0 0 1-32 16H80a8 8 0 0 1 0-16h16a24 24 0 0 0 24-24v-40h-16a8 8 0 0 1 0-16h16V80a24 24 0 0 0-24-24H80a8 8 0 0 1 0-16h16a40 40 0 0 1 32 16a40 40 0 0 1 32-16h16a8 8 0 0 1 0 16h-16a24 24 0 0 0-24 24v40h16a8 8 0 0 1 0 16h-16v40a24 24 0 0 0 24 24h16a8 8 0 0 1 8 8"/></svg>',
        value: 'Text'
    },
    {
        key: 'paragraf',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 12h14M5 16h6"/></svg>',
        value: 'Paragraf'
    },
    {
        key: 'radio',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"/><circle cx="8" cy="8" r="4" fill="currentColor"/></svg>',
        value: 'Radio'
    },
    {
        key: 'toggle',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><path fill="currentColor" d="M9 7c-4.96 0-9 4.035-9 9s4.04 9 9 9h14c4.957 0 9-4.043 9-9s-4.043-9-9-9zm14 2c3.879 0 7 3.121 7 7s-3.121 7-7 7s-7-3.121-7-7s3.121-7 7-7"/></svg>',
        value: 'Toggle'
    },
    {
        key: 'multicheckbox',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.29 13.29a.996.996 0 0 1-1.41 0L5.71 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41z"/></svg>',
        value: 'Multi Checkbox'
    },
    {
        key: 'file',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"/></svg>',
        value: 'File Upload'
    },
    {
        key: 'date',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>',
        value: 'Date'
    },
    {
        key: 'time',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48"/></g></svg>',
        value: 'Time'
    },
]
const emit = defineEmits(['selected']);
const handleSelectedOption = (value) => {
    emit('selected', value);
};
</script>