const productDOM = document.querySelector('.product')
const url = 'https://course-api.com/javascript-store-single-product'

const fetchProduct = async ()=>{
    try {
        productDOM.innerHTML = `<div class="loading"></div>`

        // uso el URLSeachParams para buscar el ID unico de cada producto
        const params = new URLSearchParams(window.location.search)
        const id = params.get('id');
        
        // el ID es dinamico para hacer un fetch unico de cada producto
        const response = await fetch(`${url}?id=${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        productDOM.innerHTML = `<p class="error">Theres a error on product. Please try again later</p>`
    }

}

fetchProduct()

const displayProduct = (product) =>{

    //company,colors,description, name:title,price,image(url:img)
    
    const {company,name,price,colors,description,image} = product.fields
    const {url:img} = image[0]
    document.title = name.toUpperCase()
    
    //colors
    console.log(colors);
    const colorsList = colors.map((color)=>{
        return `<span class="product-color" style="background:${color} "></span>`
    }).join('')

    productDOM.innerHTML = `<div class="product-wrapper">
    <img src="${img}"  class="img" alt="${name}">
    <div class="product-info">
        <h3>${name}</h3>
        <h5>${company}</h5>
        <span>${price/100}</span>
        <div class="colors">${colorsList}</div>
        <p>${description}</p>
        <button class="btn">add to cart</button>
    </div>
</div>`
}

const start = async ()=>{
    const data = await fetchProduct();
    displayProduct(data);
}

start()