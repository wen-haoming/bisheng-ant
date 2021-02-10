"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PrevAndNext = function PrevAndNext(_ref) {
  var prev = _ref.prev,
      next = _ref.next;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "prev-next-nav"
  }, prev ? /*#__PURE__*/_react["default"].cloneElement(prev.props.children || prev.children[0], {
    className: 'prev-page'
  }) : null, next ? /*#__PURE__*/_react["default"].cloneElement(next.props.children || next.children[0], {
    className: 'next-page'
  }) : null);
};

var _default = PrevAndNext;
exports["default"] = _default;