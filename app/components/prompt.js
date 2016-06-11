var React = require('react');

var Prompt = React.createClass({
  render: function() {
    return (
      <div className="Prompt">
        <h1>{this.props.header}</h1>
        <form  onSubmit={this.props.onSubmitUser}>
          <input
            placeholder="Github username"
            onChange={this.props.onUpdateUser}
            value={this.props.username}
            type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
});

module.exports = Prompt