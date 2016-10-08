import React, { Component } from 'react';

export class Title extends Component {
  render() {
      return (
        <div>
          <h1>{this.props.text}</h1>
          <h2>Author</h2>
        </div>
      )
  };
}
