import axios from "axios";

const instance = axios.create({
    baseURL: 'https://taskminderapi.onrender.com/api',
    crossDomain: true,
    withCredentials: true,
    credentials: 'include',
    headers: {
        "Content-type": "application/json",
    },
})

export default instance