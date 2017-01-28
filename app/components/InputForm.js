import React, { Component } from 'react';

export default class InputForm extends Component{
  render() {
    return (
      <div className={this.props.css.main}>
        <form onSubmit={null} className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="California, Los Angeles"/>
          </div>
          <div className={"form-group " + this.props.css.button}>
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

InputForm.PropTypes = {
  css: React.PropTypes.object
};

InputForm.defaultProps = {
  css: {
    main: "",
    button: ""
  }
}
