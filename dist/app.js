webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(109);


/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(75);
	
	var _reactHotLoader = __webpack_require__(196);
	
	var _test = __webpack_require__(110);
	
	var _test2 = _interopRequireDefault(_test);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(202);
	// import App from './provider';
	
	
	(0, _reactDom.render)(_react2.default.createElement(_test2.default, null), document.getElementById('root'));
	
	// if (module.hot) {
	//   module.hot.accept('./provider', () => {
	//     var NewApp = require('./provider').default;
	//     render(
	//       <AppContainer>
	//         <NewApp />
	//       </AppContainer>,
	//       document.getElementById('root')
	//     );
	//   });
	// }

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Testing = function (_Component) {
	  _inherits(Testing, _Component);
	
	  function Testing() {
	    _classCallCheck(this, Testing);
	
	    return _possibleConstructorReturn(this, (Testing.__proto__ || Object.getPrototypeOf(Testing)).apply(this, arguments));
	  }
	
	  _createClass(Testing, [{
	    key: 'render',
	    value: function render() {
	      debugger;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          null,
	          'Seconds  fdsfsfs-:'
	        )
	      );
	    }
	  }]);
	
	  return Testing;
	}(_react.Component);
	
	;
	
	exports.default = Testing;

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(199);


/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable global-require */
	
	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(198);
	} else {
	  module.exports = require('./AppContainer.dev');
	}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable react/prop-types */
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(6);
	var Component = React.Component;
	
	var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);
	
	  function AppContainer() {
	    _classCallCheck(this, AppContainer);
	
	    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
	  }
	
	  _createClass(AppContainer, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.component) {
	        return React.createElement(this.props.component, this.props.props);
	      }
	
	      return React.Children.only(this.props.children);
	    }
	  }]);
	
	  return AppContainer;
	}(Component);
	
	module.exports = AppContainer;

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var AppContainer = __webpack_require__(197);
	
	module.exports = function warnAboutIncorrectUsage(arg) {
	  if (this && this.callback) {
	    throw new Error('React Hot Loader: The Webpack loader is now exported separately. ' + 'If you use Babel, we recommend that you remove "react-hot-loader" ' + 'from the "loaders" section of your Webpack configuration altogether, ' + 'and instead add "react-hot-loader/babel" to the "plugins" section ' + 'of your .babelrc file. ' + 'If you prefer not to use Babel, replace "react-hot-loader" or ' + '"react-hot" with "react-hot-loader/webpack" in the "loaders" section ' + 'of your Webpack configuration.');
	  } else if (arg && arg.types && arg.types.IfStatement) {
	    throw new Error('React Hot Loader: The Babel plugin is exported separately. ' + 'Replace "react-hot-loader" with "react-hot-loader/babel" ' + 'in the "plugins" section of your .babelrc file. ' + 'While we recommend the above, if you prefer not to use Babel, ' + 'you may remove "react-hot-loader" from the "plugins" section of ' + 'your .babelrc file altogether, and instead add ' + '"react-hot-loader/webpack" to the "loaders" section of your Webpack ' + 'configuration.');
	  } else {
	    throw new Error('React Hot Loader does not have a default export. ' + 'If you use the import statement, make sure to include the ' + 'curly braces: import { AppContainer } from "react-hot-loader". ' + 'If you use CommonJS, make sure to read the named export: ' + 'require("react-hot-loader").AppContainer.');
	  }
	};
	
	module.exports.AppContainer = AppContainer;

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable global-require */
	
	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(201);
	} else {
	  module.exports = require('./patch.dev');
	}

/***/ },

/***/ 201:
/***/ function(module, exports) {

	/* noop */
	"use strict";

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(200);


/***/ }

});
//# sourceMappingURL=app.js.map