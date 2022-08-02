// ARRAYS
let numeros = [1,2,3,4]
let outrosNumeros = [...numeros, 5,6,7,8]
console.log(outrosNumeros)


// OBJETOS
let info = {
  nome: 'Marlon',
  sobrenome: 'Braga',
  idade: 90
}

let novaInfo = {
  ...info,
  cidade: 'Goiania',
  estado: 'Goias',
  pais: 'Brasil'
}

// UTILIZANDO EM FUNÇÕESs
let adicionarInfo = (info) => {
  let novasInfo = {
    ...info,
    status: 0,
    token: 'ewajeiawje@||',
    dataCadastro: '2022'
  }
  return novasInfo
}

console.log(adicionarInfo({
  nome: 'Marlon',
  sobrenome: 'Braga'
}))
