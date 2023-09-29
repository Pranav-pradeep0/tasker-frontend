import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";

export const getAllTasks = async () => {
    return await commonRequest('GET',`${BASE_URL}/api/tasks`)
}

export const newTaskApi = async (body) => {
    return await commonRequest('POST',`${BASE_URL}/api/tasks`,body)
}

export const updateTaskApi = async (id,body) => {
    return await commonRequest('PUT',`${BASE_URL}/api/tasks/${id}`,body)
}

export const deleteTaskApi = async (id) => {
    return await commonRequest("DELETE",`${BASE_URL}/api/task/${id}`)
}