function productCardTemplate(product) {
    if (`${product.FinalPrice}` != 179.99) {
        return `<li class="product-card">
        <a href="product_pages/?product=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.NameWithoutBrand}">
        <a href="../product_pages/?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.NameWithoutBrand}">
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
        </li>`;
    }

}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData(this.category);
        console.log(list);
        this.renderList(list);

    }

    renderList(list) {
<<<<<<< HEAD
        const htmlStrings = list.map(productCardTemplate).join("")
        this.listElement.innerHTML = htmlStrings
=======
        const htmlStrings = list.map(productCardTemplate)
        this.listElement.innerHTML = htmlStrings.join('');
>>>>>>> b00e1c8ec4856d7f5e61410d0e8e419721fed92a
    }
}