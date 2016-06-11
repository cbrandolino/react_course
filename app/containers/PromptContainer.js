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
  onSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username = "";
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      }); 
    } else {
      this.context.router.push({
        pathname: '/playerTwo/' + this.state.username
      });  
    }
  }
  render: function() {
    return (
      <div className="PromptContainer">
        <h1>{this.props.route.header}</h1>
        <form  onSubmit={this.onSubmitUser}>
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