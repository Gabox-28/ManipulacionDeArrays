const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
]

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔')

if(productIndex > 0){
    myProducts.push(products[productIndex])
    products.splice(productIndex, 1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const newProducts = products.filter(item => item.id !== '🍔')

console.log("products", newProducts);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Update

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
]

const update = {
    id: '🥞',
    changes: {
        description: 'Delicioso',
        price: 200
    }
}

const productIndex2 = productsV2.findIndex(item => item.id === '🥞')
productsV2[productIndex2] = {
    ...productsV2[productIndex2],
    ...update.changes
}

console.log(productsV2)

const newProducts2 = [...productsV2]
newProducts2[productIndex2] = {
    ...productsV2[productIndex2],
    ...update.changes
}


const newProducts3 = productsV2.map(item => {
  if(item.id === update.id){
    return {
        ...item,
        ...update.changes
    }
  }else{
      return {...item}
  }
})

console.log(newProducts2)
console.log(newProducts3)