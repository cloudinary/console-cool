var consoleCool =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: setMessages, setScript, next, help */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessages", function() { return setMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScript", function() { return setScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "help", function() { return help; });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/constants */ "./lib/constants.js");


/**
 * @module ConsoleCool
 */

let userMessages;
let currentStep;
let script;

function nextStep() {
  if (currentStep < script.flow.length - 1) {
    currentStep++;
  }
  return userMessages.messages[script.flow[currentStep]]
}

/**
 * @typedef {object} script
 * @property {string} name - The name of the flow.
 * @property {string[]} flow - An ordered list of messages
 */

/**
 * Sets the messages to be used by ConsoleCool
 * @param {object} messages
 * @param {script[]} scripts
 */
function setMessages({messages, scripts}) {
  userMessages = {messages, scripts};
}

/**
 * Selects the script to run. This will also reset the step counter.
 * @param {string|int} id the id of the script
 */
function setScript(id){
  script = userMessages.scripts[id];
  currentStep = -1;
}

function formatInstructions(source) {
  if (!source) {
    return;
  }
  if (Array.isArray(source)){
    let all = source.reduce((out, line)=> {
      if (Array.isArray(line)) {
        let [text, ...style] = line;
        out.text.push(text);
        out.style = out.style.concat(style);
      } else {
        out.text.push(`%c${line}`);
        out.style.push(_lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"]);
      }
      return out;
    }, {text:[], style:[]});
    return [all.text.join("\n") + "\n", ...all.style];
  } else {
    return [source];
  }
}

function instructions( {content}){
  console.log.call(this, ...formatInstructions(content));
}

function code({code}){
  if (!code) {
    return;
  }
  if(Array.isArray(code)) {
    console.log(code.join('\n'));
  }else {

    console.log(code);
  }
}

/**
 * Displays the next step in the script
 */
function next() {
  let step = nextStep();
  instructions(step);
  code(step);
}

/**
 * Displays the general help message
 */
function help(){
  instructions(userMessages.messages.help);
}


/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/*! exports provided: INSTRUCTION_STYLE, CODE_STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_STYLE", function() { return INSTRUCTION_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_STYLE", function() { return CODE_STYLE; });
const INSTRUCTION_STYLE = "font-family: serif; font-size: 1rem";
const CODE_STYLE = "font-family: monospace";


/***/ })

/******/ });
//# sourceMappingURL=console-cool.js.map