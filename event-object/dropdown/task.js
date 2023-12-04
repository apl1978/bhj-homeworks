const dropdown__list = document.querySelector(".dropdown__list");
const dropdown__value = document.querySelector(".dropdown__value");

function close() {
  dropdown__list.classList.remove("dropdown__list_active");
}

dropdown__value.onclick = () => {
  if (dropdown__list.classList.contains("dropdown__list_active")) {
    close();
  } else {
    dropdown__list.classList.add("dropdown__list_active");
  }
};

const items = Array.from(document.querySelectorAll(".dropdown__item"));
items.forEach((item, i) => {
  item.onclick = () => {
    dropdown__value.textContent = item.textContent;
    close();
    return false;
  };
});
