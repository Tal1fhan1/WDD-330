import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { getParams } from "./utils.mjs";
import { ProductDetails } from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParams("product");

loadHeaderFooter();

const product = new ProductDetails(productId, dataSource);
product.init();

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
