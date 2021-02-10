"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcTweenOne = require("rc-tween-one");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var page1Data = [{
  img: 'https://gw.alipayobjects.com/zos/rmsportal/URIeCOKLMAbRXaeXoNqN.svg',
  name: '设计价值观',
  nameEn: 'Design Values',
  to: '/docs/spec/values',
  svgBg: /*#__PURE__*/_react["default"].createElement("svg", {
    width: "213px",
    height: "303px",
    viewBox: "0 0 213 303",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy-6",
    fill: "#1D39C4",
    opacity: "0.45",
    cx: "60",
    cy: "157",
    r: "25"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy",
    fill: "#1D39C4",
    opacity: "0.35",
    cx: "167.5",
    cy: "65.5",
    r: "11.5"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    stroke: "#1D39C4",
    opacity: "0.7",
    x: "0.5",
    y: "54.5",
    width: "14",
    height: "14",
    rx: "1"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "195.5",
    cy: "117.5",
    r: "3.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "117",
    cy: "2",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "82",
    cy: "36",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "26.5",
    cy: "102.5",
    r: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "#1D39C4",
    opacity: "0.65",
    cx: "180.5",
    cy: "8.5",
    r: "4.5"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    id: "Group-18",
    transform: "translate(197.000000, 157.000000)",
    opacity: "0.7",
    stroke: "#1D39C4"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.7320508,3 L15.0621778,10.5 C15.6144626,11.4565852 15.2867123,12.6797661 14.330127,13.2320508 C14.0260886,13.4075875 13.6812003,13.5 13.330127,13.5 L4.66987298,13.5 C3.56530348,13.5 2.66987298,12.6045695 2.66987298,11.5 C2.66987298,11.1489267 2.76228551,10.8040384 2.93782217,10.5 L7.26794919,3 C7.82023394,2.04341475 9.04341475,1.71566444 10,2.26794919 C10.3040384,2.44348586 10.5565141,2.69596158 10.7320508,3 Z"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    id: "Group-17",
    transform: "translate(124.000000, 284.000000)",
    opacity: "0.65",
    stroke: "#1D39C4"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.7320508,6 L18.0621778,13.5 C18.6144626,14.4565852 18.2867123,15.6797661 17.330127,16.2320508 C17.0260886,16.4075875 16.6812003,16.5 16.330127,16.5 L7.66987298,16.5 C6.56530348,16.5 5.66987298,15.6045695 5.66987298,14.5 C5.66987298,14.1489267 5.76228551,13.8040384 5.93782217,13.5 L10.2679492,6 C10.8202339,5.04341475 12.0434148,4.71566444 13,5.26794919 C13.3040384,5.44348586 13.5565141,5.69596158 13.7320508,6 Z",
    transform: "translate(12.000000, 11.140576) rotate(25.000000) translate(-12.000000, -11.140576) "
  })))
}, {
  img: 'https://gw.alipayobjects.com/zos/rmsportal/qXncdwwUTTgUFnsbCNCE.svg',
  name: '视觉',
  nameEn: 'Visual',
  to: '/docs/spec/colors',
  svgBg: /*#__PURE__*/_react["default"].createElement("svg", {
    width: "207px",
    height: "295px",
    viewBox: "0 0 207 295",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    stroke: "#1D39C4",
    opacity: "0.7",
    x: "192.5",
    y: "62.5",
    width: "14",
    height: "14",
    rx: "1"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy-2",
    fill: "#1D39C4",
    opacity: "0.45",
    cx: "21.5",
    cy: "90.5",
    r: "21.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy-3",
    fill: "#1D39C4",
    opacity: "0.35",
    cx: "162.5",
    cy: "163.5",
    r: "14.5"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    stroke: "#1D39C4",
    opacity: "0.7",
    transform: "translate(77.500000, 287.500000) rotate(30.000000) translate(-77.500000, -287.500000) ",
    x: "72.5",
    y: "282.5",
    width: "10",
    height: "10",
    rx: "1"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "164.5",
    cy: "117.5",
    r: "3.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "96",
    cy: "2",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "141",
    cy: "36",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "34.5",
    cy: "142.5",
    r: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "#1D39C4",
    opacity: "0.65",
    cx: "24.5",
    cy: "30.5",
    r: "4.5"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    id: "Group-19",
    transform: "translate(12.000000, 173.000000)",
    opacity: "0.7",
    stroke: "#1D39C4"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.5216765,6.597413 L17.8518036,14.097413 C18.4040883,15.0539982 18.076338,16.2771791 17.1197527,16.8294638 C16.8157143,17.0050005 16.4708261,17.097413 16.1197527,17.097413 L7.45949871,17.097413 C6.35492921,17.097413 5.45949871,16.2019825 5.45949871,15.097413 C5.45949871,14.7463397 5.55191124,14.4014514 5.7274479,14.097413 L10.0575749,6.597413 C10.6098597,5.64082775 11.8330405,5.31307744 12.7896257,5.86536219 C13.0936641,6.04089886 13.3461399,6.29337458 13.5216765,6.597413 Z",
    transform: "translate(11.789626, 11.737989) rotate(40.000000) translate(-11.789626, -11.737989) "
  })))
}, {
  img: 'https://gw.alipayobjects.com/zos/rmsportal/YFXXZocxAgjReehpPNbX.svg',
  name: '可视化',
  nameEn: 'Visualization',
  to: '/docs/spec/visual',
  svgBg: /*#__PURE__*/_react["default"].createElement("svg", {
    width: "215px",
    height: "286px",
    viewBox: "0 0 215 286",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    style: {
      transform: 'translateX(-30px)'
    }
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy-4",
    fill: "#1D39C4",
    opacity: "0.35",
    cx: "77",
    cy: "152",
    r: "10"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy-5",
    fill: "#1D39C4",
    opacity: "0.45",
    cx: "194.5",
    cy: "74.5",
    r: "20.5"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    stroke: "#1D39C4",
    opacity: "0.7",
    x: "0.5",
    y: "99.5",
    width: "13",
    height: "13",
    rx: "1"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "44.5",
    cy: "117.5",
    r: "3.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "132",
    cy: "2",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "177",
    cy: "36",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "147.5",
    cy: "182.5",
    r: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "#1D39C4",
    opacity: "0.65",
    cx: "172",
    cy: "182",
    r: "7"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "#1D39C4",
    opacity: "0.65",
    cx: "110",
    cy: "280",
    r: "5"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    id: "Group-20",
    transform: "translate(70.000000, 23.000000)",
    opacity: "0.7",
    stroke: "#1D39C4"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.0221683,6.597413 L16.8974466,13.309592 C17.4497314,14.2661772 17.1219811,15.489358 16.1653958,16.0416428 C15.8613574,16.2171794 15.5164692,16.309592 15.1653958,16.309592 L7.41483918,16.309592 C6.31026968,16.309592 5.41483918,15.4141615 5.41483918,14.309592 C5.41483918,13.9585186 5.5072517,13.6136304 5.68278837,13.309592 L9.55806669,6.597413 C10.1103514,5.64082775 11.3335323,5.31307744 12.2901175,5.86536219 C12.5941559,6.04089886 12.8466316,6.29337458 13.0221683,6.597413 Z",
    transform: "translate(11.290118, 11.262929) rotate(40.000000) translate(-11.290118, -11.262929) "
  })))
}, {
  img: 'https://gw.alipayobjects.com/zos/rmsportal/VPuetGsvJuYBwoDkZWFW.svg',
  name: '动效',
  nameEn: 'Animation',
  to: '/docs/spec/motion',
  svgBg: /*#__PURE__*/_react["default"].createElement("svg", {
    width: "193px",
    height: "286px",
    viewBox: "0 0 193 286",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    style: {
      transform: 'translateY(-20px)'
    }
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy-4",
    fill: "#1D39C4",
    opacity: "0.35",
    cx: "71",
    cy: "65",
    r: "10"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval-12-Copy-5",
    fill: "#1D39C4",
    opacity: "0.45",
    cx: "172.5",
    cy: "154.5",
    r: "20.5"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    stroke: "#1D39C4",
    opacity: "0.7",
    x: "0.5",
    y: "99.5",
    width: "13",
    height: "13",
    rx: "1"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "44.5",
    cy: "117.5",
    r: "3.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.5",
    cx: "132",
    cy: "2",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "39",
    cy: "34",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#1D39C4",
    opacity: "0.6",
    cx: "147.5",
    cy: "182.5",
    r: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "#1D39C4",
    opacity: "0.65",
    cx: "55",
    cy: "177",
    r: "7"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "#1D39C4",
    opacity: "0.65",
    cx: "110",
    cy: "280",
    r: "5"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    id: "Group-21",
    transform: "translate(171.000000, 25.000000)",
    opacity: "0.7",
    stroke: "#1D39C4"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.833668,6.38747836 L16.7089463,13.0996573 C17.2612311,14.0562426 16.9334808,15.2794234 15.9768955,15.8317081 C15.6728571,16.0072448 15.3279688,16.0996573 14.9768955,16.0996573 L7.22633886,16.0996573 C6.12176936,16.0996573 5.22633886,15.2042268 5.22633886,14.0996573 C5.22633886,13.748584 5.31875139,13.4036957 5.49428806,13.0996573 L9.36956638,6.38747836 C9.92185113,5.43089311 11.1450319,5.1031428 12.1016172,5.65542755 C12.4056556,5.83096421 12.6581313,6.08343994 12.833668,6.38747836 Z",
    transform: "translate(11.101617, 11.052994) rotate(40.000000) translate(-11.101617, -11.052994) "
  })))
}];

var getTransformXY = function getTransformXY(t) {
  var s = t.replace(/[a-z()]/g, '').split(',');
  return {
    x: s[0],
    y: s[1]
  };
};

var svgToXY = page1Data.map(function (item) {
  var c = item.svgBg.props.children;
  return c.map(function (child) {
    var p = child.props;
    var trnasformXY = p.transform ? getTransformXY(p.transform) : {};
    return {
      x: parseFloat(p.x || p.cx || trnasformXY.x),
      y: parseFloat(p.y || p.cy || trnasformXY.y)
    };
  });
});

var Page1 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Page1, _React$PureComponent);

  var _super = _createSuper(Page1);

  function Page1() {
    var _this;

    _classCallCheck(this, Page1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hoverKey: null
    });

    _defineProperty(_assertThisInitialized(_this), "leave", {
      opacity: 0,
      duration: 300,
      x: 100,
      y: 150,
      ease: 'easeInBack'
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (key) {
      _this.setState({
        hoverKey: key
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOut", function () {
      _this.setState({
        hoverKey: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getEnter", function (i, e) {
      var ii = e.index;
      var r = Math.random() * 2 - 1;
      var y = Math.random() * 10 + 10;
      var delay = Math.round(Math.random() * (ii * 30));
      var pos = svgToXY[i][ii];
      return [{
        x: 100,
        y: 150,
        duration: 0
      }, {
        delay: delay,
        opacity: 1,
        x: pos.x,
        y: pos.y,
        ease: 'easeOutBack',
        duration: 300
      }, {
        y: r > 0 ? "+=".concat(y) : "-=".concat(y),
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "getSvgChild", function (child) {
      return child.map(function (item, i) {
        var props = _objectSpread({}, item.props);

        if (item.type === 'g') {
          props.transform = null;
        } else {
          ['x', 'y', 'cx', 'cy'].forEach(function (str) {
            if (str in props) {
              props[str] = null;
            }
          });
        }

        return /*#__PURE__*/_react["default"].createElement("g", {
          key: i.toString()
        }, /*#__PURE__*/_react["default"].cloneElement(item, props));
      });
    });

    return _this;
  }

  _createClass(Page1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          locale = _this$props.locale,
          isMobile = _this$props.isMobile;
      var hoverKey = this.state.hoverKey;
      var isZhCN = locale === 'zh-CN';
      var children = page1Data.map(function (item, i) {
        var isHover = item.nameEn === hoverKey;
        return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
          key: item.nameEn,
          md: 6,
          xs: 24
        }, /*#__PURE__*/_react["default"].createElement(_rcTweenOne.TweenOneGroup, _extends({
          className: "page1-point-wrapper",
          enter: function enter(e) {
            return _this2.getEnter(i, e);
          },
          leave: _this2.leave
        }, item.svgBg.props, {
          component: "svg",
          resetStyle: false,
          exclusive: true
        }), (isMobile || isHover) && _this2.getSvgChild(item.svgBg.props.children)));
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, "page1") // <div className="home-page-wrapper page1">
      //   <div className="page">
      //     <h2>
      //       <FormattedMessage id="app.home.design-language" />
      //     </h2>
      //     <ScrollOverPack playScale="0.3">
      //       <QueueAnim
      //         component={Row}
      //         key="queue"
      //         type="bottom"
      //         ease={['easeOutQuart', 'easeInQuart']}
      //         leaveReverse
      //       >
      //         {children}
      //       </QueueAnim>
      //     </ScrollOverPack>
      //   </div>
      // </div>
      ;
    }
  }]);

  return Page1;
}(_react["default"].PureComponent);

exports["default"] = Page1;