import React from 'react';

import InputForm from './InputForm';
import '../styles/Header.css';

export default class Header extends React.Component{
  render() {
    const css = {
      main: "",
      form: "form-inline",
      button: "header-menu-button"
    };

    return (
      <div className="header-wrapper">
        <h2>Get your weather</h2>
        <InputForm
          css={css}
          location={this.props.location}
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}/>
      </div>
    );
  }
};

Header.PropTypes = {
  css: React.PropTypes.object,
  location: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
  onChange: React.PropTypes.fun
}
Header.defaultProps = {
  css: {
    main: "",
    form: "",
    button: ""
  },
  location: '',
  onSubmit: null,
  onChange: null
}
