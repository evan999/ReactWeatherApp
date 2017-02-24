const React= require('react');

let WeatherMessage = React.createClass({
  render: function(){
    var {temp, location}= this.props;
    //var location= this.props.location;
    //var temp= this.props.temp;

    return (
      <div>
        <h3>It is {temp} in {location}.</h3>
      </div>
    );
  }
});

module.exports= WeatherMessage;
