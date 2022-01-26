const { of, Observable, pipe } = require('rxjs')


function lastedWith(termination) {
    return function (source) {
        return Observable.create((subscriber) => {
            source.subscribe({
                next(value){
                    if(value.endsWith(termination)){
                        subscriber.next(value)
                    }
                },
                error(err){
                    subscriber.error(err)
                },
                complete(){
                    subscriber.complete()
                }
            })
        })
    }
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(lastedWith('Silva'))
    .subscribe(console.log)