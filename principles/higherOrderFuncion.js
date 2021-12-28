/* 
    Funções que operam outras funções tomando como argumento ou retornando-as
*/

function exec(fn, ...params) {
    return fn(...params)
}

function sum(a, b, c) {
    return a + b + c
}

console.log(exec(sum, 1,2,3))