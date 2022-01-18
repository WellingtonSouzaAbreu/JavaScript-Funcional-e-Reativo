

const nums = [3, 1000, 7, 9, 4, 6]

// Pura
function order(array) {
    return [...array].sort((a, b) => a - b) // Usar o spread evita de alterar o array original, sem efeitos colateráis observáveis
}

console.log(order(nums))
console.log(nums)

const numbersPart = nums.slice(4)

console.log(numbersPart, nums)