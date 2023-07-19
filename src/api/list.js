import instance from "./axios";

export const getListsRequest = () => instance.get("/lists");

export const createListRequest = (list) => instance.post("/lists", list);

export const updateListRequest = (list) => instance.put(`/lists/${list._id}`, list);

export const deleteListRequest = (id) => instance.delete(`/lists/${id}`);

export const getListRequest = (id) => instance.get(`/lists/${id}`);
