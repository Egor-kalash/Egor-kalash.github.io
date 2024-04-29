class ToDoValue {
  constructor(inputIndex, inputValue, inputStatus){
    this.index = inputIndex;
    this.value = inputValue;
    this.status = inputStatus;
  }
}
let ToDoValues = []; // Values of the inputs of ToDos, ready to send to the server
let task = 0; // Initialize 
const toDoList = document.querySelector('.ToDoList');
toDoList.style.display = "none";
const loadCircle = document.getElementById('load_circle');
let toDos = []; // arrey of ToDos
const request = 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:clear'
// Function to create a new task




const createTask = (value, checked) => {
  console.log(value)
  if(toDoList.children.length === 0){
    task = 0;
  }
  else{task++;}
  const li = document.createElement('li');
  li.setAttribute('id', `task_${task}`);
  li.setAttribute('data-task-checked', checked);
  li.innerHTML = `
  <button onclick="createTask('', 'false')" id="add_${task}" class="add">
  <svg class="add-svg" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
  </button>
  <input type="checkbox" onclick="checkedTask(${task})" id="checkbox_${task}" class="is-done" />
  <input class="task" type="text" value="${value}" id="inp_${task}" onchange="collectToDoValue(${task})"/></input>
  <button class="delete" onclick="deleteTask(${task})">
  <svg class="bin" fill="#000000" viewBox="-3.6 -3.6 43.20 43.20" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)">
  
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="0.36"/>
  
  <g id="SVGRepo_iconCarrier"> <title>trash-line</title> <path class="clr-i-outline clr-i-outline-path-1" d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z"/>
  <path class="lid clr-i-outline clr-i-outline-path-5" d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z"/> <rect x="0" y="0" width="36" height="36" fill-opacity="0"/> </g>
  
  <path class="lid clr-i-outline clr-i-outline-path-2" d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z"/>
  
  <rect class="clr-i-outline clr-i-outline-path-3" x="21" y="13" width="2" height="15"/>
  
  <rect class="clr-i-outline clr-i-outline-path-4" x="13" y="13" width="2" height="15"/>
  
  
  </svg>
  </button>
  `;
  // Increment task to ensure unique ID for each task
  toDoList.appendChild(li);
  toDos.push(li.id);
};
createTask('', "false")

// ------ Download docs ------ \\

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  addListOfTasks(listTasks())
  setTimeout(function(){
    toDoList.style.display = "block"
    loadCircle.style.display = "none"
  }, 150)
  
  
}

// ------ Check if no children in ToDoList ------ \\

window.addEventListener('DOMSubtreeModified', function addbtn() {
  setTimeout(function(){
    if(toDoList.children.length === 0){
      toDos = []
      createTask('', 'false');
      console.log(toDos)
    } 
  }, 500);
});

// Initially create the first task
// createTask('');


// Define the deleteTask function
const deleteTask = (task) => {
    const taskItem = document.getElementById(`task_${task}`); 
    if (taskItem) {
      taskItem.remove();
      toDos = toDos.filter(item => item !== `task_${task}`);
      console.log(toDos)
    }
    collectToDoValue(task)
};
   

function checkedTask(task){
  let li = document.getElementById(`task_${task}`)
  if(li.dataset.taskChecked == 'false'){
    li.dataset.taskChecked = 'true';
  }
  else{li.dataset.taskChecked = 'false'}
  collectToDoValue(task);
}


// 
function collectToDoValue(task){
  const toDoListNew = document.querySelector('.ToDoList');
  ToDoValues = [];
  let ToDosLength = toDoListNew.children.length;
  for (let i = 0; i < ToDosLength;i++){
      let toDoTask = toDoListNew.children[i];
      let taskValue = toDoTask.children[2];
      let index = i + 1
      if (taskValue.value){
          let taskArray = [];
          taskArray.push(index, taskValue.value, toDoTask.dataset.taskChecked)
          ToDoValues.push(taskArray);
      }
    }
    console.log(ToDoValues)
}

function addListOfTasks(savedToDos){
  console.log(savedToDos)
  for(let i = 0; i < savedToDos.length; i++){
    createTask(savedToDos[i].value, savedToDos[i].status);
    // Check if the task is Checked
    if(savedToDos[i].status == "true"){
      document.getElementById(`checkbox_${savedToDos[i].index}`).checked = true;
    }
  }
  const deleteFirstEl = toDoList.children[0].id.slice(5,toDoList.children[0].id.length+1);
  deleteTask(deleteFirstEl);
};

// ------------------- API Stuff ------------------- \\

/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '729029115604-rfmll816imkosfct8riqshe824chmrn9.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDucddPFs8W1-BEcnDAUJRBY9x1-myZBLI';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.file';

let tokenClient;
let gapiInited = false;
let gisInited = false;

// document.getElementById('authorize_button').style.visibility = 'hidden';
// document.getElementById('signout_button').style.visibility = 'hidden';

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
async function listTasks() {
  let response;
  try {
    // Fetch first 10 files
    response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1a3KCmXKnDxqsdwZUPVJ8JkuoKOfEBMLNXCmQvutKdBE',
      range: 'A2:C1000',
    });
  } catch (err) {
    console.log(err.message);
    return;
  }
  const range = response.result;
  if (!range || !range.values || range.values.length == 0) {
    document.getElementById('content').innerText = 'No values found.';
    return;
  }
  // Flatten to string to display
  const received = range.values;
  const output = makeToDo(received);


  console.log(received);
  console.log(output);
  addListOfTasks(output)
}

function makeToDo(received){
  const savedToDos = [] 
  for (let i = 0; i < received.length; i++){
    let newToDo = new ToDoValue(received[i][0],received[i][1],received[i][2].toLowerCase())
    savedToDos.push(newToDo);
  }
  return savedToDos;
}
