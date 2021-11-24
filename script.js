const addBtn = document.querySelector("#addTask")
const input = document.querySelector("#todos")
const tasksContainer = document.querySelector("#tasks-container")
const tickBox = document.querySelector("#tickBox")
var tasks = document.querySelectorAll(".task")
var task = document.querySelector(".task")
const feedback = document.querySelector("#feedback")
const footer = document.querySelector("#footer")
const edit = document.querySelector("#edit")
const deleteBtn = document.querySelector("#delete")
const resetBtn = document.querySelector("#reset")
var finishedTasks = document.querySelectorAll("#done")


updateFeedback = () => {
    feedback.innerHTML = "Tasks to Complete: `${tasks.length}`"
}

addTask = () => {
    console.log("adding a task...")
    let newTask = input.innerHTML;
    tasksContainer.innerHTML += '<div class="task"><span id="tickBox" class="iconify" data-icon="akar-icons:box"></span><p>${newTask}</p><span id="edit" class="iconify" data-icon="mdi-light:pencil"></span></div>';
    input.innerHTML = '<input id="input" type="text" placeholder="Add your task here..."></input><span class="iconify" id="addTask" data-icon="mdi-light:plus-circle"></span>';
    updateFeedback()
}

//add 'done' class/id to task
markAsDone = () => {
    this.tickBox.innerHTML = '<span id="done" class="iconify" data-icon="akar-icons:check-box"></span>'
    footer.innerHTML = '<h3>${}Task(s) selected</h3><button id="delete">Delete <span class="iconify" data-icon="akar-icons:trash-can"></span></button>'
}

//delete marked tasks
deleteTasks = () => {
    delete finishedTasks;
}

reset = () => {
    console.log("reseting...")
    tasksContainer.innerHTML = ''
}

addBtn.addEventListener('click', addTask)
resetBtn.addEventListener('click', reset)
tickBox.addEventListener('click', markAsDone)
deleteBtn.addEventListener('click', deleteTasks)
edit.addEventListener('click', edit)

//event listeners are not working on icons