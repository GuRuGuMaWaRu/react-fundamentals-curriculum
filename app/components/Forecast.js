var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');
var ForecastDay = require('./ForecastDay');

var styles = {
  header: {
    textAlign: 'center',
    fontSize: '50px',
    color: '#0D47A1',
    marginTop: '30px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    height: 82,
    width: 82
  }
}

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : <div>
        <h1 style={styles.header}>{props.forecastData.city.name}</h1>
        <div style={styles.container}>
          {props.forecastData.list.map(day => {
            return <ForecastDay
              key={day.dt}
              onSelectDay={props.onSelectDay}
              day={day}
              styles={styles.icon} />
          })}
        </div>
      </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired,
  onSelectDay: PropTypes.func.isRequired
}

module.exports = Forecast;
