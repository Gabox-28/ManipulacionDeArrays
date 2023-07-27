const totals = [1,2,3,4]

const newArray = totals.reduce((suma, item) => suma + item, 0)

console.log("Array original", totals)
console.log("Array nuevo", newArray)