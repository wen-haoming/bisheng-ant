"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactHelmetAsync = require("react-helmet-async");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Banner = _interopRequireDefault(require("./Banner"));

var _Page = _interopRequireDefault(require("./Page1"));

var _Page2 = _interopRequireDefault(require("./Page2"));

var _Page3 = _interopRequireDefault(require("./Page3"));

var _Footer = _interopRequireDefault(require("../Layout/Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// To store style which is only for Home and has conflicts with others.
function getStyle() {
  return "\n    .main-wrapper {\n      padding: 0;\n    }\n    #header {\n      box-shadow: none;\n      max-width: 1200px;\n      width: 100%;\n      margin: 20px auto 0;\n      padding: 0 24px;\n    }\n    #header,\n    #header .ant-select-selection,\n    #header .ant-menu {\n      background: transparent;\n    }\n    #header #logo {\n      padding: 0;\n    }\n    #header #nav .ant-menu-item {\n      border-color: transparent;\n    }\n    #header #nav .ant-menu-submenu {\n      border-color: transparent;\n    }\n    #header #nav .ant-menu-item.hide-in-home-page {\n      display: none;\n    }\n    #header .ant-row > div:last-child .header-lang-button {\n      margin-right: 0;\n    }\n    .rc-footer-container {\n      max-width: 1200px;\n      padding: 80px 0;\n    }\n\n    .rc-footer-bottom-container {\n      max-width: 1200px;\n    }\n\n    .rc-footer-columns {\n      justify-content: space-around;\n    }\n  ";
} // eslint-disable-next-line react/prefer-stateless-function


var Home = /*#__PURE__*/function (_React$Component) {
  _inherits(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var isMobile = this.context.isMobile;

      var childProps = _objectSpread(_objectSpread({}, this.props), {}, {
        isMobile: isMobile,
        locale: intl.locale
      });

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Banner["default"], childProps), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
    }
  }]);

  return Home;
}(_react["default"].Component);

_defineProperty(Home, "contextTypes", {
  isMobile: _propTypes["default"].bool.isRequired
});

var _default = (0, _reactIntl.injectIntl)(Home);

exports["default"] = _default;