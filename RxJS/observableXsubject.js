// Subject é um tipo especial de Observable

const { Observable, Subject, Subscriber } = require('rxjs')

// OBSERVABLE

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('Observable...')
            subscriber.next(Math.random())
        }, 1000)
    })
}

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

// SUBJECT

function getSubject() {
    const sub = new Subject()

    setTimeout(() => {
        console.log('\nSubject...')
        sub.next(Math.random())
    }, 1000)

    return sub
}

const sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)