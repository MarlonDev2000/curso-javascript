// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function alertar() {
  alert('Opa, tudo bem??')
}

let nome = "Marlon"
setTimeout(alertar, 2000)
let sobrenome = "Braga"
console.log(`NOME COMPLETO: ${nome} ${sobrenome}`)