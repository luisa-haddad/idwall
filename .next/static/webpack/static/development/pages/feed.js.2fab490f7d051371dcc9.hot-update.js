webpackHotUpdate("static/development/pages/feed.js",{

/***/ "./pages/feed.js":
/*!***********************!*\
  !*** ./pages/feed.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _components_GetFeedData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GetFeedData */ "./components/GetFeedData.js");
/* harmony import */ var _feedCss_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedCss.sass */ "./pages/feedCss.sass");
/* harmony import */ var _feedCss_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_feedCss_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/luisahaddad/Documents/GitHub/idwall/pages/feed.js";





var Feed = function Feed(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_context__WEBPACK_IMPORTED_MODULE_1__["ApiContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (value) {
    value;
    console.log('teste');
    var token = value.state.response.user.token; //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZ…yNDV9.3ii4R9MDsPzAIFc3X7cHE4D49azpz9cDT3j4aJzUl6A'

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GetFeedData__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: token,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ })

})
//# sourceMappingURL=feed.js.2fab490f7d051371dcc9.hot-update.js.map