var React = require('react');

var getDate = require('../helpers/utils').getDate;

function Detail(props) {
  var styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      height: 102,
      width: 102
    }
  }
  console.log(props.forecastData);
  return (
    <div style={styles.container}>
      <img
        src={'http://openweathermap.org/img/w/' + props.forecastData.weather[0].icon + '.png'}
        style={styles.icon} />
      <p>{getDate(props.forecastData.dt)}</p>
      <h3>{props.city}</h3>
      <p>{props.forecastData.weather[0].description}</p>
      <p>min temp: {props.forecastData.temp.min}</p>
      <p>max temp: {props.forecastData.temp.max}</p>
      <p>humidity: {props.forecastData.humidity}</p>
    </div>
  );
};

module.exports = Detail;
