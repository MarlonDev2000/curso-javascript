function azul() {
  limpar()
  document.getElementById("titulo").classList.add('azul')
}

function vermelho() {
  limpar()
  document.getElementById("titulo").classList.add('vermelho')
}

function verde() {
  limpar()
  document.getElementById("titulo").classList.add('verde')
}

function limpar(){
  document.getElementById("titulo").classList.remove("azul")
  document.getElementById("titulo").classList.remove("vermelho")
  document.getElementById("titulo").classList.remove("verde")
}

function mostrarTelefone(elemento) {
  document.getElementById("telefone").style.display = 'block'
  elemento.style.display = 'none'
}

// Para alterarmos o estilo das propriedades HTML, ao pegarmos um elemento pelo id dele, devemos utilizar a propriedade:style.