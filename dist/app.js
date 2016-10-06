"use strict";

var Title = React.createClass({ displayName: "Title",
  render: function render() {
    return React.createElement("div", null, React.createElement("h1", null, "Title"), React.createElement("h2", null, "Author"));
  }
});

ReactDOM.render(React.createElement(Title, null), document.getElementById('content'));
//# sourceMappingURL=app.js.map
