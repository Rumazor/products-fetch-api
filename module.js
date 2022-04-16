import { fetchProducts } from "./app.js";
import { productsCenter } from "./app.js";

export function getElement (selection){
    const element = document.querySelector(selection);
    if(element){
        return element
    } else {
        throw console.error('No selector found');
    }
}

// Funcion para renderizar los productos
const displayProducts = (list) =>{
    const productList = list.map((product)=>{
        // id,name,price,img
        const {id} = product;
        const {name: title,price} = product.fields;
        const {url:img} = product.fields.image[0];
        const formatPrice = price/100;

        return `
        <a class="single-product" href="product.html?id=${id}">
            <img src="${img}"class="single-product-img img" alt="couch">
            <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${formatPrice}</span>
            </footer>
        </a>`
    }).join('');
    productsCenter.innerHTML = `
    <div class="products-container">
    ${productList}
    </div>
    `
}

// Funcion para iniciar
export const start = async() =>{
    const data = await fetchProducts();
    displayProducts(data)
}