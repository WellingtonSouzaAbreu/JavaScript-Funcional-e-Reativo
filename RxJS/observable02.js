const { Observable, noop } = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso!')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que problema??')
    }
})

obs.subscribe(
    (value) => console.log(`Value: ${value}`), // Recebe resposta
    noop, // (err) => console.log(`Error: ${err}`),  // Recebe erro
    () => console.log('End!') // Encera com complete()
)

obs.subscribe({
    next(value) {
        console.log(`Value: ${value}`)
    },
    error(err) {
        console.log(`Error: ${err}`)
    },
    complete() {
        console.log('End!')
    }
})