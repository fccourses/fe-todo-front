import ACTION_TYPES from '../actions/types';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const requestHandler = produce((draftState, action) => {
  draftState.isFetching = true;
});

const errorHandler = produce((draftState, action) => {
  const {
    payload: { error },
  } = action;
  draftState.error = error;
});

const handlers = {
  [ACTION_TYPES.GET_TASKS_REQUEST]: requestHandler,
  [ACTION_TYPES.DELETE_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.CREATE_TASK_REQUEST]: requestHandler,

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    draftState.tasks.push(task);
  }),

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { tasks },
    } = action;
    draftState.tasks.push(...tasks);
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { id },
    } = action;
    draftState.isFetching = false;
    draftState.tasks = draftState.tasks.filter(t => t.id !== Number(id));
  }),

  [ACTION_TYPES.DELETE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.CREATE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.GET_TASKS_ERROR]: errorHandler,

  [ACTION_TYPES.CLEAR_TASK_ERROR]: produce((draftState, action) => {
    draftState.error = null;
  }),
};

function taskReducer (state = initialState, action) {
  const { type } = action;
  const handler = handlers[type];

  if (handler) {
    return handler(state, action);
  }

  return state;
}

export default taskReducer;
