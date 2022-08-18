import sendRequest from "./send-request";

const Base_URL = '/api/jobs';

export async function getAllJobs() {
    return sendRequest(`${Base_URL}/index`)
}

export async function createJob(payload) {
    return sendRequest(`${Base_URL}/new`, 'POST', payload)
}

export async function getOneJob(id) {
    return sendRequest(`${Base_URL}/${id}`)
}

export async function updateJob(payload, id) {
    return sendRequest(`${Base_URL}/${id}/edit`, 'PUT', payload)
}

export async function deleteJob(id) {
    return sendRequest(`${Base_URL}/${id}/destroy`, 'DELETE', `${id}`)
}