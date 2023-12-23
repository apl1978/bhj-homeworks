const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("click", function (event) {
    event.preventDefault();
    let tip = document.createElement("div");
    tip.className = "tooltip";
    tip.textContent = this.title;
    tip.classList.add("tooltip_active");

    coord = this.getBoundingClientRect();

    tip.style.top = coord.top + coord.height + "px";
    tip.style.left = coord.left + "px";

    document.body.append(tip);
  });

  tooltip.addEventListener("mouseout", function (event) {
    const tips = Array.from(document.querySelectorAll(".tooltip"));
    tips.forEach((tip) => {
      tip.classList.remove("tooltip_active");
    });
  });
});
