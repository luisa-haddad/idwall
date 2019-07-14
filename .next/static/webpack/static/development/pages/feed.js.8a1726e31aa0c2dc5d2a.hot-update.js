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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "galeria",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data !== null ? props.data.list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: index,
      href: {
        query: {
          category: props.data.category,
          id: index
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: bind.clickImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));
  }) : null);
};

var clickImage = function clickImage(item) {
  console.log('teste');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Galeria);

/***/ })

})
//# sourceMappingURL=feed.js.8a1726e31aa0c2dc5d2a.hot-update.js.map