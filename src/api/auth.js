import axios from "axios";

const API = 'https://taskminderapi.onrender.com/api'

export const registerRequest = user => axios.post(`${API}/register`, user)