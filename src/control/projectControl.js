import { addProjectToTaskDropdown } from '../DOM/projectDOM.js';
import { projectList, Project } from '../modules/constructor.js';
import { updateLocalStorage } from '../modules/localStorage.js';
import { BulmaModal } from '../modules/bulmaModal.js';

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
  const projectModal = new BulmaModal("#projectModal");
  const projectInput = document.getElementById('projectInput').value;
  if (projectList.some((project) => project.name === projectInput)) {
    alert('Duplicate entry');
  } else {
    const id = projectList.length;
    const newProject = Project(projectInput, id);
    projectList.push(newProject);
    updateLocalStorage(projectList);
    addProjectToTaskDropdown(projectInput, id)
    projectModal.close();
  }
}