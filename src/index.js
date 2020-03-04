/* eslint-disable no-unused-vars */

import { renderProjects } from './control/projectControl';
import { iterateTasks } from './DOM/taskDOM';
import { updateLocalStorage } from './modules/localStorage';
import { projectList } from './modules/constructor';
import { starterProject } from './starter/starterProjectTask';
import newProjectInput from './DOM/projectInput';
import {
  editTask,
  newTaskInput,
  editTaskInput,
  completeTask,
  removeTask,
} from './DOM/taskInput';

// show todays date
const showDate = (() => {
  const dateElement = document.getElementById('date');
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString('en-US', options);
})();

const addTask = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTask').addEventListener('click', newTaskInput);
  });
})();

const addProject = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addProject').addEventListener('click', newProjectInput);
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
  const project = Number(pid);
  const pIndex = projectList.map((p) => p.id).indexOf(project);
  deleteProject.addEventListener('click', () => {
    projectList.splice(pIndex, 1);
    updateLocalStorage(projectList);
    window.location.reload();
  });
})();

const modalHandler = (() => {
  const newProject = document.querySelector('#newProject');
  const closeProject = document.querySelector('#closeProject');
  const newTask = document.querySelector('#newTask');
  const closeTask = document.querySelector('#closeTask');
  newProject.addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'block';
  });
  closeProject.addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'none';
  });
  newTask.addEventListener('click', () => {
    document.getElementById('taskModal').style.display = 'block';
  });
  closeTask.addEventListener('click', () => {
    document.getElementById('taskModal').style.display = 'none';
  });
  const projectClosure = () => {
    document.getElementById('projectModal').style.display = 'none';
  };
  const taskClosure = () => {
    document.getElementById('taskModal').style.display = 'none';
  };
  window.onclick = function closure(event) {
    const projectModal = document.getElementById('projectModal');
    const taskModal = document.getElementById('taskModal');
    if (event.target === taskModal) {
      taskClosure();
    } else if (event.target === projectModal) {
      projectClosure();
    }
  };
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
        editTaskInput(element);
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
