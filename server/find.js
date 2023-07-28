const numbers = [1,32,53,22,54,12]

const respuesta = numbers.find(item => item === 32)

console.log(respuesta)

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
]

const respuesta2 = products.find(item => item.id === '🍔')

console.log(respuesta2)

const respuesta3 = products.findIndex(item => item.id === '🍔')

console.log(respuesta3)