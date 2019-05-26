var messages =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/messages.js");
/******/ })
/************************************************************************/
/******/ ({

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


/***/ }),

/***/ "./test/messages.js":
/*!**************************!*\
  !*** ./test/messages.js ***!
  \**************************/
/*! exports provided: messages, scripts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scripts", function() { return scripts; });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");


let messages = {
  "1": {
    "content": "Cool! you're a developer too!\nHow about trying some of our features?"
  },
  "2": {
    "content": [
      "Cool! you're a developer too!\nHow about trying some of our features?",
      ["Type %cnext()%c to move the next step.", _lib_constants__WEBPACK_IMPORTED_MODULE_0__["CODE_STYLE"], _lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"]],
      ["You can also type %chelp()%c to get some instructions.", _lib_constants__WEBPACK_IMPORTED_MODULE_0__["CODE_STYLE"], _lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"]],
      "To get started, create an instance of Cloudinary, for our demo cloud, and scroll to the demo image:"
    ],
    "code": [
      "cl = new cloudinary.Cloudinary({cloud_name: 'demo'})",
      "img = document.getElementById('imagine')",
      "img.scrollIntoView()"
    ]
  },
  "3": {
    "content": "This image is too large, you better crop its width, try this:",
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'crop', width: 400}))"
  },
  "4": {
    "content": [
      "That's not very good. We need to see the face of the person in the photo.",
      "Luckyly, that's easy enough with Cloudinary. Try this:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'crop', width: 400, gravity: 'face'}))"
  },
  "5": {
    "content": [
      "That's better!",
      "The face-gravity feature allows you to crop millions of images automatically and never miss a face.",
      "In fact, Cloudinary can find the most interesting thing in the image even if it's not a face.",
      "Let's try using our auto-gravity parameter:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'crop', width: 400, gravity: 'auto'}))"
  },
  "6": {
    "content": [
      "How cool is that? The parameter applies a sophisticated AI algorithm that analyzes the pixels in an image and prioritizes the most salient areas of each image on-the-fly.",
      "The analysis gives priority to skin tones, edge detection, color contrasts, any detected faces, and more, in order to determine the most important areas to keep when it crops.",
      "Now let's play with the radius and create a nice rounded-corners image on-the-fly. Try this:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'fill', radius: 'max', width: 400, height: 400, gravity: 'auto'}))"
  },
  "7": {
    "content": [
      "Cloudinary can also create a variety of effects. For example, check out how simple it is to create a fun cartoon image:"
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'fill', effect: 'cartoonify:10:20', width: 400, height: 400, gravity: 'auto'}))"
  },
  "end": {
    "content": [
      "Kudos for passing the transformation challenge!",
      "This was just a small taste of Cloudinary's image solution for developers. You've gotten this far, so you're ready to start transforming images on your own site. Registration is free, and the free tier provides plenty of quota to play around and get Cloudinary into your site. Don't forget to check out everything Cloudinary can do with video too!",
      ["Click on the following link to sign up for a %cfree%c account: https://cloudinary.com/users/register/free",
      "color:red", _lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"]]
    ],
    "code": "img.setAttribute('src', cl.url('boy-and-dog', {crop: 'fill', effect: 'cartoonify:10:20', width: 400, height: 400, gravity: 'auto'}))"
  },
  "help": {
    "content": [
      ["%cTo get to the next step, simple type %cnext()%c",_lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"], _lib_constants__WEBPACK_IMPORTED_MODULE_0__["CODE_STYLE"], _lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"]],
      ["%cYou can also jump to a specific step by type %cstep(x)%c",_lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"], _lib_constants__WEBPACK_IMPORTED_MODULE_0__["CODE_STYLE"], _lib_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_STYLE"]],
    ]
  }
};
let scripts = [
  {
    "name": "basic first time",
    "flow": [2, 3, 4, 5]
  }
];

/* harmony default export */ __webpack_exports__["default"] = ({messages, scripts});


/***/ })

/******/ });
//# sourceMappingURL=messages.js.map