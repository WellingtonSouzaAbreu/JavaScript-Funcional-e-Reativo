function composition(fn1, fn2) {
    return function (value) {
        return fn2(fn1(value))
    }
}

function shoutOut(text) {
    return text.toUpperCase()
}

function toEmphasize(text) {
    return `${text}!!!`
}

// Bad composition
function badComposition(text) {
    const textShouted = shoutOut(text)
    const textEmphasize = toEmphasize(textShouted)
    return textEmphasize
}

const fragment =  composition(
    shoutOut,
    toEmphasize
)

console.time('#1')
console.log(
    fragment('Para')
)
console.timeEnd('#1')

console.time('#2')
console.log(badComposition('Não para'))
console.timeEnd('#2')

