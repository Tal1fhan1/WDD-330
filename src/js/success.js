import { loadHeaderFooter, getLocalStorage, removeStorage } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const cartList = getLocalStorage("so-cart");

// Retrieve order details from local storage and display them
const orderId = generateRandomString(8);
const orderTotal = cartList.reduce((accumulator, currentValue) => {return accumulator + currentValue.FinalPrice}, 0);

document.getElementById("order-id").textContent = orderId;
document.getElementById("order-total").textContent = orderTotal;

// Clear local storage after displaying order details
localStorage.removeItem("order-id");
localStorage.removeItem("order-total");

// Function to generate a random alphanumeric string of given length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

//removeStorage("so-cart")