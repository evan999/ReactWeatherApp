const React= require('react');
const WeatherForm= require('WeatherForm');
const WeatherMessage= require('WeatherMessage');
const openWeatherMap= require('openWeatherMap');

let Weather= React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    //  location: 'Miami',
    //  temp: 88
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){

    that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage){
        that.setState({
          isLoading: false,
          location: null,
          temp: null
        });
        alert(errorMessage);
    });
  },
  render: function(){
    var {isLoading, temp, location} = this.state; //ES6 destructuring
    //Another way to write it, but requires a new statement for every variable.
    //var temp= this.state.temp;
    //var location= this.state.location;
    function renderMessage(){
      if (isLoading){
        return <h3>Fetching weather...</h3>;
      }
      else if (temp && location){
        return <WeatherMessage temp= {temp} location = {location}/>;
      }
    }

    return (
    <div>
      <h3>Weather Component</h3>
      <WeatherForm onSearch= {this.handleSearch}/>
      {renderMessage()}
    </div>
    )
  }
})

module.exports = Weather;
