var React = require('react');
var Nav= require('Nav');


/*
let Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});
*/

//ES6 Stateless Functional Components
//Easier to read and cleaner, more concise code with same results
let Main = (props) => {
return (
    <div>
     	<Nav/>
        <h2>Main Component</h2>
        {props.children}
      </div>
    );
}

module.exports = Main;
