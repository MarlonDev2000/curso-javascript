let diaDaSemana = 10
let diaNome = ""

switch(diaDaSemana) {
  case 1:
    diaNome = "Segunda-Feira"
    break
  case 2:
    diaNome = "Terça-Feira"
    break
  case 3:
    diaNome = "Quarta-Feira"
    break
  case 4:
    diaNome = "Quinta-Feira"
    break
  case 5:
    diaNome = "Sexta-Feira"
    break
  case 6:
    diaNome = "Sábado"
    break
  case 7:
    diaNome = "Domingo"
    break
  default:
    diaNome = "Selecione um dia entre 1 e 7"
    break
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome

// Caso nenhuma condição seja verdadeira, com base na lógica do switch, a estrutura utilizada para esses casos será a: default.