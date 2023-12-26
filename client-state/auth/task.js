const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const signin = document.getElementById("signin");
const storedText = localStorage.getItem("id");

function changeForm(text) {
  welcome.textContent += text;
  welcome.classList.add("welcome_active");
  signin.classList.remove("signin_active");
}

form.onsubmit = function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  formData = new FormData(form);
  xhr.addEventListener("load", function (event) {
    let response = JSON.parse(event.target.responseText);
    if (response.success === false) {
      alert("Неверный логин/пароль");
    } else if (response.success === true) {
      changeForm(response.user_id);
      localStorage.setItem("id", response.user_id);
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  xhr.send(formData);
};

if (storedText) {
  changeForm(storedText);
}
