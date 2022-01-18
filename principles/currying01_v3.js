
//A função só será avaliada depois de passar todos os parâmetros

function TextWithSizeBetween(min) {
    return function (max) {
        return function (err) {
            return function (text) {
                const size = (text || '').trim().length

                if (size < min || size > max) {
                    throw err
                }

                return 'valid'
            }
        }
    }

}

function aplyValidation(fn) {
    return function (value) {
        try {
            fn(value)
        } catch (err) {
            return { error: err }
        }
    }
}

const forceDefaultSize = TextWithSizeBetween(4)(255)
const forceProductValidName = forceDefaultSize('Nome do produto inválido!')
const validadeProductName = aplyValidation(forceProductValidName)

const p1 = { name: 'A', price: 14.99, desc: 0.25 }
const p2 = { name: 'AB', price: 14.99, desc: 0.25 }

console.log(validadeProductName(p1.name))
console.log(validadeProductName(p2.name))