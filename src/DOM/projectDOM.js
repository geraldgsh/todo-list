/* eslint-disable import/prefer-default-export */

import { projectList } from '../modules/constructor';

export const addProjectToTaskDropdown = (name, id) => {
  const projectEntry = document.getElementById('projectEntry');
  const listProject = document.getElementById('listProject');
  const newOption1 = document.createElement('option');
  newOption1.text = name;
  newOption1.value = id;
  const newOption2 = document.createElement('option');
  newOption2.text = name;
  newOption2.value = id;
  projectEntry.add(newOption1, projectList[id]);
  listProject.add(newOption2, listProject[id]);
};

export const closeProjectForm = () => {
  document.forms[0].reset();
  document.getElementById('projectModal').style.display = 'none';
};
