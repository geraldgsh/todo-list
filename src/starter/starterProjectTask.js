import { addProjectToTaskDropdown } from '../DOM/projectDOM';
import { renderSingleTask } from '../control/taskControl';
import { projectList, Project, Task } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';

export const starterProject = () => {
  const projectInput = 'Build a house';
  const id = 0;
  const newProject = Project(projectInput, id);
  projectList.push(newProject);
  updateLocalStorage(projectList);
  addProjectToTaskDropdown(projectInput, id);
  starterTask(id)
};

export const starterTask = (projectID) => {
  const titleInput = 'Buy bricks';
  const descInput = 'Source for brick supplier';
  const dateInput = '2020-11-11';
  const priorityInput = 'low';
  const done = false;
  const id = 0;
  const selectedProject = projectList[projectID];
  const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id);
  selectedProject.tasks.push(newTasks);
  updateLocalStorage(projectList);
};