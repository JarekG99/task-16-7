import React from 'react';



class Todo extends React.Component {

  onSubmit() {
    event.preventDefault();
    this.setState({text: ''});
    addTodo(value);
    }

  onChange() {
    this.setState({text: event.target.value});
    }

  render() {
  return (
    <form id="{this.state.id}" onSubmit={this.onSubmit}>
       <input value={this.state.text} onChange={this.onChange} />
       <button>Submit</button>
   </form>
  );
}
}
