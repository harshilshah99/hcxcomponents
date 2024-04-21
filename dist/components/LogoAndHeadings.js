"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LogoAndHeadings;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LogoAndHeadings(_ref) {
  var mainHeading = _ref.mainHeading,
    subHeading = _ref.subHeading;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    className: "w-48 dark:block",
    src: "https://i.ibb.co/W6Q61fB/swasth.png",
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "mb-5 text-3xl font-bold text-black light:text-white sm:text-title-xl2"
  }, mainHeading), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "mb-9 text-2xl font-bold text-black light:text-white sm:text-title-xl2"
  }, subHeading));
}