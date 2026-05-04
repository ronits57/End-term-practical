import React from 'react';

function Child(props) {
  return (
    <>
      <h1>Child Component</h1>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
    </>
  );
}

export default Child;