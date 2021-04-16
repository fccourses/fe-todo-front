const ACTION_TYPES = {
  CREATE_TASK_REQUEST: 'todo/createRequest',
  CREATE_TASK_SUCCESS: 'todo/createSuccess',
  CREATE_TASK_ERROR: 'todo/createError',

  GET_TASKS_REQUEST: 'todo/getRequest',
  GET_TASKS_SUCCESS: 'todo/getSuccess',
  GET_TASKS_ERROR: 'todo/getError',

  UPDATE_TASK_REQUEST: 'todo/updateRequest',
  UPDATE_TASK_SUCCESS: 'todo/updateSuccess',
  UPDATE_TASK_ERROR: 'todo/updateError',

  DELETE_TASK_REQUEST: 'todo/deleteRequest',
  DELETE_TASK_SUCCESS: 'todo/deleteSuccess',
  DELETE_TASK_ERROR: 'todo/deleteError',

  CLEAR_TASK_ERROR: 'todo/clearError',
};

export default ACTION_TYPES;
