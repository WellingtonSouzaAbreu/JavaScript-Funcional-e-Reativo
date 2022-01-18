const numbers = [4,8,3,2,9,1,9,3]

// Dados mutáveis
let total = 0

for (let i = 0; i < numbers.length; i++){
    total += numbers[i]
}

console.log(total)


// Reduce - dados imutáveis
const somar = (a, b) => a + b
const totalReduce = numbers.reduce(somar)
console.log(totalReduce)


// Recursividade

function sumArray(array, total = 0){
    if(!array.length) return total

    return sumArray(array.slice(1), total + array[0])
}

console.log(sumArray(numbers))