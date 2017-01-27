import React, { Component } from 'react';

export default class InputForm extends Component{
  render() {
    return (
      <div className={this.props.css.main}>
        <form onSubmit={null}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="California, Los Angeles"/>
          </div>
          <div className="form-group" className={this.props.css.input}>
            <button
              className="btn btn-block btn-success">
              Get Weather
            </button>
          </div>
        </form>
      </div>
    );
  }
};
