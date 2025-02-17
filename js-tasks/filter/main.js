const tbody = document.querySelector('#tbody')
const filter = document.querySelector('#filter')
const nameInput = document.querySelector('#name')
const category = document.querySelector('#category')

let products = []
let filteredProducts =[]


filter.addEventListener('submit' , (e) => {
  e.preventDefault()
  console.log(products)
  filteredProducts =  products
  
  let categoryQuery 
  category.value === 'All' ? categoryQuery = '' : categoryQuery = category.value
  

  
  filteredProducts = filteredProducts.filter(product => (product.name.match(new RegExp( nameInput.value , 'ig'))
                                                          && product.category.match(new RegExp(categoryQuery,'ig'))
                                                        ))
  tbody.innerHTML = ''
  filteredProducts.forEach(product => {
    let row = document.createElement('tr')
    row.innerHTML = `
                      <td>${product.name}</td>
                      <td>${product.price}</td>
                      <td>${product.category}</td>
                      <td>${product.description}</td>
                      `
  tbody.append(row)
  });
})





fetch('./data.json')
.then(response => response.json() )
.then(data => {
  products = data.products
  
  
  products.forEach(product => {
    let row = document.createElement('tr')
    row.innerHTML = `
                      <td>${product.name}</td>
                      <td>${product.price}</td>
                      <td>${product.category}</td>
                      <td>${product.description}</td>
                      `
  tbody.append(row)
  });
  
})
.catch(error => {
  tbody.innerHTML = 'No Data'
})