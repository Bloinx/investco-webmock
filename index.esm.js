/*!
 * quasar-ui-investco v0.0.1
 * (c) 2025 Julio Vinachi <julio899@gmail.com>
 * Released under the MIT License.
 */
import{h}from"vue";import{QBadge}from"quasar";var Component={name:"InvestCo",setup:function(){return function(){return h(QBadge,{class:"InvestCo",label:"InvestCo"})}}},version="0.0.1";function install(n){n.component(Component.name,Component)}var VuePlugin=Object.freeze({__proto__:null,version:version,Component:Component,install:install});export{Component,VuePlugin as default,install,version};