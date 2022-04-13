import { getElement } from "./module.js"
import { displayProducts } from "./module.js"
import { start } from "./module.js"


const url = 'https://course-api.com/javascript-store-products'
export const productsCenter = getElement('.products-center')


// Funcion para hacer fetch a los productos
export const fetchProducts = async () =>{
    productsCenter.innerHTML = `<div class="loading"></div>`
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        productsCenter.innerHTML = `<p class="error">Theres a error</p>`
    }
}

start()

