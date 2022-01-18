
//A função só será avaliada depois de passar todos os parâmetros

function TextWithSizeBetween(min) {
    return function (max) {
        return function (err) {
            return function (text) {
                const size = (text || '').trim().length

                if (size < min || size > max) {
                    throw err
                }
            }
        }
    }

}

const forceDefaultSize = TextWithSizeBetween(4)(255)
const forceProductValidName = forceDefaultSize('Nome do produto inválido!')

const p1 = { name: 'A', price: 14.99, desc: 0.25 }

forceProductValidName(p1.name)