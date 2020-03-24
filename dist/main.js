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
/*! exports provided: addProjectToTaskDropdown, closeProjectForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToTaskDropdown\", function() { return addProjectToTaskDropdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeProjectForm\", function() { return closeProjectForm; });\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\n\r\nconst addProjectToTaskDropdown = (name, id) => {\r\n  const projectEntry = document.getElementById('projectEntry');\r\n  const listProject = document.getElementById('listProject');\r\n  const newOption1 = document.createElement('option');\r\n  newOption1.text = name;\r\n  newOption1.value = id;\r\n  const newOption2 = document.createElement('option');\r\n  newOption2.text = name;\r\n  newOption2.value = id;\r\n  projectEntry.add(newOption1, _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"][id]);\r\n  listProject.add(newOption2, listProject[id]);\r\n};\r\n\r\nconst closeProjectForm = () => {\r\n  document.forms[0].reset();\r\n  document.getElementById('projectModal').style.display = 'none';\r\n};\r\n\n\n//# sourceURL=webpack:///./src/DOM/projectDOM.js?");

/***/ }),

/***/ "./src/DOM/projectInput.js":
/*!*********************************!*\
  !*** ./src/DOM/projectInput.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newProjectInput; });\n/* harmony import */ var _control_projectControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control/projectControl */ \"./src/control/projectControl.js\");\n\r\n\r\nfunction newProjectInput() {\r\n  const projectInput = document.getElementById('projectInput').value;\r\n  Object(_control_projectControl__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToList\"])(projectInput);\r\n}\n\n//# sourceURL=webpack:///./src/DOM/projectInput.js?");

/***/ }),

/***/ "./src/DOM/taskDOM.js":
/*!****************************!*\
  !*** ./src/DOM/taskDOM.js ***!
  \****************************/
/*! exports provided: renderTaskCard, iterateTasks, closeTaskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTaskCard\", function() { return renderTaskCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterateTasks\", function() { return iterateTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeTaskForm\", function() { return closeTaskForm; });\n/* eslint-disable no-unused-vars */\r\n\r\nconst renderTaskCard = (name, projectID, title,\r\n  desc, dueDate, priority, done, id) => {\r\n  const list = document.getElementById('list');\r\n  const later = new Date(dueDate.split('-').join(','));\r\n  const today = new Date();\r\n  const remainingDays = Math.ceil((later - today) / (1000 * 3600 * 24));\r\n  const CHECK = 'fa-check-circle';\r\n  const UNCHECK = 'fa-circle';\r\n  const LINE_THROUGH = 'lineThrough';\r\n  const DONE = done ? CHECK : UNCHECK;\r\n  const LINE = done ? LINE_THROUGH : '';\r\n  const item = `<div class=\"card\">\r\n                  <header class=\"card-header\">\r\n                    <div>\r\n                      <ul>\r\n                        <li class=\"item\">                        \r\n                          <p class=\"text ${LINE} ${name}${id}\">Project: ${name}</p>\r\n                          <i class=\"far ${DONE} co\" job=\"complete\" id=\"${name}${id}\" pid=\"${projectID}\" tid=\"${id}\"></i>\r\n                          <i class=\"fas fa-trash-alt de\" job=\"delete\" pid=\"${projectID}\" tid=\"${id}\"></i>\r\n                          <i class=\"fas fa-edit se\" job=\"edit\" id=\"${name}${id}\" pid=\"${projectID}\" tid=\"${id}\"></i>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </header>\r\n                  <div class=\"card-content\">\r\n                    <div class=\"content\">\r\n                      <h4 class=\"text is-4 ${LINE} ${name}${id}\">Task: ${title}</h4>\r\n                      <p class=\"text ${LINE} ${name}${id}\">Description: ${desc}</p>\r\n                      <p class=\"text ${LINE} ${name}${id}\"><time datetime=\"2016-1-1\">Due Date: ${dueDate}</time></p>\r\n                      <p class=\"text ${LINE} ${name}${id}\">Day(s) left: ${remainingDays}</p>\r\n                      <p class=\"text ${LINE} ${name}${id}\">Priority: ${priority}</p>\r\n                      <input id=\"titleEdit${projectID}${id}\" class='text ${name}${id}' placeholder='Task: ${title}'></input>\r\n                      <textarea id=\"descEdit${projectID}${id}\" class=\"textarea is-info ${name}${id}\" maxlength=\"128\" placeholder='Description: ${desc}'></textarea>\r\n                      <input id=\"dateEdit${projectID}${id}\" class='text ${name}${id}' id=\"dateEdit\" type=\"date\" placeholder='${dueDate}'>                      \r\n                      <div class=\"selection ${name}${id}\">\r\n                        <select id=\"priorityEdit${projectID}${id}\">\r\n                          <option value=\"Low\">Low</option>\r\n                          <option value=\"High\">High</option>\r\n                        </select>\r\n                      </div>\r\n                      <button id='editTask' class=\"${name}${id}\" job=\"save\" pid=\"${projectID}\" tid=\"${id}\">Save changes</button>\r\n                    </div>                    \r\n                  </div>\r\n                </div>`;\r\n  const position = 'afterbegin';\r\n  list.insertAdjacentHTML(position, item);\r\n};\r\n\r\nconst iterateTasks = () => {\r\n  const list = document.getElementById('list');\r\n  list.innerHTML = '';\r\n  const projectID = document.getElementById('listProject').value;\r\n  const projectList = JSON.parse(localStorage.getItem('projectList'));\r\n  const project = Number(projectID);\r\n  const index = projectList.map((i) => i.id).indexOf(project);\r\n  if (projectList[index] === undefined) {\r\n    let nothing;\r\n  } else {\r\n    projectList[index].tasks.forEach((task) => {\r\n      renderTaskCard(projectList[index].name, projectID, task.title, task.desc,\r\n        task.dueDate, task.priority, task.done, task.id);\r\n    });\r\n  }\r\n};\r\n\r\nconst closeTaskForm = () => {\r\n  document.forms[1].reset();\r\n  document.getElementById('taskModal').style.display = 'none';\r\n};\r\n\n\n//# sourceURL=webpack:///./src/DOM/taskDOM.js?");

/***/ }),

/***/ "./src/DOM/taskInput.js":
/*!******************************!*\
  !*** ./src/DOM/taskInput.js ***!
  \******************************/
/*! exports provided: newTaskInput, editTaskInput, completeTask, removeTask, editTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newTaskInput\", function() { return newTaskInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTaskInput\", function() { return editTaskInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completeTask\", function() { return completeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTask\", function() { return editTask; });\n/* harmony import */ var _control_taskControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control/taskControl */ \"./src/control/taskControl.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst newTaskInput = () => {\r\n  const projectID = document.getElementById('projectEntry').value;\r\n  const titleInput = document.getElementById('titleInput').value;\r\n  const dateInput = document.getElementById('dateInput').value;\r\n  const descInput = document.getElementById('descInput').value;\r\n  const priorityInput = document.getElementById('priorityInput').value;\r\n  Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_0__[\"addTaskToProject\"])(projectID, titleInput, dateInput, descInput, priorityInput);\r\n};\r\n\r\nconst editTaskInput = (element) => {\r\n  const pid = element.attributes.pid.value;\r\n  const tid = element.attributes.tid.value;\r\n  const titleEdit = document.getElementById(`titleEdit${pid}${tid}`).value;\r\n  const dateEdit = document.getElementById(`dateEdit${pid}${tid}`).value;\r\n  const descEdit = document.getElementById(`descEdit${pid}${tid}`).value;\r\n  const priorityEdit = document.getElementById(`priorityEdit${pid}${tid}`).value;\r\n  Object(_control_taskControl__WEBPACK_IMPORTED_MODULE_0__[\"updateTask\"])(titleEdit, dateEdit, descEdit, priorityEdit, pid, tid);\r\n};\r\n\r\nconst completeTask = (element) => {\r\n  const CHECK = 'fa-check-circle';\r\n  const UNCHECK = 'fa-circle';\r\n  const LINE_THROUGH = 'lineThrough';\r\n  const pid = element.attributes.pid.value;\r\n  const tid = element.attributes.tid.value;\r\n  const project = Number(pid);\r\n  const pIndex = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].map((p) => p.id).indexOf(project);\r\n  const task = Number(tid);\r\n  const tIndex = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks.map((t) => t.id).indexOf(task);\r\n  element.classList.toggle(CHECK);\r\n  element.classList.toggle(UNCHECK);\r\n  _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks[tIndex].done = !_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks[tIndex].done;\r\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n  const targets = document.getElementsByClassName(element.id);\r\n  for (let i = 0; i < targets.length; i += 1) {\r\n    targets[i].classList.toggle(LINE_THROUGH);\r\n  }\r\n};\r\n\r\nconst removeTask = (element) => {\r\n  const pid = element.attributes.pid.value;\r\n  const tid = element.attributes.tid.value;\r\n  const project = Number(pid);\r\n  const pIndex = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].map((p) => p.id).indexOf(project);\r\n  const task = Number(tid);\r\n  const tIndex = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks.map((t) => t.id).indexOf(task);\r\n  const taskArr = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks;\r\n  taskArr.splice(tIndex, 1);\r\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n  window.location.reload();\r\n};\r\n\r\nconst editTask = (element) => {\r\n  const SHOW = 'show';\r\n  const targets = document.getElementsByClassName(element.id);\r\n  for (let i = 0; i < targets.length; i += 1) {\r\n    targets[i].classList.toggle(SHOW);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/DOM/taskInput.js?");

/***/ }),

/***/ "./src/control/projectControl.js":
/*!***************************************!*\
  !*** ./src/control/projectControl.js ***!
  \***************************************/
/*! exports provided: renderProjects, addProjectToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToList\", function() { return addProjectToList; });\n/* harmony import */ var _DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/projectDOM */ \"./src/DOM/projectDOM.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst renderProjects = () => {\r\n  const projectList = JSON.parse(localStorage.getItem('projectList'));\r\n  projectList.forEach((project) => {\r\n    Object(_DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToTaskDropdown\"])(project.name, project.id);\r\n  });\r\n};\r\n\r\nconst addProjectToList = (projectInput) => {\r\n  if (_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].some((project) => project.name === projectInput)) {\r\n    // eslint-disable-next-line no-undef\r\n    swal('Oops', 'Duplicate project!', 'error');\r\n  } else {\r\n    const id = (\r\n      _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].length - 1] === undefined\r\n    ) ? 0 : _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].length - 1].id + 1;\r\n    const newProject = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])(projectInput, id);\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].push(newProject);\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n    Object(_DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToTaskDropdown\"])(projectInput, id);\r\n    Object(_DOM_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"closeProjectForm\"])();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/control/projectControl.js?");

/***/ }),

/***/ "./src/control/taskControl.js":
/*!************************************!*\
  !*** ./src/control/taskControl.js ***!
  \************************************/
/*! exports provided: addTaskToProject, updateTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTaskToProject\", function() { return addTaskToProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony import */ var _DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/taskDOM */ \"./src/DOM/taskDOM.js\");\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable no-undef */\r\n\r\n\r\n\r\n\r\nconst addTaskToProject = (projectID, titleInput, dateInput, descInput, priorityInput) => {\r\n  if (titleInput === '' || dateInput === '' || descInput === '') {\r\n    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');\r\n  } else {\r\n    const project = Number(projectID);\r\n    const index = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].map((i) => i.id).indexOf(project);\r\n    const selectedProject = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][index];\r\n    const id = selectedProject.tasks.length;\r\n    const done = false;\r\n    const newTasks = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])(titleInput, descInput, dateInput, priorityInput, done, id);\r\n    selectedProject.tasks.push(newTasks);\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n    Object(_DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__[\"renderTaskCard\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][index].name, project, titleInput,\r\n      descInput, dateInput, priorityInput, done, id);\r\n    Object(_DOM_taskDOM__WEBPACK_IMPORTED_MODULE_0__[\"closeTaskForm\"])();\r\n  }\r\n};\r\n\r\nconst updateTask = (titleEdit, dateEdit, descEdit, priorityEdit, pid, tid) => {\r\n  const project = Number(pid);\r\n  const pIndex = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"].map((p) => p.id).indexOf(project);\r\n  const task = Number(tid);\r\n  const tIndex = _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks.map((t) => t.id).indexOf(task);\r\n  if (titleEdit === '' || dateEdit === '' || descEdit === '') {\r\n    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');\r\n  } else {\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks[tIndex].title = titleEdit;\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks[tIndex].dueDate = dateEdit;\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks[tIndex].desc = descEdit;\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"][pIndex].tasks[tIndex].priority = priorityEdit;\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_1__[\"projectList\"]);\r\n    window.location.reload();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/control/taskControl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control_projectControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control/projectControl */ \"./src/control/projectControl.js\");\n/* harmony import */ var _DOM_taskDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/taskDOM */ \"./src/DOM/taskDOM.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _starter_starterProjectTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starter/starterProjectTask */ \"./src/starter/starterProjectTask.js\");\n/* harmony import */ var _DOM_projectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM/projectInput */ \"./src/DOM/projectInput.js\");\n/* harmony import */ var _DOM_taskInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOM/taskInput */ \"./src/DOM/taskInput.js\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// show todays date\r\nconst showDate = (() => {\r\n  const dateElement = document.getElementById('date');\r\n  const options = { weekday: 'long', month: 'short', day: 'numeric' };\r\n  const today = new Date();\r\n  dateElement.innerHTML = today.toLocaleDateString('en-US', options);\r\n})();\r\n\r\nconst addTask = (() => {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    document.getElementById('addTask').addEventListener('click', _DOM_taskInput__WEBPACK_IMPORTED_MODULE_6__[\"newTaskInput\"]);\r\n  });\r\n})();\r\n\r\nconst addProject = (() => {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    document.getElementById('addProject').addEventListener('click', _DOM_projectInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n  });\r\n})();\r\n\r\nconst purge = (() => {\r\n  const clear = document.querySelector('.clear');\r\n  clear.addEventListener('click', () => {\r\n    localStorage.clear();\r\n    window.location.reload();\r\n  });\r\n})();\r\n\r\nconst dropdownRender = (() => {\r\n  const listProject = document.getElementById('listProject');\r\n  listProject.addEventListener('change', _DOM_taskDOM__WEBPACK_IMPORTED_MODULE_1__[\"iterateTasks\"]);\r\n})();\r\n\r\nconst removeProject = (() => {\r\n  const pid = document.getElementById('listProject').value;\r\n  const deleteProject = document.getElementById('deleteProject');\r\n  const project = Number(pid);\r\n  const pIndex = _modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"].map((p) => p.id).indexOf(project);\r\n  deleteProject.addEventListener('click', () => {\r\n    _modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"].splice(pIndex, 1);\r\n    Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"]);\r\n    window.location.reload();\r\n  });\r\n})();\r\n\r\nconst modalHandler = (() => {\r\n  const newProject = document.querySelector('#newProject');\r\n  const closeProject = document.querySelector('#closeProject');\r\n  const newTask = document.querySelector('#newTask');\r\n  const closeTask = document.querySelector('#closeTask');\r\n  newProject.addEventListener('click', () => {\r\n    document.getElementById('projectModal').style.display = 'block';\r\n  });\r\n  closeProject.addEventListener('click', () => {\r\n    document.getElementById('projectModal').style.display = 'none';\r\n  });\r\n  newTask.addEventListener('click', () => {\r\n    document.getElementById('taskModal').style.display = 'block';\r\n  });\r\n  closeTask.addEventListener('click', () => {\r\n    document.getElementById('taskModal').style.display = 'none';\r\n  });\r\n  const projectClosure = () => {\r\n    document.getElementById('projectModal').style.display = 'none';\r\n  };\r\n  const taskClosure = () => {\r\n    document.getElementById('taskModal').style.display = 'none';\r\n  };\r\n  window.onclick = function closure(event) {\r\n    const projectModal = document.getElementById('projectModal');\r\n    const taskModal = document.getElementById('taskModal');\r\n    if (event.target === taskModal) {\r\n      taskClosure();\r\n    } else if (event.target === projectModal) {\r\n      projectClosure();\r\n    }\r\n  };\r\n})();\r\n\r\nconst taskUpdate = (() => {\r\n  const list = document.getElementById('list');\r\n  // target the items create dynamically\r\n  list.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    const element = event.target; // return the clicked element inside list\r\n    if (element.attributes.job === undefined) {\r\n      let filler;\r\n    } else {\r\n      const elementJob = element.attributes.job.value; // complete or delete\r\n      if (elementJob === 'complete') {\r\n        Object(_DOM_taskInput__WEBPACK_IMPORTED_MODULE_6__[\"completeTask\"])(element);\r\n      } else if (elementJob === 'delete') {\r\n        Object(_DOM_taskInput__WEBPACK_IMPORTED_MODULE_6__[\"removeTask\"])(element);\r\n      } else if (elementJob === 'edit') {\r\n        Object(_DOM_taskInput__WEBPACK_IMPORTED_MODULE_6__[\"editTask\"])(element);\r\n      } else if (elementJob === 'save') {\r\n        Object(_DOM_taskInput__WEBPACK_IMPORTED_MODULE_6__[\"editTaskInput\"])(element);\r\n      }\r\n    }\r\n  });\r\n})();\r\n\r\nconst start = (() => {\r\n  const projectListing = JSON.parse(localStorage.getItem('projectList'));\r\n  if (projectListing === null) {\r\n    Object(_starter_starterProjectTask__WEBPACK_IMPORTED_MODULE_4__[\"starterProject\"])();\r\n  } else {\r\n    projectListing.forEach((project) => {\r\n      _modules_constructor__WEBPACK_IMPORTED_MODULE_3__[\"projectList\"].push(project);\r\n    });\r\n  }\r\n  Object(_control_projectControl__WEBPACK_IMPORTED_MODULE_0__[\"renderProjects\"])();\r\n  Object(_DOM_taskDOM__WEBPACK_IMPORTED_MODULE_1__[\"iterateTasks\"])();\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/*! exports provided: projectList, Project, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectList\", function() { return projectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\nconst projectList = [];\r\n\r\nconst Project = (name, id) => ({\r\n  name,\r\n  id,\r\n  tasks: [],\r\n});\r\n\r\nconst Task = (title, desc, dueDate, priority, done, id) => ({\r\n  title,\r\n  desc,\r\n  dueDate,\r\n  priority,\r\n  done,\r\n  id,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const updateLocalStorage = (arr) => {\r\n  window.localStorage.setItem('projectList', JSON.stringify(arr));\r\n};\r\n\r\nmodule.exports = { updateLocalStorage, default: updateLocalStorage };\r\n\n\n//# sourceURL=webpack:///./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/starter/starterProjectTask.js":
/*!*******************************************!*\
  !*** ./src/starter/starterProjectTask.js ***!
  \*******************************************/
/*! exports provided: starterTask, starterProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"starterTask\", function() { return starterTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"starterProject\", function() { return starterProject; });\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst starterTask = (projectID) => {\r\n  const selectedProject = _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"][projectID];\r\n  const titleInput = 'Buy bricks';\r\n  const descInput = 'Source for brick supplier';\r\n  const dateInput = '2020-11-11';\r\n  const priorityInput = 'Low';\r\n  const id = selectedProject.tasks.length;\r\n  const done = false;\r\n  const newTasks = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"Task\"])(titleInput, descInput, dateInput, priorityInput, done, id);\r\n  selectedProject.tasks.push(newTasks);\r\n  Object(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__[\"updateLocalStorage\"])(_modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"]);\r\n};\r\n\r\nconst starterProject = () => {\r\n  const projectTitle = 'Build a house';\r\n  const projectID = _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"].length;\r\n  const newProject = Object(_modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"Project\"])(projectTitle, projectID);\r\n  _modules_constructor__WEBPACK_IMPORTED_MODULE_0__[\"projectList\"].push(newProject);\r\n  starterTask(projectID);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/starter/starterProjectTask.js?");

/***/ })

/******/ });