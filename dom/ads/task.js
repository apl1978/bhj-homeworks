const rotators = document.querySelectorAll(".rotator");

function rotate(el) {
  const ads = Array.from(el.children);
  let i = 0;
  setInterval(() => {
    if (ads[i].classList.contains("rotator__case_active")) {
      ads[i].classList.remove("rotator__case_active");
    }
    if (i < ads.length - 1) {
      ads[i].nextElementSibling.classList.add("rotator__case_active");
      i++;
    } else {
      i = 0;
      ads[i].classList.add("rotator__case_active");
    }
  }, 1000);
}

rotators.forEach((rotator) => {
  rotate(rotator);
});
