"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactIntl = require("react-intl");

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _classnames = _interopRequireDefault(require("classnames"));

var _antd = require("antd");

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

var _BrowserFrame = _interopRequireDefault(require("../BrowserFrame"));

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

var Demo = /*#__PURE__*/function (_React$Component) {
  _inherits(Demo, _React$Component);

  var _super = _createSuper(Demo);

  function Demo() {
    var _this;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      codeExpand: false,
      copied: false,
      copyTooltipVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleCodeExpand", function (demo) {
      var codeExpand = _this.state.codeExpand;

      _this.setState({
        codeExpand: !codeExpand
      });

      _this.track({
        type: 'expand',
        demo: demo
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCodeCopied", function (demo) {
      _this.setState({
        copied: true
      });

      _this.track({
        type: 'copy',
        demo: demo
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCopyTooltipVisibleChange", function (visible) {
      if (visible) {
        _this.setState({
          copyTooltipVisible: visible,
          copied: false
        });

        return;
      }

      _this.setState({
        copyTooltipVisible: visible
      });
    });

    return _this;
  }

  _createClass(Demo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          meta = _this$props.meta,
          location = _this$props.location;

      if (meta.id === location.hash.slice(1)) {
        this.anchor.click();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$state = this.state,
          codeExpand = _this$state.codeExpand,
          copied = _this$state.copied,
          copyTooltipVisible = _this$state.copyTooltipVisible;
      var expand = this.props.expand;
      return (codeExpand || expand) !== (nextState.codeExpand || nextProps.expand) || copied !== nextState.copied || copyTooltipVisible !== nextState.copyTooltipVisible;
    }
  }, {
    key: "getSourceCode",
    value: function getSourceCode() {
      var highlightedCode = this.props.highlightedCode;

      if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        div.innerHTML = highlightedCode[1].highlighted;
        return div.textContent;
      }

      return '';
    }
  }, {
    key: "track",
    // eslint-disable-next-line
    value: function track(_ref) {
      var type = _ref.type,
          demo = _ref.demo;

      if (!window.gtag) {
        return;
      }

      window.gtag('event', 'demo', {
        event_category: type,
        event_label: demo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          meta = _this$props2.meta,
          src = _this$props2.src,
          content = _this$props2.content,
          preview = _this$props2.preview,
          highlightedCode = _this$props2.highlightedCode,
          style = _this$props2.style,
          highlightedStyle = _this$props2.highlightedStyle,
          expand = _this$props2.expand,
          utils = _this$props2.utils,
          locale = _this$props2.intl.locale;
      var _this$state2 = this.state,
          copied = _this$state2.copied,
          copyTooltipVisible = _this$state2.copyTooltipVisible;

      if (!this.liveDemo) {
        this.liveDemo = meta.iframe ? /*#__PURE__*/_react["default"].createElement(_BrowserFrame["default"], null, /*#__PURE__*/_react["default"].createElement("iframe", {
          src: src,
          height: meta.iframe,
          title: "demo"
        })) : preview(_react["default"], _reactDom["default"]);
      }

      var codeExpand = this.state.codeExpand || expand;
      var codeBoxClass = (0, _classnames["default"])('code-box', {
        expand: codeExpand,
        'code-box-debug': meta.debug
      });
      var localizeIntro = content[locale] || content;
      var introChildren = utils.toReactComponent(['div'].concat(localizeIntro));
      var highlightClass = (0, _classnames["default"])({
        'highlight-wrapper': true,
        'highlight-wrapper-expand': codeExpand
      });
      var sourceCode = this.getSourceCode();
      return /*#__PURE__*/_react["default"].createElement("section", {
        className: codeBoxClass,
        id: meta.id
      }, /*#__PURE__*/_react["default"].createElement("section", {
        className: "code-box-demo"
      }, /*#__PURE__*/_react["default"].createElement(_ErrorBoundary["default"], null, this.liveDemo), style ? /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: style
        }
      }) // eslint-disable-line
      : null), /*#__PURE__*/_react["default"].createElement("section", {
        className: "code-box-meta markdown"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "code-box-description"
      }, introChildren), /*#__PURE__*/_react["default"].createElement("div", {
        className: "code-box-actions"
      }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
        text: sourceCode,
        onCopy: function onCopy() {
          return _this2.handleCodeCopied(meta.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
        visible: copyTooltipVisible,
        onVisibleChange: this.onCopyTooltipVisibleChange,
        title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "app.demo.".concat(copied ? 'copied' : 'copy')
        })
      }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: copied && copyTooltipVisible ? 'check' : 'snippets',
        className: "code-box-code-copy"
      }))), /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
        title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "app.demo.code.".concat(codeExpand ? 'hide' : 'show')
        })
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "code-expand-icon"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        alt: "expand code",
        src: "https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",
        className: codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show',
        onClick: function onClick() {
          return _this2.handleCodeExpand(meta.id);
        }
      }), /*#__PURE__*/_react["default"].createElement("img", {
        alt: "expand code",
        src: "https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",
        className: codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide',
        onClick: function onClick() {
          return _this2.handleCodeExpand(meta.id);
        }
      }))))), /*#__PURE__*/_react["default"].createElement("section", {
        className: highlightClass,
        key: "code"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "highlight"
      }, utils.toReactComponent(highlightedCode)), highlightedStyle ? /*#__PURE__*/_react["default"].createElement("div", {
        key: "style",
        className: "highlight"
      }, /*#__PURE__*/_react["default"].createElement("pre", null, /*#__PURE__*/_react["default"].createElement("code", {
        className: "css",
        dangerouslySetInnerHTML: {
          __html: highlightedStyle
        }
      }))) : null));
    }
  }]);

  return Demo;
}(_react["default"].Component);

var _default = (0, _reactIntl.injectIntl)(Demo);

exports["default"] = _default;