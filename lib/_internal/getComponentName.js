"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getComponentName = function getComponentName(component) {
  return component.displayName || component.name;
};

exports.default = getComponentName;