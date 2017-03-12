var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

import invariant from 'invariant';

import Symbols from './util/symbols';
import { separateEvents, addEvent, removeEvent } from './util/events';

var _React$PropTypes = React.PropTypes,
    object = _React$PropTypes.object,
    oneOfType = _React$PropTypes.oneOfType,
    number = _React$PropTypes.number,
    string = _React$PropTypes.string,
    func = _React$PropTypes.func;


export var Map = function (_React$Component) {
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

    var _separateEvents = separateEvents(this.props),
        state = _separateEvents.state,
        options = _separateEvents.options,
        events = _separateEvents.events;

    var instance = new ymaps.Map(this.mapNode, state, options);

    Object.keys(events).forEach(function (key) {
      return addEvent(events[key], key, instance);
    });
    this.setState({ instance: instance });
  };

  Map.prototype.unmount = function unmount() {
    var instance = this.state.instance;

    var _separateEvents2 = separateEvents(this.props),
        events = _separateEvents2.events;

    if (!instance) return;

    Object.keys(events).forEach(function (key) {
      return removeEvent(events[key], key, instance);
    });
    instance.destroy();
  };

  Map.prototype.update = function update(instance) {
    var prevProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _separateEvents3 = separateEvents(prevProps),
        prevWidth = _separateEvents3.width,
        prevHeight = _separateEvents3.height,
        prevOptions = _separateEvents3.options,
        prevState = _separateEvents3.state,
        prevEvents = _separateEvents3.events;

    var _separateEvents4 = separateEvents(newProps),
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
        removeEvent(prevEvents[key], key, instance);
        addEvent(newEvents[key], key, instance);
      }
    });
  };

  Map.prototype.renderGeoObject = function renderGeoObject(child) {
    var ymaps = this.context.ymaps;
    var collection = this.state.instance.geoObjects;


    return React.cloneElement(child, { ymaps: ymaps, collection: collection });
  };

  Map.prototype.renderControl = function renderControl(child) {
    var ymaps = this.context.ymaps;
    var collection = this.state.instance.controls;


    return React.cloneElement(child, { ymaps: ymaps, collection: collection });
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


    return this.context.ymaps && React.createElement(
      'div',
      { style: { width: '100%', height: '100%' } },
      this.children,
      React.createElement('div', { style: { width: width, height: height }, ref: this.getMapNode })
    );
  };

  _createClass(Map, [{
    key: 'children',
    get: function get() {
      var _this2 = this;

      var children = this.props.children;
      var instance = this.state.instance;


      if (!instance) return null;

      return React.Children.map(children, function (child) {
        invariant(child == null || child.type[Symbols.GeoObject] || child.type[Symbols.Control], 'A <Map> children should be <GeoObject> or <Control> components');

        if (!child) return null;

        if (child.type[Symbols.GeoObject]) return _this2.renderGeoObject(child);
        if (child.type[Symbols.Control]) return _this2.renderControl(child);
      });
    }
  }]);

  return Map;
}(React.Component);
Map.propTypes = {
  state: object,
  options: object,
  width: oneOfType([number, string]),
  height: oneOfType([number, string]),
  instanceRef: func
};
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
Map[Symbols.Map] = true;