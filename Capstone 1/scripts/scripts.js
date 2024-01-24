// JavaScript to handle the "Add to Cart" button
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartList = document.getElementById("cart-items");

  addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
          const product = button.parentElement.querySelector("h2").textContent;
          const price = button.parentElement.querySelector("p").textContent;

          const cartItem = document.createElement("li");
          cartItem.textContent = `${product} - ${price}`;

          cartList.appendChild(cartItem);
      });
  });
});
