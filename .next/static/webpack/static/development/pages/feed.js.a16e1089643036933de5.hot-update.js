webpackHotUpdate("static/development/pages/feed.js",{

/***/ "./components/GetFeedData.js":
/*!***********************************!*\
  !*** ./components/GetFeedData.js ***!
  \***********************************/
/*! exports provided: GetFeedData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFeedData", function() { return GetFeedData; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _Galeria__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Galeria */ "./components/Galeria.js");
/* harmony import */ var _getFeedDataCss_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getFeedDataCss.sass */ "./components/getFeedDataCss.sass");
/* harmony import */ var _getFeedDataCss_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_getFeedDataCss_sass__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/Users/luisahaddad/Documents/GitHub/idwall/components/GetFeedData.js";






var GetFeedData = function GetFeedData(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      dataFeed = _React$useState2[0],
      getDataFeed = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('husky'),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      active = _React$useState4[0],
      getActive = _React$useState4[1];

  if (dataFeed === null) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api-iddog.idwall.co/feed", {
      method: 'GET',
      headers: {
        'Authorization': props.value ? props.value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWQxZTA4MWQyOWVkM2ZkM2M4YjIxNTZmIiwiaWF0IjoxNTYyMjQ5MjQ1LCJleHAiOjE1NjM1NDUyNDV9.3ii4R9MDsPzAIFc3X7cHE4D49azpz9cDT3j4aJzUl6A',
        'Content-Type': 'application/json'
      }
    }).then(
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return res.json();

              case 2:
                response = _context.sent;
                return _context.abrupt("return", getDataFeed(response));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "wrapper-galeria",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "titles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      clickHandler('husky', props, getDataFeed);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Husky"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      clickHandler('labrador', props, getDataFeed);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Labrador"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      clickHandler('hound', props, getDataFeed);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Hound"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      clickHandler('pug', props, getDataFeed);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Pug")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Galeria__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: dataFeed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

function clickHandler(category, props, getDataFeed) {
  var active = document.querySelector(bind);
  console.log(active);
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api-iddog.idwall.co/feed?category=".concat(category), {
    method: 'GET',
    headers: {
      'Authorization': props.value ? props.value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWQxZTA4MWQyOWVkM2ZkM2M4YjIxNTZmIiwiaWF0IjoxNTYyMjQ5MjQ1LCJleHAiOjE1NjM1NDUyNDV9.3ii4R9MDsPzAIFc3X7cHE4D49azpz9cDT3j4aJzUl6A',
      'Content-Type': 'application/json'
    }
  }).then(
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return res.json();

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", getDataFeed(response));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
}

/* harmony default export */ __webpack_exports__["default"] = (GetFeedData);

/***/ })

})
//# sourceMappingURL=feed.js.a16e1089643036933de5.hot-update.js.map