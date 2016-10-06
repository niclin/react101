"use strict";

var Title = React.createClass({ displayName: "Title",
  render: function render() {
    return React.createElement("div", null, React.createElement("h1", null, this.props.text), React.createElement("h2", null, "Author"));
  }
});

ReactDOM.render(React.createElement(Title, { text: "hello!!!" }), document.getElementById('content'));
//# sourceMappingURL=app.js.map
