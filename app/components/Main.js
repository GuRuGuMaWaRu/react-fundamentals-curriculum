import React from 'react';

import Header from './Header';
import helpers from '../utils/weatherHelpers'
import '../styles/Main.css';

export default class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      temperature: 0
    };
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }
  handleSubmitLocation(event) {
    event.preventDefault();

    helpers.getCurrentWeather(this.state.location)
      .then(data => {
        this.setState({
          temperature: data.main.temp
        });
      });

    helpers.getFiveDaysWeather(this.state.location)
      .then(data => {
        console.log(data);
      });
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
          temperature: this.state.temperature,
          onSubmit: this.handleSubmitLocation,
          onChange: this.handleChangeLocation
        })}
      </div>
    );
  }
};
