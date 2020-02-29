import { renderTaskCard  } from '../DOM/taskDOM.js';
import { projectList, Task} from '../modules/constructor.js';
import { updateLocalStorage } from '../modules/localStorage.js';
import { BulmaModal } from '../modules/bulmaModal.js';

export const iterateTasks = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  const projectID = document.getElementById("listProject").value;
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  if (projectList[projectID] == undefined || projectList == null) {
  } else {
    projectList[projectID].tasks.forEach((task) => {
      renderTaskCard(projectList[projectID].name, projectID, task.title, task.desc, 
        task.dueDate, task.priority, task.done, task.id);
    });
  }  
};

export const renderSingleTask = (projectID, titleInput, descInput, dateInput, priorityInput, done, id) => {
  const optionValue = document.getElementById("listProject").value;
  if (projectID != optionValue) {
  } else {
    const projectList = JSON.parse(localStorage.getItem('projectList'));   
    renderTaskCard(projectList[optionValue].name, projectID, titleInput, descInput, dateInput, priorityInput, done, id);
  }  
};

export const addTaskToProject = () => {  
  const projectID = document.getElementById("projectEntry").value;
  const titleInput = document.getElementById('titleInput').value;
  const dateInput = document.getElementById('dateInput').value;
  const descInput = document.getElementById('descInput').value;
  const priorityInput = document.getElementById('priorityInput').value;
  if (titleInput === '' || dateInput === '' || descInput === '') {
    alert('Please fill in missing field(s) and/or later date');
  } else {
    const selectedProject = projectList[projectID];
    const id = selectedProject.tasks.length;
    const done = false;
    const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id)
    selectedProject.tasks.push(newTasks);
    updateLocalStorage(projectList);
    renderSingleTask(projectID, titleInput, descInput, dateInput, priorityInput, done, id);
    const taskModal = new BulmaModal("#taskModal");
    taskModal.close();
  } 
}

export const completeTask = (element) => {
  const CHECK = 'fa-check-circle';
  const UNCHECK = 'fa-circle';
  const LINE_THROUGH = "lineThrough";
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  projectList[pid].tasks[tid].done = projectList[pid].tasks[tid].done ? false : true;
  updateLocalStorage(projectList);
  const target = document.getElementsByClassName(element.id);  
  for (var i in target) {
    if (target[i].classList == undefined) {
    } else {
      target[i].classList.toggle(LINE_THROUGH);
    }    
  }  
}

export const removeTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const taskArr = projectList[pid].tasks;
  taskArr.splice(tid, 1);
  updateLocalStorage(projectList);
  window.location.reload();
}

export const updateTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const titleEdit = document.getElementById('titleEdit'+pid+tid).value;
  const dateEdit = document.getElementById('dateEdit'+pid+tid).value;
  const descEdit = document.getElementById('descEdit'+pid+tid).value;
  if (titleEdit === '' || dateEdit === '' || descEdit === '') {
    alert('Please fill in missing field(s) and/or later date');
  } else {
    projectList[pid].tasks[tid].title = titleEdit;
    projectList[pid].tasks[tid].dueDate = dateEdit;
    projectList[pid].tasks[tid].desc = descEdit;
    projectList[pid].tasks[tid].priority = document.getElementById('priorityEdit'+pid+tid).value;
    updateLocalStorage(projectList);
    window.location.reload();
  }
}

export const editTask = function(element) {
  const SHOW = "show";
  const target = document.getElementsByClassName(element.id);  
  for (let i in target) {
    if (target[i].classList == undefined) {
    } else {   
    target[i].classList.toggle(SHOW);
    }
  }  
}