import React, { Component } from 'react';

export default class InputForm extends Component{
  render() {
    return (
      <div className={this.props.css.main}>
        <form onSubmit={this.props.onSubmit} className={this.props.css.form}>
          <div className="form-group">
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              placeholder="California, Los Angeles"
              value={this.props.location}/>
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
  css: React.PropTypes.object,
  location: React.PropTypes.string,
  onSubmit: React.PropTypes.fun,
  onChange: React.PropTypes.fun
};
InputForm.defaultProps = {
  css: {
    main: "",
    form: "",
    button: ""
  },
  location: '',
  onSubmit: null,
  onChange: null
}
