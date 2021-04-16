import React from 'react';

const Error = props => {
  const { error, clearError } = props;
  return (
    <div style={{ color: 'red', display: 'flex' }}>
      <p>{error.message}</p>
      <button onClick={clearError}>X</button>
    </div>
  );
};

export default Error;
