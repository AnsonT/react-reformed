'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRequired = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getComponentName = require('./_internal/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getValidationErrors = function getValidationErrors(rules, model) {
  return rules.reduce(function (errors, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        rule = _ref2[0],
        err = _ref2[1];

    return !rule(model) ? errors.concat(typeof err === 'function' ? err(model) : err) : errors;
  }, []);
};

var validate = function validate(rules) {
  return function (WrappedComponent) {
    var validated = function validated(props) {
      var validationErrors = getValidationErrors(rules, props.model);

      return _react2.default.createElement(WrappedComponent, (0, _objectAssign2.default)({}, props, {
        isValid: !validationErrors.length,
        validationErrors: validationErrors
      }));
    };
    validated.displayName = 'Validate(' + (0, _getComponentName2.default)(WrappedComponent) + ')';
    return (0, _hoistNonReactStatics2.default)(validated, WrappedComponent);
  };
};

var isRequired = exports.isRequired = function isRequired(prop) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prop + ' is a required field';
  return [function (model) {
    return !!model[prop];
  }, message];
};

exports.default = validate;