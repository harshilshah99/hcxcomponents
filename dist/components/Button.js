"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Button(_ref) {
  var onClick = _ref.onClick,
    disabled = _ref.disabled,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: onClick,
    disabled: disabled,
    className: "align-center flex w-full justify-center rounded bg-blue-300 py-4 font-medium text-gray disabled:cursor-not-allowed disabled:bg-secondary disabled:text-gray"
  }, children));
}