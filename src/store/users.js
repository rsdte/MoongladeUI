import { defineStore } from 'pinia'
import http from '../api/http'


export const useUserStore = defineStore("userStore", {
    state: () => {
        return {
            users: []
        }
    },
    getters: {

    },
    actions: {
        async getUsers(UserName, Status, StartTime, EndTime, PageIndex = 1, PageSize = 15) {
            let resp = await http.post('/user/GetAll', {
                UserName,
                Status,
                StartTime,
                EndTime,
                PageIndex,
                PageSize
            });
            if (resp.code === 200) {
                this.users = resp.data.data;
                return;
            }
            this.users = []
        }
    }
})