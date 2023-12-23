document.addEventListener("click", delTask);
function delTask(event) {
  let tar = event.target;
  if (Array.from(tar.classList).includes("task__remove")) {
    tar.parentElement.remove();
  }
}

const tasks = document.getElementById("tasks__list");
const text = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");

function addTask() {
  tasks.innerHTML += `<div class="task">
            <div class="task__title">
              ${text.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`;
  text.value = "";
}

text.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && text.value.length != 0) {
    addTask();
    e.preventDefault();
  }
});

btn.onclick = function () {
  if (text.value.length != 0) {
    addTask();
  }
};
