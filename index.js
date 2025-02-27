
const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

 const saleProducts = products.map(product => {
     if(product.price >= 30) { //item que forem iguais ou maiores que 30
         return {
             name: product.name,
             price: product.price / 2 //teram desconto de metade do preco
         }
     }
     return product
 })

 console.log(products, saleProducts)