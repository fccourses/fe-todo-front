import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import Task from './Task';

const TaskList = props => {
  const { tasks, isFetching, error } = useSelector(({ task }) => task);
  const dispatch = useDispatch();

  const {
    getTasksRequest,
    clearTaskError,
    deleteTaskRequest,
  } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    getTasksRequest();
  }, []);

  return (
    <div>
      {error && (
        <div style={{ color: 'red', display: 'flex' }}>
          <p>{error.message}</p>
          <button onClick={clearTaskError}>X</button>
        </div>
      )}

      {tasks.map(task => (
        <Task {...task} deleteTaskRequest={deleteTaskRequest} />
      ))}
    </div>
  );
};

/* const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = dispatch => ({
  getTasksAction: () => dispatch(ActionCreators.getTasksRequest()),
}); */

export default TaskList;
