import React from 'react';

const TodoList = props => (
  <ul>
    {
      props.data.map((text, id) =>
      <li key={id}>{text} {<button>Done</button>}</li>)
      // <li key={id}>{text} {<button onClick={this.handleClick}>Done</button>}</li>)
    }
  </ul>
);

  export default TodoList;
