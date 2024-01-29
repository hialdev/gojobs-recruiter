<template>
    <div class="container mx-auto py-5">
        <h1 class="text-xl font-medium mb-3">Cancel Join Report</h1>
        <div class="p-5 bg-white rounded-xl">   
            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-4">
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Priode Create Job Order</div>
                        <div class="flex item-center w-full">
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                            <div class="p-2">to</div>
                            <div class="flex-1"><input type="date" name="" id="" class="text-sm border-slate-200 rounded-lg w-full"></div>
                        </div>
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Status Cancel Join</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="mb-3">
                        <div class="text-xs mb-2 block">Segment</div>
                        <select name="" id="" class="w-full p-2 px-4 rounded-lg border border-slate-200 text-sm">
                            <option value="">Test</option>
                            <option value="">Test2</option>
                            <option value="">Test3</option>
                        </select>
                    </div>
                </div>
                <div class="col-span-12">
                    <div class="flex items-center gap-3">
                        <button class="ms-auto bg-emerald-600 text-white rounded-lg p-2 px-3 tex-sm">Search</button>
                        <button class="bg-slate-50 rounded-lg text-slate-800 p-2 px-3 tex-sm">Reset</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-4 grid grid-cols-12 gap-x-4">
            <div class="col-span-3">
                <div class="p-5 rounded-lg bg-emerald-100 text-emerald flex flex-col items-center gap-3">
                    <div class="text-emerald-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"/></svg>
                    </div>
                    <span class="text-xs text-emerald-700">Total Cancel Join</span>
                    <div class="text-xl font-medium text-emerald-700">0</div>
                </div>
            </div>
        </div>

        <CardReportCancel />
    </div>
</template>