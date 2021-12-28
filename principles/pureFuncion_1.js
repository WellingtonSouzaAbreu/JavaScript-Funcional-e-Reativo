/* 
    Uma função pura é uma função em que o valor de retorno é determinado APENAS 
    por seus valores de entrada
    
    Não possui efeitos colaterais observáveis externamente

    Priorizar funções impuras
*/


// const PI = 3.14

// Impura - PI é um valor externo
function areaCircImpure(raio) {
    return raio * raio * Math.PI //Estável, mas ainda é impura
}

console.log(areaCircImpure(10))

// Pura - PI é um valor de entrada
function areaCircPure(raio, pi) {
    return raio * raio * pi //Estável, mas ainda é impura
}

console.log(areaCircPure(10, Math.PI))


