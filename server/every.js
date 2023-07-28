const numbers = [1,30,43,12,24,64]

const respuesta = numbers.every(item => item <= 65)

console.log(respuesta)

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
]

const respuesta2 = team.every(item => item.age <= 15)

console.log(respuesta2)
