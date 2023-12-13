book = document.getElementById("book");
const buttons = Array.from(document.querySelectorAll(".font-size"));

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    buttons.forEach((bttn) => {
      bttn.classList.remove("font-size_active");
    });
    const size = this.getAttribute("data-size");
    this.classList.add("font-size_active");

    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");

    if (size == "big") {
      book.classList.add("book_fs-big");
    } else if (size == "small") {
      book.classList.add("book_fs-small");
    }
  });
});
