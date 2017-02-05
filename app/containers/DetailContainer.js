var React = require('react');
var PropTypes = React.PropTypes;

var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    console.log(this.props.location.state);

    return (
      <Detail
        forecastData={this.props.location.state.day}
        city={this.props.location.state.city}/>
    );
  }
});

module.exports = DetailContainer;
