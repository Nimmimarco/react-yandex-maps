'use strict';

exports.__esModule = true;
exports.Control = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _symbols = require('./util/symbols');

var _events = require('./util/events');

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

Control.propTypes = {
  instanceRef: func
};
Control.defaultProps = {
  instanceRef: Function.prototype
};
Control[_symbols.Control] = true;