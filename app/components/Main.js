import React from 'react';
import Header from './Header';
import '../styles/Main.css';

export default class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }
  handleSubmitLocation(event) {
    event.preventDefault();
    console.log(this.state.location);
  }
  handleChangeLocation(event) {
    this.setState({
      location: event.target.value
    });
  }
  render() {
    return (
      <div className="main">
        <Header
          location={this.state.location}
          onSubmit={this.handleSubmitLocation}
          onChange={this.handleChangeLocation} />
        {React.cloneElement(this.props.children, {
          location: this.state.location,
          onSubmit: this.handleSubmitLocation,
          onChange: this.handleChangeLocation
        })}
      </div>
    );
  }
};
