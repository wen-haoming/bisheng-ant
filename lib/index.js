"use strict";

var path = require('path');

var homeTmpl = './template/Home/index';
var contentTmpl = './template/Content/index';
var appShellTmpl = './template/AppShell';

function pickerGenerator(module) {
  var tester = new RegExp("^docs/".concat(module));
  return function (markdownData) {
    var filename = markdownData.meta.filename;

    if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta
      };
    }

    return null;
  };
}

module.exports = {
  lazyLoad: function lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }

    return nodePath.endsWith('/demo');
  },
  pick: {
    components: function components(markdownData) {
      var filename = markdownData.meta.filename;

      if (!/components/gi.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
        return null;
      }

      return {
        meta: markdownData.meta
      };
    },
    docs: function docs(markdownData) {
      var filename = markdownData.meta.filename;

      if (!/docs/gi.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
        return null;
      }

      return {
        meta: markdownData.meta
      };
    }
  },
  plugins: ['bisheng-plugin-description', 'bisheng-plugin-toc?maxDepth=2&keepElem', 'bisheng-plugin-antd?injectProvider', 'bisheng-plugin-react?lang=__react'],
  routes: {
    path: '/',
    component: './template/Layout/index',
    childRoutes: [{
      path: 'index-cn',
      component: homeTmpl
    }, {
      path: 'docs/react/:children',
      component: contentTmpl
    }, {
      path: 'components/:children/',
      component: contentTmpl
    }, {
      path: 'docs/spec/:children',
      component: contentTmpl
    }]
  }
};