webpackJsonp([1],{113:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(6),l=r(f),p=n(46),y=(c=(0,p.inject)("store"),c(a=(0,p.observer)(a=function(e){function t(){var e,n,r,i;o(this,t);for(var c=arguments.length,a=Array(c),s=0;s<c;s++)a[s]=arguments[s];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.onReset=function(){r.props.store.asycn.resetTimer()},i=n,u(r,i)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props.store.asycn;return l.default.createElement("div",null,l.default.createElement("button",{onClick:this.onReset},"Seconds: test-dingxue ",e.timer))}}]),t}(f.Component))||a)||a);y.propTypes={store:l.default.PropTypes.object.isRequired},t.default=y}});
//# sourceMappingURL=index.5b5f5beb3b35a24f95a0.js.map