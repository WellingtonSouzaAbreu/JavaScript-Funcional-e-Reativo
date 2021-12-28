/* 
    Fuções puras facilitam testes por não usar nada externo

    Acesso aos arquivos externos são impuros

    Acesso ao banco de dados são funções impuras
*/

let numberOfExecutions = 0

// Função pura!
function sum(a, b) {
    numberOfExecutions++ // Efeito colateral observável - altera parâmetros fora do escopo
    return a + b
}

console.log(sum(2,5))
console.log(sum(2,5))
console.log(numberOfExecutions)
