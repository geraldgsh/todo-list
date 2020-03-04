/* eslint-disable no-undef */
import { renderTaskCard } from '../DOM/taskDOM';
import { projectList, Task } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';
import { BulmaModal } from '../modules/bulmaModal';

export const addTaskToProject = (projectID, titleInput, dateInput, descInput, priorityInput) => {
  if (titleInput === '' || dateInput === '' || descInput === '') {
    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');
  } else {
    const project = Number(projectID);
    const index = projectList.map((i) => i.id).indexOf(project);
    const selectedProject = projectList[index];
    const id = selectedProject.tasks.length;
    const done = false;
    const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id);
    selectedProject.tasks.push(newTasks);
    updateLocalStorage(projectList);
    renderTaskCard(projectList[index].name, project, titleInput,
      descInput, dateInput, priorityInput, done, id);
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
  const project = Number(pid);
  const pIndex = projectList.map((p) => p.id).indexOf(project);
  const task = Number(tid);
  const tIndex = projectList[pIndex].tasks.map((t) => t.id).indexOf(task);
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  projectList[pIndex].tasks[tIndex].done = !projectList[pIndex].tasks[tIndex].done; 
  updateLocalStorage(projectList);
  const targets = document.getElementsByClassName(element.id);
  for (let i = 0; i < targets.length; i += 1) {
    targets[i].classList.toggle(LINE_THROUGH);
  }
};

export const removeTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const project = Number(pid);
  const pIndex = projectList.map((p) => p.id).indexOf(project);
  const task = Number(tid);
  const tIndex = projectList[pIndex].tasks.map((t) => t.id).indexOf(task);
  const taskArr = projectList[pIndex].tasks;
  taskArr.splice(tIndex, 1);
  updateLocalStorage(projectList);
  window.location.reload();
};

export const updateTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const titleEdit = document.getElementById(`titleEdit${pid}${tid}`).value;
  const dateEdit = document.getElementById(`dateEdit${pid}${tid}`).value;
  const descEdit = document.getElementById(`descEdit${pid}${tid}`).value;
  const priorityEdit = document.getElementById(`priorityEdit${pid}${tid}`).value;
  const project = Number(pid);
  const pIndex = projectList.map((p) => p.id).indexOf(project);
  const task = Number(tid);
  const tIndex = projectList[pIndex].tasks.map((t) => t.id).indexOf(task);
  if (titleEdit === '' || dateEdit === '' || descEdit === '') {
    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');
  } else {
    projectList[pIndex].tasks[tIndex].title = titleEdit;
    projectList[pIndex].tasks[tIndex].dueDate = dateEdit;
    projectList[pIndex].tasks[tIndex].desc = descEdit;
    projectList[pIndex].tasks[tIndex].priority = priorityEdit;
    updateLocalStorage(projectList);
    window.location.reload();
  }
};

export const editTask = (element) => {
  const SHOW = 'show';
  const targets = document.getElementsByClassName(element.id);
  for (let i = 0; i < targets.length; i += 1) {
    targets[i].classList.toggle(SHOW);
  }
};
