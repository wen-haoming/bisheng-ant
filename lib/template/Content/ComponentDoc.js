"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmetAsync = require("react-helmet-async");

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _antd = require("antd");

var _utils = require("jsonml.js/lib/utils");

var _Demo = _interopRequireDefault(require("./Demo"));

var _EditButton = _interopRequireDefault(require("./EditButton"));

var _utils2 = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ComponentDoc = /*#__PURE__*/function (_React$Component) {
  _inherits(ComponentDoc, _React$Component);

  var _super = _createSuper(ComponentDoc);

  function ComponentDoc() {
    var _this;

    _classCallCheck(this, ComponentDoc);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expandAll: false,
      visibleAll: process.env.NODE_ENV !== 'production',
      showRiddleButton: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleExpandToggle", function () {
      var expandAll = _this.state.expandAll;

      _this.setState({
        expandAll: !expandAll
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleVisibleToggle", function () {
      var visibleAll = _this.state.visibleAll;

      _this.setState({
        visibleAll: !visibleAll
      });
    });

    return _this;
  }

  _createClass(ComponentDoc, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$demos = _this$props.demos,
          demos = _this$props$demos === void 0 ? {} : _this$props$demos,
          _this$props$location = _this$props.location,
          location = _this$props$location === void 0 ? {} : _this$props$location;

      if (location.hash) {
        var demoKey = location.hash.split('-demo-')[1];
        var demoData = demos[demoKey];

        if (demoData && demoData.meta && demoData.meta.debug) {
          this.setState({
            visibleAll: true
          });
        }
      }

      this.pingTimer = (0, _utils2.ping)(function (status) {
        if (status !== 'timeout' && status !== 'error') {
          _this2.setState({
            showRiddleButton: true
          });
        }
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var location = this.props.location;
      var nextLocation = nextProps.location;
      var _this$state = this.state,
          expandAll = _this$state.expandAll,
          visibleAll = _this$state.visibleAll,
          showRiddleButton = _this$state.showRiddleButton;
      var nextExpandAll = nextState.expandAll,
          nextVisibleAll = nextState.visibleAll,
          nextShowRiddleButton = nextState.showRiddleButton;

      if (nextLocation.pathname === location.pathname && expandAll === nextExpandAll && visibleAll === nextVisibleAll && showRiddleButton === nextShowRiddleButton) {
        return false;
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.pingTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          doc = _this$props2.doc,
          location = _this$props2.location,
          locale = _this$props2.intl.locale,
          utils = _this$props2.utils,
          demos = _this$props2.demos;
      var content = doc.content,
          meta = doc.meta;
      var demoValues = Object.keys(demos).map(function (key) {
        return demos[key];
      });
      var _this$state2 = this.state,
          expandAll = _this$state2.expandAll,
          visibleAll = _this$state2.visibleAll,
          showRiddleButton = _this$state2.showRiddleButton;
      var isSingleCol = meta.cols === 1;
      var leftChildren = [];
      var rightChildren = [];
      var showedDemo = demoValues.some(function (demo) {
        return demo.meta.only;
      }) ? demoValues.filter(function (demo) {
        return demo.meta.only;
      }) : demoValues.filter(function (demo) {
        return demo.preview;
      });

      if (!visibleAll) {
        showedDemo = showedDemo.filter(function (item) {
          return !item.meta.debug;
        });
      }

      showedDemo.sort(function (a, b) {
        return a.meta.order - b.meta.order;
      }).forEach(function (demoData, index) {
        var demoElem = /*#__PURE__*/_react["default"].createElement(_Demo["default"], _extends({}, demoData, {
          key: demoData.meta.filename,
          utils: utils,
          expand: expandAll,
          location: location
        }));

        if (index % 2 === 0 || isSingleCol) {
          leftChildren.push(demoElem);
        } else {
          rightChildren.push(demoElem);
        }
      });
      var expandTriggerClass = (0, _classnames["default"])({
        'code-box-expand-trigger': true,
        'code-box-expand-trigger-active': expandAll
      }); // const jumper = showedDemo.map(demo => {
      //   const { title } = demo.meta;
      //   const localizeTitle = title[locale] || title;
      //   return (
      //     <li key={demo.meta.id} title={localizeTitle}>
      //       <a href={`#${demo.meta.id}`}>{localizeTitle}</a>
      //     </li>
      //   );
      // });

      var title = meta.title,
          subtitle = meta.subtitle,
          filename = meta.filename;
      var articleClassName = (0, _classnames["default"])({
        'show-riddle-button': showRiddleButton
      });
      var helmetTitle = "".concat(subtitle || '', " ").concat(title[locale] || title, " - Ant Design");
      var contentChild = (0, _utils2.getMetaDescription)((0, _utils.getChildren)(content));
      return /*#__PURE__*/_react["default"].createElement("article", {
        className: articleClassName
      }, /*#__PURE__*/_react["default"].createElement(_reactHelmetAsync.Helmet, {
        encodeSpecialCharacters: false
      }, helmetTitle && /*#__PURE__*/_react["default"].createElement("title", null, helmetTitle), helmetTitle && /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:title",
        content: helmetTitle
      }), contentChild && /*#__PURE__*/_react["default"].createElement("meta", {
        name: "description",
        content: contentChild
      })), /*#__PURE__*/_react["default"].createElement(_antd.Affix, {
        className: "toc-affix",
        offsetTop: 16
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        id: "demo-toc",
        className: "toc"
      })), /*#__PURE__*/_react["default"].createElement("section", {
        className: "markdown"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, title[locale] || title, !subtitle ? null : /*#__PURE__*/_react["default"].createElement("span", {
        className: "subtitle"
      }, subtitle), /*#__PURE__*/_react["default"].createElement(_EditButton["default"], {
        title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "app.content.edit-page"
        }),
        filename: filename
      })), utils.toReactComponent(['section', {
        className: 'markdown'
      }].concat((0, _utils.getChildren)(content))), /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "app.component.examples"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          "float": 'right'
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
        title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "app.component.examples.".concat(expandAll ? 'collapse' : 'expand')
        })
      }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: "code",
        theme: expandAll ? 'filled' : 'outlined',
        className: expandTriggerClass,
        onClick: this.handleExpandToggle
      })), /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
        title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "app.component.examples.".concat(visibleAll ? 'hide' : 'visible')
        })
      }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: "bug",
        theme: visibleAll ? 'filled' : 'outlined',
        className: expandTriggerClass,
        onClick: this.handleVisibleToggle
      }))))), /*#__PURE__*/_react["default"].createElement(_antd.Row, {
        gutter: 16
      }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        span: isSingleCol ? 24 : 12,
        className: isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1'
      }, leftChildren), isSingleCol ? null : /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        className: "code-boxes-col-2-1",
        span: 12
      }, rightChildren)), utils.toReactComponent(['section', {
        className: 'markdown api-container'
      }].concat((0, _utils.getChildren)(doc.api || ['placeholder']))));
    }
  }]);

  return ComponentDoc;
}(_react["default"].Component);

var _default = (0, _reactIntl.injectIntl)(ComponentDoc);

exports["default"] = _default;