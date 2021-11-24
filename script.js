const AddBtn = document.querySelector("#addTask")
const input = document.querySelector("#todos")
const tasksContainer = document.querySelector("#tasks-container")
const tickBox = document.querySelector("#tickBox")
var tasks = document.querySelectorAll(".task")
var task = document.querySelector(".task")
const feedback = document.querySelector("#feedback")
const footer = document.querySelector("#footer")
const edit = document.querySelector("#edit")
const deleteBtn = document.querySelector("#delete")
var finishedTasks = document.querySelectorAll("#done")


AddBtn.addEventListener('click', AddTask())
tickBox.addEventListener('click', markAsDone())
deleteBtn.addEventListener('click', deleteTasks())
edit.addEventListener('click', edit())

updateFeedback = () => {
    footer.innerHTML = "Tasks to Complete: `${tasks.length}`"
}

AddTask = () => {
    console.log("adding a task...")
    let newTask = input.innerHTML;
    tasksContainer.innerHTML += '<div class="task"><span id="tickBox" class="iconify" data-icon="akar-icons:box"></span><p>${newTask}</p><span id="edit" class="iconify" data-icon="mdi-light:pencil"></span></div>';
    input.innerHTML = '';
    updateFeedback()
}

markAsDone = () => {
    this.tickBox.innerHTML = '<span id="done" class="iconify" data-icon="akar-icons:check-box"></span>'
    footer.innerHTML = '<h3>${}Task(s) selected</h3><button id="delete">Delete <span class="iconify" data-icon="akar-icons:trash-can"></span></button>'
}

deleteTasks = () => {

}

reset = () => {
    
}

//<span class="iconify" data-icon="mdi-light:pencil"></span>