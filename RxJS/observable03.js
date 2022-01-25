const { Observable, noop, subscribeOn } = require('rxjs')

const between = (min, max) => {
    if (min > max) [min, max] = [max, min]

    return new Observable(subscriber => {
        for (let i = min; i <= max; i++) {
            subscriber.next(i)
        }
        subscriber.complete()
    })
}

between(4, 10)
    .subscribe(
        num => console.log(`Num: ${num}`),
        noop,
        () => console.log('Acabou-se')
    )

const obs = new Observable((observer, param) => {
    observer.next()
})

function cnl() {
    return console.log('I am observer!')
}

/*
obs.subscribe(cnl, 1) */ 