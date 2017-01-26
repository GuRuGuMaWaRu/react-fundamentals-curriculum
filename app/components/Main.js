import React from 'react';
import '../styles/Main.css';

export default class Main extends React.Component{
  render() {
    return (
      <div  className="background">
        <h1>React Router Tutorial</h1>
        {this.props.children}
      </div>
    );
  };
};
