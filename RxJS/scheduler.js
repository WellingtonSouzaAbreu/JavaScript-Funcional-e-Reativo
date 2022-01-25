const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Start...')

from([1, 2, 3, 4, 5, 6, 7, 8, 9])
    .pipe(observeOn(asyncScheduler)) // Atribui o comportamento assíncrono
    .subscribe(console.log)

console.log('End...')