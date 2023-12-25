const controls = Array.from(
  document.querySelectorAll(".product__quantity-control")
);
const buttons = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");

let cart = [];

controls.forEach((control) => {
  control.addEventListener("click", function (event) {
    event.preventDefault();

    let flag;
    let value;
    if (this.classList.contains("product__quantity-control_dec")) {
      flag = -1;
      value = this.nextElementSibling;
    }

    if (this.classList.contains("product__quantity-control_inc")) {
      flag = 1;
      value = this.previousElementSibling;
    }

    value.textContent = Math.max(Number(value.textContent) + 1 * flag, 1);
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    let product = this.closest(".product");
    let id = product.dataset.id;
    let imgSrc = product.querySelector(".product__image").src;
    let value = product.querySelector(".product__quantity-value").textContent;

    if (cart.includes(id)) {
      let prod = document.querySelector(`.cart__product[data-id="${id}"]`);
      let count = prod.querySelector(".cart__product-count");
      count.textContent = Number(prod.textContent) + Number(value);
    } else {
      cart.push(id);
      cartProducts.innerHTML += `<div class="cart__product" data-id="${id}">
           <img class="cart__product-image" src="${imgSrc}">
           <div class="cart__product-count">${value}</div>
       </div>`;
    }
  });
});
