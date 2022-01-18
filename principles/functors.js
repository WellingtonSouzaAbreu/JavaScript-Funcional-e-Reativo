// Functors são objetos que implementam a função MAP
// E que também é um "wrapper" de um valor

// Array é um tipo de FUNCTORS
const nums = [1, 2, 3, 4, 5, 6]



function SectureType(value) {
    return {
        value: value,
        isInvalid() {
            return this.value === null || this.value === undefined
        },
        map(fn) {
            if (this.isInvalid()) {
                return SectureType(null)
            } else {
                const newValue = fn(this.value)
                return SectureType(newValue)
            }
        }
    }
}

const result = SectureType('This is my text')
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .map(t => t.split('').join(' '))

console.log(result.value)

