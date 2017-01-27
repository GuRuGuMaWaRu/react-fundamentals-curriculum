import React from 'react';
import '../styles/Main.css';

export default class Main extends React.Component{
  render() {
    return (
      <div className="main">
        <h2>Main.js Header</h2>
        {this.props.children}
      </div>
    );
  };
};
