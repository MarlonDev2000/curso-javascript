/* FUNÇÃO PADRÃO
function somar(x ,y) {
  return x + y
}
*/

/* FUNÇÃO EM UMA VARIÁVEL
let somar = function(x,y) {
  return x + y
}
*/

/*
// ARROW FUNCTION RETORNO EXPLICITO
let somar = (x,y) => {
  return x + y
}
*/

// ARROW FUNCTION RETORNO IMPLÍCITO
let somar = (x,y) => x + y
console.log(somar(10,5))

// // ARROW FUNCTION RETORNO IMPLÍCITO E SEM OS PARENTESES POR CAUSA DE SO 1 PARÂMETRO 
let letrasNoNome = nome => nome.length
console.log(letrasNoNome('Marlon'))


// EXERCÍCIO
let aviso = (dia) => console.log(`Hoje é ${dia}`)
aviso('Sexta-feira')
