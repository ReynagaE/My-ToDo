import axios from "axios";

const instance = axios.create({
    baseURL: 'https://taskminderapi.onrender.com/api',
    withCredentials: true,
    //credentials: "include"
})

export default instance