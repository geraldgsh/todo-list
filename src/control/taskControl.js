/* eslint-disable no-undef */
import { renderSingleTask } from '../DOM/taskDOM';
import { projectList, Task } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';
import { BulmaModal } from '../modules/bulmaModal';

export default function addTaskToProject(projectID, titleInput,
  dateInput, descInput, priorityInput) {
  if (titleInput === '' || dateInput === '' || descInput === '') {
    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');
  } else {
    const selectedProject = projectList[projectID];
    const id = selectedProject.tasks.length;
    const done = false;
    const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id);
    selectedProject.tasks.push(newTasks);
    updateLocalStorage(projectList);
    renderSingleTask(projectID, titleInput, descInput, dateInput, priorityInput, done, id);
    const taskModal = new BulmaModal('#taskModal');
    taskModal.close();
  }
}
