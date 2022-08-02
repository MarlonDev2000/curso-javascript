let lista = ['ovo', 'macarrao', 'feijao', 'pipoca']
console.log(Object.entries(lista))


let pessoa = {
  nome: 'Marlon',
  sobrenome: 'Braga',
  idade: 90
}

console.log(Object.keys(pessoa))

// EXERICIO 
let carro = {
  modelo: 'Hilux',
  cor: 'Vermelha',
  ano: 2021,
  valor: {
  avista: '200 mil',
  prazo: '300 mil'
  }
}

console.log(Object.values(Object.keys(carro.valor)))