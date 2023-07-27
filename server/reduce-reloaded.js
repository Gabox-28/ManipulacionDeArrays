const items = [1, 3, 2, 3]

const newArray = items.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1
    }else{
        obj[item] = obj[item] + 1
    }

    return obj
}, {})

console.log("Array Original", items)
console.log("Array Nuevo", newArray)

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "high",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "high",
    },
]

const newData = data.reduce((obj, currentValue) => {
    if(currentValue.level === "low"){
        obj.low += 1
    }else if(currentValue.level === "medium"){
        obj.medium += 1
    }else if(currentValue.level === "high"){
        obj.high += 1
    }

    return obj
}, {low: 0, medium: 0, high: 0})

console.log("Array Original", data)
console.log("Array Nuevo", newData)

const newData2 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});


console.log("Array Original", data)
console.log("Array Nuevo", newData2)

const numbers = [4, 2, 8, 9, 1, 5, 7, 5, 2, 8, 10, 3, 2, 7, 6, 4, 6, 7, 10, 3]

const newNumbers = numbers.reduce((obj, currentValue) => {
    if(currentValue >= 1 && currentValue <= 5){
        obj["1-5"] += 1
    }else if(currentValue >= 6 && currentValue <= 8){
        obj["6-8"] += 1
    }else if(currentValue >= 9 && currentValue <= 10){
        obj["9-10"] += 1
    }

    return obj
}, {"1-5": 0, "6-8": 0, "9-10": 0})

console.log("Array Original", numbers)
console.log("Array Nuevo", newNumbers)