const React= require('react');
const WeatherForm= require('WeatherForm');
const WeatherMessage= require('WeatherMessage');
const openWeatherMap= require('openWeatherMap');

let Weather= React.createClass({
  getInitialState: function(){
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function(location){
    var that = this;

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage){
        alert(errorMessage);
    });
  },
  render: function(){
    var {temp, location} = this.state; //ES6 destructuring
    //Another way to write it, but requires a new statement for every variable.
    //var temp= this.state.temp;
    //var location= this.state.location;

    return (
    <div>
      <h3>Weather Component</h3>
      <WeatherForm onSearch= {this.handleSearch}/>
      <WeatherMessage temp= {temp} location = {location}/>
    </div>
    )
  }
})

module.exports = Weather;
