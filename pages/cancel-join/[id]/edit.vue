<template>
    <div class="container mx-auto py-5">
        <NuxtLink to="/cancel-join" class="flex items-center gap-4 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg>
            <span class="font-medium">Edit Cancel Join</span>
        </NuxtLink>
        <BlockActionCancelJoinForm />
    </div>
</template>