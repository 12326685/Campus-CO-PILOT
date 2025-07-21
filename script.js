// Drag & Drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// Add Task Prompt on Dashboard
function addTaskPrompt() {
  const task = prompt("Enter a new mission:");
  if (task) {
    const ul = document.getElementById("mission-list");
    const li = document.createElement("li");
    li.textContent = `✨ ${task}`;
    ul.appendChild(li);
  }
}
