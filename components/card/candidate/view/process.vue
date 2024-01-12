<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <div class="text-sm">Lamaran untuk <NuxtLink class="text-emerald-600">Senior Project Management at PT. KRETEK</NuxtLink></div>
        </div>
        <ul class="box">
            <li class="relative box-item" :class="{'active' : status >= 1}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Screening</p>
                </div>
            </li>
            <li class="relative box-item" :class="{'active' : status >= 2}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Psikotest</p>
                </div>
            </li>
            <li class="relative box-item" :class="{'active' : status >= 3}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Interview HR</p>
                </div>
            </li>
            <li class="relative box-item" :class="{'active' : status >= 4}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Interview User</p>
                </div>
            </li>
            <li class="relative box-item" :class="{'active' : status >= 5}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Peralihan</p>
                </div>
            </li>
            <li class="relative box-item" :class="{'active' : status >= 6}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm ms-3">Reject</p>
                </div>
            </li>
            <li class="relative box-item" :class="{'active' : status >= 7}">
                <div class="absolute p-2 top-0 bottom-0 start-0 end-0 flex items-center justify-center">
                    <p class="text-sm">Hiring</p>
                </div>
            </li>
        </ul>
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12">
                <div class="p-5 bg-white rounded-lg">
                    <h4 class="text-lg font-medium mb-3 pb-4 border-b">Detail</h4>
                    <div class="grid grid-cols-12">
                        <div class="col-span-6">
                            <div class="mb-3">
                                <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Current Status</span>
                                <span class="p-1 px-3 rounded-lg bg-emerald-600 text-white text-sm uppercase">Active</span>
                            </div>
                            <div class="mb-3">
                                <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Stage</span>
                                <span class="font-medium text-sm whitespace-nowrap">Interview HR</span>
                            </div>
                            <div class="mb-3">
                                <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                                <span class="font-medium text-sm whitespace-nowrap">08 Des 2023</span>
                            </div>
                        </div>
                        <div class="col-span-6">
                            <div class="mb-3">
                                <span class="block text-slate-500 text-xs mb-2 whitespace-nowrap">Date</span>
                                <div class="flex items-center gap-3">
                                    <NuxtImg src="https://placeholder.co/70" alt="Image Asignee" class="block rounded-3xl w-[40px] h-[40px]" />
                                    <span class="font-medium text-sm">Name Surname</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <button class="bg-rose-600 text-white p-2 px-4 rounded-lg">Reject</button>
                                <button class="bg-emerald-600 text-white p-2 px-4 rounded-lg">Lolos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12">
                <div class="p-5 bg-white rounded-lg">
                    <div class="flex items-center mb-3 pb-4 border-b">
                        <h4 class="text-lg font-medium">Notes</h4>
                        <button class="ms-auto bg-emerald-100 text-emerald-900 p-2 px-4 rounded-lg text-xs">Add Note</button>
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
  @apply ps-5 bg-slate-200 text-slate-900 w-[13.3%] hidden lg:block;
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