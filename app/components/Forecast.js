var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : <div>Forecase Component</div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.array.isRequired
}

module.exports = Forecast;
