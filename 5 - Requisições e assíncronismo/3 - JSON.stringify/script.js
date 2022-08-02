// O método JSON.stringify() converte valores em javascript para uma String  JSON. Esses valores podem ser substituidos especificando a função replacer, ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.

let pessoa = {
  nome: 'Marlon',
  idade: 90,
  caracteristicas: ['sorridente','maravilhoso','top'],
  estetica: {
    altura: 1.75,
    peso: 60
  }
}

let pessoaStringify = JSON.stringify(pessoa)


let curso = JSON.stringify('B7Web'); 
console.log(curso);