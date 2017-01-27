import React from 'react';
import Header from './Header';
import '../styles/Main.css';

export default class Main extends React.Component{
  render() {
    return (
      <div className="main">
        <Header />
        {this.props.children}
      </div>
    );
  }
};
