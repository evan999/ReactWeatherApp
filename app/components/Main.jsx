const React = require('react');
const Nav= require('Nav');

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

module.exports = Main;