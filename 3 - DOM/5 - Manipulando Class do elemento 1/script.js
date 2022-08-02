function verde() {
  limpar()
  document.querySelector('#exemplo').classList.add('verde')
}

function vermelho() {
  limpar()
  document.querySelector('#exemplo').classList.add('vermelho')
}

function azul() {
  limpar()
  document.querySelector('#exemplo').classList.add('azul')
}

function limpar() {
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.remove('vermelho')
  document.querySelector('#exemplo').classList.remove('azul')
}

// Das alternativas a seguir, qual não se trata de um comando usado no javascript para manipulação de classes? .upClass()