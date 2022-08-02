let lista = [45, 4, 9, 16, 25]
let lista2 = []


// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
lista2 = lista.map(function(item) {
  return item * 2
})

// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida
lista2 = lista.filter(function(item) {
  if(item >= 20) {
    return true
  } else {
    return false
  }
})

// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
lista2 = lista.every(function(item) {
  return (item > 3) ? true : false
})


let res = lista2
console.log(res)


let idadesFakes = [90, 46, 150, 66]; 
let idadeReais = idadesFakes.map((item) => { return item / 2; }) 
console.log(idadeReais)

// 45, 23, 75, 33