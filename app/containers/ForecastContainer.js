var React = require('react');

var Forecast = require('../components/Forecast');
var getForcast = require('../helpers/api').getForcast;

var ForecastContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
      forecastData: []
    }
  },
  componentDidMount: function() {
    getForcast(this.props.location.query.city)
      .then(data => {
        this.setState({
          isLoading: false,
          forecastData: data.list
        });
      });
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    )
  }
});

module.exports = ForecastContainer;
