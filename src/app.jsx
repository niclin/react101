var Title = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Title</h1>
        <h2>Author</h2>
      </div>
      )
  }
});

      ReactDOM.render(
        <Title />,
        document.getElementById('content')
      );
