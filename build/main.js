/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exponentiation/square.js":
/*!**************************************!*\
  !*** ./src/exponentiation/square.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst square = firstNum => {\n  return parseFloat(firstNum) ** 2;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (square);\n\n//# sourceURL=webpack://calculator/./src/exponentiation/square.js?");

/***/ }),

/***/ "./src/exponentiation/tenthExponentiation.js":
/*!***************************************************!*\
  !*** ./src/exponentiation/tenthExponentiation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tenthExponentiation = firstNum => {\n  return 10 ** parseFloat(firstNum);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tenthExponentiation);\n\n//# sourceURL=webpack://calculator/./src/exponentiation/tenthExponentiation.js?");

/***/ }),

/***/ "./src/exponentiation/thirdExponentiation.js":
/*!***************************************************!*\
  !*** ./src/exponentiation/thirdExponentiation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst thirdExponentiation = firstNum => {\n  if (typeof firstNum === 'number') {\n    console.log('firstNum', firstNum);\n    return firstNum ** 3;\n  }\n  return parseFloat(firstNum) ** 3;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thirdExponentiation);\n\n//# sourceURL=webpack://calculator/./src/exponentiation/thirdExponentiation.js?");

/***/ }),

/***/ "./src/exponentiation/xyExponentiation.js":
/*!************************************************!*\
  !*** ./src/exponentiation/xyExponentiation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst xyExponentiation = (firstNum, secondNum) => {\n  return parseFloat(firstNum) ** secondNum;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (xyExponentiation);\n\n//# sourceURL=webpack://calculator/./src/exponentiation/xyExponentiation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.js */ \"./src/theme.js\");\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _operations_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/add.js */ \"./src/operations/add.js\");\n/* harmony import */ var _operations_add_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_operations_add_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _operations_subtract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/subtract.js */ \"./src/operations/subtract.js\");\n/* harmony import */ var _operations_multiply_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations/multiply.js */ \"./src/operations/multiply.js\");\n/* harmony import */ var _operations_devide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations/devide.js */ \"./src/operations/devide.js\");\n/* harmony import */ var _operations_oneDevideX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operations/oneDevideX.js */ \"./src/operations/oneDevideX.js\");\n/* harmony import */ var _operations_calcPercents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operations/calcPercents.js */ \"./src/operations/calcPercents.js\");\n/* harmony import */ var _operations_factorialize_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./operations/factorialize.js */ \"./src/operations/factorialize.js\");\n/* harmony import */ var _operations_factorialize_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_operations_factorialize_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _roots_sqrRoot_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./roots/sqrRoot.js */ \"./src/roots/sqrRoot.js\");\n/* harmony import */ var _roots_cubeRoot_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./roots/cubeRoot.js */ \"./src/roots/cubeRoot.js\");\n/* harmony import */ var _roots_rootY_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roots/rootY.js */ \"./src/roots/rootY.js\");\n/* harmony import */ var _exponentiation_square_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exponentiation/square.js */ \"./src/exponentiation/square.js\");\n/* harmony import */ var _exponentiation_thirdExponentiation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exponentiation/thirdExponentiation.js */ \"./src/exponentiation/thirdExponentiation.js\");\n/* harmony import */ var _exponentiation_tenthExponentiation_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exponentiation/tenthExponentiation.js */ \"./src/exponentiation/tenthExponentiation.js\");\n/* harmony import */ var _exponentiation_xyExponentiation_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exponentiation/xyExponentiation.js */ \"./src/exponentiation/xyExponentiation.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet firstNum = \"\";\nlet secondNum = \"\";\nlet operator = \"\";\nlet result = \"\";\nlet memory = 0;\nlet isNegative = false;\nconst buttons = document.querySelector(\".buttons\");\nconst display = document.querySelector(\".display\");\n\n// clearing\nconst clearAll = () => {\n  firstNum = \"\";\n  secondNum = \"\";\n  operator = \"\";\n  result = \"\";\n  isNegative = false;\n  display.textContent = \"\";\n};\nconst deletePreviousSymbol = () => {\n  if (typeof firstNum === \"number\") {\n    firstNum = \"\";\n  }\n  if (secondNum !== \"\") {\n    secondNum = secondNum.slice(0, -1);\n  } else if (operator !== \"\") {\n    operator = \"\";\n  } else if (firstNum !== \"\") {\n    firstNum = firstNum.slice(0, -1);\n  }\n  isNegative = false;\n  display.textContent = display.textContent.slice(0, -1);\n  return;\n};\n\n// memory operations\nconst memoryClear = () => {\n  memory = 0;\n};\nconst memoryAdd = () => {\n  if (firstNum === \"\") {\n    return memory;\n  }\n  if (secondNum !== \"\") {\n    return memory += parseFloat(secondNum);\n  }\n  memory += parseFloat(firstNum);\n};\nconst memoryRecall = () => {\n  if (memory === 0) {\n    return firstNum = \"\";\n  }\n  operator !== \"\" ? secondNum = memory : firstNum = memory;\n  console.log(memory);\n};\nconst memorySubtract = () => {\n  if (memory === \"\" || memory === 0) {\n    return \"\";\n  }\n  if (secondNum !== \"\") {\n    memory -= parseFloat(secondNum);\n  } else {\n    memory -= parseFloat(firstNum);\n  }\n};\nconst memoryOperation = operation => {\n  switch (operation) {\n    case \"MC\":\n      memoryClear();\n      break;\n    case \"M+\":\n      memoryAdd();\n      break;\n    case \"M-\":\n      memorySubtract();\n      break;\n    case \"MR\":\n      memoryRecall();\n      break;\n    default:\n      break;\n  }\n};\nbuttons.addEventListener(\"click\", event => {\n  const complexOpeartions = () => {\n    switch (operator) {\n      case \"+\":\n        result = _operations_add_js__WEBPACK_IMPORTED_MODULE_2___default()(firstNum, secondNum);\n        break;\n      case \"-\":\n        result = (0,_operations_subtract_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firstNum, secondNum);\n        break;\n      case \"x\":\n        result = (0,_operations_multiply_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(firstNum, secondNum);\n        break;\n      case \"/\":\n        result = (0,_operations_devide_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(firstNum, secondNum);\n        break;\n      case \"xy\":\n        event.target.textContent === operator ? display.textContent = firstNum : display.textContent = secondNum;\n        result = (0,_exponentiation_xyExponentiation_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(firstNum, secondNum);\n        return result;\n      case \"root y\":\n        event.target.textContent === operator ? display.textContent = firstNum : display.textContent = secondNum;\n        if (isNegative) {\n          result = \"Error\";\n        } else {\n          result = (0,_roots_rootY_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(firstNum, secondNum);\n        }\n        return result;\n      case \"x!\":\n        if (firstNum > 10) {\n          clearAll();\n          return \"Error\";\n        } else {\n          result = _operations_factorialize_js__WEBPACK_IMPORTED_MODULE_8___default()(firstNum);\n        }\n        firstNum = result;\n        return display.textContent = firstNum;\n      default:\n        break;\n    }\n  };\n\n  // setting restriction for clicking not a button\n  if (!event.target.matches(\".buttons__operation, .buttons__numbers, .buttons__memory, .buttons__degree, .buttons__root, .buttons__degree\")) return;\n\n  // clearing the display and store on AC btn\n  if (event.target.dataset.clear) {\n    return clearAll();\n  }\n\n  // deleting previous character on C btn\n  if (event.target.dataset.deleteprev) {\n    return deletePreviousSymbol();\n  }\n\n  // storing and displaying the numbers\n  if (event.target.classList.contains(\"buttons__numbers\")) {\n    if (!secondNum && operator === \"\") {\n      if (isNegative && firstNum === \"\") {\n        firstNum = \"-\" + event.target.textContent;\n      } else {\n        firstNum === \"\" || firstNum === 0 || result === 0 ? firstNum = event.target.textContent : firstNum += event.target.textContent;\n      }\n    } else {\n      secondNum += event.target.textContent;\n    }\n  }\n\n  // operators\n  if (event.target.classList.contains(\"buttons__operation\")) {\n    // checking empty operators\n    if (firstNum === \"\" && event.target.textContent !== \"-\") {\n      return \"\";\n    }\n\n    // setting isNegative after clicling -\n    if (event.target.textContent === \"-\" && firstNum === \"\") {\n      isNegative = true;\n      return;\n    }\n\n    // calculation\n    if (secondNum !== \"\" && operator !== \"\" && !event.target.dataset.deleteprev) {\n      firstNum = result;\n      secondNum = \"\";\n      isNegative = false;\n      if (event.target.textContent === \"=\") {\n        operator = \"\";\n        return display.textContent = firstNum;\n      }\n    }\n    if (event.target.dataset.devidex) {\n      result = (0,_operations_oneDevideX_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(firstNum);\n      firstNum = result;\n      return display.textContent = firstNum;\n    }\n    if (event.target.dataset.percents) {\n      result = (0,_operations_calcPercents_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(firstNum);\n      firstNum = result;\n      return display.textContent = firstNum;\n    }\n\n    // change sign\n    if (event.target.dataset.changesign) {\n      if (result < 0) {\n        result = result.toString();\n        result = result.slice(1);\n        firstNum = result;\n        display.textContent = result;\n        return firstNum;\n      } else if (result > 0) {\n        result = result.toString();\n        isNegative = true;\n        firstNum = \"-\" + result;\n        return display.textContent = firstNum;\n      } else if (firstNum && !isNegative) {\n        isNegative = true;\n        firstNum = \"-\" + firstNum;\n      } else if (firstNum && isNegative) {\n        isNegative = false;\n        result = result.toString();\n        firstNum = firstNum.slice(1);\n      }\n      return display.textContent = firstNum;\n    }\n    operator = event.target.textContent;\n  }\n  if (event.target.classList.contains(\"buttons__degree\")) {\n    if (!firstNum) {\n      clearAll();\n      return display.textContent = \"Error\";\n    }\n    if (event.target.dataset.square) {\n      result = (0,_exponentiation_square_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(firstNum);\n    }\n    if (event.target.dataset.third) {\n      result = (0,_exponentiation_thirdExponentiation_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(firstNum);\n    }\n    if (event.target.dataset.tenth) {\n      result = (0,_exponentiation_tenthExponentiation_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(firstNum);\n    }\n    firstNum = result;\n    console.log(firstNum);\n    return display.textContent = firstNum;\n  }\n  if (event.target.classList.contains(\"buttons__root\")) {\n    if (isNegative || !firstNum || firstNum < 0) {\n      clearAll();\n      return display.textContent = \"Error\";\n    }\n    if (event.target.dataset.rootsqr) {\n      result = (0,_roots_sqrRoot_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(firstNum);\n    }\n    if (event.target.dataset.rootcube) {\n      result = (0,_roots_cubeRoot_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(firstNum);\n    }\n    firstNum = result;\n    return display.textContent = firstNum;\n  }\n  if (event.target.dataset.rooty) {\n    return operator = event.target.dataset.rooty;\n  }\n  if (event.target.classList.contains(\"buttons__memory\")) {\n    memoryOperation(event.target.textContent);\n  }\n  display.textContent = firstNum + operator + secondNum;\n  complexOpeartions();\n});\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/operations/add.js":
/*!*******************************!*\
  !*** ./src/operations/add.js ***!
  \*******************************/
/***/ ((module) => {

eval("const add = (firstVal, secondVal) => {\n  console.log(firstVal);\n  return parseFloat(firstVal) + parseFloat(secondVal);\n};\nmodule.exports = add;\n\n//# sourceURL=webpack://calculator/./src/operations/add.js?");

/***/ }),

/***/ "./src/operations/calcPercents.js":
/*!****************************************!*\
  !*** ./src/operations/calcPercents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calcPercents = firstNum => {\n  return firstNum / 100;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcPercents);\n\n//# sourceURL=webpack://calculator/./src/operations/calcPercents.js?");

/***/ }),

/***/ "./src/operations/devide.js":
/*!**********************************!*\
  !*** ./src/operations/devide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst devide = (firstNum, secondNum) => {\n  if (secondNum === \"0\") {\n    return \"Error\";\n  } else {\n    return parseFloat(firstNum) / parseFloat(secondNum);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (devide);\n\n//# sourceURL=webpack://calculator/./src/operations/devide.js?");

/***/ }),

/***/ "./src/operations/factorialize.js":
/*!****************************************!*\
  !*** ./src/operations/factorialize.js ***!
  \****************************************/
/***/ ((module) => {

eval("const factorialize = firstNum => {\n  if (!firstNum || firstNum === \"0\" || firstNum === 0 || firstNum === 1) {\n    firstNum = 1;\n  } else if (firstNum < 0) {\n    firstNum = 'Error';\n  } else {\n    for (let i = firstNum - 1; i >= 1; i--) {\n      firstNum *= i;\n    }\n  }\n  return firstNum;\n  ;\n};\nmodule.exports = factorialize;\n\n//# sourceURL=webpack://calculator/./src/operations/factorialize.js?");

/***/ }),

/***/ "./src/operations/multiply.js":
/*!************************************!*\
  !*** ./src/operations/multiply.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst multiply = (firstVal, secondVal) => {\n  return parseFloat(firstVal) * parseFloat(secondVal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (multiply);\n\n//# sourceURL=webpack://calculator/./src/operations/multiply.js?");

/***/ }),

/***/ "./src/operations/oneDevideX.js":
/*!**************************************!*\
  !*** ./src/operations/oneDevideX.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst oneDevideX = firstNum => {\n  return 1 / parseFloat(firstNum);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneDevideX);\n\n//# sourceURL=webpack://calculator/./src/operations/oneDevideX.js?");

/***/ }),

/***/ "./src/operations/subtract.js":
/*!************************************!*\
  !*** ./src/operations/subtract.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst subtract = (firstVal, secondVal) => {\n  return parseFloat(firstVal) - parseFloat(secondVal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subtract);\n\n//# sourceURL=webpack://calculator/./src/operations/subtract.js?");

/***/ }),

/***/ "./src/roots/cubeRoot.js":
/*!*******************************!*\
  !*** ./src/roots/cubeRoot.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cubeRoot = firstNum => {\n  console.log(firstNum);\n  if (typeof firstNum === \"number\") {\n    return firstNum ** (1 / 3);\n  } else {\n    return parseFloat(firstNum) ** (1 / 3);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cubeRoot);\n\n//# sourceURL=webpack://calculator/./src/roots/cubeRoot.js?");

/***/ }),

/***/ "./src/roots/rootY.js":
/*!****************************!*\
  !*** ./src/roots/rootY.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst rootY = (firstNum, secondNum) => {\n  return parseFloat(firstNum) ** (1 / parseFloat(secondNum));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootY);\n\n//# sourceURL=webpack://calculator/./src/roots/rootY.js?");

/***/ }),

/***/ "./src/roots/sqrRoot.js":
/*!******************************!*\
  !*** ./src/roots/sqrRoot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sqrRoot = firstNum => {\n  if (typeof firstNum === \"number\") {\n    return firstNum ** 0.5;\n  } else {\n    return parseInt(firstNum) ** 0.5;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sqrRoot);\n\n//# sourceURL=webpack://calculator/./src/roots/sqrRoot.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (() => {

eval("const setTheme = themeName => {\n  localStorage.setItem(\"theme\", themeName);\n  document.documentElement.className = themeName;\n};\nconst switcher = document.querySelector(\".switch\");\nconst toogleTheme = () => {\n  if (localStorage.getItem(\"theme\") === \"theme-dark\") {\n    setTheme(\"theme-light\");\n  } else {\n    setTheme(\"theme-dark\");\n  }\n};\nswitcher.addEventListener(\"click\", () => {\n  toogleTheme();\n});\n(function () {\n  if (localStorage.getItem(\"theme\") === \"theme-dark\") {\n    setTheme(\"theme-dark\");\n  } else {\n    setTheme(\"theme-light\");\n  }\n})();\n\n//# sourceURL=webpack://calculator/./src/theme.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: \"Roboto\", sans-serif;\r\n    background-color: var(--body-background-color);\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100vh;\r\n    margin: 0;\r\n}\r\n\r\n.theme-light {\r\n    --body-background-color: #f9f5eb;\r\n    --background-color: #fbfdfe;\r\n    --font-displayColor: #33393d;\r\n}\r\n.theme-dark {\r\n    --body-background-color: #606f76;\r\n    --background-color: black;\r\n    --font-displayColor: aliceblue;\r\n}\r\n\r\n.container {\r\n    max-width: 480px;\r\n    width: 100%;\r\n    background-color: var(--background-color);\r\n    padding: 10px;\r\n    margin: auto;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0px 5px 30px 2px rgba(34, 60, 80, 0.57);\r\n    -moz-box-shadow: 0px 5px 30px 2px rgba(34, 60, 80, 0.57);\r\n    box-shadow: 0px 5px 30px 2px rgba(34, 60, 80, 0.57);\r\n}\r\n\r\n.display {\r\n    width: 90%;\r\n    margin: auto;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    border-radius: 10px;\r\n    color: var(--font-displayColor);\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    gap: 15px;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.numbers {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 5px;\r\n}\r\n\r\n.operations {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    gap: 5px;\r\n}\r\n\r\n.buttons__xy {\r\n    display: flex;\r\n}\r\n\r\n.buttons__numbers,\r\n.buttons__operation,\r\n.buttons__clear,\r\n.buttons__memory,\r\n.buttons__root,\r\n.buttons__degree {\r\n    border: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 100%;\r\n    background-color: #33393d;\r\n    color: aliceblue;\r\n    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\r\n    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\r\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\r\n}\r\n\r\n.switch {\r\n    background-color: var(--background-color);\r\n    border: 0;\r\n    border-radius: 10px;\r\n    color: var(--font-displayColor);\r\n}\r\n\r\n.operation {\r\n    background-color: orange;\r\n}\r\n\r\n.memory {\r\n    background-color: gray;\r\n}\r\n\r\n.y {\r\n    font-size: 8px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;