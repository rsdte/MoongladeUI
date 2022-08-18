import axios from "axios"


const config = {
    timeout: 5000,
    baseURL: 'http://localhost:8080'
}

class Http {
    constructor(config) {
        this.service = axios.create(config);

        this.service.interceptors.request.use((config) => {
            if (localStorage.getItem('token') && localStorage.getItem('tokenKey')) {
                (config.headers).authorization = localStorage.getItem('token');
                (config.headers).authorizationKey = localStorage.getItem('tokenKey');
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

    get(url, params, _object = {}) {
        return this.service.get(url, { params, ..._object });
    }

    post(url, params, _object = {}) {
        return this.service.post(url, params, _object);
    }

    put(url, params, _object = {}) {
        return this.service.put(url, params, _object);
    }

    delete(url, params, _object = {}) {
        return this.service.delete(url, { params, ..._object })
    }
}

const http = new Http(config);

export default http;



