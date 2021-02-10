"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("bisheng/router");

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _antd = require("antd");

var _Santa = _interopRequireDefault(require("./Santa"));

var utils = _interopRequireWildcard(require("../utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Option = _antd.Select.Option;

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      menuVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowMenu", function () {
      _this.setState({
        menuVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHideMenu", function () {
      _this.setState({
        menuVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMenuVisibleChange", function (visible) {
      _this.setState({
        menuVisible: visible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleVersionChange", function (url) {
      var currentUrl = window.location.href;
      var currentPathname = window.location.pathname;
      window.location.href = currentUrl.replace(window.location.origin, url).replace(currentPathname, utils.getLocalizedPathname(currentPathname));
    });

    _defineProperty(_assertThisInitialized(_this), "handleLangChange", function () {
      var pathname = _this.props.location.pathname;
      var currentProtocol = "".concat(window.location.protocol, "//");
      var currentHref = window.location.href.substr(currentProtocol.length);

      if (utils.isLocalStorageNameSupported()) {
        localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
      }

      window.location.href = currentProtocol + currentHref.replace(window.location.pathname, utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)));
    });

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          intl = _this$props.intl,
          router = _this$props.router;
      router.listen(this.handleHideMenu);
    }
  }, {
    key: "render",
    value: function render() {
      var menuVisible = this.state.menuVisible;
      var isMobile = this.context.isMobile;
      var menuMode = isMobile ? 'inline' : 'horizontal';
      var _this$props2 = this.props,
          location = _this$props2.location,
          themeConfig = _this$props2.themeConfig,
          locale = _this$props2.intl.locale;
      var module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/');
      var activeMenuItem = module || 'home';

      if (activeMenuItem === 'components' || location.pathname === 'changelog') {
        activeMenuItem = 'docs/react';
      }

      var isZhCN = locale === 'zh-CN';
      var headerClassName = (0, _classnames["default"])({
        clearfix: true
      });
      var _themeConfig$navs = themeConfig.navs,
          navs = _themeConfig$navs === void 0 ? [] : _themeConfig$navs;
      var menu = [/*#__PURE__*/_react["default"].createElement(_antd.Button, {
        ghost: true,
        size: "small",
        onClick: this.handleLangChange,
        className: "header-lang-button",
        key: "lang-button"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "app.header.lang"
      })), /*#__PURE__*/_react["default"].createElement(_antd.Menu, {
        className: "menu-site",
        mode: menuMode,
        selectedKeys: [activeMenuItem],
        id: "nav",
        key: "nav"
      }, navs.map(function (item, idx) {
        return /*#__PURE__*/_react["default"].createElement(_antd.Menu.Item, {
          key: idx
        }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
          to: utils.getLocalizedPathname(item.path, isZhCN)
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: item.title
        })));
      }))];
      var searchPlaceholder = locale === 'zh-CN' ? '在 ant.design 中搜索' : 'Search in ant.design';
      return /*#__PURE__*/_react["default"].createElement("header", {
        id: "header",
        className: headerClassName
      }, /*#__PURE__*/_react["default"].createElement(_antd.Row, null, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        xxl: 4,
        xl: 5,
        lg: 5,
        md: 5,
        sm: 24,
        xs: 24
      }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
        to: utils.getLocalizedPathname('/', isZhCN),
        id: "logo"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        alt: "logo",
        src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      }), /*#__PURE__*/_react["default"].createElement("img", {
        alt: "Ant Design",
        src: "https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg"
      }), /*#__PURE__*/_react["default"].createElement(_Santa["default"], null))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        xxl: 20,
        xl: 19,
        lg: 19,
        md: 19,
        sm: 0,
        xs: 0
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "search-box"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: "search"
      })), !isMobile && menu)));
    }
  }]);

  return Header;
}(_react["default"].Component);

var _default = (0, _reactIntl.injectIntl)(Header);

exports["default"] = _default;