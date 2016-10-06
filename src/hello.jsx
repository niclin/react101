var Hello = React.createClass({
  render: function() {
    return (
      <div>
        Hello {this.props.name}
        <List></List>
      </div> );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>);
  }
});

ReactDOM.render(
  <Hello name="World !"></Hello>,
  document.getElementById('container')
);
