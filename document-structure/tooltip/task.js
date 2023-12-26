const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

let tip = document.createElement("div");
tip.className = "tooltip";
tip.textContent = "";
tip.style.top = "0px";
tip.style.left = "0px";

document.body.append(tip);

tooltips.forEach((tooltip) => {
  tooltip.addEventListener("click", function (event) {
    event.preventDefault();

    if (tip.textContent == this.title) {
      tip.classList.toggle("tooltip_active");
    } else {
      tip.textContent = this.title;
      coord = this.getBoundingClientRect();
      tip.style.top = coord.top + coord.height + "px";
      tip.style.left = coord.left + "px";
      tip.classList.add("tooltip_active");
    }
  });
});
