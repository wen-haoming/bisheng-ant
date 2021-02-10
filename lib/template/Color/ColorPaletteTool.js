"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _ColorPicker = _interopRequireDefault(require("./ColorPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var primaryMinSaturation = 70; // 主色推荐最小饱和度

var primaryMinBrightness = 70; // 主色推荐最小亮度
// eslint-disable-next-line

var ColorPaletteTool = /*#__PURE__*/function (_Component) {
  _inherits(ColorPaletteTool, _Component);

  var _super = _createSuper(ColorPaletteTool);

  function ColorPaletteTool() {
    var _this;

    _classCallCheck(this, ColorPaletteTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      primaryColor: '#1890ff',
      primaryColorInstance: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeColor", function (e, color) {
      var value = e.target ? e.target.value : e;

      _this.setState({
        primaryColor: value,
        primaryColorInstance: color
      });
    });

    return _this;
  }

  _createClass(ColorPaletteTool, [{
    key: "renderColorValidation",
    value: function renderColorValidation() {
      var primaryColorInstance = this.state.primaryColorInstance;
      var text = '';

      if (primaryColorInstance) {
        if (primaryColorInstance.hsv.s * 100 < primaryMinSaturation) {
          text += " \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(primaryMinSaturation, "\uFF08\u73B0\u5728 ").concat((primaryColorInstance.hsv.s * 100).toFixed(2), "\uFF09");
        }

        if (primaryColorInstance.hsv.v * 100 < primaryMinBrightness) {
          text += " \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(primaryMinBrightness, "\uFF08\u73B0\u5728 ").concat((primaryColorInstance.hsv.v * 100).toFixed(2), "\uFF09");
        }
      }

      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "color-palette-picker-validation"
      }, text.trim());
    }
  }, {
    key: "render",
    value: function render() {
      var primaryColor = this.state.primaryColor;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-palette-horizontal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-palette-pick"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "app.docs.color.pick-primary"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-palette-picker"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          display: 'inline-block',
          verticalAlign: 'middle'
        }
      }, /*#__PURE__*/_react["default"].createElement(_ColorPicker["default"], {
        type: "chrome",
        color: primaryColor,
        onChange: this.handleChangeColor
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "color-palette-picker-value"
      }, primaryColor), this.renderColorValidation()));
    }
  }]);

  return ColorPaletteTool;
}(_react.Component);

exports["default"] = ColorPaletteTool;