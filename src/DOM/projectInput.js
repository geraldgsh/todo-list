import { addProjectToList } from '../control/projectControl';

export default function newProjectInput() {
  const projectInput = document.getElementById('projectInput').value;
  addProjectToList(projectInput);
}