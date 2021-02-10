"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactHelmetAsync = require("react-helmet-async");

var _utils = require("jsonml.js/lib/utils");

var _antd = require("antd");

var _EditButton = _interopRequireDefault(require("./EditButton"));

var _utils2 = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Article = /*#__PURE__*/function (_React$Component) {
  _inherits(Article, _React$Component);

  var _super = _createSuper(Article);

  function Article() {
    var _this;

    _classCallCheck(this, Article);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onResourceClick", function (e) {
      if (!window.gtag) {
        return;
      }

      var cardNode = e.target.closest('.resource-card');

      if (cardNode) {
        window.gtag('event', 'resource', {
          event_category: 'Download',
          event_label: cardNode.href
        });
      }

      if (window.location.href.indexOf('docs/react/recommendation') > 0 && e.target.matches('.markdown > table td > a[href]')) {
        window.gtag('event', 'recommendation', {
          event_category: 'Click',
          event_label: e.target.href
        });
      }
    });

    return _this;
  }

  _createClass(Article, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var location = this.props.location;
      var nextLocation = nextProps.location;

      if (nextLocation.pathname === location.pathname) {
        return false;
      }

      return true;
    }
  }, {
    key: "getArticle",
    value: function getArticle(article) {
      var content = this.props.content;
      var meta = content.meta;

      if (!meta.timeline) {
        return article;
      }

      var timelineItems = [];
      var temp = [];
      var i = 1;

      _react.Children.forEach(article.props.children, function (child) {
        if (child.type === 'h2' && temp.length > 0) {
          timelineItems.push( /*#__PURE__*/_react["default"].createElement(_antd.Timeline.Item, {
            key: i
          }, temp));
          temp = [];
          i += 1;
        }

        temp.push(child);
      });

      if (temp.length > 0) {
        timelineItems.push( /*#__PURE__*/_react["default"].createElement(_antd.Timeline.Item, {
          key: i
        }, temp));
      }

      return /*#__PURE__*/(0, _react.cloneElement)(article, {
        children: /*#__PURE__*/_react["default"].createElement(_antd.Timeline, null, timelineItems)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          locale = _this$props.intl.locale,
          utils = _this$props.utils;
      var meta = content.meta,
          description = content.description;
      var title = meta.title,
          subtitle = meta.subtitle,
          filename = meta.filename;
      var isNotTranslated = locale === 'en-US' && _typeof(title) === 'object';
      var helmetTitle = "".concat(title[locale] || title, " - Ant Design");
      var helmetDesc = (0, _utils2.getMetaDescription)(description);
      var contentChild = (0, _utils2.getMetaDescription)((0, _utils.getChildren)(content.content));
      var metaDesc = helmetDesc || contentChild;
      return (
        /*#__PURE__*/

        /* eslint-disable-next-line */
        _react["default"].createElement("article", {
          className: "markdown",
          onClick: this.onResourceClick
        }, /*#__PURE__*/_react["default"].createElement(_reactHelmetAsync.Helmet, {
          encodeSpecialCharacters: false
        }, helmetTitle && /*#__PURE__*/_react["default"].createElement("title", null, helmetTitle), helmetTitle && /*#__PURE__*/_react["default"].createElement("meta", {
          property: "og:title",
          content: helmetTitle
        }), metaDesc && /*#__PURE__*/_react["default"].createElement("meta", {
          name: "description",
          content: metaDesc
        })), isNotTranslated && /*#__PURE__*/_react["default"].createElement(_antd.Alert, {
          type: "warning",
          message: /*#__PURE__*/_react["default"].createElement("span", null, "This article has not been translated yet. Wanna help us out?\xA0", /*#__PURE__*/_react["default"].createElement("a", {
            href: "https://github.com/ant-design/ant-design/issues/1471"
          }, "See this issue on GitHub."))
        }), /*#__PURE__*/_react["default"].createElement("h1", null, title[locale] || title, !subtitle || locale === 'en-US' ? null : /*#__PURE__*/_react["default"].createElement("span", {
          className: "subtitle"
        }, subtitle), /*#__PURE__*/_react["default"].createElement(_EditButton["default"], {
          title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "app.content.edit-page"
          }),
          filename: filename
        })), !description ? null : utils.toReactComponent(['section', {
          className: 'markdown'
        }].concat((0, _utils.getChildren)(description))), !content.toc || content.toc.length <= 1 || meta.toc === false ? null : /*#__PURE__*/_react["default"].createElement(_antd.Affix, {
          className: "toc-affix",
          offsetTop: 16
        }, utils.toReactComponent(['ul', {
          className: 'toc'
        }].concat((0, _utils.getChildren)(content.toc)))), this.getArticle(utils.toReactComponent(['section', {
          className: 'markdown'
        }].concat((0, _utils.getChildren)(content.content)))), utils.toReactComponent(['section', {
          className: 'markdown api-container'
        }].concat((0, _utils.getChildren)(content.api || ['placeholder']))))
      );
    }
  }]);

  return Article;
}(_react["default"].Component);

var _default = (0, _reactIntl.injectIntl)(Article);

exports["default"] = _default;