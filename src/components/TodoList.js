import React from 'react';

const TodoList = props => (
  <ul>
    {
      props.data.map((text, id) =>
      <li key={id}>{text} {<button onClick={((e) =>
        props.handleClick(e, id))}>Done</button>}</li>)
    }

  </ul>
);

  export default TodoList;
