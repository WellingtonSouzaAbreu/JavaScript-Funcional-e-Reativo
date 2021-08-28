
const waitFor = (time = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Já esperei!')
        }, time)
    })
}

const execute = async () => {
    await waitFor(1500)
    console.log('Async/Await 1...')

    await waitFor(3000)
    console.log('Async/Await 2...')

    await waitFor(1000)
    console.log('Async/Await 3...')
}

execute()


