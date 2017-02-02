import axios from 'axios';

const id = '7b5fd7c59b65645c55cc078c587e19bb';
const param = '&type=accurate&APPID=' + id;

function getCurrentWeather(cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + param);
}

function getFiveDaysWeather(cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + param + '&cnt=5');
}

const helpers = {
  getCurrentWeather: function(cityName) {
    return getCurrentWeather(cityName)
      .then(response => response.data)
      .catch(error => console.warn('Error in getWeather function:', error));
  },
  getFiveDaysWeather: function(cityName) {
    return getFiveDaysWeather(cityName)
      .then(response => response.data)
      .catch(error => console.warn('Error in getFiveDaysWeather function:', error));
  }
};

export default helpers;
