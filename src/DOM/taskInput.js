import { addTaskToProject } from '../control/taskControl';

export default function newTaskInput() {
  const projectID = document.getElementById('projectEntry').value;
  const titleInput = document.getElementById('titleInput').value;
  const dateInput = document.getElementById('dateInput').value;
  const descInput = document.getElementById('descInput').value;
  const priorityInput = document.getElementById('priorityInput').value;
  addTaskToProject(projectID, titleInput, dateInput, descInput, priorityInput);
}