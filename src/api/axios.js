import axios from "axios";

const instance = axios.create({
  baseURL: 'https://taskminderapi.onrender.com/api',
  // Agregar aquí el token en el encabezado de cada solicitud
  headers: {
    Authorization: localStorage.getItem("token") || "", // Asegúrate de tener el token almacenado en localStorage
  },
});

export default instance;
