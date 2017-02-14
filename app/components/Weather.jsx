const React= require('react');


let Weather= React.createClass({
  getDefaultProps: function(){
    return {
      location: '',
      message: 'The temperature is '
    };
  },
  getInitialState: function(){
    return {
      location: this.props.location,
      message: this.props.message
    }
  }

  render: function(){

  }
})

module.exports = Weather;
