
<template>
    <div class="bg-white">
        <div class="container mx-auto flex items-center justify-between px-5 py-2">
            <PartialsLogo />
            <div>
                <SeekerNavbar />
            </div>
            <div class="flex items-center gap-5">
                <div class="flex justify-center items-center text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m20 18.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667ZM9.5 21h5a2.5 2.5 0 0 1-5 0Z"/></svg>
                </div>
                <div class="bg-slate-50 p-1 flex items-center gap-3 text-slate-400 rounded-3xl pe-4">
                    <NuxtImg src="https://placehold.co/50x50/png" class="rounded-3xl" alt="Seeker Image" width="40" height="40" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"/></svg>
                </div>
            </div>
        </div>
    </div>
</template>