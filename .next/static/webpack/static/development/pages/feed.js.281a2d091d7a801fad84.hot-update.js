webpackHotUpdate("static/development/pages/feed.js",{

/***/ "./components/Galeria.js":
/*!*******************************!*\
  !*** ./components/Galeria.js ***!
  \*******************************/
/*! exports provided: Galeria, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria", function() { return Galeria; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _galeriaCss_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galeriaCss.sass */ "./components/galeriaCss.sass");
/* harmony import */ var _galeriaCss_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_galeriaCss_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/luisahaddad/Documents/GitHub/idwall/components/Galeria.js";




var Galeria = function Galeria(props) {
  var data = props.data;
  console.log(props.data !== null ? props.data.category : props.data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "galeria",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data !== null ? props.data.list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        query: {
          id: index
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  }) : null);
};
/* harmony default export */ __webpack_exports__["default"] = (Galeria);

/***/ })

})
//# sourceMappingURL=feed.js.281a2d091d7a801fad84.hot-update.js.map