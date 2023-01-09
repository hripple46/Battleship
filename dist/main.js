/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nfunction Gameboard() {\n  let grid = [];\n  grid.length = 100;\n  for (let j = 0; j < grid.length; j++) {\n    grid[j] = null;\n  }\n\n  function placeShip(ship, startingPoint, startingDirection) {\n    for (let i = startingPoint; i < grid.length; i++) {\n      if (startingDirection == \"horizontal\") {\n        if (ship.length == 2) {\n          if (grid[i] == null && grid[i + 1] == null) {\n            grid[i] = ship;\n            grid[i + 1] = ship;\n            return grid.slice(i, i + 2);\n          } else if (grid[i] == null && grid[i - 1] == null) {\n            grid[i] = ship;\n            grid[i - 1] = ship;\n            return grid.slice(i, i - 2);\n          }\n        } else if (ship.length == 3) {\n          if (grid[i] == null && grid[i + 1] == null && grid[i + 2] == null) {\n            grid[i] = ship;\n            grid[i + 1] = ship;\n            grid[i + 2] = ship;\n            return grid.slice(i, i + 3);\n          } else if (\n            grid[i] == null &&\n            grid[i - 1] == null &&\n            grid[i - 2] == null\n          ) {\n            grid[i] = ship;\n            grid[i - 1] = ship;\n            grid[i - 2] = ship;\n            return grid.slice(i, i - 3);\n          }\n        } else if (ship.length == 4) {\n          if (grid[i] == null && grid[i + 1] == null) {\n            grid[i] = ship;\n            grid[i + 1] = ship;\n            grid[i + 2] = ship;\n            grid[i + 3] = ship;\n            return grid.slice(i, i + 4);\n          } else if (\n            grid[i] == null &&\n            grid[i - 1] == null &&\n            grid[i - 2] == null &&\n            grid[i - 3] == null\n          ) {\n            grid[i] = ship;\n            grid[i - 1] = ship;\n            grid[i - 2] = ship;\n            grrid[i - 3] = ship;\n            return grid.slice(i, i - 4);\n          }\n        } else if (ship.length == 5) {\n          if (grid[i] == null && grid[i + 1] == null) {\n            grid[i] = ship;\n            grid[i + 1] = ship;\n            grid[i + 2] = ship;\n            grid[i + 3] = ship;\n            grid[i + 4] = ship;\n            return grid.slice(i, i + 5);\n          } else if (\n            grid[i] == null &&\n            grid[i - 1] == null &&\n            grid[i - 2] == null &&\n            grid[i - 3] == null &&\n            grid[i - 4] == null\n          ) {\n            grid[i] = ship;\n            grid[i - 1] = ship;\n            grid[i - 2] = ship;\n            grrid[i - 3] = ship;\n            grid[i - 4] = ship;\n            return grid.slice(i, i - 5);\n          }\n        }\n      } else if (startingDirection == \"vertical\") {\n        if (ship.length == 2) {\n          if (grid[i] == null && grid[i + 10] == null) {\n            grid[i] = ship;\n            grid[i + 10] = ship;\n            return [grid[i], grid[i + 10]];\n          } else if (grid[i] == null && grid[i - 10] == null) {\n            grid[i] = ship;\n            grid[i - 10] = ship;\n            return [grid[i], grid[i - 10]];\n          }\n        } else if (ship.length == 3) {\n          if (grid[i] == null && grid[i + 10] == null && grid[i + 20] == null) {\n            grid[i] = ship;\n            grid[i + 10] = ship;\n            grid[i + 20] = ship;\n            return [grid[i], grid[i + 10], grid[i + 20]];\n          } else if (\n            grid[i] == null &&\n            grid[i - 10] == null &&\n            grid[i - 20] == null\n          ) {\n            grid[i] = ship;\n            grid[i - 10] = ship;\n            grid[i - 20] = ship;\n            return [grid[i], grid[i - 10], grid[i - 20]];\n          }\n        } else if (ship.length == 4) {\n          if (\n            grid[i] == null &&\n            grid[i + 10] == null &&\n            grid[i + 20] == null &&\n            grid[i + 30] == null\n          ) {\n            grid[i] = ship;\n            grid[i + 10] = ship;\n            grid[i + 20] = ship;\n            grid[i + 30] = ship;\n            return [grid[i], grid[i + 10], grid[i + 20], grid[i + 30]];\n          } else if (\n            grid[i] == null &&\n            grid[i - 10] == null &&\n            grid[i - 20] == null &&\n            grid[i - 30] == null\n          ) {\n            grid[i] = ship;\n            grid[i - 10] = ship;\n            grid[i - 20] = ship;\n            grid[i - 30] = ship;\n            return [grid[i], grid[i - 10], grid[i - 20], grid[i - 30]];\n          }\n        } else if (ship.length == 5) {\n          if (\n            grid[i] == null &&\n            grid[i + 10] == null &&\n            grid[i + 20] == null &&\n            grid[i + 30] == null &&\n            grid[i + 40] == null\n          ) {\n            grid[i] = ship;\n            grid[i + 10] = ship;\n            grid[i + 20] = ship;\n            grid[i + 30] = ship;\n            grid[i + 40] = ship;\n            return [\n              grid[i],\n              grid[i + 10],\n              grid[i + 20],\n              grid[i + 30],\n              grid[i + 40],\n            ];\n          } else if (\n            grid[i] == null &&\n            grid[i - 10] == null &&\n            grid[i - 20] == null &&\n            grid[i - 30] == null &&\n            grid[i - 40] == null\n          ) {\n            grid[i] = ship;\n            grid[i - 10] = ship;\n            grid[i - 20] = ship;\n            grid[i - 30] = ship;\n            grid[i - 40] = ship;\n            return [\n              grid[i],\n              grid[i - 10],\n              grid[i - 20],\n              grid[i - 30],\n              grid[i - 40],\n            ];\n          }\n        }\n      }\n    }\n  }\n  function receiveAttack(x, y) {\n    let xInt = x.charCodeAt(0) - 97;\n    let xCoordinate = xInt * 10;\n    let yCoordinate = y;\n    let gridPoint = xCoordinate + yCoordinate;\n    let selectedPoint = grid[gridPoint];\n    if (selectedPoint != null && selectedPoint.sunkStatus == false) {\n      (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.hit)(selectedPoint);\n      //checks if all ships have sunk\n    } else if (selectedPoint == null) {\n      selectedPoint = { status: \"miss!\" };\n    }\n\n    return selectedPoint;\n  }\n  function checkIfAllShipsSunk() {\n    for (let i = 0; i < grid.length; i++) {\n      if (grid[i] != null && grid[i] != { status: \"miss\" }) {\n        if (grid[i].sunkStatus == true) {\n          continue;\n        } else if (grid[i].sunkStatus == false) {\n          return false;\n        }\n      } else {\n        continue;\n      }\n    }\n    return true;\n  }\n  return { grid, placeShip, receiveAttack, checkIfAllShipsSunk };\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\n\nlet Henry = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(\"Henry\");\nlet Comp = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.Computer)();\nlet henrysBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\nlet compBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\nlet carrier1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(5, 0, false);\nlet battleship1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, 0, false);\nlet battleship2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, 0, false);\nlet cruiser1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet cruiser2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet cruiser3 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub3 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub4 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet destroyer1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer3 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer4 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer5 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\n\nlet playersShips = [\n  carrier1,\n  battleship1,\n  battleship2,\n  cruiser1,\n  cruiser2,\n  cruiser3,\n  sub1,\n  sub2,\n  sub3,\n  sub4,\n  destroyer1,\n  destroyer2,\n  destroyer3,\n  destroyer4,\n  destroyer5,\n];\n\nlet carrier1Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(5, 0, false);\nlet battleship1Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, 0, false);\nlet battleship2Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, 0, false);\nlet cruiser1Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet cruiser2Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet cruiser3Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub1Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub2Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub3Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet sub4Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 0, false);\nlet destroyer1Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer2Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer3Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer4Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\nlet destroyer5Comp = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 0, false);\n\nlet computersShips = [\n  carrier1Comp,\n  battleship1Comp,\n  battleship2Comp,\n  cruiser1Comp,\n  cruiser2Comp,\n  cruiser3Comp,\n  sub1Comp,\n  sub2Comp,\n  sub3Comp,\n  sub4Comp,\n  destroyer1Comp,\n  destroyer2Comp,\n  destroyer3Comp,\n  destroyer4Comp,\n  destroyer5Comp,\n];\n\n//the following placeShip functions are temporary placeholders to further test game cycle\nhenrysBoard.placeShip(carrier1Comp, 7, \"vertical\");\nhenrysBoard.placeShip(battleship1Comp, 3, \"horizontal\");\nhenrysBoard.placeShip(battleship2Comp, 8, \"horizontal\");\nhenrysBoard.placeShip(cruiser1Comp, 12, \"horizontal\");\nhenrysBoard.placeShip(cruiser2Comp, 15, \"horizontal\");\nhenrysBoard.placeShip(cruiser3Comp, 16, \"horizontal\");\nhenrysBoard.placeShip(sub1Comp, 75, \"vertical\");\nhenrysBoard.placeShip(sub2Comp, 76, \"vertical\");\nhenrysBoard.placeShip(sub4Comp, 78, \"vertical\");\n\nhenrysBoard.placeShip(destroyer1Comp, 80, \"horizontal\");\n\nhenrysBoard.placeShip(destroyer2Comp, 97, \"horizontal\");\nhenrysBoard.placeShip(destroyer3Comp, 82, \"horizontal\");\nhenrysBoard.placeShip(destroyer4Comp, 87, \"horizontal\");\nhenrysBoard.placeShip(destroyer5Comp, 90, \"horizontal\");\n\ncompBoard.placeShip(carrier1Comp, 7, \"vertical\");\ncompBoard.placeShip(battleship1Comp, 3, \"horizontal\");\ncompBoard.placeShip(battleship2Comp, 8, \"horizontal\");\ncompBoard.placeShip(cruiser1Comp, 12, \"horizontal\");\ncompBoard.placeShip(cruiser2Comp, 15, \"horizontal\");\ncompBoard.placeShip(cruiser3Comp, 16, \"horizontal\");\ncompBoard.placeShip(sub1Comp, 75, \"vertical\");\ncompBoard.placeShip(sub2Comp, 76, \"vertical\");\ncompBoard.placeShip(sub4Comp, 78, \"vertical\");\n\ncompBoard.placeShip(destroyer1Comp, 80, \"horizontal\");\n\ncompBoard.placeShip(destroyer2Comp, 97, \"horizontal\");\ncompBoard.placeShip(destroyer3Comp, 82, \"horizontal\");\ncompBoard.placeShip(destroyer4Comp, 87, \"horizontal\");\ncompBoard.placeShip(destroyer5Comp, 90, \"horizontal\");\nconsole.log(compBoard.grid);\n\n//the following block of code add unique IDs to dom elements\nlet gridPoint = document.createElement(\"div\");\ngridPoint.setAttribute(\"div\", \"gridSpot\");\nlet playerBoard = document.querySelector(\".Board1\");\nlet computersBoard = document.querySelector(\".Board2\");\nfor (let x = 0; x < 100; x++) {\n  let gridPoint = document.createElement(\"div\");\n  let gridPointComp = document.createElement(\"div\");\n  gridPoint.setAttribute(\"class\", \"playerGridSpot\");\n  gridPoint.setAttribute(\"id\", `player${x}`);\n  gridPointComp.setAttribute(\"class\", \"computerGridSpot\");\n  gridPointComp.setAttribute(\"id\", `computer${x}`);\n  playerBoard.appendChild(gridPoint);\n  computersBoard.appendChild(gridPointComp);\n}\n\nlet playersGridPoints = document.querySelectorAll(\".playerGridSpot\");\nfor (let i = 0; i < playersGridPoints.length; i++) {\n  //initializing Xint here to prevent any bugs if selected point is first row\n  let xInt = 0;\n  playersGridPoints[i].addEventListener(\"click\", () => {\n    console.log(`Computer selects Player at ${i}`);\n    //following formula prevents bugs if i is < 10\n    let y = Math.floor(i / 1) % 10;\n    let xInt = Math.floor(i / 10) % 10;\n    let xString = xInt.toString();\n    if (xString == \"\") {\n      xInt = 0;\n    }\n    let x = String.fromCharCode(97 + xInt);\n    if (playersGridPoints[i].innerText != \"\") {\n      return;\n    } else {\n      Comp.attack(henrysBoard, x, y);\n      if (henrysBoard.grid[i] == null) {\n        document.querySelector(`#player${i}`).innerText = \"MISS\";\n      } else if (\n        henrysBoard.grid[i] != null ||\n        henrysBoard.grid[i].sunkStatus == false\n      ) {\n        document.querySelector(`#player${i}`).innerText = \"X\";\n        document.querySelector(`#player${i}`).style.backgroundColor = \"red\";\n        console.log(henrysBoard.grid[i]);\n        if (henrysBoard.checkIfAllShipsSunk()) {\n          prompt(\"Computer beats Player\");\n        }\n      } else {\n        document.querySelector(`#player${i}`).innerText = \"MISS\";\n      }\n    }\n  });\n}\nlet computersGridPoints = document.querySelectorAll(\".computerGridSpot\");\nfor (let i = 0; i < computersGridPoints.length; i++) {\n  computersGridPoints[i].addEventListener(\"click\", () => {\n    console.log(`Player selects Computer at ${i}`);\n    let yString = i.toString().charAt(0);\n    let y = parseInt(yString);\n    let xString = i.toString().charAt(1);\n    let xInt = parseInt(xString);\n    let x = String.fromCharCode(97 + xInt);\n    Henry.attack(compBoard, x, y);\n    if (compBoard.grid[i] == null) {\n      document.querySelector(`#computer${i}`).innerText = \"MISS\";\n    } else if (\n      compBoard.grid[i] != null ||\n      compBoard.grid[i].sunkStatus == false\n    ) {\n      document.querySelector(`#computer${i}`).innerText = \"X\";\n      document.querySelector(`#computer${i}`).style.backgroundColor = \"red\";\n      console.log(compBoard.grid[i]);\n      if (compBoard.checkIfAllShipsSunk()) {\n        prompt(\"Player beats Computer!\");\n      }\n    } else {\n      document.querySelector(`#computer${i}`).innerText = \"MISS\";\n    }\n  });\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Computer\": () => (/* binding */ Computer),\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nfunction Player(name) {\n  function attack(gameBoard, xCoordinate, yCoordinate) {\n    return gameBoard.receiveAttack(xCoordinate, yCoordinate);\n  }\n  return { name, attack };\n}\nfunction Computer() {\n  function attack(gameBoard, xCoordinate, yCoordinate) {\n    return gameBoard.receiveAttack(xCoordinate, yCoordinate);\n  }\n  return { attack };\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship),\n/* harmony export */   \"hit\": () => (/* binding */ hit),\n/* harmony export */   \"isSunk\": () => (/* binding */ isSunk)\n/* harmony export */ });\nfunction Ship(length, hit, sunkStatus) {\n  return { length, hit, sunkStatus };\n}\n\nfunction hit(shipObject) {\n  let numberOfHits = shipObject.hit;\n  numberOfHits = numberOfHits + 1;\n  shipObject.hit = numberOfHits;\n  isSunk(shipObject);\n  return shipObject;\n}\n\nfunction isSunk(ship) {\n  if (ship.length == ship.hit) {\n    ship.sunkStatus = true;\n  }\n  return ship;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;