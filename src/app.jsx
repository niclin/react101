import React from 'react';
import { render } from 'react-dom';

var Title = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>Author</h2>
      </div>
      )
  }
});

render(
  <Title text="hello!!!"/>,
  document.getElementById('content')
);
