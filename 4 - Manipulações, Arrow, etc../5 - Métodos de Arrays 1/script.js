let lista = ['Ovo', 'Farinha', 'Corante', 'Massa']

let resposta = lista

// O método toString() retorna uma string representando um array específico e seus elementos.
// * console.log(resposta.toString())

// O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
// *console.log(resposta.join('-'))

// O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
// * console.log(resposta.indexOf('Corante'))

// O método pop() remove o último elemento de um array e retorna aquele elemento.
// * console.log(resposta.pop())

// O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
// * console.log(resposta.shift())

// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
// * console.log(resposta.push('Prato'))


// Dado o seguinte array:
let jogos = ['God of War', 'The Witcher', 'GTA 5'];

// Como adicionar o item Call of Duty ao array jogos usando JavaScript?
jogos.push('Call of Duty')
console.log(jogos)