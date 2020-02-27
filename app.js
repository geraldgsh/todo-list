class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.tasks = [];
    this.taskCount = 0;
  }
  getTaskCount() {
    this.taskCount += 1;
    return this.taskCount;
  }
}
class Task {
  constructor(title, desc, dueDate, priority, id) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priorty= priority;
    this.id = id;
  }
}

// Element selection
const clear = document.querySelector(".clear");
const addProject = document.querySelector(".addProject")
const projectList = document.getElementById("projectList");
const listProject = document.getElementById("listProject");
const newOption1 = document.createElement("option");
const newOption2 = document.createElement("option");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle';
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from localStorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if (data) {
  LIST = JSON.parse(data); 
  id = LIST.length; // set the id to the last one in the list
  loadList(LIST); // load the list to the user interface
} else {
  // if data isn't empty
  LIST = [];
  id = 0;
}

// load items to user's interface
function loadList(array) {
  array.forEach(function(item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// add to do function
function addToDo(toDo, id, done, trash) {
  if (trash) { 
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const item = `<div class="card">
                <header class="card-header">
                  <div>
                    <ul>
                      <li class="item">
                        <i class="far ${DONE} co" job="complete" "${id}"></i>
                        <p class="text ${LINE}">${toDo}</p>
                        <i class="fas fa-trash-alt de" job="delete" id="0"></i>
                        <i class="fas fa-edit se"></i>
                      </li>
                    </ul>
                  </div>
                </header>
                <div class="card-content">
                  <div class="content">
                    <h4 is-4 class="text ${LINE}">Task Name</h4>
                    <p class="text ${LINE}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                    <p class="text ${LINE}"><time datetime="2016-1-1">1 Jan 2016</time></p>
                    <p class="text ${LINE}">Due Date</p>
                    <p class="text ${LINE}">Priority</p>
                  </div>
                </div>
              </div>`

  const position = 'beforeend'
  list.insertAdjacentHTML(position, item);
}

// event listener to clear
clear.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
})

// add project
addProject.addEventListener('click', function(even){  
  const toDo = input.value;
  newOption1.text = document.getElementById("input").value;
  newOption1.value = document.getElementById("input").value;
  newOption2.text = document.getElementById("input").value;
  newOption2.value = document.getElementById("input").value;
  projectList.add(newOption1, projectList[0]);
  listProject.add(newOption2, listProject[0]);
  if(toDo) {
    addToDo(toDo, id, false, false);
  }
  input.value = '';
  LIST.push({
    name : toDo,
    id : id,
    trash : false
  });
  id++;
  projectModal.close();
  // add item to localStorage. this code must be added where the LIST array is updated.
  localStorage.setItem('TODO', JSON.stringify(LIST));  
});

//show todays date
const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// complete to do 
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do 
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

// strikethrough toggle funcion
// target the items create dynamically
list.addEventListener("click", function(event) {
  const element =  event.target; //return the clicked element inside list
  const elementJob = element.attributes.job.value; // complete or delete
  
  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
  // add item to localStorage. this code must be added where the LIST array is updated.
  localStorage.setItem('TODO', JSON.stringify(LIST));
});

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

var newProject = document.querySelector("#newProject");
var projectModal = new BulmaModal("#projectModal");
var newTask = document.querySelector("#newTask");
var taskModal = new BulmaModal("#taskModal");

newProject.addEventListener("click", function () {
  projectModal.show()
});

projectModal.addEventListener('modal:show', function() {
  console.log("opened")
});

projectModal.addEventListener("modal:close", function() {
  console.log("closed")
});

newTask.addEventListener("click", function () {
  taskModal.show()
});

taskModal.addEventListener('modal:show', function() {
  console.log("opened")
});

taskModal.addEventListener("modal:close", function() {
  console.log("closed")
});
