<template>
    <div class="relative">
        <div class="flex items-center gap-3 mb-4">
          <CardCandidateViewLink :to="to" :text="text" />
        </div>
        <ul class="box">
            <li @click="status = 1" class="cursor-pointer relative box-item" :class="{'active' : status >= 1}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Screening</p>
                </div>
            </li>
            <li @click="status = 2" class="cursor-pointer relative box-item" :class="{'active' : status >= 2}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Psikotest</p>
                </div>
            </li>
            <li @click="status = 3" class="cursor-pointer relative box-item" :class="{'active' : status >= 3}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Interview HR</p>
                </div>
            </li>
            <li @click="status = 4" class="cursor-pointer relative box-item" :class="{'active' : status >= 4}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Interview User</p>
                </div>
            </li>
            <li @click="status = 5" class="cursor-pointer relative box-item" :class="{'active' : status >= 6}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Reject</p>
                </div>
            </li>
            <li @click="status = 6" class="cursor-pointer relative box-item" :class="{'active' : status >= 7}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm">Hiring</p>
                </div>
            </li>
        </ul>
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12">
                <CardCandidateProcessScreening v-if="selectedProcess == 1" @reject="status = 6" @lolos="status = status+1" />
                <CardCandidateProcessPsikotest v-if="selectedProcess == 2" @reject="status = 6" @lolos="status = status+1" />
                <CardCandidateProcessInterviewhr v-if="selectedProcess == 3" @reject="status = 6" @lolos="status = status+1" />
                <CardCandidateProcessInterviewuser v-if="selectedProcess == 4" @reject="status = 6" @lolos="status = 7" />
            </div>
            <div class="col-span-12">
                <div class="p-5 bg-white rounded-lg">
                    <div @click="isAddNote = !isAddNote" class="flex items-center mb-3 pb-4 border-b">
                        <h4 class="text-lg font-medium">Notes</h4>
                        <button class="ms-auto bg-emerald-100 text-emerald-900 p-2 px-4 rounded-lg text-xs">Add Note</button>
                    </div>
                    <div v-if="isAddNote" class="flex items-start gap-3 mb-4">
                      <NuxtImg src="https://placeholder.co/70" alt="Image Asignee" class="block rounded-3xl w-[40px] h-[40px]" />
                      <div class="w-full">
                        <textarea name="" id="" cols="30" rows="4" class="text-sm w-full rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-emerald-600 p-2 px-4" placeholder="Tulis note..."></textarea>
                        <div class="flex items-center gap-2">
                          <button @click="isAddNote = false" class="p-2 px-4 text-xs rounded-lg text-slte-700 bg-slate-100">Cancel</button>
                          <button class="p-2 px-4 text-xs rounded-lg bg-emerald-600 text-white">Add Note</button>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <NuxtImg src="https://placeholder.co/70" alt="Image Asignee" class="block rounded-3xl w-[40px] h-[40px]" />
                        <div>
                            <div class="flex items-center gap-1">
                                <span class="font-medium text-sm me-3">Name Surname</span>
                                <span class="text-slate-500 text-xs">23 Nov 2023</span> - 
                                <span class="text-slate-500 text-xs">11:32 WIB</span>
                            </div>
                            <p class="text-sm text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate, similique perspiciatis aspernatur dolorum rem? Expedita amet minima similique consectetur. Optio placeat repellendus quo quasi officiis asperiores deleniti recusandae magnam!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const status = ref(3);
const isAddNote = ref(false);
const selectedProcess = ref(status);
const props = defineProps({
    to : String,
    text : String,
})
</script>

<style scoped>
.box {
  display: block;
  width: 100%;
  margin: 0 auto;
  @apply text-center;
  overflow: hidden;
}

.box-item {
  display: block;
  position: relative;
  float: left;
  height: 50px;
  line-height: 40px;
  margin-right: 10px;
  padding: 0 10px;
  @apply ps-5 bg-slate-200 text-slate-900 w-[15.7%] hidden lg:block;
  border-radius: 4px;
}
.box-item:before {
  content: "";
  position: absolute;
  right: -9px;
  height: 0;
  width: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 10px solid #fcc;
  @apply border-l-slate-200;
  border-radius: 4px;
}
.box-item:after {
  content: "";
  position: absolute;
  left: -1px;
  height: 0;
  width: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 10px solid #f7f7f7;
  border-radius: 4px;
}
.box-item:first-child:after {
    display: none;
}

.active.box-item:first-child{
  @apply ps-5 bg-emerald-100  text-emerald-900;
}
.active.box-item:first-child:before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-100;
}

.active.box-item:nth-child(2){
  @apply ps-5 bg-emerald-200  text-emerald-900;
}
.active.box-item:nth-child(2):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-200;
}

.active.box-item:nth-child(3){
  @apply ps-5 bg-emerald-300  text-emerald-900;
}
.active.box-item:nth-child(3):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-300;
}

.active.box-item:nth-child(4){
  @apply ps-5 bg-emerald-500  text-white;
}
.active.box-item:nth-child(4):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-500;
}

.active.box-item:nth-child(5){
  @apply ps-5 bg-emerald-600  text-white;
}
.active.box-item:nth-child(5):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-600;
}

.active.box-item:nth-child(6){
  @apply ps-5 bg-emerald-700  text-white;
}
.active.box-item:nth-child(6):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-700;
}

.active.box-item:nth-child(7){
  @apply ps-5 bg-emerald-900  text-white;
}
.active.box-item:nth-child(7):before {
  border-left: 10px solid #fcc;
  @apply border-l-emerald-900;
}

.box-item:last-child {
  margin-right: 0;
}
.box-item:last-child:before {
  display: none;
}
</style>