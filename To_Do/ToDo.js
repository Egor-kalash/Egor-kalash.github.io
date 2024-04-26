
class ToDoValue {
  constructor(inputIndex, inputValue, inputStatus){
    this.index = inputIndex;
    this.value = inputValue;
    this.status = inputStatus;
  }
}
let ServerToDoValues = [] // add server upload.
let ToDoValues = []; // Values of the inputs of ToDos {index, value}
let task = 0; // Initialize 
const toDoList = document.querySelector('.ToDoList');
let toDos = []; // arrey of ToDos
// Function to create a new task
const createTask = (value) => {
  if(toDoList.children.length === 0){
    task = 0;
  }
  else{task++;}
  const li = document.createElement('li');
  li.setAttribute('id', `task_${task}`);
  li.setAttribute('data-task-checked', 0);
  li.innerHTML = `
  <button onclick="makeAdd()" id="add_${task}" class="add">
  <svg class="add-svg" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
  </button>
  <input type="checkbox" onclick="checkedTask(${task})" id="checkbox_${task}" class="is-done" />
  <input type="text" value="${value}" id="inp_${task}" onchange="collectToDoValue(${task})"/></input>
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


// Initially create the first task
// createTask('');

// Define the makeAdd function
const makeAdd = () => {
  createTask("");
  console.log(toDos)
};
// Define the deleteTask function
let deleteTask = (task) => {
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
  if(li.dataset.taskChecked == 0){
    li.dataset.taskChecked = 1;
  }
  else{li.dataset.taskChecked = 0}
  collectToDoValue(task);
}

window.addEventListener('DOMSubtreeModified', function addbtn() {
  setTimeout(function(){
    if(toDoList.children.length === 0){
      toDos = []
      createTask("");
      console.log(toDos)
    } 
  }, 500);
});

function collectToDoValue(task){
  ToDoValues = [];
  let ToDosLength = toDoList.children.length;
    for (let i = 0; i <= ToDosLength;i++){
      if (document.getElementById(`inp_${i}`) != null) {
        const taskValue = document.getElementById(`inp_${i}`).value;
        const taskStatus = document.getElementById(`task_${i}`).dataset.taskChecked;
        // if (taskValue !== ''){
          let newToDoObject = new ToDoValue(i, taskValue, taskStatus);
          ToDoValues.push(newToDoObject)
        // }
      }
    }
    console.log(ToDoValues)
}

function addListOfTasks(){
  console.log(ToDoValues)
  for(let i =0; i < ToDoValues.length; i++){
    createTask(ToDoValues[i].value);
  }
};