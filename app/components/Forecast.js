var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');

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
  const options = {weekday: 'long', month: 'short', day: 'numeric'};
  const today = new Date();
  today.setTime(1486137600000);
  console.log(today.toLocaleDateString('en-US', options));


  return props.isLoading === true
    ? <Loading />
    : <div>
      <h1 style={styles.header}>{props.forecastData.city.name}</h1>
      <div style={styles.container}>
        {props.forecastData.list.map(day => {
          const today = new Date();
          today.setTime(day.dt * 1000);

          return <div key={day.dt}>
            <img
              src={'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png'}
              style={styles.icon} />
            <p>{today.toLocaleDateString('en-US', options)}</p>
          </div>
        })}
      </div>
    </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
