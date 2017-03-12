var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

import { GeoObject as GeoObjectSymbol } from './util/symbols';
import { separateEvents, addEvent, removeEvent } from './util/events';

var func = React.PropTypes.func;


export var ObjectManager = function (_React$Component) {
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
    var _separateEvents = separateEvents(this.props),
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
      return addEvent(events[key], key, instance);
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

    var _separateEvents2 = separateEvents(prevProps),
        prevFilter = _separateEvents2.filter,
        prevEvents = _separateEvents2.events,
        prevFeatures = _separateEvents2.features,
        prevClusters = _separateEvents2.clusters,
        prevObjects = _separateEvents2.objects;

    var _separateEvents3 = separateEvents(newProps),
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
        removeEvent(prevEvents[key], key, instance);
        addEvent(newEvents[key], key, instance);
      }
    });
  };

  ObjectManager.prototype.unmount = function unmount() {
    var instance = this.state.instance;

    var _separateEvents4 = separateEvents(this.props),
        events = _separateEvents4.events,
        collection = _separateEvents4.collection;

    if (!instance) return;

    Object.keys(events).forEach(function (key) {
      return removeEvent(events[key], key, instance);
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
}(React.Component);
ObjectManager.propTypes = {
  instanceRef: func
};
ObjectManager.defaultProps = {
  instanceRef: Function.prototype
};
ObjectManager[GeoObjectSymbol] = true;