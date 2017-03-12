var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { GeoObject } from './GeoObject';
import { Control } from './Control';

import { GeoObject as GeoObjectSymbol, Control as ControlSymbol } from './util/symbols';

// --- GeoObjects

export function Placemark(_ref) {
  var geometry = _ref.geometry,
      props = _objectWithoutProperties(_ref, ['geometry']);

  return React.createElement(GeoObject, _extends({ geometry: _extends({ type: 'Point' }, geometry) }, props));
}

Placemark[GeoObjectSymbol] = true;

export function Polyline(_ref2) {
  var geometry = _ref2.geometry,
      props = _objectWithoutProperties(_ref2, ['geometry']);

  return React.createElement(GeoObject, _extends({ geometry: _extends({ type: 'LineString' }, geometry) }, props));
}

Polyline[GeoObjectSymbol] = true;

export function Rectangle(_ref3) {
  var geometry = _ref3.geometry,
      props = _objectWithoutProperties(_ref3, ['geometry']);

  return React.createElement(GeoObject, _extends({ geometry: _extends({ type: 'Rectangle' }, geometry) }, props));
}

Rectangle[GeoObjectSymbol] = true;

export function Polygon(_ref4) {
  var geometry = _ref4.geometry,
      props = _objectWithoutProperties(_ref4, ['geometry']);

  return React.createElement(GeoObject, _extends({ geometry: _extends({ type: 'Polygon' }, geometry) }, props));
}

Polygon[GeoObjectSymbol] = true;

export function Circle(_ref5) {
  var geometry = _ref5.geometry,
      props = _objectWithoutProperties(_ref5, ['geometry']);

  return React.createElement(GeoObject, _extends({ geometry: _extends({ type: 'Circle' }, geometry) }, props));
}

Circle[GeoObjectSymbol] = true;

// --- Controls

export function Button(props) {
  return React.createElement(Control, _extends({ type: 'Button' }, props));
}

Button[ControlSymbol] = true;

export function FullscreenControl(props) {
  return React.createElement(Control, _extends({ type: 'FullscreenControl' }, props));
}

FullscreenControl[ControlSymbol] = true;

export function GeolocationControl(props) {
  return React.createElement(Control, _extends({ type: 'GeolocationControl' }, props));
}

GeolocationControl[ControlSymbol] = true;

export function RouteEditor(props) {
  return React.createElement(Control, _extends({ type: 'RouteEditor' }, props));
}

RouteEditor[ControlSymbol] = true;

export function RulerControl(props) {
  return React.createElement(Control, _extends({ type: 'RulerControl' }, props));
}

RulerControl[ControlSymbol] = true;

export function SearchControl(props) {
  return React.createElement(Control, _extends({ type: 'SearchControl' }, props));
}

SearchControl[ControlSymbol] = true;

export function TrafficControl(props) {
  return React.createElement(Control, _extends({ type: 'TrafficControl' }, props));
}

TrafficControl[ControlSymbol] = true;

export function TypeSelector(props) {
  return React.createElement(Control, _extends({ type: 'TypeSelector' }, props));
}

TypeSelector[ControlSymbol] = true;

export function ZoomControl(props) {
  return React.createElement(Control, _extends({ type: 'ZoomControl' }, props));
}

ZoomControl[ControlSymbol] = true;