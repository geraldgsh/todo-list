/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
import { addProjectToList, renderProjects } from './control/projectControl';
import {
  addTaskToProject, iterateTasks, completeTask,
  removeTask, updateTask, editTask,
} from './control/taskControl';
import { updateLocalStorage } from './modules/localStorage';
import { projectList } from './modules/constructor';
import { BulmaModal } from './modules/bulmaModal';
import { starterProject, starterTask } from './starter/starterProjectTask';

// show todays date
const showDate = (() => {
  const dateElement = document.getElementById('date');
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString('en-US', options);
})();

const addTask = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTask').addEventListener('click', addTaskToProject);
  });
})();

const addProject = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addProject').addEventListener('click', addProjectToList);
  });
})();

const purge = (() => {
  const clear = document.querySelector('.clear');
  clear.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
  });
})();

const dropdownRender = (() => {
  const listProject = document.getElementById('listProject');
  listProject.addEventListener('change', iterateTasks);
})();

const removeProject = (() => {
  const pid = document.getElementById('listProject').value;
  const deleteProject = document.getElementById('deleteProject');
  deleteProject.addEventListener('click', () => {
    projectList.splice(pid, 1);
    updateLocalStorage(projectList);
    window.location.reload();
  });
})();

const modalOpen = (() => {
  const newProject = document.querySelector('#newProject');
  const projectModal = new BulmaModal('#projectModal');
  const newTask = document.querySelector('#newTask');
  const taskModal = new BulmaModal('#taskModal');
  // eslint-disable-next-line func-names
  newProject.addEventListener('click', function() {
    projectModal.show();
  });
  newTask.addEventListener('click', function() {
    taskModal.show();
  });
})();

const taskUpdate = (() => {
  const list = document.getElementById('list');
  // target the items create dynamically
  list.addEventListener('click', function(event) {
    event.preventDefault();
    const element = event.target; // return the clicked element inside list
    if (element.attributes.job === undefined) {
    } else {
      const elementJob = element.attributes.job.value; // complete or delete
      if (elementJob === 'complete') {
        completeTask(element);
      } else if (elementJob === 'delete') {
        removeTask(element);
      } else if (elementJob === 'edit') {
        editTask(element);
      } else if (elementJob === 'save') {
        updateTask(element);
      }
    }
  });
})();

const start = (() => {
  const projectListing = JSON.parse(localStorage.getItem('projectList'));
  if (projectListing === null) {
    starterProject();
  } else {
    projectListing.forEach((project) => {
      projectList.push(project);
    });
  }
  renderProjects();
  iterateTasks();
})();
