<template>
    <NuxtLayout name="default">
        <div class="container mx-auto p-5">
            <div class="flex items-center justify-between mb-5">
                <NuxtLink to="/job/1" class="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg>
                    <div class="font-medium">Edit Job</div>
                </NuxtLink>
                <div class="ms-auto flex items-center gap-2">
                    <BlockJobStatus />
                    <button class="px-4 py-2 text-sm bg-emerald-700 text-white rounded-lg" :disabled="editStep < 4" :class="{'bg-slate-500' : editStep < 4}">Update Job</button>
                    <button @click="navigateTo('/job/1/setting')" class="px-4 py-2 text-sm ring-2 ring-inset ring-slate-200 text-slate-700 rounded-lg flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.485c-.658 0-1.23.421-2.373 1.264L7.906 4.018c-.18.133-.27.199-.367.255c-.097.056-.2.1-.405.19l-1.959.856c-1.302.57-1.953.854-2.282 1.423c-.328.57-.25 1.276-.091 2.688l.238 2.125c.025.222.037.333.037.445c0 .112-.012.223-.037.445l-.238 2.125c-.158 1.412-.237 2.118.091 2.688c.33.57.98.854 2.282 1.423l1.96.856c.204.09.307.134.404.19c.096.056.187.122.367.255l1.72 1.269c1.145.843 1.717 1.264 2.374 1.264s1.23-.421 2.373-1.264l1.721-1.269c.18-.133.27-.199.367-.255c.097-.056.2-.1.405-.19l1.959-.856c1.302-.57 1.953-.854 2.282-1.423c.328-.57.25-1.276.09-2.688l-.237-2.125c-.025-.222-.038-.333-.038-.445c0-.112.013-.223.038-.445l.238-2.125c.158-1.412.237-2.118-.091-2.688c-.33-.57-.98-.854-2.282-1.423l-1.96-.856a4.128 4.128 0 0 1-.404-.19a4.132 4.132 0 0 1-.367-.255l-1.72-1.269C13.228 1.906 12.656 1.485 12 1.485M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"/></svg>
                        Setting
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-xl">
                <div class="p-3 border-b-[4px] mb-5 border-slate-50">
                    <div class="box">
                        <NuxtLink to="/job/1/edit/1" activeClass="activeStep" class="relative box-item" :class="{'filled': editStep > 1}">
                            <div class="absolute flex items-center gap-4 p-2 ps-6 top-0 bottom-0 start-0 end-0">
                                <h3 class="text-xl font-medium w-[30px] h-[30px] flex items-center justify-center text-white rounded-3xl">1</h3>
                                <p class="text-sm">Job Details</p>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/job/1/edit/2" activeClass="activeStep" class="relative box-item" :class="{'filled': editStep > 2}">
                            <div class="absolute flex items-center gap-4 p-2 ps-6 top-0 bottom-0 start-0 end-0">
                                <h3 class="text-xl font-medium w-[30px] h-[30px] flex items-center justify-center text-white rounded-3xl">2</h3>
                                <p class="text-sm">Job Description</p>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/job/1/edit/3" activeClass="activeStep" class="relative box-item" :class="{'filled': editStep > 3}">
                            <div class="absolute flex items-center gap-4 p-2 ps-6 top-0 bottom-0 start-0 end-0">
                                <h3 class="text-xl font-medium w-[30px] h-[30px] flex items-center justify-center text-white rounded-3xl">3</h3>
                                <p class="text-sm">Setting Data Applicant</p>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/job/1/edit/4" activeClass="activeStep" class="relative box-item" :class="{'filled': editStep === 'success'}">
                            <div class="absolute flex items-center gap-4 p-2 ps-6 top-0 bottom-0 start-0 end-0">
                                <h3 class="text-xl font-medium w-[30px] h-[30px] flex items-center justify-center text-white rounded-3xl">4</h3>
                                <p class="text-sm">Question</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <slot />
            </div>
            
        </div>
    </NuxtLayout>
</template>

<script setup>
const editStep = ref(null);
const route = useRoute();

watch(
    () => route.path,
    () => {
        const pathSegments = route.path.split('/');
        editStep.value = pathSegments[pathSegments.length - 1];  
    }
)
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
  height: 80px;
  line-height: 40px;
  margin-right: 10px;
  padding: 0 10px;
  @apply ps-5 bg-slate-100 text-slate-700 w-[24.3%] hidden lg:block;
  border-radius: 4px;
}
.box-item h3{
    @apply bg-slate-500;
}
.box-item:before {
  content: "";
  position: absolute;
  right: -9px;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 10px solid #fcc;
  @apply border-l-slate-100;
  border-radius: 4px;
}
.box-item:after {
  content: "";
  position: absolute;
  left: -1px;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 10px solid #fff;
  border-radius: 4px;
}
.box-item:first-child:after {
    display: none;
}

.box-item:last-child {
  margin-right: 0;
}
.box-item:last-child:before {
  display: none;
}

.activeStep.box-item{
    @apply bg-emerald-100 text-emerald-700;
}
.activeStep.box-item:before{
    @apply border-l-emerald-100;
}
.activeStep.box-item h3{
    @apply bg-emerald-700;
}

.filled.box-item{
    @apply bg-emerald-600 text-white !important;
}
.filled.box-item:before{
    @apply border-l-emerald-600;
}

.filled.box-item h3{
    @apply bg-emerald-100 text-emerald-600;
}
</style>