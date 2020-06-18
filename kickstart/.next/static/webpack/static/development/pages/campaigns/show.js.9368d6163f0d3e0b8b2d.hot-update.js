webpackHotUpdate("static/development/pages/campaigns/show.js",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar CampaignShow = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignShow, _Component);\n\n  var _super = _createSuper(CampaignShow);\n\n  function CampaignShow() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, CampaignShow);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CampaignShow, [{\n    key: \"renderCards\",\n    value: function renderCards() {\n      var _this$props = this.props,\n          balance = _this$props.balance,\n          manager = _this$props.manager,\n          minimumContribution = _this$props.minimumContribution,\n          requestsCount = _this$props.requestsCount,\n          approversCount = _this$props.approversCount;\n      var items = [{\n        header: manager,\n        meta: \"Address of Manager\",\n        description: \"The manager created this campaign and can create requests to withdraw money\",\n        style: {\n          overflowWrap: \"break-word\"\n        }\n      }];\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Card\"].Group, {\n        items: items\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null, __jsx(\"h3\", null, \"Campaign Show\"), this.renderCards());\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var campaign, summary;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(props.query.address);\n                _context.next = 3;\n                return campaign.methods.getSummary().call();\n\n              case 3:\n                summary = _context.sent;\n                return _context.abrupt(\"return\", {\n                  minimumContribution: summary[0],\n                  balance: summary[1],\n                  requestsCount: summary[2],\n                  approversCount: summary[3],\n                  manager: summary[4]\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return CampaignShow;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz80Zjg1Il0sIm5hbWVzIjpbIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7O2tDQWFZO0FBQUEsd0JBT04sS0FBS0MsS0FQQztBQUFBLFVBRU5DLE9BRk0sZUFFTkEsT0FGTTtBQUFBLFVBR05DLE9BSE0sZUFHTkEsT0FITTtBQUFBLFVBSU5DLG1CQUpNLGVBSU5BLG1CQUpNO0FBQUEsVUFLTkMsYUFMTSxlQUtOQSxhQUxNO0FBQUEsVUFNTkMsY0FOTSxlQU1OQSxjQU5NO0FBU1YsVUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFDSUMsY0FBTSxFQUFFTCxPQURaO0FBRUlNLFlBQUksRUFBRSxvQkFGVjtBQUdJQyxtQkFBVyxFQUFFLDZFQUhqQjtBQUlJQyxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQjtBQUpYLE9BRFUsQ0FBZDtBQVNBLGFBQU8sTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUtMO0FBQXRCLFFBQVA7QUFDSDs7OzZCQUVRO0FBQ0wsYUFDSSxNQUFDLDBEQUFELFFBQ0ksa0NBREosRUFFTSxLQUFLTSxXQUFMLEVBRk4sQ0FESjtBQU1IOzs7OytOQXhDNEJaLEs7Ozs7OztBQUNuQmEsd0IsR0FBV0MsbUVBQVEsQ0FBQ2QsS0FBSyxDQUFDZSxLQUFOLENBQVlDLE9BQWIsQzs7dUJBQ0hILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEU7OztBQUFoQkMsdUI7aURBQ0M7QUFDSGpCLHFDQUFtQixFQUFFaUIsT0FBTyxDQUFDLENBQUQsQ0FEekI7QUFFSG5CLHlCQUFPLEVBQUVtQixPQUFPLENBQUMsQ0FBRCxDQUZiO0FBR0hoQiwrQkFBYSxFQUFFZ0IsT0FBTyxDQUFDLENBQUQsQ0FIbkI7QUFJSGYsZ0NBQWMsRUFBRWUsT0FBTyxDQUFDLENBQUQsQ0FKcEI7QUFLSGxCLHlCQUFPLEVBQUVrQixPQUFPLENBQUMsQ0FBRDtBQUxiLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSllDLCtDOztBQTRDWnRCLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5cbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXG4gICAgICAgICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlckNhcmRzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiYWxhbmNlLFxuICAgICAgICAgICAgbWFuYWdlcixcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50LFxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQgXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogbWFuYWdlcixcbiAgICAgICAgICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgTWFuYWdlclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leVwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcyA9IHsgaXRlbXMgfSAvPlxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8aDM+Q2FtcGFpZ24gU2hvdzwvaDM+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhcmRzKCkgfVxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

})