/* 
    First Class Function é quando uma função é tratada como variável
 */

const x = 3
const y = function(txt){
    return `Esse é o texto: ${txt}`
}

console.log(y('Aoba!'))