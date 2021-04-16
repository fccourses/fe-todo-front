import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const getTasks = ({ userId = 1 }) => http.get(`/users/${userId}/tasks`);
export const createTask = ({ userId = 1, ...task } = {}) =>
  http.post(`/users/${userId}/tasks`, task);
export const deleteTask = ({ userId = 1, taskId } = {}) =>
  http.delete(`/users/${userId}/tasks/${taskId}`);

export default http;
