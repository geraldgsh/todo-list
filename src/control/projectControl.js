/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-empty */
import { addProjectToTaskDropdown } from '../DOM/projectDOM';
import { projectList, Project } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';
import { BulmaModal } from '../modules/bulmaModal';


export const renderProjects = () => {
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  if (projectList === null) {
  } else {
    projectList.forEach((project) => {
      addProjectToTaskDropdown(project.name, project.id);
    });
  }
};

export const addProjectToList = () => {
  const projectModal = new BulmaModal('#projectModal');
  const projectInput = document.getElementById('projectInput').value;
  if (projectList.some((project) => project.name === projectInput)) {
    swal('Oops', 'Duplicate project!', 'error');
  } else {
    const id = projectList.length;
    const newProject = Project(projectInput, id);
    projectList.push(newProject);
    updateLocalStorage(projectList);
    addProjectToTaskDropdown(projectInput, id);
    projectModal.close();
  }
};
