import { addProjectToTaskDropdown } from '../DOM/projectDOM';
import { projectList, Project } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';
import { BulmaModal } from '../modules/bulmaModal';

export const renderProjects = () => {
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  projectList.forEach((project) => {
    addProjectToTaskDropdown(project.name, project.id);
  });
};

export const addProjectToList = (projectInput) => {
  const projectModal = new BulmaModal('#projectModal');
  if (projectList.some((project) => project.name === projectInput)) {
    // eslint-disable-next-line no-undef
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
