"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function compose() {
  for (var _len = arguments.length, _fns = Array(_len), _key = 0; _key < _len; _key++) {
    _fns[_key] = arguments[_key];
  }

  return function () {
    var _fns$reverse = _fns.reverse(),
        _fns$reverse2 = _toArray(_fns$reverse),
        fn = _fns$reverse2[0],
        fns = _fns$reverse2.slice(1);

    return fns.reduce(function (acc, f) {
      return f(acc);
    }, fn.apply(undefined, arguments));
  };
}