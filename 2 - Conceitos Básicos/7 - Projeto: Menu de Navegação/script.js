let botao = document.querySelector('#menu-opener')
let fecharMenu = document.querySelector('#menu-area')
let fechado = true // variável flag(controle)

function abrirMenu() {
  if(fechado === true) {
    fecharMenu.style.width = '200px'
    fechado = false
  }else {
    fecharMenu.style.width = '0px'
    fechado = true
  }
}

// Trabalhando com JS é possível observar que a manipulação de classes CSS deve ser corretamente feita de forma?
// R: Discreta, com os métodos do método classList.