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
    getForcast(this.props.location.query.city)
      .then(data => {
        console.log(data.list);
      });
  },
  render: function () {
    return (
      <Forecast />
    )
  }
});

module.exports = ForecastContainer;
