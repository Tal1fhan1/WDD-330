import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
<<<<<<< HEAD
import { loadHeaderFooter, getParams } from "./utils.mjs";

const category = getParams("category")
const dataSource = new ProductData();
const element = document.querySelector(".product-list");

const listing = new ProductList(category, dataSource, element);
listing.init();

loadHeaderFooter();
=======
import { loadHeaderFooter, getParams } from './utils.mjs';

loadHeaderFooter();


const category = getParams('category');
const dataSource = new ProductData();
const listElement = document.querySelector('.product-list');
const myList = new ProductList(category, dataSource, listElement);

// Update the page title with the selected category
function writeTitel() {
    const section = document.querySelector('.products');
    const h2 = document.createElement('h2');
    h2.textContent = `Top Products: ${capitalizeFirstLetter(category)}`;

    const firstChild = section.firstChild;
    section.insertBefore(h2, firstChild);
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

writeTitel();

myList.init();
>>>>>>> b00e1c8ec4856d7f5e61410d0e8e419721fed92a
