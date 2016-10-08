'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _react2.default.createClass({ displayName: "Title",
  render: function render() {
    return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, this.props.text), _react2.default.createElement("h2", null, "Author"));
  }
});

(0, _reactDom.render)(_react2.default.createElement(Title, { text: "hello!!!" }), document.getElementById('content'));
//# sourceMappingURL=app.js.map
