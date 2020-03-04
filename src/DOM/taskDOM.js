/* eslint-disable import/prefer-default-export */

export const renderTaskCard = (name, projectID, title,
  desc, dueDate, priority, done, id) => {
  const list = document.getElementById('list');
  const later = new Date(dueDate.split('-').join(','));
  const today = new Date();
  const remainingDays = Math.ceil((later - today) / (1000 * 3600 * 24));
  const CHECK = 'fa-check-circle';
  const UNCHECK = 'fa-circle';
  const LINE_THROUGH = 'lineThrough';
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : '';
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
                </div>`;
  const position = 'afterbegin';
  list.insertAdjacentHTML(position, item);
};
