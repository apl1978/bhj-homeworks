const reveals = document.querySelectorAll(".reveal");

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom < 0) return false;

  if (top > window.InnerHeight) {
    return false;
  }
  return true;
}

document.addEventListener("scroll", function () {
  reveals.forEach((reveal) => {
    if (isVisible(reveal)) {
      reveal.classList.add("reveal_active");
    }
  });
});
