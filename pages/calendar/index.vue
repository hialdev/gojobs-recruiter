<template>
    <div>
        <div class="p-8 bg-white flex items-center">
            <div>
                <h1 class="text-lg font-medium">Calendar</h1>
                <div class="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                    >
                        <g fill="none">
                            <path
                                fill="currentColor"
                                d="M4 7v2h16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
                            />
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 5h2a2 2 0 0 1 2 2v2H4V7a2 2 0 0 1 2-2h2m8 0V3m0 2H8m0-2v2M4 9.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5"
                            />
                        </g>
                    </svg>
                    {{ month }}, {{ year }}
                    <div class="flex items-center gap-2 ms-2">
                        <button
                            @click="prevMonth"
                            class="flex items-center justify-center p-2 rounded-lg bg-slate-50 text-slate-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m6 8l-4 4l4 4m-4-4h20"
                                />
                            </svg>
                        </button>
                        <button
                            @click="nextMonth"
                            class="flex items-center justify-center p-2 rounded-lg bg-emerald-700 text-emerald-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m18 8l4 4l-4 4M2 12h20"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center ms-auto gap-2">
                <!-- Tambahkan PartialFormSelect untuk Month dan Year -->
                <PartialFormSelect
                    :label="`Month`"
                    :options="monthOptions"
                    :customClass="`shadow-none border text-sm`"
                    :modalClass="[`end-0`]"
                    :defaultValue="`${selectedMonth}`"
                    @selected="(value) => {selectedMonth = value}"
                />
                <PartialFormSelect
                    :label="`Year`"
                    :options="yearOptions"
                    :customClass="`shadow-none border text-sm`"
                    :modalClass="[`end-0`]"
                    :defaultValue="`${selectedYear}`"
                    @selected="(value) => {selectedYear = value}"
                />
                <PartialFormSelect
                    :label="`Activity`"
                    :options="activityOptions"
                    :customClass="`shadow-none border text-sm`"
                    :defaultValue="``"
                    :modalClass="[`end-0`]"
                    @selected="(value) => {selectedActivity = value}"
                />
                <button
                    @click="addSchedule"
                    class="p-2 px-4 rounded-lg text-sm bg-emerald-100 flex items-center gap-2 text-emerald-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 12h7m7 0h-7m0 0V5m0 7v7"
                        />
                    </svg>
                    New Schedule
                </button>
            </div>
        </div>
        <div class="grid grid-cols-7 items-stretch gap-2 p-5">
            <div v-for="day in daysInMonth" :key="day" class="col-span-1">
                <div class="border rounded-xl min-h-[5em] p-2">
                    <div class="flex items-center justify-start mb-2">
                        <div class="flex items-center justify-center w-[25px] h-[25px] text-xs p-2 bg-emerald-600 text-white font-medium rounded-xl">
                            {{ day }}
                        </div>
                        <div class="flex-1 text-center text-sm text-slate-700 uppercase">
                            {{ getDayName(day) }}
                        </div>
                    </div>
                    <div v-for="schedule in getScheduleForDate(day)" :key="schedule.id">
                        <div @click="() => {selectedSchedule = schedule}" class="p-2 cursor-pointer group hover:bg-emerald-600 hover:text-white rounded border-s-2 border-emerald-600 bg-white text-xs">
                            <div class="mb-1">{{ schedule.activity }}</div>
                            <div class="text-slate-500 line-clamp-3 mb-2 group-hover:text-emerald-200">{{ schedule.detail }}</div>
                            <div class="flex items-center gap-2 text-emerald-700 group-hover:text-emerald-100"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48"/></g></svg> {{ schedule.time_start }} - {{ schedule.time_end }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selectedSchedule != null">
            <CardCalendarDetail @close="closeSchedule" :schedule="selectedSchedule" />
        </div>
        <CardCalendarAdd v-if="showAddSchedule" @close="closeAddSchedule"/>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useScheduleStore } from "@/stores/schedule"

const store = useScheduleStore();
const selectedActivity = ref('');
const showAddSchedule = ref(false);
const currentDate = ref(new Date());
const month = ref(currentDate.value.toLocaleDateString("default", { month: "long" }));
const year = ref(currentDate.value.getFullYear());
const daysInMonth = ref([]);
const monthOptions = ref([]);
const yearOptions = ref([]);
let selectedSchedule = ref(null);
const activityOptions = ref([
    {
        key: '',
        value: 'Semua',
    },
    {
        key: 'ihr',
        value: 'Interview HR',
    },
    {
        key: 'ius',
        value: 'Interview User',
    },
    {
        key: 'psk',
        value: 'Psikotest',
    },
    {
        key: 'trn',
        value: 'Training',
    },
]);
const selectedMonth = ref(month.value);
const selectedYear = ref(year.value);

const updateDaysInMonth = () => {
    const lastDay = new Date(selectedYear.value, monthOptions.value.findIndex((m) => m.value === selectedMonth.value) + 1, 0).getDate();
    daysInMonth.value = Array.from({ length: lastDay }, (_, i) => i + 1);
    month.value = selectedMonth.value; // Perbarui bulan saat hari-hari dalam bulan diperbarui
    year.value = selectedYear.value; // Perbarui tahun saat hari-hari dalam bulan diperbarui
};

const prevMonth = () => {
    const prevMonthIndex = monthOptions.value.findIndex((m) => m.value === selectedMonth.value) - 1;
    if (prevMonthIndex >= 0) {
        selectedMonth.value = monthOptions.value[prevMonthIndex].value;
    } else {
        selectedMonth.value = monthOptions.value[11].value;
    }
};

const nextMonth = () => {
    const nextMonthIndex = monthOptions.value.findIndex((m) => m.value === selectedMonth.value) + 1;
    if (nextMonthIndex <= 11) {
        selectedMonth.value = monthOptions.value[nextMonthIndex].value;
    } else {
        selectedMonth.value = monthOptions.value[0].value;
    }
};

const getDayName = (day) => {
    const date = new Date(selectedYear.value, monthOptions.value.findIndex((m) => m.value === selectedMonth.value), day);
    return date.toLocaleDateString("default", { weekday: "short" });
};

onMounted(() => {
    updateDaysInMonth();

    // Inisialisasi opsi bulan
    monthOptions.value = Array.from({ length: 12 }, (_, i) => ({
        key: new Date(currentDate.value.getFullYear(), i, 1).toLocaleDateString("default", { month: "long" }),
        value: new Date(currentDate.value.getFullYear(), i, 1).toLocaleDateString("default", { month: "long" }),
    }));

    // Inisialisasi opsi tahun
    const currentYear = currentDate.value.getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => ({
        key: String(currentYear + i),
        value: String(currentYear + i),
    }));
    yearOptions.value = years;
});

watch([selectedMonth, selectedYear], () => {
    updateDaysInMonth();
});

const getScheduleForDate = (day) => {
    const selectedDate = new Date(selectedYear.value, monthOptions.value.findIndex((m) => m.value === selectedMonth.value), day);

    // Filter jadwal berdasarkan tanggal yang dipilih
    return store.data.filter((schedule) => {
        const scheduleDate = new Date(schedule.date);
        return (
        scheduleDate.getFullYear() === selectedDate.getFullYear() &&
        scheduleDate.getMonth() === selectedDate.getMonth() &&
        scheduleDate.getDate() === selectedDate.getDate()
        );
    });
};

const closeSchedule = () => {
    selectedSchedule.value = null;
}
const closeAddSchedule = () => {
    showAddSchedule.value = false;
}

const addSchedule = () => {showAddSchedule.value = !showAddSchedule.value};
</script>

