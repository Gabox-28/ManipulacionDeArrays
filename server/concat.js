const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const resultado = numbers1.concat(numbers2)
console.log(resultado)

const resultado2 = [...numbers1, ...numbers2]
console.log(resultado2)

const resultado3 = [...numbers1, 'hola']
console.log(resultado3)

const resultado4 = [...numbers1, ...'hola']
console.log(resultado4)

const resultado5 = numbers1.concat('hola')
console.log(resultado5)

const resultado6 = numbers1.push(...numbers2)
console.log(resultado6)