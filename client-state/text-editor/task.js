const editor = document.getElementById("editor");
const storedText = localStorage.getItem("text");

editor.value = storedText;

editor.oninput = function () {
  localStorage.setItem("text", editor.value);
};
