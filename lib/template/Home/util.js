"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = svgBgToParallax;

var _react = _interopRequireDefault(require("react"));

var _ScrollParallax = _interopRequireDefault(require("rc-scroll-anim/lib/ScrollParallax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ParallaxG(props) {
  return /*#__PURE__*/_react["default"].createElement(_ScrollParallax["default"], _extends({
    component: "g"
  }, props));
}

function svgBgToParallax(children) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var svgChildren = _react["default"].Children.toArray(children).map(function (child, ii) {
    return /*#__PURE__*/_react["default"].createElement(ParallaxG, {
      key: ii.toString(),
      location: "page2",
      animation: {
        y: Math.random() * -200 - 30 - i * 20,
        playScale: [0, Math.random() + 2]
      }
    }, child);
  });

  return svgChildren;
}

if (typeof window !== 'undefined') {
  // 图处预加载；
  var div = document.createElement('div');
  div.style.display = 'none';
  document.body.appendChild(div);
  ['https://gw.alipayobjects.com/zos/rmsportal/DJWUmdpxcQakQHwhPjzf.png', 'https://gw.alipayobjects.com/zos/rmsportal/DEaRdiYbAyVNRelJpwXx.png', 'https://gw.alipayobjects.com/zos/rmsportal/cCmuVrmQIJYlrhFjiPDZ.png', 'https://gw.alipayobjects.com/zos/rmsportal/TOElddMOrCWlgZvWTJna.png', 'https://gw.alipayobjects.com/zos/rmsportal/FpKOqFadwoFFIZFExjaf.png', 'https://gw.alipayobjects.com/zos/rmsportal/IauKICnGjGnotJBEyCRK.png', 'https://gw.alipayobjects.com/zos/rmsportal/URIeCOKLMAbRXaeXoNqN.svg', 'https://gw.alipayobjects.com/zos/rmsportal/qXncdwwUTTgUFnsbCNCE.svg', 'https://gw.alipayobjects.com/zos/rmsportal/YFXXZocxAgjReehpPNbX.svg', 'https://gw.alipayobjects.com/zos/rmsportal/VPuetGsvJuYBwoDkZWFW.svg', 'https://gw.alipayobjects.com/zos/rmsportal/eYNnmGagLWdrkdMHVUuA.svg', 'https://gw.alipayobjects.com/zos/rmsportal/EPaPtDVGnJhyqyBAUZMl.svg', 'https://gw.alipayobjects.com/zos/rmsportal/GobRAKexhfTSJdLFzDFY.svg', 'https://gw.alipayobjects.com/zos/rmsportal/slVtnOCcgeAcLEPwtewY.svg', 'https://gw.alipayobjects.com/zos/rmsportal/UtBesTOkoZsBUxPqfDlZ.svg', 'https://gw.alipayobjects.com/zos/rmsportal/VrADJaRPMnFjmtmIhObV.svg', 'https://gw.alipayobjects.com/zos/rmsportal/MnLEmwjipfhzPUmBJnJE.svg', 'https://gw.alipayobjects.com/zos/rmsportal/dyNuxLOZtvjoHSVisbhQ.svg', 'https://gw.alipayobjects.com/zos/rmsportal/qggKjIGNFlVmMpwDUXPU.svg', 'https://gw.alipayobjects.com/zos/rmsportal/dgjVqwkJvptQEtlfctvk.svg', 'https://gw.alipayobjects.com/zos/rmsportal/vUxYuDdsbBBcMDxSGmwc.svg'].forEach(function (src) {
    var img = new Image();
    img.src = src;
    div.appendChild(img);
  });
}