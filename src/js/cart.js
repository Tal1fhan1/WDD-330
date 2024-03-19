import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

var itemList = [];

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItemTemplate(cartItems);
  if (htmlItems == null) {
    document.querySelector(".product-list").innerHTML = "Your cart is empty";
  } else {
    document.querySelector(".product-list").innerHTML = itemList;
  }
}

function cartItemTemplate(item) {
  if (item != null) {
    const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimaryMedium}"
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
    itemList.push(newItem);
    document.querySelector(".counter").innerHTML = itemList.length;
    return newItem;
  }
  document.querySelector(".counter").innerHTML = itemList.length;
}

renderCartContents();

loadHeaderFooter();
