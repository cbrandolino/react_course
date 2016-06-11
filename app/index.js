var React = require('react');
var ReactDOM = require('react-dom');

var userData = {
  username: 'cbrandolino',
  imageUrl: 'http://placekitten.com/200/300',
  name: 'Claudio Brandolino'
}


var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.imageUrl} />
    );
  }
});

var Link = React.createClass({
  changeUrl: function(e) {
    e.preventDefault();
    window.location.replace(this.props.href);
  },
  render: function() {
    return (
      <a href="#" onClick={this.changeUrl}>
        {this.props.children}
      </a>
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'http://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div className="ProfileName">{this.props.name}</div>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div className="Avatar">
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user={userData} />,
  document.getElementById('app')
)