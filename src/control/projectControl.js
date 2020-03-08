import { addProjectToTaskDropdown, closeProjectForm } from '../DOM/projectDOM';
import { projectList, Project } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';

export const renderProjects = () => {
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  projectList.forEach((project) => {
    addProjectToTaskDropdown(project.name, project.id);
  });
};

export const addProjectToList = (projectInput) => {
  if (projectList.some((project) => project.name === projectInput)) {
    // eslint-disable-next-line no-undef
    swal('Oops', 'Duplicate project!', 'error');
  } else {
    const id = (
      projectList[projectList.length - 1] === undefined
      ) ? 0:projectList[projectList.length - 1].id + 1;
    console.log(id);    
    const newProject = Project(projectInput, id);
    projectList.push(newProject);
    updateLocalStorage(projectList);
    addProjectToTaskDropdown(projectInput, id);
    closeProjectForm();
  }
};
