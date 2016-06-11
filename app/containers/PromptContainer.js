var React = require('react');

var PromptContainer = React.createClass({
  render: function() {
    return (
      <div className="PromptContainer">
        <h1>{this.props.route.header}</h1>
        <form>
          <input
            placeholder="Github username"
            type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
});

module.exports = PromptContainer;