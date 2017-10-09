/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);

var numOfEnemies = 4,
    battlefield = document.querySelector(".app"),
    pos = 0,
    score = 0,
    speed = 100;

function createEnemies(num) {
  for (i=0;i < num; i++) {
    var enemy = document.createElement("div");
    var getPosition = Math.floor((Math.random() * 100) + 1) * 3;
    enemy.className = "enemy enemy" + i; 
    enemy.style.top = 120 * i + "px";
    enemy.style.left = "-" + getPosition + "px";
    pos = getPosition;
    battlefield.appendChild(enemy);
    attack(enemy, pos);
    attachHandler(enemy);
  }
}

function updateScore() {
  score++;
  console.log(score);
  var scoreboard = document.getElementsByClassName("scoreboard");
  console.log('scoreboard', scoreboard);
  scoreboard[0].innerHTML =  score; 

}

function killGuy(guy) {
  //kill guy
  
  console.log(guy.offsetTop);
  //update score
}

function attachHandler(enemy) {
  enemy.onclick = function(e) {
    e.target.className += " poof";
    killGuy(e.target);
    updateScore();
  }
}

function attack(enemy, pos) {
  pos = pos + 10;
  enemy.style.left = pos + "px"
  setTimeout(function(){
    attack(enemy, pos)
  }, speed);
}

createEnemies(numOfEnemies);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);