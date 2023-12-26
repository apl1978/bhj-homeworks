const modalWindow = document.getElementById("subscribe-modal");
const closeBtn = document.querySelector(".modal__close");
modalWindow.classList.add("modal_active");

closeBtn.onclick = function () {
  document.cookie = "modal__close=yes";
  modalWindow.classList.remove("modal_active");
};

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  cookie = pairs.find((p) => p.startsWith(name + "="));
  return cookie.substr(name.length + 1);
}

if (getCookie("modal__close") == "yes") {
  modalWindow.classList.remove("modal_active");
}
