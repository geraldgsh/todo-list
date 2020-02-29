import { projectList } from '../modules/constructor.js';

export const addProjectToTaskDropdown = (name, id) => {
  const projectEntry = document.getElementById('projectEntry');
  const newOption1 = document.createElement("option");
  newOption1.text = name;
  newOption1.value = id;
  const newOption2 = document.createElement("option");
  newOption2.text = name;
  newOption2.value = id;
  projectEntry.add(newOption1, projectList[id]);
  listProject.add(newOption2, listProject[id]);
}