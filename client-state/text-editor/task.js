const editor = document.getElementById("editor");
const storedText = localStorage.getItem("text");

if (storedText) {
  editor.value = storedText;
}

editor.oninput = function () {
  localStorage.setItem("text", editor.value);
};
