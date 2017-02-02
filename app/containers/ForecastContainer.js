var React = require('react');
var Forecast = require('../components/Forecast');
var getForcast = require('../helpers/api').getForcast;

var ForecastContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true
    }
  },
  componentDidMount: function() {
    console.log(this.props.location.query.city);
  },
  render: function () {
    return (
      <Forecast />
    )
  }
});

module.exports = ForecastContainer;
