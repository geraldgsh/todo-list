/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import { renderTaskCard } from '../DOM/taskDOM';
import { projectList, Task } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';
import { BulmaModal } from '../modules/bulmaModal';

export const iterateTasks = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  const projectID = document.getElementById('listProject').value;
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  if (projectList[projectID] === undefined || projectList === null) {
  } else {
    projectList[projectID].tasks.forEach((task) => {
      renderTaskCard(projectList[projectID].name, projectID, task.title, task.desc,
        task.dueDate, task.priority, task.done, task.id);
    });
  }
};

export const renderSingleTask = (projectID, titleInput, descInput,
  dateInput, priorityInput, done, id) => {
  const optionValue = document.getElementById('listProject').value;
  if (projectID !== optionValue) {
  } else {
    const projectList = JSON.parse(localStorage.getItem('projectList'));
    renderTaskCard(projectList[optionValue].name, projectID, titleInput,
      descInput, dateInput, priorityInput, done, id);
  }
};

export const addTaskToProject = () => {
  const projectID = document.getElementById('projectEntry').value;
  const titleInput = document.getElementById('titleInput').value;
  const dateInput = document.getElementById('dateInput').value;
  const descInput = document.getElementById('descInput').value;
  const priorityInput = document.getElementById('priorityInput').value;
  if (titleInput === '' || dateInput === '' || descInput === '') {
    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');
  } else {
    const selectedProject = projectList[projectID];
    const id = selectedProject.tasks.length;
    const done = false;
    const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id);
    selectedProject.tasks.push(newTasks);
    updateLocalStorage(projectList);
    renderSingleTask(projectID, titleInput, descInput, dateInput, priorityInput, done, id);
    const taskModal = new BulmaModal('#taskModal');
    taskModal.close();
  }
};

export const completeTask = (element) => {
  const CHECK = 'fa-check-circle';
  const UNCHECK = 'fa-circle';
  const LINE_THROUGH = 'lineThrough';
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  projectList[pid].tasks[tid].done = !projectList[pid].tasks[tid].done;
  updateLocalStorage(projectList);
  const targets = document.getElementsByClassName(element.id);
  for (const i in targets) {
    if (targets[i].classList === undefined) {
    } else {
      targets[i].classList.toggle(LINE_THROUGH);
    }
  }
};

export const removeTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const taskArr = projectList[pid].tasks;
  taskArr.splice(tid, 1);
  updateLocalStorage(projectList);
  window.location.reload();
};

export const updateTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const titleEdit = document.getElementById(`titleEdit${pid}${tid}`).value;
  const dateEdit = document.getElementById(`dateEdit${pid}${tid}`).value;
  const descEdit = document.getElementById(`descEdit${pid}${tid}`).value;
  if (titleEdit === '' || dateEdit === '' || descEdit === '') {
    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');
  } else {
    projectList[pid].tasks[tid].title = titleEdit;
    projectList[pid].tasks[tid].dueDate = dateEdit;
    projectList[pid].tasks[tid].desc = descEdit;
    projectList[pid].tasks[tid].priority = document.getElementById(`priorityEdit${pid}${tid}`).value;
    updateLocalStorage(projectList);
    window.location.reload();
  }
};

export const editTask = (element) => {
  const SHOW = 'show';
  const targets = document.getElementsByClassName(element.id);
  for (const i in targets) {
    if (targets[i].classList === undefined) {
    } else {
      targets[i].classList.toggle(SHOW);
    }
  }
};
