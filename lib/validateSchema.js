'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getComponentName = require('./_internal/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getValidationErrors = function getValidationErrors(schema, model) {
  return Object.keys(schema).reduce(function (acc, key) {
    var errors = [];
    var value = (0, _lodash2.default)(model, key);
    var rules = schema[key];

    if (rules.required && !value) {
      errors.push(key + ' is required');
    }
    if (rules.type && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rules.type) {
      errors.push(key + ' must be of type ' + rules.type + ', but got ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
    }
    if (rules.minLength) {
      if (!value || value.length < rules.minLength) {
        errors.push(key + ' must have at least ' + rules.minLength + ' characters');
      }
    }
    if (rules.maxLength) {
      if (value && value.length > rules.maxLength) {
        errors.push(key + ' must not have more than ' + rules.maxLength + ' characters');
      }
    }
    if (rules.test) {
      var error = void 0;
      rules.test(value, function (msg) {
        error = msg;
      });
      if (error) {
        errors.push(error);
      }
    }

    return (0, _objectAssign2.default)({}, acc, {
      isValid: !errors.length && acc.isValid,
      fields: Object.assign({}, acc.fields, _defineProperty({}, key, {
        isValid: !errors.length,
        errors: errors
      }))
    });
  }, { isValid: true, fields: {} });
};

var validateSchema = function validateSchema(schema) {
  return function (WrappedComponent) {
    var validated = function validated(props) {
      var validationErrors = getValidationErrors(schema, props.model);

      return _react2.default.createElement(WrappedComponent, (0, _objectAssign2.default)({}, props, {
        schema: validationErrors
      }));
    };
    validated.displayName = 'ValidateSchema(' + (0, _getComponentName2.default)(WrappedComponent) + ')';
    return (0, _hoistNonReactStatics2.default)(validated, WrappedComponent);
  };
};

exports.default = validateSchema;