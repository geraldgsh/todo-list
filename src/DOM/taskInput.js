import addTaskToProject from '../control/taskControl';

const newTaskInput = () => {
  const projectID = document.getElementById('projectEntry').value;
  const titleInput = document.getElementById('titleInput').value;
  const dateInput = document.getElementById('dateInput').value;
  const descInput = document.getElementById('descInput').value;
  const priorityInput = document.getElementById('priorityInput').value;
  addTaskToProject(projectID, titleInput, dateInput, descInput, priorityInput);
};

module.exports = { newTaskInput, default: newTaskInput };