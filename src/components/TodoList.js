import React from 'react';

const TodoList = props => (
  <ul>
    {
      props.data.map((text, id) =>
      <li key={id} onClick=''>{text}</li>)
    }
  </ul>
);

  export default TodoList;
