/*!
 * quasar-ui-investco v0.0.1
 * (c) 2025 Julio Vinachi <julio899@gmail.com>
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('quasar')) :
  typeof define === 'function' && define.amd ? define(['vue', 'quasar'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.InvestCo = factory(global.Vue, global.Quasar));
})(this, (function (vue, quasar) { 'use strict';

  var Component = {
    name: 'InvestCo',

    setup: function setup () {
      return function () { return vue.h(quasar.QBadge, {
        class: 'InvestCo',
        label: 'InvestCo'
      }); }
    }
  };

  var version = '0.0.1';

  function install (app) {
    app.component(Component.name, Component);

  }

  var VuePlugin = /*#__PURE__*/Object.freeze({
    __proto__: null,
    version: version,
    Component: Component,
    install: install
  });

  return VuePlugin;

}));
