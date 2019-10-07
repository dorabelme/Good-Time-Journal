(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* //####################################################### */\n/* DORA LOGIN CSS */\n\n.loginbox {\n  width: 30rem;\n  margin: 0 auto;\n  margin-top: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: white;\n  box-shadow: 1rem 1rem 5rem rgba(30, 49, 78, 0.14);\n  padding: 3rem 2rem;\n  min-height: 16.5rem;\n  text-align: center;\n}\n\n\n.loginHeader {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #1e314e;\n  line-height: 1.2em;\n  margin: 0;\n  letter-spacing: -0.15rem;\n}\n\n.loginbox p {\n  margin-bottom: 6rem;\n}\n\n#form {\n  display: flex;\n  flex-direction: column;\n}\n\n#form input {\n  margin-bottom: 2rem;\n  height: 3rem;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n}\n\n.button {\n  border: 0.5px transparent solid;\n  background-color: #a3e4d7;\n  border-radius: 0.5rem;\n  padding: 1rem 2rem;\n  width: 40%;\n  margin: 0 auto;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: #1e314e;\n  text-transform: none;\n  cursor: pointer;  \n  font-weight: 600;\n}\n\n.loginbox {\n  width: 30rem;\n  margin: 0 auto;\n  margin-top: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: white;\n  box-shadow: 1rem 1rem 5rem rgba(30, 49, 78, 0.14);\n  padding: 3rem 2rem;\n  min-height: 16.5rem;\n  text-align: center;\n}\n\n\n.loginHeader {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #1e314e;\n  line-height: 1.2em;\n  margin: 0;\n  letter-spacing: -0.15rem;\n}\n\n.loginbox p {\n  margin-bottom: 6rem;\n}\n\n#form {\n  display: flex;\n  flex-direction: column;\n}\n\n.form input {\n  margin-bottom: 2rem;\n  height: 3rem;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n  padding-left: 0.5rem;\n}\n\n.button {\n  border: 0.5px transparent solid;\n  background-color: #a3e4d7;\n  border-radius: 0.5rem;\n  padding: 1rem 2rem;\n  width: 40%;\n  margin: 0 auto;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: #1e314e;\n  text-transform: none;\n  cursor: pointer;  \n  font-weight: 600;\n}\n\n.upperButton {\n  margin-bottom: 2rem;\n}\n\n.button:hover {\n  background: white;\n  color: #1e314e;\n  border: 0.1rem solid #a3e4d7;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (max-width: 500px){\n  .loginbox{\n    width: 80%;\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n  }\n  .loginbox p {\n    margin-bottom: 3rem;\n  }\n  .loginHeader {\n    font-size: 2rem;\n  }\n  .form input {\n    height: 2rem;\n  }\n  .button {\n    padding: 1rem 1rem;\n    font-size: 1rem;\n  }\n}\n\n\n/* DORA NAVBAR AND ACTIVITYFORM CSS */\n\n.nav {\n  max-width: 60rem;\n  margin: 3rem auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1vw 0 1vw;\n}\n\n.nav .loginHeader {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  margin-top: 0;\n}\n\n.navigation-bar {\n  display: flex;\n  flex-direction: row;\n}\n\n.navigation-bar button {\n  margin: 1rem;\n  padding: 0.5rem 2rem;\n  background-color: #a3e4d7;\n}\n\n.navigation-bar button:hover {\n  background: white;\n  color: #1e314e;\n  border: 0.1rem solid #a3e4d7;\n}\n\n.inputContainer {\n  max-width: 60rem;\n  border-radius: 0.5rem;\n  margin: 3rem auto;\n  padding: 1rem;\n  background: white;\n  box-shadow: 1rem 1rem 5rem rgba(30, 49, 78, 0.14);\n  padding: 3rem 2rem;\n  text-align: center;\n}\n\n.activityLogForm {\n  max-width: 60rem;\n  margin: 2rem auto;\n}\n\n/* .buttonPost {\n  display: flex;\n  justify-content: center; \n  margin-top: 3rem;\n  padding: 1rem 0.5rem;\n} */\n\n.buttonPost:hover {\n  background: white;\n  color: #1e314e;\n  border: 0.1rem solid #a3e4d7;\n}\n\n.form2 input {\n  height: 6rem;\n}\n\n@media (max-width: 500px){\n  .nav{\n    width: 80%;\n    margin: 3rem auto;\n  }\n  .inputContainer {\n    width: 80%;\n    margin: 3rem auto;\n  }\n  .button {\n    padding: 1rem 1rem;\n    font-size: 1rem;\n  }\n}\n\n.post {\n  margin: 3rem auto;\n}\n\n.buttonDiv {\n  max-width: 60rem;;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_PrivateRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/PrivateRoute */ "./src/utils/PrivateRoute.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Login */ "./src/components/Login.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/User */ "./src/components/User.js");
/* harmony import */ var _components_ReflectionLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ReflectionLog */ "./src/components/ReflectionLog.js");
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/App.js";








function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/reflectionlog",
    component: _components_ReflectionLog__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/login",
    component: _components_Login__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_PrivateRoute__WEBPACK_IMPORTED_MODULE_3__["PrivateRoute"], {
    exact: true,
    path: "/",
    component: _components_User__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/*! exports provided: LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE, GET_START, GET_SUCCESS, GET_FAILURE, GETUSERPOSTS_START, GETUSERPOSTS_SUCCESS, GETUSERPOSTS_FAILURE, GET1_START, GET1_SUCCESS, GET1_FAILURE, POST_START, POST_SUCCESS, POST_FAILURE, UPDATE_START, UPDATE_SUCCESS, UPDATE_FAILURE, DELETE_START, DELETE_SUCCESS, DELETE_FAILURE, NEW_CYCLE_UPDATE_START, NEW_CYCLE_UPDATE_SUCCESS, NEW_CYCLE_UPDATE_FAILURE, CREATELOG_START, CREATELOG_SUCCESS, CREATELOG_FAILURE, CREATELOGENTRY_START, CREATELOGENTRY_SUCCESS, CREATELOGENTRY_FAILURE, GETCYCLEDATE_START, GETCYCLEDATE_SUCCESS, GETCYCLEDATE_FAILURE, GETWEEKNUMBER_START, GETWEEKNUMBER_SUCCESS, GETWEEKNUMBER_FAILURE, WEEKNUMBERUPDATE_START, WEEKNUMBERUPDATE_SUCCESS, WEEKNUMBERUPDATE_FAILURE, login, register, getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost, getCycleDate, updateEndOfWeekCycle, getWeekNumber, updateWeekNumber, createLog, createLogEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_START", function() { return REGISTER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAILURE", function() { return REGISTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_START", function() { return GET_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUCCESS", function() { return GET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAILURE", function() { return GET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETUSERPOSTS_START", function() { return GETUSERPOSTS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETUSERPOSTS_SUCCESS", function() { return GETUSERPOSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETUSERPOSTS_FAILURE", function() { return GETUSERPOSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET1_START", function() { return GET1_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET1_SUCCESS", function() { return GET1_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET1_FAILURE", function() { return GET1_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_START", function() { return POST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SUCCESS", function() { return POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_FAILURE", function() { return POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_START", function() { return UPDATE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUCCESS", function() { return UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAILURE", function() { return UPDATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_START", function() { return DELETE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAILURE", function() { return DELETE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CYCLE_UPDATE_START", function() { return NEW_CYCLE_UPDATE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CYCLE_UPDATE_SUCCESS", function() { return NEW_CYCLE_UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CYCLE_UPDATE_FAILURE", function() { return NEW_CYCLE_UPDATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATELOG_START", function() { return CREATELOG_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATELOG_SUCCESS", function() { return CREATELOG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATELOG_FAILURE", function() { return CREATELOG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATELOGENTRY_START", function() { return CREATELOGENTRY_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATELOGENTRY_SUCCESS", function() { return CREATELOGENTRY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATELOGENTRY_FAILURE", function() { return CREATELOGENTRY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETCYCLEDATE_START", function() { return GETCYCLEDATE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETCYCLEDATE_SUCCESS", function() { return GETCYCLEDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETCYCLEDATE_FAILURE", function() { return GETCYCLEDATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETWEEKNUMBER_START", function() { return GETWEEKNUMBER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETWEEKNUMBER_SUCCESS", function() { return GETWEEKNUMBER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETWEEKNUMBER_FAILURE", function() { return GETWEEKNUMBER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKNUMBERUPDATE_START", function() { return WEEKNUMBERUPDATE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKNUMBERUPDATE_SUCCESS", function() { return WEEKNUMBERUPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKNUMBERUPDATE_FAILURE", function() { return WEEKNUMBERUPDATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsByUserId", function() { return getPostsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostById", function() { return getPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPost", function() { return newPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCycleDate", function() { return getCycleDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEndOfWeekCycle", function() { return updateEndOfWeekCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekNumber", function() { return getWeekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWeekNumber", function() { return updateWeekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLog", function() { return createLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogEntry", function() { return createLogEntry; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/axiosAuth */ "./src/utils/axiosAuth.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const REGISTER_START = 'REGISTER_START';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const GET_START = 'GET_START';
const GET_SUCCESS = 'GET_SUCCESS';
const GET_FAILURE = 'GET_FAILURE';
const GETUSERPOSTS_START = 'GETUSERPOSTS_START';
const GETUSERPOSTS_SUCCESS = 'GETUSERPOSTS_SUCCESS';
const GETUSERPOSTS_FAILURE = 'GETUSERPOSTS_FAILURE';
const GET1_START = 'GET1_START';
const GET1_SUCCESS = 'GET1_SUCCESS';
const GET1_FAILURE = 'GET1_FAILURE';
const POST_START = 'POST_START';
const POST_SUCCESS = 'POST_SUCCESS';
const POST_FAILURE = 'POST_FAILURE';
const UPDATE_START = 'UPDATE_START';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
const UPDATE_FAILURE = 'UPDATE_FAILURE';
const DELETE_START = 'DELETE_START';
const DELETE_SUCCESS = 'DELETE_SUCCESS';
const DELETE_FAILURE = 'DELETE_FAILURE';
const NEW_CYCLE_UPDATE_START = 'NEW_CYCLE_UPDATE_START';
const NEW_CYCLE_UPDATE_SUCCESS = 'NEW_CYCLE_UPDATE_SUCCESS';
const NEW_CYCLE_UPDATE_FAILURE = 'NEW_CYCLE_UPDATE_FAILURE';
const CREATELOG_START = 'CREATELOG_START';
const CREATELOG_SUCCESS = 'CREATELOG_SUCCESS';
const CREATELOG_FAILURE = 'CREATELOG_FAILURE';
const CREATELOGENTRY_START = 'CREATELOGENTRY_START';
const CREATELOGENTRY_SUCCESS = 'CREATELOGENTRY_SUCCESS';
const CREATELOGENTRY_FAILURE = 'CREATELOGENTRY_FAILURE';
const GETCYCLEDATE_START = 'GETCYCLEDATE_START';
const GETCYCLEDATE_SUCCESS = 'GETCYCLEDATE_SUCCESS';
const GETCYCLEDATE_FAILURE = 'GETCYCLEDATE_FAILURE';
const GETWEEKNUMBER_START = 'GETWEEKNUMBER_START';
const GETWEEKNUMBER_SUCCESS = 'GETWEEKNUMBER_SUCCESS';
const GETWEEKNUMBER_FAILURE = 'GETWEEKNUMBER_FAILURE';
const WEEKNUMBERUPDATE_START = 'WEEKNUMBERUPDATE_START';
const WEEKNUMBERUPDATE_SUCCESS = 'WEEKNUMBERUPDATE_SUCCESS';
const WEEKNUMBERUPDATE_FAILURE = 'WEEKNUMBERUPDATE_FAILURE';
const login = creds => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('https://dyl-backend.herokuapp.com/api/auth/login', creds).then(res => {
    console.log("LOGIN_RES: ", res);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user_id', res.data.user.id);
    localStorage.setItem('username', res.data.user.username);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.user
    });
  }).catch(err => {
    console.log("LOGIN ERR: ", err);
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.response.message
    });
  });
};
const register = creds => dispatch => {
  dispatch({
    type: REGISTER_START
  });
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('https://dyl-backend.herokuapp.com/api/auth/register', creds).then(res => {
    console.log("REGISTER RES: ", res);
    dispatch({
      type: REGISTER_SUCCESS
    });
  }).catch(err => {
    console.log("REGISTER ERR: ", err);
    dispatch({
      type: REGISTER_FAILURE
    });
  });
};
const getPosts = () => dispatch => {
  dispatch({
    type: GET_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().get('https://dyl-backend.herokuapp.com/api/posts').then(res => {
    console.log("GETPOSTS RES: ", res);
    dispatch({
      type: GET_SUCCESS
    });
  }).catch(err => {
    console.log("GETPOSTS ERR: ", err);
    dispatch({
      type: GET_FAILURE
    });
  });
};
const getPostsByUserId = user_id => dispatch => {
  console.log("getPostsByUserId user_id:", user_id);
  dispatch({
    type: GETUSERPOSTS_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().get("https://dyl-backend.herokuapp.com/api/home/".concat(user_id)).then(res => {
    console.log("GETUSERPOSTS RES: ", res);
    dispatch({
      type: GETUSERPOSTS_SUCCESS,
      payload: res.data
    });
  }).catch(err => {
    console.log("GETUSERPOSTS ERR: ", err);
    dispatch({
      type: GETUSERPOSTS_FAILURE
    });
  });
};
const getPostById = id => dispatch => {
  console.log(id);
  dispatch({
    type: GET1_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().get("https://dyl-backend.herokuapp.com/api/posts/".concat(id)).then(res => {
    console.log("GET1 RES: ", res);
    dispatch({
      type: GET1_SUCCESS
    });
  }).catch(err => {
    console.log("GET1 ERR: ", err);
    dispatch({
      type: GET1_FAILURE
    });
  });
}; //add ID to arg

const newPost = (postObj, id) => dispatch => {
  console.log("postObj: ", postObj);
  console.log("post user_id: ", id);
  dispatch({
    type: POST_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().post('https://dyl-backend.herokuapp.com/api/posts', postObj, id).then(res => {
    console.log("POST RES: ", res);
    dispatch({
      type: POST_SUCCESS,
      payload: res.data.posts
    });
  }).catch(err => {
    console.log("POST ERR: ", err);
    dispatch({
      type: POST_FAILURE
    });
  });
};
const updatePost = (id, postObj) => dispatch => {
  console.log("id: ", id);
  dispatch({
    type: UPDATE_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().put("https://dyl-backend.herokuapp.com/api/posts/".concat(id), postObj).then(res => {
    console.log("UPDATE RES: ", res);
    dispatch({
      type: UPDATE_SUCCESS,
      payload: res.data.posts
    });
  }).catch(err => {
    console.log("UPDATE ERR: ", err);
    dispatch({
      type: UPDATE_FAILURE
    });
  });
};
const deletePost = (id, user_id) => dispatch => {
  console.log("Delete id: ", id, "User_id: ", user_id);
  dispatch({
    type: DELETE_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().delete("https://dyl-backend.herokuapp.com/api/posts/".concat(id), user_id).then(res => {
    console.log("DELETE RES: ", res);
    dispatch({
      type: DELETE_SUCCESS
    });
  }).catch(err => {
    console.log("DELETE ERR: ", err);
    dispatch({
      type: DELETE_FAILURE
    });
  });
}; //getEndOfWeekCycle

const getCycleDate = () => dispatch => {
  dispatch({
    type: GETCYCLEDATE_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().get('https://dyl-backend.herokuapp.com/api/cycle/1').then(res => {
    console.log("GETCYCLEDATE RES: ", res);
    dispatch({
      type: GETCYCLEDATE_SUCCESS
    });
  }).catch(err => {
    console.log("GETCYCLEDATE ERR: ", err);
    dispatch({
      type: GETCYCLEDATE_FAILURE
    });
  });
};
const updateEndOfWeekCycle = () => dispatch => {
  console.log("NEW CYCLE: ", moment__WEBPACK_IMPORTED_MODULE_2___default()().add(7, 'days').calendar(), "TYPE OF: ", typeof moment__WEBPACK_IMPORTED_MODULE_2___default()().add(7, 'days').calendar());
  dispatch({
    type: NEW_CYCLE_UPDATE_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().put("https://dyl-backend.herokuapp.com/api/cycle/1", moment__WEBPACK_IMPORTED_MODULE_2___default()().add(7, 'days').calendar()).then(res => {
    console.log("NEW CYCLE UPDATE RES: ", res);
    dispatch({
      type: NEW_CYCLE_UPDATE_SUCCESS
    });
  }).catch(err => {
    console.log("NEW CYCLE UPDATE ERR: ", err);
    dispatch({
      type: NEW_CYCLE_UPDATE_FAILURE
    });
  });
}; //get weekNumber

const getWeekNumber = () => dispatch => {
  dispatch({
    type: GETWEEKNUMBER_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().get('https://dyl-backend.herokuapp.com/api/time/1').then(res => {
    console.log("GETWEEKNUMBER RES: ", res);
    dispatch({
      type: GETWEEKNUMBER_SUCCESS
    });
  }).catch(err => {
    console.log("GETWEEKNUMBER ERR: ", err);
    dispatch({
      type: GETWEEKNUMBER_FAILURE
    });
  });
};
const updateWeekNumber = updatedWeekNumber => dispatch => {
  console.log("NEW WEEKNUMBER: ", updatedWeekNumber, "typeOf: ", typeof updatedWeekNumber);
  dispatch({
    type: WEEKNUMBERUPDATE_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().put("https://dyl-backend.herokuapp.com/api/time/1", 2).then(res => {
    console.log("WEEK NUMBER UPDATE RES: ", res);
    dispatch({
      type: WEEKNUMBERUPDATE_SUCCESS
    });
  }).catch(err => {
    console.log("WEEK NUMBER UPDATE ERR: ", err);
    dispatch({
      type: WEEKNUMBERUPDATE_FAILURE
    });
  });
};
const createLog = () => dispatch => {
  dispatch({
    type: CREATELOG_START
  });
  let newLog = [];
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().post('URL_TO_LOGS_ARRAY', newLog).then(res => {
    console.log("CREATELOG RES: ", res);
    dispatch({
      type: CREATELOG_SUCCESS
    }); //<-----PAYLOAD IS ENTIRE LOGS ARRAY
  }).catch(err => {
    console.log("CREATELOG ERR: ", err);
    dispatch({
      type: CREATELOG_FAILURE
    });
  });
};
const createLogEntry = (idToBePosted, currentLogNumber) => dispatch => {
  dispatch({
    type: CREATELOGENTRY_START
  });
  Object(_utils_axiosAuth__WEBPACK_IMPORTED_MODULE_1__["default"])().post("URL_TO_LOG_WITH_".concat(currentLogNumber), idToBePosted).then(res => {
    console.log("CREATELOGENTRY RES: ", res);
    dispatch({
      type: CREATELOGENTRY_SUCCESS
    }); //<-----PAYLOAD IS ENTIRE LOGS ARRAY
  }).catch(err => {
    console.log("CREATELOGENTRY ERR: ", err);
    dispatch({
      type: CREATELOGENTRY_FAILURE
    });
  });
};

/***/ }),

/***/ "./src/components/ActivityLog.js":
/*!***************************************!*\
  !*** ./src/components/ActivityLog.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActivityLogForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActivityLogForm */ "./src/components/ActivityLogForm.js");
/* harmony import */ var _ActivityLogPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityLogPosts */ "./src/components/ActivityLogPosts.js");
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/ActivityLog.js";








class ActivityLog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      id: "",
      user_id: "",
      postTitle: "",
      postBody: "",
      engagementScore: "",
      energyScore: "" // componentDidMount(){
      //     console.log("GET USER POSTS TRIGGERED")
      //     this.props.getPostsByUserId(localStorage.getItem('user_id'))
      // }

    };

    this.getPostsByUserid = e => {
      e.preventDefault();
      this.props.getPostsByUserId(this.state.user_id);
      this.setState({
        user_id: ""
      });
    };

    this.getPostById = e => {
      e.preventDefault();
      this.props.getPostById(this.state.id);
      this.setState({
        id: ""
      });
    };

    this.changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.newPost = e => {
      e.preventDefault();
      let postObj = {
        //username: needs to be added, pending addition to server DB
        user_id: parseInt(this.props.user_id, 10),
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        engagementScore: parseInt(this.state.engagementScore, 10),
        energyScore: parseInt(this.state.energyScore, 10),
        createdAt: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MMMM Do YYYY, h:mm:ss a')
      };
      console.log("POST TRIGGERED");
      this.props.newPost(postObj);
      console.log("GET USER POSTS TRIGGERED");
      this.props.getPostsByUserId(this.props.user_id);
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };

    this.updatePost = e => {
      console.log("UPDATE TRIGGERED");
      e.preventDefault();
      let updateId = parseInt(this.state.id, 10);
      let postObj = {
        user_id: parseInt(this.state.user_id, 10),
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        engagementScore: parseInt(this.state.engagementScore, 10),
        energyScore: parseInt(this.state.energyScore, 10)
      };
      this.props.updatePost(updateId, postObj);
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };

    this.deletePost = e => {
      console.log("DELETE TRIGGERED");
      e.preventDefault();
      let deleteId = parseInt(this.state.id, 10);
      this.props.deletePost(deleteId);
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };
  }

  timeStampCreator() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHour;
    let minutes = date.getMinutes();
    let ampm = date.getHours() > 12 ? "pm" : "am";
    let timeStamp = "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(hour, ":").concat(minutes).concat(ampm);
    return timeStamp;
  }

  timeStampTest() {
    let timestamp = "".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(timestamp);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ActivityLog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActivityLogForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActivityLogPosts__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "posts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }));
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user_id: state.user_id,
    username: state.username
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPosts: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPosts"],
  getPostsByUserId: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostsByUserId"],
  newPost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["newPost"],
  getPostById: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"],
  updatePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"],
  deletePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]
})(ActivityLog));

/***/ }),

/***/ "./src/components/ActivityLogForm.js":
/*!*******************************************!*\
  !*** ./src/components/ActivityLogForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/ActivityLogForm.js";






class ActivityLogForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      id: "",
      user_id: "",
      postTitle: "",
      postBody: "",
      engagementScore: "",
      energyScore: ""
    };

    this.changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.newPost = e => {
      e.preventDefault();
      let postObj = {
        username: localStorage.getItem('username'),
        user_id: parseInt(this.props.user_id, 10),
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        engagementScore: parseInt(this.state.engagementScore, 10),
        energyScore: parseInt(this.state.energyScore, 10),
        // createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
        postTime: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('LT'),
        postDate: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('L'),
        weekNumber: 0
      };
      console.log("POST TRIGGERED");
      this.props.newPost(postObj, parseInt(this.props.user_id, 10));
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };
  }

  isDateLaterThanCDate(date, cDate) {
    //input date format: dd/mm/yyyy
    let dateSplit = date.split("/"); //=====================

    let mm = dateSplit[0];
    let dd = dateSplit[1];
    let yyyy = dateSplit[2]; //====================

    let cDateSplit = cDate.split("/"); //=====================

    let cmm = cDateSplit[0];
    let cdd = cDateSplit[1];
    let cyyyy = cDateSplit[2]; //======================

    if (yyyy > cyyyy) {
      return true;
    } else if (yyyy === cyyyy && mm > cmm) {
      return true;
    } else if (yyyy === cyyyy && mm === cmm && dd > cdd) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    //reflectionLogPostIds arrays Assignment
    this.props.getCycleDate();

    if (this.props.endOfWeekCycle === "") {
      console.log("UPDATE CYCLE DATE TRIGGER");
      this.props.updateEndOfWeekCycle();
    } //--------------------------------


    if (this.props.weekNumber === 0 || this.isDateLaterThanCDate(this.props.endOfWeekCycle, moment__WEBPACK_IMPORTED_MODULE_3___default()().format('L'))) {
      let newWeekNumber = this.props.weekNumber + 1;
      this.props.updateWeekNumber();
    } // if (this.props.weekNumber === 0){
    //     return null
    // }else{
    //     if (this.props.latestLog[this.props.latestLog.length -1] !== this.props.posts[this.props.posts.length -1].id){
    //         let idToBePosted = this.props.posts[this.props.posts.length -1].id
    //         let currentLogNumber = this.props.logs.length
    //         this.props.createLogEntry(idToBePosted, currentLogNumber)
    //     }
    // }

  }

  timeStampTest() {
    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(7, 'days').calendar()); // mm/dd/yyyy past

    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('L')); // mm/dd/yyyy current

    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().add(7, 'days').calendar()); // mm/dd/yyyy future 
  }

  timeStampCreator() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHour;
    let minutes = date.getMinutes();
    let ampm = date.getHours() > 12 ? "pm" : "am";
    let timeStamp = "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(hour, ":").concat(minutes).concat(ampm);
    return timeStamp;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "activityLogForm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "Title",
      name: "postTitle",
      value: this.state.postTitle,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      placeholder: "Engagement Score",
      name: "engagementScore",
      value: this.state.engagementScore,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      placeholder: "Energy Score",
      name: "energyScore",
      value: this.state.energyScore,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form form2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "Post",
      name: "postBody",
      value: this.state.postBody,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "ButtonDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "button",
      onClick: this.newPost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "POST!"))));
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user_id: state.user_id,
    username: state.username,
    endOfWeekCycle: state.endOfWeekCycle,
    weekNumber: state.weekNumber,
    logs: state.logs,
    latestLog: state.logs[state.logs.length - 1]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPosts: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPosts"],
  getPostsByUserId: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostsByUserId"],
  newPost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["newPost"],
  getPostById: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"],
  updatePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"],
  deletePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"],
  createLog: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["createLog"],
  createLogEntry: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["createLogEntry"],
  getCycleDate: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getCycleDate"],
  updateEndOfWeekCycle: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updateEndOfWeekCycle"],
  getWeekNumber: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getWeekNumber"],
  updateWeekNumber: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updateWeekNumber"]
})(ActivityLogForm));

/***/ }),

/***/ "./src/components/ActivityLogPosts.js":
/*!********************************************!*\
  !*** ./src/components/ActivityLogPosts.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ "./src/components/Post.js");
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/ActivityLogPosts.js";







class ActivityLogPosts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      id: "",
      user_id: "",
      postTitle: "",
      postBody: "",
      engagementScore: "",
      energyScore: "" // componentDidMount(){
      //     console.log("GET USER POSTS TRIGGERED")
      //     this.props.getPostsByUserId(localStorage.getItem('user_id'))
      // }

    };

    this.getPostById = e => {
      e.preventDefault();
      this.props.getPostById(this.state.id);
      this.setState({
        id: ""
      });
    };

    this.changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  }

  timeStampCreator() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHour;
    let minutes = date.getMinutes();
    let ampm = date.getHours() > 12 ? "pm" : "am";
    let timeStamp = "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(hour, ":").concat(minutes).concat(ampm);
    return timeStamp;
  }

  timeStampTest() {
    let timestamp = "".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(timestamp);
  }

  render() {
    console.log("user_id: ", this.props.user_id);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, " user_id: ", this.props.user_id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "posts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.props.posts.map(post => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    })));
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user_id: state.user_id,
    username: state.username
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPosts: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPosts"],
  getPostsByUserId: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostsByUserId"],
  newPost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["newPost"],
  getPostById: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"],
  updatePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"],
  deletePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]
})(ActivityLogPosts));

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");

var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/Login.js";




class Login extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };

    this.login = e => {
      console.log("LOGIN TRIGGERED");
      e.preventDefault(); // localStorage.setItem("token", "abc")

      this.props.login(this.state.credentials).then(() => {
        // only fires if login call is successful
        this.props.history.push('/');
      }).catch(err => {});
    };

    this.register = e => {
      console.log("REGISTER TRIGGERED");
      e.preventDefault();
      this.props.register(this.state.credentials).then(() => {});
    };

    this.handleChange = e => {
      this.setState({
        credentials: Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.credentials, {
          [e.target.name]: e.target.value
        })
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "loginbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "loginHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Good Time Journal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Sign Up / Register and Start your Journey Here!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "form",
      onSubmit: this.login,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "username",
      placeholder: "username",
      value: this.state.credentials.username,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "password",
      name: "password",
      placeholder: "password",
      value: this.state.credentials.password,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button upperButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Log in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button",
      onClick: this.register,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Register")));
  }

}

function mapStateToProps(state) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  login: _actions_actions__WEBPACK_IMPORTED_MODULE_3__["login"],
  register: _actions_actions__WEBPACK_IMPORTED_MODULE_3__["register"]
})(Login));

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/Nav.js";




class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.preventRefresh = e => {
      e.preventDefault();
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      class: "loginHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Good Time Journal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "navigation-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "button",
      onClick: this.preventRefresh,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Main Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "button",
      onClick: this.preventRefresh,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Activity Log"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "button",
      onClick: this.preventRefresh,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Reflection Log")));
  }

}

function mapStateToProps(state) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {})(Nav));

/***/ }),

/***/ "./src/components/Post.js":
/*!********************************!*\
  !*** ./src/components/Post.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/Post.js";






class Post extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      id: "",
      user_id: "",
      postTitle: "",
      postBody: "",
      engagementScore: "",
      energyScore: ""
    };

    this.changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.updatePost = e => {
      console.log("UPDATE TRIGGERED");
      e.preventDefault();
      let updateId = parseInt(this.props.post.id, 10);
      let postObj = {
        username: localStorage.getItem('username'),
        user_id: parseInt(this.props.user_id, 10),
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        engagementScore: parseInt(this.state.engagementScore, 10),
        energyScore: parseInt(this.state.energyScore, 10),
        createdAt: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.props.updatePost(updateId, postObj);
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };

    this.deletePost = e => {
      console.log("DELETE TRIGGERED");
      e.preventDefault();
      let deleteId = parseInt(this.props.post.id, 10); //props passed from ActivityLog

      this.props.deletePost(deleteId, this.props.user_id); // this.props.getPostsByUserId(this.props.user_id)

      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };
  }

  timeStampCreator() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHour;
    let minutes = date.getMinutes();
    let ampm = date.getHours() > 12 ? "pm" : "am";
    let timeStamp = "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(hour, ":").concat(minutes).concat(ampm);
    console.log("timeStap: ", timeStamp);
    return timeStamp;
  }

  timeStampTest() {
    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(7, 'days').calendar()); // mm/dd/yyyy past

    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('L')); // mm/dd/yyyy current

    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().add(7, 'days').calendar()); // mm/dd/yyyy future 
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "inputContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      class: "loginHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "POST"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "POST TITLE: ", this.props.post.postTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "ENGAGEMENT: ", this.props.post.engagementScore), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "ENERGY: ", this.props.post.energyScore), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "USER_ID: ", this.props.post.user_id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "ID: ", this.props.post.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "TIMESTAMP: ", moment__WEBPACK_IMPORTED_MODULE_3___default()().format("L"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, this.props.post.postBody))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "buttonDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "button",
      onClick: this.deletePost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "DELETE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "Title",
      name: "postTitle",
      value: this.state.postTitle,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      placeholder: "Engagement Score",
      name: "engagementScore",
      value: this.state.engagementScore,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      placeholder: "Energy Score",
      name: "energyScore",
      value: this.state.energyScore,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "Post",
      name: "postBody",
      value: this.state.postBody,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "buttonDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "button",
      onClick: this.updatePost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "UPDATE!")));
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user_id: state.user_id,
    username: state.username
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPosts: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPosts"],
  getPostsByUserId: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostsByUserId"],
  newPost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["newPost"],
  getPostById: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"],
  updatePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"],
  deletePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]
})(Post));

/***/ }),

/***/ "./src/components/ReflectionLog.js":
/*!*****************************************!*\
  !*** ./src/components/ReflectionLog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/ReflectionLog.js";






class ReflectionLog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      id: "",
      user_id: "",
      postTitle: "",
      postBody: "",
      engagementScore: "",
      energyScore: ""
    };
  }

  timeStampCreator() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHour;
    let minutes = date.getMinutes();
    let ampm = date.getHours() > 12 ? "pm" : "am";
    let timeStamp = "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(hour, ":").concat(minutes).concat(ampm);
    return timeStamp;
  }

  timeStampTest() {
    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(7, 'days').calendar()); //mm/dd/yyyy past

    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('L')); //mm/dd/yyyy current

    console.log(moment__WEBPACK_IMPORTED_MODULE_3___default()().add(7, 'days').calendar()); // mm/dd/yyyy in 1 week
  }

  isDateLaterThanCDate(date, cDate) {
    //input date format: dd/mm/yyyy
    let dateSplit = date.split("/"); //=====================

    let mm = dateSplit[0];
    let dd = dateSplit[1];
    let yyyy = dateSplit[2]; //====================

    let cDateSplit = cDate.split("/"); //=====================

    let cmm = cDateSplit[0];
    let cdd = cDateSplit[1];
    let cyyyy = cDateSplit[2]; //======================

    if (yyyy > cyyyy) {
      return true;
    } else if (yyyy === cyyyy && mm > cmm) {
      return true;
    } else if (yyyy === cyyyy && mm === cmm && dd > cdd) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "REFLECTION LOG"));
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user_id: state.user_id,
    username: state.username
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPosts: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPosts"],
  getPostsByUserId: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostsByUserId"],
  newPost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["newPost"],
  getPostById: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"],
  updatePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"],
  deletePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]
})(ReflectionLog));

/***/ }),

/***/ "./src/components/User.js":
/*!********************************!*\
  !*** ./src/components/User.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActivityLog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActivityLog */ "./src/components/ActivityLog.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.js");
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/components/User.js";








class User extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      id: "",
      user_id: "",
      postTitle: "",
      postBody: "",
      engagementScore: "",
      energyScore: ""
    };

    this.getPostsByUserid = e => {
      e.preventDefault();
      this.props.getPostsByUserId(this.state.user_id);
      this.setState({
        user_id: ""
      });
    };

    this.getPostById = e => {
      e.preventDefault();
      this.props.getPostById(this.state.id);
      this.setState({
        id: ""
      });
    };

    this.changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.newPost = e => {
      e.preventDefault();
      let postObj = {
        //username: needs to be added, pending addition to server DB
        user_id: parseInt(this.props.user_id, 10),
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        engagementScore: parseInt(this.state.engagementScore, 10),
        energyScore: parseInt(this.state.energyScore, 10),
        createdAt: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MMMM Do YYYY, h:mm:ss a')
      };
      console.log("POST TRIGGERED");
      this.props.newPost(postObj);
      console.log("GET USER POSTS TRIGGERED");
      this.props.getPostsByUserId(this.props.user_id);
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };

    this.updatePost = e => {
      console.log("UPDATE TRIGGERED");
      e.preventDefault();
      let updateId = parseInt(this.state.id, 10);
      let postObj = {
        user_id: parseInt(this.state.user_id, 10),
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        engagementScore: parseInt(this.state.engagementScore, 10),
        energyScore: parseInt(this.state.energyScore, 10)
      };
      this.props.updatePost(updateId, postObj);
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };

    this.deletePost = e => {
      console.log("DELETE TRIGGERED");
      e.preventDefault();
      let deleteId = parseInt(this.state.id, 10);
      this.props.deletePost(deleteId);
      this.setState({
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
      });
    };
  }

  componentDidMount() {
    console.log("GET USER POSTS TRIGGERED"); // this.props.getPosts()

    this.props.getPostsByUserId(localStorage.getItem('user_id'));
  }

  timeStampCreator() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHour;
    let minutes = date.getMinutes();
    let ampm = date.getHours() > 12 ? "pm" : "am";
    let timeStamp = "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(hour, ":").concat(minutes).concat(ampm);
    return timeStamp;
  }

  timeStampTest() {
    let timestamp = "".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(timestamp);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActivityLog__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }));
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user_id: state.user_id,
    username: state.username
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPosts: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPosts"],
  getPostsByUserId: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostsByUserId"],
  newPost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["newPost"],
  getPostById: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"],
  updatePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"],
  deletePost: _actions_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]
})(User));

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/reducer */ "./src/reducers/reducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/index.js";










const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_4__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_reducers_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_8___default.a)));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}))), document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/reducer.js":
/*!*********************************!*\
  !*** ./src/reducers/reducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");


let defaultState = {
  username: "",
  user_id: "",
  posts: [],
  post: [],
  loggingIn: false,
  loggingInError: "",
  registering: false,
  registeringError: "",
  gettingUserPosts: false,
  gettingUserPostsError: "",
  //NEED TO BE CREATED
  endOfWeekCycle: "",
  logs: []
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loggingIn: true
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        username: action.payload.username,
        user_id: action.payload.id,
        loggingIn: false,
        loggingInError: ""
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loggingInError: "Login failed",
        loggingIn: false //################################

      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["REGISTER_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        registering: true
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        registering: false
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        registering: false,
        registeringError: "Register error!" //################################

      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETUSERPOSTS_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        gettingUserPosts: true
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETUSERPOSTS_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        posts: action.payload,
        gettingUserPosts: false
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETUSERPOSTS_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        gettingUserPosts: false //################################

      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET1_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET1_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET1_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["POST_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["POST_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        posts: action.payload
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["POST_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        posts: action.payload
      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["NEW_CYCLE_UPDATE_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["NEW_CYCLE_UPDATE_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        endOfWeekCycle: "" //action.payload <<<<<<<<<<<<<<<<<<<<<<<<<<<<

      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["NEW_CYCLE_UPDATE_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //##################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["CREATELOG_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["CREATELOG_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        logs: "" //<---------------------------action.payload

      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["CREATELOG_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //##################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["CREATELOGENTRY_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["CREATELOGENTRY_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        logs: "" //<---------------------------action.payload

      });

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["CREATELOGENTRY_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //#######################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETCYCLEDATE_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETCYCLEDATE_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETCYCLEDATE_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //#######################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETWEEKNUMBER_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETWEEKNUMBER_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GETWEEKNUMBER_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
    //#############################################

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["WEEKNUMBERUPDATE_START"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["WEEKNUMBERUPDATE_SUCCESS"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["WEEKNUMBERUPDATE_FAILURE"]:
      return Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/utils/PrivateRoute.js":
/*!***********************************!*\
  !*** ./src/utils/PrivateRoute.js ***!
  \***********************************/
/*! exports provided: PrivateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return PrivateRoute; });
/* harmony import */ var _Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/utils/PrivateRoute.js";


const PrivateRoute = (_ref) => {
  let Component = _ref.component,
      rest = Object(_Users_dorabelme_Documents_LAMBDA_SCHOOL_front_end_designyourlife_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => localStorage.getItem("token") ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/utils/axiosAuth.js":
/*!********************************!*\
  !*** ./src/utils/axiosAuth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  const token = localStorage.getItem('token');
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "".concat(token)
    }
  });
});

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/dorabelme/Documents/LAMBDA SCHOOL/front-end/designyourlife/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map