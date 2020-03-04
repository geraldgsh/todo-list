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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToTaskDropdown\", function() { return addProjectToTaskDropdown; });\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* eslint-disable import/prefer-default-export */\n\n\n\nconst addProjectToTaskDropdown = (name, id) => {\n  const projectEntry = document.getElementById('projectEntry');\n  const listProject = document.getElementById('listProject');\n  const newOption1 = document.createElement('option');\n  newOption1.text = name;\n  newOption1.value = id;\n  const newOption2 = document.createElement('option');\n  newOption2.text = name;\n  newOption2.value = id;\n  projectEntry.add(newOption1, _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"][id]);\n  listProject.add(newOption2, listProject[id]);\n};\n\n\n//# sourceURL=webpack:///./src/DOM/projectDOM.js?");

/***/ }),

/***/ "./src/DOM/projectInput.js":
/*!*********************************!*\
  !*** ./src/DOM/projectInput.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newProjectInput; });\n/* harmony import */ var _control_projectControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control/projectControl */ \"./src/control/projectControl.js\");\n\n\nfunction newProjectInput() {\n  const projectInput = document.getElementById('projectInput').value;\n  Object(_control_projectControl__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToList\"])(projectInput);\n}\n\n//# sourceURL=webpack:///./src/DOM/projectInput.js?");

/***/ }),

/***/ "./src/DOM/taskDOM.js":
/*!****************************!*\
  !*** ./src/DOM/taskDOM.js ***!
  \****************************/
/*! exports provided: renderTaskCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTaskCard\", function() { return renderTaskCard; });\n/* eslint-disable import/prefer-default-export */\n\nconst renderTaskCard = (name, projectID, title,\n  desc, dueDate, priority, done, id) => {\n  const list = document.getElementById('list');\n  const later = new Date(dueDate.split('-').join(','));\n  const today = new Date();\n  const remainingDays = Math.ceil((later - today) / (1000 * 3600 * 24));\n  const CHECK = 'fa-check-circle';\n  const UNCHECK = 'fa-circle';\n  const LINE_THROUGH = 'lineThrough';\n  const DONE = done ? CHECK : UNCHECK;\n  const LINE = done ? LINE_THROUGH : '';\n  const item = `<div class=\"card\">\n                  <header class=\"card-header\">\n                    <div>\n                      <ul>\n                        <li class=\"item\">                        \n                          <p class=\"text ${LINE} ${name}${id}\">Project: ${name}</p>\n                          <i class=\"far ${DONE} co\" job=\"complete\" id=\"${name}${id}\" pid=\"${projectID}\" tid=\"${id}\"></i>\n                          <i class=\"fas fa-trash-alt de\" job=\"delete\" pid=\"${projectID}\" tid=\"${id}\"></i>\n                          <i class=\"fas fa-edit se\" job=\"edit\" id=\"${name}${id}\" pid=\"${projectID}\" tid=\"${id}\"></i>\n                        </li>\n                      </ul>\n                    </div>\n                  </header>\n                  <div class=\"card-content\">\n                    <div class=\"content\">\n                      <h4 class=\"text is-4 ${LINE} ${name}${id}\">Task: ${title}</h4>\n                      <p class=\"text ${LINE} ${name}${id}\">Description: ${desc}</p>\n                      <p class=\"text ${LINE} ${name}${id}\"><time datetime=\"2016-1-1\">Due Date: ${dueDate}</time></p>\n                      <p class=\"text ${LINE} ${name}${id}\">Day(s) left: ${remainingDays}</p>\n                      <p class=\"text ${LINE} ${name}${id}\">Priority: ${priority}</p>\n                      <input id=\"titleEdit${projectID}${id}\" class='text ${name}${id}' placeholder='Task: ${title}'></input>\n                      <textarea id=\"descEdit${projectID}${id}\" class=\"textarea is-info ${name}${id}\" maxlength=\"128\" placeholder='Description: ${desc}'></textarea>\n                      <input id=\"dateEdit${projectID}${id}\" class='text ${name}${id}' id=\"dateEdit\" type=\"date\" placeholder='${dueDate}'>                      \n                      <div class=\"selection ${name}${id}\">\n                        <select id=\"priorityEdit${projectID}${id}\">\n                          <option value=\"Low\">Low</option>\n                          <option value=\"High\">High</option>\n                        </select>\n                      </div>\n                      <button id='editTask' class=\"${name}${id}\" job=\"save\" pid=\"${projectID}\" tid=\"${id}\">Save changes</button>\n                    </div>                    \n                  </div>\n                </div>`;\n  const position = 'afterbegin';\n  list.insertAdjacentHTML(position, item);\n};\n\n\n//# sourceURL=webpack:///./src/DOM/taskDOM.js?");

/***/ }),

/***/ "./src/DOM/taskInput.js":
/*!******************************!*\
  !*** ./src/DOM/taskInput.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newTaskInput; });\n/* harmony import */ var _control_taskControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control/taskControl */ \"./src/control/taskControl.js\");\n\n\nfunction newTaskInput() {\n  const projectID = document.getElementById('projectEntry').value;\n  const titleInput = document.getElementById('titleInput').value;\n  const dateInput = document.getElementById('dateInput').value;\n  const descInput = document.getElementById('descInput').value;\n  const priorityInput = document.getElementById('priorityInput').value;\n  Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_0__[\"addTaskToProject\"])(projectID, titleInput, dateInput, descInput, priorityInput);\n}\n\n//# sourceURL=webpack:///./src/DOM/taskInput.js?");

/***/ }),

/***/ "./src/control/projectControl.js":
/*!***************************************!*\
  !*** ./src/control/projectControl.js ***!
  \***************************************/
/*! exports provided: renderProjects, addProjectToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToList\", function() { return addProjectToList; });\n/* harmony import */ var _DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/projectDOM */ \"./src/DOM/projectDOM.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/bulmaModal */ \"./src/modules/bulmaModal.js\");\n\n\n\n\n\nconst renderProjects = () => {\n  const projectList = JSON.parse(localStorage.getItem('projectList'));\n  projectList.forEach((project) => {\n    Object(_DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToTaskDropdown\"])(project.name, project.id);\n  });\n};\n\nconst addProjectToList = (projectInput) => {\n  const projectModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__[\"BulmaModal\"]('#projectModal');\n  if (_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].some((project) => project.name === projectInput)) {\n    // eslint-disable-next-line no-undef\n    swal('Oops', 'Duplicate project!', 'error');\n  } else {\n    const id = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].length;\n    const newProject = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])(projectInput, id);\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].push(newProject);\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\n    Object(_DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToTaskDropdown\"])(projectInput, id);\n    projectModal.close();\n  }\n};\n\n\n//# sourceURL=webpack:///./src/control/projectControl.js?");

/***/ }),

/***/ "./src/control/taskControl.js":
/*!************************************!*\
  !*** ./src/control/taskControl.js ***!
  \************************************/
/*! exports provided: iterateTasks, renderSingleTask, addTaskToProject, completeTask, removeTask, updateTask, editTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterateTasks\", function() { return iterateTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSingleTask\", function() { return renderSingleTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTaskToProject\", function() { return addTaskToProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completeTask\", function() { return completeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTask\", function() { return editTask; });\n/* harmony import */ var _DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/taskDOM */ \"./src/DOM/taskDOM.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/bulmaModal */ \"./src/modules/bulmaModal.js\");\n/* eslint-disable no-undef */\n\n\n\n\n\nconst iterateTasks = () => {\n  const list = document.getElementById('list');\n  list.innerHTML = '';\n  const projectID = document.getElementById('listProject').value;\n  const projectList = JSON.parse(localStorage.getItem('projectList'));\n  projectList[projectID].tasks.forEach((task) => {\n    Object(_DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__[\"renderTaskCard\"])(projectList[projectID].name, projectID, task.title, task.desc,\n      task.dueDate, task.priority, task.done, task.id);\n  });\n};\n\nconst renderSingleTask = (projectID, titleInput, descInput,\n  dateInput, priorityInput, done, id) => {\n  const optionValue = document.getElementById('listProject').value;\n  const projectList = JSON.parse(localStorage.getItem('projectList'));\n  Object(_DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__[\"renderTaskCard\"])(projectList[optionValue].name, projectID, titleInput,\n    descInput, dateInput, priorityInput, done, id);\n};\n\nconst addTaskToProject = (projectID, titleInput, dateInput, descInput, priorityInput) => {\n  if (titleInput === '' || dateInput === '' || descInput === '') {\n    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');\n  } else {\n    const selectedProject = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][projectID];\n    const id = selectedProject.tasks.length;\n    const done = false;\n    const newTasks = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])(titleInput, descInput, dateInput, priorityInput, done, id);\n    selectedProject.tasks.push(newTasks);\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\n    renderSingleTask(projectID, titleInput, descInput, dateInput, priorityInput, done, id);\n    const taskModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_3__[\"BulmaModal\"]('#taskModal');\n    taskModal.close();\n  }\n};\n\nconst completeTask = (element) => {\n  const CHECK = 'fa-check-circle';\n  const UNCHECK = 'fa-circle';\n  const LINE_THROUGH = 'lineThrough';\n  const pid = element.attributes.pid.value;\n  const tid = element.attributes.tid.value;\n  element.classList.toggle(CHECK);\n  element.classList.toggle(UNCHECK);\n  _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].done = !_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].done;\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\n  const targets = document.getElementsByClassName(element.id);\n  for (let i = 0; i < targets.length; i += 1) {\n    targets[i].classList.toggle(LINE_THROUGH);\n  }\n};\n\nconst removeTask = (element) => {\n  const pid = element.attributes.pid.value;\n  const tid = element.attributes.tid.value;\n  const taskArr = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks;\n  taskArr.splice(tid, 1);\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\n  window.location.reload();\n};\n\nconst updateTask = (element) => {\n  const pid = element.attributes.pid.value;\n  const tid = element.attributes.tid.value;\n  const titleEdit = document.getElementById(`titleEdit${pid}${tid}`).value;\n  const dateEdit = document.getElementById(`dateEdit${pid}${tid}`).value;\n  const descEdit = document.getElementById(`descEdit${pid}${tid}`).value;\n  if (titleEdit === '' || dateEdit === '' || descEdit === '') {\n    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');\n  } else {\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].title = titleEdit;\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].dueDate = dateEdit;\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].desc = descEdit;\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pid].tasks[tid].priority = document.getElementById(`priorityEdit${pid}${tid}`).value;\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\n    window.location.reload();\n  }\n};\n\nconst editTask = (element) => {\n  const SHOW = 'show';\n  const targets = document.getElementsByClassName(element.id);\n  for (let i = 0; i < targets.length; i += 1) {\n    targets[i].classList.toggle(SHOW);\n  }\n};\n\n\n//# sourceURL=webpack:///./src/control/taskControl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control_projectControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control/projectControl */ \"./src/control/projectControl.js\");\n/* harmony import */ var _control_taskControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control/taskControl */ \"./src/control/taskControl.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/bulmaModal */ \"./src/modules/bulmaModal.js\");\n/* harmony import */ var _starter_starterProjectTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter/starterProjectTask */ \"./src/starter/starterProjectTask.js\");\n/* harmony import */ var _DOM_projectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOM/projectInput */ \"./src/DOM/projectInput.js\");\n/* harmony import */ var _DOM_taskInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOM/taskInput */ \"./src/DOM/taskInput.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\n\n\n\n\n// show todays date\nconst showDate = (() => {\n  const dateElement = document.getElementById('date');\n  const options = { weekday: 'long', month: 'short', day: 'numeric' };\n  const today = new Date();\n  dateElement.innerHTML = today.toLocaleDateString('en-US', options);\n})();\n\nconst addTask = (() => {\n  document.addEventListener('DOMContentLoaded', () => {\n    document.getElementById('addTask').addEventListener('click', _DOM_taskInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  });\n})();\n\nconst addProject = (() => {\n  document.addEventListener('DOMContentLoaded', () => {\n    document.getElementById('addProject').addEventListener('click', _DOM_projectInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  });\n})();\n\nconst purge = (() => {\n  const clear = document.querySelector('.clear');\n  clear.addEventListener('click', () => {\n    localStorage.clear();\n    window.location.reload();\n  });\n})();\n\nconst dropdownRender = (() => {\n  const listProject = document.getElementById('listProject');\n  listProject.addEventListener('change', _control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"iterateTasks\"]);\n})();\n\nconst removeProject = (() => {\n  const pid = document.getElementById('listProject').value;\n  const deleteProject = document.getElementById('deleteProject');\n  deleteProject.addEventListener('click', () => {\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"].splice(pid, 1);\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"]);\n    window.location.reload();\n  });\n})();\n\nconst modalOpen = (() => {\n  const newProject = document.querySelector('#newProject');\n  const projectModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_4__[\"BulmaModal\"]('#projectModal');\n  const newTask = document.querySelector('#newTask');\n  const taskModal = new _modules_bulmaModal__WEBPACK_IMPORTED_MODULE_4__[\"BulmaModal\"]('#taskModal');\n  newProject.addEventListener('click', () => {\n    projectModal.show();\n  });\n  newTask.addEventListener('click', () => {\n    taskModal.show();\n  });\n})();\n\nconst taskUpdate = (() => {\n  const list = document.getElementById('list');\n  // target the items create dynamically\n  list.addEventListener('click', (event) => {\n    event.preventDefault();\n    const element = event.target; // return the clicked element inside list\n    if (element.attributes.job === undefined) {\n      let filler;\n    } else {\n      const elementJob = element.attributes.job.value; // complete or delete\n      if (elementJob === 'complete') {\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"completeTask\"])(element);\n      } else if (elementJob === 'delete') {\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"removeTask\"])(element);\n      } else if (elementJob === 'edit') {\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"editTask\"])(element);\n      } else if (elementJob === 'save') {\n        Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"updateTask\"])(element);\n      }\n    }\n  });\n})();\n\nconst start = (() => {\n  const projectListing = JSON.parse(localStorage.getItem('projectList'));\n  if (projectListing === null) {\n    Object(_starter_starterProjectTask__WEBPACK_IMPORTED_MODULE_5__[\"starterProject\"])();\n  } else {\n    projectListing.forEach((project) => {\n      _modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"].push(project);\n    });\n  }\n  Object(_control_projectControl__WEBPACK_IMPORTED_MODULE_0__[\"renderProjects\"])();\n  Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_1__[\"iterateTasks\"])();\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/bulmaModal.js":
/*!***********************************!*\
  !*** ./src/modules/bulmaModal.js ***!
  \***********************************/
/*! exports provided: BulmaModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BulmaModal\", function() { return BulmaModal; });\n/* eslint-disable prefer-arrow-callback */\n/* eslint-disable import/prefer-default-export */\n\nclass BulmaModal {\n  constructor(selector) {\n    this.elem = document.querySelector(selector);\n    this.closeData();\n  }\n\n  show() {\n    this.elem.classList.toggle('is-active');\n    this.onShow();\n  }\n\n  close() {\n    this.elem.classList.toggle('is-active');\n    this.onClose();\n  }\n\n  closeData() {\n    const modalClose = this.elem.querySelectorAll(\"[data-bulma-modal='close'], .modal-background\");\n    const that = this;\n    modalClose.forEach(function closure(e) {\n      e.addEventListener('click', function shutData() {\n        that.elem.classList.toggle('is-active');\n        const event = new Event('modal:close');\n        that.elem.dispatchEvent(event);\n      });\n    });\n  }\n\n  onShow() {\n    const event = new Event('modal:show');\n    this.elem.dispatchEvent(event);\n  }\n\n  onClose() {\n    const event = new Event('modal:close');\n    this.elem.dispatchEvent(event);\n  }\n\n  addEventListener(event, callback) {\n    this.elem.addEventListener(event, callback);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/bulmaModal.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/*! exports provided: projectList, Project, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectList\", function() { return projectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\nconst projectList = [];\n\nconst Project = (name, id) => ({\n  name,\n  id,\n  tasks: [],\n});\n\nconst Task = (title, desc, dueDate, priority, done, id) => ({\n  title,\n  desc,\n  dueDate,\n  priority,\n  done,\n  id,\n});\n\n\n//# sourceURL=webpack:///./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const updateLocalStorage = (arr) => {\n  window.localStorage.setItem('projectList', JSON.stringify(arr));\n};\n\nmodule.exports = { updateLocalStorage, default: updateLocalStorage };\n\n\n//# sourceURL=webpack:///./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/starter/starterProjectTask.js":
/*!*******************************************!*\
  !*** ./src/starter/starterProjectTask.js ***!
  \*******************************************/
/*! exports provided: starterTask, starterProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"starterTask\", function() { return starterTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"starterProject\", function() { return starterProject; });\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst starterTask = (projectID) => {\n  const selectedProject = _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"][projectID];\n  const titleInput = 'Buy bricks';\n  const descInput = 'Source for brick supplier';\n  const dateInput = '2020-11-11';\n  const priorityInput = 'Low';\n  const id = selectedProject.tasks.length;\n  const done = false;\n  const newTasks = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"Task\"])(titleInput, descInput, dateInput, priorityInput, done, id);\n  selectedProject.tasks.push(newTasks);\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"]);\n};\n\nconst starterProject = () => {\n  const projectTitle = 'Build a house';\n  const projectID = _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"].length;\n  const newProject = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"Project\"])(projectTitle, projectID);\n  _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"].push(newProject);\n  starterTask(projectID);\n};\n\n\n//# sourceURL=webpack:///./src/starter/starterProjectTask.js?");

/***/ })

/******/ });