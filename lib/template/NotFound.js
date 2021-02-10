"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotFound;

var _react = _interopRequireDefault(require("react"));

var _router = require("bisheng/router");

var utils = _interopRequireWildcard(require("./utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NotFound(_ref) {
  var location = _ref.location;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "page-404"
  }, /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("h1", null, "404"), /*#__PURE__*/_react["default"].createElement("p", null, "\u4F60\u8981\u627E\u7684\u9875\u9762\u4E0D\u5B58\u5728", /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: utils.getLocalizedPathname('/', utils.isZhCN(location.pathname))
  }, "\u8FD4\u56DE\u9996\u9875"))), /*#__PURE__*/_react["default"].createElement("style", {
    dangerouslySetInnerHTML: {
      __html: '#react-content { height: 100%; background-color: #fff }'
    }
  }));
}