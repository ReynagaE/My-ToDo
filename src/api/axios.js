import axios from "axios";

const instance = axios.create({
  baseURL: 'https://taskminderapi.onrender.com/api',
});

// Agregar un interceptor para incluir el token en el encabezado "Authorization" de cada solicitud
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
