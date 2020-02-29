const projectList = [];
const Project = (name, id) => ({
  name,
  id,
  tasks: []
});

const Task = (title, desc, dueDate, priority, done, id) => ({
  title,
  desc,
  dueDate,
  priority,
  done,
  id
})

const updateLocalStorage = (arr) => {
  window.localStorage.setItem('projectList', JSON.stringify(arr));
};

//show todays date
const showDate = (() => {
  const dateElement = document.getElementById("date");  
  const options = {weekday:"long", month:"short", day:"numeric"};
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString("en-US", options);
})();

const renderTaskCard = (name, projectID, title, desc, dueDate, priority, done, id) => {
  const later = new Date(dueDate.split("-").join(","))
  const today  = new Date();
  const remainingDays = Math.ceil((later - today) / (1000 * 3600 * 24))
  
  const CHECK = 'fa-check-circle';
  const UNCHECK = 'fa-circle';
  const LINE_THROUGH = "lineThrough";
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const item = `<div class="card">
                  <header class="card-header">
                    <div>
                      <ul>
                        <li class="item">                        
                          <p class="text ${LINE} ${name}${id}">Project: ${name}</p>
                          <i class="far ${DONE} co" job="complete" id="${name}${id}" pid="${projectID}" tid="${id}"></i>
                          <i class="fas fa-trash-alt de" job="delete" pid="${projectID}" tid="${id}"></i>
                          <i class="fas fa-edit se" job="edit" id="${name}${id}" pid="${projectID}" tid="${id}"></i>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <h4 class="text is-4 ${LINE} ${name}${id}">Task: ${title}</h4>
                      <p class="text ${LINE} ${name}${id}">Description: ${desc}</p>
                      <p class="text ${LINE} ${name}${id}"><time datetime="2016-1-1">Due Date: ${dueDate}</time></p>
                      <p class="text ${LINE} ${name}${id}">Day(s) left: ${remainingDays}</p>
                      <p class="text ${LINE} ${name}${id}">Priority: ${priority}</p>
                      <input id="titleEdit${projectID}${id}" class='text ${name}${id}' placeholder='Task: ${title}'></input>
                      <textarea id="descEdit${projectID}${id}" class="textarea is-info ${name}${id}" maxlength="128" placeholder='Description: ${desc}'></textarea>
                      <input id="dateEdit${projectID}${id}" class='text ${name}${id}' id="dateEdit" type="date" placeholder='${dueDate}'>                      
                      <div class="selection ${name}${id}">
                        <select id="priorityEdit${projectID}${id}">
                          <option value="Low">Low</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                      <button id='editTask' class="${name}${id}" job="save" pid="${projectID}" tid="${id}">Save changes</button>
                    </div>                    
                  </div>
                </div>`
  const position = 'afterbegin'
  list.insertAdjacentHTML(position, item);
};

const iterateTasks = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  const projectID = document.getElementById("listProject").value;
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  if (projectList[projectID] == undefined || projectList == null) {
  } else {
    projectList[projectID].tasks.forEach((task) => {
      renderTaskCard(projectList[projectID].name, projectID, task.title, task.desc, 
        task.dueDate, task.priority, task.done, task.id);
    });
  }  
};

const renderSingleTask = (projectID, titleInput, descInput, dateInput, priorityInput, done, id) => {
  const optionValue = document.getElementById("listProject").value;
  if (projectID != optionValue) {
  } else {
    const projectList = JSON.parse(localStorage.getItem('projectList'));   
    renderTaskCard(projectList[optionValue].name, projectID, titleInput, descInput, dateInput, priorityInput, done, id);
  }  
};

const addTaskToProject = () => {  
  const projectID = document.getElementById("projectEntry").value;
  const titleInput = document.getElementById('titleInput').value;
  const dateInput = document.getElementById('dateInput').value;
  const descInput = document.getElementById('descInput').value;
  const priorityInput = document.getElementById('priorityInput').value;
  if (titleInput === '' || dateInput === '' || descInput === '') {
    alert('Please fill in missing field(s) and/or later date');
  } else {
    const selectedProject = projectList[projectID];
    const id = selectedProject.tasks.length;
    const done = false;
    const newTasks = Task(titleInput, descInput, dateInput, priorityInput, done, id)
    selectedProject.tasks.push(newTasks);
    updateLocalStorage(projectList);
    renderSingleTask(projectID, titleInput, descInput, dateInput, priorityInput, done, id);
    const taskModal = new BulmaModal("#taskModal");
    taskModal.close();
  } 
}

const addTask = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTask').addEventListener('click', addTaskToProject);
  });
})();

const addProjectToTaskDropdown = (name, id) => {
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

const renderProjects = () => {
  const projectList = JSON.parse(localStorage.getItem('projectList'));
  if (projectList === null) {
  } else {
    projectList.forEach((project) => {
      addProjectToTaskDropdown(project.name, project.id);
    });
  }  
};

const addProjectToList = () => {  
  const projectModal = new BulmaModal("#projectModal");
  const projectInput = document.getElementById('projectInput').value;
  if (projectList.some((project) => project.name === projectInput)) {
    alert('Duplicate entry');
  } else {
    const id = projectList.length;
    const newProject = Project(projectInput, id);
    projectList.push(newProject);
    updateLocalStorage(projectList);
    addProjectToTaskDropdown(projectInput, id)
    projectModal.close();
  }
}

const addProject = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addProject').addEventListener('click', addProjectToList);
  });
})();

const purge = (() => {
  const clear = document.querySelector(".clear");
  clear.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
  });
})();

const dropdownRender = (() => {
  const listProject = document.getElementById("listProject");
  listProject.addEventListener('change', iterateTasks)
})();

//modal
class BulmaModal {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.close_data();
  }
  
  show() {
    this.elem.classList.toggle('is-active');
    this.on_show();
  }
  
  close() {
    this.elem.classList.toggle('is-active');
    this.on_close();
  }
  
  close_data() {
    var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
    var that = this
    modalClose.forEach(function(e) {
      e.addEventListener("click", function() {        
        that.elem.classList.toggle('is-active');
        var event = new Event('modal:close');
        that.elem.dispatchEvent(event);
      })
    })
  }
  
  on_show() {
    var event = new Event('modal:show');
    this.elem.dispatchEvent(event);
  }
  
  on_close() {
    var event = new Event('modal:close'); 
    this.elem.dispatchEvent(event);
  };
  
  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback);
  };
}

const completeTask = (element) => {
  const CHECK = 'fa-check-circle';
  const UNCHECK = 'fa-circle';
  const LINE_THROUGH = "lineThrough";
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  projectList[pid].tasks[tid].done = projectList[pid].tasks[tid].done ? false : true;
  updateLocalStorage(projectList);
  const target = document.getElementsByClassName(element.id);  
  for (var i in target) {
    if (target[i].classList == undefined) {
    } else {
      target[i].classList.toggle(LINE_THROUGH);
    }    
  }  
}

const removeTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const taskArr = projectList[pid].tasks;
  taskArr.splice(tid, 1);
  updateLocalStorage(projectList);
  window.location.reload();
}

const updateTask = (element) => {
  const pid = element.attributes.pid.value;
  const tid = element.attributes.tid.value;
  const titleEdit = document.getElementById('titleEdit'+pid+tid).value;
  const dateEdit = document.getElementById('dateEdit'+pid+tid).value;
  const descEdit = document.getElementById('descEdit'+pid+tid).value;
  if (titleEdit === '' || dateEdit === '' || descEdit === '') {
    alert('Please fill in missing field(s) and/or later date');
  } else {
    projectList[pid].tasks[tid].title = titleEdit;
    projectList[pid].tasks[tid].dueDate = dateEdit;
    projectList[pid].tasks[tid].desc = descEdit;
    projectList[pid].tasks[tid].priority = document.getElementById('priorityEdit'+pid+tid).value;
    updateLocalStorage(projectList);
    window.location.reload();
  }
}

const editTask = function(element) {
  const SHOW = "show";
  const target = document.getElementsByClassName(element.id);  
  for (let i in target) {
    if (target[i].classList == undefined) {
    } else {   
    target[i].classList.toggle(SHOW);
    }
  }  
}

const removeProject = (() => {
  const pid = document.getElementById("listProject").value;
  const deleteProject = document.getElementById('deleteProject');
  deleteProject.addEventListener('click', () => {
    projectList.splice(pid, 1);
    updateLocalStorage(projectList);
    window.location.reload();
  });
})();

const modalOpen = (() => {
  const newProject = document.querySelector("#newProject");
  const projectModal = new BulmaModal("#projectModal");
  const newTask = document.querySelector("#newTask");
  const taskModal = new BulmaModal("#taskModal");
  newProject.addEventListener("click", function () {
    projectModal.show()  
  });  
  newTask.addEventListener("click", function () {
    taskModal.show()
  });
})()

const taskUpdate = (() => {
  const list = document.getElementById("list");
  // target the items create dynamically
  list.addEventListener("click", function(event) {
    event.preventDefault();
    const element =  event.target; //return the clicked element inside list
    if (element.attributes.job == undefined) {
    } else {      
      const elementJob = element.attributes.job.value; // complete or delete 
      if (elementJob == "complete") {      
        completeTask(element);      
      } else if (elementJob == "delete") {
        removeTask(element);
      } else if (elementJob == "edit") {
        editTask(element);
      } else if (elementJob == "save") {
        updateTask(element); 
      }
    }    
  });
})();

const start = (() => {
  const projectListing = JSON.parse(localStorage.getItem('projectList'));
  if (projectListing === null) {
  } else {
    projectListing.forEach((project) => {
      projectList.push(project);
    });
  }
  renderProjects();
  iterateTasks();
})();

