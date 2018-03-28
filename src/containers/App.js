import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title';
import TodoList from './../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            data: [
               'rest a while',
               'learn coding',
               'rest a lot',

             ]
           };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state.value);
        this.setState({
          value: '',
          data: [...this.state.data, this.state.value]

        });
    }

    handleClick(e) {
      e.preventDefault();
      e.componentWillUnmount()
       const remainder = this.state.data.filter(e => e.id !== id);
       this.setState({data: remainder});
    }

    render() {

    return (
        <div className={style.TodoApp}>


          <Title data={this.state.data} />
          <TodoList data={this.state.data} />

          <form  onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={this.handleChange} />
            <button>Add to do</button>
          </form>
        </div>
      );
    }
}

export default App;
