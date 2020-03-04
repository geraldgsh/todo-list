/* eslint-disable no-unused-vars */
import { addProjectToList, renderProjects } from './control/projectControl';
import addTaskToProject from './control/taskControl';
import {
  iterateTasks,
  completeTask,
  removeTask,
  updateTask,
  editTask,
} from './DOM/taskDOM';
import { updateLocalStorage } from './modules/localStorage';
import { projectList } from './modules/constructor';
import { BulmaModal } from './modules/bulmaModal';
import { starterProject } from './starter/starterProjectTask';

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
  newProject.addEventListener('click', () => {
    projectModal.show();
  });
  newTask.addEventListener('click', () => {
    taskModal.show();
  });
})();

const taskUpdate = (() => {
  const list = document.getElementById('list');
  // target the items create dynamically
  list.addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.target; // return the clicked element inside list
    if (element.attributes.job === undefined) {
      let filler;
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
