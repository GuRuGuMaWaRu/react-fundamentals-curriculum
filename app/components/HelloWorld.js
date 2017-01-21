import React from 'react';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello world!'
    }
  }

  render() {
    return (
      <div>{this.state.text}</div>
    )
  }
};
