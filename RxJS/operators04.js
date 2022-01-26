const { Observable, from } = require('rxjs')

function first() {
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(value){
                    subscriber.next(value)
                    subscriber.complete()
                }
            })
        })
    }
}

function last(){
    return function(source){
        return Observable.create(subscriber => {
            let last
            source.subscribe({
                next(value){
                    last = value
                },
                complete(){
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
        last()
    )
    .subscribe(console.log)