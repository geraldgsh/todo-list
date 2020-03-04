import { addTaskToProject, updateTask } from '../control/taskControl';
import { projectList } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';

export const newTaskInput = () => {
  const projectID = document.getElementById('projectEntry').value;
  const titleInput = document.getElementById('titleInput').value;
  const dateInput = document.getElementById('dateInput').value;
  const descInput = document.getElementById('descInput').value;
  const priorityInput = document.getElementById('priorityInput').value;
  addTaskToProject(projectID, titleInput, dateInput, descInput, priorityInput);
};

export const editTaskInput = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const titleEdit = document.getElementById(`titleEdit${pid}${tid}`).value;
  const dateEdit = document.getElementById(`dateEdit${pid}${tid}`).value;
  const descEdit = document.getElementById(`descEdit${pid}${tid}`).value;
  const priorityEdit = document.getElementById(`priorityEdit${pid}${tid}`).value;
  updateTask(titleEdit, dateEdit, descEdit, priorityEdit, pid, tid);
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

export const editTask = (element) => {
  const SHOW = 'show';
  const targets = document.getElementsByClassName(element.id);
  for (let i = 0; i < targets.length; i += 1) {
    targets[i].classList.toggle(SHOW);
  }
};
