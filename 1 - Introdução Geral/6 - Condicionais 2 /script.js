var hora = 18

if(hora < 12) {
  console.log("Bom dia")
} else if (hora < 18) {
  console.log("Boa tarde")
} else if (hora <= 23) {
  console.log("Boa noite")
}

// && = É
if (hora >= 12 && hora < 18) {
  console.log("Boa tarde")
}

// || = Ou
if (hora == 12 || hora == 18) {
  console.log("Voce está na hora do rush!")
}

// O comando ELSE IF é um(uma): Uma estrutura de decisão para ser inserida caso haja mais de duas condições.