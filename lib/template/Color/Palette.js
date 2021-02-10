"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

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

var rgbToHex = function rgbToHex(rgbString) {
  var rgb = rgbString.match(/\d+/g);
  var r = parseInt(rgb[0], 10).toString(16);
  var g = parseInt(rgb[1], 10).toString(16);
  var b = parseInt(rgb[2], 10).toString(16);
  r = r.length === 1 ? "0".concat(r) : r;
  g = g.length === 1 ? "0".concat(g) : g;
  b = b.length === 1 ? "0".concat(b) : b;
  return "#".concat(r).concat(g).concat(b);
};

var Palette = /*#__PURE__*/function (_React$Component) {
  _inherits(Palette, _React$Component);

  var _super = _createSuper(Palette);

  function Palette() {
    _classCallCheck(this, Palette);

    return _super.apply(this, arguments);
  }

  _createClass(Palette, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.hexColors = {};
      Object.keys(this.colorNodes).forEach(function (key) {
        var computedColor = getComputedStyle(_this.colorNodes[key])['background-color'];

        if (computedColor.indexOf('rgba') >= 0) {
          _this.hexColors[key] = computedColor;
        } else {
          _this.hexColors[key] = rgbToHex(computedColor);
        }
      });
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.colorNodes = this.colorNodes || {};
      var _this$props = this.props,
          showTitle = _this$props.showTitle,
          direction = _this$props.direction,
          _this$props$color = _this$props.color,
          name = _this$props$color.name,
          description = _this$props$color.description,
          english = _this$props$color.english,
          chinese = _this$props$color.chinese;
      var className = direction === 'horizontal' ? 'color-palette-horizontal' : 'color-palette';
      var colors = [];
      var colorName = "".concat(english, " / ").concat(chinese);

      var _loop = function _loop(i) {
        var colorText = "".concat(name, "-").concat(i);
        colors.push( /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: _this2.hexColors ? _this2.hexColors[colorText] : '',
          onCopy: function onCopy() {
            return _antd.message.success("@".concat(colorText, " copied: ").concat(_this2.hexColors[colorText]));
          },
          key: colorText
        }, /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          ref: function ref(node) {
            _this2.colorNodes["".concat(name, "-").concat(i)] = node;
          },
          className: "main-color-item palette-".concat(name, "-").concat(i),
          style: {
            color: (name === 'yellow' ? i > 6 : i > 5) ? '#fff' : 'unset',
            fontWeight: i === 6 ? 'bold' : 'normal'
          },
          title: "click to copy color"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "main-color-text"
        }, colorText), _this2.hexColors ? /*#__PURE__*/_react["default"].createElement("span", {
          className: "main-color-value"
        }, _this2.hexColors[colorText]) : null)));
      };

      for (var i = 1; i <= 10; i += 1) {
        _loop(i);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, showTitle && /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-title"
      }, colorName, /*#__PURE__*/_react["default"].createElement("span", {
        className: "color-description"
      }, description)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "main-color"
      }, colors));
    }
  }]);

  return Palette;
}(_react["default"].Component);

exports["default"] = Palette;