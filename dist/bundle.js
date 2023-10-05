/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/app.config.js":
/*!**********************************!*\
  !*** ./src/config/app.config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

(__webpack_require__(/*! dotenv */ "dotenv").config)();

exports.PORT= process.env.PORT || 1234

/***/ }),

/***/ "./src/controllers/index.controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/index.controller.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const indexServices = __webpack_require__(/*! ../services/index.services */ "./src/services/index.services.js");

async function get(req, res, next) {
  try {
      const data = await indexServices.get(req);
      res.json(data);
  } catch (err) {
      console.error(`Get Error`, err.message);
      next(err);
  }
}

async function post(req, res, next) {
  try {
    res.json(await indexServices.post(req.body));
  } catch (err) {
    console.error(`Post Error`, err.message);
    next(err);
  }
}


module.exports = {
  get,
  post,
}

/***/ }),

/***/ "./src/routes/index.route.js":
/*!***********************************!*\
  !*** ./src/routes/index.route.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(/*! express */ "express");
const router = express.Router();
const indexController = __webpack_require__(/*! ../controllers/index.controller */ "./src/controllers/index.controller.js");


router.get('/', indexController.get);
  
router.post('/', indexController.post);


module.exports = router;

/***/ }),

/***/ "./src/services/index.services.js":
/*!****************************************!*\
  !*** ./src/services/index.services.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const config = __webpack_require__(/*! ../config/app.config */ "./src/config/app.config.js");


async function get() {
    const data = {
        message: 'Hello'
    }
    return data
}


async function post() {
    return
}


module.exports = {
    get,
    post
}

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const express = __webpack_require__(/*! express */ "express")
const appConfig = __webpack_require__(/*! ./config/app.config */ "./src/config/app.config.js")

const routeIndex = __webpack_require__(/*! ./routes/index.route */ "./src/routes/index.route.js")

const app = express()

app.use('/', routeIndex);


app.listen(appConfig.PORT, () => {
  console.log(`Test app listening on port ${appConfig.PORT}`)
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map