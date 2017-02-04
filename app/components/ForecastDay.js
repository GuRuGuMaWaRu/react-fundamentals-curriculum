var React = require('react');
var PropTypes = React.PropTypes;

function ForecastDay(props) {
  const today = new Date();
  const options = {weekday: 'long', month: 'short', day: 'numeric'};

  function onClick() {
    props.onSelectDay(props.day);
  }

  today.setTime(props.day.dt * 1000);

  return (
    <div onClick={onClick}>
      <img
        src={'http://openweathermap.org/img/w/' + props.day.weather[0].icon + '.png'}
        style={props.styles} />
      <p>{today.toLocaleDateString('en-US', options)}</p>
    </div>
  );
}

ForecastDay.propTypes = {
  day: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  onSelectDay: PropTypes.func.isRequired
}

module.exports = ForecastDay;
