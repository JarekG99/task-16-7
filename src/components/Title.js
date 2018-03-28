import React from 'react';

class Title extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          text: 'To Do List',
          number: this.props.data.length
      };
    }
  render () {
    return (
      <div>
        <h1>{this.state.text} ({this.props.data.length})</h1>
      </div>
    );
  }
}

export default Title;
