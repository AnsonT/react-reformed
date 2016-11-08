'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getComponentName = require('./_internal/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var syncWith = function syncWith(key, get, set) {
  return function (WrappedComponent) {
    var SyncedComponent = function (_React$Component) {
      _inherits(SyncedComponent, _React$Component);

      function SyncedComponent() {
        _classCallCheck(this, SyncedComponent);

        return _possibleConstructorReturn(this, (SyncedComponent.__proto__ || Object.getPrototypeOf(SyncedComponent)).apply(this, arguments));
      }

      _createClass(SyncedComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var fromStorage = get(key, this.props);
          if (fromStorage) {
            this.props.setModel(fromStorage);
          }
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.model !== nextProps.model) {
            set(key, nextProps.model, nextProps);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return SyncedComponent;
    }(_react2.default.Component);

    SyncedComponent.displayName = 'Synced(' + (0, _getComponentName2.default)(WrappedComponent) + ')';
    return (0, _hoistNonReactStatics2.default)(SyncedComponent, WrappedComponent);
  };
};

exports.default = syncWith;