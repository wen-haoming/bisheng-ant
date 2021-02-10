"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var now = new Date();
  var isChristmas = now.getMonth() === 11 && now.getDate() === 25;
  return isChristmas && /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
    title: "\uD83C\uDF85\uD83C\uDFFB Merry Christmas!"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-head"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-ear"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-ear"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-hat"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-eye"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-eye"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-nose"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "santa-mouth"
  })))));
};

exports["default"] = _default;