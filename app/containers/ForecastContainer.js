var React = require('react');

var Forecast = require('../components/Forecast');
var getForcast = require('../helpers/api').getForcast;

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function() {
    this.makeRequest(this.props.location.query.city);
  },
  componentWillReceiveProps: function(nextProps) {
    this.makeRequest(nextProps.location.query.city);
  },
  makeRequest: function(city) {
    getForcast(city)
      .then(data => {
        this.setState({
          isLoading: false,
          forecastData: data
        });
      });
  },
  handleSelectDay: function(day) {
    this.context.router.push({
      pathname: '/detail/' + this.props.location.query.city,
      state: {
        day: day
      }
    });
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        onSelectDay={this.handleSelectDay}/>
    )
  }
});

module.exports = ForecastContainer;
