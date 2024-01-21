<template>
    <div class="">
        <h3 class="mb-4 font-medium">Manage Job Access</h3>
        <div class="mb-5">
            <div class="flex items-center mb-3">
                <button class="ms-auto p-2 px-4 text-sm text-white bg-emerald-600 rounded-lg">Create Access</button>
            </div>
            <table class="w-full overflow-hidden border rounded-lg">
                <thead class="text-xs bg-slate-100">
                    <tr>
                        <th class="p-2">Name</th>
                        <th class="p-2">Role</th>
                        <th class="p-2">Email</th>
                        <th class="p-2">Office</th>
                        <th class="p-2">Category</th>
                    </tr>
                </thead>
                <tbody class="text-xs">
                    <tr class="border">
                        <td class="p-2">Nisa</td>
                        <td class="p-2">MGR Source</td>
                        <td class="p-2">nisa@ish.com</td>
                        <td class="p-2">ISH Palembang</td>
                        <td class="p-2"><div class="w-full p-2 px-4 rounded-lg text-center bg-emerald-100 text-emerald-700">Job Creator</div></td>
                    </tr>
                    <tr class="border">
                        <td class="p-2">Nisa</td>
                        <td class="p-2">MGR Source</td>
                        <td class="p-2">nisa@ish.com</td>
                        <td class="p-2">ISH Palembang</td>
                        <td class="p-2"><div class="w-full p-2 px-4 rounded-lg text-center bg-purple-100 text-purple-700">Job Creator</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mb-5">
            <div class="flex items-center mb-3">
                <div class="me-auto">
                    <h4 class="text-sm font-medium">Internal Access</h4>
                    <p class="text-xs text-slate-500">Pengguna Internal dan reviewer yang ditugaskan</p>
                </div>
                <button class="p-2 px-4 text-sm text-white bg-emerald-600 rounded-lg">Add PIC</button>
            </div>
            <table class="w-full overflow-hidden border rounded-lg">
                <thead class="text-xs bg-slate-100">
                    <tr>
                        <th class="p-2">Name</th>
                        <th class="p-2">Role</th>
                        <th class="p-2">Email</th>
                        <th class="p-2">Office</th>
                    </tr>
                </thead>
                <tbody class="text-xs">
                    <tr class="border">
                        <td class="p-2">Nisa</td>
                        <td class="p-2">MGR Source</td>
                        <td class="p-2">nisa@ish.com</td>
                        <td class="p-2">ISH Palembang</td>
                    </tr>
                    <tr class="border">
                        <td class="p-2">Nisa</td>
                        <td class="p-2">MGR Source</td>
                        <td class="p-2">nisa@ish.com</td>
                        <td class="p-2">ISH Palembang</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mb-5">
            <div class="flex items-center mb-3">
                <div class="me-auto">
                    <h4 class="text-sm font-medium">External Access</h4>
                    <p class="text-xs text-slate-500">Tampilan & proses akses internal yang ditetapkan</p>
                </div>
            </div>
            <table class="w-full overflow-hidden border rounded-lg">
                <thead class="text-xs bg-slate-100">
                    <tr>
                        <th class="p-2">Name</th>
                        <th class="p-2">Role</th>
                        <th class="p-2">Email</th>
                        <th class="p-2">Office</th>
                    </tr>
                </thead>
                <tbody class="text-xs">
                    <tr class="border">
                        <td class="p-2">Nisa</td>
                        <td class="p-2">MGR Source</td>
                        <td class="p-2">nisa@ish.com</td>
                        <td class="p-2">ISH Palembang</td>
                    </tr>
                    <tr class="border">
                        <td class="p-2">Nisa</td>
                        <td class="p-2">MGR Source</td>
                        <td class="p-2">nisa@ish.com</td>
                        <td class="p-2">ISH Palembang</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'job-setting',
})
</script>