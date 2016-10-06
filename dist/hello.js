"use strict";

var Hello = React.createClass({ displayName: "Hello",
  render: function render() {
    return React.createElement("div", null, "Hello ", this.props.name, React.createElement(List, null));
  }
});

var List = React.createClass({ displayName: "List",
  render: function render() {
    return React.createElement("ul", null, React.createElement("li", null, "Item 1"), React.createElement("li", null, "Item 2"), React.createElement("li", null, "Item 3"));
  }
});

ReactDOM.render(React.createElement(Hello, { name: "World !" }), document.getElementById('container'));
//# sourceMappingURL=hello.js.map
