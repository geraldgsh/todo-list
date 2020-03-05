export const projectList = [];

export const Project = (name, id) => ({
  name,
  id,
  tasks: [],
});

export const Task = (title, desc, dueDate, priority, done, id) => ({
  title,
  desc,
  dueDate,
  priority,
  done,
  id,
});
