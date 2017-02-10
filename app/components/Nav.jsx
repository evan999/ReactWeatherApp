const React = require('react');
const {Link, IndexLink} = require ('react-router');

let Nav = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Nav component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName= "active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName= "active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

        <a href="#/about">Go To About</a>
      </div>



    );
  }
});

module.exports = Nav;
