let tabActive = document.querySelector(".tab_active");
let content = document.querySelectorAll(".tab__content");
let contentActive = document.querySelector(".tab__content_active");

const tabs = Array.from(document.querySelectorAll(".tab"));
tabs.forEach((tab, i) => {
  tab.onclick = () => {
    let index = tabs.indexOf(tabActive);
    tabActive.classList.remove("tab_active");
    tab.classList.add("tab_active");
    tabActive = tab;

    contentActive.classList.remove("tab__content_active");
    content[i].classList.add("tab__content_active");
    contentActive = content[i];
  };
});
