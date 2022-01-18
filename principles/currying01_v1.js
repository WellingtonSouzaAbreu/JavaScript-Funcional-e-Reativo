// Passar parâmetros de forma parcial para uma função

// No Curring
function sum(a, b, c) {
    return a + b + c
}
console.log(sum(1, 2, 3))

// With Curring
function sumCurrying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(sumCurrying(1)(2)(3))

//

function TextWithSizeBetween(min, max, err, text) {
    const size = (text || '').trim().length

    if (size < min || size > max) {
        throw err
    }
    return true
}

const p1 = { name: 'A', price: 14.99, desc: 0.25 }

TextWithSizeBetween(4,255,'Nome inválido', p1.name)




