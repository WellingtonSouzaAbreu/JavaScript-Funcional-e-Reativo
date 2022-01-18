function composition(...fns) {
    return function (value) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) { // Verifica se é uma promise
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, value)
    }
}

function shoutOut(text) {
    return text.toUpperCase()
}

function toEmphasize(text) {
    return `${text}!!!`
}

function slowDown(text) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(text.split('').join(' '))
        }, 3000)
    })
}

composition(
    shoutOut,
    toEmphasize,
    slowDown
)('Para').then(res => console.log(res))

