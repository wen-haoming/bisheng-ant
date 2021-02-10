"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactColor = require("react-color");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var noop = function noop() {};

var pickers = {
  chrome: _reactColor.ChromePicker,
  sketch: _reactColor.SketchPicker
};

var ColorPicker = /*#__PURE__*/function (_Component) {
  _inherits(ColorPicker, _Component);

  var _super = _createSuper(ColorPicker);

  function ColorPicker() {
    var _this;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      displayColorPicker: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var displayColorPicker = _this.state.displayColorPicker;

      _this.setState({
        displayColorPicker: !displayColorPicker
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        displayColorPicker: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (color) {
      var onChange = _this.props.onChange;

      _this.setState({
        color: color.hex
      });

      onChange(color.hex, color);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeComplete", function (color) {
      var onChangeComplete = _this.props.onChangeComplete;

      _this.setState({
        color: color.hex
      });

      onChangeComplete(color.hex);
    });

    return _this;
  }

  _createClass(ColorPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          small = _this$props.small,
          type = _this$props.type,
          position = _this$props.position;
      var _this$state = this.state,
          color = _this$state.color,
          displayColorPicker = _this$state.displayColorPicker;
      var Picker = pickers[type];
      var styles = {
        color: {
          width: small ? '80px' : '120px',
          height: small ? '16px' : '24px',
          borderRadius: '2px',
          background: color
        },
        swatch: {
          padding: '4px',
          background: '#fff',
          borderRadius: '2px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        wrapper: {
          position: 'inherit',
          zIndex: '100'
        }
      };

      if (position === 'top') {
        styles.wrapper.transform = 'translateY(-100%)';
        styles.wrapper.paddingBottom = 8;
      }

      var swatch = /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.swatch,
        onClick: this.handleClick
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.color
      }));

      var picker = displayColorPicker ? /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.popover
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.cover,
        onClick: this.handleClose
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.wrapper
      }, /*#__PURE__*/_react["default"].createElement(Picker, _extends({}, this.props, {
        color: color,
        onChange: this.handleChange,
        onChangeComplete: this.handleChangeComplete
      })))) : null;

      if (position === 'top') {
        return /*#__PURE__*/_react["default"].createElement("div", null, picker, swatch);
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, swatch, picker);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if ('color' in props) {
        return {
          color: props.color
        };
      }

      return null;
    }
  }]);

  return ColorPicker;
}(_react.Component);

exports["default"] = ColorPicker;

_defineProperty(ColorPicker, "defaultProps", {
  onChange: noop,
  onChangeComplete: noop,
  position: 'bottom'
});