const React= require('react');

let WeatherForm= React.createClass({
  /*
  onFormSubmit: function (e){
    e.preventDefault();

    var updates= {};
    var location= this.refs.location.value;
    var message= this.refs.message.value;

    if(location.length > 0){
      this.refs.location.value = '';
      updates.location= location;
    }

    if(message.length> 0){
      this.refs.message.value= '';
      updates.message= message;
    }

    this.props.onNewData(updates);
  };
  */
  onFormSubmit: function(e){
    e.preventDefault(); //prevents page from reloading

    var location= this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
    render: function(){
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type= "text" ref= "location" placeholder= "Enter city"/>
            <button>Get Weather</button>
          </form>
        </div>
      );
    }

});

module.exports= WeatherForm;
