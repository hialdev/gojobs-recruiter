import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    getters: {
        // automatically infers the return type as a number
        doubleCount(state) {
            return state.count * 2
        },
        doublePlusOne(){
            return this.doubleCount + 1
        },
    },
})