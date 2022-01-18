// Closure é quando uma função "lembra"
// seu escopo léxico, mesmo quando a função é executada fora o escopo

const {somarXMais3} = require('./closureEscope.js')

const x = 1000

console.log(somarXMais3())