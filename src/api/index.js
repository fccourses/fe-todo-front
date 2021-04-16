import axios from 'axios';
import QS from 'query-string';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `${BASE_URL}/api`,
});

/* GET http://localhost:3000/api/users/1/tasks */
export const getTasks = ({ userId = 1, page = 1, limit = 2 }) =>
  http.get(`/users/${userId}/tasks?${QS.stringify({ page, limit })}`);

/* POST http://localhost:3000/api/users/1/tasks */
export const createTask = ({ userId = 1, ...task } = {}) =>
  http.post(`/users/${userId}/tasks`, task);

/* DELETE http://localhost:3000/api/users/1/tasks/10 */
export const deleteTask = ({ userId = 1, taskId } = {}) =>
  http.delete(`/users/${userId}/tasks/${taskId}`);

export default http;
