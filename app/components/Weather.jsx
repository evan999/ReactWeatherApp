const React= require('react');
const WeatherForm= require('WeatherForm');
const WeatherMessage= require('WeatherMessage');

let Weather= React.createClass({
  getInitialState: function(){
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function(location){
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function(){
    var location = this.state.location;
    var temp = this.state.temp;

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
