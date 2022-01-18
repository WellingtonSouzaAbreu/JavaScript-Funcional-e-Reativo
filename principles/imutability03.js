// Por padrão, objetos tem seu valores atribuidos por referência
// Variáveis simples são atribuídas por valor

const people = {
    name: 'Maria',
    height: 1.76,
    city: 'São Paulo',
    address: {
        district: 'Centro'
    }
}

// Atribuição por referência //Impura!
const newPeople = people

people.name = 'Wellington'
 
// Passagem por referência  //Impura!
function modifyPeopleHeight(peo){
    // Clone raso
    const newPeo = {...peo} //Spread não permite que seja alterado fora da função
    newPeo.height = 1.90

    // newPeo.address = {...peo.address} 
    newPeo.address.district = 'Favela' // O clone raso faz com que os sub-objetos sejam referenciados
}

modifyPeopleHeight(people)

console.log(people)
console.log(newPeople)
console.log()

let a = 3
let b = a //Atribuição por valor

a++

console.log(a, b)

