import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'query-string';
import * as ActionCreators from '../actions';
import Error from './Error';
import Task from './Task';

const TaskList = props => {
  const { tasks, isFetching, error } = useSelector(({ task }) => task);
  const dispatch = useDispatch();

  const location = useLocation();
  const [search, setSearch] = useState(qs.parse(location.search));

  const {
    getTasksRequest,
    clearTaskError,
    deleteTaskRequest,
  } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    setSearch(qs.parse(location.search));
  }, [location.search]);

  console.log(search, location.search);

  useEffect(() => {
    getTasksRequest(search);
  }, [search]);

  return (
    <div>
      {error && <Error error={error} clearError={clearTaskError} />}
      {tasks.map(task => (
        <Task key={task.id} {...task} deleteTaskRequest={deleteTaskRequest} />
      ))}
    </div>
  );
};

/* const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = dispatch => ({
  getTasksAction: () => dispatch(ActionCreators.getTasksRequest()),
}); */

export default TaskList;
