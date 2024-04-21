"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Container;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-8 border-stroke bg-white light:border-strokedark font-satoshi light:bg-black"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full p-4 sm:p-12.5 xl:p-17.5"
  }, children));
}