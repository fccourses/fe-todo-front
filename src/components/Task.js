import React from 'react';

const Task = props => {
  const { body, isDone, id, deadline, deleteTaskRequest } = props;
  return (
    <article>
      <h1>ID: {id}</h1>
      <h2>{body}</h2>
      <p>
        Is done: <input type='checkbox' checked={isDone} />
      </p>
      <p>{deadline}</p>
      <button onClick={() => deleteTaskRequest(id)}>Delete task</button>
    </article>
  );
};

export default Task;
