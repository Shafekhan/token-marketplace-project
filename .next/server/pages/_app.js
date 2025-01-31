/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_chains__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.sepolia\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__.infuraProvider)({\n        apiKey: \"f0267a8d7d5642caa8735db53507eefd\",\n        priority: 1\n    }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__.jsonRpcProvider)({\n        rpc: ()=>({\n                http: [\n                    `https://sepolia.infura.io/v3/66ddc88ad64b44dc8057d17c8ca6d6d4`\n                ]\n            })\n    }), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction myApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Uniswap-token-marketplace\\\\pages\\\\_app.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Uniswap-token-marketplace\\\\pages\\\\_app.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Uniswap-token-marketplace\\\\pages\\\\_app.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNFO0FBQ1U7QUFNWDtBQUNtQztBQUNYO0FBQ0U7QUFDbkI7QUFFdkMsTUFBTSxFQUFDVyxNQUFNLEdBQUVDLFFBQVEsR0FBQyxHQUFHUCxzREFBZSxDQUN4QztJQUFDSyxpREFBTztDQUFDLEVBQ1Q7SUFDRUYsc0VBQWMsQ0FBQztRQUNiSyxNQUFNLEVBQUUsa0NBQWtDO1FBQzFDQyxRQUFRLEVBQUUsQ0FBQztLQUNaLENBQUM7SUFDRkwsd0VBQWUsQ0FBQztRQUNkTSxHQUFHLEVBQUUsSUFBTSxDQUFDO2dCQUNWQyxJQUFJLEVBQUU7b0JBQUMsQ0FBQyw2REFBNkQsQ0FBQztpQkFBQzthQUN4RSxDQUFDO0tBQ0gsQ0FBQztDQUNILENBQ0Y7QUFFRCxNQUFNLEVBQUNDLFVBQVUsR0FBQyxHQUFHaEIseUVBQWlCLENBQUM7SUFDckNpQixPQUFPLEVBQUUsWUFBWTtJQUNyQlAsTUFBTTtDQUNQLENBQUM7QUFFRixNQUFNUSxXQUFXLEdBQUdiLG1EQUFZLENBQUM7SUFDL0JjLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZMLFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTVMsT0FBTyxHQUFHckIsbURBQUssQ0FBQ0kscUVBQWEsRUFBRSxFQUFFO0lBQ3JDa0IsTUFBTSxFQUFFO1FBQ05DLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0NBQ0YsQ0FBQztBQUVGLFNBQVNDLEtBQUssQ0FBQyxFQUFDQyxTQUFTLEdBQUVDLFNBQVMsR0FBQyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDcEIsOENBQVc7UUFBQ3FCLE1BQU0sRUFBSVQsV0FBVztrQkFDaEMsNEVBQUNqQixzRUFBa0I7WUFBQ1MsTUFBTSxFQUFJQSxNQUFNO1lBQUVrQixLQUFLLEVBQUVSLE9BQU87c0JBQ2xELDRFQUFDSyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDVDs7Ozs7WUFDVCxDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcC10b2tlbi1tYXJrZXRwbGFjZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIjtcclxuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXHJcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG4gIGRhcmtUaGVtZSxcclxuICBtaWRuaWdodFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyBpbmZ1cmFQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvaW5mdXJhXCI7XHJcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xyXG5pbXBvcnQgeyBzZXBvbGlhIH0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xyXG5cclxuY29uc3Qge2NoYWlucywgcHJvdmlkZXJ9ID0gY29uZmlndXJlQ2hhaW5zKFxyXG4gIFtzZXBvbGlhXSxcclxuICBbXHJcbiAgICBpbmZ1cmFQcm92aWRlcih7XHJcbiAgICAgIGFwaUtleTogXCJmMDI2N2E4ZDdkNTY0MmNhYTg3MzVkYjUzNTA3ZWVmZFwiLFxyXG4gICAgICBwcmlvcml0eTogMSxcclxuICAgIH0pLFxyXG4gICAganNvblJwY1Byb3ZpZGVyKHtcclxuICAgICAgcnBjOiAoKSA9PiAoe1xyXG4gICAgICAgIGh0dHA6IFtgaHR0cHM6Ly9zZXBvbGlhLmluZnVyYS5pby92My82NmRkYzg4YWQ2NGI0NGRjODA1N2QxN2M4Y2E2ZDZkNGBdLFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG4gIF1cclxuKTtcclxuXHJcbmNvbnN0IHtjb25uZWN0b3JzfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiBcIkN1c3RvbSBEZXhcIixcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4gIGNvbm5lY3RvcnMsXHJcbiAgcHJvdmlkZXIsXHJcbn0pO1xyXG5cclxuY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xyXG4gIGNvbG9yczoge1xyXG4gICAgYWNjZW50Q29sb3I6IFwiIzE4MTgxYlwiLFxyXG4gICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNmZmZcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudCA9IHt3YWdtaUNsaWVudH0+XHJcbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zID0ge2NoYWluc30gdGhlbWU9e215VGhlbWV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XHJcbiAgICA8L1dhZ21pQ29uZmlnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15QXBwO1xyXG4iXSwibmFtZXMiOlsibWVyZ2UiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsIm1pZG5pZ2h0VGhlbWUiLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImluZnVyYVByb3ZpZGVyIiwianNvblJwY1Byb3ZpZGVyIiwic2Vwb2xpYSIsImNoYWlucyIsInByb3ZpZGVyIiwiYXBpS2V5IiwicHJpb3JpdHkiLCJycGMiLCJodHRwIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwibXlUaGVtZSIsImNvbG9ycyIsImFjY2VudENvbG9yIiwiYWNjZW50Q29sb3JGb3JlZ3JvdW5kIiwibXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/chains");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();