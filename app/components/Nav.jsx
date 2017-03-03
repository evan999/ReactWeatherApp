const React = require('react');
const {Link, IndexLink} = require ('react-router');

/*
let Nav = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Nav component</h2>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName= "active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName= "active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});
*/

let Nav = () => {
  return (
      <div>
        <h2>Nav component</h2>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName= "active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName= "active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
};

module.exports = Nav;
