"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuItems = getMenuItems;
exports.isZhCN = isZhCN;
exports.getLocalizedPathname = getLocalizedPathname;
exports.ping = ping;
exports.isLocalStorageNameSupported = isLocalStorageNameSupported;
exports.loadScript = loadScript;
exports.getMetaDescription = getMetaDescription;

var _flattenDeep = _interopRequireDefault(require("lodash/flattenDeep"));

var _flatten3 = _interopRequireDefault(require("lodash/flatten"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getMenuItems(moduleData, locale) {
  var categoryOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var typeOrder = arguments.length > 3 ? arguments[3] : undefined;
  var menuMeta = moduleData.map(function (item) {
    return item.meta;
  });
  var menuItems = [];

  var sortFn = function sortFn(a, b) {
    return (a.order || 0) - (b.order || 0);
  };

  menuMeta.sort(sortFn).forEach(function (meta) {
    if (!meta.category) {
      menuItems.push(meta);
    } else {
      var category = meta.category[locale] || meta.category;
      var group = menuItems.filter(function (i) {
        return i.title === category;
      })[0];

      if (!group) {
        group = {
          type: 'category',
          title: category,
          children: [],
          order: categoryOrder ? categoryOrder[category] : 0
        };
        menuItems.push(group);
      }

      if (meta.type) {
        var type = group.children.filter(function (i) {
          return i.title === meta.type;
        })[0];

        if (!type) {
          type = {
            type: 'type',
            title: meta.type,
            children: [],
            order: typeOrder ? typeOrder[meta.type] : 0
          };
          group.children.push(type);
        }

        type.children.push(meta);
      } else {
        group.children.push(meta);
      }
    }
  });
  return menuItems.map(function (i) {
    if (i.children) {
      i.children = i.children.sort(sortFn);
    }

    return i;
  }).sort(sortFn);
}

function isZhCN(pathname) {
  return /-cn\/?$/.test(pathname);
}

function getLocalizedPathname(path, zhCN) {
  var pathname = path.startsWith('/') ? path : "/".concat(path);

  if (!zhCN) {
    // to enUS
    return /\/?index-cn/.test(pathname) ? '/' : pathname.replace('-cn', '');
  }

  if (pathname === '/') {
    return '/index-cn';
  }

  if (pathname.endsWith('/')) {
    return pathname.replace(/\/$/, '-cn/');
  }

  return "".concat(pathname, "-cn/");
}

function ping(callback) {
  // eslint-disable-next-line
  var url = 'https://private-a' + 'lipay' + 'objects.alip' + 'ay.com/alip' + 'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  var img = new Image();
  var done;

  var finish = function finish(status) {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };

  img.onload = function () {
    return finish('responded');
  };

  img.onerror = function () {
    return finish('error');
  };

  img.src = url;
  return setTimeout(function () {
    return finish('timeout');
  }, 1500);
}

function isLocalStorageNameSupported() {
  var testKey = 'test';
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function getMetaDescription(jml) {
  var COMMON_TAGS = ['h1', 'h2', 'h3', 'p', 'img', 'a', 'code', 'strong'];
  if (!Array.isArray(jml)) return '';
  var paragraph = (0, _flattenDeep["default"])(jml.filter(function (item) {
    if (Array.isArray(item)) {
      var _item = _slicedToArray(item, 1),
          tag = _item[0];

      return tag === 'p';
    }

    return false;
  }) // ['p', ['code', 'aa'], 'bb'] => ['p', 'aabb']
  .map(function (item) {
    var _flatten = (0, _flatten3["default"])(item),
        _flatten2 = _toArray(_flatten),
        tag = _flatten2[0],
        others = _flatten2.slice(1);

    var content = others.filter(function (other) {
      return typeof other === 'string' && !COMMON_TAGS.includes(other);
    }).join('');
    return [tag, content];
  })).find(function (p) {
    return p && typeof p === 'string' && !COMMON_TAGS.includes(p);
  });
  return paragraph;
}