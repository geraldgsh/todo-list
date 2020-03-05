import { projectList, Project, Task } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';

export const starterTask = (projectID) => {
  const selectedProject = projectList[projectID];
  const titleInput = 'Buy bricks';
  const descInput = 'Source for brick supplier';
  const dateInput = '2020-11-11';
  const priorityInput = 'Low';
  const id = selectedProject.tasks.length;
  const done = false;
  const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id);
  selectedProject.tasks.push(newTasks);
  updateLocalStorage(projectList);
};

export const starterProject = () => {
  const projectTitle = 'Build a house';
  const projectID = projectList.length;
  const newProject = Project(projectTitle, projectID);
  projectList.push(newProject);
  starterTask(projectID);
};
