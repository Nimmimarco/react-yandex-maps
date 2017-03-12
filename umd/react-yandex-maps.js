(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactYandexMaps"] = factory(require("react"));
	else
		root["ReactYandexMaps"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var GeoObject = exports.GeoObject = Symbol.for('GeoObject');
var Control = exports.Control = Symbol.for('Control');
var Popup = exports.Popup = Symbol.for('Popup');
var Map = exports.Map = Symbol.for('Map');

exports.default = {
  GeoObject: GeoObject,
  Control: Control,
  Popup: Popup,
  Map: Map
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.separateEvents = separateEvents;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
var events = exports.events = {
  onBallonClose: 'balloonclose',
  onBalloonOpen: 'balloonopen',
  onBeforeDrag: 'beforedrag',
  onBeforeDragStart: 'beforedragstart',
  onClick: 'click',
  onContextMenu: 'contextmenu',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onEditorStateChange: 'editorstatechange',
  onGeometryChange: 'geometrychange',
  onHintClose: 'hintclose',
  onHintOpen: 'hintopen',
  onMapChange: 'mapchange',
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseUp: 'mouseup',
  onMultiTouchEnd: 'multitouchend',
  onMultiTouchMove: 'multitouchmove',
  onMultiTouchStart: 'multitouchstart',
  onOptionsChange: 'optionschange',
  onOverlayChange: 'overlaychange',
  onParentChange: 'parentchange',
  onPropertiesChange: 'propertieschange',
  onWheel: 'wheel',
  onBalloonClose: 'balloonclose',
  onActionBegin: 'actionbegin',
  onActionBreak: 'actionbreak',
  onActionEnd: 'actionend',
  onActionTick: 'actiontick',
  onActionTickComplete: 'actiontickcomplete',
  onBoundsChange: 'boundschange',
  onDestroy: 'destroy',
  onMarginChange: 'marginchange',
  onSizeChange: 'sizechange',
  onTypeChange: 'typechange',
  onDeselect: 'deselect',
  onDisable: 'disable',
  onEnable: 'enable',
  onPress: 'press',
  onSelect: 'select',
  onFullscreenEnter: 'fullscreenenter',
  onFullscreenExit: 'fullscreenexit',
  onLocationChange: 'locationchange',
  onClear: 'clear',
  onError: 'error',
  onLoad: 'load',
  onResultSelect: 'resultselect',
  onResultShow: 'resultshow',
  onSubmit: 'submit',
  onCollapse: 'collapse',
  onExpand: 'expand',
  onHideTraffic: 'hidetraffic',
  onProviderKeyChange: 'providerkeychange',
  onShowTraffic: 'showtraffic',
  onAdd: 'add',
  onRemove: 'remove'
};

function separateEvents(props) {
  var eventsRegExp = /^on[A-Z]/;
  var events = {};
  var rest = {};

  Object.keys(props).forEach(function (key) {
    if (eventsRegExp.test(key)) {
      events[key] = props[key];
    } else {
      rest[key] = props[key];
    }
  });

  return _extends({ events: events }, rest);
}

function addEvent(event, key, instance) {
  if (events[key] && typeof event === 'function') {
    instance.events.add(events[key], event);
  }
}

function removeEvent(event, key, instance) {
  if (events[key] && typeof event === 'function') {
    instance.events.remove(events[key], event);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Control = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _symbols = __webpack_require__(1);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var func = _react2.default.PropTypes.func;

var Control = exports.Control = function (_React$Component) {
  _inherits(Control, _React$Component);

  function Control() {
    var _temp, _this, _ret;

    _classCallCheck(this, Control);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { instance: null }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Control.prototype.mount = function mount() {
    var _separateEvents = (0, _events.separateEvents)(this.props),
        ymaps = _separateEvents.ymaps,
        type = _separateEvents.type,
        collection = _separateEvents.collection,
        data = _separateEvents.data,
        options = _separateEvents.options,
        state = _separateEvents.state,
        events = _separateEvents.events;

    var instance = new ymaps.control[type]({ data: data, options: options, state: state });

    Object.keys(events).forEach(function (key) {
      return (0, _events.addEvent)(events[key], key, instance);
    });
    collection.add(instance);

    this.setState({ instance: instance });
  };

  Control.prototype.update = function update(instance) {
    var prevProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _separateEvents2 = (0, _events.separateEvents)(prevProps),
        prevData = _separateEvents2.data,
        prevOptions = _separateEvents2.options,
        prevState = _separateEvents2.state,
        prevEvents = _separateEvents2.events;

    var _separateEvents3 = (0, _events.separateEvents)(this.props),
        data = _separateEvents3.data,
        options = _separateEvents3.options,
        state = _separateEvents3.state,
        events = _separateEvents3.events;

    if (data !== prevData) {
      instance.data.set(data);
    }

    if (options !== prevOptions) {
      instance.options.set(options);
    }

    if (state !== prevState) {
      instance.state.set(state);
    }

    this.updateEvents(instance, prevEvents, events);
  };

  Control.prototype.updateEvents = function updateEvents(instance, prevEvents, newEvents) {
    var mergedEvents = _extends({}, prevEvents, newEvents);

    Object.keys(mergedEvents).forEach(function (key) {
      if (prevEvents[key] !== newEvents[key]) {
        (0, _events.removeEvent)(prevEvents[key], key, instance);
        (0, _events.addEvent)(newEvents[key], key, instance);
      }
    });
  };

  Control.prototype.unmount = function unmount() {
    var instance = this.state.instance;

    var _separateEvents4 = (0, _events.separateEvents)(this.props),
        events = _separateEvents4.events,
        collection = _separateEvents4.collection;

    if (!instance) return;

    Object.keys(events).forEach(function (key) {
      return (0, _events.removeEvent)(events[key], key, instance);
    });
    collection.remove(instance);
  };

  Control.prototype.componentDidMount = function componentDidMount() {
    var ymaps = this.props.ymaps;

    if (ymaps) this.mount();
  };

  Control.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var instance = this.state.instance;

    if (instance) this.update(instance, this.props, newProps);
  };

  Control.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var instance = this.state.instance;
    var instanceRef = this.props.instanceRef;


    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance);
      } else {
        instanceRef(null);
      }
    }
  };

  Control.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmount();
  };

  Control.prototype.render = function render() {
    return null;
  };

  return Control;
}(_react2.default.Component);

Control.defaultProps = {
  instanceRef: Function.prototype
};
Control[_symbols.Control] = true;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.GeoObject = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _symbols = __webpack_require__(1);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    object = _React$PropTypes.object,
    shape = _React$PropTypes.shape,
    oneOf = _React$PropTypes.oneOf,
    oneOfType = _React$PropTypes.oneOfType,
    number = _React$PropTypes.number,
    arrayOf = _React$PropTypes.arrayOf,
    func = _React$PropTypes.func;

var GeoObject = exports.GeoObject = function (_React$Component) {
  _inherits(GeoObject, _React$Component);

  function GeoObject() {
    var _temp, _this, _ret;

    _classCallCheck(this, GeoObject);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { instance: null }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  GeoObject.prototype.mount = function mount() {
    var _separateEvents = (0, _events.separateEvents)(this.props),
        collection = _separateEvents.collection,
        ymaps = _separateEvents.ymaps,
        events = _separateEvents.events,
        geometry = _separateEvents.geometry,
        properties = _separateEvents.properties,
        options = _separateEvents.options;

    var instance = new ymaps.GeoObject({ geometry: geometry, properties: properties }, options);

    Object.keys(events).forEach(function (key) {
      return (0, _events.addEvent)(events[key], key, instance);
    });
    collection.add(instance);

    this.setState({ instance: instance });
  };

  GeoObject.prototype.update = function update(instance) {
    var prevProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _separateEvents2 = (0, _events.separateEvents)(prevProps),
        prevGeometry = _separateEvents2.geometry,
        prevProperties = _separateEvents2.properties,
        prevOptions = _separateEvents2.options,
        prevEvents = _separateEvents2.events;

    var _separateEvents3 = (0, _events.separateEvents)(newProps),
        geometry = _separateEvents3.geometry,
        properties = _separateEvents3.properties,
        options = _separateEvents3.options,
        events = _separateEvents3.events;

    if (geometry.coordinates !== prevGeometry.coordinates) {
      instance.geometry.setCoordinates(geometry.coordinates);
    }

    if (geometry.radius !== prevGeometry.radius) {
      instance.geometry.setRadius(geometry.radius);
    }

    if (properties !== prevProperties) {
      instance.properties.set(properties);
    }

    if (options !== prevOptions) {
      instance.options.set(options);
    }

    this.updateEvents(instance, prevEvents, events);
  };

  GeoObject.prototype.updateEvents = function updateEvents(instance, prevEvents, newEvents) {
    var mergedEvents = _extends({}, prevEvents, newEvents);

    Object.keys(mergedEvents).forEach(function (key) {
      if (prevEvents[key] !== newEvents[key]) {
        (0, _events.removeEvent)(prevEvents[key], key, instance);
        (0, _events.addEvent)(newEvents[key], key, instance);
      }
    });
  };

  GeoObject.prototype.unmount = function unmount() {
    var instance = this.state.instance;

    var _separateEvents4 = (0, _events.separateEvents)(this.props),
        events = _separateEvents4.events,
        collection = _separateEvents4.collection;

    if (!instance) return;

    Object.keys(events).forEach(function (key) {
      return (0, _events.removeEvent)(events[key], key, instance);
    });
    collection.remove(instance);
  };

  GeoObject.prototype.componentDidMount = function componentDidMount() {
    var ymaps = this.props.ymaps;

    if (ymaps) this.mount();
  };

  GeoObject.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var instance = this.state.instance;

    if (instance) this.update(instance, this.props, newProps);
  };

  GeoObject.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var instance = this.state.instance;
    var instanceRef = this.props.instanceRef;


    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance);
      } else {
        instanceRef(null);
      }
    }
  };

  GeoObject.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmount();
  };

  GeoObject.prototype.render = function render() {
    return null;
  };

  return GeoObject;
}(_react2.default.Component);

GeoObject.defaultProps = {
  instanceRef: Function.prototype
};
GeoObject[_symbols.GeoObject] = true;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Clusterer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _symbols = __webpack_require__(1);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var func = _react2.default.PropTypes.func;

var Clusterer = exports.Clusterer = function (_React$Component) {
  _inherits(Clusterer, _React$Component);

  function Clusterer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Clusterer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { instance: null }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Clusterer.prototype.mount = function mount() {
    var _separateEvents = (0, _events.separateEvents)(this.props),
        collection = _separateEvents.collection,
        ymaps = _separateEvents.ymaps,
        options = _separateEvents.options,
        events = _separateEvents.events;

    var instance = new ymaps.Clusterer(options);

    Object.keys(events).forEach(function (key) {
      return (0, _events.addEvent)(events[key], key, instance);
    });
    collection.add(instance);

    this.setState({ instance: instance });
  };

  Clusterer.prototype.update = function update(instance) {
    var prevProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _separateEvents2 = (0, _events.separateEvents)(prevProps),
        prevOptions = _separateEvents2.options,
        prevEvents = _separateEvents2.events;

    var _separateEvents3 = (0, _events.separateEvents)(this.props),
        options = _separateEvents3.options,
        events = _separateEvents3.events;

    if (options !== prevOptions) {
      instance.options.set(options);
    }

    this.updateEvents(instance, prevEvents, events);
  };

  Clusterer.prototype.updateEvents = function updateEvents(instance, prevEvents, newEvents) {
    var mergedEvents = _extends({}, prevEvents, newEvents);

    Object.keys(mergedEvents).forEach(function (key) {
      if (prevEvents[key] !== newEvents[key]) {
        (0, _events.removeEvent)(prevEvents[key], key, instance);
        (0, _events.addEvent)(newEvents[key], key, instance);
      }
    });
  };

  Clusterer.prototype.unmount = function unmount() {
    var instance = this.state.instance;

    var _separateEvents4 = (0, _events.separateEvents)(this.props),
        events = _separateEvents4.events,
        collection = _separateEvents4.collection;

    if (!instance) return;

    Object.keys(events).forEach(function (key) {
      return (0, _events.removeEvent)(events[key], key, instance);
    });
    collection.remove(instance);
  };

  Clusterer.prototype.renderGeoObject = function renderGeoObject(child) {
    var ymaps = this.context.ymaps;
    var collection = this.state.instance.geoObjects;


    return _react2.default.cloneElement(child, { ymaps: ymaps, collection: collection });
  };

  Clusterer.prototype.componentDidMount = function componentDidMount() {
    var ymaps = this.props.ymaps;

    if (ymaps) this.mount();
  };

  Clusterer.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var instance = this.state.instance;

    if (instance) this.update(instance, this.props, newProps);
  };

  Clusterer.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var instance = this.state.instance;
    var instanceRef = this.props.instanceRef;


    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance);
      } else {
        instanceRef(null);
      }
    }
  };

  Clusterer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmount();
  };

  Clusterer.prototype.render = function render() {
    return _react2.default.createElement(
      'noscript',
      null,
      this.children
    );
  };

  _createClass(Clusterer, [{
    key: 'children',
    get: function get() {
      var _this2 = this;

      var children = this.props.children;
      var instance = this.state.instance;


      if (!instance) return null;

      return _react2.default.Children.map(children, function (child) {
        !(child == null) ?  false ? (0, _invariant2.default)(false, child.type[_symbols.GeoObject], 'A <Clusterer> children should be <GeoObject> components') : (0, _invariant2.default)(false) : void 0;

        if (!child) return null;

        if (child.type[_symbols.GeoObject]) return _this2.renderGeoObject(child);
      });
    }
  }]);

  return Clusterer;
}(_react2.default.Component);

Clusterer.defaultProps = {
  instanceRef: Function.prototype
};
Clusterer[_symbols.GeoObject] = true;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Placemark = Placemark;
exports.Polyline = Polyline;
exports.Rectangle = Rectangle;
exports.Polygon = Polygon;
exports.Circle = Circle;
exports.Button = Button;
exports.FullscreenControl = FullscreenControl;
exports.GeolocationControl = GeolocationControl;
exports.RouteEditor = RouteEditor;
exports.RulerControl = RulerControl;
exports.SearchControl = SearchControl;
exports.TrafficControl = TrafficControl;
exports.TypeSelector = TypeSelector;
exports.ZoomControl = ZoomControl;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GeoObject = __webpack_require__(5);

var _Control = __webpack_require__(4);

var _symbols = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// --- GeoObjects

function Placemark(_ref) {
  var geometry = _ref.geometry,
      props = _objectWithoutProperties(_ref, ['geometry']);

  return _react2.default.createElement(_GeoObject.GeoObject, _extends({ geometry: _extends({ type: 'Point' }, geometry) }, props));
}

Placemark[_symbols.GeoObject] = true;

function Polyline(_ref2) {
  var geometry = _ref2.geometry,
      props = _objectWithoutProperties(_ref2, ['geometry']);

  return _react2.default.createElement(_GeoObject.GeoObject, _extends({ geometry: _extends({ type: 'LineString' }, geometry) }, props));
}

Polyline[_symbols.GeoObject] = true;

function Rectangle(_ref3) {
  var geometry = _ref3.geometry,
      props = _objectWithoutProperties(_ref3, ['geometry']);

  return _react2.default.createElement(_GeoObject.GeoObject, _extends({ geometry: _extends({ type: 'Rectangle' }, geometry) }, props));
}

Rectangle[_symbols.GeoObject] = true;

function Polygon(_ref4) {
  var geometry = _ref4.geometry,
      props = _objectWithoutProperties(_ref4, ['geometry']);

  return _react2.default.createElement(_GeoObject.GeoObject, _extends({ geometry: _extends({ type: 'Polygon' }, geometry) }, props));
}

Polygon[_symbols.GeoObject] = true;

function Circle(_ref5) {
  var geometry = _ref5.geometry,
      props = _objectWithoutProperties(_ref5, ['geometry']);

  return _react2.default.createElement(_GeoObject.GeoObject, _extends({ geometry: _extends({ type: 'Circle' }, geometry) }, props));
}

Circle[_symbols.GeoObject] = true;

// --- Controls

function Button(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'Button' }, props));
}

Button[_symbols.Control] = true;

function FullscreenControl(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'FullscreenControl' }, props));
}

FullscreenControl[_symbols.Control] = true;

function GeolocationControl(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'GeolocationControl' }, props));
}

GeolocationControl[_symbols.Control] = true;

function RouteEditor(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'RouteEditor' }, props));
}

RouteEditor[_symbols.Control] = true;

function RulerControl(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'RulerControl' }, props));
}

RulerControl[_symbols.Control] = true;

function SearchControl(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'SearchControl' }, props));
}

SearchControl[_symbols.Control] = true;

function TrafficControl(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'TrafficControl' }, props));
}

TrafficControl[_symbols.Control] = true;

function TypeSelector(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'TypeSelector' }, props));
}

TypeSelector[_symbols.Control] = true;

function ZoomControl(props) {
  return _react2.default.createElement(_Control.Control, _extends({ type: 'ZoomControl' }, props));
}

ZoomControl[_symbols.Control] = true;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Map = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _symbols = __webpack_require__(1);

var _symbols2 = _interopRequireDefault(_symbols);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    object = _React$PropTypes.object,
    oneOfType = _React$PropTypes.oneOfType,
    number = _React$PropTypes.number,
    string = _React$PropTypes.string,
    func = _React$PropTypes.func;

var Map = exports.Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.state = { instance: null };
    _this.getMapNode = _this.getMapNode.bind(_this);
    return _this;
  }

  Map.prototype.getMapNode = function getMapNode(ref) {
    this.mapNode = ref;
  };

  Map.prototype.mount = function mount() {
    var ymaps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.context.ymaps;

    var _separateEvents = (0, _events.separateEvents)(this.props),
        state = _separateEvents.state,
        options = _separateEvents.options,
        events = _separateEvents.events;

    var instance = new ymaps.Map(this.mapNode, state, options);

    Object.keys(events).forEach(function (key) {
      return (0, _events.addEvent)(events[key], key, instance);
    });
    this.setState({ instance: instance });
  };

  Map.prototype.unmount = function unmount() {
    var instance = this.state.instance;

    var _separateEvents2 = (0, _events.separateEvents)(this.props),
        events = _separateEvents2.events;

    if (!instance) return;

    Object.keys(events).forEach(function (key) {
      return (0, _events.removeEvent)(events[key], key, instance);
    });
    instance.destroy();
  };

  Map.prototype.update = function update(instance) {
    var prevProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _separateEvents3 = (0, _events.separateEvents)(prevProps),
        prevWidth = _separateEvents3.width,
        prevHeight = _separateEvents3.height,
        prevOptions = _separateEvents3.options,
        prevState = _separateEvents3.state,
        prevEvents = _separateEvents3.events;

    var _separateEvents4 = (0, _events.separateEvents)(newProps),
        width = _separateEvents4.width,
        height = _separateEvents4.height,
        options = _separateEvents4.options,
        state = _separateEvents4.state,
        events = _separateEvents4.events;

    if (prevWidth !== width || prevHeight !== height) {
      instance.container.fitToViewport();
    }

    if (prevState.type !== state.type) {
      instance.setType(state.type);
    }

    if (prevState.behaviors !== state.behaviors) {
      instance.behaviors.disable(prevState.behaviors || []);
      instance.behaviors.enable(state.behaviors || []);
    }

    if (prevState.zoom !== state.zoom) {
      instance.setZoom(state.zoom);
    }

    if (prevState.center !== state.center) {
      instance.setCenter(state.center);
    }

    if (state.bounds && prevState.bounds !== state.bounds) {
      instance.setBounds(state.bounds);
    }

    if (prevOptions !== options) {
      instance.options.set(options);
    }

    this.updateEvents(instance, prevEvents, events);
  };

  Map.prototype.updateEvents = function updateEvents(instance, prevEvents, newEvents) {
    var mergedEvents = _extends({}, prevEvents, newEvents);

    Object.keys(mergedEvents).forEach(function (key) {
      if (prevEvents[key] !== newEvents[key]) {
        (0, _events.removeEvent)(prevEvents[key], key, instance);
        (0, _events.addEvent)(newEvents[key], key, instance);
      }
    });
  };

  Map.prototype.renderGeoObject = function renderGeoObject(child) {
    var ymaps = this.context.ymaps;
    var collection = this.state.instance.geoObjects;


    return _react2.default.cloneElement(child, { ymaps: ymaps, collection: collection });
  };

  Map.prototype.renderControl = function renderControl(child) {
    var ymaps = this.context.ymaps;
    var collection = this.state.instance.controls;


    return _react2.default.cloneElement(child, { ymaps: ymaps, collection: collection });
  };

  Map.prototype.componentDidMount = function componentDidMount() {
    var ymaps = this.context.ymaps;

    if (ymaps) this.mount();
  };

  Map.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var ymaps = this.context.ymaps;
    var instance = this.state.instance;
    var instanceRef = this.props.instanceRef;


    if (!instance && ymaps) this.mount();
    if (instance) this.update(instance, prevProps, this.props);

    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance);
      } else {
        instanceRef(null);
      }
    }
  };

  Map.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmount();
  };

  Map.prototype.render = function render() {
    var _props = this.props,
        width = _props.width,
        height = _props.height;


    return this.context.ymaps && _react2.default.createElement(
      'div',
      { style: { width: '100%', height: '100%' } },
      this.children,
      _react2.default.createElement('div', { style: { width: width, height: height }, ref: this.getMapNode })
    );
  };

  _createClass(Map, [{
    key: 'children',
    get: function get() {
      var _this2 = this;

      var children = this.props.children;
      var instance = this.state.instance;


      if (!instance) return null;

      return _react2.default.Children.map(children, function (child) {
        !(child == null || child.type[_symbols2.default.GeoObject] || child.type[_symbols2.default.Control]) ?  false ? (0, _invariant2.default)(false, 'A <Map> children should be <GeoObject> or <Control> components') : (0, _invariant2.default)(false) : void 0;

        if (!child) return null;

        if (child.type[_symbols2.default.GeoObject]) return _this2.renderGeoObject(child);
        if (child.type[_symbols2.default.Control]) return _this2.renderControl(child);
      });
    }
  }]);

  return Map;
}(_react2.default.Component);

Map.defaultProps = {
  state: {
    center: [0, 0],
    zoom: 1
  },
  width: 400,
  height: 315,
  instanceRef: Function.prototype
};
Map.contextTypes = {
  ymaps: object
};
Map[_symbols2.default.Map] = true;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ObjectManager = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _symbols = __webpack_require__(1);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var func = _react2.default.PropTypes.func;

var ObjectManager = exports.ObjectManager = function (_React$Component) {
  _inherits(ObjectManager, _React$Component);

  function ObjectManager() {
    var _temp, _this, _ret;

    _classCallCheck(this, ObjectManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { instance: null }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ObjectManager.prototype.mount = function mount() {
    var _separateEvents = (0, _events.separateEvents)(this.props),
        collection = _separateEvents.collection,
        ymaps = _separateEvents.ymaps,
        features = _separateEvents.features,
        filter = _separateEvents.filter,
        options = _separateEvents.options,
        clusters = _separateEvents.clusters,
        objects = _separateEvents.objects,
        events = _separateEvents.events;

    var instance = new ymaps.ObjectManager(options);

    Object.keys(events).forEach(function (key) {
      return (0, _events.addEvent)(events[key], key, instance);
    });
    collection.add(instance);

    instance.add(features || []);
    instance.setFilter(filter);
    instance.clusters.options.set(clusters || {});
    instance.objects.options.set(objects || {});

    this.setState({ instance: instance });
  };

  ObjectManager.prototype.update = function update(instance) {
    var prevProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _separateEvents2 = (0, _events.separateEvents)(prevProps),
        prevFilter = _separateEvents2.filter,
        prevEvents = _separateEvents2.events,
        prevFeatures = _separateEvents2.features,
        prevClusters = _separateEvents2.clusters,
        prevObjects = _separateEvents2.objects;

    var _separateEvents3 = (0, _events.separateEvents)(newProps),
        filter = _separateEvents3.filter,
        events = _separateEvents3.events,
        features = _separateEvents3.features,
        clusters = _separateEvents3.clusters,
        objects = _separateEvents3.objects;

    if (filter !== prevFilter) {
      instance.setFilter(filter);
    }

    if (clusters !== prevClusters) {
      instance.clusters.options.set(clusters || {});
    }

    if (objects !== prevObjects) {
      instance.objects.options.set(objects || {});
    }

    if (features !== prevFeatures) {
      this.updateFeatures(instance, prevFeatures || [], features || []);
    }

    this.updateEvents(instance, prevEvents, events);
  };

  ObjectManager.prototype.updateFeatures = function updateFeatures(instance, prevFeatures, features) {
    var prevIds = prevFeatures.map(function (feature) {
      return feature.id;
    });
    var newIds = features.map(function (feature) {
      return feature.id;
    });

    var toRemove = prevFeatures.filter(function (feature) {
      return newIds.indexOf(feature.id) === -1;
    });

    var toAdd = features.filter(function (feature) {
      return prevIds.indexOf(feature.id) === -1;
    });

    if (toRemove.length > 0) instance.remove(toRemove);
    if (toAdd.length > 0) instance.add(toAdd);
  };

  ObjectManager.prototype.updateEvents = function updateEvents(instance, prevEvents, newEvents) {
    var mergedEvents = _extends({}, prevEvents, newEvents);

    Object.keys(mergedEvents).forEach(function (key) {
      if (prevEvents[key] !== newEvents[key]) {
        (0, _events.removeEvent)(prevEvents[key], key, instance);
        (0, _events.addEvent)(newEvents[key], key, instance);
      }
    });
  };

  ObjectManager.prototype.unmount = function unmount() {
    var instance = this.state.instance;

    var _separateEvents4 = (0, _events.separateEvents)(this.props),
        events = _separateEvents4.events,
        collection = _separateEvents4.collection;

    if (!instance) return;

    Object.keys(events).forEach(function (key) {
      return (0, _events.removeEvent)(events[key], key, instance);
    });
    collection.remove(instance);
  };

  ObjectManager.prototype.componentDidMount = function componentDidMount() {
    var ymaps = this.props.ymaps;

    if (ymaps) this.mount();
  };

  ObjectManager.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var instance = this.state.instance;

    if (instance) this.update(instance, this.props, newProps);
  };

  ObjectManager.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var instance = this.state.instance;
    var instanceRef = this.props.instanceRef;


    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance);
      } else {
        instanceRef(null);
      }
    }
  };

  ObjectManager.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmount();
  };

  ObjectManager.prototype.render = function render() {
    return null;
  };

  return ObjectManager;
}(_react2.default.Component);

ObjectManager.defaultProps = {
  instanceRef: Function.prototype
};
ObjectManager[_symbols.GeoObject] = true;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.YMaps = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _api = __webpack_require__(11);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    node = _React$PropTypes.node,
    bool = _React$PropTypes.bool,
    shape = _React$PropTypes.shape,
    string = _React$PropTypes.string,
    oneOf = _React$PropTypes.oneOf,
    object = _React$PropTypes.object,
    func = _React$PropTypes.func;

var YMaps = exports.YMaps = function (_React$Component) {
  _inherits(YMaps, _React$Component);

  YMaps.prototype.getChildContext = function getChildContext() {
    return { ymaps: this.state.ymaps };
  };

  function YMaps() {
    _classCallCheck(this, YMaps);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.state = { ymaps: null };
    return _this;
  }

  YMaps.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _props = this.props,
        query = _props.query,
        version = _props.version,
        enterprise = _props.enterprise,
        onApiAvaliable = _props.onApiAvaliable;


    _api2.default.get(query, version, enterprise).then(function (ymaps) {
      onApiAvaliable(ymaps);
      _this2.setState({ ymaps: ymaps });
    });
  };

  YMaps.prototype.componentWillMount = function componentWillMount() {
    var children = this.props.children;


    !(children == null || _react2.default.Children.count(children) === 1) ?  false ? (0, _invariant2.default)(false, 'A <YMaps> may have only one child element') : (0, _invariant2.default)(false) : void 0;
  };

  YMaps.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return YMaps;
}(_react2.default.Component);

YMaps.defaultProps = {
  enterprise: false,
  onApiAvaliable: Function.prototype,
  version: '2.1'
};
YMaps.childContextTypes = {
  ymaps: object
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var onload = '__react-yandex-maps-onload';
var onerror = '__react-yandex-maps-onerror';

var callbacks = { onload: onload, onerror: onerror };

var mode =  false ? 'debug' : 'release';
var ns = '__react-yandex-maps-api';
var lang = 'ru_RU';

function fetchScript(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    script.async = 'async';

    document.head.appendChild(script);
  });
}

var YandexMapsApi = function () {
  function YandexMapsApi() {
    _classCallCheck(this, YandexMapsApi);

    this.api = global[ns] || null;
    this.promise = null;
  }

  YandexMapsApi.prototype.getBaseUrl = function getBaseUrl() {
    var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2.1';
    var enterprise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var protocol = 'https:';
    var host = enterprise ? 'enterprise.api-maps.yandex.ru' : 'api-maps.yandex.ru';

    return protocol + '//' + host + '/' + version + '/';
  };

  YandexMapsApi.prototype.getQuery = function getQuery(query) {
    var options = _extends({ ns: ns, lang: lang, mode: mode }, query, callbacks);

    return Object.keys(options).reduce(function (prev, key) {
      if (typeof options[key] === 'undefined') return prev;
      return prev.concat(key + '=' + options[key]);
    }, []).join('&');
  };

  YandexMapsApi.prototype.load = function load(query, version, enterprise) {
    var _this = this;

    // TODO: Somehow separate what options are passed
    //       and provide differet api instances?
    //
    //       Is this behaviour needed?
    if (this.promise) return this.promise;

    this.promise = new Promise(function (resolve, reject) {
      var baseUrl = _this.getBaseUrl(version, enterprise);
      var urlQuery = _this.getQuery(query);

      global[onload] = function (api) {
        resolve(api);
        global[onload] = null;
      };

      global[onerror] = function (error) {
        reject(error);
        global[onerror] = null;
      };

      fetchScript(baseUrl + '?' + urlQuery).catch(reject);
    });

    return this.promise;
  };

  YandexMapsApi.prototype.get = function get(query, version, enterprise) {
    var _this2 = this;

    // TODO: If yandex maps are loaded already, provide a way to use it
    if (this.api) Promise.resolve(this.api);

    return this.load(query, version, enterprise).then(function (api) {
      return _this2.api = api;
    });
  };

  return YandexMapsApi;
}();

exports.default = new YandexMapsApi();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _YMaps = __webpack_require__(10);

Object.defineProperty(exports, 'YMaps', {
  enumerable: true,
  get: function get() {
    return _YMaps.YMaps;
  }
});

var _Map = __webpack_require__(8);

Object.defineProperty(exports, 'Map', {
  enumerable: true,
  get: function get() {
    return _Map.Map;
  }
});

var _GeoObject = __webpack_require__(5);

Object.defineProperty(exports, 'GeoObject', {
  enumerable: true,
  get: function get() {
    return _GeoObject.GeoObject;
  }
});

var _ObjectManager = __webpack_require__(9);

Object.defineProperty(exports, 'ObjectManager', {
  enumerable: true,
  get: function get() {
    return _ObjectManager.ObjectManager;
  }
});

var _Clusterer = __webpack_require__(6);

Object.defineProperty(exports, 'Clusterer', {
  enumerable: true,
  get: function get() {
    return _Clusterer.Clusterer;
  }
});

var _Control = __webpack_require__(4);

Object.defineProperty(exports, 'Control', {
  enumerable: true,
  get: function get() {
    return _Control.Control;
  }
});

var _Helpers = __webpack_require__(7);

Object.defineProperty(exports, 'Placemark', {
  enumerable: true,
  get: function get() {
    return _Helpers.Placemark;
  }
});
Object.defineProperty(exports, 'Polyline', {
  enumerable: true,
  get: function get() {
    return _Helpers.Polyline;
  }
});
Object.defineProperty(exports, 'Rectangle', {
  enumerable: true,
  get: function get() {
    return _Helpers.Rectangle;
  }
});
Object.defineProperty(exports, 'Polygon', {
  enumerable: true,
  get: function get() {
    return _Helpers.Polygon;
  }
});
Object.defineProperty(exports, 'Circle', {
  enumerable: true,
  get: function get() {
    return _Helpers.Circle;
  }
});
Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _Helpers.Button;
  }
});
Object.defineProperty(exports, 'FullscreenControl', {
  enumerable: true,
  get: function get() {
    return _Helpers.FullscreenControl;
  }
});
Object.defineProperty(exports, 'GeolocationControl', {
  enumerable: true,
  get: function get() {
    return _Helpers.GeolocationControl;
  }
});
Object.defineProperty(exports, 'RouteEditor', {
  enumerable: true,
  get: function get() {
    return _Helpers.RouteEditor;
  }
});
Object.defineProperty(exports, 'RulerControl', {
  enumerable: true,
  get: function get() {
    return _Helpers.RulerControl;
  }
});
Object.defineProperty(exports, 'SearchControl', {
  enumerable: true,
  get: function get() {
    return _Helpers.SearchControl;
  }
});
Object.defineProperty(exports, 'TrafficControl', {
  enumerable: true,
  get: function get() {
    return _Helpers.TrafficControl;
  }
});
Object.defineProperty(exports, 'TypeSelector', {
  enumerable: true,
  get: function get() {
    return _Helpers.TypeSelector;
  }
});
Object.defineProperty(exports, 'ZoomControl', {
  enumerable: true,
  get: function get() {
    return _Helpers.ZoomControl;
  }
});

/***/ })
/******/ ]);
});