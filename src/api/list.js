import axios from "./axios";
import instance from "./axios";

export const getListsRequest = () => instance.get('/lists')

export const createListsRequest = (list) => instance.post('/lists', list)

export const updateListsRequest = (list) => instance.put(`/lists/${list._id}`, list)

export const deleteListsRequest = (id) => instance.delete(`/lists/${id}`)

export const getListRequest = (id) => instance.get(`/lists/${id}`)