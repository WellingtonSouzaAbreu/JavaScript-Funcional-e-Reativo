
const nums = [3, 1, 7, 9, 4, 6]

// Pura
function order(array) {
    return [...array].sort() // Usar o spread evita de alterar o array original
}

console.log(order(nums))

console.log(nums)