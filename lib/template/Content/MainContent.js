"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("bisheng/router");

var _antd = require("antd");

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

var _Article = _interopRequireDefault(require("./Article"));

var _PrevAndNext = _interopRequireDefault(require("./PrevAndNext"));

var _Footer = _interopRequireDefault(require("../Layout/Footer"));

var _ComponentDoc = _interopRequireDefault(require("./ComponentDoc"));

var utils = _interopRequireWildcard(require("../utils"));

require("antd/dist/antd.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var SubMenu = _antd.Menu.SubMenu;

function getModuleData(props) {
  var pathname = props.location.pathname;
  var moduleName = /components/gi.test(pathname) ? 'components' : 'docs';
  console.log(moduleName, props, '++'); // const moduleData =
  //   moduleName === 'components' ||
  //   moduleName === 'docs/react' ||
  //   moduleName === 'changelog' ||
  //   moduleName === 'changelog-cn'
  //     ? [...props.picked.components, ...props.picked['docs/react'], ...props.picked.changelog]
  //     : props.picked[moduleName];

  var moduleData = props.picked[moduleName];
  var excludedSuffix = utils.isZhCN(props.location.pathname) ? 'en-US.md' : 'zh-CN.md';
  return moduleData.filter(function (_ref) {
    var meta = _ref.meta;
    return !meta.filename.endsWith(excludedSuffix);
  });
}

function fileNameToPath(filename) {
  var snippets = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').split('/');
  return snippets[snippets.length - 1];
}

var getSideBarOpenKeys = function getSideBarOpenKeys(nextProps) {
  var _nextProps$themeConfi = nextProps.themeConfig,
      themeConfig = _nextProps$themeConfi === void 0 ? {
    categoryOrder: {},
    typeOrder: {}
  } : _nextProps$themeConfi;
  var pathname = nextProps.location.pathname;
  var locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
  var moduleData = getModuleData(nextProps);
  var shouldOpenKeys = utils.getMenuItems(moduleData, locale, themeConfig.categoryOrder, themeConfig.typeOrder).map(function (m) {
    return m.title && m.title[locale] || m.title;
  });
  return shouldOpenKeys;
};

var getSubMenuTitle = function getSubMenuTitle(menuItem) {
  if (menuItem.title !== 'Components') {
    return menuItem.title;
  }

  var count = 0;
  menuItem.children.forEach(function (item) {
    if (item.children) {
      count += item.children.length;
    }
  });
  return /*#__PURE__*/_react["default"].createElement("h4", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "app.header.menu.components"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "menu-antd-components-count"
  }, count));
};

var MainContent = /*#__PURE__*/function (_Component) {
  _inherits(MainContent, _Component);

  var _super = _createSuper(MainContent);

  function MainContent() {
    var _this;

    _classCallCheck(this, MainContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      openKeys: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "handleMenuOpenChange", function (openKeys) {
      _this.setState({
        openKeys: openKeys
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInitialHashOnLoad", function () {
      setTimeout(function () {
        if (!window.location.hash) {
          return;
        }

        var element = document.getElementById(decodeURIComponent(window.location.hash.replace('#', '')));

        if (element && document.documentElement.scrollTop === 0) {
          element.scrollIntoView();
        }
      }, 0);
    });

    return _this;
  }

  _createClass(MainContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
      window.addEventListener('load', this.handleInitialHashOnLoad);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var location = this.props.location;

      var _ref2 = prevProps || {},
          _ref2$location = _ref2.location,
          prevLocation = _ref2$location === void 0 ? {} : _ref2$location;

      if (!prevProps || prevLocation.pathname !== location.pathname) {
        this.bindScroller();
      }

      if (!window.location.hash && prevLocation.pathname !== location.pathname) {
        window.scrollTo(0, 0);
      } // when subMenu not equal


      if ((0, _get["default"])(this.props, 'route.path') !== (0, _get["default"])(prevProps, 'route.path')) {
        // reset menu OpenKeys
        this.handleMenuOpenChange();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scroller.destroy();
      window.removeEventListener('load', this.handleInitialHashOnLoad);
    }
  }, {
    key: "getMenuItems",
    value: function getMenuItems() {
      var _this2 = this;

      var footerNavIcons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = this.props,
          themeConfig = _this$props.themeConfig,
          locale = _this$props.intl.locale;
      var moduleData = getModuleData(this.props);
      var menuItems = utils.getMenuItems(moduleData, locale, themeConfig.categoryOrder, themeConfig.typeOrder);
      return menuItems.map(function (menuItem) {
        if (menuItem.children) {
          return /*#__PURE__*/_react["default"].createElement(SubMenu, {
            title: getSubMenuTitle(menuItem),
            key: menuItem.title
          }, menuItem.children.map(function (child) {
            if (child.type === 'type') {
              return /*#__PURE__*/_react["default"].createElement(_antd.Menu.ItemGroup, {
                title: child.title,
                key: child.title
              }, child.children.sort(function (a, b) {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0);
              }).map(function (leaf) {
                return _this2.generateMenuItem(false, leaf, footerNavIcons);
              }));
            }

            return _this2.generateMenuItem(false, child, footerNavIcons);
          }));
        }

        return _this2.generateMenuItem(true, menuItem, footerNavIcons);
      });
    }
  }, {
    key: "getFooterNav",
    value: function getFooterNav(menuItems, activeMenuItem) {
      var menuItemsList = this.flattenMenu(menuItems);
      var activeMenuItemIndex = -1;
      menuItemsList.forEach(function (menuItem, i) {
        if (menuItem && menuItem.key === activeMenuItem) {
          activeMenuItemIndex = i;
        }
      });
      var prev = menuItemsList[activeMenuItemIndex - 1];
      var next = menuItemsList[activeMenuItemIndex + 1];
      return {
        prev: prev,
        next: next
      };
    }
  }, {
    key: "getActiveMenuItem",
    value: function getActiveMenuItem() {
      var _this$props2 = this.props,
          children = _this$props2.params.children,
          location = _this$props2.location;
      return children && children.replace('-cn', '') || location.pathname.replace(/(^\/|-cn$)/g, '');
    }
  }, {
    key: "bindScroller",
    value: function bindScroller() {
      if (this.scroller) {
        this.scroller.destroy();
      }

      if (!document.querySelector('.markdown > h2, .code-box')) {
        return;
      }

      require('intersection-observer'); // eslint-disable-line


      var scrollama = require('scrollama'); // eslint-disable-line


      this.scroller = scrollama();
      this.scroller.setup({
        step: '.markdown > h2, .code-box',
        // required
        offset: 0
      }).onStepEnter(function (_ref3) {
        var element = _ref3.element;
        [].forEach.call(document.querySelectorAll('.toc-affix li a'), function (node) {
          node.className = ''; // eslint-disable-line
        });
        var currentNode = document.querySelectorAll(".toc-affix li a[href=\"#".concat(element.id, "\"]"))[0];

        if (currentNode) {
          currentNode.className = 'current';
        }
      });
    }
  }, {
    key: "generateMenuItem",
    value: function generateMenuItem(isTop, item, _ref4) {
      var _ref4$before = _ref4.before,
          before = _ref4$before === void 0 ? null : _ref4$before,
          _ref4$after = _ref4.after,
          after = _ref4$after === void 0 ? null : _ref4$after;
      var locale = this.props.intl.locale;
      var key = fileNameToPath(item.filename);

      if (!item.title) {
        return null;
      }

      var title = item.title[locale] || item.title;
      var text = isTop ? title : [/*#__PURE__*/_react["default"].createElement("span", {
        key: "english"
      }, title), /*#__PURE__*/_react["default"].createElement("span", {
        className: "chinese",
        key: "chinese"
      }, item.subtitle)];
      var disabled = item.disabled;
      var url = item.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').toLowerCase();

      if (/components/gi.test(url)) {
        url = url.replace(/(.*?components)/gi, 'components');
      }

      var child = !item.link ? /*#__PURE__*/_react["default"].createElement(_router.Link, {
        to: utils.getLocalizedPathname(/^components/.test(url) ? "".concat(url, "/") : url, locale === 'zh-CN')
      }, before, text, after) : /*#__PURE__*/_react["default"].createElement("a", {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        disabled: disabled,
        className: "menu-item-link-outside"
      }, before, text, " ", /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: "export"
      }), after);
      return /*#__PURE__*/_react["default"].createElement(_antd.Menu.Item, {
        key: key.toLowerCase(),
        disabled: disabled
      }, child);
    }
  }, {
    key: "flattenMenu",
    value: function flattenMenu(menu) {
      var _this3 = this;

      if (!menu) {
        return null;
      }

      if (menu.type && menu.type.isMenuItem) {
        return menu;
      }

      if (Array.isArray(menu)) {
        return menu.reduce(function (acc, item) {
          return acc.concat(_this3.flattenMenu(item));
        }, []);
      }

      return this.flattenMenu(menu.props && menu.props.children || menu.children);
    }
  }, {
    key: "render",
    value: function render() {
      var isMobile = this.context.isMobile;
      var openKeys = this.state.openKeys;
      var _this$props3 = this.props,
          localizedPageData = _this$props3.localizedPageData,
          demos = _this$props3.demos,
          formatMessage = _this$props3.intl.formatMessage;
      var meta = localizedPageData.meta;
      var activeMenuItem = this.getActiveMenuItem();
      var menuItems = this.getMenuItems();
      var menuItemsForFooterNav = this.getMenuItems({
        before: /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
          className: "footer-nav-icon-before",
          type: "left"
        }),
        after: /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
          className: "footer-nav-icon-after",
          type: "right"
        })
      });

      var _this$getFooterNav = this.getFooterNav(menuItemsForFooterNav, activeMenuItem),
          prev = _this$getFooterNav.prev,
          next = _this$getFooterNav.next;

      var mainContainerClass = (0, _classnames["default"])('main-container', {
        'main-container-component': !!demos
      });

      var menuChild = /*#__PURE__*/_react["default"].createElement(_antd.Menu, {
        inlineIndent: 40,
        className: "aside-container menu-site",
        mode: "inline",
        openKeys: openKeys,
        selectedKeys: [activeMenuItem],
        onOpenChange: this.handleMenuOpenChange
      }, menuItems);

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "main-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Row, null, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        xxl: 4,
        xl: 5,
        lg: 6,
        md: 6,
        sm: 24,
        xs: 24,
        className: "main-menu"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Affix, null, /*#__PURE__*/_react["default"].createElement("section", {
        className: "main-menu-inner"
      }, menuChild))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        xxl: 20,
        xl: 19,
        lg: 18,
        md: 18,
        sm: 24,
        xs: 24
      }, /*#__PURE__*/_react["default"].createElement("section", {
        className: mainContainerClass
      }, demos ? /*#__PURE__*/_react["default"].createElement(_ComponentDoc["default"], _extends({}, this.props, {
        doc: localizedPageData,
        demos: demos
      })) : /*#__PURE__*/_react["default"].createElement(_Article["default"], _extends({}, this.props, {
        content: localizedPageData
      }))), /*#__PURE__*/_react["default"].createElement(_PrevAndNext["default"], {
        prev: prev,
        next: next
      }), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!state.openKeys) {
        return _objectSpread(_objectSpread({}, state), {}, {
          openKeys: getSideBarOpenKeys(props)
        });
      }

      return null;
    }
  }]);

  return MainContent;
}(_react.Component);

var _default = (0, _reactIntl.injectIntl)(MainContent);

exports["default"] = _default;