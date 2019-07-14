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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _galeriaCss_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./galeriaCss.sass */ "./components/galeriaCss.sass");
/* harmony import */ var _galeriaCss_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_galeriaCss_sass__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/luisahaddad/Documents/GitHub/idwall/components/Galeria.js";




var Galeria = function Galeria(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      fullImage = _React$useState2[0],
      getFullImage = _React$useState2[1];

  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "galeria",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data !== null ? props.data.list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: index,
      href: {
        query: {
          category: props.data.category,
          id: index
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: function onClick() {
        getFullImage(item);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  }) : null, fullImage !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Modal, {
    fullImage: fullImage,
    getFullImage: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }) : null);
};

var Modal = function Modal(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper-modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "close",
    onClick: function onClick() {
      props.getFullImage(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.fullImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Galeria);

/***/ })

})
//# sourceMappingURL=feed.js.3afd263bfbcd1b2ef441.hot-update.js.map