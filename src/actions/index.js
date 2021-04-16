import ACTION_TYPES from './types';

export const createTaskRequest = task => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { task },
});

export const createTaskSuccess = task => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = error => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

export const getTasksRequest = (options = {}) => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
  payload: { ...options },
});

export const getTasksSuccess = tasks => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTasksError = error => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error },
});

export const deleteTaskRequest = id => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: { id },
});

export const deleteTaskSuccess = id => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { id },
});

export const deleteTaskError = error => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error },
});

export const clearTaskError = () => ({
  type: ACTION_TYPES.CLEAR_TASK_ERROR,
});
