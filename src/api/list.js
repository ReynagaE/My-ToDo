import axios from "./axios";

export const getListsRequest = () => axios.get("/lists");

export const createListRequest = (list) => axios.post("/lists", list);

export const updateListRequest = (list) => axios.put(`/lists/${list._id}`, list);

export const deleteListRequest = (id) => axios.delete(`/lists/${id}`);

export const getListRequest = (id) => axios.get(`/lists/${id}`);
