const { Observable, from } = require('rxjs')

function createPipeableOperator(operatorFunction) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFunction(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (err => subscriber.error(err)),
                complete: sub.complete || (_ => subscriber.complete())
            })
        })
    }
}

function first() {
    return createPipeableOperator((subscriber) => ({ // Pode-se aplicar Currying
        next(value) {
            subscriber.next(value)
            subscriber.complete()
        },
    }))
}

function none() {
    return createPipeableOperator((subscriber) => ({ // Pode-se aplicar Currying
        next() {
            console.log('None...')
            subscriber.complete()
        },
    }))
}

function last() {
    let last
    return createPipeableOperator((subscriber) => ({ // Pode-se aplicar Currying
        next(value) {
            last = value
        },
        complete() {
            subscriber.next(last)
            subscriber.complete()
        }
    }))
    return function (source) {
        return Observable.create(subscriber => {
            let last
            source.subscribe({
                next(value) {
                    last = value
                },
                complete() {
                    subscriber.next(last)
                    subscriber.complete()
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(
        // first(),
        // none(),
        last()
    )
    .subscribe(console.log)