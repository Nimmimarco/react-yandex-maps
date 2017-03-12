'use strict';

exports.__esModule = true;
exports.Clusterer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _symbols = require('./util/symbols');

var _events = require('./util/events');

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
        (0, _invariant2.default)(child == null, child.type[_symbols.GeoObject], 'A <Clusterer> children should be <GeoObject> components');

        if (!child) return null;

        if (child.type[_symbols.GeoObject]) return _this2.renderGeoObject(child);
      });
    }
  }]);

  return Clusterer;
}(_react2.default.Component);

Clusterer.propTypes = {
  instanceRef: func
};
Clusterer.defaultProps = {
  instanceRef: Function.prototype
};
Clusterer[_symbols.GeoObject] = true;