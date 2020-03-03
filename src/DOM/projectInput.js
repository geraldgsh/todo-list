import { addProjectToList } from '../control/projectControl';

const newProjectInput = () => {
  const projectInput = document.getElementById('projectInput').value;
  addProjectToList(projectInput);
};

module.exports = { newProjectInput, default: newProjectInput };