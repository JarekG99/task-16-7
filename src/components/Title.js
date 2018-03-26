import React from 'react';
import TodoList from './TodoList';

class Title extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          text: 'To Do List',
          number: (data.length)
      };
    }
  render () {
    return (
      <div>
        <h1>{this.state.text} ({this.state.number})</h1>
        <h2>{TodoList}</h2>
      </div>
    );
  }
}

export default Title;
