// Os dois tipo...

// Operadores de criação
const { of } = require('rxjs')

// Operadores encadeáveis(Pipeable Op.)
const { last, first, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'ultimo') // Todos
    .subscribe(function (value) {
        console.log(`O valor gerado foi: ${value}`)
    })

    console.log('\n\n')

of(1, 2, 'ana', false, 'ultimo') // Somente o último
    .pipe(last())
    .subscribe(function (value) {
        console.log(`O valor gerado foi: ${value}`)
    })