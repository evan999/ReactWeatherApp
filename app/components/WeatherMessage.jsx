const React= require('react');

let WeatherMessage = React.createClass({
  render: function(){
    var location= this.props.location;
    var message= this.props.message;

    return (
      <div>
        <p>{message}</p>
      </div>
    )
  }
})
