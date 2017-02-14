const React= require('react');

let WeatherMessage = React.createClass({
  render: function(){
    /*
    var location= this.props.location;
    var message= this.props.message;
    */
    return (
      <div>
        <h3>It is 40 in Philadelphia.</h3>
      </div>
    );
  }
});

module.exports= WeatherMessage;
