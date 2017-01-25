const React = require('react');

const NavTab = require('./NavTab');

const NavBar = React.createClass ({
  render: function () {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <NavTab isActive icon='home'>Home</NavTab>
            <NavTab icon='newspaper-o'>News</NavTab>
            <NavTab icon='futbol-o'>Matches</NavTab>
            <NavTab icon='envelope'>Contact</NavTab>
          </div>
          <div className="nav-right">
            <div className="nav-item">
              <p className="control has-icon has-icon-right">
                <input id='navbar-search' className="input" type="text" placeholder="Text input" defaultValue="Search..." />
                <i className="fa fa-search"> </i>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = NavBar;