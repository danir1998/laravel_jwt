import axios from "axios";
import router from "./router";

const api = axios.create();
api.interceptors.request.use((config) => {
    if (localStorage.getItem("token")){
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }

    return config;
}, (error) => {
    console.log("DAN", error);
});

api.interceptors.response.use(config => {
    return config;
}, error => {
    if (error.response.data.message === 'Token has expired'){
        console.log("Expired...")

        return api.post('/api/auth/refresh', {}, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            localStorage.setItem("token", res.data.access_token);
            error.config.headers.authorization = `Bearer ${res.data.access_token}`
            return api.request(error.config);
        })
    }

    if (error.response.status === 401){
        router.push({name: 'user.login'})
    }

})

export default api;
