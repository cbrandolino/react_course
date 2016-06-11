var React = require('react');
var Prompt = require('../components/prompt');


var PromptContainer = React.createClass({
  
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
      return {
          username: ""
      };
  },
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ""
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
  },
  render: function() {
    return (
      <Prompt 
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.routes.header}
        username={this.state.username}
        type="text"
      />
    );
  }
});

module.exports = PromptContainer;