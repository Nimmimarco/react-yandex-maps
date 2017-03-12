'use strict';

exports.__esModule = true;
exports.GeoObject = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _symbols = require('./util/symbols');

var _events = require('./util/events');

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

GeoObject.propTypes = {
  geometry: shape({
    type: oneOf(['Point', 'LineString', 'Rectangle', 'Polygon', 'Circle']).isRequired,
    coordinates: oneOfType([arrayOf(number), arrayOf(arrayOf(number)), arrayOf(arrayOf(arrayOf(number)))]).isRequired,
    radius: number
  }),

  properties: object,
  options: object,

  collection: object,
  ymaps: object,

  instanceRef: func
};
GeoObject.defaultProps = {
  instanceRef: Function.prototype
};
GeoObject[_symbols.GeoObject] = true;