var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className="Main">
        Hello From Main!
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;