const {interval} = require('rxjs')

// Observable
const generateNumbers = interval(500)

// Cadastrar observador
const sub1 = generateNumbers.subscribe(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() => sub1.unsubscribe(), 8000) //Remover observador, avisar ao subject