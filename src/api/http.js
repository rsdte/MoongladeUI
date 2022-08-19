import axios from "axios"


const config = {
    timeout: 5000,
    baseURL: 'http://localhost:5096'
}

class Http {
    constructor(config) {
        this.service = axios.create(config);

        this.service.interceptors.request.use((config) => {
            if (localStorage.getItem('token')) {
                (config.headers).authorization = "Bearer " + localStorage.getItem('token');
            }
            return config;
        }, error => {
            console.log(error);
            return Promise.reject(error);
        });

        this.service.interceptors.response.use(response => {
            const data = response.data;
            return response.data;
        }, error => {
            return Promise.reject(error);
        });
    }

    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            this.service.get(url, params)
                .then(res => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            this.service.post(url, data)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                });
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            this.service.put(url, data)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    delete(url, params = {}) {
        return new Promise((resolve, reject) => {
            this.service.delete(url, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

const http = new Http(config);

export default http;



