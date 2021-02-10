"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactIntl = require("react-intl");

var _reactHelmetAsync = require("react-helmet-async");

require("moment/locale/zh-cn");

var _Header = _interopRequireDefault(require("./Header"));

var _enUS = _interopRequireDefault(require("../../en-US"));

var _zhCN = _interopRequireDefault(require("../../zh-CN"));

var utils = _interopRequireWildcard(require("../utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

if (typeof window !== 'undefined' && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    registrations.forEach(function (registration) {
      return registration.unregister();
    });
  });
}

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('../../static/style'); // Expose to iframe


  window.react = _react["default"];
  window['react-dom'] = _reactDom["default"]; // eslint-disable-next-line global-require

  window.antd = require('antd'); // Error log statistic

  window.addEventListener('error', function onError(e) {
    // Ignore ResizeObserver error
    if (e.message === 'ResizeObserver loop limit exceeded') {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  });

  if (process.env.NODE_ENV === 'production') {// LogRocket.init('kpuw4z/ant-design');
    // setupLogRocketReact(LogRocket);
  }
}

var isMobile = false;

var Layout = /*#__PURE__*/function (_React$Component) {
  _inherits(Layout, _React$Component);

  var _super = _createSuper(Layout);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, props);
    var pathname = props.location.pathname;
    var appLocale = utils.isZhCN(pathname) ? _zhCN["default"] : _enUS["default"];
    _this.state = {
      appLocale: appLocale,
      isMobile: isMobile
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "getChildContext",
    value: function getChildContext() {
      var mobile = this.state.isMobile;
      return {
        isMobile: mobile
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var router = this.props.router;
      router.listen(function (loc) {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', loc.pathname + loc.search);
        } // eslint-disable-next-line


        if (typeof window._hmt !== 'undefined') {
          // eslint-disable-next-line
          window._hmt.push(['_trackPageview', loc.pathname + loc.search]);
        }
      });
      var nprogressHiddenStyle = document.getElementById('nprogress-style');

      if (nprogressHiddenStyle) {
        this.timer = setTimeout(function () {
          nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
        }, 0);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$helmetCon = _this$props.helmetContext,
          helmetContext = _this$props$helmetCon === void 0 ? {} : _this$props$helmetCon,
          restProps = _objectWithoutProperties(_this$props, ["children", "helmetContext"]);

      var appLocale = this.state.appLocale;
      console.log(helmetContext, '--');
      return /*#__PURE__*/_react["default"].createElement(_reactHelmetAsync.HelmetProvider, {
        context: helmetContext
      }, /*#__PURE__*/_react["default"].createElement(_reactHelmetAsync.Helmet, {
        encodeSpecialCharacters: false
      }, /*#__PURE__*/_react["default"].createElement("html", {
        lang: appLocale.locale === 'zh-CN' ? 'zh' : 'en'
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "apple-touch-icon-precomposed",
        sizes: "144x144",
        href: "https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:image",
        content: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
      })), /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
        locale: appLocale.locale,
        messages: appLocale.messages,
        defaultLocale: "zh-CN"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "page-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_Header["default"], restProps), children)));
    }
  }]);

  return Layout;
}(_react["default"].Component);

exports["default"] = Layout;