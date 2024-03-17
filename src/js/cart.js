import { getLocalStorage } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import { loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItemTemplate(cartItems);
  if (htmlItems == null) {
    document.querySelector(".product-list").innerHTML = "Your cart is empty";
  } else {
    document.querySelector(".product-list").innerHTML = htmlItems;
  }
}

function cartItemTemplate(item) {
  if (item != null) {
    const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>`;

    return newItem;
  }
}

const cart = new ShoppingCart("so-cart", ".product-list");
renderCartContents();

loadHeaderFooter();
