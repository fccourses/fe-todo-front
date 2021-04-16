import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTaskSaga, deleteTaskSaga, getTasksSaga } from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasksSaga);

  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);

  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, deleteTaskSaga);
}

export default rootSaga;
