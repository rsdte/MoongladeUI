import { defineStore } from "pinia"


const store = defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        }
    }
})

export default store;