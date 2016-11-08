'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

exports.default = {
  model: _react.PropTypes.object.isRequired,
  setModel: _react.PropTypes.func.isRequired,
  setProperty: _react.PropTypes.func.isRequired,
  bindInput: _react.PropTypes.func.isRequired,
  bindToChangeEvent: _react.PropTypes.func.isRequired
};