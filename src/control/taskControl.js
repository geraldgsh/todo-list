/* eslint-disable no-undef */
import { renderTaskCard, closeTaskForm } from '../DOM/taskDOM';
import { projectList, Task } from '../modules/constructor';
import { updateLocalStorage } from '../modules/localStorage';

export const addTaskToProject = (projectID, titleInput, dateInput, descInput, priorityInput) => {
  if (titleInput === '' || dateInput === '' || descInput === '') {
    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');
  } else {
    const project = Number(projectID);
    const index = projectList.map((i) => i.id).indexOf(project);
    const selectedProject = projectList[index];
    const id = selectedProject.tasks.length;
    const done = false;
    const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id);
    selectedProject.tasks.push(newTasks);
    updateLocalStorage(projectList);
    renderTaskCard(projectList[index].name, project, titleInput,
      descInput, dateInput, priorityInput, done, id);
    closeTaskForm();
  }
};

export const updateTask = (titleEdit, dateEdit, descEdit, priorityEdit, pid, tid) => {
  const project = Number(pid);
  const pIndex = projectList.map((p) => p.id).indexOf(project);
  const task = Number(tid);
  const tIndex = projectList[pIndex].tasks.map((t) => t.id).indexOf(task);
  if (titleEdit === '' || dateEdit === '' || descEdit === '') {
    swal('Oops', 'Please fill in missing field(s) and/or later date', 'error');
  } else {
    projectList[pIndex].tasks[tIndex].title = titleEdit;
    projectList[pIndex].tasks[tIndex].dueDate = dateEdit;
    projectList[pIndex].tasks[tIndex].desc = descEdit;
    projectList[pIndex].tasks[tIndex].priority = priorityEdit;
    updateLocalStorage(projectList);
    window.location.reload();
  }
};
