'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var onload = '__react-yandex-maps-onload';
var onerror = '__react-yandex-maps-onerror';

var callbacks = { onload: onload, onerror: onerror };

var mode = process.env.NODE_ENV === 'development' ? 'debug' : 'release';
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