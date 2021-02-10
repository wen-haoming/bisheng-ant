"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ColorPatterns;

var _react = _interopRequireDefault(require("react"));

var _uniq = _interopRequireDefault(require("lodash/uniq"));

var _colors = require("@ant-design/colors");

var _ColorBlock = _interopRequireDefault(require("./ColorBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ColorPatterns(_ref) {
  var color = _ref.color;
  return (0, _uniq["default"])((0, _colors.generate)(color)).map(function (colorString, i) {
    return /*#__PURE__*/_react["default"].createElement(_ColorBlock["default"], {
      color: colorString,
      index: i + 1,
      key: colorString
    });
  });
}