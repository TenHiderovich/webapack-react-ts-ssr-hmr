webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/CardMenu/CardMenu.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/CardMenu.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar nanoid_1 = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\nvar cardmenu_css_1 = __importDefault(__webpack_require__(/*! ./cardmenu.css */ \"./src/shared/CardsList/Card/CardMenu/cardmenu.css\"));\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\nvar GeneticList_1 = __webpack_require__(/*! ../../../GeneticList */ \"./src/shared/GeneticList/index.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar MENU = [\n    {\n        icon: react_1.default.createElement(Icons_1.BlockIcon, null),\n        text: 'Скрыть',\n        onClick: function () { },\n        className: cardmenu_css_1.default.menuItem,\n        As: 'li',\n    },\n    {\n        icon: react_1.default.createElement(Icons_1.WarningIcon, null),\n        text: 'Пожаловаться',\n        onClick: function () { },\n        className: cardmenu_css_1.default.menuItem,\n        As: 'li',\n    },\n    {\n        text: 'Закрыть',\n        onClick: function () { },\n        className: cardmenu_css_1.default.menuItem + \" \" + cardmenu_css_1.default.menuItem_footerItem,\n        As: 'li',\n    }\n].map(function (item) { return (__assign(__assign({}, item), { id: nanoid_1.nanoid() })); });\nfunction CardMenu() {\n    var _a = react_1.default.useState(false), activatorIsActive = _a[0], setActivatorIsActive = _a[1];\n    var activator = (react_1.default.createElement(\"button\", { className: cardmenu_css_1.default.menuButton + \" \" + (activatorIsActive && cardmenu_css_1.default.menuButton_isActive) },\n        react_1.default.createElement(Icons_1.MenuIcon, null)));\n    return (react_1.default.createElement(\"div\", { className: cardmenu_css_1.default.menu },\n        react_1.default.createElement(Dropdown_1.Dropdown, { activator: activator, className: cardmenu_css_1.default.menuDropdownListContainer, onOpen: function () { return setActivatorIsActive(true); }, onClose: function () { return setActivatorIsActive(false); }, As: 'ul' },\n            react_1.default.createElement(GeneticList_1.GeneticList, { list: MENU }))));\n}\nexports.CardMenu = CardMenu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/CardMenu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./CardMenu */ \"./src/shared/CardsList/Card/CardMenu/CardMenu.tsx\"));\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/index.ts?");

/***/ })

})