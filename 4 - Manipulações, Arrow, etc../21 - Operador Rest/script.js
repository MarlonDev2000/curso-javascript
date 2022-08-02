let adicionar = (...numeros) => {
  console.log(numeros)
}
adicionar(5,6,7,8,9,10)


// EXERCICIO

let adicionarNomes = (nomes, ...novosNomes) => {
  let outrosNomes = [
    ...nomes,
    ...novosNomes
  ]
  return outrosNomes
}
let nomes = ["Marlon", "Higino"]
let outros = adicionarNomes(nomes, "Heitor", "Maria")

console.log(outros)