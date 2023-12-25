const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.onsubmit = function () {
  let input = this.elements.file;
  let file = input.files[0];
  if (file) {
    upload(file);
  }
};

function upload(file) {
  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    progress.setAttribute("max", event.total);
    progress.value = event.loaded;
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(file);
}
