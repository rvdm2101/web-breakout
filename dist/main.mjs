/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/ball/ball-config.ts":
/*!*********************************!*\
  !*** ./src/ball/ball-config.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BALL_SIZE\": () => (/* binding */ BALL_SIZE),\n/* harmony export */   \"BALL_SPEED\": () => (/* binding */ BALL_SPEED)\n/* harmony export */ });\nvar BALL_SIZE = 5;\nvar BALL_SPEED = 2.5;\n\n\n//# sourceURL=webpack://web-breakout/./src/ball/ball-config.ts?");

/***/ }),

/***/ "./src/ball/ball.ts":
/*!**************************!*\
  !*** ./src/ball/ball.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ball\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _ball_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball-config */ \"./src/ball/ball-config.ts\");\n\nvar Ball = /** @class */ (function () {\n    function Ball(canvas) {\n        this.canvas = canvas;\n    }\n    Ball.prototype.draw = function (positionX, positionY) {\n        this.positionX = positionX;\n        this.positionY = positionY;\n        var context = this.canvas.getContext(\"2d\");\n        context.fillStyle = \"#f00\";\n        context.beginPath();\n        context.arc(this.positionX, this.positionY, _ball_config__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE, 0, 2 * Math.PI);\n        context.fill();\n    };\n    Ball.prototype.top = function () {\n        return this.positionY;\n    };\n    Ball.prototype.left = function () {\n        return this.positionX;\n    };\n    Ball.prototype.right = function () {\n        return this.positionX + _ball_config__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE;\n    };\n    Ball.prototype.bottom = function () {\n        return this.positionY + _ball_config__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE;\n    };\n    return Ball;\n}());\n\n\n\n//# sourceURL=webpack://web-breakout/./src/ball/ball.ts?");

/***/ }),

/***/ "./src/ball/index.ts":
/*!***************************!*\
  !*** ./src/ball/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BALL_SIZE\": () => (/* reexport safe */ _ball_config__WEBPACK_IMPORTED_MODULE_1__.BALL_SIZE),\n/* harmony export */   \"BALL_SPEED\": () => (/* reexport safe */ _ball_config__WEBPACK_IMPORTED_MODULE_1__.BALL_SPEED),\n/* harmony export */   \"Ball\": () => (/* reexport safe */ _ball__WEBPACK_IMPORTED_MODULE_0__.Ball)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./src/ball/ball.ts\");\n/* harmony import */ var _ball_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball-config */ \"./src/ball/ball-config.ts\");\n\n\n\n\n//# sourceURL=webpack://web-breakout/./src/ball/index.ts?");

/***/ }),

/***/ "./src/brick/brick-config.ts":
/*!***********************************!*\
  !*** ./src/brick/brick-config.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BRICK_HEIGHT\": () => (/* binding */ BRICK_HEIGHT),\n/* harmony export */   \"BRICK_SPACING\": () => (/* binding */ BRICK_SPACING),\n/* harmony export */   \"BRICK_WIDTH\": () => (/* binding */ BRICK_WIDTH)\n/* harmony export */ });\nvar BRICK_WIDTH = 50;\nvar BRICK_HEIGHT = BRICK_WIDTH / 2;\nvar BRICK_SPACING = 10;\n\n\n//# sourceURL=webpack://web-breakout/./src/brick/brick-config.ts?");

/***/ }),

/***/ "./src/brick/brick.ts":
/*!****************************!*\
  !*** ./src/brick/brick.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Brick\": () => (/* binding */ Brick)\n/* harmony export */ });\n/* harmony import */ var _brick_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick-config */ \"./src/brick/brick-config.ts\");\n\nvar Brick = /** @class */ (function () {\n    function Brick(canvas, positionX, positionY) {\n        this.canvas = canvas;\n        this.positionX = positionX;\n        this.positionY = positionY;\n    }\n    Brick.prototype.draw = function () {\n        var context = this.canvas.getContext(\"2d\");\n        context.fillStyle = \"#f00\";\n        context.fillRect(this.positionX, this.positionY, _brick_config__WEBPACK_IMPORTED_MODULE_0__.BRICK_WIDTH, _brick_config__WEBPACK_IMPORTED_MODULE_0__.BRICK_HEIGHT);\n    };\n    Brick.prototype.top = function () {\n        return this.positionY;\n    };\n    Brick.prototype.left = function () {\n        return this.positionX;\n    };\n    Brick.prototype.right = function () {\n        return this.positionX + _brick_config__WEBPACK_IMPORTED_MODULE_0__.BRICK_WIDTH;\n    };\n    Brick.prototype.bottom = function () {\n        return this.positionY + _brick_config__WEBPACK_IMPORTED_MODULE_0__.BRICK_HEIGHT;\n    };\n    return Brick;\n}());\n\n\n\n//# sourceURL=webpack://web-breakout/./src/brick/brick.ts?");

/***/ }),

/***/ "./src/brick/index.ts":
/*!****************************!*\
  !*** ./src/brick/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BRICK_HEIGHT\": () => (/* reexport safe */ _brick_config__WEBPACK_IMPORTED_MODULE_1__.BRICK_HEIGHT),\n/* harmony export */   \"BRICK_SPACING\": () => (/* reexport safe */ _brick_config__WEBPACK_IMPORTED_MODULE_1__.BRICK_SPACING),\n/* harmony export */   \"BRICK_WIDTH\": () => (/* reexport safe */ _brick_config__WEBPACK_IMPORTED_MODULE_1__.BRICK_WIDTH),\n/* harmony export */   \"Brick\": () => (/* reexport safe */ _brick__WEBPACK_IMPORTED_MODULE_0__.Brick)\n/* harmony export */ });\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ \"./src/brick/brick.ts\");\n/* harmony import */ var _brick_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brick-config */ \"./src/brick/brick-config.ts\");\n\n\n\n\n//# sourceURL=webpack://web-breakout/./src/brick/index.ts?");

/***/ }),

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ball */ \"./src/ball/index.ts\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paddle */ \"./src/paddle/index.ts\");\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../brick */ \"./src/brick/index.ts\");\n/* harmony import */ var _utils_isKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/isKey */ \"./src/utils/isKey.ts\");\n\n\n\n\nvar Game = /** @class */ (function () {\n    function Game(canvas) {\n        this.paddleMovementX = 0;\n        this.ballMovementX = 0;\n        this.ballMovementY = 0;\n        this.keys = {};\n        this.bricks = [];\n        this.canvas = canvas;\n        // Initialize the paddle in the middle of the screen.\n        this.paddlePositionX = canvas.width / 2 - _paddle__WEBPACK_IMPORTED_MODULE_1__.PADDLE_WIDTH / 2;\n        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_1__.Paddle(canvas);\n        // @TODO make 80 a const, and maybe move it to the Ball constructor\n        this.ballPositionX = canvas.width / 2 - _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE / 2;\n        this.ballPositionY = canvas.height - 80 - _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE / 2;\n        this.ballMovementX = _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SPEED;\n        this.ballMovementY = _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SPEED;\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__.Ball(canvas);\n        this.generateBricks();\n        this.draw();\n    }\n    Game.prototype.start = function () {\n        this.addControls();\n        this.gameLoop();\n    };\n    Game.prototype.addControls = function () {\n        var _this = this;\n        document.addEventListener(\"keydown\", function (event) {\n            if ((0,_utils_isKey__WEBPACK_IMPORTED_MODULE_3__.shouldListenToKey)(event.code)) {\n                _this.keys[event.code] = true;\n            }\n        });\n        document.addEventListener(\"keyup\", function (event) {\n            if ((0,_utils_isKey__WEBPACK_IMPORTED_MODULE_3__.shouldListenToKey)(event.code)) {\n                _this.keys[event.code] = false;\n            }\n        });\n    };\n    Game.prototype.generateBricks = function () {\n        for (var indexY = 0; indexY < 2; indexY++) {\n            for (var indexX = 0; indexX < 10; indexX++) {\n                var brick = new _brick__WEBPACK_IMPORTED_MODULE_2__.Brick(this.canvas, indexX * (_brick__WEBPACK_IMPORTED_MODULE_2__.BRICK_WIDTH + _brick__WEBPACK_IMPORTED_MODULE_2__.BRICK_SPACING), indexY * (_brick__WEBPACK_IMPORTED_MODULE_2__.BRICK_HEIGHT + _brick__WEBPACK_IMPORTED_MODULE_2__.BRICK_SPACING));\n                this.bricks.push(brick);\n            }\n        }\n    };\n    Game.prototype.gameLoop = function () {\n        var _this = this;\n        this.update();\n        this.collisionDetection();\n        this.clear();\n        this.draw();\n        window.requestAnimationFrame(function () { return _this.gameLoop(); });\n    };\n    Game.prototype.update = function () {\n        if ((0,_utils_isKey__WEBPACK_IMPORTED_MODULE_3__.containsKeyLeft)(this.keys) && this.paddleMovementX > -_paddle__WEBPACK_IMPORTED_MODULE_1__.PADDLE_SPEED) {\n            this.paddleMovementX--;\n        }\n        if ((0,_utils_isKey__WEBPACK_IMPORTED_MODULE_3__.containsKeyRight)(this.keys) && this.paddleMovementX < _paddle__WEBPACK_IMPORTED_MODULE_1__.PADDLE_SPEED) {\n            this.paddleMovementX++;\n        }\n        this.paddleMovementX *= _paddle__WEBPACK_IMPORTED_MODULE_1__.PADDLE_FRICTION;\n        this.paddlePositionX += this.paddleMovementX;\n        this.ballPositionX += this.ballMovementX;\n        this.ballPositionY += this.ballMovementY;\n    };\n    Game.prototype.collisionDetection = function () {\n        if (this.ballPositionX - _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE / 2 <= 0 ||\n            this.ballPositionX + _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE / 2 >= this.canvas.width) {\n            this.ballMovementX = -this.ballMovementX;\n            this.ballPositionX += this.ballMovementX;\n        }\n        if (this.ballPositionY - _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE / 2 <= 0 ||\n            this.ballPositionY + _ball__WEBPACK_IMPORTED_MODULE_0__.BALL_SIZE / 2 >= this.canvas.height) {\n            this.ballMovementY = -this.ballMovementY;\n            this.ballPositionY += this.ballMovementY;\n        }\n    };\n    Game.prototype.clear = function () {\n        var context = this.canvas.getContext(\"2d\");\n        context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    Game.prototype.draw = function () {\n        this.bricks.forEach(function (brick) {\n            brick.draw();\n        });\n        this.paddle.draw(this.paddlePositionX);\n        this.ball.draw(this.ballPositionX, this.ballPositionY);\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack://web-breakout/./src/game/game.ts?");

/***/ }),

/***/ "./src/game/index.ts":
/*!***************************!*\
  !*** ./src/game/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_0__.Game)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game/game.ts\");\n\n\n\n//# sourceURL=webpack://web-breakout/./src/game/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game/index.ts\");\n\n/**\n * Create canvas inside the provided container\n *\n * @param elementSelector string - the selector for the container element\n */\nvar generateGame = function (elementSelector) {\n    var container = document.querySelector(elementSelector);\n    if (!container) {\n        alert(\"Container element not found\");\n        return;\n    }\n    var canvas = document.createElement(\"canvas\");\n    canvas.width = container.clientWidth;\n    canvas.height = (canvas.width / 16) * 9;\n    canvas.style.border = \"1px solid black\";\n    container.appendChild(canvas);\n    var game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas);\n    game.start();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateGame);\n\n\n//# sourceURL=webpack://web-breakout/./src/index.ts?");

/***/ }),

/***/ "./src/paddle/index.ts":
/*!*****************************!*\
  !*** ./src/paddle/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PADDLE_FRICTION\": () => (/* reexport safe */ _paddle_config__WEBPACK_IMPORTED_MODULE_1__.PADDLE_FRICTION),\n/* harmony export */   \"PADDLE_HEIGHT\": () => (/* reexport safe */ _paddle_config__WEBPACK_IMPORTED_MODULE_1__.PADDLE_HEIGHT),\n/* harmony export */   \"PADDLE_HEIGHT_OFFSET\": () => (/* reexport safe */ _paddle_config__WEBPACK_IMPORTED_MODULE_1__.PADDLE_HEIGHT_OFFSET),\n/* harmony export */   \"PADDLE_SPEED\": () => (/* reexport safe */ _paddle_config__WEBPACK_IMPORTED_MODULE_1__.PADDLE_SPEED),\n/* harmony export */   \"PADDLE_WIDTH\": () => (/* reexport safe */ _paddle_config__WEBPACK_IMPORTED_MODULE_1__.PADDLE_WIDTH),\n/* harmony export */   \"Paddle\": () => (/* reexport safe */ _paddle__WEBPACK_IMPORTED_MODULE_0__.Paddle)\n/* harmony export */ });\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/paddle/paddle.ts\");\n/* harmony import */ var _paddle_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paddle-config */ \"./src/paddle/paddle-config.ts\");\n\n\n\n\n//# sourceURL=webpack://web-breakout/./src/paddle/index.ts?");

/***/ }),

/***/ "./src/paddle/paddle-config.ts":
/*!*************************************!*\
  !*** ./src/paddle/paddle-config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PADDLE_FRICTION\": () => (/* binding */ PADDLE_FRICTION),\n/* harmony export */   \"PADDLE_HEIGHT\": () => (/* binding */ PADDLE_HEIGHT),\n/* harmony export */   \"PADDLE_HEIGHT_OFFSET\": () => (/* binding */ PADDLE_HEIGHT_OFFSET),\n/* harmony export */   \"PADDLE_SPEED\": () => (/* binding */ PADDLE_SPEED),\n/* harmony export */   \"PADDLE_WIDTH\": () => (/* binding */ PADDLE_WIDTH)\n/* harmony export */ });\nvar PADDLE_WIDTH = 100;\nvar PADDLE_HEIGHT = 10;\nvar PADDLE_HEIGHT_OFFSET = 40;\nvar PADDLE_SPEED = 5;\nvar PADDLE_FRICTION = 0.98;\n\n\n//# sourceURL=webpack://web-breakout/./src/paddle/paddle-config.ts?");

/***/ }),

/***/ "./src/paddle/paddle.ts":
/*!******************************!*\
  !*** ./src/paddle/paddle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Paddle\": () => (/* binding */ Paddle)\n/* harmony export */ });\n/* harmony import */ var _paddle_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle-config */ \"./src/paddle/paddle-config.ts\");\n\nvar Paddle = /** @class */ (function () {\n    function Paddle(canvas) {\n        this.canvas = canvas;\n        this.positionY = this.canvas.height - _paddle_config__WEBPACK_IMPORTED_MODULE_0__.PADDLE_HEIGHT_OFFSET;\n    }\n    Paddle.prototype.draw = function (positionX) {\n        this.positionX = positionX;\n        var context = this.canvas.getContext(\"2d\");\n        context.fillStyle = \"#f00\";\n        context.fillRect(this.positionX, this.positionY, _paddle_config__WEBPACK_IMPORTED_MODULE_0__.PADDLE_WIDTH, _paddle_config__WEBPACK_IMPORTED_MODULE_0__.PADDLE_HEIGHT);\n    };\n    Paddle.prototype.top = function () {\n        return this.positionY;\n    };\n    Paddle.prototype.left = function () {\n        return this.positionX;\n    };\n    Paddle.prototype.right = function () {\n        return this.positionX + _paddle_config__WEBPACK_IMPORTED_MODULE_0__.PADDLE_WIDTH;\n    };\n    Paddle.prototype.bottom = function () {\n        return this.positionY + _paddle_config__WEBPACK_IMPORTED_MODULE_0__.PADDLE_HEIGHT;\n    };\n    return Paddle;\n}());\n\n\n\n//# sourceURL=webpack://web-breakout/./src/paddle/paddle.ts?");

/***/ }),

/***/ "./src/utils/isKey.ts":
/*!****************************!*\
  !*** ./src/utils/isKey.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containsKeyLeft\": () => (/* binding */ containsKeyLeft),\n/* harmony export */   \"containsKeyRight\": () => (/* binding */ containsKeyRight),\n/* harmony export */   \"shouldListenToKey\": () => (/* binding */ shouldListenToKey)\n/* harmony export */ });\nvar KEY_A = \"KeyA\";\nvar KEY_D = \"KeyD\";\nvar KEY_ARROW_LEFT = \"ArrowLeft\";\nvar KEY_ARROW_RIGHT = \"ArrowRight\";\nvar shouldListenToKey = function (keyCode) {\n    return [KEY_A, KEY_D, KEY_ARROW_LEFT, KEY_ARROW_RIGHT].includes(keyCode);\n};\nvar containsKeyLeft = function (keys) {\n    return keys[KEY_A] || keys[KEY_ARROW_LEFT];\n};\nvar containsKeyRight = function (keys) {\n    return keys[KEY_D] || keys[KEY_ARROW_RIGHT];\n};\n\n\n//# sourceURL=webpack://web-breakout/./src/utils/isKey.ts?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 
