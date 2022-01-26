// Esperar 3000ms
// Depois gerar números á cada 500ms



const { timer } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(num => {
    console.log(`#1 Gerou o número: ${num}`)
})

const sub2 = obs.subscribe(num => {
    console.log(`#2 Gerou o número: ${num}`)
})

sub1.add(sub2) //Adicionar uma subscrição dentro de outra, ao parar uma para todas

// Depois de 5000ms chamar o unsubscribe
setTimeout(() => {
    sub1.unsubscribe()
    sub2.unsubscribe()
}, 5000)