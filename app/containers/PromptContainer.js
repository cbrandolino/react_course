var React = require('react');

var PromptContainer = React.createClass({
  getInitialState: function() {
      return {
          username: ""
      };
  },
  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  render: function() {
    return (
      <div className="PromptContainer">
        <h1>{this.props.route.header}</h1>
        <form>
          <input
            placeholder="Github username"
            onChange={this.onUpdateUser}
            value={this.state.username}
            type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
});

module.exports = PromptContainer;