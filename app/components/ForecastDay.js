var React = require('react');
var PropTypes = React.PropTypes;

var getDate = require('../helpers/utils').getDate;

function ForecastDay(props) {
  function onClick() {
    props.onSelectDay(props.day);
  }
  return (
    <div onClick={onClick}>
      <img
        src={'http://openweathermap.org/img/w/' + props.day.weather[0].icon + '.png'}
        style={props.styles} />
      <p>{getDate(props.day.dt)}</p>
    </div>
  );
}

ForecastDay.propTypes = {
  day: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  onSelectDay: PropTypes.func.isRequired
}

module.exports = ForecastDay;
