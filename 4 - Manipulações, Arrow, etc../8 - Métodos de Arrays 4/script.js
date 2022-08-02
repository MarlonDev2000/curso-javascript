let lista = [22, 55, 70, 96]
let lista2 = []

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
lista2 = lista.find(function(item) {
  return (item === 16) ? true : false
})

// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
lista2 = lista.findIndex(function(item) {
  return (item === 70) ? true : false
})

let res = lista2
console.log(res)




// EXERCÍCIO

let listaPessoa = [
  {id: 1, nome: 'Marlon', sobrenome: 'Braga'},
  {id: 2, nome: 'Heitor', sobrenome: 'Braga'},
  {id: 3, nome: 'Higino', sobrenome: 'Braga'}
]

let pessoa = listaPessoa.find(function(item) {
  return (item.nome === 'Heitor') ? true : false
})
let resposta = pessoa
console.log(resposta)

