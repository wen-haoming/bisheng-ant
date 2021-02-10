"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditButton;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var branchUrl = 'https://github.com/ant-design/ant-design/edit/master/';

function EditButton(_ref) {
  var title = _ref.title,
      filename = _ref.filename;
  return /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
    title: title
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "edit-button",
    href: "".concat(branchUrl).concat(filename),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
    type: "edit"
  })));
}