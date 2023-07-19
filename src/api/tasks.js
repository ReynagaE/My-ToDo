import instance from "./axios";

export const getTasksRequest = () => instance.get('/tasks')

export const createTaskRequest = (list) => instance.post('/tasks', task)

export const updateTaskRequest = (list) => instance.put(`/tasks/${task._id}`, task)

export const deleteTaskRequest = (id) => instance.delete(`/tasks/${id}`)

export const getTaskRequest = (id) => instance.get(`/tasks/${id}`)