import axios from "./axios";

export const getListsRequest = () => axios.get('/lists')

export const createListsRequest = (list) => axios.post('/lists', list)

export const updateListsRequest = (list) => axios.put(`/lists/${list._id}`, list)

export const deleteListsRequest = (id) => axios.delete(`/lists/${id}`)

export const getListRequest = (id) => axios.get(`/lists/${id}`)