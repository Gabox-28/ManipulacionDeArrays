const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newArray = words.filter(item => item.length >= 6)

console.log("Array original", words)
console.log("Array nuevo", newArray)

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const newOrders = orders.filter(item => item.delivered && item.total >= 100)

console.log("Array original", orders)
console.log("Array nuevo", newOrders)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log("Busqueda", search('Val'))