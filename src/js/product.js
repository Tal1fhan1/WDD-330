import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { getParams } from "./utils.mjs";
import { ProductDetails } from "./ProductDetails.mjs";

const dataSource = new ProductData();
const productId = getParams("product");


console.log(dataSource);
console.log(productId);

const product = new ProductDetails(productId, dataSource);
product.init();

loadHeaderFooter();

function addProductToCart(products) {
  setLocalStorage("so-cart", products);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const products = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(products);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
