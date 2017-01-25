const React = require('react');
const ReactDOM = require('react-dom');

const NavBar = require('./components/NavBar');

const App = React.createClass({
  render: function () {
    return (

      <div><NavBar> </NavBar>
        Hello World</div>
    )}
});

ReactDOM.render(<App />, document.getElementById('app'));
