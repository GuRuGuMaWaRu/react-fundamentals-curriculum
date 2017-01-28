import React from 'react';
import InputForm from './InputForm';
import '../styles/Header.css';

export default class Header extends React.Component{
  render() {
    const css = {
      main: "",
      input: ""
    };

    return (
      <div className="header-wrapper">
        <h2>Get your weather</h2>
        <InputForm />
      </div>
    );
  }
};
