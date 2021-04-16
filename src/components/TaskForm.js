import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';

const TaskForm = props => {
  const dispatch = useDispatch();
  const values = {
    body: '',
    deadline: '',
    isDone: false,
  };
  const onSubmit = (values, formikBag) => {
    dispatch(ActionCreators.createTaskRequest(values));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form>
        <Field name='body' />
        <Field name='deadline' type='date' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
