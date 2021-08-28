// Função construtora

function Carro(model, numberOfWheels) {
    this.model = model
    this.numberOfWheels = numberOfWheels
    let property = 'Nobody'

    this.acelerate = () => console.log('Vrruuuun!')
    this.showProperty = () => console.log(`Proprietário: ${property}`)
    this.setProperty = (propertyOut) => property = propertyOut
}

const fusca = new Carro('Fusca', 33)

fusca.showProperty()
fusca.setProperty('Wellington')
fusca.showProperty()

// Sintaxe sugar v

class Product {
    constructor(name, type, price) {
        this._name = name // Underline indica que o atributo será acessado por um GETTER
        this.type = type
        this._price = price
    }

    set name(newName) {
        this.name = newName
    }

    get name() {
        return `Nome: ${this._name}`
    }

    showInfo = () => {
        console.log(`Name: ${this._name}, Type: ${this.type}, Price: ${this._price}`)
    }
}

const pen = new Product('Caneta', 'Utencílio', 'R$ 10,00')

pen.showInfo()

Object.defineProperty(Product.prototype, 'price', {
    get: function () {
        return `Valor: ${this._price}`
    },
})

console.log(pen.name)
console.log(pen.price)