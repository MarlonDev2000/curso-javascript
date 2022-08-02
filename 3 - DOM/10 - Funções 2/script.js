
// Utilizando parâmetros nas funções 
function alterar(titulo) {
  document.querySelector('#exemplo').innerHTML = titulo
}
alterar('Titulo Trocado!!')



// Utilizando parâmetros nas funções para somar dois valores
function somar(x, y) {
  let total = x + y
  console.log(total)
}
somar(15, 22)



// Utilizando parâmetros nas funções para somar dois valores e retornar o resultado para a própria função
function somarComReturn(x, y) {
  let total = x + y
  return total
}
let resultado = somarComReturn(25, 32)
console.log(resultado)



// Qual será o resultado da função a seguir no console? 18.
function operacao(a, b, c) {
  return (a - b) * c;
}

let resultadoNovo = operacao(4, 2, 9);
console.log(resultado);