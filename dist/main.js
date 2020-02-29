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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOM/projectDOM.js":
/*!*******************************!*\
  !*** ./src/DOM/projectDOM.js ***!
  \*******************************/
/*! exports provided: addProjectToTaskDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToTaskDropdown\", function() { return addProjectToTaskDropdown; });\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\nconst addProjectToTaskDropdown = (name, id) => {\r\n  const projectEntry = document.getElementById('projectEntry');\r\n  const listProject = document.getElementById('listProject');\r\n  const newOption1 = document.createElement('option');\r\n  newOption1.text = name;\r\n  newOption1.value = id;\r\n  const newOption2 = document.createElement('option');\r\n  newOption2.text = name;\r\n  newOption2.value = id;\r\n  projectEntry.add(newOption1, _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"][id]);\r\n  listProject.add(newOption2, listProject[id]);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/DOM/projectDOM.js?");

/***/ }),

/***/ "./src/DOM/taskDOM.js":
/*!****************************!*\
  !*** ./src/DOM/taskDOM.js ***!
  \****************************/
/*! exports provided: renderTaskCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTaskCard\", function() { return renderTaskCard; });\n/* eslint-disable linebreak-style */\r\n/* eslint-disable import/prefer-default-export */\r\nconst renderTaskCard = (name, projectID, title,\r\n  desc, dueDate, priority, done, id) => {\r\n  const list = document.getElementById('list');\r\n  const later = new Date(dueDate.split('-').join(','));\r\n  const today = new Date();\r\n  const remainingDays = Math.ceil((later - today) / (1000 * 3600 * 24));\r\n  const CHECK = 'fa-check-circle';\r\n  const UNCHECK = 'fa-circle';\r\n  const LINE_THROUGH = 'lineThrough';\r\n  const DONE = done ? CHECK : UNCHECK;\r\n  const LINE = done ? LINE_THROUGH : '';\r\n  const item = `<div class=\"card\">\r\n                  <header class=\"card-header\">\r\n                    <div>\r\n                      <ul>\r\n                        <li class=\"item\">                        \r\n                          <p class=\"text ${LINE} ${name}${id}\">Project: ${name}</p>\r\n                          <i class=\"far ${DONE} co\" job=\"complete\" id=\"${name}${id}\" pid=\"${projectID}\" tid=\"${id}\"></i>\r\n                          <i class=\"fas fa-trash-alt de\" job=\"delete\" pid=\"${projectID}\" tid=\"${id}\"></i>\r\n                          <i class=\"fas fa-edit se\" job=\"edit\" id=\"${name}${id}\" pid=\"${projectID}\" tid=\"${id}\"></i>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </header>\r\n                  <div class=\"card-content\">\r\n                    <div class=\"content\">\r\n                      <h4 class=\"text is-4 ${LINE} ${name}${id}\">Task: ${title}</h4>\r\n                      <p class=\"text ${LINE} ${name}${id}\">Description: ${desc}</p>\r\n                      <p class=\"text ${LINE} ${name}${id}\"><time datetime=\"2016-1-1\">Due Date: ${dueDate}</time></p>\r\n                      <p class=\"text ${LINE} ${name}${id}\">Day(s) left: ${remainingDays}</p>\r\n                      <p class=\"text ${LINE} ${name}${id}\">Priority: ${priority}</p>\r\n                      <input id=\"titleEdit${projectID}${id}\" class='text ${name}${id}' placeholder='Task: ${title}'></input>\r\n                      <textarea id=\"descEdit${projectID}${id}\" class=\"textarea is-info ${name}${id}\" maxlength=\"128\" placeholder='Description: ${desc}'></textarea>\r\n                      <input id=\"dateEdit${projectID}${id}\" class='text ${name}${id}' id=\"dateEdit\" type=\"date\" placeholder='${dueDate}'>                      \r\n                      <div class=\"selection ${name}${id}\">\r\n                        <select id=\"priorityEdit${projectID}${id}\">\r\n                          <option value=\"Low\">Low</option>\r\n                          <option value=\"High\">High</option>\r\n                        </select>\r\n                      </div>\r\n                      <button id='editTask' class=\"${name}${id}\" job=\"save\" pid=\"${projectID}\" tid=\"${id}\">Save changes</button>\r\n                    </div>                    \r\n                  </div>\r\n                </div>`;\r\n  const position = 'afterbegin';\r\n  list.insertAdjacentHTML(position, item);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/DOM/taskDOM.js?");

/***/ }),

/***/ "./src/control/projectControl.js":
/*!***************************************!*\
  !*** ./src/control/projectControl.js ***!
  \***************************************/
/*! exports provided: renderProjects, addProjectToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToList\", function() { return addProjectToList; });\n/* harmony import */ var _DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/projectDOM */ \"./src/DOM/projectDOM.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/bulmaModal */ \"./src/modules/bulmaModal.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-shadow */\r\n/* eslint-disable no-alert */\r\n/* eslint-disable no-empty */\r\n\r\n\r\n\r\n\r\n\r\nconst renderProjects = () => {\r\n  const projectList = JSON.parse(localStorage.getItem('projectList'));\r\n  if (projectList === null) {\r\n  } else {\r\n    projectList.forEach((project) => {\r\n      Object(_DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToTaskDropdown\"])(project.name, project.id);\r\n    });\r\n  }\r\n};\r\n\r\nconst addProjectToList = () => {\r\n  const projectModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__[\"BulmaModal\"]('#projectModal');\r\n  const projectInput = document.getElementById('projectInput').value;\r\n  if (_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].some((project) => project.name === projectInput)) {\r\n    alert('Duplicate entry');\r\n  } else {\r\n    const id = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].length;\r\n    const newProject = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])(projectInput, id);\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].push(newProject);\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n    Object(_DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToTaskDropdown\"])(projectInput, id);\r\n    projectModal.close();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/control/projectControl.js?");

/***/ }),

/***/ "./src/control/taskControl.js":
/*!************************************!*\
  !*** ./src/control/taskControl.js ***!
  \************************************/
/*! exports provided: iterateTasks, renderSingleTask, addTaskToProject, completeTask, removeTask, updateTask, editTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterateTasks\", function() { return iterateTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSingleTask\", function() { return renderSingleTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTaskToProject\", function() { return addTaskToProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completeTask\", function() { return completeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTask\", function() { return editTask; });\n/* harmony import */ var _DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/taskDOM */ \"./src/DOM/taskDOM.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/bulmaModal */ \"./src/modules/bulmaModal.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-empty */\r\n/* eslint-disable no-restricted-syntax */\r\n/* eslint-disable no-undef */\r\n/* eslint-disable no-alert */\r\n/* eslint-disable no-shadow */\r\n\r\n\r\n\r\n\r\n\r\nconst iterateTasks = () => {\r\n  const list = document.getElementById('list');\r\n  list.innerHTML = '';\r\n  const projectID = document.getElementById('listProject').value;\r\n  const projectList = JSON.parse(localStorage.getItem('projectList'));\r\n  if (projectList[projectID] === undefined || projectList === null) {\r\n  } else {\r\n    projectList[projectID].tasks.forEach((task) => {\r\n      Object(_DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__[\"renderTaskCard\"])(projectList[projectID].name, projectID, task.title, task.desc,\r\n        task.dueDate, task.priority, task.done, task.id);\r\n    });\r\n  }\r\n};\r\n\r\nconst renderSingleTask = (projectID, titleInput, descInput,\r\n  dateInput, priorityInput, done, id) => {\r\n  const optionValue = document.getElementById('listProject').value;\r\n  if (projectID !== optionValue) {\r\n  } else {\r\n    const projectList = JSON.parse(localStorage.getItem('projectList'));\r\n    Object(_DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__[\"renderTaskCard\"])(projectList[optionValue].name, projectID, titleInput,\r\n      descInput, dateInput, priorityInput, done, id);\r\n  }\r\n};\r\n\r\nconst addTaskToProject = () => {\r\n  const projectID = document.getElementById('projectEntry').value;\r\n  const titleInput = document.getElementById('titleInput').value;\r\n  const dateInput = document.getElementById('dateInput').value;\r\n  const descInput = document.getElementById('descInput').value;\r\n  const priorityInput = document.getElementById('priorityInput').value;\r\n  if (titleInput === '' || dateInput === '' || descInput === '') {\r\n    alert('Please fill in missing field(s) and/or later date');\r\n  } else {\r\n    const selectedProject = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][projectID];\r\n    const id = selectedProject.tasks.length;\r\n    const done = false;\r\n    const newTasks = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])(titleInput, descInput, dateInput, priorityInput, done, id);\r\n    selectedProject.tasks.push(newTasks);\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n    renderSingleTask(projectID, titleInput, descInput, dateInput, priorityInput, done, id);\r\n    const taskModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__[\"BulmaModal\"]('#taskModal');\r\n    taskModal.close();\r\n  }\r\n};\r\n\r\nconst completeTask = (element) => {\r\n  const CHECK = 'fa-check-circle';\r\n  const UNCHECK = 'fa-circle';\r\n  const LINE_THROUGH = 'lineThrough';\r\n  const pid = element.attributes.pid.value;\r\n  const tid = element.attributes.tid.value;\r\n  element.classList.toggle(CHECK);\r\n  element.classList.toggle(UNCHECK);\r\n  _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].done = !_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].done;\r\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n  const targets = document.getElementsByClassName(element.id);\r\n  for (const i in targets) {\r\n    if (targets[i].classList === undefined) {\r\n    } else {\r\n      targets[i].classList.toggle(LINE_THROUGH);\r\n    }\r\n  }\r\n};\r\n\r\nconst removeTask = (element) => {\r\n  const pid = element.attributes.pid.value;\r\n  const tid = element.attributes.tid.value;\r\n  const taskArr = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks;\r\n  taskArr.splice(tid, 1);\r\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n  window.location.reload();\r\n};\r\n\r\nconst updateTask = (element) => {\r\n  const pid = element.attributes.pid.value;\r\n  const tid = element.attributes.tid.value;\r\n  const titleEdit = document.getElementById(`titleEdit${pid}${tid}`).value;\r\n  const dateEdit = document.getElementById(`dateEdit${pid}${tid}`).value;\r\n  const descEdit = document.getElementById(`descEdit${pid}${tid}`).value;\r\n  if (titleEdit === '' || dateEdit === '' || descEdit === '') {\r\n    alert('Please fill in missing field(s) and/or later date');\r\n  } else {\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].title = titleEdit;\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].dueDate = dateEdit;\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].desc = descEdit;\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].priority = document.getElementById(`priorityEdit${pid}${tid}`).value;\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n    window.location.reload();\r\n  }\r\n};\r\n\r\nconst editTask = (element) => {\r\n  const SHOW = 'show';\r\n  const targets = document.getElementsByClassName(element.id);\r\n  for (const i in targets) {\r\n    if (targets[i].classList === undefined) {\r\n    } else {\r\n      targets[i].classList.toggle(SHOW);\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/control/taskControl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control_projectControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control/projectControl */ \"./src/control/projectControl.js\");\n/* harmony import */ var _control_taskControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control/taskControl */ \"./src/control/taskControl.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/bulmaModal */ \"./src/modules/bulmaModal.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-empty */\r\n/* eslint-disable func-names */\r\n/* eslint-disable space-before-function-paren */\r\n/* eslint-disable prefer-arrow-callback */\r\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\n// show todays date\r\nconst showDate = (() => {\r\n  const dateElement = document.getElementById('date');\r\n  const options = { weekday: 'long', month: 'short', day: 'numeric' };\r\n  const today = new Date();\r\n  dateElement.innerHTML = today.toLocaleDateString('en-US', options);\r\n})();\r\n\r\nconst addTask = (() => {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    document.getElementById('addTask').addEventListener('click', _control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"addTaskToProject\"]);\r\n  });\r\n})();\r\n\r\nconst addProject = (() => {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    document.getElementById('addProject').addEventListener('click', _control_projectControl__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToList\"]);\r\n  });\r\n})();\r\n\r\nconst purge = (() => {\r\n  const clear = document.querySelector('.clear');\r\n  clear.addEventListener('click', () => {\r\n    localStorage.clear();\r\n    window.location.reload();\r\n  });\r\n})();\r\n\r\nconst dropdownRender = (() => {\r\n  const listProject = document.getElementById('listProject');\r\n  listProject.addEventListener('change', _control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"iterateTasks\"]);\r\n})();\r\n\r\nconst removeProject = (() => {\r\n  const pid = document.getElementById('listProject').value;\r\n  const deleteProject = document.getElementById('deleteProject');\r\n  deleteProject.addEventListener('click', () => {\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"].splice(pid, 1);\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"]);\r\n    window.location.reload();\r\n  });\r\n})();\r\n\r\nconst modalOpen = (() => {\r\n  const newProject = document.querySelector('#newProject');\r\n  const projectModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_4__[\"BulmaModal\"]('#projectModal');\r\n  const newTask = document.querySelector('#newTask');\r\n  const taskModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_4__[\"BulmaModal\"]('#taskModal');\r\n  // eslint-disable-next-line func-names\r\n  newProject.addEventListener('click', function() {\r\n    projectModal.show();\r\n  });\r\n  newTask.addEventListener('click', function() {\r\n    taskModal.show();\r\n  });\r\n})();\r\n\r\nconst taskUpdate = (() => {\r\n  const list = document.getElementById('list');\r\n  // target the items create dynamically\r\n  list.addEventListener('click', function(event) {\r\n    event.preventDefault();\r\n    const element = event.target; // return the clicked element inside list\r\n    if (element.attributes.job === undefined) {\r\n    } else {\r\n      const elementJob = element.attributes.job.value; // complete or delete\r\n      if (elementJob === 'complete') {\r\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"completeTask\"])(element);\r\n      } else if (elementJob === 'delete') {\r\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"removeTask\"])(element);\r\n      } else if (elementJob === 'edit') {\r\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"editTask\"])(element);\r\n      } else if (elementJob === 'save') {\r\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"updateTask\"])(element);\r\n      }\r\n    }\r\n  });\r\n})();\r\n\r\nconst start = (() => {\r\n  const projectListing = JSON.parse(localStorage.getItem('projectList'));\r\n  if (projectListing === null) {\r\n  } else {\r\n    projectListing.forEach((project) => {\r\n      _modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"].push(project);\r\n    });\r\n  }\r\n  Object(_control_projectControl__WEBPACK_IMPORTED_MODULE_0__[\"renderProjects\"])();\r\n  Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"iterateTasks\"])();\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/bulmaModal.js":
/*!***********************************!*\
  !*** ./src/modules/bulmaModal.js ***!
  \***********************************/
/*! exports provided: BulmaModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BulmaModal\", function() { return BulmaModal; });\n/* eslint-disable linebreak-style */\r\n/* eslint-disable space-before-function-paren */\r\n/* eslint-disable func-names */\r\n/* eslint-disable camelcase */\r\n/* eslint-disable prefer-arrow-callback */\r\n/* eslint-disable import/prefer-default-export */\r\n// modal\r\nclass BulmaModal {\r\n  constructor(selector) {\r\n    this.elem = document.querySelector(selector);\r\n    this.close_data();\r\n  }\r\n\r\n  show() {\r\n    this.elem.classList.toggle('is-active');\r\n    this.on_show();\r\n  }\r\n\r\n  close() {\r\n    this.elem.classList.toggle('is-active');\r\n    this.on_close();\r\n  }\r\n\r\n  close_data() {\r\n    const modalClose = this.elem.querySelectorAll(\"[data-bulma-modal='close'], .modal-background\");\r\n    const that = this;\r\n    modalClose.forEach(function(e) {\r\n      e.addEventListener('click', function() {\r\n        that.elem.classList.toggle('is-active');\r\n        const event = new Event('modal:close');\r\n        that.elem.dispatchEvent(event);\r\n      });\r\n    });\r\n  }\r\n\r\n  on_show() {\r\n    const event = new Event('modal:show');\r\n    this.elem.dispatchEvent(event);\r\n  }\r\n\r\n  on_close() {\r\n    const event = new Event('modal:close');\r\n    this.elem.dispatchEvent(event);\r\n  }\r\n\r\n  addEventListener(event, callback) {\r\n    this.elem.addEventListener(event, callback);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/bulmaModal.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/*! exports provided: projectList, Project, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectList\", function() { return projectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* eslint-disable linebreak-style */\r\nconst projectList = [];\r\n\r\nconst Project = (name, id) => ({\r\n  name,\r\n  id,\r\n  tasks: [],\r\n});\r\n\r\nconst Task = (title, desc, dueDate, priority, done, id) => ({\r\n  title,\r\n  desc,\r\n  dueDate,\r\n  priority,\r\n  done,\r\n  id,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/*! exports provided: updateLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocalStorage\", function() { return updateLocalStorage; });\n/* eslint-disable linebreak-style */\r\n/* eslint-disable import/prefer-default-export */\r\nconst updateLocalStorage = (arr) => {\r\n  window.localStorage.setItem('projectList', JSON.stringify(arr));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/localStorage.js?");

/***/ })

/******/ });