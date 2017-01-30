import React from 'react';
import InputForm from './InputForm';
import '../styles/Home.css';

export default class Home extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const css = {
      main: 'col-sm-2 col-sm-offset-5',
      button: 'col-sm-6 col-sm-offset-3'
    };

    return (
      <div className="background flex">
        <h1 className="home-title">Enter a City and State</h1>
        <InputForm
          css={css}
          location={this.props.location}
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}/>
      </div>
    );
  }
};

Home.PropTypes = {
  onSubmit: React.PropTypes.func
}
Home.defaultProps = {
  onSubmit: null
}
