function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${task}</span>
    <span class="delete" onclick="deleteTask(this)">X</span>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

// delete task
function deleteTask(element) {
  element.parentElement.remove();
}

// mark complete
function toggleComplete(element) {
  element.classList.toggle("completed");
}

// filter tasks
function filterTasks(type) {
  let tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {
    let text = task.querySelector("span");

    if (type === "all") {
      task.style.display = "flex";
    } 
    else if (type === "completed") {
      if (text.classList.contains("completed")) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    } 
    else if (type === "pending") {
      if (!text.classList.contains("completed")) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    }
  });
}