function generateNumbers(fn) {
    return {
        start(fn) {
            let num = 0
            setInterval(() => {
                fn(num++)
            }, 1000)
        }
    }

}

generateNumbers(number => {
    console.log(`#1: ${number * 2}`)
})

generateNumbers(a => {
    console.log(`#2: ${a + 100}`)
})