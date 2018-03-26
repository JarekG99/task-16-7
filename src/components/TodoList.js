import React from 'react';
// import style from './TodoList.css';
 import Todo from './Todo';

const TodoList = props => (
  <ul>
    {
      props.data.map((id, text) =>
      <li key={data.id} onClick={this.removeTodo}>{data.text}</li>)
    }
  </ul>
);

export default TodoList;

// class TodoList extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data:  []
//       };
//     }
//
// render() {
//
// const todoListData = (<li>tekst</li>);
//  return (
//    <ul>
//      {todoListData}
//    </ul>
//     );
//   }
// }
//
// export default TodoList;
