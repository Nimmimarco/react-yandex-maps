'use strict';

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GeoObject = require('./GeoObject');

var _Control = require('./Control');

var _symbols = require('./util/symbols');

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