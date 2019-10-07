webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.ba1cf59f7f247257adaa.hot-update.js.map