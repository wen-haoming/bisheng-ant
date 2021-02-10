"use strict";

var _raf = _interopRequireDefault(require("raf"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _raf2 = _interopRequireDefault(require("../raf"));

var _throttleByAnimationFrame = _interopRequireDefault(require("../throttleByAnimationFrame"));

var _getDataOrAriaProps = _interopRequireDefault(require("../getDataOrAriaProps"));

var _triggerEvent = _interopRequireDefault(require("../triggerEvent"));

var _wave = _interopRequireDefault(require("../wave"));

var _transButton = _interopRequireDefault(require("../transButton"));

var _openAnimation = _interopRequireDefault(require("../openAnimation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('Test utils function', function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it('throttle function should work', function () {
    var callback = jest.fn();
    var throttled = (0, _throttleByAnimationFrame["default"])(callback);
    expect(callback).not.toHaveBeenCalled();
    throttled();
    throttled();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls.length).toBe(1);
  });
  it('throttle function should be canceled', function () {
    var callback = jest.fn();
    var throttled = (0, _throttleByAnimationFrame["default"])(callback);
    throttled();
    throttled.cancel();
    jest.runAllTimers();
    expect(callback).not.toHaveBeenCalled();
  });
  describe('getDataOrAriaProps', function () {
    it('returns all data-* properties from an object', function () {
      var props = {
        onClick: function onClick() {},
        isOpen: true,
        'data-test': 'test-id',
        'data-id': 1234
      };
      var results = (0, _getDataOrAriaProps["default"])(props);
      expect(results).toEqual({
        'data-test': 'test-id',
        'data-id': 1234
      });
    });
    it('does not return data-__ properties from an object', function () {
      var props = {
        onClick: function onClick() {},
        isOpen: true,
        'data-__test': 'test-id',
        'data-__id': 1234
      };
      var results = (0, _getDataOrAriaProps["default"])(props);
      expect(results).toEqual({});
    });
    it('returns all aria-* properties from an object', function () {
      var props = {
        onClick: function onClick() {},
        isOpen: true,
        'aria-labelledby': 'label-id',
        'aria-label': 'some-label'
      };
      var results = (0, _getDataOrAriaProps["default"])(props);
      expect(results).toEqual({
        'aria-labelledby': 'label-id',
        'aria-label': 'some-label'
      });
    });
    it('returns role property from an object', function () {
      var props = {
        onClick: function onClick() {},
        isOpen: true,
        role: 'search'
      };
      var results = (0, _getDataOrAriaProps["default"])(props);
      expect(results).toEqual({
        role: 'search'
      });
    });
  });
  it('delayRaf', function (done) {
    jest.useRealTimers();
    var bamboo = false;
    (0, _raf2["default"])(function () {
      bamboo = true;
    }, 3); // Do nothing, but insert in the frame
    // https://github.com/ant-design/ant-design/issues/16290

    (0, _raf2["default"])(function () {}, 3); // Variable bamboo should be false in frame 2 but true in frame 4

    (0, _raf["default"])(function () {
      expect(bamboo).toBe(false); // Frame 2

      (0, _raf["default"])(function () {
        expect(bamboo).toBe(false); // Frame 3

        (0, _raf["default"])(function () {
          // Frame 4
          (0, _raf["default"])(function () {
            expect(bamboo).toBe(true);
            done();
          });
        });
      });
    });
  });
  it('triggerEvent', function () {
    var button = document.createElement('button');
    button.addEventListener('click', function () {
      button.style.width = '100px';
    }, true);
    (0, _triggerEvent["default"])(button, 'click');
    expect(button.style.width).toBe('100px');
  });
  describe('wave', function () {
    it('bindAnimationEvent should return when node is null', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_wave["default"], null, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        disabled: true
      }, "button"))).instance();
      expect(wrapper.bindAnimationEvent()).toBe(undefined);
    });
    it('bindAnimationEvent.onClick should return when children is hidden', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_wave["default"], null, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        style: {
          display: 'none'
        }
      }, "button"))).instance();
      expect(wrapper.bindAnimationEvent()).toBe(undefined);
    });
    it('bindAnimationEvent.onClick should return when children is input', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_wave["default"], null, /*#__PURE__*/_react["default"].createElement("input", null))).instance();
      expect(wrapper.bindAnimationEvent()).toBe(undefined);
    });
    it('should not throw when click it', function () {
      expect(function () {
        var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_wave["default"], null, /*#__PURE__*/_react["default"].createElement("div", null)));
        wrapper.simulate('click');
      }).not.toThrow();
    });
    it('should not throw when no children', function () {
      if (process.env.REACT === '15') {
        return;
      }

      expect(function () {
        return (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_wave["default"], null));
      }).not.toThrow();
    });
  });
  describe('TransButton', function () {
    it('can be focus/blur', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_transButton["default"], null, "TransButton"));
      expect(_typeof(wrapper.instance().focus)).toBe('function');
      expect(_typeof(wrapper.instance().blur)).toBe('function');
    });
    it('should trigger onClick when press enter', function () {
      var onClick = jest.fn();
      var preventDefault = jest.fn();
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_transButton["default"], {
        onClick: onClick
      }, "TransButton"));
      wrapper.simulate('keyUp', {
        keyCode: _KeyCode["default"].ENTER
      });
      expect(onClick).toHaveBeenCalled();
      wrapper.simulate('keyDown', {
        keyCode: _KeyCode["default"].ENTER,
        preventDefault: preventDefault
      });
      expect(preventDefault).toHaveBeenCalled();
    });
  });
  describe('openAnimation', function () {
    it('should support openAnimation', function () {
      var done = jest.fn();
      var domNode = document.createElement('div');
      expect(_typeof(_openAnimation["default"].enter)).toBe('function');
      expect(_typeof(_openAnimation["default"].leave)).toBe('function');
      expect(_typeof(_openAnimation["default"].appear)).toBe('function');

      var appear = _openAnimation["default"].appear(domNode, done);

      var enter = _openAnimation["default"].enter(domNode, done);

      var leave = _openAnimation["default"].leave(domNode, done);

      expect(_typeof(appear.stop)).toBe('function');
      expect(_typeof(enter.stop)).toBe('function');
      expect(_typeof(leave.stop)).toBe('function');
      expect(done).toHaveBeenCalled();
    });
  });
});