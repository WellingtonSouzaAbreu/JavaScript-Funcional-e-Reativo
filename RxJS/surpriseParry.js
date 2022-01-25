// Observer é o interessado no evento
// Subject é o "porteiro", que detecta que um evento foi acionado

const readline = require('readline')

function getResponse(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise(resolve => {
        rl.question(question, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

// Observer
function girlfriend() {
    console.log('N: Apagar as luzes...')
    console.log('N: Pedir silêncio...')
    console.log('N: Surpresa!!!')
}

// Observer
function syndicate() {
    console.log('S: Monitorando barulho...')
}

// Subject
async function concierge(interesteds) {
    while (true) {
        const resp = await getResponse('O namorado chegou? (s/N/q) ')
        if (resp.toLowerCase() === 's') {
            (interesteds || []).forEach((obs) => obs())
        } else {
            if (resp.toLowerCase() === 'q') {
                break
            }
        }
    }
}

// Dois observadores registrados
concierge([girlfriend, syndicate])
