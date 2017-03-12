'use strict';

exports.__esModule = true;
exports.YMaps = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _api = require('./util/api');

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


    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <YMaps> may have only one child element');
  };

  YMaps.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return YMaps;
}(_react2.default.Component);

YMaps.propTypes = {
  children: node,
  onApiAvaliable: func,

  enterprise: bool,
  version: oneOf(['1.0', '1.1', '2.0', '2.1']),

  query: shape({
    lang: string,
    apiKey: string,
    coordorder: oneOf(['latlong', 'longlat']),
    load: string,
    mode: oneOf(['debug', 'release']),
    csp: bool,
    ns: string
  })
};
YMaps.defaultProps = {
  enterprise: false,
  onApiAvaliable: Function.prototype,
  version: '2.1'
};
YMaps.childContextTypes = {
  ymaps: object
};