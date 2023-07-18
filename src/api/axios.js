import axios from "axios";
import Cookies from "js-cookie"

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