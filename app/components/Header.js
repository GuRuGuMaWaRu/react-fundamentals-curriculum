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
        {/* <form>
          <input className="header-menu-input" type="text" placeholder="California, Los Angeles"/>
          <button className="header-menu-button btn btn-success">Get Weather</button>
        </form> */}
        <div>
          <form onSubmit={null} className="form-inline">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="California, Los Angeles"/>
            </div>
            <div className="header-menu-button form-group">
              <button
                className="btn btn-block btn-success">
                Get Weather
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
