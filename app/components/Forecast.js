var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : <div>
      <h1>{props.forecastData.city.name}</h1>
    </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
