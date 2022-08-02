
// Trocando atributos de um elemento
function trocarAnimal(filename, animal) {
  document.querySelector('.imagem').setAttribute('src', 'images/'+filename)
  document.querySelector('.imagem').setAttribute('data-animal', animal)
}


// Pegando atributos de um elemento
function pegarAnimal() {
  let animal = document.querySelector('.imagem').getAttribute('data-animal')
  alert("O animal é: "+animal)
}

// A função setAttribute no JavaScript realiza: Uma mudança de atributos existentes em elementos como button, por exemplo.